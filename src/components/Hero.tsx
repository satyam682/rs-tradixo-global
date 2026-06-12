/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, MapPin, Ship, Check, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { COMP_INFO } from '../data.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import TypewriterReveal from './TypewriterReveal.tsx';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenInquiry: () => void;
}

// video phase: 'logo-intro' → 'playing' → 'logo-outro' → 'playing' → ...
type VideoPhase = 'logo-intro' | 'playing' | 'logo-outro';

export default function Hero({ onExploreProducts, onOpenInquiry }: HeroProps) {
  const [videoLoaded, setVideoLoaded]   = useState(false);
  const [phase, setPhase]               = useState<VideoPhase>('logo-intro');
  const [logoVisible, setLogoVisible]   = useState(true);  // controls CSS opacity
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t, language } = useLanguage();

  // Typewriter tagline phrases based on active language
  const getTaglinePhrases = () => {
    switch (language) {
      case 'hi':
        return [
          'हर निर्यात में उत्कृष्टता।',
          'भारत को दुनिया से जोड़ना।',
          'प्रीमियम ग्रेड कृषि उत्पाद।'
        ];
      case 'gu':
        return [
          'દરેક નિકાસમાં શ્રેષ્ઠતા.',
          'ભારતને વિશ્વ સાથે જોડવું.',
          'પ્રીમિયમ ગ્રેડ કૃષિ ઉત્પાદનો.'
        ];
      case 'ar':
        return [
          'التميز في كل عملية تصدير.',
          'ربط الهند بالعالم.',
          'منتجات زراعية عالية الجودة.'
        ];
      default: // 'en'
        return [
          'Excellence in every export.',
          'Connecting India to the world.',
          'Premium grade agricultural products.'
        ];
    }
  };

  // ── Logo → Video transition ──────────────────────────────────────────
  const startVideoAfterLogo = useCallback(() => {
    // fade out logo over 600ms then play video
    setLogoVisible(false);
    timerRef.current = setTimeout(() => {
      setPhase('playing');
      videoRef.current?.play().catch(() => {});
    }, 650);
  }, []);

  // ── Video end → Logo → Video transition ─────────────────────────────
  const handleVideoEnd = useCallback(() => {
    setPhase('logo-outro');
    setLogoVisible(true);
    // show logo for 2.5s then restart
    timerRef.current = setTimeout(() => {
      setLogoVisible(false);
      setTimeout(() => {
        setPhase('playing');
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      }, 650);
    }, 2500);
  }, []);

  // ── On mount: show logo for 2.5s then start video ────────────────────
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      startVideoAfterLogo();
    }, 2500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [startVideoAfterLogo]);

  const heroStats = [
    { value: t.hero_stat_tonnage, label: t.hero_stat_tonnage_label },
    { value: t.hero_stat_safety, label: t.hero_stat_safety_label },
    { value: t.hero_stat_channels, label: t.hero_stat_channels_label },
    { value: t.hero_stat_proximity, label: t.hero_stat_proximity_label }
  ];

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-12 md:pt-16 pb-16 font-sans">
      
      {/* Signature Geometric Background Accent of the theme */}
      <div className="geometric-accent pointer-events-none" />
      <div className="geometric-accent-left pointer-events-none" />

      {/* Modern Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 z-10 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Geometric copy block */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            
            <TypewriterReveal 
              key={language}
              phrases={getTaglinePhrases()}
              className="text-[#AA8B4C] font-extrabold tracking-widest text-xs uppercase mb-2 block min-h-5"
            />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight relative">
              {t.hero_title_1} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A25D] to-[#AA8B4C]">{t.hero_title_2}</span>
              {/* Sleek Underline Expand Effect */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#D4AF37] to-transparent w-32 mt-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
              {t.hero_subtitle}
            </p>

            {/* Micro-Details & Port Proximity tags */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-sans font-semibold border-t border-slate-100 pt-4">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A25D]" />
                {t.hero_location}
              </span>
              <span className="flex items-center gap-2">
                <Ship className="w-4 h-4 text-[#C5A25D]" />
                {t.hero_shipping_info}
              </span>
            </div>

            {/* Geometric-Balance Styled Buttons - Interactive Spring physics */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                onClick={onExploreProducts}
                className="bg-gradient-to-r from-[#D4AF37] to-[#C5A25D] text-slate-950 px-8 py-4 font-bold rounded-sm shadow-xl hover:shadow-[0_8px_24px_rgba(212,175,55,0.25)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border border-[#AA8B4C]/25"
                id="explore_products_hero_btn"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.btn_explore_products}
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </motion.button>

              <motion.button
                onClick={onOpenInquiry}
                className="border-2 border-[#C5A25D] text-[#AA8B4C] hover:bg-[#FDFBF7] px-8 py-4 font-bold rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-center font-sans tracking-wide"
                id="inquiry_hero_btn"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.btn_export_inquiry}
              </motion.button>
            </div>

            {/* Flag overlapping badge block */}
            <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
              <div className="flex -space-x-3 shrink-0">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[9px] font-extrabold shadow-sm select-none">🇦🇪 UAE</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#C5A25D] text-slate-950 flex items-center justify-center text-[9px] font-extrabold shadow-sm select-none">🇻🇳 VNM</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-250 bg-slate-100 text-slate-800 flex items-center justify-center text-[9px] font-extrabold shadow-sm select-none">🇮🇩 IDN</div>
              </div>
              <div className="text-xs text-gray-550 font-bold uppercase tracking-wider leading-relaxed text-left">
                {t.hero_serving_markets}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Premium framed Logistics video with white geometric border and gold shadow */}
          <motion.div 
            className="lg:col-span-6 relative flex items-center"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            
            <motion.div 
              className="w-full aspect-[4/3] rounded-2xl overflow-hidden gold-shadow relative border-[12px] border-white bg-slate-100"
              whileHover={{ rotateY: 5, rotateX: -2, scale: 1.02 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              
              {/* ── Video element (no autoPlay / no loop — controlled manually) ── */}
              <video
                ref={videoRef}
                muted
                playsInline
                onCanPlay={() => setVideoLoaded(true)}
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover transition-opacity duration-700 select-none scale-102"
                style={{
                  opacity: phase === 'playing' && videoLoaded ? 0.9 : 0,
                  pointerEvents: 'none',
                }}
                poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
              >
                <source src="https://cdn.jsdelivr.net/gh/satyam682/tradixo-assets@main/make_the_next_part_of_this_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* ── Logo Overlay (intro + outro) ── */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-600"
                style={{
                  opacity: (phase === 'logo-intro' || phase === 'logo-outro') && logoVisible ? 1 : 0,
                  pointerEvents: 'none',
                  background: '#FFFFFF',
                }}
              >
                {/* Subtle animated ring behind logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full border border-[#C5A25D]/10 animate-ping" style={{ animationDuration: '3s' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full border border-[#C5A25D]/20" />
                </div>

                {/* Logo image (larger and responsive) */}
                <img
                  src="/logo.png"
                  alt="RS Tradixo Global"
                  className="w-64 sm:w-80 md:w-[420px] lg:w-[480px] h-auto object-contain drop-shadow-md relative z-10 animate-fade-in"
                  style={{ filter: 'drop-shadow(0 0 24px rgba(197,162,93,0.15))' }}
                />

                {/* Loading dots — only on intro */}
                {phase === 'logo-intro' && (
                  <div className="flex items-center gap-1.5 mt-5 relative z-10">
                    {[0, 1, 2].map(i => (
                      <div key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#C5A25D]"
                        style={{ animation: `logoDot 1.2s ease-in-out ${i * 0.25}s infinite` }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Dot animation keyframes */}
              <style>{`
                @keyframes logoDot {
                  0%, 60%, 100% { transform: scale(1); opacity: 0.5; }
                  30% { transform: scale(1.5); opacity: 1; }
                }
                .duration-600 { transition-duration: 600ms; }
              `}</style>


              {/* Highlight badge overlay */}
              <div className="absolute inset-0 bg-[#C5A25D]/5 pointer-events-none z-10" />
            </motion.div>

          </motion.div>

        </div>

        {/* Lower Horizontal Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-slate-100">
          {heroStats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="bg-[#FDFBF7]/50 p-5 rounded-sm border-l-4 border-[#C5A25D] flex flex-col justify-center transition-all duration-200 hover:bg-white gold-shadow text-left"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xl sm:text-2xl font-bold text-slate-900 font-heading leading-none">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1 font-semibold font-sans uppercase tracking-wider leading-normal">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

