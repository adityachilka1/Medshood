import React from 'react';
import { MedicalQuizFormData, FormErrors, ACTIVITY_LEVELS } from '@/types';

interface StepProps {
  formData: MedicalQuizFormData;
  errors: FormErrors;
  onInputChange: (field: keyof MedicalQuizFormData, value: string) => void;
}

export const Step6ActivityLevel: React.FC<StepProps> = ({ formData, errors, onInputChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary mb-4">Lifestyle Assessment</h2>
      <p className="text-gray-700 mb-8">
        What is your current activity level?
        <span className="text-red-600 ml-1" aria-label="required">*</span>
      </p>

      <div className="space-y-3" role="radiogroup" aria-label="Activity level">
        {ACTIVITY_LEVELS.map((level) => (
          <label
            key={level}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
              formData.activityLevel === level
                ? 'border-primary bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input
              type="radio"
              name="activityLevel"
              checked={formData.activityLevel === level}
              onChange={() => onInputChange('activityLevel', level)}
              className="w-5 h-5 text-primary focus:ring-primary"
              aria-label={level}
            />
            <span className="ml-3 text-gray-900 font-medium">{level}</span>
          </label>
        ))}
      </div>

      {errors.activityLevel && (
        <p className="text-red-600 text-sm mt-2 flex items-center" role="alert">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errors.activityLevel}
        </p>
      )}
    </div>
  );
};
