import React from 'react';
import { MedicalQuizFormData, FormErrors } from '@/types';
import { FormInput } from '@/components/ui/FormInput';

interface StepProps {
  formData: MedicalQuizFormData;
  errors: FormErrors;
  onInputChange: (field: keyof MedicalQuizFormData, value: string) => void;
}

export const Step1BasicInfo: React.FC<StepProps> = ({ formData, errors, onInputChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary mb-4">Let's start with some basics</h2>
      <p className="text-gray-700 mb-8">This information helps us determine if you're eligible for GLP-1 treatment.</p>

      <FormInput
        label="What is your age?"
        type="number"
        value={formData.age}
        onChange={(value) => onInputChange('age', value)}
        placeholder="Enter your age"
        min="18"
        max="100"
        required
        error={errors.age}
        inputMode="numeric"
        autoComplete="age"
      />

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          What is your gender?
          <span className="text-red-600 ml-1" aria-label="required">*</span>
        </label>
        <div className="grid grid-cols-3 gap-4" role="radiogroup" aria-label="Gender selection">
          {(['Male', 'Female', 'Other'] as const).map((gender) => (
            <button
              key={gender}
              type="button"
              onClick={() => onInputChange('gender', gender)}
              className={`py-3 px-4 rounded-lg font-semibold transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                formData.gender === gender
                  ? 'bg-primary text-white'
                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-primary'
              }`}
              role="radio"
              aria-checked={formData.gender === gender}
              aria-label={`Select ${gender}`}
            >
              {gender}
            </button>
          ))}
        </div>
        {errors.gender && (
          <p className="text-red-600 text-sm mt-2 flex items-center" role="alert">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.gender}
          </p>
        )}
      </div>
    </div>
  );
};
