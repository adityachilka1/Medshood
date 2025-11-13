'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, Shield, Snowflake, Phone, ChevronRight, Heart, AlertCircle } from 'lucide-react';

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

const rareDiseaseMedicines: Medicine[] = [
  {
    id: 'rare-001',
    genericName: 'Imiglucerase',
    brandName: 'Cerezyme',
    indication: 'Gaucher Disease Type 1, 3',
    dosageForm: 'IV Infusion 200U/400U',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-002',
    genericName: 'Velaglucerase alfa',
    brandName: 'VPRIV',
    indication: 'Gaucher Disease',
    dosageForm: 'IV Infusion 400U',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-003',
    genericName: 'Taliglucerase alfa',
    brandName: 'Elelyso',
    indication: 'Gaucher Disease',
    dosageForm: 'IV Infusion 200U',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-004',
    genericName: 'Agalsidase alfa',
    brandName: 'Replagal',
    indication: 'Fabry Disease',
    dosageForm: 'IV Infusion 1mg/ml',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-005',
    genericName: 'Agalsidase beta',
    brandName: 'Fabrazyme',
    indication: 'Fabry Disease',
    dosageForm: 'IV Infusion 5mg/35mg',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-006',
    genericName: 'Alglucosidase alfa',
    brandName: 'Myozyme / Lumizyme',
    indication: 'Pompe Disease',
    dosageForm: 'IV Infusion 50mg',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-007',
    genericName: 'Idursulfase',
    brandName: 'Elaprase',
    indication: 'Hunter Syndrome (MPS II)',
    dosageForm: 'IV Infusion 6mg',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-008',
    genericName: 'Elosulfase alfa',
    brandName: 'Vimizim',
    indication: 'Morquio A Syndrome (MPS IVA)',
    dosageForm: 'IV Infusion 5mg',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-009',
    genericName: 'Laronidase',
    brandName: 'Aldurazyme',
    indication: 'MPS I (Hurler, Scheie)',
    dosageForm: 'IV Infusion 2.9mg',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-010',
    genericName: 'Galsulfase',
    brandName: 'Naglazyme',
    indication: 'MPS VI (Maroteaux-Lamy)',
    dosageForm: 'IV Infusion 5mg',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-011',
    genericName: 'Miglustat',
    brandName: 'Zavesca',
    indication: 'Gaucher Disease, Niemann-Pick C',
    dosageForm: 'Capsule 100mg',
    category: 'Substrate Reduction Therapy'
  },
  {
    id: 'rare-012',
    genericName: 'Eliglustat',
    brandName: 'Cerdelga',
    indication: 'Gaucher Disease Type 1',
    dosageForm: 'Capsule 84mg',
    category: 'Substrate Reduction Therapy'
  },
  {
    id: 'rare-013',
    genericName: 'Migalastat',
    brandName: 'Galafold',
    indication: 'Fabry Disease (amenable mutations)',
    dosageForm: 'Capsule 123mg',
    category: 'Chaperone Therapy'
  },
  {
    id: 'rare-014',
    genericName: 'Asfotase alfa',
    brandName: 'Strensiq',
    indication: 'Hypophosphatasia',
    dosageForm: 'SC Injection 18mg/28mg/40mg/80mg',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-015',
    genericName: 'Sebelipase alfa',
    brandName: 'Kanuma',
    indication: 'Lysosomal Acid Lipase Deficiency',
    dosageForm: 'IV Infusion 20mg',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-016',
    genericName: 'Cerliponase alfa',
    brandName: 'Brineura',
    indication: 'CLN2 Batten Disease',
    dosageForm: 'Intracerebroventricular Infusion',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-017',
    genericName: 'Vestronidase alfa',
    brandName: 'Mepsevii',
    indication: 'MPS VII (Sly Syndrome)',
    dosageForm: 'IV Infusion 10mg',
    coldChain: true,
    category: 'Enzyme Replacement Therapy'
  },
  {
    id: 'rare-018',
    genericName: 'Eculizumab',
    brandName: 'Soliris',
    indication: 'PNH, aHUS, Myasthenia Gravis',
    dosageForm: 'IV Infusion 300mg',
    coldChain: true,
    category: 'Complement Inhibitor'
  },
  {
    id: 'rare-019',
    genericName: 'Ravulizumab',
    brandName: 'Ultomiris',
    indication: 'PNH, aHUS',
    dosageForm: 'IV Infusion 300mg/1100mg',
    coldChain: true,
    category: 'Complement Inhibitor'
  },
  {
    id: 'rare-020',
    genericName: 'Satralizumab',
    brandName: 'Enspryng',
    indication: 'Neuromyelitis Optica Spectrum Disorder',
    dosageForm: 'SC Injection 120mg',
    coldChain: true,
    category: 'Anti-IL-6 Receptor'
  },
  {
    id: 'rare-021',
    genericName: 'Inebilizumab',
    brandName: 'Uplizna',
    indication: 'Neuromyelitis Optica Spectrum Disorder',
    dosageForm: 'IV Infusion 100mg',
    coldChain: true,
    category: 'Anti-CD19'
  },
  {
    id: 'rare-022',
    genericName: 'Nusinersen',
    brandName: 'Spinraza',
    indication: 'Spinal Muscular Atrophy',
    dosageForm: 'Intrathecal Injection 12mg',
    coldChain: true,
    category: 'Antisense Oligonucleotide'
  },
  {
    id: 'rare-023',
    genericName: 'Risdiplam',
    brandName: 'Evrysdi',
    indication: 'Spinal Muscular Atrophy',
    dosageForm: 'Oral Solution 0.75mg/ml',
    coldChain: true,
    category: 'SMN2 Splicing Modifier'
  },
  {
    id: 'rare-024',
    genericName: 'Onasemnogene abeparvovec',
    brandName: 'Zolgensma',
    indication: 'Spinal Muscular Atrophy',
    dosageForm: 'IV Infusion (gene therapy)',
    coldChain: true,
    category: 'Gene Therapy'
  },
  {
    id: 'rare-025',
    genericName: 'Ataluren',
    brandName: 'Translarna',
    indication: 'Duchenne Muscular Dystrophy (nonsense mutation)',
    dosageForm: 'Granules 125mg/250mg/1000mg',
    category: 'Read-Through Agent'
  },
  {
    id: 'rare-026',
    genericName: 'Eteplirsen',
    brandName: 'Exondys 51',
    indication: 'Duchenne Muscular Dystrophy (exon 51)',
    dosageForm: 'IV Infusion 50mg/ml',
    coldChain: true,
    category: 'Antisense Oligonucleotide'
  },
  {
    id: 'rare-027',
    genericName: 'Golodirsen',
    brandName: 'Vyondys 53',
    indication: 'Duchenne Muscular Dystrophy (exon 53)',
    dosageForm: 'IV Infusion 50mg/ml',
    coldChain: true,
    category: 'Antisense Oligonucleotide'
  },
  {
    id: 'rare-028',
    genericName: 'Viltolarsen',
    brandName: 'Viltepso',
    indication: 'Duchenne Muscular Dystrophy (exon 53)',
    dosageForm: 'IV Infusion 50mg/ml',
    coldChain: true,
    category: 'Antisense Oligonucleotide'
  },
  {
    id: 'rare-029',
    genericName: 'Casimersen',
    brandName: 'Amondys 45',
    indication: 'Duchenne Muscular Dystrophy (exon 45)',
    dosageForm: 'IV Infusion 50mg/ml',
    coldChain: true,
    category: 'Antisense Oligonucleotide'
  },
  {
    id: 'rare-030',
    genericName: 'Deferasirox',
    brandName: 'Exjade / Asunra',
    indication: 'Iron Overload (Thalassemia)',
    dosageForm: 'Tablet 90mg/180mg/360mg',
    price: '₹2,000 - ₹8,000',
    category: 'Iron Chelator'
  },
  {
    id: 'rare-031',
    genericName: 'Deferiprone',
    brandName: 'Ferriprox / Kelfer',
    indication: 'Iron Overload (Thalassemia)',
    dosageForm: 'Tablet 500mg / Solution',
    price: '₹1,500 - ₹5,000',
    category: 'Iron Chelator'
  },
  {
    id: 'rare-032',
    genericName: 'Deferoxamine',
    brandName: 'Desferal',
    indication: 'Iron Overload',
    dosageForm: 'Injection 500mg',
    price: '₹800 - ₹2,500',
    category: 'Iron Chelator'
  },
  {
    id: 'rare-033',
    genericName: 'Luspatercept',
    brandName: 'Reblozyl',
    indication: 'Beta-Thalassemia, MDS',
    dosageForm: 'SC Injection 25mg/75mg',
    coldChain: true,
    category: 'Erythroid Maturation Agent'
  },
  {
    id: 'rare-034',
    genericName: 'Voxelotor',
    brandName: 'Oxbryta',
    indication: 'Sickle Cell Disease',
    dosageForm: 'Tablet 500mg',
    category: 'Hemoglobin S Polymerization Inhibitor'
  },
  {
    id: 'rare-035',
    genericName: 'Crizanlizumab',
    brandName: 'Adakveo',
    indication: 'Sickle Cell Disease',
    dosageForm: 'IV Infusion 10mg/ml',
    coldChain: true,
    category: 'P-Selectin Blocker'
  },
  {
    id: 'rare-036',
    genericName: 'L-glutamine',
    brandName: 'Endari',
    indication: 'Sickle Cell Disease',
    dosageForm: 'Powder 5g',
    category: 'Amino Acid'
  },
  {
    id: 'rare-037',
    genericName: 'Hydroxyurea',
    brandName: 'Siklos / Droxia',
    indication: 'Sickle Cell Disease',
    dosageForm: 'Capsule 200mg/300mg/400mg/500mg',
    price: '₹500 - ₹2,000',
    category: 'Antimetabolite'
  },
  {
    id: 'rare-038',
    genericName: 'Givosiran',
    brandName: 'Givlaari',
    indication: 'Acute Hepatic Porphyria',
    dosageForm: 'SC Injection 189mg',
    coldChain: true,
    category: 'RNAi Therapeutic'
  },
  {
    id: 'rare-039',
    genericName: 'Hemin',
    brandName: 'Panhematin',
    indication: 'Acute Porphyria',
    dosageForm: 'IV Infusion 313mg',
    coldChain: true,
    category: 'Heme Replacement'
  },
  {
    id: 'rare-040',
    genericName: 'Afamelanotide',
    brandName: 'Scenesse',
    indication: 'Erythropoietic Protoporphyria',
    dosageForm: 'SC Implant 16mg',
    coldChain: true,
    category: 'Melanocortin Receptor Agonist'
  },
  {
    id: 'rare-041',
    genericName: 'Patisiran',
    brandName: 'Onpattro',
    indication: 'Hereditary Transthyretin Amyloidosis',
    dosageForm: 'IV Infusion 2mg/ml',
    coldChain: true,
    category: 'RNAi Therapeutic'
  },
  {
    id: 'rare-042',
    genericName: 'Inotersen',
    brandName: 'Tegsedi',
    indication: 'Hereditary Transthyretin Amyloidosis',
    dosageForm: 'SC Injection 284mg',
    coldChain: true,
    category: 'Antisense Oligonucleotide'
  },
  {
    id: 'rare-043',
    genericName: 'Tafamidis',
    brandName: 'Vyndaqel / Vyndamax',
    indication: 'Transthyretin Amyloidosis',
    dosageForm: 'Capsule 20mg/61mg',
    category: 'TTR Stabilizer'
  },
  {
    id: 'rare-044',
    genericName: 'Lomitapide',
    brandName: 'Juxtapid',
    indication: 'Homozygous Familial Hypercholesterolemia',
    dosageForm: 'Capsule 5mg/10mg/20mg',
    category: 'MTP Inhibitor'
  },
  {
    id: 'rare-045',
    genericName: 'Mipomersen',
    brandName: 'Kynamro',
    indication: 'Homozygous Familial Hypercholesterolemia',
    dosageForm: 'SC Injection 200mg',
    coldChain: true,
    category: 'Antisense Oligonucleotide'
  },
  {
    id: 'rare-046',
    genericName: 'Evinacumab',
    brandName: 'Evkeeza',
    indication: 'Homozygous Familial Hypercholesterolemia',
    dosageForm: 'IV Infusion 150mg/ml',
    coldChain: true,
    category: 'ANGPTL3 Inhibitor'
  },
  {
    id: 'rare-047',
    genericName: 'Burosumab',
    brandName: 'Crysvita',
    indication: 'X-linked Hypophosphatemia',
    dosageForm: 'SC Injection 10mg/20mg/30mg',
    coldChain: true,
    category: 'Anti-FGF23'
  },
  {
    id: 'rare-048',
    genericName: 'Pegvaliase',
    brandName: 'Palynziq',
    indication: 'Phenylketonuria',
    dosageForm: 'SC Injection 2.5mg/10mg/20mg',
    coldChain: true,
    category: 'PEGylated Enzyme'
  },
  {
    id: 'rare-049',
    genericName: 'Sapropterin',
    brandName: 'Kuvan',
    indication: 'Phenylketonuria',
    dosageForm: 'Tablet/Powder 100mg',
    category: 'Cofactor Replacement'
  },
  {
    id: 'rare-050',
    genericName: 'Nitisinone',
    brandName: 'Orfadin',
    indication: 'Hereditary Tyrosinemia Type 1',
    dosageForm: 'Capsule 2mg/5mg/10mg/20mg',
    category: 'HPPD Inhibitor'
  },
  {
    id: 'rare-051',
    genericName: 'Carglumic acid',
    brandName: 'Carbaglu',
    indication: 'N-acetylglutamate Synthase Deficiency',
    dosageForm: 'Tablet 200mg',
    category: 'Carbamoyl Phosphate Synthetase Activator'
  },
  {
    id: 'rare-052',
    genericName: 'Sodium phenylbutyrate',
    brandName: 'Buphenyl',
    indication: 'Urea Cycle Disorders',
    dosageForm: 'Tablet/Powder 500mg',
    category: 'Nitrogen Scavenger'
  },
  {
    id: 'rare-053',
    genericName: 'Glycerol phenylbutyrate',
    brandName: 'Ravicti',
    indication: 'Urea Cycle Disorders',
    dosageForm: 'Oral Liquid 1.1g/ml',
    category: 'Nitrogen Scavenger'
  },
  {
    id: 'rare-054',
    genericName: 'Betaine',
    brandName: 'Cystadane',
    indication: 'Homocystinuria',
    dosageForm: 'Powder 1g',
    category: 'Methyl Donor'
  },
  {
    id: 'rare-055',
    genericName: 'Cysteamine',
    brandName: 'Cystagon / Procysbi',
    indication: 'Cystinosis',
    dosageForm: 'Capsule 50mg/150mg',
    category: 'Cystine Depleting Agent'
  },
  {
    id: 'rare-056',
    genericName: 'Mercaptamine ophthalmic',
    brandName: 'Cystadrops',
    indication: 'Corneal Cystine Crystals',
    dosageForm: 'Eye Drops 0.44%',
    coldChain: true,
    category: 'Cystine Depleting Agent'
  },
  {
    id: 'rare-057',
    genericName: 'Trientine',
    brandName: 'Syprine / Cuprior',
    indication: 'Wilson Disease',
    dosageForm: 'Capsule 250mg',
    category: 'Copper Chelator'
  },
  {
    id: 'rare-058',
    genericName: 'Penicillamine',
    brandName: 'Cuprimine / Depen',
    indication: 'Wilson Disease, Cystinuria',
    dosageForm: 'Capsule 250mg',
    price: '₹500 - ₹2,000',
    category: 'Chelating Agent'
  },
  {
    id: 'rare-059',
    genericName: 'Zinc acetate',
    brandName: 'Galzin',
    indication: 'Wilson Disease',
    dosageForm: 'Capsule 25mg/50mg',
    price: '₹800 - ₹2,500',
    category: 'Copper Absorption Inhibitor'
  },
  {
    id: 'rare-060',
    genericName: 'Tiopronin',
    brandName: 'Thiola',
    indication: 'Cystinuria',
    dosageForm: 'Tablet 100mg',
    category: 'Cystine Binding Agent'
  },
  {
    id: 'rare-061',
    genericName: 'Potassium citrate',
    brandName: 'Urocit-K',
    indication: 'Cystinuria, Renal Tubular Acidosis',
    dosageForm: 'Tablet 5mEq/10mEq/15mEq',
    price: '₹300 - ₹1,000',
    category: 'Alkalinizing Agent'
  },
  {
    id: 'rare-062',
    genericName: 'Sodium bicarbonate',
    brandName: 'Various',
    indication: 'Renal Tubular Acidosis',
    dosageForm: 'Tablet 325mg/650mg',
    price: '₹100 - ₹300',
    category: 'Alkalinizing Agent'
  }
];

