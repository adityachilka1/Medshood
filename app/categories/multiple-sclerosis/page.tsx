'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, Shield, Snowflake, Phone, ChevronRight, Brain, Zap } from 'lucide-react';

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

const msMedicines: Medicine[] = [
  {
    id: 'ms-001',
    genericName: 'Dimethyl fumarate',
    brandName: 'Tecfidera',
    indication: 'Relapsing-Remitting MS',
    dosageForm: 'Capsule 120mg/240mg',
    category: 'Oral DMT'
  },
  {
    id: 'ms-002',
    genericName: 'Fingolimod',
    brandName: 'Gilenya',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'Capsule 0.5mg',
    category: 'S1P Receptor Modulator'
  },
  {
    id: 'ms-003',
    genericName: 'Siponimod',
    brandName: 'Mayzent',
    indication: 'Secondary Progressive MS',
    dosageForm: 'Tablet 0.25mg/2mg',
    category: 'S1P Receptor Modulator'
  },
  {
    id: 'ms-004',
    genericName: 'Ozanimod',
    brandName: 'Zeposia',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'Capsule 0.23mg/0.46mg/0.92mg',
    category: 'S1P Receptor Modulator'
  },
  {
    id: 'ms-005',
    genericName: 'Ponesimod',
    brandName: 'Ponvory',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'Tablet 2mg/3mg/4mg/5mg/6mg/7mg/8mg/9mg/10mg/20mg',
    category: 'S1P Receptor Modulator'
  },
  {
    id: 'ms-006',
    genericName: 'Natalizumab',
    brandName: 'Tysabri',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'IV Infusion 300mg',
    coldChain: true,
    category: 'Anti-α4 Integrin'
  },
  {
    id: 'ms-007',
    genericName: 'Ocrelizumab',
    brandName: 'Ocrevus',
    indication: 'Relapsing & Primary Progressive MS',
    dosageForm: 'IV Infusion 300mg',
    coldChain: true,
    category: 'Anti-CD20'
  },
  {
    id: 'ms-008',
    genericName: 'Ofatumumab',
    brandName: 'Kesimpta',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'SC Injection 20mg',
    coldChain: true,
    category: 'Anti-CD20'
  },
  {
    id: 'ms-009',
    genericName: 'Alemtuzumab',
    brandName: 'Lemtrada',
    indication: 'Relapsing-Remitting MS',
    dosageForm: 'IV Infusion 12mg',
    coldChain: true,
    category: 'Anti-CD52'
  },
  {
    id: 'ms-010',
    genericName: 'Teriflunomide',
    brandName: 'Aubagio',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'Tablet 7mg/14mg',
    category: 'Pyrimidine Synthesis Inhibitor'
  },
  {
    id: 'ms-011',
    genericName: 'Interferon beta-1a',
    brandName: 'Avonex / Rebif',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'IM/SC Injection 30mcg/22mcg/44mcg',
    coldChain: true,
    category: 'Interferon'
  },
  {
    id: 'ms-012',
    genericName: 'Interferon beta-1b',
    brandName: 'Betaseron / Extavia',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'SC Injection 250mcg',
    coldChain: true,
    category: 'Interferon'
  },
  {
    id: 'ms-013',
    genericName: 'Peginterferon beta-1a',
    brandName: 'Plegridy',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'SC Injection 63mcg/94mcg/125mcg',
    coldChain: true,
    category: 'Pegylated Interferon'
  },
  {
    id: 'ms-014',
    genericName: 'Glatiramer acetate',
    brandName: 'Copaxone / Glatopa',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'SC Injection 20mg/40mg',
    coldChain: true,
    category: 'Immunomodulator'
  },
  {
    id: 'ms-015',
    genericName: 'Cladribine',
    brandName: 'Mavenclad',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'Tablet 10mg',
    category: 'Purine Analog'
  },
  {
    id: 'ms-016',
    genericName: 'Monomethyl fumarate',
    brandName: 'Bafiertam',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'Capsule 95mg/190mg',
    category: 'Oral DMT'
  },
  {
    id: 'ms-017',
    genericName: 'Diroximel fumarate',
    brandName: 'Vumerity',
    indication: 'Relapsing Forms of MS',
    dosageForm: 'Capsule 231mg',
    category: 'Oral DMT'
  },
  {
    id: 'ms-018',
    genericName: 'Mitoxantrone',
    brandName: 'Novantrone',
    indication: 'Progressive MS',
    dosageForm: 'IV Infusion 2mg/ml',
    coldChain: true,
    category: 'Immunosuppressant'
  },
  {
    id: 'ms-019',
    genericName: 'Cyclophosphamide',
    brandName: 'Cytoxan',
    indication: 'Progressive MS (off-label)',
    dosageForm: 'IV Infusion/Tablet',
    price: '₹500 - ₹2,000',
    category: 'Alkylating Agent'
  },
  {
    id: 'ms-020',
    genericName: 'Rituximab',
    brandName: 'MabThera / Rituxan',
    indication: 'MS (off-label)',
    dosageForm: 'IV Infusion 100mg/500mg',
    coldChain: true,
    category: 'Anti-CD20'
  },
  {
    id: 'ms-021',
    genericName: 'Daclizumab',
    brandName: 'Zinbryta (withdrawn)',
    indication: 'Relapsing MS (historical)',
    dosageForm: 'SC Injection 150mg',
    coldChain: true,
    category: 'Anti-CD25'
  },
  {
    id: 'ms-022',
    genericName: 'Azathioprine',
    brandName: 'Imuran',
    indication: 'MS (off-label)',
    dosageForm: 'Tablet 50mg',
    price: '₹150 - ₹500',
    category: 'Immunosuppressant'
  },
  {
    id: 'ms-023',
    genericName: 'Mycophenolate mofetil',
    brandName: 'CellCept',
    indication: 'MS (off-label)',
    dosageForm: 'Tablet 250mg/500mg',
    price: '₹500 - ₹2,000',
    category: 'Immunosuppressant'
  },
  {
    id: 'ms-024',
    genericName: 'Methotrexate',
    brandName: 'Trexall',
    indication: 'Progressive MS (off-label)',
    dosageForm: 'Tablet 2.5mg/Injection',
    price: '₹100 - ₹500',
    category: 'Antimetabolite'
  },
  {
    id: 'ms-025',
    genericName: 'Methylprednisolone',
    brandName: 'Solu-Medrol',
    indication: 'MS Relapses',
    dosageForm: 'IV Infusion 125mg/500mg/1g',
    price: '₹200 - ₹1,000',
    category: 'Corticosteroid'
  },
  {
    id: 'ms-026',
    genericName: 'Prednisone',
    brandName: 'Deltasone',
    indication: 'MS Relapses',
    dosageForm: 'Tablet 5mg/10mg/20mg',
    price: '₹50 - ₹200',
    category: 'Corticosteroid'
  },
  {
    id: 'ms-027',
    genericName: 'Dexamethasone',
    brandName: 'Decadron',
    indication: 'MS Relapses',
    dosageForm: 'Tablet/Injection 0.5mg/4mg',
    price: '₹30 - ₹150',
    category: 'Corticosteroid'
  },
  {
    id: 'ms-028',
    genericName: 'ACTH',
    brandName: 'Acthar Gel',
    indication: 'MS Relapses',
    dosageForm: 'IM/SC Injection',
    coldChain: true,
    category: 'Hormone'
  },
  {
    id: 'ms-029',
    genericName: 'Dalfampridine',
    brandName: 'Ampyra / Fampyra',
    indication: 'MS Walking Improvement',
    dosageForm: 'Tablet ER 10mg',
    category: 'Potassium Channel Blocker'
  },
  {
    id: 'ms-030',
    genericName: 'Baclofen',
    brandName: 'Lioresal / Gablofen',
    indication: 'MS Spasticity',
    dosageForm: 'Tablet 10mg/20mg / Intrathecal',
    price: '₹100 - ₹500',
    category: 'Muscle Relaxant'
  },
  {
    id: 'ms-031',
    genericName: 'Tizanidine',
    brandName: 'Zanaflex',
    indication: 'MS Spasticity',
    dosageForm: 'Tablet 2mg/4mg',
    price: '₹150 - ₹400',
    category: 'Muscle Relaxant'
  },
  {
    id: 'ms-032',
    genericName: 'Diazepam',
    brandName: 'Valium',
    indication: 'MS Spasticity',
    dosageForm: 'Tablet 2mg/5mg/10mg',
    price: '₹50 - ₹200',
    category: 'Benzodiazepine'
  },
  {
    id: 'ms-033',
    genericName: 'Dantrolene',
    brandName: 'Dantrium',
    indication: 'MS Spasticity',
    dosageForm: 'Capsule 25mg/50mg/100mg',
    category: 'Muscle Relaxant'
  },
  {
    id: 'ms-034',
    genericName: 'Gabapentin',
    brandName: 'Neurontin',
    indication: 'MS Neuropathic Pain',
    dosageForm: 'Capsule 100mg/300mg/400mg',
    price: '₹150 - ₹500',
    category: 'Anticonvulsant'
  },
  {
    id: 'ms-035',
    genericName: 'Pregabalin',
    brandName: 'Lyrica',
    indication: 'MS Neuropathic Pain',
    dosageForm: 'Capsule 75mg/150mg',
    price: '₹200 - ₹600',
    category: 'Anticonvulsant'
  },
  {
    id: 'ms-036',
    genericName: 'Amitriptyline',
    brandName: 'Elavil',
    indication: 'MS Pain/Depression',
    dosageForm: 'Tablet 10mg/25mg/50mg',
    price: '₹50 - ₹150',
    category: 'Tricyclic Antidepressant'
  },
  {
    id: 'ms-037',
    genericName: 'Duloxetine',
    brandName: 'Cymbalta',
    indication: 'MS Pain/Depression',
    dosageForm: 'Capsule 30mg/60mg',
    price: '₹200 - ₹500',
    category: 'SNRI'
  },
  {
    id: 'ms-038',
    genericName: 'Modafinil',
    brandName: 'Provigil',
    indication: 'MS Fatigue',
    dosageForm: 'Tablet 100mg/200mg',
    price: '₹300 - ₹800',
    category: 'Wakefulness Agent'
  },
  {
    id: 'ms-039',
    genericName: 'Armodafinil',
    brandName: 'Nuvigil',
    indication: 'MS Fatigue',
    dosageForm: 'Tablet 50mg/150mg/200mg',
    category: 'Wakefulness Agent'
  },
  {
    id: 'ms-040',
    genericName: 'Amantadine',
    brandName: 'Symmetrel',
    indication: 'MS Fatigue',
    dosageForm: 'Tablet 100mg',
    price: '₹150 - ₹400',
    category: 'Dopaminergic'
  },
  {
    id: 'ms-041',
    genericName: 'Methylphenidate',
    brandName: 'Ritalin',
    indication: 'MS Fatigue',
    dosageForm: 'Tablet 5mg/10mg/20mg',
    price: '₹100 - ₹300',
    category: 'Stimulant'
  },
  {
    id: 'ms-042',
    genericName: 'Oxybutynin',
    brandName: 'Ditropan',
    indication: 'MS Bladder Dysfunction',
    dosageForm: 'Tablet 5mg / ER 5mg/10mg',
    price: '₹100 - ₹300',
    category: 'Anticholinergic'
  },
  {
    id: 'ms-043',
    genericName: 'Tolterodine',
    brandName: 'Detrol',
    indication: 'MS Bladder Dysfunction',
    dosageForm: 'Tablet 1mg/2mg',
    price: '₹200 - ₹500',
    category: 'Anticholinergic'
  },
  {
    id: 'ms-044',
    genericName: 'Solifenacin',
    brandName: 'Vesicare',
    indication: 'MS Bladder Dysfunction',
    dosageForm: 'Tablet 5mg/10mg',
    category: 'Anticholinergic'
  },
  {
    id: 'ms-045',
    genericName: 'Mirabegron',
    brandName: 'Myrbetriq',
    indication: 'MS Bladder Dysfunction',
    dosageForm: 'Tablet ER 25mg/50mg',
    category: 'Beta-3 Agonist'
  },
  {
    id: 'ms-046',
    genericName: 'Desmopressin',
    brandName: 'DDAVP',
    indication: 'MS Nocturia',
    dosageForm: 'Tablet/Nasal Spray',
    category: 'Antidiuretic'
  },
  {
    id: 'ms-047',
    genericName: 'Sildenafil',
    brandName: 'Viagra',
    indication: 'MS Sexual Dysfunction',
    dosageForm: 'Tablet 25mg/50mg/100mg',
    price: '₹200 - ₹800',
    category: 'PDE5 Inhibitor'
  },
  {
    id: 'ms-048',
    genericName: 'Tadalafil',
    brandName: 'Cialis',
    indication: 'MS Sexual Dysfunction',
    dosageForm: 'Tablet 5mg/10mg/20mg',
    price: '₹300 - ₹1,000',
    category: 'PDE5 Inhibitor'
  },
  {
    id: 'ms-049',
    genericName: 'Sertraline',
    brandName: 'Zoloft',
    indication: 'MS Depression',
    dosageForm: 'Tablet 25mg/50mg/100mg',
    price: '₹100 - ₹300',
    category: 'SSRI'
  },
  {
    id: 'ms-050',
    genericName: 'Fluoxetine',
    brandName: 'Prozac',
    indication: 'MS Depression',
    dosageForm: 'Capsule 10mg/20mg/40mg',
    price: '₹50 - ₹200',
    category: 'SSRI'
  },
  {
    id: 'ms-051',
    genericName: 'Memantine',
    brandName: 'Namenda',
    indication: 'MS Cognitive Impairment',
    dosageForm: 'Tablet 5mg/10mg',
    category: 'NMDA Antagonist'
  },
  {
    id: 'ms-052',
    genericName: 'Donepezil',
    brandName: 'Aricept',
    indication: 'MS Cognitive Impairment',
    dosageForm: 'Tablet 5mg/10mg',
    price: '₹200 - ₹500',
    category: 'Cholinesterase Inhibitor'
  }
];

