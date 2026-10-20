import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, MapPin, Printer, History, Sparkles } from 'lucide-react';
import { CLIENTS_DATA, SITE_CONFIG } from '../config/siteConfig.ts';
import { Logo } from '../components/Logo.tsx';

interface AboutPageProps {
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8791F]">
          <span>Company Profile</span>
          <span className="text-[#E5DFD3]">·</span>
          <span>PrintVision Lahore</span>
          <span className="text-[#E5DFD3]">·</span>
          <span className="text-[#16130F]/70 font-semibold">Established 1997</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#16130F] tracking-tight">
          From Vision to Visibility Since 1997.
        </h1>
        <p className="text-base sm:text-lg text-[#16130F]/75 leading-relaxed">
          PrintVision is a full-featured advertising firm and print house engaged in ATL & BTL activations, providing 360° solutions for established as well as rising brands across Pakistan.
        </p>
      </div>

      {/* Philosophy & Plain-Spoken Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E8791F]">
            Who We Are
          </div>
          <h2 className="text-3xl font-extrabold text-[#16130F] tracking-tight">
            A Full Featured Branding Firm with a 360° Approach.
          </h2>
          <p className="text-[#16130F]/75 text-sm sm:text-base leading-relaxed">
            Our uniqueness lies in the diversity of our skills, ranging from media arts, textile design, fine arts, and product design to graphical displays for your brand. With deep experience in arranging large events such as concerts, gig nights, theatrical productions, exhibitions, experiential marketing kiosks, and brand activations, PrintVision has earned an enduring reputation in the field.
          </p>
          <p className="text-[#16130F]/75 text-sm sm:text-base leading-relaxed">
            Perfection is our aim, for which we spend our time digging creative solutions for our customers. We cover all aspects from planning, management, and co-ordination to final execution. We deliver cost-effective solutions without compromising on the final output. Once you join hands with PrintVision, you can sit back, relax, and leave the rest to our shoulders.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#16130F]">
            <div className="flex items-center gap-2 p-3.5 bg-white rounded-xl border border-[#E5DFD3] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#E8791F] shrink-0" />
              <span>Established in Lahore in 1997</span>
            </div>
            <div className="flex items-center gap-2 p-3.5 bg-white rounded-xl border border-[#E5DFD3] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#E8791F] shrink-0" />
              <span>Full-Featured ATL & BTL Agency</span>
            </div>
            <div className="flex items-center gap-2 p-3.5 bg-white rounded-xl border border-[#E5DFD3] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#E8791F] shrink-0" />
              <span>Suite# 75, 76 F Auto Center, Qartaba Chowk</span>
            </div>
            <div className="flex items-center gap-2 p-3.5 bg-white rounded-xl border border-[#E5DFD3] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#E8791F] shrink-0" />
              <span>Pakistan-Wide Deployment</span>
            </div>
          </div>
        </div>

        {/* Right Feature Card */}
        <div className="lg:col-span-6 bg-[#16130F] text-[#F3EFE7] p-8 sm:p-12 rounded-3xl border border-[#26201A] shadow-xl space-y-6">
          <Logo size="lg" variant="light" />

          <div className="space-y-3 pt-2">
            <h3 className="text-xl font-bold text-white">Our Belief</h3>
            <p className="text-[#F3EFE7]/85 text-xs sm:text-sm font-semibold tracking-wide uppercase leading-relaxed text-[#E8791F]">
              "A strong brand is a collection of coherent ideas and experiences with a product or service over period of time."
            </p>
            <p className="text-[#F3EFE7]/70 text-xs sm:text-sm leading-relaxed">
              We help brands grow and value our customers whether big or small. We always strive for the best to ensure your brand grows whatsoever the medium of communication be.
            </p>
            <div className="italic text-xs text-[#F3EFE7]/60">
              "Strengthening our partner brands... strengthens us."
            </div>
          </div>

          <div className="pt-4 border-t border-[#26201A] space-y-3.5 text-xs text-[#F3EFE7]/80">
            <div className="flex items-start gap-3">
              <Target className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">Spot on... spot it out:</span> We build culture around brand personality across television, press, and on-ground activations.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">Effective idea from planning to execution:</span> All is well that ends well—we closely follow creative ideas to flawless on-site completion.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">Relevance with innovation:</span> Timeless ideas that remain on top, bringing relevant yet fresh concepts.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Clients & Partners — Official Brand Logos */}
      <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E8791F]">
            Long-Standing Partnerships
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16130F]">
            Our Clients & Partners
          </h2>
          <p className="text-[#16130F]/70 text-sm leading-relaxed">
            Organisations that have trusted PrintVision for their flagship launches, nationwide activations, exhibition pavilions, and corporate printing.
          </p>
        </div>

        <div className="space-y-6 pt-2">
          {/* Row 1: 4 logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENTS_DATA.slice(0, 4).map((client) => (
              <div
                key={client.id}
                className="p-6 rounded-2xl bg-[#FAF8F5] hover:bg-white border border-[#E5DFD3] hover:border-[#E8791F] transition-all duration-200 hover:shadow-md group flex flex-col items-center justify-center min-h-[160px]"
              >
                <div className="h-28 w-full flex items-center justify-center p-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 3 logos centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CLIENTS_DATA.slice(4, 7).map((client) => (
              <div
                key={client.id}
                className="p-6 rounded-2xl bg-[#FAF8F5] hover:bg-white border border-[#E5DFD3] hover:border-[#E8791F] transition-all duration-200 hover:shadow-md group flex flex-col items-center justify-center min-h-[160px]"
              >
                <div className="h-28 w-full flex items-center justify-center p-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities & Operations in Lahore */}
      <div className="bg-[#FAF8F5] rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E8791F]">
            Operational Base
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16130F]">
            Lahore Heart, Nationwide Reach
          </h2>
          <p className="text-[#16130F]/70 text-sm leading-relaxed">
            Headquartered at Suite# 75, 76 F Auto Center, Qartaba Chowk, Lahore, we coordinate simultaneous multi-city campaign deployments across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white border border-[#E5DFD3] space-y-2.5 shadow-2xs">
            <div className="flex items-center gap-2 text-sm font-bold text-[#16130F]">
              <Printer className="w-4 h-4 text-[#E8791F]" />
              <span>Lahore Head Office & Works</span>
            </div>
            <p className="text-xs text-[#16130F]/70 leading-relaxed">
              Suite# 75, 76 F Auto Center, Qartaba Chowk, Lahore. In-house studio, wide-format press bays, and custom joinery fabrication.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DFD3] space-y-2.5 shadow-2xs">
            <div className="flex items-center gap-2 text-sm font-bold text-[#16130F]">
              <History className="w-4 h-4 text-[#E8791F]" />
              <span>Established Track Record</span>
            </div>
            <p className="text-xs text-[#16130F]/70 leading-relaxed">
              Founded in 1997, maintaining continuous execution excellence across nearly three decades of industry transformation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DFD3] space-y-2.5 shadow-2xs">
            <div className="flex items-center gap-2 text-sm font-bold text-[#16130F]">
              <MapPin className="w-4 h-4 text-[#E8791F]" />
              <span>Direct Contacts</span>
            </div>
            <p className="text-xs text-[#16130F]/70 leading-relaxed">
              WhatsApp/Cell: +92 323 4219611<br />
              Email: printvision99@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#16130F] text-[#F3EFE7] p-8 sm:p-12 rounded-3xl border border-[#26201A] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Start a Project with PrintVision</h3>
          <p className="text-[#F3EFE7]/70 text-sm leading-relaxed">
            Let’s discuss your upcoming brand launch, exhibition pavilion, or corporate printing requirements with plain-spoken clarity.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello PrintVision, I would like to get a quote for my project.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-sm font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => onNavigate('services')}
            className="px-5 py-3.5 text-sm font-semibold text-[#F3EFE7] bg-white/10 hover:bg-white/15 rounded-xl transition-colors cursor-pointer"
          >
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
};
