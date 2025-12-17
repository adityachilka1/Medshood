'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, Shield, Snowflake, Phone, ChevronRight, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { growthDisordersProducts } from '@/lib/data/products';

interface Medicine {
  id: string;
  genericName: string;
  brandName: string;
  indication: string;
  dosageForm: string;
  price: number | null;
  priceDisplay: string;
  coldChain: boolean;
  category: string;
  imageUrl?: string;
}

// Convert shared products to frontend Medicine format
const growthDisorderMedicines: Medicine[] = growthDisordersProducts.map(p => ({
  id: p.id,
  genericName: p.genericName,
  brandName: p.brandName,
  indication: p.indication,
  dosageForm: p.dosageForm,
  price: p.price,
  priceDisplay: p.priceDisplay,
  coldChain: p.coldChain,
  category: p.category,
  imageUrl: p.imageUrl,
}));

export default function GrowthDisordersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [mounted, setMounted] = useState(false);
  const [addedToCart, setAddedToCart] = useState<string | null>(null);
  const { addItem } = useCart();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = (medicine: Medicine) => {
    if (!medicine.price) return;

    addItem({
      id: medicine.id,
      name: medicine.brandName,
      genericName: medicine.genericName,
      price: medicine.price,
      imageUrl: medicine.imageUrl,
      coldChain: medicine.coldChain,
      requiresPrescription: true,
    });

    setAddedToCart(medicine.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const filteredMedicines = growthDisorderMedicines.filter(medicine => {
    const matchesSearch =
      medicine.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medicine.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medicine.indication.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'growth-hormone') return matchesSearch && medicine.category.includes('Growth Hormone');
    if (selectedFilter === 'long-acting') return matchesSearch && medicine.category.includes('Long-Acting');
    if (selectedFilter === 'oral') return matchesSearch && (medicine.dosageForm.toLowerCase().includes('tablet') || medicine.dosageForm.toLowerCase().includes('gel'));

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/categories" className="text-white/80 hover:text-white transition-colors">
              Categories
            </Link>
            <ChevronRight className="w-5 h-5 text-white/60" />
            <span className="text-white font-semibold">Growth Disorders</span>
          </div>

          <div className="mb-8">
            <div className="inline-block bg-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm text-orange-700 border border-white/30 shadow-lg">
              GROWTH DISORDERS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Growth Hormone Therapy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl opacity-95">
              Genotropin GoQuick (Pfizer) - premium recombinant human growth hormone for pediatric and adult growth hormone deficiency with WHO-GDP certified cold chain delivery
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
              <button
                className="px-4 py-2 rounded-lg font-medium transition-all bg-orange-600 text-white shadow-md"
              >
                All
              </button>
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
                  {/* Product Image */}
                  {medicine.imageUrl && (
                    <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                      <Image
                        src={medicine.imageUrl}
                        alt={medicine.brandName}
                        width={120}
                        height={180}
                        className="object-contain max-h-40"
                      />
                      {medicine.coldChain && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          <Snowflake className="w-3 h-3" />
                          <span>Cold Chain</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Medicine Header */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{medicine.genericName}</h3>
                        <p className="text-orange-50 text-sm font-medium">{medicine.brandName}</p>
                      </div>
                      {!medicine.imageUrl && medicine.coldChain && (
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
                        {medicine.price ? (
                          <>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-2xl font-bold text-gray-900">{medicine.priceDisplay}</span>
                            </div>
                            <button
                              onClick={() => handleAddToCart(medicine)}
                              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                                addedToCart === medicine.id
                                  ? 'bg-green-600 text-white'
                                  : 'bg-orange-600 text-white hover:bg-orange-700'
                              }`}
                            >
                              {addedToCart === medicine.id ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  Added to Cart
                                </>
                              ) : (
                                <>
                                  <ShoppingCart className="w-4 h-4" />
                                  Add to Cart
                                </>
                              )}
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-2">
                              Prescription required
                            </p>
                          </>
                        ) : (
                          <>
                            <Link
                              href="/upload-prescription"
                              className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                              <Phone className="w-4 h-4" />
                              Request Quote
                            </Link>
                            <p className="text-xs text-gray-500 text-center mt-2">
                              Prescription required
                            </p>
                          </>
                        )}
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Authentic</h3>
              <p className="text-gray-900">
                All growth hormones sourced from licensed distributors with proper cold chain certification
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Snowflake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cold Chain Certified</h3>
              <p className="text-gray-900">
                WHO-GDP compliant storage and temperature-monitored delivery for all biologics
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-900">
                Pediatric endocrinology support for dosing calculations and injection training
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
                This information is for reference only. Always consult your pediatric endocrinologist before starting or changing any growth hormone therapy.
                Growth hormones require proper dosing based on weight and IGF-1 levels. Regular monitoring of growth velocity, bone age, and thyroid function is essential.
                Some medications require prior authorization from insurance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
