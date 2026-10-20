/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ServiceDetailPage } from './pages/ServiceDetailPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeServiceId, setActiveServiceId] = useState<string>('corporate-printing');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string>('corporate-printing');

  const handleNavigate = (tab: string, serviceId?: string) => {
    if (serviceId) {
      setActiveServiceId(serviceId);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceId?: string) => {
    if (serviceId) {
      setQuoteInitialService(serviceId);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#16130F] selection:bg-[#E8791F] selection:text-white font-sans">
      {/* Sticky Top Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentTab === 'service-detail' && (
          <ServiceDetailPage
            serviceId={activeServiceId}
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage initialServiceId={activeServiceId} />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialServiceId={quoteInitialService}
      />

      {/* Direct WhatsApp Messaging Integration (+92 323 4219611) */}
      <WhatsAppButton />
    </div>
  );
}
