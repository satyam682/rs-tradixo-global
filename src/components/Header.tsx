/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, PhoneCall, Anchor, Languages, Check, ArrowUpRight, ShieldCheck, MoreVertical, Home, Building2, ShoppingBag, Award, Headphones } from 'lucide-react';
import { COMP_INFO } from '../data.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onOpenInquiry: () => void;
}

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' }, // UK / USA Sourcing standard
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'gu', label: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪' }, // Dubai / GCC Port Trade
];

export default function Header({ currentTab, onTabChange, onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveIstTime, setLiveIstTime] = useState('');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  
  const { language: currentLang, setLanguage: setCurrentLang, t } = useLanguage();

  // Monitor scroll for header background shifts
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync Live IST Clock (India Standard Time UTC+5:30) for foreign buyers
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Adjust to UTC+5:30
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);
      
      const timeStr = istTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setLiveIstTime(timeStr + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav_home },
    { id: 'about', label: t.nav_about },
    { id: 'products', label: t.nav_products },
    { id: 'markets', label: t.nav_markets },
    { id: 'certifications', label: t.nav_certifications },
    { id: 'faq', label: t.nav_faq },
    { id: 'contact', label: t.nav_contact },
  ];

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
    // Smooth scroll page to top so they see the tab content transition perfectly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedLanguage = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      
      {/* Top Professional B2B Notification & Live Desk Clock Bar */}
      <div className="bg-slate-900 text-white text-[11px] py-2 px-4 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-3 font-sans">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold animate-pulse">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 block" />
              <span className="hidden sm:inline">{t.header_live_desk}</span>
              <span className="sm:hidden">Live Export Desk</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300 shrink-0">
            <span className="hidden md:inline">{t.header_clock_label} <strong className="text-emerald-300 font-mono font-medium">{liveIstTime}</strong></span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <a href={`https://wa.me/${COMP_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-mono font-bold font-sans text-[10px]">+{COMP_INFO.phone.replace(/[^0-9]/g, '')}</a>
          </div>

        </div>
      </div>

      {/* Main Branding Navigation bar */}
      <nav className={`transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3 text-slate-800 relative`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-2">
          
          {/* Logo Brand — actual company logo image */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            id="brand_logo_header"
          >
            <img
              src="/logo.png"
              alt="RS Tradixo Global Logo"
              className="h-14 w-14 object-contain rounded-full border border-[#AA8B4C]/20 shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0"
            />
            <div className="leading-tight text-left">
              <div className="font-bold text-sm sm:text-base text-slate-900 tracking-tight transition-colors group-hover:text-[#AA8B4C] whitespace-nowrap">
                RS <span className="text-[#C5A25D]">TRADIXO</span> GLOBAL
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-slate-400 font-extrabold font-sans">Connecting to the World...</div>
            </div>
          </div>

          {/* Desktop Navigation Links — tightened spacing so CTA never gets clipped */}
          <div className="hidden xl:flex items-center gap-0.5 min-w-0 flex-1 justify-center px-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2 py-1.5 text-[10px] font-bold uppercase tracking-normal rounded-md border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  currentTab === item.id 
                    ? 'text-[#AA8B4C] border-[#C5A25D]/50 bg-[#FDFBF7] shadow-sm' 
                    : 'text-slate-600 border-transparent hover:text-[#AA8B4C] hover:border-[#C5A25D]/30 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Selector + Global Quote action */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            
            {/* Multi-language selector dropdown trigger */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-sm text-slate-700 hover:text-slate-900 flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors"
                title="Select Trade Language"
                id="language_dropdown_trigger"
              >
                <Globe className="w-4 h-4 text-[#C5A25D]" />
                <span className="font-mono text-xs">{selectedLanguage.flag}</span>
                <span className="hidden xl:inline">{selectedLanguage.code.toUpperCase()}</span>
              </button>

              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-sm shadow-lg overflow-hidden py-1 z-50">
                  <div className="px-3 py-1.5 border-b text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {t.trade_languages}
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setShowLangDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs hover:bg-slate-100 flex items-center justify-between font-sans transition-colors cursor-pointer text-slate-700"
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                      {currentLang === lang.code && <Check className="w-3 h-3 text-amber-500 stroke-[3]" />}
                    </button>
                  ))}
                  <div className="bg-[#FDFBF7] px-3 py-2 border-t text-[9px] text-[#AA8B4C] flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3 h-3 text-[#C5A25D]" /> {t.incoterms_compliant}
                  </div>
                </div>
              )}
            </div>

            {/* Quote Action Trigger */}
            <button
              onClick={onOpenInquiry}
              className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A25D] hover:from-[#E2C578] hover:to-[#D4AF37] text-slate-950 rounded-sm text-[10px] font-extrabold uppercase tracking-wide transition-all duration-300 shadow-md flex items-center gap-1 text-center shrink-0 cursor-pointer border border-[#AA8B4C]/25 whitespace-nowrap"
              id="get_quote_header_btn"
            >
              {t.btn_get_fob_quote}
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile 3-dot trigger - Always visible on non-xl screens */}
          <div className="flex items-center gap-2 xl:hidden flex-shrink-0 ml-auto">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A25D] text-slate-950 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer leading-tight hidden sm:block"
            >
              {t.btn_get_fob_quote}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md text-slate-700 cursor-pointer flex-shrink-0 flex items-center justify-center"
              id="mobile_menu_trigger"
              aria-label="Open language menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MoreVertical className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile 3-dot Dropdown Panel (Only languages and basic operations) */}
        {mobileMenuOpen && (
          <div className="absolute top-full right-4 mt-1 bg-white border border-slate-200 shadow-xl rounded-xl p-4 flex flex-col gap-4 xl:hidden animate-fade-in z-50 w-64 text-left">
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#C5A25D]" />
                {t.trade_languages}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`p-2 rounded-lg text-xs font-bold border text-left flex items-center gap-1.5 cursor-pointer transition-all ${
                      currentLang === lang.code 
                        ? 'border-[#0056B3] bg-blue-50 text-[#0056B3]' 
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-mono text-xs">{lang.flag}</span>
                    <span>{lang.label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A25D] hover:from-[#E2C578] hover:to-[#C5A25D] text-slate-950 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer border border-[#AA8B4C]/25"
              >
                {t.btn_get_fob_quote} <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
              
              <div className="text-center text-[9px] font-semibold text-slate-400">
                {t.office_hours} {t.contact_hours_val || '09:00 - 18:30'}
                <br />
                <span className="text-emerald-500 font-bold">{t.sourcing_desk}</span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation Bar (Fixed at the bottom for xl:hidden) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] xl:hidden flex justify-around items-stretch h-16 pb-safe">
        {[
          { id: 'home', label: currentLang === 'hi' ? 'मुख्य' : currentLang === 'gu' ? 'હોમ' : currentLang === 'ar' ? 'الرئيسية' : 'Home', icon: Home },
          { id: 'about', label: currentLang === 'hi' ? 'कंपनी' : currentLang === 'gu' ? 'કંપની' : currentLang === 'ar' ? 'الشركة' : 'Company', icon: Building2 },
          { id: 'products', label: currentLang === 'hi' ? 'उत्पाद' : currentLang === 'gu' ? 'પ્રોડક્ટ્સ' : currentLang === 'ar' ? 'المنتجات' : 'Products', icon: ShoppingBag },
          { id: 'certifications', label: currentLang === 'hi' ? 'प्रमाणपत्र' : currentLang === 'gu' ? 'પ્રમાણપત્ર' : currentLang === 'ar' ? 'الشهادات' : 'Certifications', icon: Award },
          { id: 'contact', label: currentLang === 'hi' ? 'संपर्क' : currentLang === 'gu' ? 'સંપર્ક' : currentLang === 'ar' ? 'الاتصال' : 'Contact', icon: Headphones },
        ].map((item) => {
          const isActive = currentTab === item.id;
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex-1 flex flex-col items-center justify-center relative py-1 cursor-pointer transition-colors ${
                isActive ? 'text-[#C5A25D]' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {/* Top active indicator line */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C5A25D]" />
              )}
              <IconComponent className="w-5.5 h-5.5 mb-1" />
              <span className={`text-[9px] font-extrabold tracking-wider uppercase font-sans mt-0.5 ${isActive ? 'text-[#C5A25D]' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </header>
  );
}

