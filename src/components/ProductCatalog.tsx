/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product } from '../types.ts';
import { PRODUCTS } from '../data.ts';
import { ShieldCheck, Truck, ArrowRight, CheckCircle2, Package, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  selectedCategoryId?: 'peanuts' | 'rice' | 'all';
}

const translateSpecLabel = (label: string, lang: string) => {
  if (lang === 'hi') {
    switch (label.toLowerCase()) {
      case 'moisture': return 'नमी';
      case 'oil content': return 'तेल की मात्रा';
      case 'admixture': return 'मिश्रण';
      case 'aflatoxin': return 'एफ्लाटॉक्सिन';
      case 'count': return 'आकार/काउंट';
      case 'splits': return 'टूटा हुआ';
      case 'broken': return 'खंडित अनाज';
      case 'discolored': return 'बेरंग दाने';
      case 'damage': return 'क्षतिग्रस्त';
      case 'type / grade': return 'प्रकार / ग्रेड';
      case 'average length': return 'औसत लंबाई';
      case 'origin': return 'उत्पत्ति स्थान';
      default: return label;
    }
  }
  if (lang === 'gu') {
    switch (label.toLowerCase()) {
      case 'moisture': return 'ભેજ';
      case 'oil content': return 'તેલ પ્રમાણ';
      case 'admixture': return 'મિશ્રણ';
      case 'aflatoxin': return 'એફ્લેટોક્સિન';
      case 'count': return 'દાણા કૌન્ટ';
      case 'splits': return 'ખાડા દાણા';
      case 'broken': return 'ટૂટેલા ચોખા';
      case 'discolored': return 'રંગહીન';
      case 'damage': return 'નુકસાની';
      case 'type / grade': return 'પ્રકાર / ગ્રેડ';
      case 'average length': return 'સરેરાશ લંબાઈ';
      case 'origin': return 'ઉત્પત્તિ સ્થાન';
      default: return label;
    }
  }
  if (lang === 'ar') {
    switch (label.toLowerCase()) {
      case 'moisture': return 'الرطوبة';
      case 'oil content': return 'نسبة الزيت';
      case 'admixture': return 'الشوائب';
      case 'aflatoxin': return 'الأفلاتوكسين';
      case 'count': return 'المقاس';
      case 'splits': return 'الانقسامات';
      case 'broken': return 'الحبوب المكسورة';
      case 'discolored': return 'تغير اللون';
      case 'damage': return 'الحبوب التالفة';
      case 'type / grade': return 'النوع والدرجة';
      case 'average length': return 'متوسط الطول';
      case 'origin': return 'بلد المنشأ';
      default: return label;
    }
  }
  return label;
};

const translateSpecValue = (value: string, lang: string) => {
  if (value === 'Gujarat, India') {
    if (lang === 'hi') return 'गुजरात, भारत';
    if (lang === 'gu') return 'ગુજરાત, ભારત';
    if (lang === 'ar') return 'غوجارات، الهند';
  }
  if (value.includes('Max')) {
    return value.replace('Max', lang === 'hi' ? 'अधिकतम' : lang === 'gu' ? 'મહત્તમ' : lang === 'ar' ? 'أقصى' : 'Max');
  }
  if (value.includes('Under')) {
    return value.replace('Under', lang === 'hi' ? 'से कम' : lang === 'gu' ? 'થી ઓછું' : lang === 'ar' ? 'أقل من' : 'Under');
  }
  return value;
};

// ── Section title component (reused across all 3 content blocks) ──────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-1 h-5 rounded-full shrink-0"
        style={{ background: 'linear-gradient(180deg, #AA8B4C, #D4AF37)' }} />
      <h4 className="font-heading font-extrabold text-slate-900 text-[11px] sm:text-xs uppercase tracking-wider">
        {children}
      </h4>
    </div>
  );
}

