import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert, Clock } from 'lucide-react';
import { COMP_INFO } from '../data.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  onOpenInquiry: () => void;
  showOnlyFaq?: boolean;
}

interface FaqItem {
  q: { en: string; hi: string; gu: string; ar: string };
  a: { en: string; hi: string; gu: string; ar: string };
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: {
      en: "How does Rs Tradixo Global guarantee peanut quality against aflatoxin?",
      hi: "आरएस ट्रेडिक्सो ग्लोबल एफलाटॉक्सिन के खिलाफ मूंगफली की गुणवत्ता की गारंटी कैसे देता है?",
      gu: "Rs Tradixo મગફળીમાં એફલાટોક્સિન સામે ક્વોલિટી ગેરંટી કેવી રીતે આપે છે?",
      ar: "كيف تضمن شركة آر إس تريديكسو جودة الفول السوداني ضد السموم الفطرية (الأفلاتوكسين)؟"
    },
    a: {
      en: "Aflatoxin is the primary concern for global peanut imports. We source our groundnuts only from registered pest-compliant farmers in high-quality clay soil regions. After harvesting, they are stored in dry, humidity-monitored warehouse facilities. Prior to shipment, we carry out random laboratory sampling. We also permit independent third-party inspection agencies (SGS / Geo-Chem) to extract samples directly at the port to issue European-compliant certification under 4 PPB total limits.",
      hi: "एफलाटॉक्सिन अंतरराष्ट्रीय मूंगफली आयात की मुख्य चिंता है। हम अपने मूंगफली को केवल उच्च गुणवत्ता वाली मिट्टी वाले क्षेत्रों के पंजीकृत किसानों से ही प्राप्त करते हैं। शिपमेंट से पहले, हम प्रयोगशाला नमूनाकरण करते हैं, और लोडिंग से पहले एसजीएस/जियो-केम जैसी स्वतंत्र एजेंसियों द्वारा जांच कराते हैं ताकि कुल सीमा 4 पीपीबी से कम हो।",
      gu: "એફલાટોક્સિન એ મગફળી આયાત ક્ષેત્રે મુખ્ય ચિંતા છે. અમે જંતુ-મુક્ત અને ઉચ્ચ ગુણવત્તાયુક્ત માટીવાળા ખેતરોમાંથી મગફળી મેળવીએ છીએ અને શિપિંગ પહેલાં સખત લેબોરેટરી ઓડિટ કરાવીએ છીએ જેથી એફલાટોક્સિન ૪ PPB થી નીચે રહે.",
      ar: "تعد السموم الفطرية (الأفلاتوكسين) الشاغل الأول لمستوردي الفول السوداني. نقوم بشراء محصولنا من مزارع معتمدة ومطابقة لشروط الجودة، تليها اختبارات مخبرية مستقلة من SGS/Geo-Chem للتحقق من أن مستويات الأفلاتوكسين الإجمالية تقل عن 4 PPB."
    }
  },
  {
    q: {
      en: "How do you prevent moisture and spoilage during transoceanic container voyages?",
      hi: "पार-महासागरीय कंटेनर यात्रा के दौरान आप नमी और खराब होने से कैसे बचाते हैं?",
      gu: "દરિયાઈ શિપિંગ દરમિયાન ભેજ અને ગુણવत्ता બગાડ અટકાવવા શું કરો છો?",
      ar: "كيف تضمنون حماية المحاصيل من الرطوبة والتلف أثناء الرحلات البحرية الطويلة؟"
    },
    a: {
      en: "We deploy multi-stage moisture guards: we only load cargo with secure natural dryness levels (under 8% for Peanuts and 14% for Rice). Additionally, we fit ocean containers with premium desiccants (silica gel absorber pads) and heavy kraft cargo inner-lining paper to completely isolate the shipping commodity from oceanic condensation and humidity spikes.",
      hi: "हम बहु-स्तरीय नमी सुरक्षा तैनात करते हैं: हम केवल सुरक्षित प्राकृतिक राष्ट्रीय शुष्क स्तर वाले माल लोड करते हैं (मूंगफली के लिए 8% से कम और चावल के लिए 14% से कम)। इसके अलावा, हम महासागरीय संघनन से बचाने के लिए कंटेनरों में प्रीमियम सिलिका जेल और भारी क्राफ्ट पेपर स्थापित करते हैं।",
      gu: "અમે સખત મોઇશ્ચર ગાર્ડ સીસ્ટમ વાપરીએ છીએ: મગફળીમાં ૮% થી ઓછું અને ચોખામાં ૧૪% થી ઓછું મોઇશ્ચર ટેસ્ટ પાસ થયા પછી જ લોડિંગ કરાય છે. કન્ટેનરની અંદર સ્પેશિયલ સિલિકા જેલ શોષક બેગ અને ભારે ક્રાફ્ટ પેપરનો ઉપયોગ કરવાથી ભેજ બગાડ અટકાવી શકાય છે.",
      ar: "نعزز الحاويات بأنظمة حماية رطوبة متعددة المراحل: لا يتم التحميل إلا بنسب جفاف طبيعي آمن (أقل من 8٪ للفول السوداني، وأقل من 14٪ للأرز). كما نضع وسادات امتصاص السيليكا جل جيل فائقة الجودة وبطانات الورق المقوى الكرافت داخل الحاويات لحمايتها التامة من الرطوبة والرياح البحرية."
    }
  },
  {
    q: {
      en: "What is the minimum order quantity (MOQ) for overseas shipment?",
      hi: "विदेशी शिपमेंट के लिए न्यूनतम ऑर्डर मात्रा (MOQ) क्या है?",
      gu: "નિકાસ ઓર્ડર માટે ન્યૂનતમ જથ્થો (MOQ) કેટલો છે?",
      ar: "ما هو الحد الأدنى لكمية الطلب للتصدير والشحن الخارجي؟"
    },
    a: {
      en: "Our standard export Minimum Order Quantity is 1 Full Container Load (FCL). For Peanuts, a 20ft container can hold approximately 19 to 20 Metric Tons depending on packing configuration. For Rice, a 20ft container holds approximately 24 to 25 Metric Tons. For specific trial loads, please consult our sales specialists in Mundra.",
      hi: "हमारा मानक निर्यात न्यूनतम ऑर्डर मात्रा 1 पूर्ण कंटेनर लोड (FCL) है। मूंगफली के लिए, 20 फीट के कंटेनर में लगभग 19 से 20 मीट्रिक टन आ सकता है। चावल के लिए, 20 फीट के कंटेनर में लगभग 24 से 25 मीट्रिक टन समा सकता है।",
      gu: "અમારો સ્ટાન્ડર્ડ નિકાસ ઓર્ડર ૧ ફુલ કન્ટેનર લોડ (FCL) છે. મગફળી માટે ૧ કન્ટેનરમાં આશરે ૧૯-૨૦ ટન અને ચોખા માટે આશરે ૨૪-૨૫ ટન સમાય છે.",
      ar: "الحد الأدنى النموذجي للطلب الدولي هو حاوية كاملة واحدة (FCL). بالنسبة للفول السوداني، تبلغ سعة الحاوية مقاس 20 قدمًا حوالي 19 إلى 20 طنًا متريًا. بالنسبة للأرز المعبأ، تبلغ السعة حوالي 24 إلى 25 طنًا متريًا."
    }
  },
  {
    q: {
      en: "Do you offer private labeling or custom brand print packaging?",
      hi: "क्या आप निजी लेबलिंग या कस्टम प्रिंट पैकेजिंग की पेशकश करते हैं?",
      gu: "શું તમે પ્રાઇવેટ લેબલિંગ અથવા કસ્ટમાઇઝ્ડ બ્રાન્ડ પેકિંગ પ્રદાન કરો છો?",
      ar: "هل تقدمون خدمات التعبئة المخصصة وكتابة الملصقات التجارية وعلامات الموزعين الخاصة (Private Labeling)؟"
    },
    a: {
      en: "Yes, absolutely. We support several global retail and wholesale supermarket chains with customized packaging. We can write and print your custom brand, localized languages, trade weight barcodes, and import licenses on raw high-grade BOPP, canvas jute, or multi-layer PP packets in sizing from 1kg up to 50kg bags.",
      hi: "हाँ, बिल्कुल। हम कस्टमाइज्ड पैकेजिंग के साथ वैश्विक खुदरा और थोक सुपरमार्केट श्रृंखलाओं का समर्थन करते हैं। हम 1 किलोग्राम से लेकर 50 किलोग्राम तक के मजबूत पीपी बैग, जूट और बीओपीपी बैग पर आपके कस्टम ब्रांड को कूटबद्ध और प्रिंट कर सकते हैं।",
      gu: "હા, ચોક્કસ. અમે વિવિધ દેશોના ગ્રાહકો માટે તેમની પોતાની બ્રાન્ડ નામ, લોગો અને વજન માર્કાવાળા ૧ કિલોથી લઈને ૫૦ કિલો સુધીના કસ્ટમ બેગ સાથે નિકાસ કરીએ છીએ.",
      ar: "نعم بامتياز تام! نحن ندعم عقود التعبئة والتغليف المخصصة لموزعي السوبرماركت وسلاسل التجزئة. يمكن طباعة شعاراتكم ومعطيات التراخيص بلغات متعددة على أكياس الخيش والجوت عالية المتانة من وزن 1 كجم إلى 50 كجم."
    }
  },
  {
    q: {
      en: "What are your standard payment terms for international bulk orders?",
      hi: "अंतरराष्ट्रीय थोक ऑर्डर के लिए आपके मानक भुगतान नियम क्या हैं?",
      gu: "આંતरરાષ્ટ્રીય બલ્ક ઓર્ડર માટે તમારી સ્ટાન્ડર્ડ ચુકવણી શરતો શું છે?",
      ar: "ما هي شروط الدفع المعتمدة لديكم لطلبات التصدير الكبيرة؟"
    },
    a: {
      en: "We accept 100% Irrevocable Letter of Credit (L/C at Sight) issued by prime international banks, or Telegraphic Transfer (T/T) deposits (30% advance deposit upon contract signature, 70% balance payable upon presentation of original shipping and customs documents).",
      hi: "हम प्रमुख अंतरराष्ट्रीय बैंकों द्वारा जारी 100% अपरिवर्तनीय साख पत्र (एल/सी एट साइट) या टेलीग्राफिक ट्रांसफर (टी/टी) जमा स्वीकार करते हैं (कॉन्ट्रैक्ट हस्ताक्षर पर 30% अग्रिम जमा, और बिल ऑफ लेडिंग और शिपिंग दस्तावेजों की प्रस्तुति पर 70% शेष राशि का भुगतान)।",
      gu: "અમે પ્રતિષ્ઠિત આંતરરાષ્ટ્રીય બેંકો દ્વારા જારી કરાયેલ ૧૦૦% અફર લેટર ઓફ ક્રેડિટ (L/C at Sight) અથવા ટેલિગ્રાફિક ટ્રાન્સફર (T/T) સ્વીકારીએ છીએ (ઓર્ડર કન્ફર્મ પર ૩૦% એડવાન્સ, બાકીના ૭૦% શિપિંગ દસ્તાવેજો રજૂ કર્યા પછી પેયબલ છે).",
      ar: "نقبل خطابات الاعتماد المستندية غير القابلة للإلغاء بنسبة 100٪ (L/C at Sight) الصادرة عن بنوك دولية رائدة، أو التحويل البرقي (T/T) بنسبة 30٪ دفعة مقدمة عند توقيع العقد، و70٪ متبقية تُدفع مقابل مستندات الشحن الأصلية والوثائق الجمركية الخاصة بميناء التحميل."
    }
  },
  {
    q: {
      en: "Why does your Gujarat location near Mundra Port matter for global trade?",
      hi: "मुंद्रा बंदरगाह के पास गुजरात में आपका स्थान वैश्विक व्यापार के लिए क्यों महत्वपूर्ण है?",
      gu: "મુન્દ્રા પોર્ટ નજીક ગુજરાતમાં આવેલું તમારું સ્થાન વૈશ્વિક વ્યાપાર માટે કેમ મહત્વનું છે?",
      ar: "ما هي أهمية موقعكم الاستراتيجي في غوجارات بالقرب من ميناء موندرا للتجارة العالمية؟"
    },
    a: {
      en: "Mundra Port in Gujarat is India's largest bulk and container private gateway port, equipped with state-of-the-art automated berths. Our proximity reduces inland transit transport delays, minimizes cargo handling damage risks, and protects our clients from delays, allowing us to load cargo on vessel tracks within 48 hours of packaging.",
      hi: "गुजरात में मुंद्रा पोर्ट भारत का सबसे बड़ा निजी कंटेनर बंदरगाह है, जो पूरी तरह से स्वचालित बर्थ से सुसज्जित है। हमारी निकटता अंतर्देशीय परिवहन विलंब को कम करती है, मौसम के जोखिम से बचाती है और पैकेजिंग के 48 घंटों के भीतर माल को लोड करने में मदद करती है।",
      gu: "મુન્દ્રા પોર્ટ એ દેશનું સૌથી મોટું ખાનગી અને અત્યાધુનિક સ્વયંસંચાલિત બંદર છે. અમારી નિકતતાને લીધે અંતરિયાળ ટ્રાન્સપોર્ટ સમય બચે છે અને ગુણવત્તા સચવાય છે જેથી અનાજ અને મગફળી ને ૨૪-૪૮ કલાક માં કન્ટેનર માં ચડાવી શકાય છે.",
      ar: "يمتاز ميناء موندرا بأنه أضخم بوابات الشحن البحري المؤتمتة بالهند. إن قرب منشآتنا يقلص المدد الزمنية للشحن البري والداخلي، ويحمي الشحنات من الرطوبة مع التجهيز والتحميل الفعلي على السفن في غضون 48 ساعة فقط من التعبئة."
    }
  }
];

