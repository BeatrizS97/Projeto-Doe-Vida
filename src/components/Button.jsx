import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, className = '', disabled = false }) => {
  const baseClasses = "font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-rose-600 to-red-700 text-white hover:from-rose-700 hover:to-red-800 focus:ring-rose-500",
    secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500",
    outline: "border border-rose-600 text-rose-600 hover:bg-rose-50 focus:ring-rose-500"
  };
  
  const sizeClasses = {
    xsmall: "px-2 py-1 text-xs",
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;