export default function RareDiseasesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMedicines = rareDiseaseMedicines.filter(medicine => {
    const matchesSearch =
      medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.indication.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'ert' && medicine.category.includes('Enzyme Replacement')) ||
      (selectedFilter === 'gene' && medicine.category.includes('Gene')) ||
      (selectedFilter === 'oral' && (medicine.dosageForm.toLowerCase().includes('tablet') || medicine.dosageForm.toLowerCase().includes('capsule')));

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
                <Heart className="w-8 h-8" />
                <span className="text-lg font-semibold">Rare Disease Care</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Rare Disease Medicines
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95">
                Specialized therapies for rare genetic and metabolic disorders with expert support
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5" />
                  <span>FDA/EMA Approved</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Snowflake className="w-5 h-5" />
                  <span>Temperature Controlled</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <AlertCircle className="w-5 h-5" />
                  <span>Patient Assistance</span>
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
                    placeholder="Search by medicine, condition, or therapy type..."
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
                      All Therapies
                    </button>
                    <button
                      onClick={() => setSelectedFilter('ert')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'ert'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Enzyme Replacement
                    </button>
                    <button
                      onClick={() => setSelectedFilter('gene')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'gene'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Gene Therapy
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
              Showing {filteredMedicines.length} of {rareDiseaseMedicines.length} medicines
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

        {/* Special Support Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Comprehensive Rare Disease Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Patient Assistance Programs</h3>
                <p className="text-sm text-gray-600">Access to financial support and co-pay assistance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Expert Consultation</h3>
                <p className="text-sm text-gray-600">Connect with rare disease specialists and genetic counselors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Specialized Logistics</h3>
                <p className="text-sm text-gray-600">Ultra-cold chain and specialized handling for sensitive biologics</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Rare Disease Medications?</h2>
            <p className="text-lg mb-6 opacity-95">
              Our specialized team provides personalized support for rare disease patients and families
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
                Speak to Expert
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Medical Disclaimer:</strong> Rare disease medications require specialized medical supervision and monitoring. All treatments must be prescribed and managed by qualified healthcare providers experienced in rare disease management. Genetic testing may be required for certain therapies.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}