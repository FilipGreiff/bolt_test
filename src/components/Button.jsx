import React from 'react';
import clsx from 'clsx';

export default function Button({ variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={clsx(
        'inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        {
          'bg-garden-600 text-white hover:bg-garden-500 focus-visible:outline-garden-600': variant === 'primary',
          'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50': variant === 'secondary',
        },
        className
      )}
      {...props}
    />
  );
}