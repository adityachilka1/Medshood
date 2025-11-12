import React, { useMemo } from 'react';
import { MedicalQuizFormData, FormErrors } from '@/types';
import { FormInput } from '@/components/ui/FormInput';
import { calculateBMI } from '@/utils/validation';

interface StepProps {
  formData: MedicalQuizFormData;
  errors: FormErrors;
  onInputChange: (field: keyof MedicalQuizFormData, value: string) => void;
}

export const Step2Measurements: React.FC<StepProps> = ({ formData, errors, onInputChange }) => {
  const bmi = useMemo(() => {
    return calculateBMI(formData.weight, formData.height);
  }, [formData.weight, formData.height]);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary mb-4">Your Measurements</h2>
      <p className="text-gray-700 mb-8">Please provide accurate measurements for eligibility assessment.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="Current Weight (kg)"
          type="number"
          value={formData.weight}
          onChange={(value) => onInputChange('weight', value)}
          placeholder="70"
          min="30"
          max="300"
          step="0.1"
          required
          error={errors.weight}
          inputMode="numeric"
        />

        <FormInput
          label="Height (cm)"
          type="number"
          value={formData.height}
          onChange={(value) => onInputChange('height', value)}
          placeholder="170"
          min="100"
          max="250"
          step="0.1"
          required
          error={errors.height}
          inputMode="numeric"
        />
      </div>

      {bmi > 0 && (
        <div className="bg-blue-50 border-2 border-primary rounded-lg p-6">
          <p className="text-sm text-gray-700 mb-2">Your BMI (Body Mass Index)</p>
          <p className="text-4xl font-bold text-primary">{bmi}</p>
          <p className="text-sm text-gray-600 mt-2">
            {bmi < 18.5 && 'Underweight'}
            {bmi >= 18.5 && bmi < 25 && 'Normal weight'}
            {bmi >= 25 && bmi < 30 && 'Overweight'}
            {bmi >= 30 && 'Obese'}
          </p>
        </div>
      )}

      <FormInput
        label="Target Weight (kg)"
        type="number"
        value={formData.targetWeight}
        onChange={(value) => onInputChange('targetWeight', value)}
        placeholder="60"
        min="30"
        max="300"
        step="0.1"
        required
        error={errors.targetWeight}
        inputMode="numeric"
      />
    </div>
  );
};
