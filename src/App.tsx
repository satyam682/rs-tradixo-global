/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import HomeOverview from './components/HomeOverview.tsx';
import SourcingCapabilitiesAnimation from './components/SourcingCapabilitiesAnimation.tsx';
import ProductCatalog from './components/ProductCatalog.tsx';
import ExportMarkets from './components/ExportMarkets.tsx';
import Certifications from './components/Certifications.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import InquiryModal from './components/InquiryModal.tsx';
import CommercialMarquee from './components/CommercialMarquee.tsx';
import SEOWrapper from './components/SEOWrapper.tsx';
import { Product } from './types.ts';
import { PRODUCTS, COMP_INFO } from './data.ts';
import { Scale, ShieldCheck, Ship, MessageSquare } from 'lucide-react';
import Chatbot, { ChatbotButton } from './components/Chatbot.tsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [chatbotOpen, setChatbotOpen] = useState<boolean>(false);
  const [preselectedProduct, setPreselectedProduct] = useState<Product | null>(null);

  const handleOpenInquiryWithProduct = (product: Product) => {
    setPreselectedProduct(product);
    setInquiryModalOpen(true);
  };

  const handleOpenGeneralInquiry = () => {
    setPreselectedProduct(null);
    setInquiryModalOpen(true);
  };

  // Switch tabs and scroll gently to top
  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the active main tab view
  const renderTabContent = () => {
    switch (currentTab) {
      case 'about':
        return (
          <div className="bg-white">
            {/* About Page Component */}
            <AboutUsSection onOpenInquiry={handleOpenGeneralInquiry} />
          </div>
        );
      case 'products':
        return (
          <div className="bg-white">
            {/* Full Product Grid Catalogue */}
            <ProductCatalog 
              onSelectProduct={handleOpenInquiryWithProduct} 
              selectedCategoryId="all" 
            />
          </div>
        );
      case 'markets':
        return (
          <ExportMarkets onOpenInquiry={handleOpenGeneralInquiry} />
        );
      case 'certifications':
        return (
          <Certifications />
        );
      case 'faq':
        return (
          <div className="bg-white py-4 animate-fade-in">
            <ContactSection onOpenInquiry={handleOpenGeneralInquiry} showOnlyFaq={true} />
          </div>
        );
      case 'contact':
        return (
          <ContactSection onOpenInquiry={handleOpenGeneralInquiry} showOnlyFaq={false} />
        );
      case 'home':
      default:
        return (
          <>
            {/* Hero Banner Component */}
            <Hero 
              onExploreProducts={() => handleTabChange('products')} 
              onOpenInquiry={handleOpenGeneralInquiry} 
            />

            {/* Custom Commercial Sliding Marquees for Logistics and Credentials */}
            <CommercialMarquee />
            
            {/* Why Choose Us & Company BioOverview component */}
            <HomeOverview 
              onLearnMore={() => handleTabChange('about')} 
              onOpenInquiry={handleOpenGeneralInquiry} 
            />

            {/* Premium Scroll-driven highlight animation section */}
            <SourcingCapabilitiesAnimation />

            

            {/* Global Reach Quick Matrix Showcase */}
            <section className="py-20 bg-[#F9FAFB] border-t border-slate-100 font-sans relative overflow-hidden">
              <div className="geometric-accent-left pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 text-left">
                    <span className="text-[#0056B3] font-bold tracking-widest text-xs uppercase block">
                      Worldwide Trade Reach
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
                      Feeding Global Markets from Jebel Ali to South East Asia
                    </h3>
                    <p className="text-[#0056B3]/90 bg-blue-50/40 p-4 border-l-4 border-l-[#0056B3] rounded-sm text-xs sm:text-sm leading-relaxed font-semibold">
                      Our commercial reach spans primary trading lanes, feeding processors, distributors, and bulk consumer chains across the UAE, Vietnam, Malaysia, Indonesia, and Gulf region countries. We handle all international custom document demands under absolute legal speed.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-sm border border-slate-150 blue-shadow text-left">
                        <p className="text-xl font-bold font-heading text-slate-900">12+ Days</p>
                        <p className="text-slate-405 text-slate-500 text-xs mt-1 uppercase tracking-wider font-bold">Average Asia Vessel Transit</p>
                      </div>
                      <div className="p-4 bg-white rounded-sm border border-slate-150 blue-shadow text-left">
                        <p className="text-xl font-bold font-heading text-slate-900">4-5 Days</p>
                        <p className="text-slate-405 text-slate-505 text-slate-500 text-xs mt-1 uppercase tracking-wider font-bold">Direct Arab-Gulf Transit</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => handleTabChange('markets')}
                        className="px-5 py-3 bg-[#0056B3] hover:bg-blue-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md inline-block"
                      >
                        Explore Sourcing Channels
                      </button>
                    </div>
                  </div>

                  {/* Flag row list view mockup */}
                  <div className="space-y-4">
                    <h4 className="font-heading font-extrabold text-[#0056B3] text-xs uppercase tracking-wider border-l-2 border-[#0056B3] pl-2 mb-4 text-left">
                      Primary Export Channels (Verified Ports)
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-white border border-slate-150 rounded-sm flex items-center justify-between text-xs font-sans blue-shadow">
                        <span className="font-bold text-slate-800">🇦🇪 Dubai - Jebel Ali Port (UAE)</span>
                        <span className="text-[#0056B3] text-[11px] font-bold font-mono">Maersk Express Lanes</span>
                      </div>
                      <div className="p-4 bg-white border border-slate-150 rounded-sm flex items-center justify-between text-xs font-sans blue-shadow">
                        <span className="font-bold text-slate-800">🇻🇳 Vietnam - Hai Phong Seaport</span>
                        <span className="text-[#0056B3] text-[11px] font-bold font-mono">Indo-ASEAN compliant</span>
                      </div>
                      <div className="p-4 bg-white border border-slate-150 rounded-sm flex items-center justify-between text-xs font-sans blue-shadow">
                        <span className="font-bold text-slate-800">🇮🇩 Indonesia - Tanjung Priok, Jakarta</span>
                        <span className="text-[#0056B3] text-[11px] font-bold font-mono">Food parboiled ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0056B3] selection:text-white flex flex-col justify-between">
      
      {/* Dynamic Advanced Multi-lingual SEO synchronizer */}
      <SEOWrapper currentTab={currentTab} />
      
      {/* Corporate Fixed Navigation */}
      <Header 
        currentTab={currentTab} 
        onTabChange={handleTabChange} 
        onOpenInquiry={handleOpenGeneralInquiry} 
      />

      {/* Main Container block offset for header height, plus mobile bottom nav padding */}
      <main className="flex-grow pt-[124px] sm:pt-[100px] xl:pb-0 pb-16">
        {renderTabContent()}
      </main>

      {/* Sourcing Footer section */}
      <Footer 
        onTabChange={handleTabChange} 
        onOpenInquiry={handleOpenGeneralInquiry} 
      />

      {/* Global Interactive B2B Quote overlay modal */}
      <InquiryModal 
        isOpen={inquiryModalOpen} 
        onClose={() => setInquiryModalOpen(false)} 
        selectedProduct={preselectedProduct} 
        allProducts={PRODUCTS} 
      />

      {/* TradixoBot — Rule-Based Chatbot */}
      <Chatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
      <ChatbotButton
        onClick={() => setChatbotOpen(prev => !prev)}
        isOpen={chatbotOpen}
      />

      {/* Floating instant WhatsApp link widget with custom badge */}
      <div className="fixed bottom-6 right-6 z-30 group hidden sm:block">
        <a 
          href={`https://wa.me/${COMP_INFO.whatsapp}?text=${encodeURIComponent("Hello Rs Tradixo Global exporter team, I am interested in agricultural products quotation.")}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[#0056B3]/25 shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
          title="Instant WhatsApp Sourcing Chat"
        >
          <MessageSquare className="w-5 h-5 animate-pulse" />
        </a>
        <span className="absolute right-14 top-2 bg-slate-900 text-white text-[10px] uppercase font-bold py-1 px-3.5 rounded-sm border border-slate-700 shadow shadow-[#0056B3]/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Live WhatsApp Desk
        </span>
      </div>
    </div>
  );
}

// Inner supplementary component for cleanest modular representation of About Us inside App.tsx
import AboutUs from './components/AboutUs.tsx';
function AboutUsSection({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  return (
    <AboutUs onOpenInquiry={onOpenInquiry} />
  );
}
