import React from 'react';
import { Mail, Phone, MapPin, Anchor, ShieldAlert, ArrowUpCircle, MessageSquareCode, ExternalLink } from 'lucide-react';
import { COMP_INFO } from '../data.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FooterProps {
  onTabChange: (tab: string) => void;
  onOpenInquiry: () => void;
}

export default function Footer({ onTabChange, onOpenInquiry }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  const handleLinkClick = (tabId: string) => {
    onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Localized sitemap content for the footer
  const footerLoc = {
    desc: {
      en: "Based strategically near Mundra Port in Gujarat, we are a premium agricultural import-export corporation connecting Indian harvest fields to wholesale food markets across the Middle East, Southeast Asia, and Europe.",
      hi: "गुजरात में मुंद्रा पोर्ट के पास रणनीतिक रूप से स्थित, हम एक प्रीमियम कृषि आयात-निर्यात निगम हैं जो भारतीय कृषि क्षेत्रों को मध्य पूर्व, दक्षिण पूर्व एशिया और यूरोप के थोक खाद्य बाजारों से जोड़ता है।",
      gu: "ગુજરાતમાં મુન્દ્રા બંદર નજીક વ્યૂહાત્મક રીતે સ્થિત, અમે એક પ્રીમિયમ કૃષિ આયાત-નિકાસ કોર્પોરેશન છીએ જે ભારતીય ખેતરોને મધ્ય પૂર્વ, દક્ષિણ પૂર્વ એશિયા અને યુરોપના જથ્થાબંધ બજારો સાથે જોડે છે.",
      ar: "موقعنا استراتيجي بجوار ميناء موندرا بولاية غوجارات بالهند، نحن شركة رائدة ومتخصصة في تصدير السلع الزراعية وربط المحاصيل الهندية بأسواق الجملة والأغذية في الشرق الأوسط وجنوب شرق آسيا وأوروبا."
    },
    transitTitle: {
      en: "Strategic Transit Advantage:",
      hi: "रणनीतिक पारगमन लाभ:",
      gu: "વ્યૂહાત્મક પરિવહન લાભ:",
      ar: "ميزة العبور اللوجستي الاستراتيجي:"
    },
    transitDesc: {
      en: "Located near India's principal private port, cutting land freight latency by up to 72 hours.",
      hi: "भारत के प्रमुख निजी बंदरगाह के पास स्थित, जिससे अंतर्देशीय सड़क परिवहन समय में 72 घंटे तक की बचत होती है।",
      gu: "ભારતના અગ્રણી ખાનગી બંદર નજીક સ્થિત હોવાથી જમીન પરિવહન સમયમાં ૭૨ કલાક સુધીનો બચાવ થાય છે.",
      ar: "إن التواجد الجغرافي المباشر بقرب الميناء يقلص مدة الشحن البري وتأخيرات جمارك الولاية بنسبة تصل إلى ٧٢ ساعة كاملة."
    },
    exportsTitle: {
      en: "Exports Division",
      hi: "निर्यात प्रभाग",
      gu: "નિકાસ ક્ષેત્ર વિભાગ",
      ar: "أقسام التصدير المباشر"
    },
    corporateTitle: {
      en: "Corporate Directory",
      hi: "कम्पनी निर्देशिका",
      gu: "કંપની ડિરેક્ટરી",
      ar: "روابط الموقع الإدارية"
    },
    logisticsTitle: {
      en: "Logistics Headquarters",
      hi: "रसद मुख्यालय",
      gu: "લોજિસ્ટિક્સ હેડક્વાર્ટર",
      ar: "المقر اللوجستي المعتمد"
    },
    licensingBtn: {
      en: "View Licensing credentials",
      hi: "लाइसेंसिंग साख देखें",
      gu: "નિકાસ લાયસન્સ જુઓ",
      ar: "مشاهدة وثائق التراخيص والاعتمادات"
    },
    chatWa: {
      en: "Chat on WhatsApp",
      hi: "व्हाट्सएप पर चैट करें",
      gu: "વોટ્સએપ ચેટીંગ સંપર્ક",
      ar: "تواصل الفوري عبر واتساب"
    },
    rights: {
      en: "All global rights reserved worldwide.",
      hi: "सर्वाधिकार सुरक्षित।",
      gu: "તમામ હકો અબાધિત છે.",
      ar: "كافة الحقوق العالمية محفوظة وموثقة."
    },
    complianceNote: {
      en: "Export compliance endorsed by Directorate General of Foreign Trade (DGFT), APEDA & FSSAI India.",
      hi: "विदेश व्यापार महानिदेशालय (DGFT), APEDA और FSSAI भारत द्वारा निर्यात अनुपालन समर्थित।",
      gu: "વિદેશ વ્યાપાર મંત્રાલય (DGFT), APEDA અને FSSAI ભારત દ્વારા આયાત-નિકાસ કાયદો માન્ય કૃષિ કોમોડિટી.",
      ar: "عمليات التصدير والتحميل مطابقة للوائح المديرية العامة للتجارة الخارجية بالهند (DGFT) بالإضافة إلى هيئة سلامة الغذاء APEDA و FSSAI."
    },
    termsTitle: {
      en: "Export Terms & Conditions",
      hi: "निर्यात नियम व शर्तें",
      gu: "નિકાસ શરતો અને નિયમો",
      ar: "شروط وضوابط التصدير الدولي"
    },
    customsBtn: {
      en: "Customs Support Info",
      hi: "सीमा शुल्क सहायता जानकारी",
      gu: "કસ્ટમ્સ સપોર્ટ માહિતી",
      ar: "معلومات الدعم الجمركي البحري"
    }
  };

  const tradeBadges = [
    { 
      label: { en: 'IEC Code Licensed', hi: 'आईईसी कोड लाइसेंस प्राप्त', gu: 'IEC કોડ પ્રમાણિત', ar: 'مرخص برقم فريضة IEC' },
      desc: { en: 'DGFT India, Govt Approved Trader', hi: 'डीजीएफटी भारत सरकार स्वीकृत निर्यातक', gu: 'DGFT ભારત સરકાર માન્ય નિકાસકાર', ar: 'المديرية العامة للتجارة الخارجية بالهند' }
    },
    { 
      label: { en: 'FSSAI Certified', hi: 'एफएसएसएआई प्रमाणित', gu: 'FSSAI પ્રમાણિત', ar: 'معتمد من هيئة سلامة الغذاء' },
      desc: { en: 'Strict Quality Safety Guidelines', hi: 'कड़े गुणवत्ता सुरक्षा दिशानिर्देश', gu: 'કડક ગુણવત્તા સુરક્ષા નિયમો', ar: 'إرشادات ميكروبيولوجية صارمة للأغذية' }
    },
    { 
      label: { en: 'GST Registered', hi: 'जीएसटी पंजीकृत', gu: 'જીએસટી નોંધાયેલ', ar: 'مسجل ضريبة القيمة المضافة' },
      desc: { en: 'Active GSTIN: 24XXXXXXXXXXXZ', hi: 'सक्रिय जीएसटीआईएन: 24XXXXXXXXXXXZ', gu: 'સક્રિય GSTIN: 24XXXXXXXXXXXZ', ar: 'الرقم الضريبي النشط: 24XXXXXXXXXXXZ' }
    },
    { 
      label: { en: 'Quality Inspection Reports', hi: 'गुणवत्ता निरीक्षण रिपोर्ट', gu: 'ગુણવત્તા નિરીક્ષણ અહેવાલ', ar: 'تقارير فحص الجودة' },
      desc: { en: 'Pre-vessel Load Quality Reports', hi: 'जहाज लोड होने से पहले की गुणवत्ता रिपोर्ट', gu: 'શિપમેન્ટ લોડ કરતા પહેલા ક્વોલિટી રિપોર્ટ', ar: 'تقارير فحص الجودة الكيميائية والميكروبية للرصيف' }
    }
  ];

  const getLoc = (key: keyof typeof footerLoc) => {
    const item = footerLoc[key];
    return item[language as 'en' | 'hi' | 'gu' | 'ar'] || item['en'];
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 font-sans relative overflow-hidden text-left" id="main_footer_section">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5 items-start text-left">
          
          {/* Box 1: Brand & Strategic Advantage */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2 text-left">
              <div className="w-8 h-8 bg-[#0056B3] rounded-sm flex items-center justify-center text-white font-bold text-sm shrink-0">
                <Anchor className="w-4.5 h-4.5" />
              </div>
              <span className="font-heading font-extrabold text-[#FFFFFF] text-base tracking-wider uppercase">
                RS TRADIXO GLOBAL
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed text-left">
              {getLoc('desc')}
            </p>

            <div className="bg-slate-900 border border-white/5 rounded-sm p-3.5 text-xs space-y-1 text-left">
              <span className="text-[10px] uppercase font-bold text-[#ADD8E6] tracking-wider block text-left">
                {getLoc('transitTitle')}
              </span>
              <p className="text-slate-300 text-[11px] font-medium leading-relaxed text-left">
                {getLoc('transitDesc')}
              </p>
            </div>
          </div>

          {/* Box 2: Products Directory */}
          <div className="space-y-4 text-left">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider border-l-2 border-[#0056B3] pl-2 text-left">
              {getLoc('exportsTitle')}
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs text-left">
              <button 
                onClick={() => handleLinkClick('products')}
                className="text-left text-slate-450 text-slate-400 hover:text-white transition-colors cursor-pointer hover:underline flex items-center gap-1.5"
              >
                <span>• {language === 'hi' ? 'जावा मूंगफली दाने (लाल छिड़काव)' : language === 'gu' ? 'જાવા મગફળી દાણા (લાલ સ્કીન)' : language === 'ar' ? 'فستق سوداني هندي مقاس जावा' : 'Java Peanut Kernels (Red Skin)'}</span>
              </button>
              <button 
                onClick={() => handleLinkClick('products')}
                className="text-left text-slate-450 text-slate-400 hover:text-white transition-colors cursor-pointer hover:underline flex items-center gap-1.5"
              >
                <span>• {language === 'hi' ? 'बोल्ड मूंगफली दाने (प्रीमियम साइज)' : language === 'gu' ? 'બોલ્ડ મગફળી દાણા (પ્રીમિયમ સાઇઝ)' : language === 'ar' ? 'فستق سوداني هندي बोल्ड كبير الحجم' : 'Bold Peanut Kernels (Premium Size)'}</span>
              </button>
              <button 
                onClick={() => handleLinkClick('products')}
                className="text-left text-slate-450 text-slate-400 hover:text-white transition-colors cursor-pointer hover:underline flex items-center gap-1.5"
              >
                <span>• {language === 'hi' ? 'अतिरिक्त-लंबा सुगंधित बासमती चावल' : language === 'gu' ? 'પ્રીમિયમ બાસમતી સુગંધિત ચોખા' : language === 'ar' ? 'أرز بسمتي هندي سيلا طويل الحبة معتق' : 'Extra-Long Aromatic Basmati Rice'}</span>
              </button>
              <button 
                onClick={() => handleLinkClick('products')}
                className="text-left text-slate-450 text-slate-400 hover:text-white transition-colors cursor-pointer hover:underline flex items-center gap-1.5"
              >
                <span>• {language === 'hi' ? 'बहु-विन्यास गैर-बासमती चावल' : language === 'gu' ? 'નોન-બાસમતી ચોખા વિવિધ ગ્રેડ નિકાસ' : language === 'ar' ? 'شحنات أرز غير بسمتي الأبيض' : 'Multi-configuration Non-Basmati Rice'}</span>
              </button>
              <button 
                onClick={() => handleLinkClick('certifications')}
                className="text-left text-slate-400 hover:text-[#ADD8E6] transition-colors cursor-pointer flex items-center gap-1.5 text-[11px] text-[#ADD8E6] font-semibold uppercase tracking-wider mt-1.5"
              >
                {getLoc('licensingBtn')} <ExternalLink className="w-3" />
              </button>
            </div>
          </div>

          {/* Box 3: Company Sitemap links */}
          <div className="space-y-4 text-left">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider border-l-2 border-[#0056B3] pl-2 text-left">
              {getLoc('corporateTitle')}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-left">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')}
                  className="text-slate-400 hover:text-white cursor-pointer transition-colors text-left"
                >
                  {t.nav_home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')}
                  className="text-slate-400 hover:text-white cursor-pointer transition-colors text-left"
                >
                  {t.nav_about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('markets')}
                  className="text-slate-400 hover:text-white cursor-pointer transition-colors text-left"
                >
                  {t.nav_markets}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('faq')}
                  className="text-slate-400 hover:text-white cursor-pointer transition-colors text-left"
                >
                  {t.nav_faq}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')}
                  className="text-slate-400 hover:text-white cursor-pointer transition-colors font-semibold text-emerald-400 text-left"
                >
                  {t.nav_contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Box 4: Logistics Desk Contacts */}
          <div className="space-y-4 text-left">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider border-l-2 border-[#0056B3] pl-2 text-left">
              {getLoc('logisticsTitle')}
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-medium text-left">
              <li className="flex items-start gap-2.5 text-left">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-normal text-left">{COMP_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-left">
                <Mail className="w-4 h-4 text-[#0056B3] shrink-0" />
                <a href={`mailto:${COMP_INFO.email}`} className="hover:text-white transition-colors hover:underline text-left">{COMP_INFO.email}</a>
              </li>
              <li className="flex items-center gap-2.5 text-left">
                <Phone className="w-4 h-4 text-[#0056B3] shrink-0" />
                <span className="font-mono text-left">{COMP_INFO.phone}</span>
              </li>
              <li className="pt-2 text-left">
                <a 
                  href={`https://wa.me/${COMP_INFO.whatsapp}?text=${encodeURIComponent("Hello Rs Tradixo Global exporter team, I am interested in agricultural products quotation.")}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <MessageSquareCode className="w-4 h-4 shrink-0" /> {getLoc('chatWa')}
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Middle footer - B2B Credential Tags */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-white/5 text-left">
          {tradeBadges.map((badge, idx) => (
            <div key={idx} className="flex gap-2.5 items-center p-3.5 bg-slate-900/40 border border-white/5 rounded-sm hover:bg-slate-900/80 transition-colors text-left">
              <div className="p-1.5 bg-slate-900 rounded-sm shrink-0 border border-[#0056B3]/25">
                <ShieldAlert className="w-4 h-4 text-[#0056B3]" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-tight text-left">
                  {badge.label[language as 'en' | 'hi' | 'gu' | 'ar'] || badge.label['en']}
                </p>
                <p className="text-[9px] text-slate-500 font-semibold text-left">
                  {badge.desc[language as 'en' | 'hi' | 'gu' | 'ar'] || badge.desc['en']}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px] font-semibold text-left">
          <div className="text-left">
            <p>© {currentYear} {COMP_INFO.name}. {getLoc('rights')}</p>
            <p className="text-[10px] mt-1 text-slate-600 text-left">
              {getLoc('complianceNote')}
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-left">
            <button 
              onClick={() => handleLinkClick('faq')}
              className="hover:text-slate-300 transition-colors cursor-pointer hover:underline text-left text-xs"
            >
              {getLoc('termsTitle')}
            </button>
            <span>•</span>
            <button 
              onClick={() => handleLinkClick('contact')}
              className="hover:text-slate-300 transition-colors cursor-pointer hover:underline text-left text-xs"
            >
              {getLoc('customsBtn')}
            </button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-white/5 rounded-full text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
              title="Scroll back to headers"
            >
              <ArrowUpCircle className="w-5 h-5 animate-bounce-slow" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
