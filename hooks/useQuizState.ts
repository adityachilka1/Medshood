'use client';

import { useState, useEffect, useCallback } from 'react';
import { MedicalQuizFormData, FormErrors } from '@/types';

const INITIAL_FORM_DATA: MedicalQuizFormData = {
  age: '',
  gender: '',
  weight: '',
  height: '',
  targetWeight: '',
  medicalConditions: [],
  currentMedications: '',
  previousAttempts: '',
  activityLevel: '',
  email: '',
  phone: '',
};

const STORAGE_KEY = 'medshood-quiz-progress';

export const useQuizState = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<MedicalQuizFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});

  // Load saved progress on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const { step: savedStep, formData: savedData } = JSON.parse(saved);
          setStep(savedStep);
          setFormData(savedData);
        }
      } catch (error) {
        console.error('Failed to load quiz progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, formData }));
      } catch (error) {
        console.error('Failed to save quiz progress:', error);
      }
    }
  }, [step, formData]);

  const handleInputChange = useCallback((field: keyof MedicalQuizFormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const handleCheckboxChange = useCallback((field: keyof Pick<MedicalQuizFormData, 'medicalConditions'>, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[field] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [field]: newValues };
    });
    // Clear error for this field
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const clearProgress = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    setStep(1);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  }, []);

  return {
    step,
    setStep,
    formData,
    setFormData,
    errors,
    setErrors,
    handleInputChange,
    handleCheckboxChange,
    clearProgress,
  };
};
