import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105',
    secondary: 'bg-white text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-50',
    success: 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-10 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

export default Button;