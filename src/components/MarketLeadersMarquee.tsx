import React from 'react';
import { CLIENTS_DATA } from '../config/siteConfig.ts';

interface MarketLeadersMarqueeProps {
  className?: string;
  onOpenConsultation?: () => void;
}

export const MarketLeadersMarquee: React.FC<MarketLeadersMarqueeProps> = ({
  className = '',
  onOpenConsultation,
}) => {
  // Duplicate array twice to ensure a completely seamless, gap-free infinite linear loop
  const marqueeItems = [...CLIENTS_DATA, ...CLIENTS_DATA];

  return (
    <section className={`bg-white border-y border-[#E5DFD3] py-10 overflow-hidden relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center space-y-1.5">
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E8791F] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E8791F]">
            Trusted By Market Leaders Since 1997
          </span>
          <span className="w-2 h-2 rounded-full bg-[#E8791F] animate-pulse" />
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#16130F] tracking-tight">
          Proven Partnerships with Pakistan’s Leading Brands
        </h3>
      </div>

      {/* Marquee Container with Left & Right Gradient Mask Overlays */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left Gradient Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/85 to-transparent z-10" />

        {/* Right Gradient Edge Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/85 to-transparent z-10" />

        {/* Continuous Linear Motion Ticker */}
        <div className="animate-marquee-linear flex items-center gap-8 sm:gap-10 px-6">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              onClick={onOpenConsultation}
              className="group shrink-0 w-48 sm:w-56 h-32 sm:h-36 bg-white hover:bg-[#FAF8F5] border border-[#E5DFD3]/80 hover:border-[#E8791F] rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer flex items-center justify-center"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
