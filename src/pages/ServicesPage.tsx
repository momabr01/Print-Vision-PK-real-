import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Printer,
  Palette,
  Rocket,
  Building,
  Gift,
  Store,
  Compass,
  Megaphone,
  Briefcase,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem, SITE_CONFIG } from '../config/siteConfig.ts';

interface ServicesPageProps {
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const getServiceIcon = (order: string) => {
    switch (order) {
      case '01':
        return <Printer className="w-5 h-5 text-[#E8791F]" />;
      case '02':
        return <Palette className="w-5 h-5 text-[#E8791F]" />;
      case '03':
        return <Rocket className="w-5 h-5 text-[#E8791F]" />;
      case '04':
        return <Building className="w-5 h-5 text-[#E8791F]" />;
      case '05':
        return <Gift className="w-5 h-5 text-[#E8791F]" />;
      case '06':
        return <Store className="w-5 h-5 text-[#E8791F]" />;
      case '07':
        return <Compass className="w-5 h-5 text-[#E8791F]" />;
      case '08':
        return <Megaphone className="w-5 h-5 text-[#E8791F]" />;
      case '09':
        return <Briefcase className="w-5 h-5 text-[#E8791F]" />;
      default:
        return <Layers className="w-5 h-5 text-[#E8791F]" />;
    }
  };

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8791F]">
          <span>Full Service Spectrum</span>
          <span className="text-[#E5DFD3]">·</span>
          <span className="text-[#16130F]/70 font-semibold">Expertise & Manufacturing</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#16130F] tracking-tight">
          Services Engineered to Elevate Brand Visibility.
        </h1>
        <p className="text-base sm:text-lg text-[#16130F]/75 leading-relaxed">
          Established in 1997 in Lahore, PrintVision bridges the divide between strategic marketing creativity and practical, on-ground manufacturing.
        </p>
      </div>

      {/* Services List - Clean Editorial Layout with alternating feature visual blocks */}
      <div className="space-y-16">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl border border-[#E5DFD3] overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Column */}
                <div
                  className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#16130F] overflow-hidden ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16130F]/90 via-[#16130F]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#16130F]/40" />
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-white bg-[#16130F]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10">
                      Service {service.orderNumber}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#F3EFE7] border border-[#E5DFD3] flex items-center justify-center shrink-0">
                        {getServiceIcon(service.orderNumber)}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16130F] tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-[#16130F]/75 text-sm sm:text-base leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Capabilities Sub-Grid */}
                    <div className="pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#16130F]/50 mb-3">
                        Technical Scope & Offerings:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E5DFD3]/70 space-y-1">
                            <div className="text-xs font-bold text-[#16130F]">{cap.name}</div>
                            <div className="text-[11px] text-[#16130F]/65 leading-normal">{cap.detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables List */}
                    <div className="pt-3 border-t border-[#E5DFD3]/60 space-y-1.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#16130F]/50">
                        Typical Deliverables:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#16130F]/80">
                        {service.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E8791F] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[#E5DFD3]/60 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenQuoteModal(service.id)}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-lg shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Request Quotation for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onNavigate('service-detail', service.id)}
                      className="px-5 py-2.5 text-xs font-semibold text-[#16130F] hover:text-[#E8791F] bg-[#F3EFE7] hover:bg-[#E5DFD3]/60 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Detailed Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Multi-Service Consultation Banner */}
      <div className="bg-[#16130F] text-[#F3EFE7] p-8 sm:p-12 rounded-3xl border border-[#2E271F] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl font-bold">Combining Multiple Services for an Annual Campaign?</h3>
          <p className="text-[#F3EFE7]/70 text-sm leading-relaxed">
            Many long-standing clients bundle corporate printing, exhibition pavilion construction, and national promotional roadshows under an integrated annual agreement.
          </p>
        </div>

        <a
          href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello PrintVision, I would like to get a quote for multiple services / annual campaign.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3.5 text-sm font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-xl shadow-md transition-colors whitespace-nowrap shrink-0 cursor-pointer inline-flex items-center gap-2"
        >
          <span>Get a Quote</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
