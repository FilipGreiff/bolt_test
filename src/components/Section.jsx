import React from 'react';
import clsx from 'clsx';

export default function Section({ className = '', ...props }) {
  return (
    <section
      className={clsx('py-24 sm:py-32', className)}
      {...props}
    />
  );
}