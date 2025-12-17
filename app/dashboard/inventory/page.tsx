'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  Plus,
  Package,
  AlertTriangle,
  Snowflake,
  Calendar,
  TrendingDown,
  TrendingUp,
  DollarSign,
  MoreVertical,
  Eye,
  Edit,
  RotateCcw,
  RefreshCw,
  Upload,
  Download as DownloadIcon,
  CheckCircle,
  XCircle,
  Loader2,
} from 'lucide-react';
import { InventoryViewModal, InventoryEditModal, InventoryItem } from '@/components/dashboard/inventory';
import { exportInventory } from '@/lib/utils/csv-export';
import { allProducts, toInventoryItem, getInventoryStatus } from '@/lib/data/products';

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  // Sync states
  const [syncInProgress, setSyncInProgress] = useState(false);
  const [syncDirection, setSyncDirection] = useState<'to_odoo' | 'from_odoo' | null>(null);
  const [syncResults, setSyncResults] = useState<{
    success: number;
    failed: number;
    total: number;
    message: string;
  } | null>(null);

  // Action handlers
  const handleAddItem = () => {
    window.location.href = '/dashboard/inventory/new';
  };

  const handleReorder = async (id: string, itemName: string) => {
    const quantity = prompt(`Reorder ${itemName}\n\nEnter quantity to order:`);
    if (!quantity || isNaN(Number(quantity))) {
      return;
    }

    try {
      // In a real implementation, you would get the product_id from Odoo
      // For now, this demonstrates the API integration
      const response = await fetch('/api/dashboard/inventory/reorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [
            {
              product_id: parseInt(id.replace('INV-', '')), // Mock: convert INV-001 to product ID
              quantity: parseInt(quantity),
            }
          ],
          notes: `Manual reorder from dashboard for ${itemName}`,
          auto_confirm: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        const order = result.data.orders[0];
        alert(
          `Purchase Order Created!\n\n` +
          `PO Number: ${order.po_number}\n` +
          `Supplier: ${order.supplier}\n` +
          `Total: $${order.total.toFixed(2)}\n` +
          `Items: ${order.items}\n` +
          `Expected Delivery: ${new Date(order.expected_delivery).toLocaleDateString()}\n\n` +
          `Status: Draft (pending approval in Odoo)`
        );
      } else {
        alert(`Error creating purchase order:\n${result.message || result.error}`);
      }
    } catch (error) {
      console.error('Reorder error:', error);
      alert('Failed to create purchase order. Please check console for details.');
    }
  };

  const handleViewItem = (item: InventoryItem) => {
    setSelectedItem(item);
    setViewModalOpen(true);
  };

  const handleEditItem = (item: InventoryItem) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };

  const handleExport = () => {
    exportInventory(filteredItems);
  };

  const handleEditSuccess = (updatedItem: any) => {
    // In a real application, this would update the items list
    console.log('Item updated:', updatedItem);
    // Optionally refresh the data or update the local state
  };

  const handleSyncToOdoo = async () => {
    setSyncInProgress(true);
    setSyncDirection('to_odoo');
    setSyncResults(null);

    try {
      const response = await fetch('/api/odoo/sync/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          direction: 'to_odoo',
          items: filteredItems.map(item => ({
            id: item.id,
            medication_name: item.medicationName,
            ndc: item.ndc,
            current_stock: item.currentStock,
            min_stock: item.minStock,
            max_stock: item.maxStock,
            reorder_point: item.reorderPoint,
            unit_price: item.unitPrice,
            manufacturer: item.manufacturer,
            dosage_form: item.dosage,
            cold_chain_required: item.coldChain,
            controlled_substance: false,
            lot_number: item.lotNumber,
            expiration_date: item.expirationDate,
            pharmacy_id: 'pharmacy-1', // Mock pharmacy ID
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })),
          dryRun: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSyncResults({
          success: result.data.successCount,
          failed: result.data.failedCount,
          total: result.data.totalCount,
          message: `Successfully synced ${result.data.successCount} items to Odoo`,
        });
      } else {
        throw new Error(result.message || 'Sync failed');
      }
    } catch (error) {
      console.error('Sync to Odoo error:', error);
      setSyncResults({
        success: 0,
        failed: filteredItems.length,
        total: filteredItems.length,
        message: error instanceof Error ? error.message : 'Sync failed',
      });
    } finally {
      setSyncInProgress(false);
      setSyncDirection(null);
    }
  };

  const handleSyncFromOdoo = async () => {
    setSyncInProgress(true);
    setSyncDirection('from_odoo');
    setSyncResults(null);

    try {
      const response = await fetch('/api/odoo/sync/inventory', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await response.json();

      if (result.success) {
        setSyncResults({
          success: result.data.products?.length || 0,
          failed: 0,
          total: result.data.products?.length || 0,
          message: `Successfully synced ${result.data.products?.length || 0} items from Odoo`,
        });

        // In production, you would update the local state with the synced data
        console.log('Synced products from Odoo:', result.data.products);
      } else {
        throw new Error(result.message || 'Sync failed');
      }
    } catch (error) {
      console.error('Sync from Odoo error:', error);
      setSyncResults({
        success: 0,
        failed: 0,
        total: 0,
        message: error instanceof Error ? error.message : 'Sync failed',
      });
    } finally {
      setSyncInProgress(false);
      setSyncDirection(null);
    }
  };

  // Inventory data from shared product data source (INR prices)
  const inventoryItems: InventoryItem[] = allProducts
    .filter(product => product.inventory)
    .map(product => {
      const inv = product.inventory!;
      return {
        id: product.id,
        medicationName: `${product.brandName} (${product.genericName})`,
        ndc: product.ndc || product.id,
        category: product.category,
        manufacturer: product.manufacturer,
        dosage: product.dosageForm,
        currentStock: inv.currentStock,
        minStock: inv.minStock,
        maxStock: inv.maxStock,
        unitPrice: product.price || 0,
        expirationDate: inv.expirationDate,
        lotNumber: inv.lotNumber,
        coldChain: product.coldChain,
        status: getInventoryStatus(product),
        lastRestocked: inv.lastRestocked,
        reorderPoint: inv.reorderPoint,
        monthlyUsage: inv.monthlyUsage,
      };
    });

  const statusCounts = {
    all: inventoryItems.length,
    critical: inventoryItems.filter(i => i.status === 'critical').length,
    low: inventoryItems.filter(i => i.status === 'low').length,
    'in-stock': inventoryItems.filter(i => i.status === 'in-stock').length,
    expiring: inventoryItems.filter(i => i.status === 'expiring').length,
  };

  const totalInventoryValue = inventoryItems.reduce(
    (sum, item) => sum + item.currentStock * item.unitPrice,
    0
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'low':
        return 'bg-orange-100 text-orange-800';
      case 'in-stock':
        return 'bg-green-100 text-green-800';
      case 'expiring':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDaysUntilExpiration = (expirationDate: string) => {
    const today = new Date();
    const expDate = new Date(expirationDate);
    const diffTime = expDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch =
      item.medicationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ndc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
        <p className="text-gray-600 mt-1">Track and manage medication stock levels</p>
      </div>

      {/* Sync Results Banner */}
      {syncResults && (
        <div className={`mb-6 p-4 rounded-lg border ${
          syncResults.failed === 0
            ? 'bg-green-50 border-green-200'
            : 'bg-yellow-50 border-yellow-200'
        }`}>
          <div className="flex items-start gap-3">
            {syncResults.failed === 0 ? (
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            )}
            <div className="flex-1">
              <h3 className={`font-medium ${
                syncResults.failed === 0 ? 'text-green-900' : 'text-yellow-900'
              }`}>
                Sync Complete
              </h3>
              <p className={`text-sm mt-1 ${
                syncResults.failed === 0 ? 'text-green-700' : 'text-yellow-700'
              }`}>
                {syncResults.message}
              </p>
              {syncResults.failed > 0 && (
                <p className="text-sm text-yellow-600 mt-1">
                  {syncResults.success} succeeded, {syncResults.failed} failed
                </p>
              )}
            </div>
            <button
              onClick={() => setSyncResults(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Items</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {inventoryItems.length}
              </p>
              <p className="text-xs text-gray-500 mt-1">SKUs in system</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Inventory Value</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                ₹{(totalInventoryValue / 100000).toFixed(1)}L
              </p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-600">+5.2% vs last month</span>
              </div>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Critical Stock</p>
              <p className="text-2xl font-bold text-red-600 mt-1">
                {statusCounts.critical}
              </p>
              <p className="text-xs text-gray-500 mt-1">Need immediate reorder</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Low Stock</p>
              <p className="text-2xl font-bold text-orange-600 mt-1">
                {statusCounts.low}
              </p>
              <p className="text-xs text-gray-500 mt-1">Below reorder point</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <TrendingDown className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, NDC, manufacturer..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>

              {/* Sync Dropdown */}
              <div className="relative group">
                <button
                  disabled={syncInProgress}
                  className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {syncInProgress ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Syncing...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      Sync with Odoo
                    </>
                  )}
                </button>

                {/* Dropdown menu */}
                {!syncInProgress && (
                  <div className="hidden group-hover:block absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <button
                      onClick={handleSyncToOdoo}
                      className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100"
                    >
                      <Upload className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Push to Odoo</div>
                        <div className="text-xs text-gray-500">Send inventory to Odoo</div>
                      </div>
                    </button>
                    <button
                      onClick={handleSyncFromOdoo}
                      className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-gray-50"
                    >
                      <DownloadIcon className="w-4 h-4 text-green-600" />
                      <div>
                        <div className="font-medium text-sm">Pull from Odoo</div>
                        <div className="text-xs text-gray-500">Fetch inventory from Odoo</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={handleAddItem}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                Add Item
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock Status
                  </label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="critical">Critical Stock</option>
                    <option value="low">Low Stock</option>
                    <option value="in-stock">In Stock</option>
                    <option value="expiring">Expiring Soon</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Categories</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Rheumatology">Rheumatology</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Status Tabs */}
        <div className="flex border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              statusFilter === 'all'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            All Items
            <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
              {statusCounts.all}
            </span>
          </button>
          <button
            onClick={() => setStatusFilter('critical')}
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              statusFilter === 'critical'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Critical
            <span className="ml-2 px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
              {statusCounts.critical}
            </span>
          </button>
          <button
            onClick={() => setStatusFilter('low')}
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              statusFilter === 'low'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Low Stock
            <span className="ml-2 px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
              {statusCounts.low}
            </span>
          </button>
          <button
            onClick={() => setStatusFilter('in-stock')}
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              statusFilter === 'in-stock'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            In Stock
            <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
              {statusCounts['in-stock']}
            </span>
          </button>
          <button
            onClick={() => setStatusFilter('expiring')}
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              statusFilter === 'expiring'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Expiring Soon
            <span className="ml-2 px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
              {statusCounts.expiring}
            </span>
          </button>
        </div>

        {/* Inventory Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medication
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monthly Usage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item) => {
                const daysUntilExpiration = getDaysUntilExpiration(item.expirationDate);
                const stockPercentage =
                  ((item.currentStock - item.minStock) / (item.maxStock - item.minStock)) * 100;

                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-gray-900">
                            {item.medicationName}
                          </div>
                          {item.coldChain && (
                            <Snowflake className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.dosage} • NDC: {item.ndc}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.manufacturer} • Lot: {item.lotNumber}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">
                            {item.currentStock}
                          </span>
                          <span className="text-sm text-gray-500">units</span>
                        </div>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              item.status === 'critical'
                                ? 'bg-red-500'
                                : item.status === 'low'
                                ? 'bg-orange-500'
                                : 'bg-green-500'
                            }`}
                            style={{
                              width: `${Math.max(
                                0,
                                Math.min(100, stockPercentage)
                              )}%`,
                            }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Min: {item.minStock} • Max: {item.maxStock}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status === 'in-stock'
                          ? 'In Stock'
                          : item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">
                          ₹{item.unitPrice.toLocaleString('en-IN')}
                        </div>
                        <div className="text-xs text-gray-500">
                          Total: ₹{(item.unitPrice * item.currentStock).toLocaleString('en-IN')}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-900">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.expirationDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                        <div
                          className={`text-xs mt-1 ${
                            daysUntilExpiration < 90
                              ? 'text-red-600'
                              : daysUntilExpiration < 180
                              ? 'text-orange-600'
                              : 'text-gray-500'
                          }`}
                        >
                          {daysUntilExpiration} days remaining
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {item.monthlyUsage} units
                        </div>
                        <div className="text-xs text-gray-500">
                          ~{Math.ceil(item.currentStock / item.monthlyUsage)} months left
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {(item.status === 'critical' || item.status === 'low') && (
                          <button
                            onClick={() => handleReorder(item.id, item.medicationName)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="Reorder item"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleViewItem(item)}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                          title="View item details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEditItem(item)}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                          title="Edit item"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                          title="More options"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Pagination */}
        {filteredItems.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {filteredItems.length} of {inventoryItems.length} items
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <InventoryViewModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        item={selectedItem}
      />

      <InventoryEditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        item={selectedItem}
        onSuccess={handleEditSuccess}
      />
    </div>
  );
}
