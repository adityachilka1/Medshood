'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Pill,
  Snowflake,
  FileText,
  MoreVertical
} from 'lucide-react';

interface Prescription {
  id: string;
  patient_name: string;
  medication: string;
  dosage: string;
  quantity: number;
  status: 'pending' | 'verified' | 'dispensing' | 'shipped' | 'delivered';
  priority: 'high' | 'normal' | 'low';
  cold_chain: boolean;
  prior_auth_required: boolean;
  submitted_at: string;
  doctor: string;
}

// Sample data - replace with Supabase fetch in production
const samplePrescriptions: Prescription[] = [
  {
    id: 'PRX-1234',
    patient_name: 'John Doe',
    medication: 'Ozempic',
    dosage: '0.5mg SC Weekly',
    quantity: 4,
    status: 'pending',
    priority: 'high',
    cold_chain: true,
    prior_auth_required: true,
    submitted_at: '2025-11-13T10:30:00',
    doctor: 'Dr. Sarah Smith'
  },
  {
    id: 'PRX-1235',
    patient_name: 'Jane Smith',
    medication: 'Humira',
    dosage: '40mg SC Injection',
    quantity: 2,
    status: 'verified',
    priority: 'normal',
    cold_chain: true,
    prior_auth_required: true,
    submitted_at: '2025-11-13T09:15:00',
    doctor: 'Dr. Michael Johnson'
  },
  {
    id: 'PRX-1236',
    patient_name: 'Bob Wilson',
    medication: 'Tresiba',
    dosage: '100U/mL FlexTouch',
    quantity: 5,
    status: 'pending',
    priority: 'normal',
    cold_chain: true,
    prior_auth_required: false,
    submitted_at: '2025-11-13T08:45:00',
    doctor: 'Dr. Emily Brown'
  },
  {
    id: 'PRX-1237',
    patient_name: 'Alice Johnson',
    medication: 'Lantus',
    dosage: '100U/mL SoloStar',
    quantity: 3,
    status: 'shipped',
    priority: 'low',
    cold_chain: true,
    prior_auth_required: false,
    submitted_at: '2025-11-12T16:20:00',
    doctor: 'Dr. Robert Davis'
  },
  {
    id: 'PRX-1238',
    patient_name: 'Charlie Brown',
    medication: 'Enbrel',
    dosage: '50mg SC Weekly',
    quantity: 4,
    status: 'dispensing',
    priority: 'high',
    cold_chain: true,
    prior_auth_required: true,
    submitted_at: '2025-11-13T11:00:00',
    doctor: 'Dr. Lisa White'
  }
];

export default function PrescriptionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPrescriptions = samplePrescriptions.filter((prescription) => {
    const matchesSearch =
      prescription.patient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.medication.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || prescription.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || prescription.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700',
      verified: 'bg-green-100 text-green-700',
      dispensing: 'bg-blue-100 text-blue-700',
      shipped: 'bg-purple-100 text-purple-700',
      delivered: 'bg-gray-100 text-gray-700'
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  const getPriorityBadge = (priority: string) => {
    const styles = {
      high: 'bg-red-100 text-red-700',
      normal: 'bg-blue-100 text-blue-700',
      low: 'bg-gray-100 text-gray-700'
    };
    return styles[priority as keyof typeof styles] || styles.normal;
  };

  const getStatusCounts = () => {
    return {
      all: samplePrescriptions.length,
      pending: samplePrescriptions.filter(p => p.status === 'pending').length,
      verified: samplePrescriptions.filter(p => p.status === 'verified').length,
      dispensing: samplePrescriptions.filter(p => p.status === 'dispensing').length,
      shipped: samplePrescriptions.filter(p => p.status === 'shipped').length,
      delivered: samplePrescriptions.filter(p => p.status === 'delivered').length
    };
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Prescriptions</h2>
          <p className="text-gray-600 mt-1">Manage and track all prescription orders</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          <FileText className="w-4 h-4" />
          New Prescription
        </button>
      </div>

      {/* Status tabs */}
      <div className="bg-white rounded-xl shadow-sm p-2">
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All', count: statusCounts.all },
            { key: 'pending', label: 'Pending', count: statusCounts.pending },
            { key: 'verified', label: 'Verified', count: statusCounts.verified },
            { key: 'dispensing', label: 'Dispensing', count: statusCounts.dispensing },
            { key: 'shipped', label: 'Shipped', count: statusCounts.shipped },
            { key: 'delivered', label: 'Delivered', count: statusCounts.delivered }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStatusFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                statusFilter === tab.key
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Search and filters */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by patient, medication, or prescription ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          {/* Export button */}
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Priority filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Priorities</option>
                  <option value="high">High</option>
                  <option value="normal">Normal</option>
                  <option value="low">Low</option>
                </select>
              </div>

              {/* Cold chain filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="all">All</option>
                  <option value="cold_chain">Cold Chain</option>
                  <option value="prior_auth">Prior Auth Required</option>
                </select>
              </div>

              {/* Date range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Range
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="text-sm text-gray-600">
        Showing <span className="font-semibold">{filteredPrescriptions.length}</span> of{' '}
        <span className="font-semibold">{samplePrescriptions.length}</span> prescriptions
      </div>

      {/* Prescriptions table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prescription ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medication
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Special
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPrescriptions.map((prescription) => (
                <tr key={prescription.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{prescription.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-900">{prescription.patient_name}</div>
                      <div className="text-sm text-gray-500">{prescription.doctor}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{prescription.medication}</div>
                      <div className="text-sm text-gray-500">{prescription.dosage}</div>
                      <div className="text-xs text-gray-500 mt-1">Qty: {prescription.quantity}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(
                        prescription.status
                      )}`}
                    >
                      {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityBadge(
                        prescription.priority
                      )}`}
                    >
                      {prescription.priority.charAt(0).toUpperCase() + prescription.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      {prescription.cold_chain && (
                        <div className="flex items-center gap-1 text-xs text-blue-600">
                          <Snowflake className="w-3 h-3" />
                          <span>Cold</span>
                        </div>
                      )}
                      {prescription.prior_auth_required && (
                        <div className="flex items-center gap-1 text-xs text-purple-600">
                          <FileText className="w-3 h-3" />
                          <span>PA</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(prescription.submitted_at).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(prescription.submitted_at).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      {prescription.status === 'pending' && (
                        <>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Page 1 of 1
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
