import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig.ts';

interface WhatsAppButtonProps {
  customMessage?: string;
  variant?: 'floating' | 'inline';
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage = 'Hello PrintVision! I would like to inquire about your advertising, corporate printing, and exhibition stall services.',
  variant = 'floating',
  className = '',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = SITE_CONFIG.contact.whatsappNumber || '92323429611';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

  if (variant === 'inline') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold rounded-xl shadow-xs transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer ${className}`}
      >
        <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
        <span>Chat on WhatsApp</span>
      </a>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 ${className}`}>
      {/* Tooltip / Badge */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16130F] text-white text-xs font-semibold shadow-lg transition-all duration-300 border border-[#26201A] ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
        <span>Chat with PrintVision ({SITE_CONFIG.contact.whatsappDisplay})</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Direct WhatsApp Message to PrintVision"
      >
        {/* Subtle Ping Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 fill-current relative z-10 transition-transform duration-200 group-hover:rotate-6" />
      </a>
    </div>
  );
};

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.89 9.886m8.813-18.7c-2.355-2.288-5.486-3.549-8.817-3.55-6.86 0-12.442 5.58-12.445 12.44 0 2.192.572 4.333 1.66 6.22l-1.762 6.434 6.586-1.728a12.42 12.42 0 005.956 1.513h.005c6.858 0 12.441-5.58 12.445-12.44 0-3.324-1.294-6.452-3.643-8.889" />
  </svg>
);
