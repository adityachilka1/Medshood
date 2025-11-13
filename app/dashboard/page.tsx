'use client';

import { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Pill,
  Users,
  DollarSign,
  Clock,
  AlertTriangle,
  CheckCircle,
  Package,
  FileText
} from 'lucide-react';
import Link from 'next/link';

// KPI Card Component
interface KPICardProps {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}

function KPICard({ title, value, change, trend, icon, color }: KPICardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {Math.abs(change)}%
        </div>
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

// Quick Stats Component
interface QuickStatProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

function QuickStat({ label, value, icon, color }: QuickStatProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
      <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default function DashboardOverview() {
  const [timeRange, setTimeRange] = useState('today');

  // Sample data - in production, fetch from Supabase
  const kpiData = [
    {
      title: 'Total Prescriptions',
      value: '234',
      change: 12.5,
      trend: 'up' as const,
      icon: <Pill className="w-6 h-6 text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Revenue',
      value: '₹12.5L',
      change: 8.3,
      trend: 'up' as const,
      icon: <DollarSign className="w-6 h-6 text-white" />,
      color: 'bg-green-500'
    },
    {
      title: 'Active Patients',
      value: '1,847',
      change: 5.2,
      trend: 'up' as const,
      icon: <Users className="w-6 h-6 text-white" />,
      color: 'bg-purple-500'
    },
    {
      title: 'Avg. Processing Time',
      value: '2.3h',
      change: 15.4,
      trend: 'down' as const,
      icon: <Clock className="w-6 h-6 text-white" />,
      color: 'bg-orange-500'
    }
  ];

  const quickStats = [
    {
      label: 'Pending Verification',
      value: 23,
      icon: <Clock className="w-5 h-5 text-white" />,
      color: 'bg-yellow-500'
    },
    {
      label: 'Low Stock Items',
      value: 12,
      icon: <AlertTriangle className="w-5 h-5 text-white" />,
      color: 'bg-red-500'
    },
    {
      label: 'Verified Today',
      value: 45,
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      color: 'bg-green-500'
    },
    {
      label: 'Prior Auth Pending',
      value: 8,
      icon: <FileText className="w-5 h-5 text-white" />,
      color: 'bg-blue-500'
    }
  ];

  const recentPrescriptions = [
    {
      id: '#PRX-1234',
      patient: 'John Doe',
      medication: 'Ozempic 0.5mg',
      status: 'Pending',
      time: '10 min ago',
      priority: 'high'
    },
    {
      id: '#PRX-1235',
      patient: 'Jane Smith',
      medication: 'Humira 40mg',
      status: 'Verified',
      time: '25 min ago',
      priority: 'normal'
    },
    {
      id: '#PRX-1236',
      patient: 'Bob Wilson',
      medication: 'Tresiba 100U/mL',
      status: 'Pending',
      time: '1 hour ago',
      priority: 'normal'
    },
    {
      id: '#PRX-1237',
      patient: 'Alice Johnson',
      medication: 'Lantus 100U/mL',
      status: 'Shipped',
      time: '2 hours ago',
      priority: 'low'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-gray-600 mt-1">Welcome back, here's what's happening today</p>
        </div>
        <div className="flex gap-2">
          {['today', 'week', 'month'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <QuickStat key={index} {...stat} />
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Prescriptions */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Prescriptions</h3>
            <Link
              href="/dashboard/prescriptions"
              className="text-primary text-sm font-medium hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentPrescriptions.map((prescription) => (
              <div
                key={prescription.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-semibold text-gray-900">{prescription.id}</span>
                    {prescription.priority === 'high' && (
                      <span className="px-2 py-0.5 text-xs font-semibold text-red-700 bg-red-100 rounded">
                        High Priority
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{prescription.patient}</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">{prescription.medication}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    prescription.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : prescription.status === 'Verified'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {prescription.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-2">{prescription.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Alerts */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/dashboard/prescriptions/new"
                className="flex items-center gap-3 p-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Pill className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">New Prescription</p>
                  <p className="text-xs text-gray-600">Add new prescription</p>
                </div>
              </Link>
              <Link
                href="/dashboard/inventory"
                className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Check Inventory</p>
                  <p className="text-xs text-gray-600">View stock levels</p>
                </div>
              </Link>
              <Link
                href="/dashboard/prior-auth"
                className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Prior Auth</p>
                  <p className="text-xs text-gray-600">Submit new PA</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-red-900">12 medications low on stock</p>
                  <p className="text-xs text-red-700 mt-1">Reorder required</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">23 prescriptions pending</p>
                  <p className="text-xs text-yellow-700 mt-1">Verification needed</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-900">8 prior auths pending</p>
                  <p className="text-xs text-blue-700 mt-1">Follow up required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
