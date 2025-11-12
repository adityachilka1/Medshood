'use client';

import React, { useState, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useQuizState } from '@/hooks/useQuizState';
import { validateQuizStep } from '@/utils/validation';

// Step Components
import { Step1BasicInfo } from '@/components/quiz/Step1BasicInfo';
import { Step2Measurements } from '@/components/quiz/Step2Measurements';
import { Step3MedicalHistory } from '@/components/quiz/Step3MedicalHistory';
import { Step4CurrentMedications } from '@/components/quiz/Step4CurrentMedications';
import { Step5PreviousAttempts } from '@/components/quiz/Step5PreviousAttempts';
import { Step6ActivityLevel } from '@/components/quiz/Step6ActivityLevel';
import { Step7ContactInfo } from '@/components/quiz/Step7ContactInfo';
import { QuizResults } from '@/components/quiz/QuizResults';
import { QuizNavigation } from '@/components/quiz/QuizNavigation';

const TOTAL_STEPS = 7;

export default function Quiz() {
  const {
    step,
    setStep,
    formData,
    errors,
    setErrors,
    handleInputChange,
    handleCheckboxChange,
    clearProgress,
  } = useQuizState();

  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = useCallback(() => {
    // Validate current step
    const stepErrors = validateQuizStep(step, formData);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      // Scroll to top to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Clear errors for this step
    setErrors({});

    // Move to next step or show results
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Last step - show results
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowResults(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1000);
    }
  }, [step, formData, setStep, setErrors]);

  const handlePrevious = useCallback(() => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step, setStep, setErrors]);

  const handleStartOver = useCallback(() => {
    clearProgress();
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [clearProgress]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1BasicInfo
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <Step2Measurements
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <Step3MedicalHistory
            formData={formData}
            errors={errors}
            onCheckboxChange={handleCheckboxChange}
          />
        );
      case 4:
        return (
          <Step4CurrentMedications
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />
        );
      case 5:
        return (
          <Step5PreviousAttempts
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />
        );
      case 6:
        return (
          <Step6ActivityLevel
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />
        );
      case 7:
        return (
          <Step7ContactInfo
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-grow bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold gradient-text mb-4">
              Eligibility Assessment
            </h1>
            <p className="text-xl text-gray-700">
              {showResults
                ? 'Your personalized results are ready!'
                : 'Takes just 2 minutes to complete'}
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl card-shadow-xl p-8 md:p-12">
            {showResults ? (
              <>
                <QuizResults formData={formData} />
                <div className="mt-8 text-center">
                  <button
                    onClick={handleStartOver}
                    className="text-primary hover:text-secondary underline font-semibold transition-smooth"
                  >
                    Start Over with New Information
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      Progress
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {Math.round((step / TOTAL_STEPS) * 100)}%
                    </span>
                  </div>
                  <div
                    className="h-3 bg-gray-200 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={step}
                    aria-valuemin={1}
                    aria-valuemax={TOTAL_STEPS}
                    aria-label={`Question ${step} of ${TOTAL_STEPS}`}
                  >
                    <div
                      className="h-full bg-primary transition-all duration-500 ease-out"
                      style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Current Step */}
                {renderStep()}

                {/* Navigation */}
                <QuizNavigation
                  currentStep={step}
                  totalSteps={TOTAL_STEPS}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  isSubmitting={isSubmitting}
                  isLastStep={step === TOTAL_STEPS}
                />
              </>
            )}
          </div>

          {/* Privacy & Security Notice */}
          {!showResults && (
            <div className="mt-8 text-center">
              <div className="inline-flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Your information is encrypted and protected. We comply with all healthcare privacy regulations.
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
