/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake, Ship, Truck, FileCheck, Landmark, Award, Clock, Users, Globe, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';

const transitMatrix = [
  {
    port: 'Jebel Ali, Dubai (UAE)',
    days: '4–5 Days',
    frequency: 'Bi-Weekly Direct'
  },
  {
    port: 'Port of Singapore',
    days: '8–10 Days',
    frequency: 'Weekly Direct'
  },
  {
    port: 'Haiphong, Vietnam',
    days: '12–14 Days',
    frequency: 'Weekly Mother-Vessel'
  },
  {
    port: 'Jakarta, Indonesia',
    days: '14–16 Days',
    frequency: 'Weekly Express'
  },
  {
    port: 'Port of Rotterdam (EU)',
    days: '22–24 Days',
    frequency: 'Weekly Connection'
  }
];

interface AboutUsProps {
  onOpenInquiry: () => void;
}

export default function AboutUs({ onOpenInquiry }: AboutUsProps) {
  const { language } = useLanguage();
  
  const values = [
    {
      icon: ShieldCheck,
      title: language === 'hi' ? 'बिना समझौते के गुणवत्ता' : language === 'gu' ? 'અભૂતપૂર્વ ગુણવત્તા' : language === 'ar' ? 'جودة ميثاق لا تهاون فيها' : 'Uncompromising Quality',
      desc: language === 'hi' ? 'हम हर स्तर पर कड़ा नियंत्रण लागू करते हैं—बीज से लेकर कंटेनर सीलिंग तक।' : language === 'gu' ? 'અમે દરેક સ્તરે કડક નિયંત્રણ લાગુ કરીએ છીએ—બીજ પસંદગીથી લઈને કન્ટેનર સીલિંગ સુધી।' : language === 'ar' ? 'نطبق رقابة صارمة في كل مرحلة - من اختيار البذور إلى ختم الحاويات.' : 'We enforce strict controls at every stage—from seed selection to container sealing.'
    },
    {
      icon: HeartHandshake,
      title: language === 'hi' ? 'किसान सशक्तिकरण' : language === 'gu' ? 'ખેડૂત સશક્તિકરણ' : language === 'ar' ? 'تمكين ودعم المزارع المحلي' : 'Farmer Empowerment',
      desc: language === 'hi' ? 'हम निष्पक्ष मजदूरी का भुगतान करके और भंडारण संसाधन प्रदान करके स्थानीय सहकारी समितियों का समर्थन करते हैं।' : language === 'gu' ? 'અમે સ્થાનિક ખેડૂત સહકારી મંડળીઓને વાજબી ભાવ, સંગ્રહ અને સમયસર ચુકવણી આપી ટેકો આપીએ છીએ.' : language === 'ar' ? 'ندعم مزارعينا والتعاونيات الزراعية بتأمين عوائد عادلة وسريعة وتوفير وسائل تخزين ومساندة فنية مستمرة.' : 'We support local agricultural cooperatives by paying fair wages, providing storage resources, and securing prompt pay structures.'
    },
    {
      icon: Ship,
      title: language === 'hi' ? 'सटीक रसद व्यवस्था' : language === 'gu' ? 'લોજિસ્ટિક્સ ચોકસાઈ' : language === 'ar' ? 'الضبط اللوجستي الصارم' : 'Logistical Precision',
      desc: language === 'hi' ? 'मुंद्रा पोर्ट के करीब स्थित हमारे कार्यालय सीधे सीमा शुल्क निकासी और स्वास्थ्य प्रमाणन को संभालते हैं।' : language === 'gu' ? 'મુન્દ્રા પોર્ટ નજીકથી અમારા કાર્યાલયોથી કસ્ટમ્સ વહીવટ અને નિકાસ સીધી ચકાસણી સંભાળે છે।' : language === 'ar' ? 'تدار عملياتنا اللوجستية مباشرة عند بوابات ميناء موندرا لضمان التخليص والتفتيش السريع.' : 'Our direct presence near Mundra Port allows us to manage customs and compliance immediately.'
    }
  ];

  return (
    <section className="bg-white font-sans py-16 animate-fade-in relative overflow-hidden">
      {/* Accent Graphic */}
      <div className="geometric-accent-left pointer-events-none" />

      {/* Our Legacy & Founder - Luxurious Reveal */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <motion.div 
          className="bg-slate-950 text-white rounded-2xl overflow-hidden relative border border-slate-800 gold-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Accent Graphic */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A25D]/10 rounded-full filter blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#C5A25D]/5 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
            {/* Left Column - Content */}
            <div className="md:col-span-7 text-left space-y-4 py-10 px-6 sm:px-12 flex flex-col justify-center">
              <span className="text-[10px] font-extrabold uppercase text-[#C5A25D] tracking-widest">
                {language === 'hi' ? 'हमारी विरासत' : language === 'gu' ? 'અમારી વિરાસત' : language === 'ar' ? 'إرثنا العريق' : 'Our Legacy'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mt-2 text-left leading-tight">
                {language === 'hi' ? 'आरएस ट्रेडीक्सो ग्लोबल' : language === 'gu' ? 'આરએસ ટ્રેડીક્સો ગ્લોબલ' : language === 'ar' ? 'آر إس تريديكسو غلوبال' : 'Rs Tradixo Global'}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm font-semibold max-w-xl leading-relaxed text-left">
                {language === 'hi' ? 'समुद्री रसद और प्रीमियम कृषि निर्यात में उत्कृष्टता की कहानी।' : language === 'gu' ? 'મજબૂત સોર્સિંગ અને ટેકનોલોજી દ્વારા પેઢીગત સંબંધ સજાવતી આંતરરાષ્ટ્રીય વાર્તા.' : language === 'ar' ? 'الربط المباشر بين المزارع الهندية والشركاء التجاريين حول العالم بتميز لوجستي.' : 'Forging robust links between fertile harvest lands and global commerce desks with certified compliance.'}
              </p>
              {/* Founder name tag below text */}
              <div className="pt-4 border-t border-slate-800 mt-2">
                <p className="text-[#C5A25D] font-bold text-sm tracking-wide">Rajesh Maheshwari</p>
                <p className="text-slate-500 text-[11px] font-semibold tracking-wider uppercase">Founder & Exporter</p>
              </div>
            </div>

            {/* Right Column - Founder Image (fills the box) */}
            <div className="md:col-span-5 relative min-h-[320px] md:min-h-[380px]">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-950/10 z-10 pointer-events-none md:block hidden" />
              <img 
                src="/founder.png" 
                alt="Rajesh Maheshwari - Founder & Exporter of RS Tradixo Global"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>

{/* Sourcing & Logistics Hub Grid - Single column story layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-20">
        <div className="grid grid-cols-1 gap-8 items-start">
          
          {/* Full-width Column: Sourcing & Story */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#FDFBF7]/40 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-[#C5A25D]/15 shadow-sm space-y-6">
              <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 border-b border-slate-100 pb-5 text-left tracking-tight leading-tight">
                {language === 'hi' ? 'सीधे किसान नेटवर्क आधुनिक समुद्री बंदरगाह रसद से मिलते हैं' : language === 'gu' ? 'સીધા ખેડૂતોનું નેટવર્ક અને આધુનિક સમુદ્રી લોજિસ્ટિક્સનું જોડાણ' : language === 'ar' ? 'ربط شبكات المزارعين بريادة موانئ وشحن حديث ذكي' : 'Direct Farmer Networks Meet Modern Ocean Port Logistics'}
              </h3>

              <div className="space-y-6 text-slate-600 text-sm leading-relaxed text-left font-medium">
                <p>
                  {language === 'hi' ? (
                    <><strong>राजेश माहेश्वरी</strong> के नेतृत्व में, हमारा परिचालन मॉडल भौगोलिक लाभ पर निर्भर करता है। गुजरात भारत का सबसे बड़ा मूंगफली उत्पादक है और यहीं <strong>मुंद्रा पोर्ट</strong> स्थित है, जो एक उत्कृष्ट पूरी तरह से स्वचालित कंटेनर टर्मिनल है। बंदरगाह के निकट अपने प्रसंस्करण केंद्र और भंडारण इकाइयां होने से, हम परिवहन में होने वाली देरी और नमी के जोखिम को काफी कम करते हैं और इष्टतम दरों पर कंटेनर बुकिंग सुनिश्चित करते हैं।</>
                  ) : language === 'gu' ? (
                    <><strong>રાજેશ માહેશ્વરી</strong>ના નેતૃત્વ હેઠળ, અમારું ઓપરેટિંગ મોડેલ ભૌગોલિક અનુકૂળતા પર આધારિત છે. ગુજરાત દેશમાં મગફળીનું સૌથી મોટું ઉત્પાદક છે અને અહીં <strong>મુન્દ્રા પોર્ટ</strong> આવેલું છે જે આપણું ઝડપી આંતરરાષ્ટ્રીય કનેક્શન છે. પોર્ટ નજીક પ્રોસેસિંગ હબ અને વેરહાઉસ હોવાને લીધે અમે ભેજ અને પરિવહનનું જોખમ ઘટાડીને શ્રેષ્ઠ ભાવો પૂરા પાડીએ છીએ.</>
                  ) : language === 'ar' ? (
                    <>تحت قيادة <strong>راجيش ماهيشواري</strong>، يعتمد نموذج عملنا على المزايا الجغرافية اللوجستية الفريدة، حيث تعد ولاية غوجارات أكبر منتج للفول السوداني بالهند وموطناً لميناء موندرا الاستراتيجي، المؤتمت بالكامل. قرب منشآتنا الخاصة بالغسيل والفرز والتعبئة من محطات الشحن يتيح لنا تقليل نسب الرطوبة وتفادي التأخيرات البرية الطويلة.</>
                  ) : (
                    <>Under the leadership of <strong>Rajesh Maheshwari</strong>, our operating model relies on structural geographic benefit. Gujarat is the largest peanut producing state in India and houses <strong>Gujarat's premier ocean export gateway</strong>, an exceptional fully automated container terminal. Having our processing clusters and warehousing units located close to port gates allows us to minimize inland haulage transit times, manage moisture risk, and secure optimal container freight bookings.</>
                  )}
                </p>

                <p>
                  {language === 'hi' ? (
                    <>हम कृषि स्तर पर एक संविदा खेती मॉडल संचालित करते हैं। हमारी समर्पित कृषि टीम व्यक्तिगत रूप से प्रमुख उत्पादक जिलों की यात्रा करती है ताकि बोल्ड और जावा मूंगफली के बेहतरीन बैचों का चयन किया जा सके जो विदेशी खरीदारों के लिए कड़े छँटाई मानकों का पालन करती है। इसके अतिरिक्त, प्रीमियम चावल किस्मों को मिलिंग कर निर्यात मानकों से मिलान किया जाता है।</>
                  ) : language === 'gu' ? (
                    <>અમે ખેતી સ્તરે સહભાગી મોડેલ ચલાવીએ છીએ. અમારી ટીમ ખેતરોની મુલાકાત લઈ ગુણવત્તાવાળી બોલ્ડ અને જાવા મગફળી પસંદ કરે છે. તેમજ પ્રીમિયમ સિલ્કી પોલિશ બાસમતી અને નોન-બાસમતી ચોખાને યોગ્ય માપદંડોથી પ્રોસેસ કરી નિકાસ લાયક બનાવાય છે.</>
                  ) : language === 'ar' ? (
                    <>نقيم تحالفات وعقود زراعية مستقرة مع الفلاحين مباشرة. يشرف خبراؤنا على محاصيل الفستق الحلبي والبولد والجاوا بأنفسهم لفرزها بعناية فائقة. كذا يتم تلميع وغربلة حبوب الأرز سيلا البسمتي الحبة الطويلة لتفوق تماماً شروط الاستيراد بالدول الخليجية والعربية ومنافذ الدخول البحرية لدول العالم.</>
                  ) : (
                    <>We cultivate strong contract farming coalitions under agricultural safety. Our team personally inspects groundnut harvests from prime soil plots, executing rigorous sorting to provide perfect Java and Bold grade peanut kernels. Our premium Basmati and Non-Basmati rice grades are milled, polished, and moisture-controlled with high-precision equipment to exceed destination port standards in the UAE, Vietnam, Indonesia, and beyond.</>
                  )}
                </p>
              </div>

              <motion.div 
                className="p-5 bg-white border border-[#C5A25D]/20 rounded-xl flex gap-4 border-l-4 border-l-[#C5A25D] shadow-sm"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Truck className="w-8 h-8 text-[#AA8B4C] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1 text-left">
                    {language === 'hi' ? 'गुजरात बंदरगाह निकटता' : language === 'gu' ? 'ગુજરાત પોર્ટ ગેટવે નિકટતા' : language === 'ar' ? 'القرب الاستراتيجي من موانئ غوجارات' : 'Gujarat Ocean Port Gateway Proximity'}
                  </h4>
                  <p className="text-slate-500 text-xs leading-normal font-semibold text-left">
                    {language === 'hi' ? 'हमारी सीधी निकटता तेजी से सीमा शुल्क निकासी, 24 घंटे के भीतर पादप-स्वास्थ्य प्रमाण पत्र और त्वरित शिपिंग सुनिश्चित करती है।' : language === 'gu' ? 'મુન્દ્રા બંદરથી અમારી નિકતતા ઝડપી કસ્ટમ્સ મુક્તિ, રસ્તાઓ બાયપાસ અને ૨૪ કલાકમાં આરોગ્ય પ્રમાણપત્ર સુનિશ્ચિત કરે છે।' : language === 'ar' ? 'يتيح قرب منشآتنا لموانئ التصدير تسريع الفحوصات النباتية وإنجاز الشهادات الصحية والبيئية خلال ٢٤ ساعة والصعود الفوري لسطح الباخرة.' : 'Our direct proximity ensures rapid customs cargo clearance, Phytosanitary Certificate (PSC) endorsements under 24 hours, and swift sea loading bypass.'}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ═══ WHY CHOOSE US — Premium Dark Navy Bar ═══ */}
          <motion.div
            className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold accent top line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#AA8B4C] via-[#D4AF37] to-[#AA8B4C]" />
            
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A25D]/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C5A25D]/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative z-10 px-6 sm:px-10 py-8 sm:py-10">
              {/* Title */}
              <h3 className="text-center text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#D4AF37] mb-8 sm:mb-10">
                {language === 'hi' ? 'हमें क्यों चुनें' : language === 'gu' ? 'અમને કેમ પસંદ કરો' : language === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
              </h3>

              {/* 5-item grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
                {/* 1. Premium Quality */}
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C5A25D]/10 border border-[#C5A25D]/30 flex items-center justify-center group-hover:bg-[#C5A25D]/20 group-hover:scale-110 transition-all duration-300">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-1">
                      {language === 'hi' ? 'उत्कृष्ट गुणवत्ता' : language === 'gu' ? 'પ્રીમિયમ ગુણવત્તા' : language === 'ar' ? 'جودة عالية' : 'Premium Quality'}
                    </p>
                    <p className="text-slate-400 text-[10px] sm:text-[11px] leading-snug font-medium">
                      {language === 'hi' ? 'सावधानीपूर्वक जाँची गई गुणवत्ता' : language === 'gu' ? 'કાળજીપૂર્વક ચકાસાયેલ ઉત્પાદનો' : language === 'ar' ? 'منتجات مصدرة بعناية فائقة' : 'Carefully sourced and quality checked products'}
                    </p>
                  </div>
                </div>

                {/* 2. Competitive Pricing */}
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C5A25D]/10 border border-[#C5A25D]/30 flex items-center justify-center group-hover:bg-[#C5A25D]/20 group-hover:scale-110 transition-all duration-300">
                    <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-1">
                      {language === 'hi' ? 'प्रतिस्पर्धी मूल्य' : language === 'gu' ? 'સ્પર્ધાત્મક ભાવ' : language === 'ar' ? 'أسعار تنافسية' : 'Competitive Pricing'}
                    </p>
                    <p className="text-slate-400 text-[10px] sm:text-[11px] leading-snug font-medium">
                      {language === 'hi' ? 'सर्वोत्तम कीमत पर श्रेष्ठ गुणवत्ता' : language === 'gu' ? 'શ્રેષ્ઠ ભાવે ઉત્તમ ગુણવત્તા' : language === 'ar' ? 'أفضل جودة بأسعار منافسة' : 'Best quality at most competitive price'}
                    </p>
                  </div>
                </div>

                {/* 3. Timely Delivery */}
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C5A25D]/10 border border-[#C5A25D]/30 flex items-center justify-center group-hover:bg-[#C5A25D]/20 group-hover:scale-110 transition-all duration-300">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-1">
                      {language === 'hi' ? 'समय पर डिलीवरी' : language === 'gu' ? 'સમયસર ડિલિવરી' : language === 'ar' ? 'تسليم في الوقت المحدد' : 'Timely Delivery'}
                    </p>
                    <p className="text-slate-400 text-[10px] sm:text-[11px] leading-snug font-medium">
                      {language === 'hi' ? 'समय पर शिपमेंट और विश्वसनीय रसद' : language === 'gu' ? 'સમયસર શિપમેન્ટ અને વિશ્વસનીય લોજિસ્ટિક્સ' : language === 'ar' ? 'شحن منتظم ولوجستيات موثوقة' : 'On-time shipment and reliable logistics'}
                    </p>
                  </div>
                </div>

                {/* 4. Customer Satisfaction */}
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C5A25D]/10 border border-[#C5A25D]/30 flex items-center justify-center group-hover:bg-[#C5A25D]/20 group-hover:scale-110 transition-all duration-300">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-1">
                      {language === 'hi' ? 'ग्राहक संतुष्टि' : language === 'gu' ? 'ગ્રાહક સંતોષ' : language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction'}
                    </p>
                    <p className="text-slate-400 text-[10px] sm:text-[11px] leading-snug font-medium">
                      {language === 'hi' ? 'दीर्घकालिक संबंध बनाते हैं' : language === 'gu' ? 'લાંબા ગાળાના સંબંધો બાંધીએ છીએ' : language === 'ar' ? 'نبني علاقات طويلة الأمد' : 'We build long-term relationships'}
                    </p>
                  </div>
                </div>

                {/* 5. Global Network */}
                <div className="flex flex-col items-center text-center gap-3 group sm:col-span-1 col-span-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C5A25D]/10 border border-[#C5A25D]/30 flex items-center justify-center group-hover:bg-[#C5A25D]/20 group-hover:scale-110 transition-all duration-300">
                    <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-1">
                      {language === 'hi' ? 'वैश्विक नेटवर्क' : language === 'gu' ? 'વૈશ્વિક નેટવર્ક' : language === 'ar' ? 'شبكة عالمية' : 'Global Network'}
                    </p>
                    <p className="text-slate-400 text-[10px] sm:text-[11px] leading-snug font-medium">
                      {language === 'hi' ? 'विश्वभर में कई देशों में सेवा' : language === 'gu' ? 'વિશ્વભરમાં અનેક દેશોમાં સેવા' : language === 'ar' ? 'خدمة دول متعددة حول العالم' : 'Serving multiple countries worldwide'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gold accent bottom line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#AA8B4C] via-[#D4AF37] to-[#AA8B4C]" />
          </motion.div>

        </div>

        {/* Vision & Mission bento cards - Immersive Hover Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 mt-16">
          
          <motion.div 
            className="bg-[#FDFBF7] border border-[#C5A25D]/15 p-8 rounded-2xl relative overflow-hidden shadow-lg shadow-amber-950/2 hover:bg-white transition-all duration-300 border-t-4 border-t-[#C5A25D]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
          >
            <div className="h-12 w-12 bg-[#F9FAFB] text-[#AA8B4C] rounded-xl flex items-center justify-center mb-6 border border-[#C5A25D]/25 shadow-inner">
              <Target className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="font-heading font-extrabold text-[#AA8B4C] text-xs uppercase tracking-wider mb-3 text-left">
              {language === 'hi' ? 'हमारा समर्पित मिशन' : language === 'gu' ? 'અમારો સમર્પિત ઉદ્દેશ્ય' : language === 'ar' ? 'رسالة الشركة الاستراتيجية' : 'Our Dedicated Mission'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-left font-medium">
              {language === 'hi' ? 'गुणवत्ता के प्रमाणित कृषि फसलों के निर्यात द्वारा भारत को वैश्विक खाद्य सुरक्षा भागीदार के रूप में स्थापित करना। हम चिकनी लेनदेन और समय पर शिपिंग प्रतिबद्धता की गारंटी देते हैं।' : language === 'gu' ? 'સંપૂર્ણ શુદ્ધતા સાથે ગુણવત્તાયુક્ત પાકોની નિકાસ કરી ભારતને વૈશ્વિક ખાદ્ય સુરક્ષા ભાગીદાર તરીકે સ્થાપિત કરવો. અમે શ્રેષ્ઠ વ્યવહારો પૂરા પાડીએ છીએ.' : language === 'ar' ? 'ترسيخ مكانة الهند كشريك موثوق للأمن الغذائي العالمي عبر توريد محاصيل مطابقة للفحوصات الفيدرالية مع تسهيل إجراءات العقود واللوجستيات والتعبئة وبحماية تامة من العوامل البيئية.' : 'To position India as the primary reliable food security partner worldwide by exporting certified agricultural food crops of peerless purity. We strive to provide commercial overseas buyers with smooth transactions, stable margins, custom bagging specifications, and timely shipping commitments.'}
            </p>
          </motion.div>

          <motion.div 
            className="bg-[#FDFBF7] border border-[#C5A25D]/15 p-8 rounded-2xl relative overflow-hidden shadow-lg shadow-amber-950/2 hover:bg-white transition-all duration-300 border-t-4 border-t-[#C5A25D]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            whileHover={{ y: -6 }}
          >
            <div className="h-12 w-12 bg-[#F9FAFB] text-[#AA8B4C] rounded-xl flex items-center justify-center mb-6 border border-[#C5A25D]/25 shadow-inner">
              <Eye className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="font-heading font-extrabold text-[#AA8B4C] text-xs uppercase tracking-wider mb-3 text-left">
              {language === 'hi' ? 'हमारा कॉर्पोरेट विजन' : language === 'gu' ? 'અમારી કોર્પોરેટ વિઝન' : language === 'ar' ? 'رؤية مستقبلية واعدة' : 'Our Corporate Vision'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-left font-medium">
              {language === 'hi' ? 'भारत का सबसे भरोसेमंद, डिजिटल-अग्रणी कृषि निर्यातक बनना। मजबूत किसान सोर्सिंग और रासायनिक-मुक्त भंडारण के साथ, हम विश्वास-आधारित साझेदारी का निर्माण करना चाहते हैं।' : language === 'gu' ? 'ભારતના સૌથી ભરોસાપાત્ર અને ડિજિટલ-અગ્રણી કૃષિ નિકાસકાર બનવું. મજબૂત સોર્સિંગ અને ટેકનોલોજી દ્વારા પેઢીગત સંબંધ સજાવવો.' : language === 'ar' ? 'أن نكون الخيار الهندسي الأول في مجال تصدير السلع الزراعية مع بناء ثقة تبادلية تدوم لأجيال قائمة على الشفافية والمسؤولية والمطابقة الصارمة لكافة السلع.' : 'To become India\'s most trusted, digit-forward agricultural exporter. By blending robust contract sourcing with automated sorting machinery and zero-chemical warehousing, we aspire to build long-standing, generational partnerships based on mutual trust, compliance, and healthy agricultural solutions.'}
            </p>
          </motion.div>

        </div>

        {/* Company Core Values Grid with staggered children */}
        <div className="pt-16 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span 
              className="text-[10px] font-extrabold uppercase text-[#AA8B4C] tracking-widest"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {language === 'hi' ? 'हमारे मार्गदर्शक स्तंभ' : language === 'gu' ? 'અમારા માર્ગદર્શક સ્તંભો' : language === 'ar' ? 'ركائز القوة والمسؤولية' : 'Our Guiding Pillars'}
            </motion.span>
            
            <motion.h3 
              className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mt-2 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {language === 'hi' ? 'हमारे मुख्य कॉर्पोरेट मूल्य' : language === 'gu' ? 'અમારા કોર્પોરેટ મૂલ્યો' : language === 'ar' ? 'قيم ومبادئ ميثاق العمل' : 'Our Core Corporate Values'}
            </motion.h3>
            
            <motion.p 
              className="text-slate-500 text-xs sm:text-sm mt-3 text-center font-semibold leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {language === 'hi' ? 'आरएस व्यापारिक अनुबंध सम्मान की प्रतिबद्धता का प्रतिनिधित्व करते हैं।' : language === 'gu' ? 'Rs Tradixo દરેક વ્યાપારી કરાર એ સન્માનજનક પ્રતિબદ્ધતા છે।' : language === 'ar' ? 'في آر إس تريديكسو غلوبال، كل عقد توريد يمثل ميثاق شرف نسعى لتلبيته على أكمل وجه بموثوقية صخرية.' : 'At Rs Tradixo Global, every trade contract represents a commitment of honor. Our values direct our actions.'}
            </motion.p>
          </div>

          {/* Staggered cards revealing on viewport scroll */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
            {values.map((v, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-slate-150 p-6 rounded-2xl shadow-sm hover:border-[#C5A25D]/40 hover:shadow-xl hover:bg-[#FDFBF7]/30 transition-all duration-300 text-left flex flex-col justify-between"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div>
                  <div className="w-10 h-10 bg-[#FDFBF7] rounded-xl flex items-center justify-center mb-5 border border-[#C5A25D]/15 shadow-sm">
                    <v.icon className="w-5 h-5 text-[#AA8B4C] stroke-[2]" />
                  </div>
                  <h4 className="font-heading font-bold text-slate-800 text-xs uppercase tracking-wider mb-2 text-left">{v.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-semibold text-left">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* B2B Call To Action banner */}
        <motion.div 
          className="mt-20 mb-10 bg-slate-950 text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden border border-slate-800 shadow-2xl"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&q=80&w=800')` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-7">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white text-center leading-tight">
              {language === 'hi' ? 'आइए एक सुरक्षित कृषि-आपूर्ति समझौता स्थापित करें' : language === 'gu' ? 'આવજો, એક સુરક્ષيت કૃષિ-સપ્લાય કરાર શરૂ કરીએ' : language === 'ar' ? 'دعونا نؤسس اتفاقية توريد زراعية جمركية ميسرة' : "Let's Establish a Secured Agri-Supply Agreement"}
            </h3>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-center font-medium">
              {language === 'hi' ? 'मूंगफली और चावल के शिपमेंट के लिए प्रतिस्पर्धी मूल्य निर्धारण की अनलॉक करें। हमारा गुजरात बंदरगाह डेस्क कानूनी मस्यौदा तैयार करने के लिए तैयार है।' : language === 'gu' ? 'મગફળી અને ચોખાના શિપમેન્ટ માટે આકર્ષક ભાવો મેળવો. કાયદાકીય CIF અથવા FOB ડ્રાફ્ટ માટે અમારો પોર્ટ ડેસ્ક સંપર્ક કરો.' : language === 'ar' ? 'احصل على أسعار تنافسية مرنة للشحن واللوجستيات لحبوب الشيكولاتة وفستق البولد والأرز سيلا البسمتي. مكتبنا اللوجستي بموانئ غوجارات جاهز لتسيير الطلبيات.' : 'Unlock competitive pricing and transparent logistics for groundnut kernels and rice shipments. Our ports desk in Gujarat is ready to compile legal CIF or FOB drafts.'}
            </p>
            
            <motion.button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA8B4C] hover:from-[#E5C04A] hover:to-[#BBA05E] text-slate-950 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg cursor-pointer inline-flex items-center gap-2 mx-auto whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {language === 'hi' ? 'आरएस ट्रेडिक्सो ग्लोबल से जुड़ें' : language === 'gu' ? 'આરએસ ટ્રેડિક્સો ગ્લોબલ સાથે જોડાઓ' : language === 'ar' ? 'تواصل مع آر إس تريديكسو غلوبال' : 'Connect Rs Tradixo Global'}
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
