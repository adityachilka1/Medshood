'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, Shield, Snowflake, Phone, ChevronRight, AlertTriangle, Activity } from 'lucide-react';

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

const diabetesMedicines: Medicine[] = [
  // Rapid-Acting Insulins
  {
    id: 'dia-001',
    genericName: 'Insulin Lispro',
    brandName: 'Humalog / Admelog',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/mL (Pen/Vial)',
    coldChain: true,
    category: 'Rapid-Acting Insulin'
  },
  {
    id: 'dia-002',
    genericName: 'Insulin Aspart',
    brandName: 'NovoLog / Fiasp',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/mL (Pen/Vial)',
    coldChain: true,
    category: 'Rapid-Acting Insulin'
  },
  {
    id: 'dia-003',
    genericName: 'Insulin Glulisine',
    brandName: 'Apidra',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/mL (Pen/Vial)',
    coldChain: true,
    category: 'Rapid-Acting Insulin'
  },

  // Short-Acting Insulins
  {
    id: 'dia-004',
    genericName: 'Regular Insulin (Human)',
    brandName: 'Humulin R / Novolin R',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC/IV Injection 100U/mL',
    coldChain: true,
    category: 'Short-Acting Insulin'
  },

  // Intermediate-Acting Insulins
  {
    id: 'dia-005',
    genericName: 'NPH Insulin (Isophane)',
    brandName: 'Humulin N / Novolin N',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/mL',
    coldChain: true,
    category: 'Intermediate-Acting Insulin'
  },

  // Long-Acting Insulins
  {
    id: 'dia-006',
    genericName: 'Insulin Glargine',
    brandName: 'Lantus / Basaglar / Toujeo',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/mL, 300U/mL (Pen/Vial)',
    coldChain: true,
    category: 'Long-Acting Insulin'
  },
  {
    id: 'dia-007',
    genericName: 'Insulin Detemir',
    brandName: 'Levemir',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/mL (Pen/Vial)',
    coldChain: true,
    category: 'Long-Acting Insulin'
  },
  {
    id: 'dia-008',
    genericName: 'Insulin Degludec',
    brandName: 'Tresiba',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/mL, 200U/mL (Pen)',
    coldChain: true,
    category: 'Ultra-Long-Acting Insulin'
  },

  // Premixed Insulins
  {
    id: 'dia-009',
    genericName: 'Insulin Lispro Mix 75/25',
    brandName: 'Humalog Mix75/25',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection (Pen)',
    coldChain: true,
    category: 'Premixed Insulin'
  },
  {
    id: 'dia-010',
    genericName: 'Insulin Aspart Mix 70/30',
    brandName: 'NovoLog Mix 70/30',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection (Pen)',
    coldChain: true,
    category: 'Premixed Insulin'
  },

  // GLP-1 Receptor Agonists
  {
    id: 'dia-011',
    genericName: 'Semaglutide (Weekly)',
    brandName: 'Ozempic',
    indication: 'Type 2 Diabetes, Weight Management',
    dosageForm: 'SC Injection 0.25mg/0.5mg/1mg/2mg (Pen)',
    coldChain: true,
    category: 'GLP-1 Agonist'
  },
  {
    id: 'dia-012',
    genericName: 'Semaglutide (Oral)',
    brandName: 'Rybelsus',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 3mg/7mg/14mg',
    category: 'GLP-1 Agonist'
  },
  {
    id: 'dia-013',
    genericName: 'Semaglutide (High Dose)',
    brandName: 'Wegovy',
    indication: 'Obesity, Weight Management',
    dosageForm: 'SC Injection 0.25mg-2.4mg (Pen)',
    coldChain: true,
    category: 'GLP-1 Agonist'
  },
  {
    id: 'dia-014',
    genericName: 'Tirzepatide',
    brandName: 'Mounjaro / Zepbound',
    indication: 'Type 2 Diabetes, Weight Management',
    dosageForm: 'SC Injection 2.5mg-15mg (Pen)',
    coldChain: true,
    category: 'GLP-1/GIP Agonist'
  },
  {
    id: 'dia-015',
    genericName: 'Dulaglutide',
    brandName: 'Trulicity',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection 0.75mg/1.5mg/3mg/4.5mg (Pen)',
    coldChain: true,
    category: 'GLP-1 Agonist'
  },
  {
    id: 'dia-016',
    genericName: 'Liraglutide',
    brandName: 'Victoza',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection 0.6mg/1.2mg/1.8mg (Pen)',
    coldChain: true,
    category: 'GLP-1 Agonist'
  },
  {
    id: 'dia-017',
    genericName: 'Liraglutide (High Dose)',
    brandName: 'Saxenda',
    indication: 'Obesity, Weight Management',
    dosageForm: 'SC Injection 3mg (Pen)',
    coldChain: true,
    category: 'GLP-1 Agonist'
  },
  {
    id: 'dia-018',
    genericName: 'Exenatide',
    brandName: 'Byetta',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection 5mcg/10mcg (Pen)',
    coldChain: true,
    category: 'GLP-1 Agonist'
  },
  {
    id: 'dia-019',
    genericName: 'Exenatide Extended Release',
    brandName: 'Bydureon',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection 2mg Weekly',
    coldChain: true,
    category: 'GLP-1 Agonist'
  },

  // SGLT2 Inhibitors
  {
    id: 'dia-020',
    genericName: 'Empagliflozin',
    brandName: 'Jardiance',
    indication: 'Type 2 Diabetes, Heart Failure',
    dosageForm: 'Tablet 10mg/25mg',
    price: '₹3,000 - ₹8,000',
    category: 'SGLT2 Inhibitor'
  },
  {
    id: 'dia-021',
    genericName: 'Dapagliflozin',
    brandName: 'Farxiga / Forxiga',
    indication: 'Type 2 Diabetes, Heart Failure, CKD',
    dosageForm: 'Tablet 5mg/10mg',
    price: '₹2,500 - ₹7,000',
    category: 'SGLT2 Inhibitor'
  },
  {
    id: 'dia-022',
    genericName: 'Canagliflozin',
    brandName: 'Invokana',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 100mg/300mg',
    price: '₹2,800 - ₹7,500',
    category: 'SGLT2 Inhibitor'
  },
  {
    id: 'dia-023',
    genericName: 'Ertugliflozin',
    brandName: 'Steglatro',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 5mg/15mg',
    category: 'SGLT2 Inhibitor'
  },

  // DPP-4 Inhibitors
  {
    id: 'dia-024',
    genericName: 'Sitagliptin',
    brandName: 'Januvia / Sitamet',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 25mg/50mg/100mg',
    price: '₹1,500 - ₹4,000',
    category: 'DPP-4 Inhibitor'
  },
  {
    id: 'dia-025',
    genericName: 'Vildagliptin',
    brandName: 'Galvus / Zomelis',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 50mg',
    price: '₹800 - ₹2,500',
    category: 'DPP-4 Inhibitor'
  },
  {
    id: 'dia-026',
    genericName: 'Linagliptin',
    brandName: 'Trajenta',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 5mg',
    price: '₹1,200 - ₹3,500',
    category: 'DPP-4 Inhibitor'
  },
  {
    id: 'dia-027',
    genericName: 'Saxagliptin',
    brandName: 'Onglyza',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 2.5mg/5mg',
    category: 'DPP-4 Inhibitor'
  },
  {
    id: 'dia-028',
    genericName: 'Alogliptin',
    brandName: 'Nesina',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 6.25mg/12.5mg/25mg',
    category: 'DPP-4 Inhibitor'
  },

  // Biguanides
  {
    id: 'dia-029',
    genericName: 'Metformin',
    brandName: 'Glucophage / Glycomet',
    indication: 'Type 2 Diabetes, PCOS',
    dosageForm: 'Tablet 500mg/850mg/1000mg',
    price: '₹50 - ₹300',
    category: 'Biguanide'
  },
  {
    id: 'dia-030',
    genericName: 'Metformin Extended Release',
    brandName: 'Glucophage XR',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 500mg/750mg/1000mg',
    price: '₹100 - ₹500',
    category: 'Biguanide'
  },

  // Sulfonylureas
  {
    id: 'dia-031',
    genericName: 'Glimepiride',
    brandName: 'Amaryl / Gemer',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 1mg/2mg/3mg/4mg',
    price: '₹100 - ₹500',
    category: 'Sulfonylurea'
  },
  {
    id: 'dia-032',
    genericName: 'Gliclazide',
    brandName: 'Diamicron / Glynase',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 40mg/80mg (MR)',
    price: '₹150 - ₹600',
    category: 'Sulfonylurea'
  },
  {
    id: 'dia-033',
    genericName: 'Glipizide',
    brandName: 'Glucotrol',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 5mg/10mg',
    price: '₹80 - ₹400',
    category: 'Sulfonylurea'
  },
  {
    id: 'dia-034',
    genericName: 'Glyburide',
    brandName: 'DiaBeta / Micronase',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 1.25mg/2.5mg/5mg',
    price: '₹100 - ₹500',
    category: 'Sulfonylurea'
  },

  // Thiazolidinediones
  {
    id: 'dia-035',
    genericName: 'Pioglitazone',
    brandName: 'Actos / Piopar',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 15mg/30mg/45mg',
    price: '₹200 - ₹800',
    category: 'Thiazolidinedione'
  },

  // Alpha-Glucosidase Inhibitors
  {
    id: 'dia-036',
    genericName: 'Acarbose',
    brandName: 'Precose / Glucobay',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 25mg/50mg/100mg',
    price: '₹150 - ₹600',
    category: 'Alpha-Glucosidase Inhibitor'
  },
  {
    id: 'dia-037',
    genericName: 'Voglibose',
    brandName: 'Vogli / Voglital',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 0.2mg/0.3mg',
    price: '₹100 - ₹500',
    category: 'Alpha-Glucosidase Inhibitor'
  },

  // Combination Medications
  {
    id: 'dia-038',
    genericName: 'Sitagliptin + Metformin',
    brandName: 'Janumet',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 50/500mg, 50/1000mg',
    price: '₹2,000 - ₹5,000',
    category: 'Combination'
  },
  {
    id: 'dia-039',
    genericName: 'Empagliflozin + Metformin',
    brandName: 'Synjardy',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 5/500mg, 5/1000mg, 12.5/500mg, 12.5/1000mg',
    price: '₹3,500 - ₹8,000',
    category: 'Combination'
  },
  {
    id: 'dia-040',
    genericName: 'Dapagliflozin + Metformin',
    brandName: 'Xigduo XR',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 5/500mg, 5/1000mg, 10/500mg, 10/1000mg',
    price: '₹3,000 - ₹7,500',
    category: 'Combination'
  },
  {
    id: 'dia-041',
    genericName: 'Vildagliptin + Metformin',
    brandName: 'Galvus Met',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 50/500mg, 50/850mg, 50/1000mg',
    price: '₹1,500 - ₹4,000',
    category: 'Combination'
  },
  {
    id: 'dia-042',
    genericName: 'Glimepiride + Metformin',
    brandName: 'Amaryl M',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 1/500mg, 2/500mg, 2/1000mg',
    price: '₹200 - ₹800',
    category: 'Combination'
  },

  // CGM & Monitoring Systems
  {
    id: 'dia-043',
    genericName: 'Continuous Glucose Monitor',
    brandName: 'FreeStyle Libre / Dexcom G6',
    indication: 'Diabetes Monitoring',
    dosageForm: 'Sensor System (14-day)',
    category: 'CGM System'
  },
  {
    id: 'dia-044',
    genericName: 'Blood Glucose Test Strips',
    brandName: 'Accu-Chek / OneTouch',
    indication: 'Blood Sugar Monitoring',
    dosageForm: 'Test Strips (50/100 count)',
    price: '₹800 - ₹2,500',
    category: 'Monitoring Supply'
  },
  {
    id: 'dia-045',
    genericName: 'Lancets & Lancing Device',
    brandName: 'Various Brands',
    indication: 'Blood Sample Collection',
    dosageForm: 'Lancets (100 count)',
    price: '₹200 - ₹800',
    category: 'Monitoring Supply'
  },

  // Insulin Delivery Devices
  {
    id: 'dia-046',
    genericName: 'Insulin Pen Needles',
    brandName: 'BD Ultra-Fine / NovoFine',
    indication: 'Insulin Injection',
    dosageForm: '4mm/5mm/8mm (100 count)',
    price: '₹500 - ₹1,500',
    category: 'Delivery Device'
  },
  {
    id: 'dia-047',
    genericName: 'Insulin Pump Supplies',
    brandName: 'Medtronic / Omnipod',
    indication: 'Continuous Insulin Delivery',
    dosageForm: 'Infusion Sets & Reservoirs',
    category: 'Delivery Device'
  },

  // Glucagon Emergency Kit
  {
    id: 'dia-048',
    genericName: 'Glucagon',
    brandName: 'GlucaGen / Baqsimi',
    indication: 'Severe Hypoglycemia',
    dosageForm: 'IM Injection 1mg / Nasal Powder 3mg',
    coldChain: true,
    category: 'Emergency Medication'
  },

  // Thyroid Medications
  {
    id: 'dia-049',
    genericName: 'Levothyroxine',
    brandName: 'Synthroid / Eltroxin',
    indication: 'Hypothyroidism',
    dosageForm: 'Tablet 25mcg-200mcg',
    price: '₹100 - ₹500',
    category: 'Thyroid Hormone'
  },
  {
    id: 'dia-050',
    genericName: 'Liothyronine',
    brandName: 'Cytomel',
    indication: 'Hypothyroidism',
    dosageForm: 'Tablet 5mcg/25mcg',
    category: 'Thyroid Hormone'
  }
];

export default function DiabetesEndocrineCarePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMedicines = diabetesMedicines.filter(medicine => {
    const matchesSearch =
      medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.indication.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'insulin' && medicine.category.includes('Insulin')) ||
      (selectedFilter === 'glp1' && medicine.category.includes('GLP-1')) ||
      (selectedFilter === 'sglt2' && medicine.category.includes('SGLT2')) ||
      (selectedFilter === 'oral' && (medicine.category.includes('DPP-4') || medicine.category.includes('Biguanide') || medicine.category.includes('Sulfonylurea') || medicine.category.includes('Thiazolidinedione') || medicine.category.includes('Alpha-Glucosidase'))) ||
      (selectedFilter === 'supplies' && (medicine.category.includes('CGM') || medicine.category.includes('Monitoring') || medicine.category.includes('Delivery')));

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
                <Activity className="w-8 h-8" />
                <span className="text-lg font-semibold">Diabetes & Endocrine Care</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive Diabetes Management
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Injectable insulins, GLP-1 agonists, SGLT2 inhibitors, oral medications, and continuous glucose monitoring supplies for optimal diabetes control
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5" />
                  <span>FDA-Approved Medications</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Snowflake className="w-5 h-5" />
                  <span>Cold Chain for Insulins</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Expert Pharmacist Support</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* 2025 Treatment Updates */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Latest Diabetes Medications 2025</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tirzepatide (Mounjaro)</h3>
                <p className="text-gray-700 text-base leading-relaxed">Dual GLP-1/GIP agonist - superior A1C reduction and weight loss. Weekly injection for Type 2 diabetes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Semaglutide (Ozempic)</h3>
                <p className="text-gray-700 text-base leading-relaxed">Once-weekly GLP-1 with cardiovascular benefits. Oral form (Rybelsus) also available for daily dosing.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CGM Technology</h3>
                <p className="text-gray-700 text-base leading-relaxed">FreeStyle Libre & Dexcom G6 - real-time glucose monitoring without fingersticks for better control.</p>
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
                    placeholder="Search by medicine name, brand, or condition..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
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
                      onClick={() => setSelectedFilter('insulin')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'insulin'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Insulins
                    </button>
                    <button
                      onClick={() => setSelectedFilter('glp1')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'glp1'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      GLP-1 Agonists
                    </button>
                    <button
                      onClick={() => setSelectedFilter('sglt2')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'sglt2'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      SGLT2 Inhibitors
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
                      onClick={() => setSelectedFilter('supplies')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'supplies'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      CGM & Supplies
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
              Showing {filteredMedicines.length} of {diabetesMedicines.length} medicines
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
                    <span className="font-semibold">Category:</span> {medicine.category}
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

        {/* Diabetes Support Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Comprehensive Diabetes Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Clinical Pharmacist Support</h3>
                <p className="text-sm text-gray-700 leading-relaxed">Expert guidance on insulin dosing, GLP-1 therapy, and medication management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Cold Chain Delivery</h3>
                <p className="text-sm text-gray-700 leading-relaxed">Temperature-controlled delivery for all insulin products and GLP-1 agonists</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">CGM & Supply Support</h3>
                <p className="text-sm text-gray-700 leading-relaxed">Complete support for continuous glucose monitors, test strips, and insulin delivery devices</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Diabetes Medication Support?</h2>
            <p className="text-lg mb-6 leading-relaxed max-w-3xl mx-auto">
              Our specialized diabetes care team provides comprehensive support for insulin therapy, GLP-1 agonists, and continuous glucose monitoring
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
                Diabetes Helpline
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800 leading-relaxed">
              <strong>Medical Disclaimer:</strong> Diabetes medications require proper medical supervision and regular monitoring. Insulin must be stored at 2-8°C before use. Blood glucose should be monitored regularly. Consult your endocrinologist for proper dosing and diabetes management. Always check expiration dates on insulin and test strips.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
