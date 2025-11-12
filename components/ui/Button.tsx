import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
}) => {
  const baseClasses = "font-semibold transition-smooth rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed btn-premium";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-secondary focus:ring-primary",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    outline: "bg-white border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary focus:ring-gray-300"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export const LinkButton: React.FC<ButtonProps & { href: string }> = ({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ariaLabel,
}) => {
  const baseClasses = "inline-block font-semibold transition-smooth rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 btn-premium";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-secondary focus:ring-primary",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    outline: "bg-white border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary focus:ring-gray-300"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <Link href={href} className={finalClassName} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};
