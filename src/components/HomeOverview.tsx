/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Coins, Hourglass, Landmark, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface HomeOverviewProps {
  onLearnMore: () => void;
  onOpenInquiry: () => void;
}

export default function HomeOverview({ onLearnMore, onOpenInquiry }: HomeOverviewProps) {
  const { language, t } = useLanguage();
  
  const differentiators = [
    {
      icon: ShieldCheck,
      color: 'bg-amber-50 text-amber-600 border-amber-200/60',
      title: language === 'hi' ? 'उच्च गुणवत्ता वाले उत्पाद' : language === 'gu' ? 'ઉચ્ચ ગુણવત્તાવાળા ઉત્પાદો' : language === 'ar' ? 'منتجات عالية الجودة ومطابقة للفرز' : 'High Quality Products',
      description: language === 'hi' ? 'अत्याधुनिक मशीनों के उपयोग से दोहरी जांच और इलेक्ट्रॉनिक छँटाई। अनाजों पर शून्य रासायनिक उपचार, जो अंतर्राष्ट्रीय मानकों से मेल खाते हैं।' : language === 'gu' ? 'અત્યાધુનિક મશીનરી દ્વારા દ્વિ-પરીક્ષણ અને કલર સોર્ટિંગ. અનાજ પર ઝીરો રાસાયણિક પ્રક્રિયા.' : language === 'ar' ? 'فحص ثنائي دقيق وفرز آلي حديث لتلبية كافة المتطلبات والمعايير بدون معالجة كيميائية ضارة لتلبية لوائح جمارك الاستيراد.' : 'Double-screened and electronically sorted using state-of-the-art machinery. Zero chemical treatment on grains, meeting rigorous international phytosanitary compliance criteria.',
      stat: language === 'hi' ? 'आईएसओ प्रमाणित' : language === 'gu' ? 'ISO પ્રમાણિત' : language === 'ar' ? 'معايير آيزو' : 'ISO CERTIFIED'
    },
    {
      icon: Coins,
      color: 'bg-amber-50 text-amber-600 border-amber-200/60',
      title: language === 'hi' ? 'प्रतिस्पर्धी मूल्य निर्धारण' : language === 'gu' ? 'સ્પર્ધાત્મક ભાવ નિર્ધારણ' : language === 'ar' ? 'أسعار شحن ومنافسة تجارية' : 'Competitive Pricing',
      description: language === 'hi' ? 'घरेलू व्यापारिओं को बायपास करके, हम सीधे गुजरात के प्रमुख कृषि उत्पादक क्षेत्रों से आपूर्ति सुरक्षित करते हैं। खरीदार का खर्च बचाते हैं।' : language === 'gu' ? 'જિલ્લાના વચેટિયાઓને બાયપાસ કરીને, અમે ગુજરાતના મુખ્ય મગફળી અને ચોખા ઉત્પાદક પટ્ટાઓમાંથી સીધી ખરીદી કરીએ છીએ.' : language === 'ar' ? 'من خلال تجنب الوسطاء المحليين في الهند وسلسلة التوريد, نحصل على البضائع مباشرة من المزارعين في غوجارات بأسعار تنافسية.' : 'By bypassing domestic trading layer syndicates, we secure agricultural cargos straight from major farming pools in Gujarat. Saving margins and passing cost value down.',
      stat: language === 'hi' ? '12-15% बचत' : language === 'gu' ? '૧૨-૧૫% બચત' : language === 'ar' ? 'توفير ١٢-١٥٪' : 'SAVE 12-15%'
    },
    {
      icon: Hourglass,
      color: 'bg-amber-50 text-amber-600 border-amber-200/60',
      title: language === 'hi' ? 'समय पर वितरण' : language === 'gu' ? 'સમયસર વિતરણ' : language === 'ar' ? 'شحن بحري دقيق بلا تأخير' : 'Timely Delivery',
      description: language === 'hi' ? 'अंतर-राज्यीय सीमा पारगमन में देरी नहीं होती। हमारा सुव्यवस्थित रसद प्रबंधन समय पर जहाज लोडिंग और सुसंगत प्रलेखन सुनिश्चित करता है।' : language === 'gu' ? 'અંતર-રાજ્ય સરહદો વટાવવાના વિલંબને ટાળે છે. સમયસર લોડિંગની સંપૂર્ણ ખાતરી.' : language === 'ar' ? 'عمليات النقل المتميزة تمنع تأخير لوائح الجمارك بين الولايات, مما يضمن صعود مباشر لبضائعك وشحنها بلا تأخر.' : 'Streamlined logistics pipeline minimizes inter-state border transit delays. Our physical presence guarantees seamless container transfers and precise customs clearances.',
      stat: language === 'hi' ? '72 घंटे लोडिंग' : language === 'gu' ? '૭૨ કલાક લોડિંગ' : language === 'ar' ? 'تحميل ٧٢ ساعة' : '72H DISPATCH'
    },
    {
      icon: Landmark,
      color: 'bg-amber-50 text-amber-600 border-amber-200/60',
      title: language === 'hi' ? 'मजबूत सप्लायर नेटवर्क' : language === 'gu' ? 'ખેડૂતોનું મજબૂત નેટવર્ક' : language === 'ar' ? 'سلسلة توريد متكاملة' : 'Strong Supplier Network',
      description: language === 'hi' ? 'हजारों किसानों और प्रमाणित मिलों के साथ दीर्घकालिक संबंध। यह चरम सीजन में भी भारी आपूर्ति सुनिश्चित करता है।' : language === 'gu' ? 'હજારો પ્રગતિશીલ ખેડૂતો અને જંતુમુક્ત પ્રોસેસિંગ યુનિટો સાથે લાંબાગાળાના સંબંધો. અવિરત માલ પુરવઠો.' : language === 'ar' ? 'بناء شراكات طويلة الأجل مع آلاف المزارعين الهنود والمطاحن المعتمدة لضمان تلبية الطلبات الوفيرة حتى في أوقات الذروة.' : 'Forged long-term supply alliances with thousands of farmers and certified mills. This depth ensures massive supply continuity even during peak season market strains.',
      stat: language === 'hi' ? '25k+ मीट्रिक टन' : language === 'gu' ? '૨૫k+ ટન ક્ષમતા' : language === 'ar' ? '٢٥,٠٠٠+ طن' : '25k+ MT'
    }
  ];

  const tradeSteps = [
    { 
      step: '01', 
      title: language === 'hi' ? 'सीधा सोर्सिंग' : language === 'gu' ? 'સીધી સોર્સિંગ' : language === 'ar' ? 'توريد مباشر' : 'Direct Sourcing', 
      desc: language === 'hi' ? 'गुजरात में सीधे किसानों से फसल उठाव।' : language === 'gu' ? 'ગુજરાતના ખેત પટ્ટાઓમાંથી સીધી ખરીદી' : language === 'ar' ? 'عقود شراء فورية من الحقول المعتمدة في ولاية غوجارات' : 'Direct contract picking in Gujarat & certified agricultural belts.' 
    },
    { 
      step: '02', 
      title: language === 'hi' ? 'गुणवत्ता छँटाई' : language === 'gu' ? 'ગુણવત્તા અને સોર્ટિંગ' : language === 'ar' ? 'فرز وتصنيف دقيق' : 'Quality Graded', 
      desc: language === 'hi' ? 'डी-शेलिंग, कलर-सॉर्टिंग और नमी मानकों का परीक्षण।' : language === 'gu' ? 'ડિ-શેલિંગ, રંગ સોર્ટિંગ અને ભેજ પરિમાણ ટેસ્ટિંગ' : language === 'ar' ? 'فحص مستويات الرطوبة والفرز اللوني بالليزر' : 'Sieving, de-shelling, color-sorting & strict moisture level inspection.' 
    },
    { 
      step: '03', 
      title: language === 'hi' ? 'मजबूत समुद्री पैकिंग' : language === 'gu' ? 'લાયક સમુદ્રી પેકેજિંગ' : language === 'ar' ? 'تغليف بحري ثقيل' : 'Heavy Sea Packing', 
      desc: language === 'hi' ? 'सुरक्षित पर्यावरण-अनुकूल मुद्रित पीपी या बीओपीपी बैगिंग।' : language === 'gu' ? 'કસ્ટમ પ્રિન્ટેડ ડબલ પીપી અથવા બીઓપીપી બેગ્સ' : language === 'ar' ? 'تعبئة في أكياس بولي بروبلين آمنة ومقاومة للرطوبة' : 'Eco-safe custom printed double PP or BOPP bagging.' 
    },
    { 
      step: '04', 
      title: language === 'hi' ? 'पोर्ट रसद' : language === 'gu' ? 'પોર્ટ લોજિસ્ટિક્સ' : language === 'ar' ? 'الخدمات اللوجستية للميناء' : 'Port Logistics', 
      desc: language === 'hi' ? 'बंदरगाह लोडिंग बेस पर त्वरित पारगमन।' : language === 'gu' ? 'બંદરે ઓટોમેટેડ બેઝ પર ઝડપી લોડિંગ' : language === 'ar' ? 'نقل سريع لمستودعات ومحطات الشحن في الميناء' : 'Rapid transit to automated loading bays at the export terminal.' 
    },
    { 
      step: '05', 
      title: language === 'hi' ? 'महासागर नौवहन' : language === 'gu' ? 'સમુદ્રી નૂર નિકાસ' : language === 'ar' ? 'شحن بحري دولي' : 'Ocean Freight', 
      desc: language === 'hi' ? 'वैश्विक गंतव्य बंदरगाहों तक लाइव शिपिंग अपडेट।' : language === 'gu' ? 'ગંતવ્ય બંદરો સુધી લાઈવ પરિપૂર્ણતા ટ્રેકિંગ' : language === 'ar' ? 'متابعة حركة الحاويات البحرية حتى تسليم ميناء الوصول' : 'Global shipping with live cargo clearance updates to destination port.' 
    }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB] relative font-sans overflow-hidden border-t border-slate-100">
      
      {/* Background design elements */}
      <div className="geometric-accent pointer-events-none" />
      <div className="geometric-accent-left pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
        
        {/* Core Corporate Bio/Introduction paragraph - Centered Layout, removing the Mundra Sidebar */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] tracking-wider uppercase font-extrabold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              {t.home_ov_tag}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            {t.home_ov_title}
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {t.home_ov_p1}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <button
              onClick={onLearnMore}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              {t.nav_about}
            </button>
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A25D] hover:from-[#E2C578] hover:to-[#C5A25D] text-slate-950 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap border border-[#AA8B4C]/25"
            >
              {t.product_card_inquire}
            </button>
          </div>
        </div>

        {/* Core Pillars / Differentiators - Why Choose Us - Beautified with Golden Theme elements & interactive hover states */}
        <div className="pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <motion.span 
              className="text-[10px] font-bold uppercase tracking-widest text-[#AA8B4C] block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Tradixo Standard
            </motion.span>
            <motion.h3 
              className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 tracking-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {language === 'hi' ? 'विदेशी वितरक हमें क्यों चुनते हैं' : language === 'gu' ? 'વિદેશી વિતરકો શા માટે આપણને પસંદ કરે છે' : language === 'ar' ? 'لماذا يفضل الموردون والمستوردون التعامل معنا' : 'Why Overseas Distributors Choose Us'}
            </motion.h3>
            <motion.p 
              className="text-slate-500 text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Supporting your agricultural supply lines with verified quality, pricing certainty, and logistics precision.
            </motion.p>
          </div>

          {/* Differentiators Grid with Rich Golden elements & subtle elevation animation */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {differentiators.map((diff, idx) => (
              <motion.div 
                key={idx} 
                className="group relative bg-white p-6 sm:p-8 rounded-xl border border-slate-100 hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(197,162,93,0.12)] transition-all duration-300 text-left flex flex-col justify-between"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                {/* Subtle Amber Glow Background overlay on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="p-3 bg-[#FDFBF7] text-[#AA8B4C] rounded-lg border border-[#C5A25D]/30 transition-transform duration-300 group-hover:scale-110 shadow-sm shrink-0">
                      <diff.icon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    {/* Golden Pill with Stat details */}
                    <span className="px-2.5 py-1 text-[9px] font-extrabold text-[#AA8B4C] bg-[#FDFBF7] rounded-full border border-[#C5A25D]/30 shrink-0 font-sans tracking-wide shadow-sm uppercase">
                      {diff.stat}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-base text-slate-900 uppercase tracking-wider group-hover:text-[#AA8B4C] transition-colors duration-200">
                      {diff.title}
                    </h4>
                    <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-semibold">
                      {diff.description}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="w-full h-1 bg-[#C5A25D]/30 rounded-full mt-5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Visual Cargo Sourcing Flowchart */}
        <div className="mt-16 bg-slate-900 text-white rounded-sm p-6 sm:p-10 relative overflow-hidden text-left">
          {/* Decorative backdrop map design */}
          <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-5 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200')` }} />
          
          <div className="relative z-10 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-extrabold">End-to-End Handled Logistical Chain</span>
                <h4 className="text-xl font-bold font-heading text-white">
                  {language === 'hi' ? 'हमारा खेत-से-बंदरगाह सोर्सिंग जीवनचक्र' : language === 'gu' ? 'આપણો ખેતર-થી-બંદર સુધીનો નિકાસ ચક્ર' : language === 'ar' ? 'سلسلة إمداد ونقل البضائع والتحميل' : 'Our Sourcing to Shipping Lifecycle'}
                </h4>
              </div>
              <div className="px-3 py-1 bg-white/10 rounded-sm text-xs text-slate-300 font-sans flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" /> Strict Compliance Overseen
              </div>
            </div>

            {/* Steps line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {tradeSteps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  className="space-y-2 relative"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-sm bg-[#C5A25D] text-slate-950 flex items-center justify-center text-xs font-extrabold font-mono shadow-sm">
                      {step.step}
                    </span>
                    {idx < 4 && (
                      <div className="hidden lg:block absolute left-10 right-0 h-[2px] bg-white/10 top-4 z-0" />
                    )}
                  </div>
                  <h5 className="font-extrabold text-[#D4AF37] text-xs sm:text-sm pt-1">{step.title}</h5>
                  <p className="text-slate-300 text-xs leading-normal font-semibold">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
