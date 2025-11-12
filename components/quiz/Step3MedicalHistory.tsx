import React from 'react';
import { MedicalQuizFormData, FormErrors, MEDICAL_CONDITIONS } from '@/types';

interface StepProps {
  formData: MedicalQuizFormData;
  errors: FormErrors;
  onCheckboxChange: (field: keyof Pick<MedicalQuizFormData, 'medicalConditions'>, value: string) => void;
}

export const Step3MedicalHistory: React.FC<StepProps> = ({ formData, errors, onCheckboxChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary mb-4">Medical History</h2>
      <p className="text-gray-700 mb-8">
        Do you have any of the following conditions?
        <span className="text-red-600 ml-1" aria-label="required">*</span>
      </p>

      <div className="space-y-3" role="group" aria-label="Medical conditions">
        {MEDICAL_CONDITIONS.map((condition) => (
          <label
            key={condition}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
              formData.medicalConditions.includes(condition)
                ? 'border-primary bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input
              type="checkbox"
              checked={formData.medicalConditions.includes(condition)}
              onChange={() => onCheckboxChange('medicalConditions', condition)}
              className="w-5 h-5 text-primary focus:ring-primary rounded"
              aria-label={condition}
            />
            <span className="ml-3 text-gray-900 font-medium">{condition}</span>
          </label>
        ))}
      </div>

      {errors.medicalConditions && (
        <p className="text-red-600 text-sm mt-2 flex items-center" role="alert">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errors.medicalConditions}
        </p>
      )}
    </div>
  );
};
