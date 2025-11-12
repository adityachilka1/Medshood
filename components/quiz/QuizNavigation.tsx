import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowLeftIcon, ArrowRightIcon, LoadingSpinner } from '@/components/icons/CheckIcon';

interface QuizNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  isSubmitting?: boolean;
  isLastStep?: boolean;
}

export const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isSubmitting = false,
  isLastStep = false,
}) => {
  return (
    <div className="flex justify-between items-center pt-8 border-t-2 border-gray-200">
      <Button
        variant="outline"
        size="lg"
        onClick={onPrevious}
        disabled={currentStep === 1 || isSubmitting}
        ariaLabel="Go to previous step"
        className="flex items-center"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Previous
      </Button>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Step {currentStep} of {totalSteps}
        </p>
        <div className="flex gap-2 mt-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full transition-all ${
                index + 1 <= currentStep ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Step ${index + 1} ${index + 1 === currentStep ? 'current' : index + 1 < currentStep ? 'completed' : 'upcoming'}`}
            />
          ))}
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        onClick={onNext}
        disabled={isSubmitting}
        ariaLabel={isLastStep ? "View results" : "Go to next step"}
        className="flex items-center"
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner className="w-5 h-5 mr-2" />
            Processing...
          </>
        ) : (
          <>
            {isLastStep ? 'View Results' : 'Next'}
            {!isLastStep && <ArrowRightIcon className="w-5 h-5 ml-2" />}
          </>
        )}
      </Button>
    </div>
  );
};
