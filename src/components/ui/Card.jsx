import React from 'react';
import classNames from 'classnames';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={classNames(
        'bg-white text-black dark:bg-zinc-900 dark:text-white',
        'rounded-2xl border border-border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
