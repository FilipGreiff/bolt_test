import React from 'react';
import clsx from 'clsx';

export default function Container({ className = '', ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}
      {...props}
    />
  );
}