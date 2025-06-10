import React from 'react';

export const Btn = ({ children, className = '', variant = 'default', size = 'md', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors';
  const sizes = {
    sm: 'h-8 px-3',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg',
  };
  const variants = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline:
      'border border-primary text-primary bg-white hover:bg-primary hover:text-white dark:border-white dark:text-white dark:bg-transparent dark:hover:bg-white dark:hover:text-black',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
