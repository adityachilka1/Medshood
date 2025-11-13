'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MEDICAL_CATEGORIES } from '@/constants/categories';
import { SearchIcon } from '@/components/icons/CheckIcon';

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const filteredCategories = MEDICAL_CATEGORIES.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm text-primary border border-white/30 shadow-lg">
              MEDICAL CATEGORIES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Browse by Health Condition
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
              Find authentic specialty and chronic disease medications for your specific health needs
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-900" />
              </div>
              <input
                type="text"
                placeholder="Search for a medical condition or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-600 focus:ring-4 focus:ring-white/30 focus:outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-900 mb-4">No categories found</p>
              <p className="text-gray-500">
                Try adjusting your search terms
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {searchQuery
                    ? `Found ${filteredCategories.length} ${
                        filteredCategories.length === 1 ? 'category' : 'categories'
                      }`
                    : `All ${filteredCategories.length} Medical Categories`}
                </h2>
                <p className="text-gray-900">
                  Select a category to browse medicines for your condition
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCategories.map((category, index) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className={`group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                      mounted ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Gradient Header */}
                    <div
                      className={`relative bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} p-8 text-white overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 opacity-20 transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform">
                        <category.Icon className="w-32 h-32" />
                      </div>
                      <div className="relative z-10">
                        <div className="mb-4">
                          <category.Icon className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold bg-white/30 text-white px-3 py-1 rounded-full border border-white/40">
                            {category.medicineCount}+ Medicines
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-900 leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                        <span>Browse Medicines</span>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all pointer-events-none"></div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Medshood?</h2>
            <p className="text-xl text-gray-900">
              Your trusted partner for specialty and chronic disease medications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900 mb-2">100% Authentic</h3>
              <p className="text-sm text-gray-900">
                All medicines sourced directly from licensed distributors
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">💊</div>
              <h3 className="font-bold text-gray-900 mb-2">5,000+ Medicines</h3>
              <p className="text-sm text-gray-900">
                Comprehensive catalog across all major categories
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">24-48hr Delivery</h3>
              <p className="text-sm text-gray-900">
                Fast doorstep delivery across India
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Up to 70% Off</h3>
              <p className="text-sm text-gray-900">
                Best prices with maximum savings guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Prescription?</h2>
          <p className="text-xl mb-8 text-white/95">
            Upload your prescription and get medicines delivered to your doorstep
          </p>
          <Link
            href="/upload-prescription"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Upload Prescription
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
