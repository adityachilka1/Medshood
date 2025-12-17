/**
 * Shared Product Data Source
 * Single source of truth for all products across frontend catalog and dashboard inventory
 * All prices are in INR (₹)
 */

export interface Product {
  id: string;
  genericName: string;
  brandName: string;
  indication: string;
  dosageForm: string;
  price: number | null; // Price in INR, null for variable/quote-only pricing
  priceDisplay: string; // Display string with ₹ symbol
  coldChain: boolean;
  category: string;
  subcategory?: string;
  manufacturer: string;
  imageUrl?: string;
  ndc?: string; // National Drug Code or internal SKU
  requiresPrescription: boolean;
  // Inventory-specific fields
  inventory?: {
    currentStock: number;
    minStock: number;
    maxStock: number;
    reorderPoint: number;
    monthlyUsage: number;
    lotNumber: string;
    expirationDate: string;
    lastRestocked: string;
  };
}

export type ProductCategory = 'diabetes-endocrine' | 'growth-disorders';

// ============================================================================
// DIABETES & ENDOCRINE CARE PRODUCTS
// ============================================================================

export const diabetesProducts: Product[] = [
  // GLP-1 Agonists - Novo Nordisk
  {
    id: 'dia-001',
    genericName: 'Semaglutide',
    brandName: 'Ozempic 0.25mg',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection (Pen)',
    price: 8800,
    priceDisplay: '₹8,800',
    coldChain: true,
    category: 'GLP-1 Agonist',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/ozempic-pen.svg',
    ndc: 'NOVO-OZP-025',
    requiresPrescription: true,
    inventory: {
      currentStock: 12,
      minStock: 10,
      maxStock: 30,
      reorderPoint: 10,
      monthlyUsage: 8,
      lotNumber: 'LOT2025NV001',
      expirationDate: '2026-06-15',
      lastRestocked: '2025-12-01',
    },
  },
  {
    id: 'dia-002',
    genericName: 'Semaglutide',
    brandName: 'Ozempic 0.5mg',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection (Pen)',
    price: 10170,
    priceDisplay: '₹10,170',
    coldChain: true,
    category: 'GLP-1 Agonist',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/ozempic-pen.svg',
    ndc: 'NOVO-OZP-050',
    requiresPrescription: true,
    inventory: {
      currentStock: 8,
      minStock: 10,
      maxStock: 30,
      reorderPoint: 10,
      monthlyUsage: 10,
      lotNumber: 'LOT2025NV002',
      expirationDate: '2026-05-20',
      lastRestocked: '2025-11-15',
    },
  },
  {
    id: 'dia-003',
    genericName: 'Semaglutide',
    brandName: 'Ozempic 1mg',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection (Pen)',
    price: 11175,
    priceDisplay: '₹11,175',
    coldChain: true,
    category: 'GLP-1 Agonist',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/ozempic-pen.svg',
    ndc: 'NOVO-OZP-100',
    requiresPrescription: true,
    inventory: {
      currentStock: 15,
      minStock: 10,
      maxStock: 40,
      reorderPoint: 10,
      monthlyUsage: 12,
      lotNumber: 'LOT2025NV003',
      expirationDate: '2026-07-10',
      lastRestocked: '2025-12-05',
    },
  },
  {
    id: 'dia-004',
    genericName: 'Semaglutide',
    brandName: 'Wegovy 2.4mg',
    indication: 'Obesity, Weight Management',
    dosageForm: 'SC Injection FlexTouch (Pen)',
    price: 16400,
    priceDisplay: '₹16,400',
    coldChain: true,
    category: 'GLP-1 Agonist',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/wegovy-pen.svg',
    ndc: 'NOVO-WGV-240',
    requiresPrescription: true,
    inventory: {
      currentStock: 5,
      minStock: 8,
      maxStock: 25,
      reorderPoint: 8,
      monthlyUsage: 6,
      lotNumber: 'LOT2025NV004',
      expirationDate: '2026-04-30',
      lastRestocked: '2025-11-20',
    },
  },
  {
    id: 'dia-005',
    genericName: 'Semaglutide (Oral)',
    brandName: 'Rybelsus 7mg',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet (10 Tablets)',
    price: 3300,
    priceDisplay: '₹3,300',
    coldChain: false,
    category: 'GLP-1 Agonist',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/rybelsus-tablet.svg',
    ndc: 'NOVO-RYB-007',
    requiresPrescription: true,
    inventory: {
      currentStock: 25,
      minStock: 20,
      maxStock: 60,
      reorderPoint: 20,
      monthlyUsage: 15,
      lotNumber: 'LOT2025NV010',
      expirationDate: '2026-09-30',
      lastRestocked: '2025-12-10',
    },
  },
  {
    id: 'dia-005b',
    genericName: 'Semaglutide (Oral)',
    brandName: 'Rybelsus 14mg',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet (10 Tablets)',
    price: 3628,
    priceDisplay: '₹3,628',
    coldChain: false,
    category: 'GLP-1 Agonist',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/rybelsus-tablet.svg',
    ndc: 'NOVO-RYB-014',
    requiresPrescription: true,
    inventory: {
      currentStock: 18,
      minStock: 15,
      maxStock: 50,
      reorderPoint: 15,
      monthlyUsage: 12,
      lotNumber: 'LOT2025NV011',
      expirationDate: '2026-10-15',
      lastRestocked: '2025-12-05',
    },
  },

  // GLP-1/GIP Agonist - Eli Lilly (Mounjaro)
  {
    id: 'dia-006',
    genericName: 'Tirzepatide',
    brandName: 'Mounjaro KwikPen 2.5mg',
    indication: 'Type 2 Diabetes, Weight Management',
    dosageForm: 'SC Injection KwikPen',
    price: 13125,
    priceDisplay: '₹13,125',
    coldChain: true,
    category: 'GLP-1/GIP Agonist',
    manufacturer: 'Eli Lilly',
    imageUrl: '/products/mounjaro-pen.svg',
    ndc: 'LILLY-MJ-025',
    requiresPrescription: true,
    inventory: {
      currentStock: 10,
      minStock: 8,
      maxStock: 30,
      reorderPoint: 8,
      monthlyUsage: 7,
      lotNumber: 'LOT2025LL001',
      expirationDate: '2026-08-15',
      lastRestocked: '2025-12-08',
    },
  },
  {
    id: 'dia-007',
    genericName: 'Tirzepatide',
    brandName: 'Mounjaro KwikPen 5mg',
    indication: 'Type 2 Diabetes, Weight Management',
    dosageForm: 'SC Injection KwikPen',
    price: 16406,
    priceDisplay: '₹16,406',
    coldChain: true,
    category: 'GLP-1/GIP Agonist',
    manufacturer: 'Eli Lilly',
    imageUrl: '/products/mounjaro-pen.svg',
    ndc: 'LILLY-MJ-050',
    requiresPrescription: true,
    inventory: {
      currentStock: 8,
      minStock: 8,
      maxStock: 30,
      reorderPoint: 8,
      monthlyUsage: 8,
      lotNumber: 'LOT2025LL002',
      expirationDate: '2026-07-20',
      lastRestocked: '2025-12-01',
    },
  },
  {
    id: 'dia-007b',
    genericName: 'Tirzepatide',
    brandName: 'Mounjaro KwikPen 15mg',
    indication: 'Type 2 Diabetes, Weight Management',
    dosageForm: 'SC Injection KwikPen',
    price: 25781,
    priceDisplay: '₹25,781',
    coldChain: true,
    category: 'GLP-1/GIP Agonist',
    manufacturer: 'Eli Lilly',
    imageUrl: '/products/mounjaro-pen.svg',
    ndc: 'LILLY-MJ-150',
    requiresPrescription: true,
    inventory: {
      currentStock: 3,
      minStock: 5,
      maxStock: 20,
      reorderPoint: 5,
      monthlyUsage: 4,
      lotNumber: 'LOT2025LL003',
      expirationDate: '2026-06-10',
      lastRestocked: '2025-10-15',
    },
  },

  // GLP-1/GIP Agonist - Cipla (Yurpeak)
  {
    id: 'dia-008',
    genericName: 'Tirzepatide',
    brandName: 'Yurpeak KwikPen 2.5mg',
    indication: 'Type 2 Diabetes, Weight Management',
    dosageForm: 'SC Injection KwikPen',
    price: 13125,
    priceDisplay: '₹13,125',
    coldChain: true,
    category: 'GLP-1/GIP Agonist',
    manufacturer: 'Cipla',
    imageUrl: '/products/yurpeak-pen.svg',
    ndc: 'CIPLA-YP-025',
    requiresPrescription: true,
    inventory: {
      currentStock: 6,
      minStock: 5,
      maxStock: 20,
      reorderPoint: 5,
      monthlyUsage: 4,
      lotNumber: 'LOT2025CP001',
      expirationDate: '2026-09-01',
      lastRestocked: '2025-12-01',
    },
  },

  // Ultra-Long-Acting Insulins - Novo Nordisk (Tresiba)
  {
    id: 'dia-009',
    genericName: 'Insulin Degludec',
    brandName: 'Tresiba FlexTouch 3ml',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/ml (Pen)',
    price: 1942,
    priceDisplay: '₹1,942',
    coldChain: true,
    category: 'Ultra-Long-Acting Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/tresiba-pen.svg',
    ndc: 'NOVO-TRS-FT',
    requiresPrescription: true,
    inventory: {
      currentStock: 20,
      minStock: 15,
      maxStock: 50,
      reorderPoint: 15,
      monthlyUsage: 18,
      lotNumber: 'LOT2025NV020',
      expirationDate: '2026-08-20',
      lastRestocked: '2025-12-01',
    },
  },
  {
    id: 'dia-010',
    genericName: 'Insulin Degludec',
    brandName: 'Tresiba Penfill 3ml',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'Cartridge 100U/ml (5 Cartridges)',
    price: 7200,
    priceDisplay: '₹7,200',
    coldChain: true,
    category: 'Ultra-Long-Acting Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/tresiba-pen.svg',
    ndc: 'NOVO-TRS-PF',
    requiresPrescription: true,
    inventory: {
      currentStock: 12,
      minStock: 10,
      maxStock: 35,
      reorderPoint: 10,
      monthlyUsage: 8,
      lotNumber: 'LOT2025NV021',
      expirationDate: '2026-07-15',
      lastRestocked: '2025-11-25',
    },
  },

  // Combination Insulin - Novo Nordisk (Ryzodeg)
  {
    id: 'dia-011',
    genericName: 'Insulin Degludec/Aspart',
    brandName: 'Ryzodeg FlexTouch 3ml',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/ml (Pen)',
    price: 1595,
    priceDisplay: '₹1,595',
    coldChain: true,
    category: 'Combination Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/ryzodeg-pen.svg',
    ndc: 'NOVO-RZD-FT',
    requiresPrescription: true,
    inventory: {
      currentStock: 15,
      minStock: 10,
      maxStock: 40,
      reorderPoint: 10,
      monthlyUsage: 10,
      lotNumber: 'LOT2025NV022',
      expirationDate: '2026-06-20',
      lastRestocked: '2025-12-05',
    },
  },
  {
    id: 'dia-012',
    genericName: 'Insulin Degludec/Aspart',
    brandName: 'Ryzodeg Penfill 3ml',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'Cartridge 100U/ml (5 Cartridges)',
    price: 6193,
    priceDisplay: '₹6,193',
    coldChain: true,
    category: 'Combination Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/ryzodeg-pen.svg',
    ndc: 'NOVO-RZD-PF',
    requiresPrescription: true,
    inventory: {
      currentStock: 10,
      minStock: 8,
      maxStock: 30,
      reorderPoint: 8,
      monthlyUsage: 6,
      lotNumber: 'LOT2025NV023',
      expirationDate: '2026-05-30',
      lastRestocked: '2025-11-20',
    },
  },

  // Rapid-Acting Insulins - Novo Nordisk
  {
    id: 'dia-013',
    genericName: 'Insulin Aspart',
    brandName: 'NovoRapid Penfill',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'Cartridge 100U/ml (5 Cartridges)',
    price: 4685,
    priceDisplay: '₹4,685',
    coldChain: true,
    category: 'Rapid-Acting Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/novorapid-pen.svg',
    ndc: 'NOVO-NVR-PF',
    requiresPrescription: true,
    inventory: {
      currentStock: 15,
      minStock: 10,
      maxStock: 40,
      reorderPoint: 10,
      monthlyUsage: 12,
      lotNumber: 'LOT2025NV030',
      expirationDate: '2026-05-30',
      lastRestocked: '2025-11-25',
    },
  },
  {
    id: 'dia-014',
    genericName: 'Faster Insulin Aspart',
    brandName: 'Fiasp FlexTouch',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/ml (Pen)',
    price: 915,
    priceDisplay: '₹915',
    coldChain: true,
    category: 'Ultra-Rapid-Acting Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/fiasp-pen.svg',
    ndc: 'NOVO-FSP-FT',
    requiresPrescription: true,
    inventory: {
      currentStock: 12,
      minStock: 10,
      maxStock: 35,
      reorderPoint: 10,
      monthlyUsage: 10,
      lotNumber: 'LOT2025NV031',
      expirationDate: '2026-06-25',
      lastRestocked: '2025-12-08',
    },
  },
  {
    id: 'dia-015',
    genericName: 'Faster Insulin Aspart',
    brandName: 'Fiasp Penfill 3ml',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'Cartridge 100U/ml (5 Cartridges)',
    price: 4074,
    priceDisplay: '₹4,074',
    coldChain: true,
    category: 'Ultra-Rapid-Acting Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/fiasp-pen.svg',
    ndc: 'NOVO-FSP-PF',
    requiresPrescription: true,
    inventory: {
      currentStock: 8,
      minStock: 8,
      maxStock: 30,
      reorderPoint: 8,
      monthlyUsage: 6,
      lotNumber: 'LOT2025NV032',
      expirationDate: '2026-05-15',
      lastRestocked: '2025-11-15',
    },
  },

  // Premixed Insulin - Novo Nordisk (NovoMix)
  {
    id: 'dia-016',
    genericName: 'Biphasic Insulin Aspart',
    brandName: 'NovoMix 30 FlexPen',
    indication: 'Type 2 Diabetes',
    dosageForm: 'SC Injection 100U/ml (Pen)',
    price: 1158,
    priceDisplay: '₹1,158',
    coldChain: true,
    category: 'Premixed Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/novomix-pen.svg',
    ndc: 'NOVO-NMX-FP',
    requiresPrescription: true,
    inventory: {
      currentStock: 18,
      minStock: 12,
      maxStock: 45,
      reorderPoint: 12,
      monthlyUsage: 14,
      lotNumber: 'LOT2025NV040',
      expirationDate: '2026-07-10',
      lastRestocked: '2025-12-01',
    },
  },
  {
    id: 'dia-017',
    genericName: 'Biphasic Insulin Aspart',
    brandName: 'NovoMix 30 Penfill',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Cartridge 100U/ml (5 Cartridges)',
    price: 4685,
    priceDisplay: '₹4,685',
    coldChain: true,
    category: 'Premixed Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/novomix-pen.svg',
    ndc: 'NOVO-NMX-PF',
    requiresPrescription: true,
    inventory: {
      currentStock: 10,
      minStock: 8,
      maxStock: 30,
      reorderPoint: 8,
      monthlyUsage: 8,
      lotNumber: 'LOT2025NV041',
      expirationDate: '2026-06-20',
      lastRestocked: '2025-11-25',
    },
  },

  // Intermediate-Acting & Human Insulins
  {
    id: 'dia-018',
    genericName: 'Isophane Insulin (NPH)',
    brandName: 'Insulatard HM Penfill',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'Cartridge 100U/ml (5 Cartridges)',
    price: 2123,
    priceDisplay: '₹2,123',
    coldChain: true,
    category: 'Intermediate-Acting Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/novomix-pen.svg',
    ndc: 'NOVO-INS-PF',
    requiresPrescription: true,
    inventory: {
      currentStock: 15,
      minStock: 10,
      maxStock: 40,
      reorderPoint: 10,
      monthlyUsage: 10,
      lotNumber: 'LOT2025NV050',
      expirationDate: '2026-08-01',
      lastRestocked: '2025-12-05',
    },
  },
  {
    id: 'dia-019',
    genericName: 'Biphasic Human Insulin',
    brandName: 'Mixtard 30 HM Penfill',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Cartridge 100U/ml (5 Cartridges)',
    price: 2123,
    priceDisplay: '₹2,123',
    coldChain: true,
    category: 'Premixed Human Insulin',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/novomix-pen.svg',
    ndc: 'NOVO-MXT-PF',
    requiresPrescription: true,
    inventory: {
      currentStock: 12,
      minStock: 10,
      maxStock: 35,
      reorderPoint: 10,
      monthlyUsage: 8,
      lotNumber: 'LOT2025NV051',
      expirationDate: '2026-07-15',
      lastRestocked: '2025-11-28',
    },
  },

  // Long-Acting Insulin - Sanofi (Lantus)
  {
    id: 'dia-020',
    genericName: 'Insulin Glargine',
    brandName: 'Lantus Cartridges',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'Cartridge 100U/ml',
    price: 641,
    priceDisplay: '₹641',
    coldChain: true,
    category: 'Long-Acting Insulin',
    manufacturer: 'Sanofi Aventis',
    imageUrl: '/products/lantus-pen.svg',
    ndc: 'SANOFI-LAN-C',
    requiresPrescription: true,
    inventory: {
      currentStock: 30,
      minStock: 20,
      maxStock: 60,
      reorderPoint: 20,
      monthlyUsage: 25,
      lotNumber: 'LOT2025SA001',
      expirationDate: '2026-07-15',
      lastRestocked: '2025-11-28',
    },
  },

  // Rapid-Acting Insulin - Sanofi (Apidra)
  {
    id: 'dia-021',
    genericName: 'Insulin Glulisine',
    brandName: 'Apidra Cartridge',
    indication: 'Type 1 & Type 2 Diabetes',
    dosageForm: 'Cartridge 100U/ml',
    price: 837,
    priceDisplay: '₹837',
    coldChain: true,
    category: 'Rapid-Acting Insulin',
    manufacturer: 'Sanofi Aventis',
    imageUrl: '/products/apidra-pen.svg',
    ndc: 'SANOFI-APD-C',
    requiresPrescription: true,
    inventory: {
      currentStock: 14,
      minStock: 10,
      maxStock: 35,
      reorderPoint: 10,
      monthlyUsage: 10,
      lotNumber: 'LOT2025SA002',
      expirationDate: '2026-06-30',
      lastRestocked: '2025-12-01',
    },
  },

  // SGLT2 Inhibitors
  {
    id: 'dia-022',
    genericName: 'Dapagliflozin',
    brandName: 'Justoza 10mg',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 10mg',
    price: 180,
    priceDisplay: '₹180',
    coldChain: false,
    category: 'SGLT2 Inhibitor',
    manufacturer: 'Torrent Pharma',
    ndc: 'TOR-JUS-10',
    requiresPrescription: true,
    inventory: {
      currentStock: 50,
      minStock: 30,
      maxStock: 100,
      reorderPoint: 30,
      monthlyUsage: 35,
      lotNumber: 'LOT2025TP001',
      expirationDate: '2027-01-15',
      lastRestocked: '2025-12-10',
    },
  },
  {
    id: 'dia-023',
    genericName: 'Dapagliflozin',
    brandName: 'Udapa 10mg',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Tablet 10mg',
    price: 141,
    priceDisplay: '₹141',
    coldChain: false,
    category: 'SGLT2 Inhibitor',
    manufacturer: 'USV',
    ndc: 'USV-UDP-10',
    requiresPrescription: true,
    inventory: {
      currentStock: 45,
      minStock: 25,
      maxStock: 80,
      reorderPoint: 25,
      monthlyUsage: 30,
      lotNumber: 'LOT2025USV01',
      expirationDate: '2027-02-20',
      lastRestocked: '2025-12-08',
    },
  },

  // Combination Oral - DPP-4 + Metformin
  {
    id: 'dia-024',
    genericName: 'Sitagliptin + Metformin XR',
    brandName: 'Janumet XR',
    indication: 'Type 2 Diabetes',
    dosageForm: 'Extended Release Tablet',
    price: 310,
    priceDisplay: '₹310',
    coldChain: false,
    category: 'Combination',
    manufacturer: 'MSD',
    ndc: 'MSD-JMT-XR',
    requiresPrescription: true,
    inventory: {
      currentStock: 35,
      minStock: 25,
      maxStock: 80,
      reorderPoint: 25,
      monthlyUsage: 20,
      lotNumber: 'LOT2025MSD01',
      expirationDate: '2026-11-30',
      lastRestocked: '2025-12-05',
    },
  },

  // CGM System - Sinocare
  {
    id: 'dia-025',
    genericName: 'Continuous Glucose Monitor',
    brandName: 'iCan i3 CGM Sinocare',
    indication: 'Diabetes Monitoring',
    dosageForm: 'CGM Kit',
    price: 5575,
    priceDisplay: '₹5,575',
    coldChain: false,
    category: 'CGM System',
    manufacturer: 'Sinocare',
    imageUrl: '/products/ican-cgm.svg',
    ndc: 'SINO-CGM-I3',
    requiresPrescription: false,
    inventory: {
      currentStock: 8,
      minStock: 5,
      maxStock: 20,
      reorderPoint: 5,
      monthlyUsage: 4,
      lotNumber: 'LOT2025SC001',
      expirationDate: '2027-03-01',
      lastRestocked: '2025-12-10',
    },
  },

  // Blood Glucose Monitoring - Sinocare
  {
    id: 'dia-026',
    genericName: 'Blood Glucose Test Strips',
    brandName: 'Safe AQ Maxi 100 Strips',
    indication: 'Blood Sugar Monitoring',
    dosageForm: 'Test Strips (100 count)',
    price: 1685,
    priceDisplay: '₹1,685',
    coldChain: false,
    category: 'Monitoring Supply',
    manufacturer: 'Sinocare',
    imageUrl: '/products/test-strips.svg',
    ndc: 'SINO-STR-100',
    requiresPrescription: false,
    inventory: {
      currentStock: 40,
      minStock: 25,
      maxStock: 80,
      reorderPoint: 25,
      monthlyUsage: 30,
      lotNumber: 'LOT2025SC010',
      expirationDate: '2027-01-15',
      lastRestocked: '2025-12-05',
    },
  },
  {
    id: 'dia-027',
    genericName: 'Blood Glucose Test Strips',
    brandName: 'Safe AQ Max III 50 Strips',
    indication: 'Blood Sugar Monitoring',
    dosageForm: 'Test Strips (50 count)',
    price: 1075,
    priceDisplay: '₹1,075',
    coldChain: false,
    category: 'Monitoring Supply',
    manufacturer: 'Sinocare',
    imageUrl: '/products/test-strips.svg',
    ndc: 'SINO-STR-050',
    requiresPrescription: false,
    inventory: {
      currentStock: 35,
      minStock: 20,
      maxStock: 60,
      reorderPoint: 20,
      monthlyUsage: 25,
      lotNumber: 'LOT2025SC011',
      expirationDate: '2027-02-01',
      lastRestocked: '2025-12-01',
    },
  },
  {
    id: 'dia-028',
    genericName: 'Blood Glucose Meter',
    brandName: 'Safe AQ Max III Glucose Meter',
    indication: 'Blood Sugar Monitoring',
    dosageForm: 'Meter',
    price: 749,
    priceDisplay: '₹749',
    coldChain: false,
    category: 'Monitoring Supply',
    manufacturer: 'Sinocare',
    imageUrl: '/products/glucose-meter.svg',
    ndc: 'SINO-MTR-MAX',
    requiresPrescription: false,
    inventory: {
      currentStock: 15,
      minStock: 8,
      maxStock: 30,
      reorderPoint: 8,
      monthlyUsage: 6,
      lotNumber: 'LOT2025SC020',
      expirationDate: '2028-01-01',
      lastRestocked: '2025-12-10',
    },
  },
  {
    id: 'dia-029',
    genericName: 'Lancets',
    brandName: 'Twist Sinodraw Lancet 28G',
    indication: 'Blood Sample Collection',
    dosageForm: 'Lancets',
    price: 210,
    priceDisplay: '₹210',
    coldChain: false,
    category: 'Monitoring Supply',
    manufacturer: 'Sinocare',
    imageUrl: '/products/pen-needles.svg',
    ndc: 'SINO-LAN-28G',
    requiresPrescription: false,
    inventory: {
      currentStock: 60,
      minStock: 30,
      maxStock: 100,
      reorderPoint: 30,
      monthlyUsage: 40,
      lotNumber: 'LOT2025SC030',
      expirationDate: '2028-06-01',
      lastRestocked: '2025-12-05',
    },
  },

  // Insulin Delivery Devices
  {
    id: 'dia-030',
    genericName: 'Insulin Pen Device',
    brandName: 'NovoPen 4',
    indication: 'Insulin Injection',
    dosageForm: 'Reusable Pen Device',
    price: 1405,
    priceDisplay: '₹1,405',
    coldChain: false,
    category: 'Delivery Device',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/novopen-device.svg',
    ndc: 'NOVO-PEN-4',
    requiresPrescription: false,
    inventory: {
      currentStock: 10,
      minStock: 5,
      maxStock: 25,
      reorderPoint: 5,
      monthlyUsage: 4,
      lotNumber: 'LOT2025NV060',
      expirationDate: '2030-01-01',
      lastRestocked: '2025-11-15',
    },
  },
  {
    id: 'dia-031',
    genericName: 'Pen Needles',
    brandName: 'NovoFine 31G Needles',
    indication: 'Insulin Injection',
    dosageForm: 'Pen Needles',
    price: 16,
    priceDisplay: '₹16/unit',
    coldChain: false,
    category: 'Delivery Device',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/pen-needles.svg',
    ndc: 'NOVO-NFN-31G',
    requiresPrescription: false,
    inventory: {
      currentStock: 120,
      minStock: 60,
      maxStock: 250,
      reorderPoint: 60,
      monthlyUsage: 70,
      lotNumber: 'LOT2025NV070',
      expirationDate: '2028-01-01',
      lastRestocked: '2025-12-01',
    },
  },
  {
    id: 'dia-032',
    genericName: 'Pen Needles',
    brandName: 'NovoFine 32G 4mm',
    indication: 'Insulin Injection',
    dosageForm: 'Pen Needles 4mm',
    price: 17,
    priceDisplay: '₹17/unit',
    coldChain: false,
    category: 'Delivery Device',
    manufacturer: 'Novo Nordisk',
    imageUrl: '/products/pen-needles.svg',
    ndc: 'NOVO-NFN-32G',
    requiresPrescription: false,
    inventory: {
      currentStock: 100,
      minStock: 50,
      maxStock: 200,
      reorderPoint: 50,
      monthlyUsage: 60,
      lotNumber: 'LOT2025NV050',
      expirationDate: '2028-01-01',
      lastRestocked: '2025-12-01',
    },
  },
  {
    id: 'dia-033',
    genericName: 'Pen Needles',
    brandName: 'BD Ultra-Fine Pen Needles',
    indication: 'Insulin Injection',
    dosageForm: 'Pen Needles',
    price: 22,
    priceDisplay: '₹22/unit',
    coldChain: false,
    category: 'Delivery Device',
    manufacturer: 'Becton Dickinson',
    imageUrl: '/products/pen-needles.svg',
    ndc: 'BD-UFN-001',
    requiresPrescription: false,
    inventory: {
      currentStock: 80,
      minStock: 40,
      maxStock: 150,
      reorderPoint: 40,
      monthlyUsage: 50,
      lotNumber: 'LOT2025BD001',
      expirationDate: '2028-02-15',
      lastRestocked: '2025-11-28',
    },
  },

  // Thyroid Medications
  {
    id: 'dia-034',
    genericName: 'Levothyroxine',
    brandName: 'Thyronorm 75mcg',
    indication: 'Hypothyroidism',
    dosageForm: 'Tablet 75mcg',
    price: 193,
    priceDisplay: '₹193',
    coldChain: false,
    category: 'Thyroid Hormone',
    manufacturer: 'Abbott',
    ndc: 'ABT-THY-075',
    requiresPrescription: true,
    inventory: {
      currentStock: 60,
      minStock: 40,
      maxStock: 120,
      reorderPoint: 40,
      monthlyUsage: 45,
      lotNumber: 'LOT2025ABT01',
      expirationDate: '2027-03-15',
      lastRestocked: '2025-12-05',
    },
  },
];

