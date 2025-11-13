'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Pill,
  Users,
  Package,
  FileText,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  LogOut,
  ChevronDown
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Prescriptions', href: '/dashboard/prescriptions', icon: Pill },
    { name: 'Patients', href: '/dashboard/patients', icon: Users },
    { name: 'Inventory', href: '/dashboard/inventory', icon: Package },
    { name: 'Prior Auth', href: '/dashboard/prior-auth', icon: FileText },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-primary">
          {/* Logo */}
          <div className="flex h-16 items-center px-6 bg-primary-dark">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">M</span>
              </div>
              <span className="text-white font-bold text-xl">Medshood</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white font-semibold">JD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-white/70">Pharmacist</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar */}
          <aside className="fixed inset-y-0 left-0 w-64 bg-primary z-50 lg:hidden">
            <div className="flex min-h-0 flex-1 flex-col">
              {/* Logo */}
              <div className="flex h-16 items-center justify-between px-6 bg-primary-dark">
                <Link href="/dashboard" className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">M</span>
                  </div>
                  <span className="text-white font-bold text-xl">Medshood</span>
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-white hover:bg-white/10 p-2 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                        active
                          ? 'bg-white/10 text-white shadow-lg'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* User section */}
              <div className="border-t border-white/10 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white font-semibold">JD</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">John Doe</p>
                    <p className="text-xs text-white/70">Pharmacist</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top header */}
        <header className="sticky top-0 z-30 bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Page title - hidden on mobile when menu button shows */}
            <div className="hidden lg:block">
              <h1 className="text-2xl font-bold text-gray-900">
                {navigationItems.find(item => isActive(item.href))?.name || 'Dashboard'}
              </h1>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">JD</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>

                {userMenuOpen && (
                  <>
                    {/* Backdrop for mobile */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setUserMenuOpen(false)}
                    />
                    {/* Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </Link>
                      <button
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
