import React from 'react';
import classNames from 'classnames';

export const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium';

  const variants = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span
      className={classNames(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