// ============================================================================
// GROWTH DISORDERS PRODUCTS
// ============================================================================

export const growthDisordersProducts: Product[] = [
  {
    id: 'growth-001',
    genericName: 'Somatropin (rDNA)',
    brandName: 'Genotropin GoQuick 36IU/12mg',
    indication: 'Growth Hormone Deficiency in Children and Adults, Turner Syndrome, Chronic Renal Insufficiency, Prader-Willi Syndrome',
    dosageForm: 'Pre-filled Pen 36IU (12mg)',
    price: 15142,
    priceDisplay: '₹15,142',
    coldChain: true,
    category: 'Growth Hormone',
    manufacturer: 'Pfizer',
    imageUrl: '/products/genotropin-pen.svg',
    ndc: 'PFIZER-GEN-36',
    requiresPrescription: true,
    inventory: {
      currentStock: 4,
      minStock: 3,
      maxStock: 12,
      reorderPoint: 3,
      monthlyUsage: 2,
      lotNumber: 'LOT2025PF001',
      expirationDate: '2026-04-01',
      lastRestocked: '2025-11-15',
    },
  },
];

// ============================================================================
// COMBINED PRODUCTS & HELPER FUNCTIONS
// ============================================================================

export const allProducts: Product[] = [...diabetesProducts, ...growthDisordersProducts];

