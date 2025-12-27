import React from 'react';

export const Card = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`bg-white border border-gray-200 shadow-sm rounded-3xl ${noPadding ? '' : 'p-6'} ${className}`}>
      {children}
    </div>
  );
};