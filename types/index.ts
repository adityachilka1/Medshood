// Medical Quiz Form Types
export interface MedicalQuizFormData {
  // Step 1: Basic Info
  age: string;
  gender: 'Male' | 'Female' | 'Other' | '';

  // Step 2: Measurements
  weight: string; // kg
  height: string; // cm
  targetWeight: string; // kg

  // Step 3: Medical History
  medicalConditions: string[];

  // Step 4: Current Medications
  currentMedications: string;

  // Step 5: Previous Attempts
  previousAttempts: string;

  // Step 6: Lifestyle
  activityLevel: string;

  // Step 7: Contact Info
  email: string;
  phone: string;
}

export interface FormErrors {
  age?: string;
  gender?: string;
  weight?: string;
  height?: string;
  targetWeight?: string;
  medicalConditions?: string;
  currentMedications?: string;
  previousAttempts?: string;
  activityLevel?: string;
  email?: string;
  phone?: string;
}

export interface EligibilityResult {
  eligible: boolean;
  bmi: number;
  reasons: string[];
  recommendations: string[];
}

// UI Component Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export interface FormInputProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  min?: string;
  max?: string;
  step?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  autoComplete?: string;
  inputMode?: 'text' | 'numeric' | 'tel' | 'email' | 'url';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'elevated';
}

// Pricing Types
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
  savings: string | null;
  href: string;
}

// Stats Types
export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

// Process Step Types
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

// Benefit Types
export interface Benefit {
  title: string;
  description: string;
  icon: string;
  color?: string;
}

// FAQ Types
export interface FAQ {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  items: FAQ[];
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Constants
export const MEDICAL_CONDITIONS = [
  'Type 2 Diabetes',
  'High Blood Pressure',
  'High Cholesterol',
  'Sleep Apnea',
  'PCOS',
  'Heart Disease',
  'Fatty Liver Disease',
  'Joint Pain',
  'None of the above'
] as const;

export const ACTIVITY_LEVELS = [
  'Sedentary (little to no exercise)',
  'Lightly active (exercise 1-3 days/week)',
  'Moderately active (exercise 3-5 days/week)',
  'Very active (exercise 6-7 days/week)',
  'Extremely active (physical job + exercise)'
] as const;

export const PREVIOUS_ATTEMPTS = [
  'Diet and exercise only',
  'Commercial weight loss programs (Weight Watchers, etc.)',
  'Meal replacement shakes',
  'Other prescription medications',
  'Bariatric surgery',
  'None - this is my first attempt'
] as const;

// Validation Constants
export const MIN_AGE = 18;
export const MAX_AGE = 100;
export const MIN_WEIGHT = 30;
export const MAX_WEIGHT = 300;
export const MIN_HEIGHT = 100;
export const MAX_HEIGHT = 250;
export const MIN_ELIGIBLE_BMI = 30;
export const MIN_BMI_WITH_CONDITIONS = 27;
export const MAX_MEDICATIONS_LENGTH = 1000;

// ===== EXPANDED HEALTHCARE PLATFORM TYPES =====

// Medicine Catalog
export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  brandName: string;
  manufacturer: string;

  // Product Details
  strength: string;
  dosageForm: 'tablet' | 'capsule' | 'injection' | 'syrup' | 'cream' | 'inhaler' | 'drops' | 'powder' | 'other';
  packSize: string;

  // Pricing
  mrp: number;
  sellingPrice: number;
  discountPercentage: number;

  // Categories
  categoryId: string;
  categoryName: string;
  subCategoryId?: string;
  therapeuticClass: string;

  // Prescription
  requiresPrescription: boolean;
  prescriptionType: 'RX' | 'OTC';
  schedule?: 'H' | 'H1' | 'X';

  // Medical Information
  uses: string[];
  sideEffects: string[];
  contraindications: string[];
  interactions: string[];
  dosageInstructions: string;
  warnings: string[];

  // Storage & Availability
  storageConditions: string;
  requiresColdChain: boolean;
  inStock: boolean;
  stockQuantity: number;
  estimatedDelivery: string;

  // Alternatives
  genericAlternatives?: string[];
  brandAlternatives?: string[];

  // Images & SEO
  imageUrl: string;
  images?: string[];
  slug: string;
}

// Medical Categories
export interface MedicalCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  colorCode: string;
  gradientFrom: string;
  gradientTo: string;
  displayOrder: number;
  isActive: boolean;
  parentCategoryId?: string;
  medicineCount?: number;
  imageUrl?: string;
}