/**
 * Get products by category
 */
export function getProductsByCategory(category: ProductCategory): Product[] {
  switch (category) {
    case 'diabetes-endocrine':
      return diabetesProducts;
    case 'growth-disorders':
      return growthDisordersProducts;
    default:
      return [];
  }
}

/**
 * Get a single product by ID
 */
export function getProductById(id: string): Product | undefined {
  return allProducts.find(p => p.id === id);
}

/**
 * Get products with inventory data (for dashboard)
 */
export function getInventoryProducts(): Product[] {
  return allProducts.filter(p => p.inventory);
}

/**
 * Get inventory status for a product
 */
export function getInventoryStatus(product: Product): 'critical' | 'low' | 'in-stock' | 'expiring' {
  if (!product.inventory) return 'in-stock';

  const { currentStock, minStock, expirationDate } = product.inventory;

  // Check expiration
  const daysUntilExpiration = Math.ceil(
    (new Date(expirationDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );
  if (daysUntilExpiration < 90) return 'expiring';

  // Check stock levels
  if (currentStock <= minStock * 0.5) return 'critical';
  if (currentStock <= minStock) return 'low';

  return 'in-stock';
}

/**
 * Format price for display
 */
export function formatPrice(price: number | null): string {
  if (price === null) return 'Request Quote';
  return `₹${price.toLocaleString('en-IN')}`;
}

/**
 * Convert product to frontend catalog format
 */
export function toFrontendProduct(product: Product) {
  return {
    id: product.id,
    genericName: product.genericName,
    brandName: product.brandName,
    indication: product.indication,
    dosageForm: product.dosageForm,
    price: product.priceDisplay,
    coldChain: product.coldChain,
    category: product.category,
    imageUrl: product.imageUrl,
  };
}

/**
 * Convert product to inventory item format (for dashboard)
 */
export function toInventoryItem(product: Product) {
  if (!product.inventory) return null;

  return {
    id: product.id,
    medicationName: `${product.brandName} (${product.genericName})`,
    ndc: product.ndc || product.id,
    category: product.category,
    manufacturer: product.manufacturer,
    dosage: product.dosageForm,
    currentStock: product.inventory.currentStock,
    minStock: product.inventory.minStock,
    maxStock: product.inventory.maxStock,
    unitPrice: product.price || 0,
    expirationDate: product.inventory.expirationDate,
    lotNumber: product.inventory.lotNumber,
    coldChain: product.coldChain,
    status: getInventoryStatus(product),
    lastRestocked: product.inventory.lastRestocked,
    reorderPoint: product.inventory.reorderPoint,
    monthlyUsage: product.inventory.monthlyUsage,
  };
}
