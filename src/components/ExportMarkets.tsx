/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EXPORT_MARKETS } from '../data.ts';
import { Ship, Globe as GlobeIcon, FileCheck, CheckCircle2 as CheckIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ExportMarketsProps {
  onOpenInquiry: () => void;
}

const translateRegion = (region: string, lang: string) => {
  if (lang === 'hi') {
    if (region.includes('Gulf')) return 'खाड़ी देश / GCC';
    return 'दक्षिण पूर्व एशिया';
  }
  if (lang === 'gu') {
    if (region.includes('Gulf')) return 'અખાતી દેશો / GCC';
    return 'દક્ષિણ પૂર્વ એશિયા';
  }
  if (lang === 'ar') {
    if (region.includes('Gulf')) return 'دول الخليج العربي / GCC';
    return 'جنوب شرق آسيا';
  }
  return region;
};

const translateMarketName = (name: string, lang: string) => {
  if (lang === 'hi') {
    if (name.includes('Dubai')) return 'दुबई / जेबेल अली (यूएई)';
    if (name.includes('Haiphong')) return 'हाइफ़ोंग पोर्ट (वियतनाम)';
    return 'सुरबाया / जकार्ता (इंडोनेशिया)';
  }
  if (lang === 'gu') {
    if (name.includes('Dubai')) return 'દુબઈ / જેબેલ અલી (UAE)';
    if (name.includes('Haiphong')) return 'હાઇફોંગ બંદર (વિયેતનામ)';
    return 'સુરાબાયા / જકાર્તા (ઇન્ડોનેશિયા)';
  }
  if (lang === 'ar') {
    if (name.includes('Dubai')) return 'ميناء جبل علي / دبي (الإمارات)';
    if (name.includes('Haiphong')) return 'ميناء هايفونغ (فيتنام)';
    return 'مرفأ سورابايا وجاكرتا (إندونيسيا)';
  }
  return name;
};

const translateMarketDesc = (id: string, defText: string, lang: string) => {
  if (lang === 'hi') {
    if (id === 'm1') return 'दुबई और शारजाह के खाद्य प्रोसेसर को बोल्ड मूंगफली और उबले हुए चावल की थोक आपूर्ति। तीव्र सीमा शुल्क निकासी लाभ।';
    if (id === 'm2') return 'हाइफ़ोंग बंदरगाह के माध्यम से वियतनाम के विनिर्माताओं को मूंगफली कर्नेल (50/60 और 60/70 ग्रेड) की मुख्य आपूर्ति।';
    if (id === 'm3') return 'सुरबाया और जकार्ता बंदरगाहों पर सगाई। स्नैक्स निर्माताओं के लिए कठोर रूप से वर्गीकृत मूंगफली की आपूर्ति।';
  }
  if (lang === 'gu') {
    if (id === 'm1') return 'મોટા પ્રોસેસિંગ યુનિટો માટે મગફળી અને ચોખાની સીધી જથ્થાબંધ નિકાસ. ઝડપી શિપમેન્ટ અને સરહદી નિકાસ કાયદો.';
    if (id === 'm2') return 'હાઇફોંગ બંદર દ્વારા વિયેતનામના પ્રોસેસરોને મગફળીની ઉચ્ચ નિકાસ ગ્રેડ સપ્લાય.';
    if (id === 'm3') return 'સુરાબાયા અને જકાર્તા બંદરો પર આંતરરાષ્ટ્રીય સ્નેક કન્ફેક્શનરી માટે સોર્સિંગ.';
  }
  if (lang === 'ar') {
    if (id === 'm1') return 'توريد كميات وفيرة من حبوب الفول السوداني وبسمتي سيلا الفاخر للشركات والموزعين في دبي وأبوظبي مع سهولة تجارية تامة في جبل علي.';
    if (id === 'm2') return 'سلسلة تصدير مخصصة لحبوب الفول السوداني الحلبي لموانئ فيتنام وهانوي وسرعة شحن بحري ميسرة.';
    if (id === 'm3') return 'الشريك اللوجستي لشركات المقرمشات وتغليف الأغذية في جاكرتا وسورابايا بشحنات مطابقة للفحص المستقل.';
  }
  return defText;
};

const translateTransitAdv = (id: string, defText: string, lang: string) => {
  if (lang === 'hi') {
    if (id === 'm1') return 'केवल 3-4 समुद्री दिन। दैनिक मार्ग उपलब्धता।';
    if (id === 'm2') return 'औसत 12-14 समुद्री दिन। निर्बाध दस्तावेज प्रेषण।';
    if (id === 'm3') return 'केवल 14-16 दिन। सुरक्षित पैकेजिंग के साथ नमी मुक्त।';
  }
  if (lang === 'gu') {
    if (id === 'm1') return 'માત્ર ૩-૪ દિવસ. દૈનિક સ્ટીમર વહાણો શિપિંગ.';
    if (id === 'm2') return '૧૨-૧૪ દિવસ. મુન્દ્રાથી હાઇફોંગ સીધા વહાણો.';
    if (id === 'm3') return '૧૪-૧૬ દિવસ. ડબલ પેકેજિંગ સાથે સંપૂર્ણ ક્ષમતા ચક્ર.';
  }
  if (lang === 'ar') {
    if (id === 'm1') return 'مدة عبور قصيرة تبلغ ٣-٤ أيام فقط من البحر مع مغادرات أسبوعية مباشرة.';
    if (id === 'm2') return 'استغراق ١٢-١٤ يوماً فقط مع سرعة تدقيق المستندات الصحية والفيدرالية.';
    if (id === 'm3') return 'تسليم جمركي ميسر خلال ١٤-١૬ يوماً مع حماية تامة ضد الرطوبة للمحصول.';
  }
  return defText;
};

export default function ExportMarkets({ onOpenInquiry }: ExportMarketsProps) {
  const { language, t } = useLanguage();
  
  return (
    <section className="py-16 bg-[#F9FAFB] font-sans animate-fade-in relative overflow-hidden">
      
      {/* Signature Geometric Background Accent */}
      <div className="geometric-accent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[#0056B3] font-bold tracking-widest text-xs uppercase mb-1 block">
            {t.markets_tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            {t.markets_title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            {t.markets_desc}
          </p>
        </div>

        {/* Global Trade Map Grid mockup - Sharp Geometric Design */}
        <motion.div 
          className="bg-slate-900 rounded-sm p-6 sm:p-10 text-white mb-16 relative overflow-hidden blue-shadow border-b-4 border-[#0056B3] text-left"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Descriptive block */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-5">
              <span className="text-xs uppercase font-extrabold text-[#ADD8E6] tracking-wider">Mundra Port Gateway Integration</span>
              <h3 className="text-2xl font-bold font-heading text-white tracking-tight">
                {language === 'hi' ? 'त्वरित संपूर्ण कंटेनर (FCL) सोर्सिंग' : language === 'gu' ? 'ઝડપી સંપૂર્ણ કન્ટેનર નિકાસ સોર્સિંગ' : language === 'ar' ? 'شحن فوري للحاويات الكاملة وسرعة جمركية' : 'Rapid FCL Containment Sourcing'}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {language === 'hi' ? 'भारतीय कृषि बेल्ट सीधे गुजरात के बंदरगाहों से जुड़े हैं। हम टर्मिनल डॉक के माध्यम से सीमा शुल्क निकासी और कंटेनर शिपिंग संभालते हैं।' : language === 'gu' ? 'ભારતના કૃષિ વિસ્તારો સીધા ગુજરાતના દરિયાઈ બંદરો સાથે જોડાયેલા છે. અમે સીધા ટર્મિનલ પરથી લોડિંગ સંભાળીએ છીએ.' : language === 'ar' ? 'ترتبط المحاصيل الزراعية الهندية بموانئ غوجارات على الفور. نتولى عمليات التخليص والمناولة وصعود السفن لراحتكم.' : "India's agricultural heartlands connect natively through Gujarat seaports. We handle customs clearances and load ocean containers through dedicated terminal docks."}
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-sm bg-white/15 flex items-center justify-center shrink-0 text-emerald-400 font-mono text-[9px] font-bold">✓</div>
                  <p className="text-slate-300">
                    <strong className="text-white">{language === 'hi' ? 'सीमा शुल्क समर्थन:' : language === 'gu' ? 'કસ્ટમ્સ મંજૂરીઓ:' : language === 'ar' ? 'التخليص الجمركي الفوري:' : 'Customs Endorsements:'}</strong> {language === 'hi' ? 'मानक पादप-स्वच्छता परीक्षण 24 घंटे में पूरा।' : language === 'gu' ? '૨૪ કલાકની અંદર ફાયટોસેનિટરી પ્રમાણપત્ર પૂર્ણ.' : language === 'ar' ? 'فحوصات سلامة الأغذية والصحة النباتية خلال ٢٤ ساعة فقط.' : 'Standard phytosanitary inspection completed under 24 hours.'}
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-sm bg-white/15 flex items-center justify-center shrink-0 text-emerald-400 font-mono text-[9px] font-bold">✓</div>
                  <p className="text-slate-300">
                    <strong className="text-white">{language === 'hi' ? 'मुक्त व्यापार सुविधा:' : language === 'gu' ? 'મુક્ત વ્યાપાર મૈત્રીપૂર્ણ:' : language === 'ar' ? 'توفير الرسوم التفضيلية' : 'Free-Trade Friendly:'}</strong> {language === 'hi' ? 'इंडो-आसियान टैरिफ प्रमाण पत्र तुरंत जारी करना।' : language === 'gu' ? 'ઇન્ડો-આશિયાન ટેરિફ બચત પ્રમાણપત્ર ત્વરિત કાયદેસર પ્રક્રિયા.' : language === 'ar' ? 'اصدار شهادة منشأ تفضيلية لاتفاقية التبادل لخفض الرسوم الجمركية.' : 'Form-AI Indo-ASEAN tariff saving certificates compiled promptly.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Route Tracking Board - Sharp panels */}
            <div className="lg:col-span-12 xl:col-span-7 bg-slate-950/80 border border-white/10 p-5 rounded-sm font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-slate-400 text-[10px]">
                <span className="flex items-center gap-1.5"><GlobeIcon className="w-4 h-4 text-[#ADD8E6]" /> {language === 'ar' ? 'لوحة تتبع مغادرات الحاويات البحرية' : 'ACTIVE DEPARTURES TRACKING BOARD'}</span>
                <span className="text-[#ADD8E6] uppercase font-bold">FOB MUNDRA GATEWAYS</span>
              </div>

              {/* simulated voyage logs */}
              <div className="space-y-3 font-mono">
                <div className="p-3 bg-white/5 border border-white/5 rounded-sm flex flex-wrap sm:flex-nowrap justify-between gap-3 text-left">
                  <div className="space-y-0.5">
                    <p className="text-slate-500 uppercase tracking-widest text-[9px]">Ocean Vessel Voyage</p>
                    <p className="font-bold text-white text-xs sm:text-sm">Oman Star V45 (Maersk Line)</p>
                  </div>
                  <div className="space-y-0.5 sm:text-right">
                    <p className="text-slate-500 uppercase tracking-widest text-[9px]">Transit Way status</p>
                    <p className="font-bold text-emerald-400 text-xs sm:text-sm">{language === 'ar' ? 'تم الرسو في ميناء جبل علي (دبي)' : 'Arrived Port Jebel Ali (UAE)'}</p>
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/5 rounded-sm flex flex-wrap sm:flex-nowrap justify-between gap-3 text-left">
                  <div className="space-y-0.5">
                    <p className="text-slate-500 uppercase tracking-widest text-[9px]">Ocean Vessel Voyage</p>
                    <p className="font-bold text-white text-xs sm:text-sm">Hai Phong Carrier (MSC)</p>
                  </div>
                  <div className="space-y-0.5 sm:text-right">
                    <p className="text-slate-500 uppercase tracking-widest text-[9px]">Transit Way status</p>
                    <p className="font-bold text-[#ADD8E6] text-xs sm:text-sm">{language === 'ar' ? 'ترانزيت: ١٣ يومًا | الوجهة: فيتنام' : 'Transit: 13 Days | Destination: Vietnam'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-center text-slate-500 font-sans text-[11px]">
                *All oceanic shipments operate under standardized ICC Rules & Incoterms 2020.
              </div>
            </div>

          </div>
        </motion.div>

        {/* Global Destination matrix cards - Premium hover cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >
          {EXPORT_MARKETS.map((market) => (
            <motion.div 
              key={market.id} 
              className="bg-white border border-slate-150 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 text-left group relative cursor-default"
              style={{ boxShadow: '0 2px 12px rgba(0,86,179,0.06)' }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,86,179,0.14)' }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* Animated gradient top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0056B3] via-blue-400 to-[#0056B3] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out absolute top-0 left-0 z-10" />
              
              <div className="p-6 space-y-4">
                {/* Flag + Region badge row */}
                <div className="flex justify-between items-start">
                  {/* Real flag image — works on Windows/Mac/Linux/all browsers */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <img
                        src={`https://flagcdn.com/w80/${market.flag}.png`}
                        srcSet={`https://flagcdn.com/w160/${market.flag}.png 2x`}
                        alt={`${market.name} flag`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          // fallback: show country code text if image fails
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          (e.currentTarget.parentElement as HTMLElement).innerHTML = `<span class="text-xs font-bold text-slate-600 uppercase">${market.flag.toUpperCase()}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      {market.flag.toUpperCase()}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-blue-50 text-[#0056B3] border border-[#0056B3]/20 rounded-full text-[10px] tracking-wider uppercase font-extrabold font-sans">
                    {translateRegion(market.region, language)}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-extrabold text-slate-900 text-base leading-tight group-hover:text-[#0056B3] transition-colors duration-300">
                    {translateMarketName(market.name, language)}
                  </h4>
                  
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pt-2 font-medium">
                    {translateMarketDesc(market.id, market.description, language)}
                  </p>
                </div>

                {/* Transit time notification */}
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 text-[#0056B3] p-3 rounded-lg border border-blue-100/80 space-y-1">
                  <p className="font-bold flex items-center gap-1.5 font-sans text-xs"><Ship className="w-4 h-4 text-[#0056B3]" /> {t.transit_advantage_label}</p>
                  <p className="text-slate-700 text-[11px] leading-relaxed font-medium">{translateTransitAdv(market.id, market.transitAdvantage, language)}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {market.keyProducts.map((p, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] rounded-full font-bold uppercase tracking-wider group-hover:border-[#0056B3]/30 group-hover:bg-blue-50/50 group-hover:text-[#0056B3] transition-all duration-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated footer reveal on hover */}
              <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'ar' ? 'ميناء معتمد' : 'Verified Port'}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#0056B3] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  {language === 'ar' ? 'عرض مسار التجارة' : 'View Trade Lane'} →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic global logistics parameters block */}
        <div className="mt-16 bg-white border border-slate-150 rounded-sm p-8 flex flex-col md:flex-row gap-8 items-center blue-shadow border-l-4 border-l-[#0056B3] text-left">
          <div className="md:w-3/12 shrink-0 text-center">
            <div className="w-16 h-16 bg-blue-50 text-[#0056B3] rounded-sm flex items-center justify-center mx-auto mb-3 border border-blue-100 shadow-sm">
              <FileCheck className="w-8 h-8 text-[#0056B3]" />
            </div>
            <h5 className="font-heading font-extrabold text-slate-900 text-xs uppercase tracking-wider">Customs Secured</h5>
            <p className="text-slate-400 text-[10px] mt-0.5 uppercase tracking-widest font-bold">Incoterms Compliant</p>
          </div>

          <div className="md:w-9/12 space-y-3.5 text-center md:text-left">
            <h4 className="text-lg font-bold font-heading text-slate-900 uppercase tracking-tight">
              {language === 'hi' ? 'क्या आपको कस्टम CIF, CFR या FOB लॉजिस्टिक्स शर्तों की आवश्यकता है?' : language === 'gu' ? 'શું તમારે કસ્ટમાઇઝ્ડ CIF, CFR અથવા FOB લોજિસ્ટિક્સ જરૂરિયાત છે?' : language === 'ar' ? 'هل تحتاج إلى شروط تفصيلية مرنة وعقود تسليم مخصصة؟' : 'Do you need custom CIF, CFR or FOB logistics terms?'}
            </h4>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed max-w-3xl font-medium">
              {language === 'hi' ? 'मुंद्रा पोर्ट के हमारे मुख्यालय से, हम पूरे एशिया, अरब और यूरोपीय संघ में प्राथमिक बंदरगाहों के लिए सीआईएफ कंटेनर रसद प्रदान करते हैं।' : language === 'gu' ? 'મુન્દ્રા પોર્ટ નજીકથી અમે સમગ્ર અખાતી દેશો, એશિયા અને યુરોપના બંદરો માટે લોજિસ્ટિક્સ પૂરી પાડીએ છીએ.' : language === 'ar' ? 'من خلال مكتب الشحن والتمثيل الملاحي بميناء موندرا بالهند، نوفر تغطية لوجستية متميزة لكافة الدول العربية وأوروبا وجنوب شرق آسيا بأسعار تفضيلية مغرية.' : 'From our headquarters near Mundra Port, we provide CIF ocean container logistics to primary ports stretching throughout Asia, Arabia, and the European Union. We partner with first class steamship lines to protect you from ocean freight delays and volatile price scales.'}
            </p>
            <div className="pt-2 text-left">
              <button
                onClick={onOpenInquiry}
                className="px-5 py-3 bg-[#0056B3] hover:bg-blue-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md whitespace-nowrap"
              >
                {t.markets_btn_sourcing}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

