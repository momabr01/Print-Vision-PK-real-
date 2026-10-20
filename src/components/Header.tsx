import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { WhatsAppIcon } from './WhatsAppButton.tsx';
import { SITE_CONFIG } from '../config/siteConfig.ts';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About PrintVision' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E5DFD3] py-3'
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#E5DFD3]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Est. 1997 indicator */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded cursor-pointer shrink-0"
            aria-label="PrintVision Home"
          >
            <Logo size="md" variant="dark" />
          </button>

          {/* Zone 2: Clean 4 single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#16130F]">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#16130F] font-bold'
                      : 'hover:text-[#E8791F] text-[#16130F]/70'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8791F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action & Direct Telephone */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.contact.phoneCallable}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#16130F]/80 hover:text-[#16130F] px-2.5 py-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8791F]" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello PrintVision, I would like to inquire about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#16130F] bg-[#25D366]/15 hover:bg-[#25D366]/25 rounded-lg transition-colors border border-[#25D366]/30 cursor-pointer"
              title="Direct WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#16130F] hover:bg-[#F3EFE7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E8791F] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E5DFD3] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#F3EFE7] text-[#16130F] font-bold'
                      : 'text-[#16130F]/80 hover:bg-[#F3EFE7]/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#E5DFD3] flex flex-col gap-2">
              <a
                href={`tel:${SITE_CONFIG.contact.phoneCallable}`}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#16130F] bg-[#F3EFE7] rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#E8791F]" />
                <span>Call Us (Lahore): {SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello PrintVision, I would like to inquire about your services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-lg shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Message on WhatsApp ({SITE_CONFIG.contact.whatsappDisplay})</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full text-center py-3 text-sm font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-lg shadow cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
