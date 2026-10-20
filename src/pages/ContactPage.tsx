import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig.ts';

interface ContactPageProps {
  initialServiceId?: string;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8791F]">
          <span>Contact PrintVision</span>
          <span className="text-[#E5DFD3]">·</span>
          <span>Lahore Office</span>
          <span className="text-[#E5DFD3]">·</span>
          <span className="text-[#16130F]/70 font-semibold">Established 1997</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#16130F] tracking-tight">
          Let’s Discuss Your Next Move.
        </h1>
        <p className="text-base sm:text-lg text-[#16130F]/75 leading-relaxed">
          Whether you need high-volume corporate printing, a custom exhibition stand for an upcoming expo, or a synchronized nationwide promotional rollout, our team in Lahore is ready to assist.
        </p>
      </div>

      {/* Contact Info Card & Facilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Contact & Facilities Card */}
        <div className="lg:col-span-7 bg-[#16130F] text-[#F3EFE7] p-8 sm:p-12 rounded-3xl border border-[#26201A] shadow-xl space-y-8">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Contact PrintVision</h3>
            <p className="text-[#F3EFE7]/75 text-sm leading-relaxed">
              Connect directly with our estimators and production managers in Lahore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-1.5">
              <div className="text-xs text-[#F3EFE7]/50 font-semibold uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8791F]" />
                <span>Telephone</span>
              </div>
              <a
                href={`tel:${SITE_CONFIG.contact.phoneCallable}`}
                className="font-bold text-white hover:text-[#E8791F] transition-colors text-base"
              >
                {SITE_CONFIG.contact.phoneDisplay}
              </a>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs text-[#F3EFE7]/50 font-semibold uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-white hover:text-emerald-300 transition-colors text-base"
              >
                {SITE_CONFIG.contact.whatsappDisplay}
              </a>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs text-[#F3EFE7]/50 font-semibold uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E8791F]" />
                <span>Email Address</span>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="font-bold text-white hover:text-[#E8791F] transition-colors text-sm break-all"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs text-[#F3EFE7]/50 font-semibold uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E8791F]" />
                <span>Working Hours</span>
              </div>
              <div className="text-white text-xs leading-relaxed">{SITE_CONFIG.contact.workingHours}</div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#26201A] space-y-4">
            <div className="text-xs text-[#F3EFE7]/50 font-semibold uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E8791F]" />
              <span>Address & Suite</span>
            </div>
            <div className="text-white text-sm font-semibold leading-relaxed">
              {SITE_CONFIG.contact.headOffice.address}, {SITE_CONFIG.contact.headOffice.city}, {SITE_CONFIG.contact.headOffice.country}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello PrintVision, I would like to get a quote for my project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Facilities & Operations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E5DFD3] shadow-xs space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#16130F]">Lahore Headquarters & Studio</h3>
              <p className="text-xs text-[#16130F]/70 leading-relaxed">
                In-house wide format press bays, custom joinery fabrication, and direct project management.
              </p>
            </div>

            <div className="space-y-4 pt-2 text-xs text-[#16130F]/80">
              <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-2xl border border-[#E5DFD3]">
                <MapPin className="w-5 h-5 text-[#E8791F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-[#16130F]">Suite# 75, 76 F Auto Center</div>
                  <div>Qartaba Chowk, Lahore</div>
                  <div className="text-[#16130F]/50 pt-1">Established 1997 · Direct Management</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-2xl border border-[#E5DFD3]">
                <Clock className="w-5 h-5 text-[#E8791F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-[#16130F]">Execution Excellence</div>
                  <div>Direct technical supervision on all print, joinery, and exhibition builds.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
