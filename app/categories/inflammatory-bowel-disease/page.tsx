'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, Shield, Snowflake, Phone, ChevronRight } from 'lucide-react';

interface Medicine {
  id: string;
  genericName: string;
  brandName: string;
  indication: string;
  dosageForm: string;
  price?: string;
  coldChain?: boolean;
  category: string;
}

const ibdMedicines: Medicine[] = [
  {
    id: 'ibd-001',
    genericName: 'Infliximab',
    brandName: 'Remicade / Infimab / Cinflixi',
    indication: 'Crohn\'s Disease, Ulcerative Colitis',
    dosageForm: 'IV Infusion 100mg',
    coldChain: true,
    category: 'Anti-TNF Biologic'
  },
  {
    id: 'ibd-002',
    genericName: 'Adalimumab',
    brandName: 'Humira / Exemptia / Mabura',
    indication: 'Crohn\'s Disease, Ulcerative Colitis',
    dosageForm: 'Subcutaneous Injection 40mg',
    coldChain: true,
    category: 'Anti-TNF Biologic'
  },
  {
    id: 'ibd-003',
    genericName: 'Vedolizumab',
    brandName: 'Entyvio',
    indication: 'Moderate to Severe Ulcerative Colitis, Crohn\'s Disease',
    dosageForm: 'IV Infusion 300mg',
    coldChain: true,
    category: 'Integrin Antagonist'
  },
  {
    id: 'ibd-004',
    genericName: 'Ustekinumab',
    brandName: 'Stelara',
    indication: 'Crohn\'s Disease, Ulcerative Colitis',
    dosageForm: 'Subcutaneous Injection 45mg/90mg',
    coldChain: true,
    category: 'IL-12/23 Inhibitor'
  },
  {
    id: 'ibd-005',
    genericName: 'Tofacitinib',
    brandName: 'Xeljanz',
    indication: 'Moderate to Severe Ulcerative Colitis',
    dosageForm: 'Tablet 5mg/10mg',
    category: 'JAK Inhibitor'
  },
  {
    id: 'ibd-006',
    genericName: 'Mesalamine',
    brandName: 'Asacol / Lialda / Pentasa',
    indication: 'Mild to Moderate Ulcerative Colitis',
    dosageForm: 'Tablet 400mg/800mg/1200mg',
    category: '5-ASA'
  },
  {
    id: 'ibd-007',
    genericName: 'Azathioprine',
    brandName: 'Imuran / Azoran',
    indication: 'Crohn\'s Disease, Ulcerative Colitis (Maintenance)',
    dosageForm: 'Tablet 50mg',
    category: 'Immunosuppressant'
  },
  {
    id: 'ibd-008',
    genericName: 'Mercaptopurine',
    brandName: 'Purinethol',
    indication: 'Crohn\'s Disease, Ulcerative Colitis',
    dosageForm: 'Tablet 50mg',
    category: 'Immunosuppressant'
  },
  {
    id: 'ibd-009',
    genericName: 'Budesonide',
    brandName: 'Entocort / Budenofalk',
    indication: 'Mild to Moderate Crohn\'s Disease',
    dosageForm: 'Capsule 3mg',
    category: 'Corticosteroid'
  },
  {
    id: 'ibd-010',
    genericName: 'Methotrexate',
    brandName: 'Trexall / Methotrex',
    indication: 'Crohn\'s Disease (Maintenance)',
    dosageForm: 'Tablet 2.5mg / Injection 25mg',
    category: 'Immunosuppressant'
  },
  {
    id: 'ibd-011',
    genericName: 'Sulfasalazine',
    brandName: 'Azulfidine',
    indication: 'Mild to Moderate Ulcerative Colitis',
    dosageForm: 'Tablet 500mg',
    category: '5-ASA'
  },
  {
    id: 'ibd-012',
    genericName: 'Balsalazide',
    brandName: 'Colazal',
    indication: 'Mild to Moderate Ulcerative Colitis',
    dosageForm: 'Capsule 750mg',
    category: '5-ASA'
  },
  {
    id: 'ibd-013',
    genericName: 'Golimumab',
    brandName: 'Simponi',
    indication: 'Moderate to Severe Ulcerative Colitis',
    dosageForm: 'Subcutaneous Injection 50mg/100mg',
    coldChain: true,
    category: 'Anti-TNF Biologic'
  },
  {
    id: 'ibd-014',
    genericName: 'Natalizumab',
    brandName: 'Tysabri',
    indication: 'Moderate to Severe Crohn\'s Disease',
    dosageForm: 'IV Infusion 300mg',
    coldChain: true,
    category: 'Integrin Antagonist'
  },
  {
    id: 'ibd-015',
    genericName: 'Cyclosporine',
    brandName: 'Sandimmune / Neoral',
    indication: 'Severe Ulcerative Colitis',
    dosageForm: 'IV Infusion / Oral Solution',
    category: 'Immunosuppressant'
  }
];

export default function InflammatoryBowelDiseasePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const filteredMedicines = ibdMedicines.filter(medicine => {
    const matchesSearch =
      medicine.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medicine.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medicine.indication.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'biologics') return matchesSearch && medicine.coldChain;
    if (selectedFilter === 'oral') return matchesSearch && medicine.dosageForm.toLowerCase().includes('tablet') || medicine.dosageForm.toLowerCase().includes('capsule');
    if (selectedFilter === 'injectable') return matchesSearch && (medicine.dosageForm.toLowerCase().includes('injection') || medicine.dosageForm.toLowerCase().includes('infusion'));

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/categories" className="text-white/80 hover:text-white transition-colors">
              Categories
            </Link>
            <ChevronRight className="w-5 h-5 text-white/60" />
            <span className="text-white font-semibold">Inflammatory Bowel Disease</span>
          </div>

          <div className="mb-8">
            <div className="inline-block bg-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm text-teal-700 border border-white/30 shadow-lg">
              INFLAMMATORY BOWEL DISEASE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IBD Medicines
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl opacity-95">
              Biologics for Crohn's disease, ulcerative colitis, and IBD therapy management
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-900" />
              </div>
              <input
                type="text"
                placeholder="Search medicines by name or indication..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-600 focus:ring-4 focus:ring-white/30 focus:outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Filter className="w-5 h-5" />
              <span>Filter:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'biologics', 'oral', 'injectable'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
            <div className="ml-auto text-sm text-gray-900">
              <span className="font-semibold">{filteredMedicines.length}</span> medicines found
            </div>
          </div>
        </div>
      </div>

      {/* Medicines Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMedicines.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-900 mb-4">No medicines found</p>
              <p className="text-gray-900">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedicines.map((medicine, index) => (
                <div
                  key={medicine.id}
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                    mounted ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Medicine Header */}
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 text-white">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{medicine.genericName}</h3>
                        <p className="text-teal-50 text-sm font-medium">{medicine.brandName}</p>
                      </div>
                      {medicine.coldChain && (
                        <div className="ml-2 bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/30">
                          <Snowflake className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                      {medicine.category}
                    </div>
                  </div>

                  {/* Medicine Details */}
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Indication
                        </div>
                        <p className="text-gray-900 text-sm leading-relaxed">
                          {medicine.indication}
                        </p>
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Dosage Form
                        </div>
                        <p className="text-gray-900 text-sm font-medium">
                          {medicine.dosageForm}
                        </p>
                      </div>

                      {medicine.coldChain && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="flex items-start gap-2">
                            <Snowflake className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-blue-900">
                              Cold chain required (2-8°C). WHO-GDP certified storage & delivery.
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="pt-2">
                        <Link
                          href="/upload-prescription"
                          className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <Phone className="w-4 h-4" />
                          Request Quote
                        </Link>
                        <p className="text-xs text-gray-500 text-center mt-2">
                          Prescription required
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Authentic</h3>
              <p className="text-gray-900">
                All biologics sourced from licensed distributors with proper cold chain certification
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Snowflake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cold Chain Certified</h3>
              <p className="text-gray-900">
                WHO-GDP compliant storage and temperature-monitored delivery
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-900">
                Pharmacist assistance for dosing, administration, and side effect management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-yellow-50 border-t border-b border-yellow-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <div className="text-yellow-600 mt-1">⚠️</div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-2">Medical Disclaimer</h4>
              <p className="text-sm text-gray-900 leading-relaxed">
                This information is for reference only. Always consult your gastroenterologist or IBD specialist before starting or changing any medication.
                Biologics require proper monitoring for infections and adverse reactions. Some medications may require prior authorization from insurance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
