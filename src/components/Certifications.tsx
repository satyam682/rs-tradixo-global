/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data.ts';
import { ShieldCheck, Award, FileText, Landmark, Compass, ZoomIn, ShieldAlert, BadgeCheck, ChevronDown, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const { language } = useLanguage();

  const getLocalizedCertField = (id: string, field: 'name' | 'authority' | 'description' | 'purpose' | 'code') => {
    if (id === 'iec') {
      if (field === 'name') {
        return language === 'hi' ? "आयात निर्यात कोड (IEC)" : language === 'gu' ? "આયાત નિકાસ કોડ (IEC)" : language === 'ar' ? "رمز الاستيراد والتصدير (IEC)" : "Import Export Code (IEC)";
      }
      if (field === 'code') {
        return language === 'hi' ? "आईईसी कोड / आयात निर्यात लाइसेंस" : language === 'gu' ? "આઈઈસી કોડ / નિકાસ પરવાનો" : language === 'ar' ? "رخصة الاستيراد والتصدير الفيدرالية" : "IEC Code / Import Export License";
      }
      if (field === 'authority') {
        return language === 'hi' ? "विदेश व्यापार महानिदेशालय (DGFT), वाणिज्य मंत्रालय, भारत सरकार" : language === 'gu' ? "ડાયરેક્ટોરેટ જનરલ ઓફ ફોરેન ટ્રેડ (DGFT), ભારત સરકાર" : language === 'ar' ? "المديرية العامة للتجارة الخارجية (DGFT)، وزارة التجارة، حكومة الهند" : "Directorate General of Foreign Trade (DGFT), Government of India";
      }
      if (field === 'description') {
        return language === 'hi' ? "यह अनिवार्य दस-अंकीय पंजीकरण कोड आरएस ट्रेडिक्सो ग्लोबल को भारत से माल के पंजीकृत कानूनी निर्यातक के रूप में प्रमाणित करता है।" : language === 'gu' ? "આ દસ-અંકનો પરવાનો Rs Tradixo Global ને કાયદેસર અને નોંધાયેલ નિકાસકાર તરીકે સ્થાપિત કરે છે." : language === 'ar' ? "هذا الكود الإلزامي المكون من عشرة أرقام يسجل الشركة كمصدر رسمي معتمد بوزارة التجارة الهندية ويعطيها الأهلية للشحن والتحصيل بنكي السريع." : "This mandatory unique ten-digit registration code certifies Rs Tradixo Global as a registered commercial international corporate merchant legal exporter of goods from India.";
      }
      if (field === 'purpose') {
        return language === 'hi' ? "कस्टम क्लीयरेंस, पोर्ट हैंडलिंग गेट्स सत्यापन और कानूनी वायर ट्रांसफर लेनदेन के लिए आवश्यक।" : language === 'gu' ? "કસ્ટમ્સ ક્લીયર ટેક્સ અને કાયદેસરની નાણાકીય લેવડદેવડ માટે જરૂરી." : language === 'ar' ? "حتمي لعمليات التخليص الجمركي البحري، ومعاملات التحويلات البنكية الدولية الموثقة." : "Required for custom clearance, port handling gates validation, and lawful wire transfer transactions.";
      }
    }

    if (id === 'fssai') {
      if (field === 'name') {
        return language === 'hi' ? "भारतीय खाद्य सुरक्षा लाइसेंस" : language === 'gu' ? "ખાદ્ય સુરક્ષા લાઇસન્સ" : language === 'ar' ? "ترخيص سلامة رعاية الغذاء" : "Food Safety and Standards License";
      }
      if (field === 'code') {
        return language === 'hi' ? "फ़सई लाइसेंस / खाद्य सुरक्षा पंजीकरण" : language === 'gu' ? "એફએસએસએઆઈ પરવાનો" : language === 'ar' ? "ترخيص وكالة المعايير الغذائية الهندية" : "FSSAI License / Food Safety Registration";
      }
      if (field === 'authority') {
        return language === 'hi' ? "भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI), स्वास्थ्य एवं परिवार कल्याण मंत्रालय" : language === 'gu' ? "ફૂડ સેફ્ટી એન્ડ સ્ટાન્ડર્ડ્સ ઓથોરિટી ઓફ ઇન્ડિયા (FSSAI)" : language === 'ar' ? "هيئة سلامة ومعايير الأغذية في الهند (FSSAI)" : "Food Safety and Standards Authority of India (FSSAI)";
      }
      if (field === 'description') {
        return language === 'hi' ? "वैश्विक खरीदारों को आश्वस्त करता है कि हमारे द्वारा संभाली गई, संसाधित, पैक की गई और संग्रहीत सभी खाद्य सामग्रियां सख्त राष्ट्रीय खाद्य सुरक्षा और स्वच्छता नियमों के अनुरूप हैं।" : language === 'gu' ? "ચોખા અને મગફળીનું પેકેજિંગ રાષ્ટ્રીય આરોग ્ય અને ગુણવત્તા માપદંડો હેઠળ સુરક્ષિત હોવાની ખાતરી આપે છે." : language === 'ar' ? "يؤكد لشركائنا الدوليين أن جميع المحاصيل المعالجة والمحفوظة في مستودعاتنا مطابقة لمعايير الصحة والنظافة الفيدرالية." : "Assures global buyers that all food commodities handled, processed, packed, and stored by Rs Tradixo Global conform to strict national food safety, sanitary, and hygiene rules.";
      }
      if (field === 'purpose') {
        return language === 'hi' ? "यूरोप, यूएई, उत्तरी अमेरिका और एशियाई सीमा शुल्क पोर्टलों में खाद्य आयात के लिए अनिवार्य मानक सत्यापन।" : language === 'gu' ? "યુરોપ, યુએઈ, સિંગાપોર વગેરે દેશોના કસ્ટમ ક્લીયરન્સ માટે એક મહત્વપૂર્ણ દસ્તાવેજ." : language === 'ar' ? "شهادة إلزامية لدخول وتوريد المواد الغذائية إلى دول الاتحاد الأوروبي، الخليج، وآسيا." : "Mandatory standard validation for edible imports in Europe, UAE, North American, and Asian custom portals.";
      }
    }

    if (id === 'apeda') {
      if (field === 'name') {
        return language === 'hi' ? "एपीडा निर्यात प्राधिकरण" : language === 'gu' ? "APEDA નિકાસ અધિકૃતતા" : language === 'ar' ? "ترخيص التصدير من أبيدا" : "APEDA Export Authorization";
      }
      if (field === 'code') {
        return language === 'hi' ? "एपीडा पंजीकरण प्रमाणपत्र" : language === 'gu' ? "APEDA નોંધણી પ્રમાણપત્ર" : language === 'ar' ? "شهادة تسجيل أبيدا" : "APEDA Registration Certificate";
      }
      if (field === 'authority') {
        return language === 'hi' ? "कृषि एवं प्रसंस्कृत खाद्य उत्पाद निर्यात विकास प्राधिकरण (APEDA), वाणिज्य मंत्रालय, भारत सरकार" : language === 'gu' ? "એગ્રિકલ્ચરલ એન્ડ પ્રોસેસ્ડ ફૂડ પ્રોડક્ટ્સ એક્સપોર્ટ ડેવલપમેન્ટ ઓથોરિટી (APEDA), ભારત સરકાર" : language === 'ar' ? "هيئة تطوير صادرات المنتجات الزراعية والغذائية المصنعة (أبيدا)، وزارة التجارة، حكومة الهند" : "Agricultural & Processed Food Products Export Development Authority (APEDA), Govt of India";
      }
      if (field === 'description') {
        return language === 'hi' ? "एपीडा के तहत आधिकारिक पंजीकरण आरएस ट्रेडिक्सो ग्लोबल को मूंगफली, चावल, मसाले और कृषि वस्तुओं सहित अनुसूचित कृषि और प्रसंस्कृत खाद्य उत्पादों का निर्यात करने का अधिकार देता है।" : language === 'gu' ? "APEDA હેઠળ સત્તાવાર નોંધણી Rs Tradixo Global ને મગફળી, ચોખા, મસાલા અને કૃષિ કોમોડિટીઝ સહિત અનુસૂચિત કૃષિ ઉત્પાદનોની નિકાસ કરવાની સત્તા આપે છે." : language === 'ar' ? "التسجيل الرسمي تحت مظلة أبيدا يخول شركة آر إس تريديكسو غلوبال تصدير المنتجات الزراعية والغذائية المصنعة بما فيها الفول السوداني والأرز والتوابل." : "Official registration under APEDA authorizes Rs Tradixo Global to export scheduled agricultural and processed food products including groundnuts, rice, spices, and agro commodities from India.";
      }
      if (field === 'purpose') {
        return language === 'hi' ? "अनुसूचित उत्पादों के निर्यात के लिए अनिवार्य। एपीडा निर्यात प्रोत्साहन योजनाओं, व्यापार मेलों और आधिकारिक क्रेता-विक्रेता बैठकों तक पहुंच प्रदान करता है।" : language === 'gu' ? "અનુસૂચિત ઉત્પાદનોની નિકાસ માટે ફરજિયાત. APEDA નિકાસ પ્રોત્સાહન યોજનાઓ અને ટ્રેડ ફેર સુધી પહોંચ પ્રદાન કરે છે." : language === 'ar' ? "إلزامي لتصدير المنتجات المجدولة. يتيح الوصول لبرامج حوافز التصدير والمعارض التجارية الرسمية." : "Mandatory for exporting scheduled products. Enables access to APEDA export incentive schemes, trade fairs, and official buyer-seller meets.";
      }
    }

    if (id === 'gst') {
      if (field === 'name') {
        return language === 'hi' ? "वस्तु एवं सेवा कर (GST) पंजीकरण" : language === 'gu' ? "ગુડ્ઝ એન્ડ સર્વિસ ટેક્સ (GST) નોંધણી" : language === 'ar' ? "تسجيل ضريبة السلع والخدمات (GST)" : "Goods & Services Tax (GST) Registration";
      }
      if (field === 'code') {
        return language === 'hi' ? "जीएसटी पंजीकरण प्रमाणपत्र" : language === 'gu' ? "GST નોંધણી પ્રમાણપત્ર" : language === 'ar' ? "شهادة تسجيل ضريبة القيمة المضافة" : "GST Registration Certificate";
      }
      if (field === 'authority') {
        return language === 'hi' ? "केंद्रीय अप्रत्यक्ष कर और सीमा शुल्क बोर्ड (CBIC), वित्त मंत्रालय, भारत सरकार" : language === 'gu' ? "સેન્ટ્રલ બોર્ડ ઓફ ઇન્ડાયરેક્ટ ટેક્સીસ એન્ડ કસ્ટમ્સ (CBIC), ભારત સરકાર" : language === 'ar' ? "المجلس المركزي للضرائب غير المباشرة والجمارك (CBIC)، وزارة المالية، حكومة الهند" : "Central Board of Indirect Taxes and Customs (CBIC), Ministry of Finance, Government of India";
      }
      if (field === 'description') {
        return language === 'hi' ? "सक्रिय जीएसटी पंजीकरण आरएस ट्रेडिक्सो ग्लोबल को घरेलू खरीद, अंतरराज्यीय आपूर्ति श्रृंखला संचालन और बॉन्ड/एलयूटी के तहत शून्य-दर अंतरराष्ट्रीय शिपमेंट के लिए पूर्ण कर-अनुपालन इकाई के रूप में पुष्टि करता है।" : language === 'gu' ? "સક્રિય GST નોંધણી Rs Tradixo Global ને ઘરેલૂ ખરીદી, આંતરરાજ્ય સપ્લાય ચેઇન અને બોન્ડ/LUT હેઠળ ઝીરો-રેટેડ આંતરરાષ્ટ્રીય શિપમેન્ટ માટે સંપૂર્ણ કર-અનુપાલન એકમ તરીકે પુષ્ટિ કરે છે." : language === 'ar' ? "التسجيل النشط في ضريبة السلع والخدمات يؤكد أن الشركة كيان ملتزم ضريبياً بالكامل للمشتريات المحلية وعمليات سلسلة التوريد والشحنات الدولية." : "Active GST registration confirms Rs Tradixo Global as a fully tax-compliant entity for domestic procurement, interstate supply chain operations, and export under bond/LUT for zero-rated international shipments.";
      }
      if (field === 'purpose') {
        return language === 'hi' ? "इनपुट टैक्स क्रेडिट, कर चालान जारी करने, निर्यात घोषणाओं और विदेशी व्यापार भागीदारों के साथ पूर्ण वित्तीय पारदर्शिता बनाए रखने के लिए आवश्यक।" : language === 'gu' ? "ઇનપુટ ટેક્સ ક્રેડિટ, ટેક્સ ઇન્વોઇસ, નિકાસ ઘોષણાઓ અને વિદેશી વ્યાપાર ભાગીદારો સાથે સંપૂર્ણ નાણાકીય પારદર્શિતા માટે આવશ્યક." : language === 'ar' ? "ضروري لاسترداد ائتمان ضريبة المدخلات وإصدار فواتير ضريبية وتقديم إقرارات التصدير والحفاظ على الشفافية المالية الكاملة." : "Essential for claiming Input Tax Credit, issuing tax invoices, filing export declarations, and maintaining full financial transparency with overseas trade partners.";
      }
    }

    return '';
  };

  // Map certification IDs to specific icons
  const getCertIcon = (id: string) => {
    switch (id) {
      case 'iec': return Landmark;
      case 'fssai': return ShieldCheck;
      case 'apeda': return Compass;
      case 'gst': return FileText;
      default: return Award;
    }
  };

  // Map certification IDs to accent colors
  const getCertAccent = (id: string) => {
    switch (id) {
      case 'iec': return { bg: 'from-blue-600 to-indigo-700', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', ring: 'ring-blue-400/20', glow: 'rgba(37,99,235,0.12)' };
      case 'fssai': return { bg: 'from-emerald-600 to-teal-700', light: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', ring: 'ring-emerald-400/20', glow: 'rgba(5,150,105,0.12)' };
      case 'apeda': return { bg: 'from-green-600 to-lime-700', light: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', ring: 'ring-green-400/20', glow: 'rgba(22,163,74,0.12)' };
      case 'gst': return { bg: 'from-violet-600 to-purple-700', light: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', ring: 'ring-violet-400/20', glow: 'rgba(124,58,237,0.12)' };
      default: return { bg: 'from-slate-600 to-slate-700', light: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', ring: 'ring-slate-400/20', glow: 'rgba(100,116,139,0.12)' };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 font-sans relative overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50/60 via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-50/40 via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-50/20 via-transparent to-amber-50/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
        
        {/* Header Title section - Premium styling */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#0056B3]" />
            <span className="text-[#0056B3] font-bold tracking-widest text-[10px] uppercase">
              {language === 'hi' ? 'अनुपालन और सत्यापन' : language === 'gu' ? 'પાલન અને ચકાસણી' : language === 'ar' ? 'الامتثال والتحقق الجمركي' : 'Compliance & Verification'}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {language === 'hi' ? 'लाइसेंस प्राप्त और ऑडिट सत्यापित' : language === 'gu' ? 'લાઇસન્સ પ્રાપ્ત અને ઓડિટ પ્રમાણિત' : language === 'ar' ? 'مصدّر زراعي مرخص ومعتمد' : 'Licensed & Audit Verified'}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] via-[#0078D4] to-[#00A3E0]">
              {language === 'hi' ? 'कृषि-निर्यातक' : language === 'gu' ? 'કૃષિ નિકાસકાર' : language === 'ar' ? 'بالكامل' : 'Agri-Exporter'}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-slate-500 text-sm sm:text-base text-center leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {language === 'hi' ? 'हम भारतीय संप्रभु व्यापार एजेंसियों और वैश्विक पादप-स्वच्छता खाद्य सुरक्षा प्रोटोकॉल के पूर्ण अनुरूप काम करते हैं।' : language === 'gu' ? 'અમે ભારતીય વ્યાપારી સંસ્થાઓ और વૈશ્વિક ખાદ્ય સુરક્ષા ધોરણો અનુસાર કામ કરીએ છીએ.' : language === 'ar' ? 'نحن نعمل بتوافق كامل مع الهيئات السيادية الهندية والبروتولات الشاملة للأمن الغذائي والسلامة النباتية.' : 'We operate in complete harmony with sovereign Indian trading bureaus and global phytosanitary food safety protocols.'}
          </motion.p>

          {/* Highlighted Compliance Operations Line */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center justify-center mt-8 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0056B3]/5 via-[#0056B3]/10 to-[#0056B3]/5 border-2 border-[#0056B3]/10 shadow-sm max-w-2xl mx-auto"
          >
            <p className="text-xs sm:text-sm font-extrabold text-[#0056B3] tracking-wide flex items-center gap-3 text-center justify-center leading-relaxed">
              <BadgeCheck className="w-5 h-5 text-[#C5A25D] shrink-0 animate-pulse" />
              <span>
                {language === 'hi'
                  ? 'हम सुगम निर्यात संचालन के लिए सभी दस्तावेज़ीकरण और अनुपालन सुनिश्चित करते हैं।'
                  : language === 'gu'
                  ? 'અમે સરળ નિકાસ કામગીરી માટે તમામ દસ્તાવેજીકરણ અને પાલનની ખાતરી કરીએ છીએ.'
                  : language === 'ar'
                  ? 'نحن نضمن جميع الوثائق والامتثال لعمليات تصدير سلسة.'
                  : 'We ensure all documentation and compliance for smooth export operations.'}
              </span>
            </p>
          </motion.div>
        </div>

        {/* ═══ Certification Logos Showcase Banner ═══ */}
        <motion.div 
          className="mb-16 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 p-8 sm:p-10 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white to-emerald-50/30 pointer-events-none" />
          
          <div className="relative z-10">
            <p className="text-center text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-8">
              {language === 'hi' ? 'सत्यापित प्रमाणपत्र एवं लाइसेंस' : language === 'gu' ? 'ચકાસાયેલ પ્રમાણપત્રો અને લાઇસન્સ' : language === 'ar' ? 'الشهادات والتراخيص المعتمدة' : 'Verified Certifications & Licenses'}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {CERTIFICATIONS.map((cert, idx) => {
                const accent = getCertAccent(cert.id);
                return (
                  <motion.div 
                    key={cert.id}
                    className="flex flex-col items-center gap-4 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onClick={() => setActiveCert(activeCert === cert.id ? null : cert.id)}
                  >
                    {/* Logo Container */}
                    <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border-2 ${accent.border} shadow-md flex items-center justify-center p-3 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}
                      style={{ boxShadow: `0 4px 20px ${accent.glow}` }}
                    >
                      {cert.logo && (
                        <img 
                          src={cert.logo} 
                          alt={cert.name}
                          className="w-full h-full object-contain rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      {/* Active indicator */}
                      <div className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-r ${accent.bg} flex items-center justify-center shadow-md`}>
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="text-center">
                      <p className={`text-xs font-bold ${accent.text} group-hover:underline underline-offset-2 transition-all`}>
                        {cert.id.toUpperCase()}
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                        {language === 'hi' ? 'सत्यापित ✓' : language === 'gu' ? 'ચકાસાયેલ ✓' : language === 'ar' ? 'موثق ✓' : 'Verified ✓'}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Documentary Security + India Trade Board Endorsement ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pb-16 border-b border-slate-100">
          <motion.div 
            className="lg:col-span-7 space-y-5 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase font-extrabold text-[#0056B3] tracking-wider">
              {language === 'hi' ? 'दस्तावेज़ीकरण सुरक्षा प्रदाता' : language === 'gu' ? 'દસ્તાવેજીકરણ સુરક્ષા પ્રદાતા' : language === 'ar' ? 'إدارة الوثائق والشهادات دون عناء' : 'Documentary Security Compliance'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              {language === 'hi' ? 'हम जोखिम रहित शिपमेंट के कागजात तैयार करते हैं' : language === 'gu' ? 'અમે જોખમ મુક્ત નિકાસ વ્યવહારો તૈયાર કરીએ છીએ' : language === 'ar' ? 'نقضي تماماً على عقبات ومخاطر الأوراق الرسمية والشهادات' : 'We Eliminate Sourcing Documentary Risks Completely'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-left font-medium">
              {language === 'hi' ? 'आरएस ट्रेडिक्सो ग्लोबल में, हम दस्तावेज़ जोखिमों को दूर करते हैं। हम व्यक्तिगत रूप से प्रमाणित अधिकारियों के साथ अपने स्वयं के फाइलिंग और निरीक्षण की निगरानी करते हैं। गुजरात द्वारों से प्रत्येक मूंगफली या चावल कंटेनर के साथ समुद्री जैविक स्वास्थ्य प्रमाण पत्र, एसजीएस रिपोर्ट और मूल प्रमाण पत्र शामिल होता है जो आपकी पूंजी की सुरक्षा करता है।' : language === 'gu' ? 'Rs Tradixo Global માં, અમે દસ્તાવેજના જોખમોને દૂર કરીએ છીએ. અમે પોતે ફાઇલિંગ અને પ્રમાણિત સત્તાવાળાઓ સાથે નિરીક્ષણ કરીએ છીએ. મગફળી અથવા ચોખાના દરેક પાત્ર સાથે સત્તાવાર સર્ટિફિકેટ મોકલવામાં આવે છે.' : language === 'ar' ? 'في آر إس تريديكسو غلوبال، نتولى رفع وإلغاء مخاطر وصعوبات تسيير الأوراق. نحن نقوم على المعاينة ومتابعة التصاريح بالتعاون مع الهيئات المعترف بها. كل حاوية أرز أو فستق تخرج من موانئ غوجارات ترافقها الشهادات الفيدرالية وتقارير SGS لحماية تعاملاتكم.' : 'At Rs Tradixo Global, we remove document risks. We handle our own filings and oversee inspections with certified authorities personally. Each peanut or rice container cleared from Gujarat gates is accompanied by official plant biological certificates, SGS pre-loading reports, and official certificates of origin, protecting your capital.'}
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2 text-xs">
              <span className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-lg font-semibold text-slate-700 shadow-sm">
                <BadgeCheck className="w-4 h-4 text-[#0056B3] shrink-0" /> {language === 'hi' ? 'तेज क्लीयरेंस और सोर्सिंग' : language === 'gu' ? 'ઝડપી નિકાસ સોર્સિંગ' : language === 'ar' ? 'شحن فوري سريع' : 'Fast Clearance Sourcing'}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-lg font-semibold text-slate-700 shadow-sm">
                <BadgeCheck className="w-4 h-4 text-[#0056B3] shrink-0" /> APEDA Compliant
              </span>
              <span className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-lg font-semibold text-slate-700 shadow-sm">
                <BadgeCheck className="w-4 h-4 text-[#0056B3] shrink-0" /> {language === 'hi' ? 'शून्य शुल्क जुर्माना' : language === 'gu' ? 'ઝીરો ટરિફ દંડ' : language === 'ar' ? 'تعرفة شحن قانونية' : 'Zero Tariffs Penalty'}
              </span>
            </div>
          </motion.div>

          {/* India Trade Board Endorsement dark box */}
          <motion.div 
            className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-7 relative overflow-hidden shadow-2xl border border-slate-800 text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0056B3]/10 rounded-full -mr-24 -mt-24 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full -ml-16 -mb-16 pointer-events-none" />
            
            {/* Blue accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0056B3] via-[#0078D4] to-[#00A3E0]" />
            
            <h4 className="font-heading font-extrabold text-blue-300 text-xs uppercase tracking-widest mb-5">
              {language === 'hi' ? 'भारत व्यापार मंडल समर्थन' : language === 'gu' ? 'ભારતીય વ્યાપારી બોર્ડ સ્વીકૃતિ' : language === 'ar' ? 'اعتماد مجلس التجارة الهندي' : 'India Trade Board Endorsement'}
            </h4>

            <div className="space-y-4 text-xs font-mono">
              <div className="border-b border-white/10 pb-3">
                <p className="text-slate-500 text-[10px] tracking-wider">GST REGISTRATION NUMBER</p>
                <p className="text-emerald-400 font-bold mt-0.5">24XXXXXXXXXXXZ ({language === 'hi' ? 'जीएसटी पंजीकृत' : language === 'gu' ? 'જીએસટી નોંધાયેલ' : language === 'ar' ? 'مسجل ضريبة القيمة المضافة' : 'GST Registered — Active'})</p>
              </div>

              <div className="border-b border-white/10 pb-3">
                <p className="text-slate-500 text-[10px] tracking-wider">IEC REGISTRATION ID</p>
                <p className="text-emerald-400 font-bold mt-0.5">24XXXXXXXXXX36 ({language === 'hi' ? 'सत्यापित सक्रिय' : language === 'gu' ? 'ચકાસાયેલ સક્રિય' : language === 'ar' ? 'نشط وموثق' : 'Verified Active'})</p>
              </div>

              <div className="border-b border-white/10 pb-3">
                <p className="text-slate-500 text-[10px] tracking-wider">APEDA EXPORT LICENSE</p>
                <p className="text-emerald-400 font-bold mt-0.5">A-24376-IND ({language === 'hi' ? 'सत्यापित सक्रिय' : language === 'gu' ? 'ચકાસાયેલ સક્રિય' : language === 'ar' ? 'نشط وموثق' : 'Verified Active'})</p>
              </div>

              <div className="pb-1">
                <p className="text-slate-500 text-[10px] tracking-wider">FSSAI REGULATION NUMBER</p>
                <p className="text-emerald-400 font-bold mt-0.5">1072XXXXXXXX63 ({language === 'hi' ? 'खाद्य ग्रेड अनुरूप' : language === 'gu' ? 'ખાદ્ય ગ્રેડ યોગ્ય' : language === 'ar' ? 'مطابق لمواصفات الغذاء' : 'Food Grade compliant'})</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══ Certificate Detail Cards Grid ═══ */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
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
          {CERTIFICATIONS.map((cert) => {
            const isActive = activeCert === cert.id;
            const CertIcon = getCertIcon(cert.id);
            const accent = getCertAccent(cert.id);
            
            return (
              <motion.div 
                key={cert.id}
                onClick={() => setActiveCert(isActive ? null : cert.id)}
                className={`bg-white border-2 rounded-2xl overflow-hidden relative group cursor-pointer text-left transition-all duration-400 ${isActive ? accent.border + ' shadow-xl' : 'border-slate-100 hover:border-slate-200 hover:shadow-lg'}`}
                style={{ boxShadow: isActive ? `0 12px 40px ${accent.glow}` : undefined }}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -4 }}
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${accent.bg} transform origin-left transition-transform duration-500 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />

                <div className="p-6 sm:p-8">
                  {/* Header row with logo and icon */}
                  <div className="flex items-start gap-5 mb-6">
                    {/* Logo image */}
                    {cert.logo && (
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 ${accent.border} bg-white p-2 shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300 flex items-center justify-center`}>
                        <img 
                          src={cert.logo} 
                          alt={cert.name + ' Logo'}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      {/* Badge */}
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${accent.light} ${accent.text} border ${accent.border} rounded-full text-[9px] uppercase font-bold tracking-wider mb-2`}>
                        <CertIcon className="w-3 h-3" />
                        {language === 'hi' ? 'सरकारी प्रमाणपत्र' : language === 'gu' ? 'સરકારી પ્રમાણપત્ર' : language === 'ar' ? 'شهادة حكومية' : 'Govt. Certificate'}
                      </div>
                      
                      {/* Title */}
                      <h4 className={`font-heading font-extrabold text-sm sm:text-lg transition-colors text-left leading-snug ${isActive ? accent.text : 'text-slate-800 group-hover:text-slate-900'}`}>
                        {getLocalizedCertField(cert.id, 'name')}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Authority */}
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider font-sans text-left mb-3 flex items-start gap-1.5">
                    <Landmark className="w-3 h-3 shrink-0 mt-0.5" />
                    <span>{language === 'hi' ? 'जारीकर्ता:' : language === 'gu' ? 'પ્રમાણિત ઓથોરિટી:' : language === 'ar' ? 'جهة الإصدار:' : 'Issuer:'} {getLocalizedCertField(cert.id, 'authority')}</span>
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-left font-medium">
                    {getLocalizedCertField(cert.id, 'description')}
                  </p>

                  {/* Collapsible expandable pane */}
                  <motion.div 
                    className="overflow-hidden text-xs text-slate-500 font-sans"
                    initial={false}
                    animate={{ 
                      height: isActive ? 'auto' : 0, 
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 16 : 0,
                      paddingTop: isActive ? 16 : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={`${accent.light} p-4 rounded-xl border ${accent.border} space-y-2 text-left`}>
                      <p className={`font-bold ${accent.text} uppercase tracking-widest text-[9px] text-left flex items-center gap-1.5`}>
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {language === 'hi' ? 'सोर्सिंग महत्व:' : language === 'gu' ? 'સોર્સિંગ મહત્વ:' : language === 'ar' ? 'روافد الجودة ومطابقة السلع:' : 'Sourcing Significance:'}
                      </p>
                      <p className="text-slate-600 leading-relaxed font-medium text-left">{getLocalizedCertField(cert.id, 'purpose')}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Footer with code & expand CTA */}
                <div className={`px-6 sm:px-8 pb-5 pt-3 border-t flex justify-between items-center transition-colors duration-300 ${isActive ? accent.border + '/30 ' + accent.light + '/30' : 'border-slate-100'}`}>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{getLocalizedCertField(cert.id, 'code')}</span>
                  <span className={`flex items-center gap-1 text-[11px] font-bold ${accent.text} transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'}`}>
                    {isActive 
                      ? (language === 'hi' ? "कम करें" : language === 'gu' ? "ઓછું" : language === 'ar' ? "إخفاء" : "Minimize") 
                      : (language === 'hi' ? "विवरण देखें" : language === 'gu' ? "વધુ" : language === 'ar' ? "عرض" : "Learn more")} 
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