export default function ProductCatalog({ onSelectProduct, selectedCategoryId = 'all' }: ProductCatalogProps) {
  const [filterCategory, setFilterCategory] = useState<'peanuts' | 'rice' | 'spices' | 'agro' | 'all'>(selectedCategoryId as any);
  const [activeProductTab, setActiveProductTab] = useState<string>(PRODUCTS[0].id);
  const [openSection, setOpenSection] = useState<string | null>(null); // for mobile accordion
  const { language, t } = useLanguage();

  const filteredProducts = PRODUCTS.filter((p) =>
    filterCategory === 'all' ? true : p.category === filterCategory
  );

  // Sync activeProductTab when filterCategory changes
  React.useEffect(() => {
    if (filteredProducts.length > 0 && !filteredProducts.some(p => p.id === activeProductTab)) {
      setActiveProductTab(filteredProducts[0].id);
    }
  }, [filterCategory, filteredProducts, activeProductTab]);

  const selectedProductObj = filteredProducts.find(p => p.id === activeProductTab) || filteredProducts[0] || PRODUCTS[0];

  const toggleSection = (id: string) =>
    setOpenSection(prev => (prev === id ? null : id));

  return (
    <section className="py-10 sm:py-16 bg-white font-sans animate-fade-in relative overflow-hidden">
      <div className="geometric-accent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2 px-2">
          <span className="text-[#C5A25D] font-bold tracking-widest text-[10px] sm:text-xs uppercase block">
            {t.prod_cat_tag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            {t.prod_cat_title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{t.prod_cat_desc}</p>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex flex-col xs:flex-row justify-between items-center gap-3 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-slate-150">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1 bg-slate-100 rounded-lg w-full xs:w-auto">
            {[
              { id: 'all', label: t.prod_cat_all },
              { id: 'peanuts', label: t.prod_cat_peanuts },
              { id: 'rice', label: t.prod_cat_rice },
              { id: 'spices', label: t.prod_cat_spices },
              { id: 'agro', label: t.prod_cat_agro },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id as any)}
                className={`flex-1 xs:flex-none px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  filterCategory === tab.id ? 'shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
                style={filterCategory === tab.id
                  ? { 
                      background: 
                        tab.id === 'all' ? 'linear-gradient(135deg, #AA8B4C, #D4AF37)' :
                        tab.id === 'peanuts' ? 'linear-gradient(135deg, #7C3AED, #8B5CF6)' :
                        tab.id === 'rice' ? 'linear-gradient(135deg, #2563EB, #3B82F6)' :
                        tab.id === 'spices' ? 'linear-gradient(135deg, #DC2626, #EF4444)' :
                        'linear-gradient(135deg, #059669, #10B981)',
                      color: tab.id === 'all' ? '#1a1a1a' : '#ffffff'
                    }
                  : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] sm:text-xs text-slate-500 font-medium whitespace-nowrap">
            {language === 'ar'
              ? <><strong className="text-slate-800">{filteredProducts.length}</strong> منتجات</>
              : <>Showing <strong className="text-slate-800">{filteredProducts.length}</strong> commodities</>}
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            ZONE 1 — Product Selector
            Mobile: horizontal scroll row of compact cards
            Desktop: 2×2 or 4-col grid of taller image cards
            ══════════════════════════════════════════════════════════ */}

        {/* Mobile: horizontal scroll strip */}
        <div className="flex sm:hidden gap-3 overflow-x-auto pb-2 mb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {filteredProducts.map((p) => {
            const isActive = activeProductTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProductTab(p.id)}
                className="shrink-0 w-44 snap-start rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer text-left flex flex-col"
                style={{
                  borderColor: isActive ? '#C5A25D' : '#E2E8F0',
                  boxShadow: isActive ? '0 4px 16px rgba(197,162,93,0.3)' : '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                {/* Image */}
                <div className="relative h-28 overflow-hidden w-full">
                  <img src={p.image} alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: 'linear-gradient(90deg, #AA8B4C, #D4AF37)' }} />
                  )}
                  {isActive && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center shadow-md"
                      style={{ background: 'linear-gradient(135deg, #AA8B4C, #D4AF37)' }}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase text-white shadow-sm"
                    style={{ 
                      background: 
                        p.category === 'peanuts' ? 'linear-gradient(135deg, #7C3AED, #8B5CF6)' : 
                        p.category === 'rice' ? 'linear-gradient(135deg, #2563EB, #3B82F6)' : 
                        p.category === 'spices' ? 'linear-gradient(135deg, #DC2626, #EF4444)' : 
                        'linear-gradient(135deg, #059669, #10B981)'
                    }}>
                    {p.category === 'peanuts' ? '🥜' : p.category === 'rice' ? '🌾' : p.category === 'spices' ? '🌶️' : '🌱'}
                  </span>
                  <p className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-extrabold leading-tight drop-shadow">
                    {p.name}
                  </p>
                </div>
                {/* Strip */}
                <div className={`px-3 py-2 w-full flex-grow flex flex-col justify-between ${isActive ? 'bg-amber-50/50' : 'bg-white'}`}>
                  <p className="text-[9px] text-slate-500 font-medium line-clamp-1">
                    {p.tagline.split(',')[0]}
                  </p>
                  <p className={`text-[8px] mt-1 font-bold uppercase tracking-wide ${isActive ? 'text-amber-700' : 'text-slate-400'}`}>
                    {isActive ? '▶ Selected' : 'Tap to view'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Desktop/Tablet: grid of image cards */}
        <div className={`hidden sm:grid gap-4 mb-8 ${
          filteredProducts.length <= 2 ? 'grid-cols-2' :
          filteredProducts.length === 3 ? 'grid-cols-3' :
          'grid-cols-2 lg:grid-cols-4'
        }`}>
          {filteredProducts.map((p) => {
            const isActive = activeProductTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProductTab(p.id)}
                className="group relative rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer text-left flex flex-col h-full hover:border-[#C5A25D]/50 hover:shadow-md"
                style={{
                  borderColor: isActive ? '#C5A25D' : '#E2E8F0',
                  boxShadow: isActive
                    ? '0 8px 32px rgba(197,162,93,0.25), 0 0 0 1px rgba(197,162,93,0.3)'
                    : '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <div className="relative h-44 overflow-hidden w-full">
                  <img src={p.image} alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer" />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive
                      ? 'bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent'
                      : 'bg-gradient-to-t from-slate-900/60 via-transparent to-transparent'
                  }`} />
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                      style={{ background: 'linear-gradient(90deg, #AA8B4C, #D4AF37, #C5A25D)' }} />
                  )}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider text-white shadow-sm backdrop-blur-[2px]"
                    style={{ 
                      background: 
                        p.category === 'peanuts' ? 'linear-gradient(135deg, #7C3AED, #8B5CF6)' : 
                        p.category === 'rice' ? 'linear-gradient(135deg, #2563EB, #3B82F6)' : 
                        p.category === 'spices' ? 'linear-gradient(135deg, #DC2626, #EF4444)' : 
                        'linear-gradient(135deg, #059669, #10B981)'
                    }}>
                    {p.category === 'peanuts' ? t.prod_cat_peanuts : 
                     p.category === 'rice' ? t.prod_cat_rice : 
                     p.category === 'spices' ? t.prod_cat_spices : 
                     t.prod_cat_agro}
                  </span>
                  {isActive && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center shadow-md"
                      style={{ background: 'linear-gradient(135deg, #AA8B4C, #D4AF37)' }}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4 className="font-heading font-extrabold text-white text-sm leading-tight drop-shadow">
                      {p.name}
                    </h4>
                  </div>
                </div>
                <div className={`px-4 py-3 flex flex-col justify-between transition-colors duration-300 flex-grow w-full ${
                  isActive ? 'bg-amber-50/50' : 'bg-white group-hover:bg-slate-50'
                }`}>
                  <div>
                    <p className={`text-xs font-bold tracking-wide leading-snug ${isActive ? 'text-amber-800' : 'text-slate-700'}`}>
                      {p.tagline.split(',')[0]}
                    </p>
                    {/* Micro-specs preview badges */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {p.specifications.slice(0, 2).map((spec, idx) => (
                        <span key={idx} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold tracking-wide"
                          style={isActive ? { background: '#FDFBF7', color: '#AA8B4C' } : {}}>
                          {translateSpecLabel(spec.label, language)}: {translateSpecValue(spec.value, language)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                    <p className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-amber-700' : 'text-slate-400 group-hover:text-slate-600'}`}>
                      {isActive ? '▶ Viewing Specs' : 'Click for Specs'}
                    </p>
                    <ChevronRight className={`w-3.5 h-3.5 transition-all duration-300 shrink-0 ${
                      isActive ? 'rotate-90 text-amber-600' : 'text-slate-300 group-hover:translate-x-0.5'
                    }`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ══════════════════════════════════════════════════════════
            ZONE 2 — Product Detail Panel
            Mobile:  stacked accordion sections (tap to expand)
            Desktop: side-by-side 3 equal columns
            ══════════════════════════════════════════════════════════ */}
        <div key={selectedProductObj.id} className="rounded-2xl overflow-hidden border border-slate-200 bg-white animate-fade-in"
          style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.08), 0 0 0 1px rgba(197,162,93,0.12)' }}>

          {/* Gold top accent line */}
          <div className="h-1" style={{ background: 'linear-gradient(90deg, #AA8B4C, #D4AF37, #C5A25D, #D4AF37, #AA8B4C)' }} />

          {/* ── Hero Image — responsive heights ── */}
          <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden bg-slate-900">
            <img
              src={selectedProductObj.image}
              alt={selectedProductObj.name}
              className="w-full h-full object-cover opacity-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-slate-900/20" />

            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-12">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-white w-fit mb-2 shadow-sm"
                style={{ 
                  background: 
                    selectedProductObj.category === 'peanuts' ? 'linear-gradient(135deg, #7C3AED, #8B5CF6)' : 
                    selectedProductObj.category === 'rice' ? 'linear-gradient(135deg, #2563EB, #3B82F6)' : 
                    selectedProductObj.category === 'spices' ? 'linear-gradient(135deg, #DC2626, #EF4444)' : 
                    'linear-gradient(135deg, #059669, #10B981)'
                }}>
                {selectedProductObj.category === 'peanuts' ? t.prod_cat_peanuts : 
                 selectedProductObj.category === 'rice' ? t.prod_cat_rice : 
                 selectedProductObj.category === 'spices' ? t.prod_cat_spices : 
                 t.prod_cat_agro}
              </span>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold font-heading text-white leading-tight drop-shadow-lg">
                {selectedProductObj.name}
              </h3>
              <p className="text-amber-200/90 text-xs sm:text-sm italic mt-1.5 font-medium max-w-lg line-clamp-2">
                {selectedProductObj.tagline}
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────────
              MOBILE: Accordion-style sections
              ───────────────────────────────────────── */}
          <div className="sm:hidden divide-y divide-slate-100">

            {/* Accordion — Summary */}
            <AccordionSection
              id="summary"
              open={openSection}
              onToggle={toggleSection}
              title="Commodity Summary"
            >
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {selectedProductObj.description}
              </p>
              {selectedProductObj.extendedDescription && (
                <p className="text-slate-400 text-xs leading-relaxed italic border-t border-slate-100 pt-3">
                  {selectedProductObj.extendedDescription}
                </p>
              )}
              <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">QPA Compliant</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Phytosanitary compliant for global seaport customs gates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Seaport Ready</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Double-layer Jute/PP bags with moisture-barrier linings.</p>
                  </div>
                </div>
              </div>
            </AccordionSection>

            {/* Accordion — Specifications */}
            <AccordionSection
              id="specs"
              open={openSection}
              onToggle={toggleSection}
              title={t.prod_specs_title}
              defaultOpen
            >
              <div className="rounded-xl overflow-hidden border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ background: 'linear-gradient(135deg, #AA8B4C15, #D4AF3720)' }}>
                      <th className="px-3 py-2 text-left text-[10px] font-extrabold uppercase tracking-wider text-amber-800 border-b border-amber-100 w-2/5">
                        Parameter
                      </th>
                      <th className="px-3 py-2 text-left text-[10px] font-extrabold uppercase tracking-wider text-slate-600 border-b border-amber-100">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProductObj.specifications.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                        <td className="px-3 py-2.5 font-bold text-slate-700 border-b border-slate-100/70 text-[11px] align-top">
                          {translateSpecLabel(spec.label, language)}
                        </td>
                        <td className="px-3 py-2.5 font-semibold text-slate-900 border-b border-slate-100/70 text-[11px]">
                          {translateSpecValue(spec.value, language)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionSection>

            {/* Accordion — Benefits */}
            <AccordionSection
              id="benefits"
              open={openSection}
              onToggle={toggleSection}
              title={t.prod_benefits_title}
            >
              <ul className="space-y-2.5">
                {selectedProductObj.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#C5A25D' }} />
                    <span className="text-sm text-slate-600 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            {/* Accordion — Packing */}
            <AccordionSection
              id="packing"
              open={openSection}
              onToggle={toggleSection}
              title={t.prod_packing_title}
            >
              <div className="space-y-2">
                {selectedProductObj.packingOptions.map((opt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Package className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600 leading-relaxed">{opt}</p>
                  </div>
                ))}
              </div>
            </AccordionSection>

            {/* Mobile CTA */}
            <div className="p-4">
              <button
                onClick={() => onSelectProduct(selectedProductObj)}
                className="w-full py-4 rounded-xl text-slate-950 text-sm font-extrabold uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #AA8B4C 0%, #C5A25D 40%, #D4AF37 100%)',
                  boxShadow: '0 6px 24px rgba(197,162,93,0.4)',
                }}
              >
                {t.btn_inquire_commercials}
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2 font-medium">
                FOB Mundra · CFR · CIF — All Incoterms
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────────
              DESKTOP: 3-equal-column grid
              ───────────────────────────────────────── */}
          <div className="hidden sm:grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

            {/* Col 1 — Description */}
            <div className="p-6 sm:p-8 space-y-4">
              <SectionTitle>Commodity Summary</SectionTitle>
              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedProductObj.description}
              </p>
              {selectedProductObj.extendedDescription && (
                <p className="text-slate-400 text-xs leading-relaxed italic pt-4 border-t border-slate-100">
                  {selectedProductObj.extendedDescription}
                </p>
              )}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">QPA Compliant</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Phytosanitary compliant for global seaport customs gates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Seaport Ready</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Double-layer Jute/PP bags with moisture-barrier linings.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2 — Specs Table */}
            <div className="p-6 sm:p-8">
              <SectionTitle>{t.prod_specs_title}</SectionTitle>
              <div className="rounded-xl overflow-hidden border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ background: 'linear-gradient(135deg, #AA8B4C15, #D4AF3720)' }}>
                      <th className="px-4 py-2.5 text-left text-[10px] font-extrabold uppercase tracking-wider text-amber-800 border-b border-amber-100">
                        {language === 'hi' ? 'तकनीकी मानक' : language === 'gu' ? 'વિશિષ્ટ માપ' : language === 'ar' ? 'المواصفة' : 'Specification'}
                      </th>
                      <th className="px-4 py-2.5 text-left text-[10px] font-extrabold uppercase tracking-wider text-slate-600 border-b border-amber-100">
                        {language === 'hi' ? 'मानक मान' : language === 'gu' ? 'ધોરણ' : language === 'ar' ? 'المعيار' : 'Standard'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProductObj.specifications.map((spec, i) => (
                      <tr key={i} className={`transition-colors hover:bg-amber-50/50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                        <td className="px-4 py-2.5 font-bold text-slate-700 border-b border-slate-100/70 text-xs">
                          {translateSpecLabel(spec.label, language)}
                        </td>
                        <td className="px-4 py-2.5 font-semibold text-slate-900 border-b border-slate-100/70 text-xs">
                          {translateSpecValue(spec.value, language)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Col 3 — Benefits + Packing + CTA */}
            <div className="p-6 sm:p-8 flex flex-col gap-5">
              <div>
                <SectionTitle>{t.prod_benefits_title}</SectionTitle>
                <ul className="space-y-2.5">
                  {selectedProductObj.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#C5A25D' }} />
                      <span className="text-xs text-slate-600 leading-relaxed font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-4 border border-amber-100"
                style={{ background: 'linear-gradient(135deg, #FDFBF7, #FFF8EC)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-4 h-4 text-amber-700" />
                  <h5 className="font-heading font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                    {t.prod_packing_title}
                  </h5>
                </div>
                <div className="space-y-1.5">
                  {selectedProductObj.packingOptions.map((opt, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold text-xs shrink-0">›</span>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{opt}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => onSelectProduct(selectedProductObj)}
                  className="w-full py-4 rounded-xl text-slate-950 text-sm font-extrabold uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2 group"
                  style={{
                    background: 'linear-gradient(135deg, #AA8B4C 0%, #C5A25D 40%, #D4AF37 100%)',
                    boxShadow: '0 6px 24px rgba(197,162,93,0.4)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 32px rgba(197,162,93,0.6)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 24px rgba(197,162,93,0.4)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  }}
                >
                  {t.btn_inquire_commercials}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2 font-medium">
                  FOB Mundra · CFR · CIF — All Incoterms Available
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Hide scrollbar utility for mobile carousel */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

// ── Accordion section (mobile only) ──────────────────────────────────────────
function AccordionSection({
  id, open, onToggle, title, children, defaultOpen,
}: {
  id: string;
  open: string | null;
  onToggle: (id: string) => void;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const isOpen = open !== null ? open === id : !!defaultOpen;
  return (
    <div>
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
        style={{ background: isOpen ? 'linear-gradient(135deg, #FDFBF7, #FFF8EC)' : 'white' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 rounded-full shrink-0"
            style={{ background: isOpen ? 'linear-gradient(180deg, #AA8B4C, #D4AF37)' : '#CBD5E1' }} />
          <span className="font-heading font-extrabold text-[11px] uppercase tracking-wider text-slate-900">
            {title}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-amber-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          {children}
        </div>
      )}
    </div>
  );
}