export default function ContactSection({ onOpenInquiry, showOnlyFaq = false }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Bulk Cocoa/Grain Export Query');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const { language } = useLanguage();

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrMsg(
        language === 'hi' ? 'कृपया सबमिट करने से पहले सभी अनिवार्य मापदंडों को पूरा करें।'
          : language === 'gu' ? 'કૃપા કરીને સબમિટ કરતા પહેલા તમામ ખાલી જગ્યાઓ પૂરી કરો.'
            : language === 'ar' ? 'يرجى ملء كافة الخانات الإلزامية قبل النقر على زر الإرسال.'
              : 'Please fulfill all mandatory parameters before submitting.'
      );
      return;
    }

    setErrMsg('');
    setIsSending(true);

    const cleanEnvVar = (val: any) => val ? String(val).replace(/['"]/g, '').trim() : '';

    const serviceId = cleanEnvVar((import.meta as any).env.VITE_EMAILJS_SERVICE_ID) || 'service_2shfq1vin';
    const templateId = cleanEnvVar((import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID) || 'template_1k6vtq4';
    const publicKey = cleanEnvVar((import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY) || '0WbG-TDBYq_KXasPk';

    const templateParams = {
      to_email: 'satyamkadavla19@gmail.com',
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      formatted_data: `
Name: ${name}
Email: ${email}
Subject/Product of Interest: ${subject}
Message / Container specifications:
${message}
      `.trim()
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormSent(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setErrMsg(
          language === 'hi' ? 'संदेश भेजने में विफल। कृपया फिर से प्रयास करें।'
            : language === 'gu' ? 'સંદેશ મોકલવામાં નિષ્ફળ. કૃપા કરીને ફરીથી પ્રયાસ કરો.'
              : language === 'ar' ? 'فشل إرسال الاستفسار. يرجى المحاولة مرة أخرى.'
                : 'Failed to send message via EmailJS. Please try again.'
        );
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="py-16 bg-[#FDFBF7]/60 font-sans animate-fade-in relative overflow-hidden" id="contact_us_section">

      {/* Background design elements */}
      <div className="geometric-accent pointer-events-none opacity-[0.02]" />
      <div className="geometric-accent-left pointer-events-none opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[#C5A25D] font-bold tracking-widest text-xs uppercase mb-1.5 block">
            {showOnlyFaq
              ? (language === 'hi' ? 'सपोर्ट डेस्क और सहायता' : language === 'gu' ? 'સહાયતા અને પ્રશ્નો' : language === 'ar' ? 'الأسئلة الشائعة والدعم الفني' : 'Support Desk & Help')
              : (language === 'hi' ? 'ट्रेडिंग मुख्यालय' : language === 'gu' ? 'નિકાસ વ્યાપારી મુખ્ય મથક' : language === 'ar' ? 'المقر الإقليمي للتجارة والتوريد' : 'Trading Headquarters')
            }
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight leading-tight text-center">
            {showOnlyFaq
              ? (language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : language === 'gu' ? 'વારંવાર પૂછાતા પ્રશ્નો' : language === 'ar' ? 'الأسئلة الشائعة لاستيراد السلع' : 'Frequently Asked Questions')
              : (language === 'hi' ? 'आरएस ट्रेडिक्सो से संपर्क करें' : language === 'gu' ? 'Rs Tradixo સાથે સંપર્ક સ્થાપો' : language === 'ar' ? 'تواصل معنا - آر إس تريديكسو' : 'Get In Touch With Rs Tradixo')
            }
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm text-center">
            {showOnlyFaq
              ? (language === 'hi' ? 'गुणवत्ता मानदंडों, सीमा शुल्कों और लोडिंग समय कार्यक्रम के बारे में गहराई से विवरण।' : language === 'gu' ? 'નિકાસ ધોરણો, પોર્ટ સંચાલન અને કન્ટેનર લોડિંગ સંબંધી અતિ મહત્વપૂર્ણ પ્રશ્નો.' : language === 'ar' ? 'أجوبة متبادلة وتفاصيل دقيقة حول التجارة واللوجستيات بموانئ غوجارات وميناء موندرا بالهند.' : 'Essential answers regarding international quality metrics, trade procedures, and shipping channels.')
              : (language === 'hi' ? 'फ्रेट बुकिंग, खुदरा लेबलिंग उद्धरण और नमूना कार्गो के लिए हमारे गुजरात स्थित निर्यातक अधिकारियों से संपर्क करें।' : language === 'gu' ? 'શિપિંગ, કસ્ટમ બ્રાન્ડિંગ અને પરામર્શ માટે અમારા ગુજરાત સ્થિત નિકાસ અધિકારીઓનો સંપર્ક કરો.' : language === 'ar' ? 'تواصل مع مسؤولي عقود الشحن الدولي واللوجستيات والتعبئة المخصصة بموانئ غوجارات بالهند.' : 'Contact our Gujarat-based export officers for freight bookings, retail labeling quotes, and sample cargos.')
            }
          </p>
        </div>

        {/* Contact info grid - Only show form when showOnlyFaq is False */}
        {!showOnlyFaq && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-10 text-left">

            {/* Direct Address & Sourcing coordinates (Gilded Column) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-6">
                <h3 className="font-heading font-extrabold text-slate-800 text-xs uppercase tracking-widest border-l-2 border-[#C5A25D] pl-2.5 mb-4 text-left">
                  {language === 'hi' ? 'निर्यात व्यापार डेस्क' : language === 'gu' ? 'નિકાસ ટ્રેડિંગ ડેસ્ક' : language === 'ar' ? 'مكتب عقود التصدير' : 'Export Trading Desk'}
                </h3>

                <div className="bg-white rounded-lg border border-[#C5A25D]/25 p-6.5 space-y-7 shadow-[0_12px_24px_rgba(197,162,93,0.04)] relative overflow-hidden text-left before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-[#D4AF37] before:to-[#AA8B4C]">

                  {/* Address */}
                  <div className="flex gap-4 items-start text-left">
                    <div className="p-3 bg-gradient-to-br from-[#FDFBF7] to-[#F5ECE0] border border-[#C5A25D]/30 text-[#C5A25D] rounded-full shadow-sm shrink-0 flex items-center justify-center w-11 h-11">
                      <MapPin className="w-5 h-5 text-[#C5A25D] stroke-[1.8]" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1 text-left">
                        {language === 'hi' ? 'कॉर्पोरेट मुख्यालय' : language === 'gu' ? 'મુખ્ય રજિસ્ટર્ડ ઓફિસ' : language === 'ar' ? 'موقع المقر الرئيسي المعتمد' : 'Corporate Headquarters'}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-semibold text-left">{COMP_INFO.address}</p>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex gap-4 items-start text-left flex-wrap">
                    <div className="p-3 bg-gradient-to-br from-[#FDFBF7] to-[#F5ECE0] border border-[#C5A25D]/30 text-[#C5A25D] rounded-full shadow-sm shrink-0 flex items-center justify-center w-11 h-11">
                      <Mail className="w-5 h-5 text-[#C5A25D] stroke-[1.8]" />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <h4 className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1 text-left">
                        {language === 'hi' ? 'सीधा खरीद इनबॉक्स' : language === 'gu' ? 'સીધો ઇમેઇલ ડેસ્ક' : language === 'ar' ? 'البريد الإلكتروني المباشر' : 'Direct Procurement Inbox'}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed text-left truncate">
                        <a href={`mailto:${COMP_INFO.email}`} className="text-[#AA8B4C] hover:text-[#D4AF37] hover:underline font-bold text-left">{COMP_INFO.email}</a>
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 font-semibold text-left">
                        {language === 'hi' ? 'औसत प्रतिक्रिया समय: 4 घंटे' : language === 'gu' ? 'સરેરાશ પ્રત્યુત્તર સમય: ૪ કલાકથી ઓછો' : language === 'ar' ? 'معدل الاستجابة التلقائي: في غضون ٤ ساعات' : 'Average Sourcing Response: under 4 hours'}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start text-left">
                    <div className="p-3 bg-gradient-to-br from-[#FDFBF7] to-[#F5ECE0] border border-[#C5A25D]/30 text-[#C5A25D] rounded-full shadow-sm shrink-0 flex items-center justify-center w-11 h-11">
                      <Phone className="w-5 h-5 text-[#C5A25D] stroke-[1.8]" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1 text-left">
                        {language === 'hi' ? 'हॉटलाइन और व्हाट्सएप' : language === 'gu' ? 'સેલ્સ હોટલાઇન અને WhatsApp' : language === 'ar' ? 'الخط الساخن والواتساب' : 'Ports hot-line & WhatsApp'}
                      </h4>
                      <p className="text-slate-660 text-xs leading-relaxed font-bold font-mono text-left text-slate-800">{COMP_INFO.phone}</p>
                      <p className="text-[10px] text-slate-400 mt-1 font-medium text-left">
                        {language === 'hi' ? 'भारत के बाहर से संपर्क कर रहे हैं? व्हाट्सएप का उपयोग करें।' : language === 'gu' ? 'ભારત બહારથી કોલિંગ? વોટ્સએપનો સહારો લો.' : language === 'ar' ? 'للاتصال الدولي المباشر؟ يرجى استخدام تفاعلات واتساب.' : 'Calling from outside India? Use WhatsApp dialers.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Quality Note Badging */}
              <div className="hidden lg:block bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-lg p-6 border border-[#C5A25D]/45 shadow-sm text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D4AF37]/5 to-[#AA8B4C]/5 rounded-full filter blur-xl" />
                <h4 className="font-heading font-extrabold text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-2">B2B Trade Guarantee</h4>
                <p className="text-[11px] leading-relaxed text-slate-300 font-medium">
                  We fulfill customized packaging specifications and independent laboratory requirements (such as SGS / Geo-Chem) direct at primary ocean vessel loading ports in Gujarat, ensuring flawless contract executions.
                </p>
              </div>
            </div>

            {/* Premium Gilded Contact Form */}
            <div className="lg:col-span-8 bg-white border border-[#C5A25D]/25 rounded-lg p-7 sm:p-9 shadow-[0_20px_45px_-16px_rgba(197,162,93,0.06),0_1px_2px_rgba(197,162,93,0.1)] text-left relative overflow-hidden flex flex-col justify-between">
              {/* Decorative gold glowing top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#C5A25D] to-[#AA8B4C]" />

              {formSent ? (
                <div className="py-16 flex flex-col justify-center items-center text-center my-auto">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FDFBF7] to-[#F5ECE0] text-[#C5A25D] rounded-full flex items-center justify-center mb-5 border border-[#C5A25D]/30 shadow-md">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">
                    {language === 'hi' ? 'संदेश सफलतापूर्वक प्राप्त हुआ' : language === 'gu' ? 'સંદેશા સફળતાપૂર્વક મોકલવામાં આવ્યો' : language === 'ar' ? 'تم استلام وتوجيه الرسالة بنجاح' : 'Message Successfully Sourced'}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 text-center">
                    {language === 'hi' ? 'धन्यवाद। आपका संदेश सीधे हमारे निर्यात और समन्वय डेस्क पर भेज दिया गया है। हम 4 व्यावसायिक घंटों के भीतर जवाब देंगे।' : language === 'gu' ? 'આભાર. તમારો સંદેશો અમારા એક્સપોર્ટ ડેસ્ક ઓનલાઇન ઇનબોક્સમાં મોકલાયો છે. અમે ૪ કલાકમાં સંપર્ક કરીશું.' : language === 'ar' ? 'شكراً لكم. لقد تم توجيه طلبكم مباشرة إلى مكتب التخليص واللوجستيات وسيتم الرد عليكم في غضون ٤ ساعات عمل.' : 'Thank you. Your message has been routed directly to our export and logistics coordination desk. We will respond within 4 business hours.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSent(false)}
                    className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A25D] hover:from-[#E2C578] hover:to-[#C5A25D] text-slate-950 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#AA8B4C]/30 shadow-md"
                  >
                    {language === 'hi' ? 'दूसरा संदेश भेजें' : language === 'gu' ? 'બીજો સંદેશ લખો' : language === 'ar' ? 'إرسال استفسار آخر' : 'Issue another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 text-left my-auto">
                  <div>
                    <h3 className="font-heading font-extrabold text-slate-900 text-base uppercase tracking-wider text-left border-b border-slate-100 pb-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#C5A25D]" />
                      {language === 'hi' ? 'हमें एक त्वरित संदेश भेजें' : language === 'gu' ? 'ઝડપી સંદેશો લખો' : language === 'ar' ? 'أرسل استفسارك التجاري الفوري' : 'Drop us a swift message'}
                    </h3>
                  </div>

                  {errMsg && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-sm text-xs text-red-500 font-semibold font-sans flex items-center gap-2 text-left animate-fade-in">
                      <ShieldAlert className="w-4 h-4 shrink-0" /> {errMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                    <div className="text-left">
                      <label className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1.5 text-left">
                        {language === 'hi' ? 'प्रतिनिधि का पूरा नाम *' : language === 'gu' ? 'પ્રતિનિધિનું પૂરૂ નામ *' : language === 'ar' ? 'اسم ممثل الموزع / المشتري كاملاً *' : 'Full Representative Name *'}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full bg-[#FDFBF7]/50 hover:bg-white focus:bg-white rounded-md border border-slate-200/90 text-xs p-3 h-11 focus:outline-none focus:ring-2 focus:ring-[#C5A25D]/25 focus:border-[#C5A25D] transition-all font-sans font-medium text-slate-800 text-left"
                      />
                    </div>

                    <div className="text-left">
                      <label className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1.5 text-left">
                        {language === 'hi' ? 'कॉर्पोरेट ट्रेडिंग ईमेल *' : language === 'gu' ? 'વ્યાપારી ઓફિશિયલ ઇમેઇલ *' : language === 'ar' ? 'البريد الإلكتروني للشركة المشترية *' : 'Corporate Trading Email *'}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. procurement@tradecorp.com"
                        className="w-full bg-[#FDFBF7]/50 hover:bg-white focus:bg-white rounded-md border border-slate-200/90 text-xs p-3 h-11 focus:outline-none focus:ring-2 focus:ring-[#C5A25D]/25 focus:border-[#C5A25D] transition-all font-sans font-medium text-slate-800 text-left"
                      />
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1.5 text-left">
                      {language === 'hi' ? 'रुचि का व्यापारिक उत्पाद *' : language === 'gu' ? 'પસંદગીનું નિકાસ ઉત્પાદન *' : language === 'ar' ? 'تحديد صنف محصول الاستيراد المطلوب *' : 'Trading Parameter of Interest *'}
                    </label>
                    <div className="relative">
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#FDFBF7]/30 hover:bg-white focus:bg-white rounded-md border border-slate-200/90 text-xs p-3 h-11 focus:outline-none focus:ring-2 focus:ring-[#C5A25D]/25 focus:border-[#C5A25D] transition-all font-sans font-semibold text-slate-800 text-left cursor-pointer appearance-none"
                      >
                        <option value="Java Peanuts bulk quote">🥜 {language === 'hi' ? 'मूंगफली दाने जावा ग्रेड कोट' : language === 'gu' ? 'મગફળી જાવા ગ્રેડ ભાવ' : language === 'ar' ? 'عرض سعر فستق जावा كرنيلز' : 'Groundnut Kernels Java grade quote'}</option>
                        <option value="Bold Peanuts bulk quote">🥜 {language === 'hi' ? 'मूंगफली दाने बोल्ड ग्रेड कोट' : language === 'gu' ? 'મગફળી બોલ્ડ ગ્રેડ ભાવ' : language === 'ar' ? 'عرض سعر فستق बोल्ट كرنيلز' : 'Groundnut Kernels Bold grade quote'}</option>
                        <option value="Basmati Rice CIF quote">🌾 {language === 'hi' ? 'प्रीमियम बासमती चावल सीआईएफ कोट' : language === 'gu' ? 'પ્રીમિયમ બાસમતી ચોખા CIF ભાવ' : language === 'ar' ? 'طلب عرض سعر أرز بسمتي سيلا هندي مميز cIF' : 'Premium aromatic Basmati Rice quote'}</option>
                        <option value="Non-Basmati Rice bulk tender">🌾 {language === 'hi' ? 'गैर-बासमती चावल थोक कोट' : language === 'gu' ? 'નોન-બાસમતી ચોખા બલ્ક ટેન્ડર' : language === 'ar' ? 'تصدير كميات ضخمة أرز غير بسمتي' : 'Versatile Non-Basmati Rice bulk quote'}</option>
                        <option value="Packaging customization support">🛳️ {language === 'hi' ? 'पैकेजिंग कस्टमाइजेशन और ब्रांड प्रिंटिंग' : language === 'gu' ? 'પેકેજિંગ અને બ્રાન્ડ પ્રિન્ટિંગ' : language === 'ar' ? 'تعديل التعبئة وضبط العلامة التجارية' : 'Packaging and brand custom printing'}</option>
                      </select>
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold text-[9px]">▼</span>
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1.5 text-left">
                      {language === 'hi' ? 'कंटेनर लोड, गंतव्य बंदरगाह और विनिर्देशों का वर्णन करें *' : language === 'gu' ? 'કન્ટેનર લોડ, લક્ષ્ય બંદર અને વિગતવાર માહિતી લખો *' : language === 'ar' ? 'يرجى تقديم تفاصيل الكمية والحاويات المطلوبة والموانئ وشروط التسليم (FOB/CIF) *' : 'Describe your required container load, target port & specifications *'}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === 'hi' ? "कंटेनर विनिर्देश प्रदान करें (जैसे 25 किग्रा बैग, 5% अधिकतम टूटे दाने, एसजीएस सत्यापन, एफओबी/सीआईएफ गंतव्य बंदरगाह)..."
                          : language === 'gu' ? "કન્ટેનર સાઇઝ અને પેકેજિંગ પ્રકારોની વિગતો આપો (જેમ કે ૨૫ કિલો થેલા, SGS પ્રમાણપત્ર અથવા FOB)..."
                            : language === 'ar' ? "يرجى كتابة شروط التعبئة (مثلاً أكياس ٢٥ كجم، ٢٥٪ أرز كسر ليمت، موانئ التفريغ الجمركي، فحص SGS الخ)..."
                              : "Provide container specs (such as 25kg bags, 5% max broken grains, SGS verification, FOB/CIF destination)..."
                      }
                      className="w-full bg-[#FDFBF7]/50 hover:bg-white focus:bg-white rounded-md border border-slate-200/90 text-xs p-3 focus:outline-none focus:ring-2 focus:ring-[#C5A25D]/25 focus:border-[#C5A25D] transition-all font-sans text-left text-slate-800"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center pt-2 gap-4 text-left">
                    <span className="text-[10px] text-slate-450 font-sans italic flex items-center gap-1.5 leading-normal font-semibold text-left">
                      <Clock className="w-4 h-4 text-[#C5A25D]" />
                      <span>{language === 'hi' ? 'डेस्क सक्रिय समय: 09:00 - 18:30 (IST)' : language === 'gu' ? 'ઓફિસ ડેસ્ક સમય: 09:00 - 18:30 (IST)' : language === 'ar' ? 'ساعات عمل الدعم الفيدرالي: ٠٩:٠๐ إلى ١٨:٣٠ بتوقيت الهند' : 'India Sourcing Hub Desk live response hours: 09:00 - 18:30 (IST)'}</span>
                    </span>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#C5A25D] to-[#AA8B4C] hover:from-[#E2C578] hover:to-[#C5A25D] text-slate-950 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_16px_rgba(197,162,93,0.3)] hover:shadow-[0_6px_22px_rgba(197,162,93,0.45)] cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap border border-[#AA8B4C]/45 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          {language === 'hi' ? 'भेज रहा है...' : language === 'gu' ? 'મોકલી રહ્યું છે...' : language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 shrink-0 text-slate-950" />
                          {language === 'hi' ? 'संदेश भेजें' : language === 'gu' ? 'સંદેશ મોકલો' : language === 'ar' ? 'أرسل الطلب الآن' : 'Send Message'}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        )}

        {/* B2B Sourcing Trade FAQ (Only show on FAQ page tab state where showOnlyFaq === true) */}
        {showOnlyFaq && (
          <div className="bg-white border border-[#C5A25D]/25 rounded-lg p-6 sm:p-10 shadow-[0_8px_30px_rgba(197,162,93,0.04)] text-left max-w-4xl mx-auto" id="trading_faq">
            {/* This is vertically stacked line-by-line single-column layout for modern laptop screens */}
            <div className="space-y-4 max-w-3xl mx-auto text-left w-full">
              {FAQ_ITEMS.map((faq, idx) => {
                const qText = faq.q[language as 'en' | 'hi' | 'gu' | 'ar'] || faq.q.en;
                const aText = faq.a[language as 'en' | 'hi' | 'gu' | 'ar'] || faq.a.en;
                return (
                  <div
                    key={idx}
                    onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                    className={`p-5 rounded-lg border transition-all duration-250 cursor-pointer text-left w-full ${openFaqIdx === idx ? 'bg-[#FDFBF7] border-[#C5A25D] shadow-sm' : 'bg-[#F9FAFB] hover:bg-white border-slate-200/90'}`}
                  >
                    <div className="flex justify-between items-center gap-3 text-left">
                      <h4 className="font-heading font-extrabold text-[#C5A25D] text-xs sm:text-sm tracking-wide leading-snug text-left select-none">
                        {qText}
                      </h4>
                      <span className="text-[#C5A25D]/75 font-bold text-xs select-none shrink-0">{openFaqIdx === idx ? '▲' : '▼'}</span>
                    </div>

                    {openFaqIdx === idx && (
                      <p className="text-slate-600 text-xs leading-relaxed font-sans mt-3 border-t border-slate-150/50 pt-3 font-semibold text-left">
                        {aText}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
