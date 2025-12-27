import React from 'react';

export const Avatar = ({ src, size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  };

  return (
    <img 
      src={src} 
      alt="User" 
      className={`${sizes[size]} rounded-full object-cover border-2 border-white ${className}`} 
    />
  );
};

export const AvatarGroup = ({ images }) => {
  return (
    <div className="flex -space-x-2">
      {images.map((img, i) => (
        <Avatar key={i} src={img} size="md" />
      ))}
      <div className="w-9 h-9 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">
        C
      </div>
    </div>
  );
};