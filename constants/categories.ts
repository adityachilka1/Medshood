import {
  RheumatologyIcon,
  DiabetesIcon,
  HeartIcon,
  CancerRibbonIcon,
  TargetIcon,
  KidneyIcon,
  LungsIcon,
  BrainIcon,
  VirusIcon,
} from '@/components/icons/CheckIcon';
import { MedicalCategory } from '@/types';

// Primary Medical Categories for Homepage
export const MEDICAL_CATEGORIES: MedicalCategory[] = [
  {
    id: 'rheumatology',
    name: 'Rheumatology',
    slug: 'rheumatology',
    description: 'Biologics for rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, and autoimmune conditions',
    Icon: RheumatologyIcon,
    colorCode: '#3B82F6',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
    displayOrder: 1,
    isActive: true,
    medicineCount: 85,
  },
  {
    id: 'rare-diseases',
    name: 'Rare Diseases',
    slug: 'rare-diseases',
    description: 'Orphan drugs for Gaucher disease, Pompe disease, Fabry disease, and other rare genetic conditions',
    Icon: HeartIcon,
    colorCode: '#EF4444',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-red-600',
    displayOrder: 2,
    isActive: true,
    medicineCount: 62,
  },
  {
    id: 'cancer',
    name: 'Cancer Care',
    slug: 'cancer-care',
    description: 'Chemotherapy, targeted therapy, immunotherapy, and supportive care medications',
    Icon: CancerRibbonIcon,
    colorCode: '#8B5CF6',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-600',
    displayOrder: 3,
    isActive: true,
    medicineCount: 320,
  },
  {
    id: 'multiple-sclerosis',
    name: 'Multiple Sclerosis',
    slug: 'multiple-sclerosis',
    description: 'Disease-modifying therapies, infusion medications, and MS symptom management',
    Icon: TargetIcon,
    colorCode: '#10B981',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-green-600',
    displayOrder: 4,
    isActive: true,
    medicineCount: 42,
  },
  {
    id: 'hemophilia',
    name: 'Hemophilia & Bleeding Disorders',
    slug: 'hemophilia-bleeding-disorders',
    description: 'Factor replacement therapy, gene therapy, and bleeding disorder management',
    Icon: KidneyIcon,
    colorCode: '#14B8A6',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-teal-600',
    displayOrder: 5,
    isActive: true,
    medicineCount: 38,
  },
  {
    id: 'inflammatory-bowel',
    name: 'Inflammatory Bowel Disease',
    slug: 'inflammatory-bowel-disease',
    description: 'Biologics for Crohn\'s disease, ulcerative colitis, and IBD therapy management',
    Icon: LungsIcon,
    colorCode: '#06B6D4',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-cyan-600',
    displayOrder: 6,
    isActive: true,
    medicineCount: 67,
  },
  {
    id: 'growth-disorders',
    name: 'Growth Disorders',
    slug: 'growth-disorders',
    description: 'Growth hormone therapy for pediatric and adult growth hormone deficiency',
    Icon: BrainIcon,
    colorCode: '#F59E0B',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-600',
    displayOrder: 7,
    isActive: true,
    medicineCount: 28,
  },
  {
    id: 'hiv-aids',
    name: 'HIV/AIDS Care',
    slug: 'hiv-aids-care',
    description: 'Antiretroviral therapy, PrEP medications, and HIV treatment solutions',
    Icon: VirusIcon,
    colorCode: '#EC4899',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-pink-600',
    displayOrder: 8,
    isActive: true,
    medicineCount: 180,
  },
  {
    id: 'diabetes-endocrine',
    name: 'Diabetes & Endocrine Care',
    slug: 'diabetes-endocrine-care',
    description: 'Injectable insulins, GLP-1 agonists (Ozempic, Mounjaro, Wegovy), SGLT2 inhibitors, oral medications, and CGM supplies',
    Icon: DiabetesIcon,
    colorCode: '#F59E0B',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-600',
    displayOrder: 9,
    isActive: true,
    medicineCount: 50,
  },
];

// Featured Categories for Quick Access
export const FEATURED_CATEGORIES = MEDICAL_CATEGORIES.slice(0, 4);

// All Categories (for full catalog)
export const ALL_CATEGORIES = MEDICAL_CATEGORIES;

// Category Slugs for Routing
export const CATEGORY_SLUGS = MEDICAL_CATEGORIES.map(cat => cat.slug);

// Get Category by Slug
export const getCategoryBySlug = (slug: string): MedicalCategory | undefined => {
  return MEDICAL_CATEGORIES.find(cat => cat.slug === slug);
};

// Get Category by ID
export const getCategoryById = (id: string): MedicalCategory | undefined => {
  return MEDICAL_CATEGORIES.find(cat => cat.id === id);
};

// Platform Stats
export const PLATFORM_STATS = [
  { value: '5,000+', label: 'Specialty Medications', sublabel: 'rare disease & imported therapies' },
  { value: '50,000+', label: 'Patients Served', sublabel: 'across 2,500+ cities' },
  { value: '24 Hrs', label: 'Metro Delivery', sublabel: 'next-day in tier-2/tier-3 cities' },
  { value: 'Upto 85%', label: 'Savings on Medicines', sublabel: 'competitive pricing guaranteed' },
];

// Trust Badges
export const TRUST_BADGES = [
  { text: '100% Authentic Medicines', icon: '✓' },
  { text: 'Upto 85% Savings', icon: '✓' },
  { text: 'Cold Chain Certified', icon: '✓' },
  { text: 'Pan-India Coverage', icon: '✓' },
  { text: 'COD & Multiple Payment Options', icon: '✓' },
  { text: 'Imported Medicines Available', icon: '✓' },
];
