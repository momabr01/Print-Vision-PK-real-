import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { SITE_CONFIG, SERVICES_DATA } from '../config/siteConfig.ts';

interface FooterProps {
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#16130F] text-[#F3EFE7] border-t border-[#26201A]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <Logo size="lg" variant="light" />
            </button>

            <p className="text-sm text-[#F3EFE7]/70 leading-relaxed max-w-sm">
              PrintVision is an advertising agency and print house based in Lahore, Pakistan, established in 1997. From vision to visibility, delivering commercial print, brand design, exhibitions, retail marketing, and experiential campaigns across Pakistan.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Request Project Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3EFE7]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#F3EFE7]/70 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#F3EFE7]/70 hover:text-white transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#F3EFE7]/70 hover:text-white transition-colors cursor-pointer"
                >
                  About PrintVision
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#F3EFE7]/70 hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Contact & Operations */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3EFE7]">
              Contact
            </h4>
            <div className="space-y-3.5 text-xs text-[#F3EFE7]/85">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#F3EFE7]/50">Telephone</div>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneCallable}`}
                    className="font-semibold text-white hover:text-[#E8791F] transition-colors"
                  >
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#F3EFE7]/50">Estimates & Artwork Enquiries</div>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="font-semibold text-white hover:text-[#E8791F] transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{SITE_CONFIG.contact.headOffice.title}</div>
                  <div className="text-[#F3EFE7]/60 leading-tight">
                    {SITE_CONFIG.contact.headOffice.address}, {SITE_CONFIG.contact.headOffice.city}, {SITE_CONFIG.contact.headOffice.country}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#F3EFE7]/50">Working Hours</div>
                  <div className="text-[#F3EFE7]/80 font-medium">{SITE_CONFIG.contact.workingHours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-[#26201A] bg-[#0E0C09] py-6 text-xs text-[#F3EFE7]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E8791F]" />
            <span>&copy; 1997–{currentYear} {SITE_CONFIG.companyName} (Pvt.) Ltd. All rights reserved. Registered in Pakistan.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#F3EFE7]/70 font-medium">From Vision to Visibility</span>
            <span className="text-[#F3EFE7]/30">|</span>
            <span className="text-[#F3EFE7]/70">Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
