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

const hivAidsMedicines: Medicine[] = [
  {
    id: 'hiv-001',
    genericName: 'Tenofovir + Lamivudine + Dolutegravir (TLD)',
    brandName: 'Tenvir-EM / Ricovir-EM / Tafero-EM',
    indication: 'First-line HIV Treatment (Single Tablet Regimen)',
    dosageForm: 'Tablet (TDF 300mg + 3TC 300mg + DTG 50mg)',
    category: 'First-Line ART'
  },
  {
    id: 'hiv-002',
    genericName: 'Dolutegravir',
    brandName: 'Tivicay / Instgra',
    indication: 'HIV Treatment (Integrase Inhibitor)',
    dosageForm: 'Tablet 50mg',
    category: 'INSTI'
  },
  {
    id: 'hiv-003',
    genericName: 'Bictegravir + Emtricitabine + Tenofovir Alafenamide',
    brandName: 'Biktarvy',
    indication: 'HIV Treatment (Complete Single Tablet Regimen)',
    dosageForm: 'Tablet (BIC 50mg + FTC 200mg + TAF 25mg)',
    category: 'INSTI-Based STR'
  },
  {
    id: 'hiv-004',
    genericName: 'Darunavir + Cobicistat',
    brandName: 'Prezcobix / Rezolsta',
    indication: 'HIV Treatment with Boosted Protease Inhibitor',
    dosageForm: 'Tablet (DRV 800mg + COBI 150mg)',
    category: 'Boosted PI'
  },
  {
    id: 'hiv-005',
    genericName: 'Cabotegravir + Rilpivirine (Long-Acting)',
    brandName: 'Cabenuva',
    indication: 'HIV Maintenance Therapy (Monthly/Bi-monthly Injection)',
    dosageForm: 'IM Injection (CAB 400mg/600mg + RPV 600mg/900mg)',
    coldChain: true,
    category: 'Long-Acting Injectable'
  },
  {
    id: 'hiv-006',
    genericName: 'Lenacapavir',
    brandName: 'Sunlenca',
    indication: 'Multi-drug Resistant HIV (6-monthly Injection)',
    dosageForm: 'Subcutaneous Injection 463.5mg',
    category: 'Capsid Inhibitor'
  },
  {
    id: 'hiv-007',
    genericName: 'Emtricitabine + Tenofovir Disoproxil Fumarate',
    brandName: 'Truvada / Ricovir-EM',
    indication: 'HIV PrEP (Pre-Exposure Prophylaxis) & Treatment',
    dosageForm: 'Tablet (FTC 200mg + TDF 300mg)',
    category: 'NRTI Backbone / PrEP'
  },
  {
    id: 'hiv-008',
    genericName: 'Emtricitabine + Tenofovir Alafenamide',
    brandName: 'Descovy',
    indication: 'HIV PrEP & Treatment (Improved Renal/Bone Safety)',
    dosageForm: 'Tablet (FTC 200mg + TAF 25mg)',
    category: 'NRTI Backbone / PrEP'
  },
  {
    id: 'hiv-009',
    genericName: 'Efavirenz + Emtricitabine + Tenofovir',
    brandName: 'Atripla',
    indication: 'HIV Treatment (Alternative First-Line)',
    dosageForm: 'Tablet (EFV 600mg + FTC 200mg + TDF 300mg)',
    category: 'NNRTI-Based STR'
  },
  {
    id: 'hiv-010',
    genericName: 'Atazanavir + Ritonavir',
    brandName: 'Reyataz + Norvir',
    indication: 'HIV Treatment with Boosted Protease Inhibitor',
    dosageForm: 'Capsule (ATV 300mg) + Tablet (RTV 100mg)',
    category: 'Boosted PI'
  },
  {
    id: 'hiv-011',
    genericName: 'Raltegravir',
    brandName: 'Isentress',
    indication: 'HIV Treatment (Integrase Inhibitor)',
    dosageForm: 'Tablet 400mg',
    category: 'INSTI'
  },
  {
    id: 'hiv-012',
    genericName: 'Elvitegravir + Cobicistat + Emtricitabine + Tenofovir',
    brandName: 'Stribild',
    indication: 'HIV Treatment (Complete Single Tablet Regimen)',
    dosageForm: 'Tablet (EVG 150mg + COBI 150mg + FTC 200mg + TDF 300mg)',
    category: 'INSTI-Based STR'
  },
  {
    id: 'hiv-013',
    genericName: 'Fostemsavir',
    brandName: 'Rukobia',
    indication: 'Multi-drug Resistant HIV',
    dosageForm: 'Tablet 600mg',
    category: 'Attachment Inhibitor'
  },
  {
    id: 'hiv-014',
    genericName: 'Ibalizumab',
    brandName: 'Trogarzo',
    indication: 'Multi-drug Resistant HIV (IV Infusion every 2 weeks)',
    dosageForm: 'IV Infusion 200mg',
    coldChain: true,
    category: 'CD4 Post-Attachment Inhibitor'
  },
  {
    id: 'hiv-015',
    genericName: 'Maraviroc',
    brandName: 'Selzentry / Celsentri',
    indication: 'CCR5-tropic HIV (For Treatment-Experienced Patients)',
    dosageForm: 'Tablet 150mg/300mg',
    category: 'CCR5 Antagonist'
  },
  {
    id: 'hiv-016',
    genericName: 'Doravirine + Lamivudine + Tenofovir',
    brandName: 'Delstrigo',
    indication: 'HIV Treatment (Complete Single Tablet Regimen)',
    dosageForm: 'Tablet (DOR 100mg + 3TC 300mg + TDF 300mg)',
    category: 'NNRTI-Based STR'
  },
  {
    id: 'hiv-017',
    genericName: 'Abacavir + Dolutegravir + Lamivudine',
    brandName: 'Triumeq',
    indication: 'HIV Treatment (For HLA-B*5701 Negative Patients)',
    dosageForm: 'Tablet (ABC 600mg + DTG 50mg + 3TC 300mg)',
    category: 'INSTI-Based STR'
  },
  {
    id: 'hiv-018',
    genericName: 'Lamivudine',
    brandName: 'Epivir / Lamivir',
    indication: 'HIV & Hepatitis B Co-infection',
    dosageForm: 'Tablet 150mg/300mg',
    category: 'NRTI'
  }
];