export default function MultipleSclerosisPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMedicines = msMedicines.filter(medicine => {
    const matchesSearch =
      medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.indication.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'dmt' && (medicine.category.includes('DMT') || medicine.category.includes('Anti-') || medicine.category.includes('Interferon'))) ||
      (selectedFilter === 'oral' && medicine.dosageForm.toLowerCase().includes('tablet') || medicine.dosageForm.toLowerCase().includes('capsule')) ||
      (selectedFilter === 'injectable' && (medicine.dosageForm.toLowerCase().includes('injection') || medicine.dosageForm.toLowerCase().includes('infusion'))) ||
      (selectedFilter === 'symptom' && (medicine.indication.includes('Spasticity') || medicine.indication.includes('Pain') || medicine.indication.includes('Fatigue')));

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
                <Brain className="w-8 h-8" />
                <span className="text-lg font-semibold">Neurology Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Multiple Sclerosis Medicines
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95">
                Disease-modifying therapies and symptom management medications for comprehensive MS care
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5" />
                  <span>FDA Approved DMTs</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Snowflake className="w-5 h-5" />
                  <span>Cold Chain Maintained</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5" />
                  <span>Neurologist Support</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
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
                    placeholder="Search by medicine name, type, or indication..."
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
                      onClick={() => setSelectedFilter('dmt')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'dmt'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Disease-Modifying
                    </button>
                    <button
                      onClick={() => setSelectedFilter('oral')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'oral'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Oral Medications
                    </button>
                    <button
                      onClick={() => setSelectedFilter('injectable')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'injectable'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Injectables
                    </button>
                    <button
                      onClick={() => setSelectedFilter('symptom')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'symptom'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Symptom Management
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
            <p className="text-gray-600">
              Showing {filteredMedicines.length} of {msMedicines.length} medicines
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

                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Brand:</span> {medicine.brandName}
                  </p>

                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Indication:</span> {medicine.indication}
                  </p>

                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Form:</span> {medicine.dosageForm}
                  </p>

                  <p className="text-xs text-gray-500 mb-4">
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

        {/* MS Support Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Comprehensive MS Care Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Neurologist Network</h3>
                <p className="text-sm text-gray-600">Connect with MS specialists for treatment guidance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Injection Training</h3>
                <p className="text-sm text-gray-600">Home administration support for injectable therapies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Safety Monitoring</h3>
                <p className="text-sm text-gray-600">Regular follow-up and side effect management</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need MS Medication Support?</h2>
            <p className="text-lg mb-6 opacity-95">
              Our MS care team provides comprehensive support for patients and caregivers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/upload-prescription"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Start Consultation
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                MS Helpline
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Medical Disclaimer:</strong> MS medications require careful monitoring by neurologists. Treatment selection depends on disease type, activity, and individual patient factors. Regular MRI monitoring and blood tests may be required. Report any new symptoms to your healthcare provider immediately.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}