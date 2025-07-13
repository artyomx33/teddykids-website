import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type IconPosition = 'left' | 'right';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  href?: string;
  whatsappMessage?: string;
  fullWidth?: boolean;
  className?: string;
  isExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  whatsappMessage,
  fullWidth = false,
  className,
  isExternal = false,
  ...props
}) => {
  // Base styles for all buttons
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size variations
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-brand-pink text-gray-800 hover:bg-opacity-90 focus:ring-brand-pink shadow-sm hover:shadow',
    secondary: 'bg-brand-yellow text-gray-800 hover:bg-opacity-90 focus:ring-brand-yellow shadow-sm hover:shadow',
    outline: 'bg-transparent border-2 border-brand-pink text-gray-800 hover:bg-brand-pink hover:bg-opacity-10 focus:ring-brand-pink',
    whatsapp: 'bg-[#25d366] text-white hover:bg-opacity-90 focus:ring-[#25d366] shadow-sm hover:shadow',
    text: 'bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-200',
  };
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const buttonStyles = twMerge(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    widthStyles,
    className
  );
  
  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <span className={iconPosition === 'left' ? 'mr-2' : 'ml-2'}>
        {icon}
      </span>
    );
  };
  
  // Content with icon positioning
  const content = (
    <>
      {icon && iconPosition === 'left' && renderIcon()}
      {children}
      {icon && iconPosition === 'right' && renderIcon()}
    </>
  );
  
  // WhatsApp link handling
  if (variant === 'whatsapp' || whatsappMessage) {
    const message = encodeURIComponent(whatsappMessage || 'Hi Teddy Kids! I would like to book a tour.');
    const whatsappUrl = `https://wa.me/?text=${message}`;
    
    return (
      <a 
        href={whatsappUrl}
        className={buttonStyles}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }
  
  // Link rendering
  if (href) {
    if (isExternal) {
      return (
        <a 
          href={href}
          className={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }
    
    return (
      <Link 
        href={href}
        className={buttonStyles}
        {...(props as React.ComponentPropsWithoutRef<'a'>)}
      >
        {content}
      </Link>
    );
  }
  
  // Default button rendering
  return (
    <button 
      className={buttonStyles}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
