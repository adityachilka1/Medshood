'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, Shield, Snowflake, Phone, ChevronRight, Droplet, AlertTriangle } from 'lucide-react';

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

const hemophiliaMedicines: Medicine[] = [
  {
    id: 'hemo-001',
    genericName: 'Recombinant Factor VIII',
    brandName: 'Advate / Kogenate / Recombinate',
    indication: 'Hemophilia A',
    dosageForm: 'IV Injection 250IU/500IU/1000IU/2000IU',
    coldChain: true,
    category: 'Clotting Factor'
  },
  {
    id: 'hemo-002',
    genericName: 'Recombinant Factor VIII Fc Fusion',
    brandName: 'Eloctate',
    indication: 'Hemophilia A',
    dosageForm: 'IV Injection 250IU/500IU/750IU/1000IU/1500IU/2000IU/3000IU',
    coldChain: true,
    category: 'Long-Acting Factor'
  },
  {
    id: 'hemo-003',
    genericName: 'Recombinant Factor VIII PEGylated',
    brandName: 'Adynovate / Jivi',
    indication: 'Hemophilia A',
    dosageForm: 'IV Injection 250IU/500IU/1000IU/2000IU',
    coldChain: true,
    category: 'Long-Acting Factor'
  },
  {
    id: 'hemo-004',
    genericName: 'Recombinant Factor VIII SingleChain',
    brandName: 'Afstyla',
    indication: 'Hemophilia A',
    dosageForm: 'IV Injection 250IU/500IU/1000IU/1500IU/2000IU/2500IU/3000IU',
    coldChain: true,
    category: 'Clotting Factor'
  },
  {
    id: 'hemo-005',
    genericName: 'Turoctocog alfa pegol',
    brandName: 'Esperoct',
    indication: 'Hemophilia A',
    dosageForm: 'IV Injection 500IU/1000IU/1500IU/2000IU/3000IU',
    coldChain: true,
    category: 'Long-Acting Factor'
  },
  {
    id: 'hemo-006',
    genericName: 'Recombinant Factor IX',
    brandName: 'BeneFIX / Rixubis',
    indication: 'Hemophilia B',
    dosageForm: 'IV Injection 250IU/500IU/1000IU/2000IU/3000IU',
    coldChain: true,
    category: 'Clotting Factor'
  },
  {
    id: 'hemo-007',
    genericName: 'Recombinant Factor IX Fc Fusion',
    brandName: 'Alprolix',
    indication: 'Hemophilia B',
    dosageForm: 'IV Injection 500IU/1000IU/2000IU/3000IU',
    coldChain: true,
    category: 'Long-Acting Factor'
  },
  {
    id: 'hemo-008',
    genericName: 'Recombinant Factor IX Albumin Fusion',
    brandName: 'Idelvion',
    indication: 'Hemophilia B',
    dosageForm: 'IV Injection 250IU/500IU/1000IU/2000IU',
    coldChain: true,
    category: 'Long-Acting Factor'
  },
  {
    id: 'hemo-009',
    genericName: 'Nonacog beta pegol',
    brandName: 'Rebinyn',
    indication: 'Hemophilia B',
    dosageForm: 'IV Injection 500IU/1000IU/2000IU',
    coldChain: true,
    category: 'Long-Acting Factor'
  },
  {
    id: 'hemo-010',
    genericName: 'Emicizumab',
    brandName: 'Hemlibra',
    indication: 'Hemophilia A with/without inhibitors',
    dosageForm: 'SC Injection 30mg/60mg/105mg/150mg',
    coldChain: true,
    category: 'Factor VIII Mimetic'
  },
  {
    id: 'hemo-011',
    genericName: 'Fitusiran',
    brandName: 'Qfitlia',
    indication: 'Hemophilia A/B with/without inhibitors',
    dosageForm: 'SC Injection 80mg',
    coldChain: true,
    category: 'siRNA Therapy'
  },
  {
    id: 'hemo-012',
    genericName: 'Concizumab',
    brandName: 'Alhemo',
    indication: 'Hemophilia A/B with inhibitors',
    dosageForm: 'SC Injection',
    coldChain: true,
    category: 'TFPI Antagonist'
  },
  {
    id: 'hemo-013',
    genericName: 'Von Willebrand Factor',
    brandName: 'Wilate / Vonvendi',
    indication: 'Von Willebrand Disease',
    dosageForm: 'IV Injection',
    coldChain: true,
    category: 'VWF Replacement'
  },
  {
    id: 'hemo-014',
    genericName: 'Factor VIII/VWF Complex',
    brandName: 'Humate-P / Alphanate',
    indication: 'Von Willebrand Disease, Hemophilia A',
    dosageForm: 'IV Injection',
    coldChain: true,
    category: 'Factor Complex'
  },
  {
    id: 'hemo-015',
    genericName: 'Desmopressin',
    brandName: 'DDAVP / Stimate',
    indication: 'Mild Hemophilia A, VWD Type 1',
    dosageForm: 'IV/SC Injection, Nasal Spray',
    price: '₹500 - ₹2,000',
    category: 'Synthetic Hormone'
  },
  {
    id: 'hemo-016',
    genericName: 'Recombinant Factor VIIa',
    brandName: 'NovoSeven RT',
    indication: 'Hemophilia with inhibitors',
    dosageForm: 'IV Injection 1mg/2mg/5mg',
    coldChain: true,
    category: 'Bypassing Agent'
  },
  {
    id: 'hemo-017',
    genericName: 'FEIBA',
    brandName: 'Factor Eight Inhibitor Bypassing Activity',
    indication: 'Hemophilia with inhibitors',
    dosageForm: 'IV Injection 500U/1000U',
    coldChain: true,
    category: 'Bypassing Agent'
  },
  {
    id: 'hemo-018',
    genericName: 'Tranexamic acid',
    brandName: 'Cyklokapron / Lysteda',
    indication: 'Bleeding prophylaxis, mucosal bleeding',
    dosageForm: 'Tablet 500mg/650mg, IV Injection',
    price: '₹100 - ₹500',
    category: 'Antifibrinolytic'
  },
  {
    id: 'hemo-019',
    genericName: 'Aminocaproic acid',
    brandName: 'Amicar',
    indication: 'Bleeding prophylaxis',
    dosageForm: 'Tablet 500mg, Syrup, IV',
    price: '₹200 - ₹800',
    category: 'Antifibrinolytic'
  },
  {
    id: 'hemo-020',
    genericName: 'Fibrinogen concentrate',
    brandName: 'RiaSTAP / Fibryga',
    indication: 'Congenital fibrinogen deficiency',
    dosageForm: 'IV Injection 1g',
    coldChain: true,
    category: 'Clotting Factor'
  },
  {
    id: 'hemo-021',
    genericName: 'Prothrombin complex concentrate',
    brandName: 'Beriplex / Kcentra',
    indication: 'Factor II, VII, IX, X deficiency',
    dosageForm: 'IV Injection',
    coldChain: true,
    category: 'Factor Complex'
  },
  {
    id: 'hemo-022',
    genericName: 'Factor XIII',
    brandName: 'Corifact / Tretten',
    indication: 'Factor XIII deficiency',
    dosageForm: 'IV Injection',
    coldChain: true,
    category: 'Clotting Factor'
  },
  {
    id: 'hemo-023',
    genericName: 'Factor X',
    brandName: 'Coagadex',
    indication: 'Factor X deficiency',
    dosageForm: 'IV Injection',
    coldChain: true,
    category: 'Clotting Factor'
  },
  {
    id: 'hemo-024',
    genericName: 'Factor XI',
    brandName: 'Hemoleven',
    indication: 'Factor XI deficiency',
    dosageForm: 'IV Injection',
    coldChain: true,
    category: 'Clotting Factor'
  },
  {
    id: 'hemo-025',
    genericName: 'Fresh Frozen Plasma',
    brandName: 'FFP',
    indication: 'Multiple factor deficiencies',
    dosageForm: 'IV Infusion',
    coldChain: true,
    category: 'Blood Product'
  },
  {
    id: 'hemo-026',
    genericName: 'Cryoprecipitate',
    brandName: 'Cryo',
    indication: 'Fibrinogen, Factor VIII, vWF deficiency',
    dosageForm: 'IV Infusion',
    coldChain: true,
    category: 'Blood Product'
  },
  {
    id: 'hemo-027',
    genericName: 'Vitamin K',
    brandName: 'Phytonadione / Mephyton',
    indication: 'Vitamin K deficiency bleeding',
    dosageForm: 'Tablet 5mg, Injection',
    price: '₹50 - ₹200',
    category: 'Vitamin'
  },
  {
    id: 'hemo-028',
    genericName: 'Romiplostim',
    brandName: 'Nplate',
    indication: 'Immune Thrombocytopenia',
    dosageForm: 'SC Injection 250mcg/500mcg',
    coldChain: true,
    category: 'TPO Receptor Agonist'
  },
  {
    id: 'hemo-029',
    genericName: 'Eltrombopag',
    brandName: 'Promacta / Revolade',
    indication: 'Immune Thrombocytopenia',
    dosageForm: 'Tablet 25mg/50mg/75mg',
    category: 'TPO Receptor Agonist'
  },
  {
    id: 'hemo-030',
    genericName: 'Avatrombopag',
    brandName: 'Doptelet',
    indication: 'Thrombocytopenia',
    dosageForm: 'Tablet 20mg',
    category: 'TPO Receptor Agonist'
  },
  {
    id: 'hemo-031',
    genericName: 'Lusutrombopag',
    brandName: 'Mulpleta',
    indication: 'Thrombocytopenia',
    dosageForm: 'Tablet 3mg',
    category: 'TPO Receptor Agonist'
  },
  {
    id: 'hemo-032',
    genericName: 'Fostamatinib',
    brandName: 'Tavalisse',
    indication: 'Immune Thrombocytopenia',
    dosageForm: 'Tablet 100mg/150mg',
    category: 'Spleen Tyrosine Kinase Inhibitor'
  },
  {
    id: 'hemo-033',
    genericName: 'Immunoglobulin',
    brandName: 'IVIg / Gammagard',
    indication: 'ITP, Bleeding disorders',
    dosageForm: 'IV Infusion',
    coldChain: true,
    category: 'Immunoglobulin'
  },
  {
    id: 'hemo-034',
    genericName: 'Anti-D immunoglobulin',
    brandName: 'WinRho',
    indication: 'ITP in Rh+ patients',
    dosageForm: 'IV/IM Injection',
    coldChain: true,
    category: 'Immunoglobulin'
  },
  {
    id: 'hemo-035',
    genericName: 'Prednisolone',
    brandName: 'Deltasone',
    indication: 'ITP, Autoimmune bleeding',
    dosageForm: 'Tablet 5mg/10mg/20mg',
    price: '₹50 - ₹200',
    category: 'Corticosteroid'
  },
  {
    id: 'hemo-036',
    genericName: 'Rituximab',
    brandName: 'MabThera / Rituxan',
    indication: 'Refractory ITP',
    dosageForm: 'IV Infusion',
    coldChain: true,
    category: 'Anti-CD20'
  },
  {
    id: 'hemo-037',
    genericName: 'Danazol',
    brandName: 'Danocrine',
    indication: 'ITP, Hereditary Angioedema',
    dosageForm: 'Capsule 50mg/100mg/200mg',
    category: 'Androgen'
  },
  {
    id: 'hemo-038',
    genericName: 'Maribavir',
    brandName: 'Livtencity',
    indication: 'Post-transplant CMV (bleeding risk)',
    dosageForm: 'Tablet 200mg',
    category: 'Antiviral'
  }
];

export default function HemophiliaBleedingDisordersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMedicines = hemophiliaMedicines.filter(medicine => {
    const matchesSearch =
      medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.indication.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'factor' && medicine.category.includes('Factor')) ||
      (selectedFilter === 'novel' && (medicine.category.includes('Mimetic') || medicine.category.includes('siRNA') || medicine.category.includes('Antagonist'))) ||
      (selectedFilter === 'supportive' && (medicine.category.includes('Antifibrinolytic') || medicine.category.includes('TPO')));

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Droplet className="w-8 h-8" />
                <span className="text-lg font-semibold">Hematology Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hemophilia & Bleeding Disorders
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Advanced clotting factors and innovative therapies for comprehensive bleeding disorder management including 2025 FDA-approved novel biologics
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5" />
                  <span>Plasma-Derived & Recombinant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Snowflake className="w-5 h-5" />
                  <span>Ultra-Cold Chain</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <AlertTriangle className="w-5 h-5" />
                  <span>24/7 Emergency Support</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* 2025 Treatment Breakthroughs */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">2025 Treatment Breakthroughs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fitusiran (Qfitlia)</h3>
                <p className="text-gray-700 text-base leading-relaxed">FDA-approved March 2025 - siRNA therapy for Hemophilia A/B. Administered subcutaneously once every 2 months.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Droplet className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marstacimab (Hympavzi)</h3>
                <p className="text-gray-700 text-base leading-relaxed">2025 approval - 35% reduction in bleeding vs prophylaxis. TFPI inhibitor for adults and adolescents.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Extended Half-Life Factors</h3>
                <p className="text-gray-700 text-base leading-relaxed">EHL factor concentrates with molecular modifications for reduced treatment frequency and improved adherence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by factor, medicine name, or condition..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
              </div>

              {showFilters && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedFilter('all')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'all'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All Medicines
                    </button>
                    <button
                      onClick={() => setSelectedFilter('factor')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'factor'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Clotting Factors
                    </button>
                    <button
                      onClick={() => setSelectedFilter('novel')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'novel'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Novel Therapies
                    </button>
                    <button
                      onClick={() => setSelectedFilter('supportive')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'supportive'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Supportive Care
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Medicine Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Showing {filteredMedicines.length} of {hemophiliaMedicines.length} medicines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedicines.map((medicine) => (
              <div
                key={medicine.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {medicine.genericName}
                    </h3>
                    {medicine.coldChain && (
                      <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        <Snowflake className="w-3 h-3" />
                        <span>Cold Chain</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                    <span className="font-semibold">Brand:</span> {medicine.brandName}
                  </p>

                  <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                    <span className="font-semibold">Indication:</span> {medicine.indication}
                  </p>

                  <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                    <span className="font-semibold">Form:</span> {medicine.dosageForm}
                  </p>

                  <p className="text-xs text-gray-700 mb-4 leading-relaxed">
                    <span className="font-semibold">Type:</span> {medicine.category}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">
                      {medicine.price || 'Price on Request'}
                    </p>
                  </div>

                  <Link
                    href="/upload-prescription"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
                  >
                    <span>Request Quote</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Support Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Specialized Hemophilia Support Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">24/7 Emergency Supply</h3>
                <p className="text-sm text-gray-700 leading-relaxed">Immediate factor delivery for bleeding emergencies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplet className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Home Infusion Support</h3>
                <p className="text-sm text-gray-700 leading-relaxed">Training and assistance for self-administration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Comprehensive Care</h3>
                <p className="text-sm text-gray-700 leading-relaxed">Connect with hemophilia treatment centers</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Hemophilia Medication Support?</h2>
            <p className="text-lg mb-6 leading-relaxed max-w-3xl mx-auto">
              Our specialized team provides comprehensive support for bleeding disorder patients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/upload-prescription"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Upload Prescription
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Emergency Helpline
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800 leading-relaxed">
              <strong>Medical Disclaimer:</strong> Hemophilia and bleeding disorder medications require careful dosing and monitoring by hematologists. Factor replacement should be calculated based on individual patient weight and severity. Always maintain emergency factor supplies and contact information for hemophilia treatment centers.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}