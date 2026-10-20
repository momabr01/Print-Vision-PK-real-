import React, { useState } from 'react';
import {
  ArrowRight,
  Shield,
  Layers,
  Wrench,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Clock,
  Printer,
  Palette,
  Rocket,
  Building,
  Gift,
  Store,
  Compass,
  Megaphone,
  Briefcase,
  ExternalLink,
} from 'lucide-react';
import {
  SITE_CONFIG,
  SERVICES_DATA,
  COMPANY_HERITAGE,
  CLIENTS_DATA,
  METHODOLOGY_STEPS,
  PORTFOLIO_PROJECTS,
  ServiceItem,
} from '../config/siteConfig.ts';
import { MarketLeadersMarquee } from '../components/MarketLeadersMarquee.tsx';

interface HomePageProps {
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'print' | 'experiential' | 'retail'>('all');

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

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'print') return s.id === 'corporate-printing' || s.id === 'brand-designing';
    if (activeFilter === 'experiential') return s.id === 'exhibitions' || s.id === 'brand-product-launches' || s.id === 'experiential-marketing';
    if (activeFilter === 'retail') return s.id === 'retail-marketing' || s.id === 'trade-marketing' || s.id === 'promotional-concepts-design';
    return true;
  });

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                              */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-8 lg:pt-12 pb-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Value Proposition & Plain-Spoken Pitch */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed Heritage Kicker */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8791F]">
                <span>Advertising Agency & Print House</span>
                <span className="text-[#E5DFD3]">·</span>
                <span>Established 1997</span>
                <span className="text-[#E5DFD3]">·</span>
                <span className="text-[#16130F]/70 font-semibold">Lahore, Pakistan</span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#16130F] tracking-tight leading-[1.08] text-balance">
                From Vision to <span className="text-[#E8791F]">Visibility.</span>
              </h1>

              {/* Plain-Spoken, Confident Supporting Prose */}
              <p className="text-base sm:text-lg text-[#16130F]/75 leading-relaxed max-w-2xl font-normal">
                PrintVision is a full-featured advertising firm and print house based in Lahore, Pakistan, established in 1997. We bridge the gap between creative concepts and flawless real-world execution, delivering corporate printing, brand design, exhibitions, retail marketing, and turnkey experiential campaigns nationwide.
              </p>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello PrintVision, I would like to discuss my project requirements.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 text-base font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] active:bg-[#C45E0F] rounded-xl shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Core Trust Proofs */}
              <div className="pt-4 border-t border-[#E5DFD3]/80 flex items-center flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] border border-[#E5DFD3] rounded-lg font-bold text-[#16130F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E8791F]" />
                  29+ Years Track Record (Est. 1997)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] border border-[#E5DFD3] rounded-lg font-bold text-[#16130F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E8791F]" />
                  Lahore Based, In-House Printing
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5DFD3] bg-[#16130F] aspect-4/3 lg:aspect-square">
                <img
                  src="/src/assets/images/hero_exhibition_booth_1792411446690.jpg"
                  alt="PrintVision Custom Exhibition Pavilion"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8791F] bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded inline-block">
                    Featured Project · Turnkey Staging
                  </span>
                  <div className="text-xl font-bold">CEVA Pharma & PTDC Exhibition Pavilions</div>
                  <p className="text-xs text-[#F3EFE7]/80 line-clamp-2">
                    Custom architectural exhibition design, overhead halo rigging, and on-site handover at Expo Centre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CLIENT TICKER / TRUST MARKET LEADERS IN LINEAR MOTION          */}
      {/* ------------------------------------------------------------- */}
      <MarketLeadersMarquee onOpenConsultation={() => onOpenQuoteModal()} />

      {/* ------------------------------------------------------------- */}
      {/* 2. THE 9 CORE SERVICES                                         */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8791F]">
              <span>Core Disciplines</span>
              <span className="text-[#E5DFD3]">·</span>
              <span className="text-[#16130F]/70 font-semibold">Nine Specialised Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16130F] tracking-tight">
              Integrated Production & Activation Services.
            </h2>
            <p className="text-base text-[#16130F]/75 leading-relaxed">
              Every discipline is executed under our direct technical supervision, eliminating third-party markups and unaligned subcontractors.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E5DFD3] rounded-xl self-start md:self-auto overflow-x-auto">
            {(
              [
                { id: 'all', label: 'All Services' },
                { id: 'print', label: 'Print & Design' },
                { id: 'experiential', label: 'Exhibitions & Launches' },
                { id: 'retail', label: 'Retail & Trade' },
              ] as const
            ).map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'bg-[#16130F] text-white shadow-2xs'
                    : 'text-[#16130F]/70 hover:text-[#16130F] hover:bg-[#F3EFE7]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              onClick={() => onNavigate('service-detail', service.id)}
              className="group bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#16130F]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 bg-[#16130F]/80 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10 text-white flex items-center gap-2">
                    <span className="text-xs font-black text-[#E8791F] tabular-nums">
                      {service.orderNumber}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      {service.title}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E5DFD3]">
                      {getServiceIcon(service.orderNumber)}
                    </div>
                    <h3 className="text-xl font-bold text-[#16130F] group-hover:text-[#E8791F] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#16130F]/75 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#E5DFD3]/60">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#E8791F]">
                      Key Deliverables
                    </div>
                    {service.deliverables.slice(0, 2).map((del, i) => (
                      <div key={i} className="text-xs text-[#16130F]/80 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E8791F] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#E5DFD3]/40 flex items-center justify-between text-xs font-bold text-[#E8791F]">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Explore Technical Capabilities</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
                <span className="text-[#16130F]/40 font-mono text-[11px]">
                  #{service.orderNumber}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ------------------------------------------------------------- */}
      {/* 4. OUR PROCESS: 4 STEPS FROM OFFICIAL PROFILE                  */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2 mb-12 text-center mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E8791F]">
            How We Do It
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16130F] tracking-tight">
            Our Four-Step Working Methodology.
          </h2>
          <p className="text-[#16130F]/70 text-sm sm:text-base leading-relaxed">
            From consumer insight to measurable on-ground return, as documented in the PrintVision company profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((proc) => (
            <div
              key={proc.step}
              className="bg-white p-6 rounded-2xl border border-[#E5DFD3] relative flex flex-col justify-between space-y-4 shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#16130F] tabular-nums">
                    {proc.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8791F] bg-[#F3EFE7] px-2 py-0.5 rounded">
                    {proc.subtitle}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#16130F]">{proc.name}</h3>
                <p className="text-xs text-[#16130F]/70 leading-relaxed">{proc.description}</p>
              </div>

              <div className="pt-2 border-t border-[#E5DFD3]/60 text-[11px] text-[#16130F]/40 font-medium">
                Stage {proc.step} of 04
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. CONVERSION CALL TO ACTION                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16130F] text-[#F3EFE7] rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#2E271F] shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E8791F]">
              Let’s Work Together
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Ready to Turn Your Vision into Visibility?
            </h2>
            <p className="text-[#F3EFE7]/75 text-base sm:text-lg leading-relaxed">
              Tell us what your business is planning. Whether it is an upcoming corporate exhibition, nationwide retail branding, or a major product launch, our Lahore team is ready to evaluate your brief.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 text-base font-semibold text-[#F3EFE7] bg-[#E8791F] hover:bg-[#D66B15] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Speak with Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-[#F3EFE7]/50 pt-3">
              Suite# 75, 76 F Auto Center, Qartaba Chowk, Lahore · Established in 1997
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