export default function HIVAIDSCarePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const filteredMedicines = hivAidsMedicines.filter(medicine => {
    const matchesSearch =
      medicine.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medicine.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medicine.indication.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'first-line') return matchesSearch && medicine.category.includes('First-Line');
    if (selectedFilter === 'prep') return matchesSearch && medicine.indication.toLowerCase().includes('prep');
    if (selectedFilter === 'long-acting') return matchesSearch && medicine.category.includes('Long-Acting');
    if (selectedFilter === 'resistant') return matchesSearch && medicine.indication.toLowerCase().includes('resistant');

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-600 to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/categories" className="text-white/80 hover:text-white transition-colors">
              Categories
            </Link>
            <ChevronRight className="w-5 h-5 text-white/60" />
            <span className="text-white font-semibold">HIV/AIDS Care</span>
          </div>

          <div className="mb-8">
            <div className="inline-block bg-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm text-pink-700 border border-white/30 shadow-lg">
              HIV/AIDS CARE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Antiretroviral Therapy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl opacity-95">
              Antiretroviral therapy, PrEP medications, and HIV treatment solutions
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
              {['all', 'first-line', 'prep', 'long-acting', 'resistant'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-pink-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {filter === 'first-line' ? 'First-Line' : filter === 'prep' ? 'PrEP' : filter === 'long-acting' ? 'Long-Acting' : filter === 'resistant' ? 'MDR HIV' : filter.charAt(0).toUpperCase() + filter.slice(1)}
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
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 text-white">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{medicine.genericName}</h3>
                        <p className="text-pink-50 text-sm font-medium">{medicine.brandName}</p>
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
                          className="w-full flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Confidential</h3>
              <p className="text-gray-900">
                Discreet packaging and complete patient privacy protection
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Snowflake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic ART</h3>
              <p className="text-gray-900">
                Government-approved antiretrovirals with proper storage compliance
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adherence Support</h3>
              <p className="text-gray-900">
                Medication reminders and adherence counseling available
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
                This information is for reference only. Always consult your HIV specialist or infectious disease physician before starting or changing any antiretroviral therapy.
                Strict medication adherence (95%+) is critical for viral suppression. Regular CD4 count and viral load monitoring required.
                Drug-drug interactions must be reviewed before starting new medications. PrEP requires HIV testing before initiation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
