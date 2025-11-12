import React from 'react';
import { CardProps } from '@/types';

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const baseClasses = "rounded-xl p-6 transition-smooth";

  const variantClasses = {
    default: "bg-white card-shadow hover:card-shadow-lg",
    gradient: "bg-gradient-to-br from-primary to-secondary text-white",
    elevated: "bg-white card-shadow-xl"
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={finalClassName}>
      {children}
    </div>
  );
};
