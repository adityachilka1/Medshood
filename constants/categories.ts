import {
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
    id: 'diabetes',
    name: 'Diabetes Care',
    slug: 'diabetes',
    description: 'Insulin, oral medications, blood glucose monitors, and diabetes management supplies',
    Icon: DiabetesIcon,
    colorCode: '#3B82F6',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
    displayOrder: 1,
    isActive: true,
    medicineCount: 450,
  },
  {
    id: 'cardiac',
    name: 'Heart Health',
    slug: 'heart-health',
    description: 'Blood pressure medications, cholesterol management, and cardiovascular care',
    Icon: HeartIcon,
    colorCode: '#EF4444',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-red-600',
    displayOrder: 2,
    isActive: true,
    medicineCount: 380,
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
    id: 'weight-management',
    name: 'Weight Management',
    slug: 'weight-management',
    description: 'GLP-1 medications, obesity management, and metabolic health solutions',
    Icon: TargetIcon,
    colorCode: '#10B981',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-green-600',
    displayOrder: 4,
    isActive: true,
    medicineCount: 85,
  },
  {
    id: 'kidney',
    name: 'Kidney Disease',
    slug: 'kidney-disease',
    description: 'Dialysis medications, phosphate binders, and renal nutrition supplements',
    Icon: KidneyIcon,
    colorCode: '#14B8A6',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-teal-600',
    displayOrder: 5,
    isActive: true,
    medicineCount: 220,
  },
  {
    id: 'respiratory',
    name: 'Respiratory Health',
    slug: 'respiratory',
    description: 'Asthma medications, COPD treatments, inhalers, and respiratory care',
    Icon: LungsIcon,
    colorCode: '#06B6D4',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-cyan-600',
    displayOrder: 6,
    isActive: true,
    medicineCount: 290,
  },
  {
    id: 'mental-health',
    name: 'Mental Health',
    slug: 'mental-health',
    description: 'Antidepressants, anxiety medications, ADHD treatments, and psychiatric care',
    Icon: BrainIcon,
    colorCode: '#F59E0B',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-600',
    displayOrder: 7,
    isActive: true,
    medicineCount: 340,
  },
  {
    id: 'hiv-aids',
    name: 'HIV/AIDS Care',
    slug: 'hiv-aids',
    description: 'Antiretroviral therapy, PrEP medications, and HIV treatment solutions',
    Icon: VirusIcon,
    colorCode: '#EC4899',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-pink-600',
    displayOrder: 8,
    isActive: true,
    medicineCount: 180,
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
  { value: '5,000+', label: 'Medicines Available', sublabel: 'across all categories' },
  { value: '500+', label: 'Daily Orders', sublabel: 'and growing' },
  { value: '98%', label: 'Customer Satisfaction', sublabel: 'verified reviews' },
  { value: '24-48hr', label: 'Fast Delivery', sublabel: 'to your doorstep' },
];

// Trust Badges
export const TRUST_BADGES = [
  { text: 'Authentic Medicines', icon: '✓' },
  { text: 'Up to 70% Savings', icon: '✓' },
  { text: 'Licensed Pharmacists', icon: '✓' },
  { text: 'Secure & Private', icon: '✓' },
  { text: 'Pan-India Delivery', icon: '✓' },
  { text: 'Easy Returns', icon: '✓' },
];
