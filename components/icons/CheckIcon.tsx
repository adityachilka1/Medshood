import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const CheckIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export const LoadingSpinner: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    className={`${className} animate-spin`}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

// Professional Healthcare Icons

export const ClipboardIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

export const DoctorIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11h6M12 8v6" />
  </svg>
);

export const PackageIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

export const SupportIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
);

export const CheckmarkBadgeIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const MedicalCrossIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11h6M12 8v6" />
  </svg>
);

export const HomeDeliveryIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

// Multiple Sclerosis - Brain/Neuron Icon
export const TargetIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3C8 3 5 6 5 9c0 2 1 3 2 4 .5.5.5 1 .5 1.5 0 1.5-1 2.5-1.5 3.5-.5 1-.5 2 0 3C7 22 9 22 10 21c.5-.5 1-1 1.5-1.5.5-.5 1-.5 1.5 0 .5.5 1 1 1.5 1.5 1 1 3 1 4 0 .5-1 .5-2 0-3-.5-1-1.5-2-1.5-3.5 0-.5 0-1 .5-1.5 1-1 2-2 2-4 0-3-3-6-7-6z" />
    <circle cx="12" cy="9" r="2" strokeWidth={1.5} fill="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M10 15h4" />
  </svg>
);

export const UnlockIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 018 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
);

export const MoneyBackIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Medical Condition Category Icons

// Rheumatology - Antibody/Joint Icon
export const RheumatologyIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C10.5 2 9 3 9 4.5V8c0 .5-.5 1-1 1H4.5C3 9 2 10.5 2 12s1 3 2.5 3H8c.5 0 1 .5 1 1v3.5c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5V16c0-.5.5-1 1-1h3.5c1.5 0 2.5-1.5 2.5-3s-1-3-2.5-3H16c-.5 0-1-.5-1-1V4.5C15 3 13.5 2 12 2z" />
    <circle cx="12" cy="12" r="2" strokeWidth={2} fill="currentColor" />
  </svg>
);

// Diabetes - Glucose/Insulin Pen Icon
export const DiabetesIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3l6 18M15 3l-6 18" />
    <circle cx="8" cy="8" r="2.5" strokeWidth={2} />
    <circle cx="16" cy="8" r="2.5" strokeWidth={2} />
    <circle cx="8" cy="16" r="2.5" strokeWidth={2} />
    <circle cx="16" cy="16" r="2.5" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 8h4M10 16h4" />
  </svg>
);

// Rare Diseases - DNA/Genetic Icon
export const HeartIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18M15 3v18" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6h6M9 9h6M9 12h6M9 15h6M9 18h6" />
    <circle cx="9" cy="6" r="1.5" fill="currentColor" />
    <circle cx="15" cy="6" r="1.5" fill="currentColor" />
    <circle cx="9" cy="12" r="1.5" fill="currentColor" />
    <circle cx="15" cy="12" r="1.5" fill="currentColor" />
    <circle cx="9" cy="18" r="1.5" fill="currentColor" />
    <circle cx="15" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

// Cancer Care - Cancer Cell Icon
export const CancerRibbonIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <circle cx="12" cy="12" r="5" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={1.5} fill="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v-3M12 20v-3M17 12h3M4 12h3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.24 7.76l2.12-2.12M5.64 18.36l2.12-2.12M16.24 16.24l2.12 2.12M5.64 5.64l2.12 2.12" />
  </svg>
);

// Hemophilia - Blood Droplet Icon
export const KidneyIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.5c-1.5 2-3 4.5-4 7-1 2.5-1 5.5.5 7.5C10 19 11 19.5 12 19.5s2-.5 3.5-2.5c1.5-2 1.5-5 .5-7.5-1-2.5-2.5-5-4-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10c.5 1 1 2 1 3.5 0 1-.5 1.5-1 1.5s-1-.5-1-1.5c0-1.5.5-2.5 1-3.5z" fill="currentColor" />
  </svg>
);

// IBD - Intestines/Digestive Icon
export const LungsIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4h4c2 0 3 1 3 3v3c0 1.5-1 2.5-2.5 2.5h-1c-1 0-2 .5-2 1.5v3c0 2 1 3 3 3h3" />
    <circle cx="8" cy="4" r="1.5" strokeWidth={2} fill="currentColor" />
    <circle cx="16" cy="10" r="1" strokeWidth={1.5} />
    <circle cx="11.5" cy="14" r="1" strokeWidth={1.5} />
    <circle cx="17" cy="20" r="1.5" strokeWidth={2} fill="currentColor" />
  </svg>
);

// Growth Disorders - Growth Chart/Hormone Icon
export const BrainIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M4 21h16" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15l3-3 3 3M9 10l3-3 3 3" />
    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

export const LiverIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

export const VirusIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <circle cx="12" cy="12" r="4" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
  </svg>
);

export const PillBottleIcon: React.FC<IconProps> = ({ className = "w-12 h-12", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const UploadIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);
