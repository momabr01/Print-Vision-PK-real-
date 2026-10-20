import React from 'react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is for dark backgrounds (white text), 'dark' is for light backgrounds (charcoal black text)
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showWordmark = true,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official PrintVision Logo Emblem used directly with zero changes */}
      <img
        src={logoImg}
        alt="PrintVision"
        className={`${iconSizes[size]} shrink-0 object-contain rounded-full shadow-xs transition-transform duration-200 hover:scale-105`}
      />

      {/* Brand Typography Wordmark & Tagline */}
      {showWordmark && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-extrabold tracking-tight ${titleSizes[size]} flex items-center`}>
            <span className={isLight ? 'text-white' : 'text-[#16130F]'}>Print</span>
            <span className="text-[#E8791F]">Vision</span>
          </div>
          <span
            className={`font-semibold tracking-[0.16em] uppercase ${subtitleSizes[size]} ${
              isLight ? 'text-[#F3EFE7]/80' : 'text-[#16130F]/70'
            } mt-1`}
          >
            From Vision to Visibility
          </span>
        </div>
      )}
    </div>
  );
};
