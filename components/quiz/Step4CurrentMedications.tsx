import React from 'react';
import { MedicalQuizFormData, FormErrors, MAX_MEDICATIONS_LENGTH } from '@/types';
import { FormInput } from '@/components/ui/FormInput';

interface StepProps {
  formData: MedicalQuizFormData;
  errors: FormErrors;
  onInputChange: (field: keyof MedicalQuizFormData, value: string) => void;
}

export const Step4CurrentMedications: React.FC<StepProps> = ({ formData, errors, onInputChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary mb-4">Current Medications</h2>
      <p className="text-gray-900 mb-8">
        Please list any medications you're currently taking (optional). This helps our doctors assess compatibility.
      </p>

      <FormInput
        label="List your current medications"
        type="textarea"
        value={formData.currentMedications}
        onChange={(value) => onInputChange('currentMedications', value)}
        placeholder="e.g., Metformin 500mg, Lisinopril 10mg, etc."
        required={false}
        error={errors.currentMedications}
      />

      <p className="text-sm text-gray-900">
        {formData.currentMedications.length}/{MAX_MEDICATIONS_LENGTH} characters
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
        <p className="text-sm text-yellow-900">
          <strong>Note:</strong> If you're not currently taking any medications, you can leave this field blank.
        </p>
      </div>
    </div>
  );
};
