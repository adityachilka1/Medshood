import React from 'react';
import { MedicalQuizFormData, FormErrors } from '@/types';
import { FormInput } from '@/components/ui/FormInput';

interface StepProps {
  formData: MedicalQuizFormData;
  errors: FormErrors;
  onInputChange: (field: keyof MedicalQuizFormData, value: string) => void;
}

export const Step7ContactInfo: React.FC<StepProps> = ({ formData, errors, onInputChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary mb-4">Contact Information</h2>
      <p className="text-gray-700 mb-8">
        We'll use this information to contact you about your eligibility and next steps.
      </p>

      <FormInput
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(value) => onInputChange('email', value)}
        placeholder="you@example.com"
        required
        error={errors.email}
        inputMode="email"
        autoComplete="email"
      />

      <FormInput
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={(value) => onInputChange('phone', value)}
        placeholder="+91 98765 43210"
        required
        error={errors.phone}
        inputMode="tel"
        autoComplete="tel"
      />

      <div className="bg-blue-50 border-2 border-primary rounded-lg p-4">
        <p className="text-sm text-gray-900">
          <strong>Privacy Note:</strong> Your information is protected and will only be used to assess your eligibility and provide medical care. We comply with all healthcare privacy regulations.
        </p>
      </div>
    </div>
  );
};
