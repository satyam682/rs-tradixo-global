/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, Cpu, Package, ShieldCheck, FileCheck, Ship, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export default function SourcingCapabilitiesAnimation() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive device check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      id: 'source',
      icon: Sprout,
      word: {
        en: 'source.',
        hi: 'स्रोत / source.',
        gu: 'સોર્સ / source.',
        ar: 'نورد المصادر. / source'
      },
      title: {
        en: 'Contract Sourcing',
        hi: 'अनुबंधित खेती और डायरेक्ट सोर्सिंग',
        gu: 'સીધું જ ખેડૂત સોર્સિંગ',
        ar: 'عقود الشراء المباشرة'
      },
      desc: {
        en: 'Contract farming & direct sourcing straight from primary chemical-free soil grids with local agricultural cooperatives in Gujarat.',
        hi: 'गुजरात के प्रमुख सहकारी कृषि क्षेत्रों से संविदा खेती और बिना रसायनों के सीधी थोक खरीद।',
        gu: 'ગુજરાતના ફળદ્રુપ ખમીરવાળા ખેતરોની સ્થાનિક મંડળીઓમાંથી સીધી જ મોસમ ચકાસણી સાથે ખરીદી.',
        ar: 'إبرام تحالفات زراعية مباشرة مع الجمعيات الزراعية لضمان جودة منشأ البذور وخلوها من الإضافات الكيميائية الضارة.'
      },
      range: [0.0, 0.15]
    },
    {
      id: 'process',
      icon: Cpu,
      word: {
        en: 'process.',
        hi: 'प्रशोधन / process.',
        gu: 'પ્રોસેસ / process.',
        ar: 'نعالج الحبوب. / process'
      },
      title: {
        en: 'Laser Quality Grading',
        hi: 'इलेक्ट्रॉनिक लेजर ग्रेडिंग',
        gu: 'કલર લેસર સોર્ટિંગ પ્રક્રિયા',
        ar: 'الغربلة والفرز اللوني الآلي'
      },
      desc: {
        en: 'Double-decker mechanical sieving, thorough dust de-husking, and Buhler laser electronic color sorting for premium kernels.',
        hi: 'अनाजों से धूल और छिलके हटाना, डबल-डेकर यांत्रिक हिलाना और कलर कैमरे द्वारा दोषरहित छँटाई।',
        gu: 'ડિ-શેલિંગ, ડબલ મશીન ફિલ્ટરિંગ અને આધુનિક ફોટો કલર સોર્ટિંગ દ્વારા કદ તથા આકાર ચકાસણી.',
        ar: 'نخل آلي مزدوج، وعزل القشور الخشنة ومكافحة الأتربة يتبعه فرز فوتوغرافي بالليزر لكافة حبات الأرز والفول السوداني.'
      },
      range: [0.15, 0.30]
    },
    {
      id: 'pack',
      icon: Package,
      word: {
        en: 'pack.',
        hi: 'पैकेजिंग / pack.',
        gu: 'પેકીંગ / pack.',
        ar: 'نعبئ البضائع. / pack'
      },
      title: {
        en: 'Moisture-Safe Packaging',
        hi: 'नमी मुक्त प्रीमियम पैकेजिंग',
        gu: 'કસ્ટમ મોઇશ્ચર-પ્રૂફ પેકિંગ',
        ar: 'تغليف بحري آمن عازل'
      },
      desc: {
        en: 'Heavy-duty water-safe double polypropylene (PP) or moisture-barrier BOPP bags with clean customer-logo printing.',
        hi: 'कस्टम लोगो प्रिंटिंग के साथ समुद्र यात्रा अनुकूल दोहरी पीपी या जलरोधी मजबूत बीओपीपी बैग विकल्प।',
        gu: 'નિકાસ સ્ટાન્ડર્ડ કસ્ટમ પ્રિન્ટેડ ડબલ પીપી અથવા બીઓપીપી બેગ્સ સ્પેસિફિકેશન જેથી ભેજ સામે ઉત્તમ સુરક્ષા મળે.',
        ar: 'التغليف في باقات مزدوجة من البولي بروبلين (PP) أو حاويات BOPP المقاومة لتسرب رطوبة البحر لضمان وصولها طازجة.'
      },
      range: [0.30, 0.45]
    },
    {
      id: 'verify',
      icon: ShieldCheck,
      word: {
        en: 'verify.',
        hi: 'सत्यापन / verify.',
        gu: 'ગુણવત્તા ચકાસણી / verify.',
        ar: 'نطابق المقاييس. / verify'
      },
      title: {
        en: 'SGS Third-Party Quality Audit',
        hi: 'SGS तृतीय-पक्ष प्रमाणपत्र',
        gu: 'SGS ગુણવત્તા ચકાસણી',
        ar: 'معاينة SGS المستقلة'
      },
      desc: {
        en: 'Rigorous moisture analysis, weight calibration, and aflatoxin safety certificates signed by SGS or Bureau Veritas prior to sealing.',
        hi: 'कंटेनर बंद होने से पहले नमी स्तर का अंतिम लेखा-जोखा और SGS या ब्यूरो वेरिटास द्वारा जारी दोषरहित सुरक्षित रिपोर्ट।',
        gu: 'કન્ટેનર લોડિંગ અને નિકાસ સીલિંગ પહેલાં સાચો ભાર, ભેજ દર અને ગુણવત્તા પરિમાણ અહેવાલ સ્વીકૃતિ.',
        ar: 'إجراء تحاليل للوزن الفعلي للحاويات، ومعايير الجفاف والأمان من الفطريات من ممثلي SGS أو بيرو فيريتاس لمنع النزاعات البرية.'
      },
      range: [0.45, 0.60]
    },
    {
      id: 'clear',
      icon: FileCheck,
      word: {
        en: 'clear.',
        hi: 'निकासी / clear.',
        gu: 'કસ્ટમ ક્લીયર / clear.',
        ar: 'نخلص جمركياً. / clear'
      },
      title: {
        en: '24-Hour Customs Pathway',
        hi: 'तत्काल २४ घंटे में कस्टम क्लियरेंस',
        gu: '૨૪ કલાકમાં કસ્ટમ મંજૂરી',
        ar: 'تخليص الميناء السريع'
      },
      desc: {
        en: 'Prompt plant quarantine diagnostics, phytosanitary certificates (PSC), and digital custom clearing at Mundra gates.',
        hi: 'मुंदे बंदरगाह के निकट कार्यालयों से तत्काल पादप-कृषि स्वास्थ्य प्रमाणपत्र (PSC) जारी करना और तेज सीमा शुल्क पोर्टल क्लीयरेंस।',
        gu: 'મુન્દ્રા બંદરથી આપણી અદભુત નિકતતાને કારણે ઝડપી કસ્ટમ્સ ડ્યુટી મુક્તિ અને ૨૪ કલાકમાં સરકારી હેલ્થ સર્ટિફિકેટ સહારો.',
        ar: 'فحص الحجر الزراعي الفيدرالي الفوري، واستلام شهادة الصحة النباتية (PSC) الصادرة إلكترونياً لتمكين العبور السريع.'
      },
      range: [0.60, 0.75]
    },
    {
      id: 'ship',
      icon: Ship,
      word: {
        en: 'ship.',
        hi: 'शिपिंग / ship.',
        gu: 'શિપિંગ / ship.',
        ar: 'نشحن بحراً. / ship'
      },
      title: {
        en: 'Premium Carrier Bookings',
        hi: 'सुरक्षित जहाजी बुक साप्ताहिक मार्ग',
        gu: 'ઝડપી વહાણ કન્ટેનર બુકિંગ',
        ar: 'حجوزات باخرة ميرسك الأسبوعية'
      },
      desc: {
        en: 'Weekly secure reefer and dry container spaces allocated with leading maritime networks MSC, Maersk, and CMA CGM.',
        hi: 'दुनिया की सर्वोत्तम जहाजी लाइनों (MSC, Maersk, COSCO) के साथ रिजर्व सी-कंटेनर स्लॉट और समय पर प्रस्थान की तय अवधि।',
        gu: 'વિશ્વની મોખરાની શીપીંગ લાઈનો Maersk, MSC સાથે રક્ષિત કન્ટેનર સાપ્તાહિક રવાના જેથી ડિલિવરી વિલંબ લેશમાત્ર ન રહે.',
        ar: 'تحرير عقود الشحن مع كبرى الوكالات البحرية لحجز حاويات مبردة ومكيفة تحمي المحاصيل من درجة حرارة المحيطات الطويلة.'
      },
      range: [0.75, 0.90]
    },
    {
      id: 'deliver',
      icon: CheckCircle2,
      word: {
        en: 'deliver.',
        hi: 'वितरण / deliver.',
        gu: 'ડિલિવેરી / deliver.',
        ar: 'نسلم بثقة وأمان. / deliver'
      },
      title: {
        en: 'End-to-End Trade Fulfilment',
        hi: 'सुरक्षित डिलीवरी एवं पूर्ण प्रलेखन',
        gu: 'વિદેશી બંદરો સુધી પરિપૂર્ણતા',
        ar: 'التسليم النهائي بسلام الشحنة'
      },
      desc: {
        en: 'Real-time transit telemetry, legal Bill of Lading delivery, and professional support until unloading at your discharge dock.',
        hi: 'आपके देश के गंतव्य बंदरगाह पर जहाज पहुंचने और सीमा शुल्क दस्तावेज पूरा होने तक लगातार वास्तविक समय लाइव ट्रैकिंग सहायता।',
        gu: 'તમારા દેશના નિયત બંદર સુધી માલ પહોંચે, ખાલી થાય અને નિકાલ થાય ત્યાં સુધી નિરંતર સક્રિય લોજિસ્ટિક્સ સહયોગ.',
        ar: 'متابعة وتحديث مستمر لحركة الملاحة البحرية وإرسال أوراق الشحن الأصلية بنكياً لتسهيل الاستلام الآمن على رصيف الميناء الخاص بك.'
      },
      range: [0.90, 1.05]
    }
  ];

  // Robust absolute fallback scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isMobile) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const topOfSection = -rect.top;
      const viewportHeight = window.innerHeight;
      const maxScrollableHeight = containerHeight - viewportHeight;

      if (maxScrollableHeight <= 0) return;

      // Calculate localized scroll ratio between 0 and 1
      let progress = topOfSection / maxScrollableHeight;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      // Find indices match safely
      let idx = steps.findIndex(step => progress >= step.range[0] && progress < step.range[1]);
      if (idx === -1 && progress >= 1.0) {
        idx = steps.length - 1;
      }
      
      if (idx !== -1 && idx !== activeIndex) {
        setActiveIndex(idx);
      }
    };

    // Calculate on initial mount
    const timer = setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeIndex, isMobile]);

  // Click handler to drive window scrolling to the exact step offset
  const handleStepClick = (idx: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const containerHeight = rect.height;
    const viewportHeight = window.innerHeight;
    const maxScrollableHeight = containerHeight - viewportHeight;

    if (maxScrollableHeight <= 0) return;

    const stepStart = steps[idx].range[0];
    const containerAbsoluteTop = window.scrollY + rect.top;
    // Add slightly more offset (+15) so the progress lands deeply inside the range and triggers immediately
    const targetScrollTop = containerAbsoluteTop + (stepStart * maxScrollableHeight) + 15;

    window.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth'
    });

    setActiveIndex(idx);
  };

  const getLocalizedWord = (step: typeof steps[0]) => {
    return step.word[language as 'en' | 'hi' | 'gu' | 'ar'] || step.word.en;
  };

  const getLocalizedTitle = (step: typeof steps[0]) => {
    return step.title[language as 'en' | 'hi' | 'gu' | 'ar'] || step.title.en;
  };

  const getLocalizedDesc = (step: typeof steps[0]) => {
    return step.desc[language as 'en' | 'hi' | 'gu' | 'ar'] || step.desc.en;
  };

  // MOBILE VIEW RENDERING
  if (isMobile) {
    return (
      <section className="py-16 bg-slate-950 font-sans text-white border-t border-b border-slate-800 relative text-left">
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,162,93,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,162,93,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-[#C5A25D]/3 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#C5A25D]/10 border border-[#C5A25D]/20 text-[#D4AF37] text-[10px] uppercase font-extrabold tracking-widest w-fit">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              {language === 'hi' ? 'संचालन नियंत्रण श्रृंखला' : language === 'gu' ? 'કુલ નિયંત્રણ શક્તિ શ્રેણી' : language === 'ar' ? 'سلسلة العمليات الجمركية المتكاملة' : 'OPERATIONAL LIFECYCLE'}
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
              {language === 'hi' ? 'वैश्विक आपूर्ति नियंत्रण श्रृंखला' : language === 'gu' ? 'વૈશ્વિક સોર્સિંગ નિયંત્રણ શક્તિ' : language === 'ar' ? 'سلسلة العمليات المتكاملة' : 'Sourcing & Shipping Lifecycle'}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
              {language === 'hi' ? 'खेत की कृषि से सुरक्षित वैश्विक शिपमेंट तक प्रत्येक प्रणाली की पूर्ण नियंत्रण सूची का विवरण समझें।' : language === 'gu' ? 'ખેતરની માટીથી છેક વિદેશી પતન સુધી આપણી સંપૂર્ણ સુરક્ષિત પ્રક્રિયા વિગત ચકાસો.' : language === 'ar' ? 'تفقد مسار تجميع المحاصيل وفحصها من حقول الإنتاج الهندية والعبور حتى مينائك الجمركي.' : 'Understand how we responsibly source, laser grade, pack, and ship premium agricultural cargo with perfect quality.'}
            </p>
          </div>

          {/* Simple and elegant mobile timeline layout with zero overflow */}
          <div className="space-y-8 relative pl-4 border-l border-slate-800 ml-2">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative space-y-2 text-left">
                  {/* Glowing gold connector dot on line */}
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-slate-500">0{idx + 1}</span>
                    <span className="text-xs uppercase font-extrabold text-[#D4AF37] tracking-wider">
                      {getLocalizedWord(step).replace(' / ', '').replace('.', '')}
                    </span>
                  </div>
                  
                  <div className="bg-slate-900/60 p-5 rounded-sm border border-slate-800 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <h4 className="font-heading font-extrabold text-sm text-white">
                        {getLocalizedTitle(step)}
                      </h4>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed font-semibold">
                      {getLocalizedDesc(step)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VIEW RENDERING (With highly-polished interactive sidebar and Dynamic card console)
  return (
    <div 
      id="capabilities_scroll_section"
      ref={containerRef} 
      className="relative w-full bg-slate-950 font-sans text-white border-t border-b border-slate-800 hidden lg:block"
      style={{ height: '320vh' }} // Slightly shorter to make progress transition smooth and reactive
    >
      {/* Decorative Golden Ambient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,162,93,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,162,93,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#C5A25D]/3 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-950/20 rounded-full filter blur-3xl pointer-events-none" />

      {/* Persistent dynamic top loader tracking exact scroll position inside this block */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 via-[#C5A25D] to-indigo-500 transition-all duration-150 ease-out shadow-[0_0_8px_#D4AF37]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Sticky Frame: aligned perfectly without overflow risk */}
      <div className="sticky top-0 h-screen w-full flex flex-row items-center justify-between px-12 md:px-20 max-w-7xl mx-auto overflow-hidden">
        
        {/* Left Column: Title + High contrast Swiss Indicator checklist */}
        <div className="w-[42%] flex flex-col justify-center space-y-8 text-left relative z-10 h-full py-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#C5A25D]/10 border border-[#C5A25D]/20 text-[#D4AF37] text-[10px] uppercase font-extrabold tracking-widest w-fit animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              {language === 'hi' ? 'संचालन नियंत्रण श्रृंखला' : language === 'gu' ? 'કુલ નિયંત્રણ શક્તિ શ્રેણી' : language === 'ar' ? 'سلسلة العمليات الجمركية المتكاملة' : 'OPERATIONAL LIFECYCLE'}
            </div>

            <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {language === 'hi' ? (
                <>वैश्विक आपूर्ति <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5A25D]">नियंत्रण श्रृंखला</span></>
              ) : language === 'gu' ? (
                <>વૈશ્વિક સોર્સિંગ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5A25D]">નિયંત્રણ શક્તિ</span></>
              ) : language === 'ar' ? (
                <>مراقبة متكاملة للاستيراد والتصدير</>
              ) : (
                <>Sourcing & Logistics <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5A25D]">Lifecycle Pipeline</span></>
              )}
            </h3>
          </div>

          {/* Interactive Stepper Timeline click track */}
          <div className="space-y-3.5 pl-4 relative border-l-2 border-slate-800/80 py-2.5 block">
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button 
                  key={step.id}
                  onClick={() => handleStepClick(idx)}
                  className="flex items-center gap-3 relative transition-all duration-300 cursor-pointer focus:outline-none w-full text-left group"
                >
                  {/* Sliding glowing dot */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeStepperMarker"
                      className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"
                      transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    />
                  )}
                  <span className={`text-[10px] font-mono transition-colors duration-300 ${isActive ? 'text-[#D4AF37] font-extrabold' : 'text-slate-600 group-hover:text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-xs uppercase font-extrabold tracking-wider transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-350'}`}>
                    {getLocalizedWord(step).replace(' / ', '').replace('.', '')}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 pt-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest select-none">
            <div className="w-4 h-7 border-2 border-slate-700 rounded-full flex justify-center p-1 shrink-0">
              <motion.div 
                className="w-1 h-1.5 bg-[#D4AF37] rounded-full" 
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            <span>{language === 'hi' ? 'स्क्रॉल या क्लिक करें' : language === 'gu' ? 'સ્ક્રોલ કરો અથવા ક્લિક કરો' : language === 'ar' ? 'انزل لأسفل أو اضغط' : 'SCROLL OR CLICK TO STAGE'}</span>
          </div>
        </div>

        {/* Right Column: Dynamic high-end Glassmorphic Console Card */}
        <div className="w-[52%] h-full flex items-center justify-center relative z-10 px-4">
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              {steps.map((step, idx) => {
                if (idx !== activeIndex) return null;
                
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -15 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-slate-900 border border-slate-800 p-8 sm:p-9 rounded-sm shadow-2xl relative overflow-hidden text-left border-b-4 border-b-[#C5A25D] w-full"
                  >
                    {/* Corner golden flash */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A25D]/5 rounded-full -mr-10 -mt-10 pointer-events-none filter blur-xl" />
                    
                    {/* Top Console Bar */}
                    <div className="flex justify-between items-center mb-6 border-b border-slate-800/80 pb-5">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 bg-[#C5A25D]/10 rounded-sm border border-[#C5A25D]/20 flex items-center justify-center text-[#D4AF37] shadow-inner">
                          <IconComponent className="w-6 h-6 stroke-[1.8]" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block">
                            {language === 'hi' ? 'सक्रिय प्रणाली / STEP 0' : language === 'gu' ? 'પ્રક્રિયા તબક્કો / STEP 0' : language === 'ar' ? 'الخطوة الفعالة / STEP 0' : 'ACTIVE PIPELINE STAGE 0'}{idx + 1}
                          </span>
                          <h4 className="font-heading font-extrabold text-[#D4AF37] text-xs uppercase tracking-wider">
                            {getLocalizedWord(step)}
                          </h4>
                        </div>
                      </div>
                      
                      <span className="text-4xl font-extrabold font-mono text-slate-800/50 select-none">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Step Title, Badge & Localized Description */}
                    <div className="space-y-4">
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                        {getLocalizedTitle(step)}
                      </h4>
                      
                      <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-semibold">
                        {getLocalizedDesc(step)}
                      </p>
                    </div>

                    {/* Static metrics details supporting architectural honesty */}
                    <div className="mt-8 pt-5 border-t border-slate-800/60 grid grid-cols-2 gap-4 text-[10px] font-mono text-slate-500">
                      <div className="space-y-2">
                        <span className="text-slate-600 block uppercase tracking-wider text-[8px] font-black">{language === 'hi' ? 'परचालन मीट्रिक' : language === 'gu' ? 'પરિમાણ' : language === 'ar' ? 'مؤشر أداء الشحن' : 'OPERATIONAL PARAMETER'}</span>
                        <div className="flex items-center gap-1.5 font-bold text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {idx === 0 && 'Direct Sourcing Hubs'}
                          {idx === 1 && 'Camera-Color Sorters'}
                          {idx === 2 && 'Sea-Grade Moisture Seal'}
                          {idx === 3 && 'Independent SGS Assay'}
                          {idx === 4 && 'Pre-Cleared Mundra Gates'}
                          {idx === 5 && 'Maersk/MSC Partner Slot'}
                          {idx === 6 && 'Lading Document Delivery'}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-slate-600 block uppercase tracking-wider text-[8px] font-black">{language === 'hi' ? 'गुणवत्ता सुसंगति' : language === 'gu' ? 'પ્રમાણિકતા' : language === 'ar' ? 'معايير الجودة' : 'SYSTEM SEGMENT STANDARDS'}</span>
                        <div className="flex items-center gap-1.5 font-bold text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {idx === 0 && '100% Gujarat Soil-Sourced'}
                          {idx === 1 && 'Dust & Shell Particle Free'}
                          {idx === 2 && 'Waterproof Poly Bags'}
                          {idx === 3 && 'Aflatoxin-Free Compliant'}
                          {idx === 4 && '24-Hour Quarantine Clear'}
                          {idx === 5 && 'MSC/Maersk Expedited'}
                          {idx === 6 && 'Real-Time Telemetry Feed'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
