import {
  MedicalQuizFormData,
  FormErrors,
  ContactFormData,
  ContactFormErrors,
  MIN_AGE,
  MAX_AGE,
  MIN_WEIGHT,
  MAX_WEIGHT,
  MIN_HEIGHT,
  MAX_HEIGHT,
  MAX_MEDICATIONS_LENGTH,
} from '@/types';

// Email validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email) && email.length <= 254;
};

// Phone validation (Indian phone numbers)
const INDIAN_PHONE_REGEX = /^\+91\s?[6-9]\d{9}$/;

export const isValidPhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\s/g, '');
  return INDIAN_PHONE_REGEX.test(cleanPhone);
};

// Numeric validation
export const validateNumericInput = (value: string, min: number, max: number): boolean => {
  const num = parseFloat(value);
  return !isNaN(num) && isFinite(num) && num >= min && num <= max;
};

// BMI Calculation
export const calculateBMI = (weightKg: string, heightCm: string): number => {
  if (!validateNumericInput(weightKg, MIN_WEIGHT, MAX_WEIGHT)) return 0;
  if (!validateNumericInput(heightCm, MIN_HEIGHT, MAX_HEIGHT)) return 0;

  const weight = parseFloat(weightKg);
  const height = parseFloat(heightCm) / 100; // Convert cm to meters
  return parseFloat((weight / (height * height)).toFixed(1));
};

// Eligibility Check
export const checkEligibility = (formData: MedicalQuizFormData): boolean => {
  const bmi = calculateBMI(formData.weight, formData.height);
  const age = parseInt(formData.age);

  if (age < MIN_AGE) return false;

  // Eligible if BMI >= 30, OR BMI >= 27 with medical conditions
  if (bmi >= 30) return true;
  if (bmi >= 27 && formData.medicalConditions.length > 0 && !formData.medicalConditions.includes('None of the above')) {
    return true;
  }

  return false;
};

// Quiz Step Validation
export const validateQuizStep = (step: number, formData: MedicalQuizFormData): FormErrors => {
  const errors: FormErrors = {};

  switch (step) {
    case 1: // Basic Info
      if (!formData.age) {
        errors.age = 'Age is required';
      } else {
        const age = parseInt(formData.age);
        if (isNaN(age)) {
          errors.age = 'Please enter a valid age';
        } else if (age < MIN_AGE) {
          errors.age = `You must be at least ${MIN_AGE} years old`;
        } else if (age > MAX_AGE) {
          errors.age = `Please enter an age below ${MAX_AGE}`;
        }
      }

      if (!formData.gender) {
        errors.gender = 'Please select your gender';
      }
      break;

    case 2: // Measurements
      if (!formData.weight) {
        errors.weight = 'Weight is required';
      } else if (!validateNumericInput(formData.weight, MIN_WEIGHT, MAX_WEIGHT)) {
        errors.weight = `Please enter a valid weight between ${MIN_WEIGHT} and ${MAX_WEIGHT} kg`;
      }

      if (!formData.height) {
        errors.height = 'Height is required';
      } else if (!validateNumericInput(formData.height, MIN_HEIGHT, MAX_HEIGHT)) {
        errors.height = `Please enter a valid height between ${MIN_HEIGHT} and ${MAX_HEIGHT} cm`;
      }

      if (!formData.targetWeight) {
        errors.targetWeight = 'Target weight is required';
      } else if (!validateNumericInput(formData.targetWeight, MIN_WEIGHT, MAX_WEIGHT)) {
        errors.targetWeight = `Please enter a valid target weight between ${MIN_WEIGHT} and ${MAX_WEIGHT} kg`;
      } else if (parseFloat(formData.targetWeight) >= parseFloat(formData.weight)) {
        errors.targetWeight = 'Target weight must be less than current weight';
      }
      break;

    case 3: // Medical Conditions
      if (formData.medicalConditions.length === 0) {
        errors.medicalConditions = 'Please select at least one option';
      }
      break;

    case 4: // Current Medications
      if (formData.currentMedications && formData.currentMedications.length > MAX_MEDICATIONS_LENGTH) {
        errors.currentMedications = `Please keep medications list under ${MAX_MEDICATIONS_LENGTH} characters`;
      }
      break;

    case 5: // Previous Attempts
      if (!formData.previousAttempts) {
        errors.previousAttempts = 'Please select an option';
      }
      break;

    case 6: // Activity Level
      if (!formData.activityLevel) {
        errors.activityLevel = 'Please select your activity level';
      }
      break;

    case 7: // Contact Info
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!isValidEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }

      if (!formData.phone) {
        errors.phone = 'Phone number is required';
      } else if (!isValidPhone(formData.phone)) {
        errors.phone = 'Please enter a valid Indian phone number (e.g., +91 9876543210)';
      }
      break;
  }

  return errors;
};

// Contact Form Validation
export const validateContactForm = (formData: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters)';
  }

  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.phone) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = 'Please enter a valid Indian phone number (e.g., +91 9876543210)';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters)';
  }

  return errors;
};

// Phone number formatter
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-numeric characters except +
  let cleaned = phone.replace(/[^\d+]/g, '');

  // Add +91 if not present
  if (!cleaned.startsWith('+91')) {
    if (cleaned.startsWith('91')) {
      cleaned = '+' + cleaned;
    } else if (cleaned.startsWith('+')) {
      cleaned = '+91' + cleaned.substring(1);
    } else {
      cleaned = '+91' + cleaned;
    }
  }

  // Format as +91 XXXXX XXXXX
  const match = cleaned.match(/^\+91(\d{5})(\d{5})$/);
  if (match) {
    return `+91 ${match[1]} ${match[2]}`;
  }

  return cleaned;
};

// Sanitize text input (prevent XSS)
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};
