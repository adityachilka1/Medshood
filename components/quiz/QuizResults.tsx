import React from 'react';
import { MedicalQuizFormData } from '@/types';
import { calculateBMI, checkEligibility } from '@/utils/validation';
import { LinkButton } from '@/components/ui/Button';
import { CheckIcon } from '@/components/icons/CheckIcon';

interface QuizResultsProps {
  formData: MedicalQuizFormData;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ formData }) => {
  const bmi = calculateBMI(formData.weight, formData.height);
  const eligible = checkEligibility(formData);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Assessment Complete!
        </h2>
        <p className="text-xl text-gray-900">
          Here's what we found based on your information
        </p>
      </div>

      {/* BMI Card */}
      <div className="bg-blue-50 border-2 border-primary rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Your BMI</h3>
        <p className="text-5xl font-bold text-primary">{bmi}</p>
        <p className="text-gray-900 mt-2">
          {bmi < 18.5 && 'Underweight'}
          {bmi >= 18.5 && bmi < 25 && 'Normal weight'}
          {bmi >= 25 && bmi < 30 && 'Overweight'}
          {bmi >= 30 && 'Obese'}
        </p>
      </div>

      {/* Eligibility Result */}
      {eligible ? (
        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                You're Eligible for GLP-1 Treatment! 🎉
              </h3>
              <p className="text-green-800 mb-4">
                Based on your BMI of {bmi} {formData.medicalConditions.length > 0 && !formData.medicalConditions.includes('None of the above') && 'and your medical conditions'}, you meet the criteria for GLP-1 medication therapy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-900">
                  <CheckIcon className="w-5 h-5 mr-2 text-green-600" />
                  Potential weight loss: 15-20% of body weight
                </li>
                <li className="flex items-center text-green-900">
                  <CheckIcon className="w-5 h-5 mr-2 text-green-600" />
                  FDA-approved medications
                </li>
                <li className="flex items-center text-green-900">
                  <CheckIcon className="w-5 h-5 mr-2 text-green-600" />
                  Doctor-supervised treatment
                </li>
                <li className="flex items-center text-green-900">
                  <CheckIcon className="w-5 h-5 mr-2 text-green-600" />
                  Ongoing support and monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-yellow-50 border-2 border-yellow-500 rounded-xl p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">
                Not Quite Ready Yet
              </h3>
              <p className="text-yellow-800 mb-4">
                Based on your current BMI of {bmi}, you don't meet the eligibility criteria for GLP-1 treatment at this time.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Eligibility Criteria:</h4>
                <ul className="space-y-1 text-gray-900 text-sm">
                  <li>• BMI of 30 or higher, OR</li>
                  <li>• BMI of 27+ with weight-related medical conditions</li>
                  <li>• Age 18 or older</li>
                </ul>
              </div>
              <p className="text-yellow-800 mb-4">
                We recommend exploring alternative weight management options:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-yellow-900">• Consultation with a nutritionist</li>
                <li className="text-yellow-900">• Structured diet and exercise program</li>
                <li className="text-yellow-900">• Behavioral counseling</li>
                <li className="text-yellow-900">• Regular medical check-ups</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps */}
      <div className="bg-white rounded-xl p-6 card-shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h3>
        {eligible ? (
          <div className="space-y-4">
            <p className="text-gray-900">
              Great news! You're eligible for our programme. Here's what happens next:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-900">
              <li>Schedule a consultation with our licensed doctor</li>
              <li>Discuss your health history and treatment goals</li>
              <li>Receive your prescription (if medically appropriate)</li>
              <li>Start your weight loss journey with ongoing support</li>
            </ol>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <LinkButton href="/pricing" variant="primary" size="lg">
                View Pricing & Plans
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                Have Questions?
              </LinkButton>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-900">
              While you're not eligible for GLP-1 treatment right now, we're here to support your health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <LinkButton href="/contact" variant="primary" size="lg">
                Contact Us for Guidance
              </LinkButton>
              <LinkButton href="/" variant="secondary" size="lg">
                Back to Home
              </LinkButton>
            </div>
          </div>
        )}
      </div>

      {/* Privacy Note */}
      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-900">
        <p>
          <strong>Privacy Notice:</strong> Your information is confidential and protected under healthcare privacy regulations.
          We will only use this data to assess your eligibility and provide medical care if you proceed with treatment.
        </p>
      </div>
    </div>
  );
};