// Health Conditions
export interface MedicalCondition {
  id: string;
  name: string;
  slug: string;
  description: string;
  symptoms: string[];
  causes: string[];
  treatmentOptions: string[];
  preventionTips: string[];
  relatedMedicines: string[];
  prevalence?: string;
  imageUrl?: string;
  categoryId: string;
}

// Prescription Management
export interface Prescription {
  id: string;
  userId: string;
  uploadDate: Date;
  expiryDate: Date;

  // Doctor Information
  doctorName: string;
  doctorRegistration: string;
  hospitalName?: string;

  // Prescription Details
  prescriptionNumber?: string;
  issueDate: Date;
  medicines: PrescribedMedicine[];

  // Verification
  verificationStatus: 'pending' | 'verified' | 'rejected';
  verifiedBy?: string;
  verificationDate?: Date;
  rejectionReason?: string;

  // Files
  imageUrls: string[];
  pdfUrl?: string;

  // Usage Tracking
  timesUsed: number;
  lastUsedDate?: Date;
}

export interface PrescribedMedicine {
  medicineName: string;
  genericName?: string;
  strength: string;
  dosageForm: string;
  quantity: number;
  dosageInstructions: string;
  duration: string;
  refills?: number;
}

// Patient Assistance Programs
export interface PatientAssistanceProgram {
  id: string;
  name: string;
  manufacturer: string;
  eligibleMedicines: string[];
  discountPercentage: number;
  maxDiscount?: number;

  // Eligibility
  incomeCriteria?: string;
  medicalCriteria?: string;
  documentRequired: string[];

  // Application
  applicationProcess: string;
  processingTime: string;
  contactInfo: {
    phone?: string;
    email?: string;
    website?: string;
  };

  isActive: boolean;
}

// Drug Interactions
export interface DrugInteraction {
  id: string;
  medicine1Id: string;
  medicine1Name: string;
  medicine2Id: string;
  medicine2Name: string;
  severityLevel: 'major' | 'moderate' | 'minor';
  description: string;
  recommendation: string;
}

// Shopping Cart Item
export interface CartItem {
  id: string;
  medicineId: string;
  medicine: Medicine;
  quantity: number;
  prescriptionRequired: boolean;
  prescriptionId?: string;
  addedAt: Date;
}

// Order Management
export interface Order {
  id: string;
  userId: string;
  orderNumber: string;
  orderDate: Date;

  // Items
  items: OrderItem[];
  totalMrp: number;
  totalDiscount: number;
  totalAmount: number;
  shippingCost: number;
  finalAmount: number;

  // Delivery
  deliveryAddress: Address;
  estimatedDelivery: Date;
  deliveryStatus: 'pending' | 'confirmed' | 'packed' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;

  // Payment
  paymentMethod: 'card' | 'upi' | 'netbanking' | 'cod' | 'wallet';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  transactionId?: string;

  // Prescriptions
  prescriptionIds: string[];
  prescriptionVerified: boolean;

  // Special Handling
  requiresColdChain: boolean;
  specialInstructions?: string;

  // History
  statusHistory: OrderStatusUpdate[];
}

export interface OrderItem {
  medicineId: string;
  medicineName: string;
  genericName?: string;
  quantity: number;
  mrp: number;
  sellingPrice: number;
  discount: number;
}

export interface OrderStatusUpdate {
  status: string;
  timestamp: Date;
  note?: string;
  location?: string;
}

export interface Address {
  id?: string;
  fullName: string;
  phone: string;
  email?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  addressType: 'home' | 'work' | 'other';
  isDefault?: boolean;
}

// Search & Filters
export interface MedicineSearchParams {
  query?: string;
  categoryId?: string;
  conditionId?: string;
  priceMin?: number;
  priceMax?: number;
  requiresPrescription?: boolean;
  inStockOnly?: boolean;
  sortBy?: 'relevance' | 'priceLowToHigh' | 'priceHighToLow' | 'popularity' | 'newest' | 'discount';
  page?: number;
  limit?: number;
}

export interface SearchResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// User Profile (Extended)
export interface UserProfile {
  id: string;
  email: string;
  phone: string;
  fullName: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other';

  // Medical Information
  bloodGroup?: string;
  allergies?: string[];
  chronicConditions?: string[];
  currentMedications?: string[];

  // Preferences
  preferredLanguage: 'en' | 'hi' | 'ta' | 'te' | 'ml' | 'bn';
  notificationPreferences: {
    email: boolean;
    sms: boolean;
    whatsapp: boolean;
    push: boolean;
  };

  // Addresses
  addresses: Address[];
  defaultAddressId?: string;

  // Account
  createdAt: Date;
  lastLoginAt?: Date;
  isVerified: boolean;
  loyaltyPoints?: number;
}
