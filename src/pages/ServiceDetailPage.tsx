import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Layers, MapPin, Zap } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../config/siteConfig.ts';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const service =
    SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  return (
    <div className="py-10 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#16130F]/60 font-medium">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-[#16130F] transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <button
          onClick={() => onNavigate('services')}
          className="hover:text-[#16130F] transition-colors cursor-pointer"
        >
          Services
        </button>
        <span>/</span>
        <span className="text-[#16130F] font-bold">{service.title}</span>
      </div>

      {/* Hero Header Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8791F]">
            <span>Service Stream {service.orderNumber} of 09</span>
            <span className="text-[#E5DFD3]">·</span>
            <span>PrintVision Lahore</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16130F] tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#16130F]/75 leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal(service.id)}
              className="px-6 py-3.5 text-sm font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Quotation for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="px-5 py-3.5 text-sm font-semibold text-[#16130F] bg-white hover:bg-[#F3EFE7] border border-[#E5DFD3] rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#16130F]/50" />
              <span>Back to All Services</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD3] bg-[#16130F]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16130F]/90 via-[#16130F]/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-[#F3EFE7]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8791F]">
                Standard of Excellence
              </span>
              <div className="text-sm font-semibold text-white mt-0.5">
                Engineered & Produced in Lahore · Deployed Across Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Capabilities & Technical Scope */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E8791F]">
            Capabilities Breakdown
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16130F]">
            What We Deliver Under {service.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-[#E5DFD3] shadow-2xs space-y-2.5"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#F3EFE7] text-[#E8791F] font-bold text-xs flex items-center justify-center shrink-0 border border-[#E5DFD3]">
                  {idx + 1}
                </span>
                <h3 className="text-base font-bold text-[#16130F]">{cap.name}</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#16130F]/70 leading-relaxed pl-9">
                {cap.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables & Typical Applications Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Deliverables */}
        <div className="bg-[#F3EFE7] p-8 rounded-3xl border border-[#E5DFD3] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16130F]/60">
            <Layers className="w-4 h-4 text-[#E8791F]" />
            <span>Tangible Deliverables</span>
          </div>
          <h3 className="text-xl font-bold text-[#16130F]">Produced Under Rigorous Quality Scrutiny</h3>
          <p className="text-xs sm:text-sm text-[#16130F]/70 leading-relaxed">
            Every material and printed piece is inspected before leaving our print house and joinery bay to guarantee brand manual fidelity.
          </p>
          <div className="pt-2 space-y-2 text-xs font-medium text-[#16130F]">
            {service.deliverables.map((item, dIdx) => (
              <div key={dIdx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E5DFD3]">
                <CheckCircle className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typical Applications */}
        <div className="bg-[#F3EFE7] p-8 rounded-3xl border border-[#E5DFD3] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16130F]/60">
            <MapPin className="w-4 h-4 text-[#E8791F]" />
            <span>Commercial Applications</span>
          </div>
          <h3 className="text-xl font-bold text-[#16130F]">Proven in High-Stake Business Environments</h3>
          <p className="text-xs sm:text-sm text-[#16130F]/70 leading-relaxed">
            Our crews deploy across Pakistan’s key commercial hubs, major shopping centres, exhibition venues, and retail networks.
          </p>
          <div className="pt-2 space-y-2 text-xs font-medium text-[#16130F]">
            {service.typicalApplications.map((app, aIdx) => (
              <div key={aIdx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E5DFD3]">
                <Zap className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Switch Between All 9 Services */}
      <div className="pt-8 border-t border-[#E5DFD3]">
        <div className="text-xs font-bold uppercase tracking-wider text-[#16130F]/50 mb-4">
          Other Specialised Services from PrintVision:
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SERVICES_DATA.filter((s) => s.id !== service.id).map((other) => (
            <button
              key={other.id}
              onClick={() => onNavigate('service-detail', other.id)}
              className="p-3 bg-white hover:bg-[#F3EFE7] border border-[#E5DFD3] rounded-xl text-left transition-colors cursor-pointer group flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono text-[#E8791F] font-bold">{other.orderNumber}</div>
              <div className="text-xs font-bold text-[#16130F] group-hover:text-[#E8791F] transition-colors line-clamp-2 mt-1">
                {other.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Sticky Action Box */}
      <div className="bg-[#16130F] text-[#F3EFE7] p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#26201A]">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white">Need a Formal Estimate for {service.title}?</h3>
          <p className="text-[#F3EFE7]/70 text-xs sm:text-sm">
            Share your drawings, quantities, or event dates with our technical team in Lahore.
          </p>
        </div>
        <button
          onClick={() => onOpenQuoteModal(service.id)}
          className="px-7 py-3.5 text-sm font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-xl shadow-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Request Formal Quote
        </button>
      </div>
    </div>
  );
};
