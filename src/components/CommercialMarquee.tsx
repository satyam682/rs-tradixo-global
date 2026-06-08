/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

export default function CommercialMarquee() {
  const { language } = useLanguage();

  // Top line logistics operations in English (Standard maritime trade terminology)
  const topItems = [
    'KANDLA PORT',
    'WAREHOUSING',
    'TRANSPORT',
    'STEVEDORING',
    'LICENSED CHA',
    'FREIGHT FORWARDING',
    'CUSTOMS CLEARANCE',
    'MUNDRA PORT',
  ];

  // Bottom line compliance standards and credentials
  const bottomItems = [
    'ICEGATE REGISTERED',
    'IEC CODE HOLDER',
    'GSTIN: 24ATZPM5089P1ZF',
    'MINISTRY OF FINANCE LICENSED',
    'PAN-INDIA COVERAGE',
    'LICENSED CHA',
    'MUNDRA PORT',
    'KANDLA PORT',
  ];

  // We duplicate these lists multiple times to ensure seamless, infinite, gap-free looping on ultra-wide monitors.
  const duplicatedTop = [...topItems, ...topItems, ...topItems, ...topItems];
  const duplicatedBottom = [...bottomItems, ...bottomItems, ...bottomItems, ...bottomItems];

  return (
    <div className="w-full select-none overflow-hidden relative" id="commercial_tickers_container">
      {/* Self-contained CSS injection for premium hardware-accelerated rendering */}
      <style>{`
        @keyframes marquee-scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-25%, 0, 0);
          }
        }
        @keyframes marquee-scroll-right {
          0% {
            transform: translate3d(-25%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-left-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll-left 45s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll-right 45s linear infinite;
          will-change: transform;
        }
        .animate-marquee-left-track:hover,
        .animate-marquee-right-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* TOP TICKER: Logistics operations banner (Deep premium navy) */}
      <div className="bg-[#0b1329] border-t border-b border-[#C5A25D]/20 py-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329] via-transparent to-[#0b1329] z-10 pointer-events-none opacity-40" />
        
        <div className="animate-marquee-left-track">
          {duplicatedTop.map((item, idx) => (
            <div 
              key={`top-${idx}`} 
              className="flex items-center space-x-6 mx-4 whitespace-nowrap"
            >
              <span className="text-sm font-extrabold tracking-[0.15em] text-[#E2E8F0] uppercase font-sans">
                {item}
              </span>
              <span className="text-[#D4AF37] text-base font-extrabold drop-shadow-[0_0_6px_rgba(212,175,55,0.4)] px-2">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM TICKER: Compliance standards banner (Super dark slate) */}
      <div className="bg-[#040814] border-b border-slate-900 py-3.5 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#040814] via-transparent to-[#040814] z-10 pointer-events-none opacity-40" />

        <div className="animate-marquee-right-track">
          {duplicatedBottom.map((item, idx) => (
            <div 
              key={`bottom-${idx}`} 
              className="flex items-center space-x-6 mx-5 whitespace-nowrap"
            >
              <span className="text-xs font-bold tracking-[0.12em] text-[#64748B] uppercase font-mono">
                {item}
              </span>
              <span className="text-slate-700 text-sm font-bold select-none px-1">
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
