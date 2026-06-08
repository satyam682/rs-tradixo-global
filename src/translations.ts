/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TranslationDictionary {
  // Navigation / Header
  nav_home: string;
  nav_about: string;
  nav_products: string;
  nav_markets: string;
  nav_certifications: string;
  nav_faq: string;
  nav_contact: string;
  header_live_desk: string;
  header_berth_active: string;
  header_clock_label: string;
  header_direct_desk: string;
  btn_get_fob_quote: string;
  trade_languages: string;
  incoterms_compliant: string;
  office_hours: string;
  sourcing_desk: string;

  // Hero Section
  hero_tagline: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_location: string;
  hero_shipping_info: string;
  btn_explore_products: string;
  btn_export_inquiry: string;
  hero_serving_markets: string;
  hero_stat_tonnage: string;
  hero_stat_tonnage_label: string;
  hero_stat_safety: string;
  hero_stat_safety_label: string;
  hero_stat_channels: string;
  hero_stat_channels_label: string;
  hero_stat_proximity: string;
  hero_stat_proximity_label: string;
  hero_operational_excellence: string;
  hero_mundra_proximity_tag: string;

  // Home Overview
  home_ov_tag: string;
  home_ov_title: string;
  home_ov_p1: string;
  home_ov_p2: string;
  home_ov_box1_title: string;
  home_ov_box1_desc: string;
  home_ov_box2_title: string;
  home_ov_box2_desc: string;
  home_ov_box3_title: string;
  home_ov_box3_desc: string;
  home_ov_btn_learn_more: string;
  home_ov_btn_quick_whatsapp: string;

  // Product Catalog
  prod_cat_tag: string;
  prod_cat_title: string;
  prod_cat_desc: string;
  prod_cat_all: string;
  prod_cat_peanuts: string;
  prod_cat_rice: string;
  prod_cat_spices: string;
  prod_cat_agro: string;
  prod_specs_title: string;
  prod_packing_title: string;
  prod_benefits_title: string;
  btn_inquire_commercials: string;
  product_card_ready: string;
  product_card_inquire: string;

  // Export Markets
  markets_tag: string;
  markets_title: string;
  markets_desc: string;
  markets_btn_sourcing: string;
  markets_active_channels: string;
  transit_advantage_label: string;
  key_demands_label: string;

  // Certifications
  cert_tag: string;
  cert_title: string;
  cert_desc: string;
  cert_auth_label: string;
  cert_purpose_label: string;

  // Contact / FAQ Desk
  contact_tag: string;
  contact_title: string;
  contact_desc: string;
  contact_faq_title: string;
  form_full_name: string;
  form_company_name: string;
  form_corporate_email: string;
  form_phone: string;
  form_destination: string;
  form_commodity: string;
  form_target_qty: string;
  form_packing: string;
  form_additional_needs: string;
  btn_send_inquiry: string;
  contact_info_title: string;
  contact_address_label: string;
  contact_hours_val: string;

  // Inquiry Modal Generic / Success
  modal_title: string;
  modal_prompt_desc: string;
  modal_success_title: string;
  modal_success_desc: string;
  modal_reference: string;
  modal_simulated_record: string;
  modal_buyer: string;
  modal_product: string;
  modal_req_qty: string;
  modal_pack_spec: string;
  modal_indicative_fob: string;
  modal_caution_disclaimer: string;
  btn_close_window: string;
  btn_print_copy: string;
  calc_title: string;
  btn_show_estimation: string;
  btn_hide_estimation: string;
}

export const TRANSLATIONS: Record<string, TranslationDictionary> = {
  en: {
    nav_home: 'Home',
    nav_about: 'Company Story',
    nav_products: 'Our Products',
    nav_markets: 'Global Reach',
    nav_certifications: 'Certifications',
    nav_faq: 'FAQ / Help',
    nav_contact: 'Contact Desk',
    header_live_desk: 'LIVE EXPORT DESK ACTIVE',
    header_berth_active: 'Mundra Port Loading: Berth 12 & 14 Active',
    header_clock_label: 'India Sourcing Center Clock:',
    header_direct_desk: 'Direct Desk:',
    btn_get_fob_quote: 'Get FOB Quote',
    trade_languages: 'Trade Languages',
    incoterms_compliant: 'Incoterms Compliant',
    office_hours: 'Office Hours:',
    sourcing_desk: 'Sourcing Desk India',

    hero_tagline: 'Excellence in every export.',
    hero_title_1: 'Trusted Exporter',
    hero_title_2: 'from India',
    hero_subtitle: 'Delivering premium quality agricultural products worldwide. Rest assured of certified food safety, rigorous pre-loading SGS screenings, and optimized maritime logistics.',
    hero_location: 'Located in Gujarat (Gateway to Mundra Port)',
    hero_shipping_info: 'Daily Customs clearance & packaging active',
    btn_explore_products: 'Explore Our Products',
    btn_export_inquiry: 'Export Inquiry',
    hero_serving_markets: 'Serving Primary Markets Across UAE, Vietnam, & Indonesia',
    hero_stat_tonnage: '15k+ MT',
    hero_stat_tonnage_label: 'Tonnage Exported',
    hero_stat_safety: '100%',
    hero_stat_safety_label: 'IEC & SGS Safe',
    hero_stat_channels: '11+',
    hero_stat_channels_label: 'Global Sourcing lanes',
    hero_stat_proximity: '0% Delay',
    hero_stat_proximity_label: 'Near Mundra Port',
    hero_operational_excellence: 'Operational Excellence',
    hero_mundra_proximity_tag: 'Strategically Located Near Mundra Port CY-18A',

    home_ov_tag: 'Sourcing & Supply Chain Pioneers',
    home_ov_title: 'From Gujarat Agricultural Heartland to Global Seaports',
    home_ov_p1: 'Rs Tradixo Global stands as a leading agricultural commodities exporter established in Gujarat. We bridge local farming communities with bulk international buyers across the Middle East, South East Asia, and European regions.',
    home_ov_p2: 'By operating near Mundra Port, we maintain complete control over storage moisture, custom packaging, phytosanitary certifications, and rapid container load outs.',
    home_ov_box1_title: 'Direct Farmer Partnerships',
    home_ov_box1_desc: 'Sourcing directly from the rich farm belts of Kutch, Saurashtra, and Northern Gujarat for highly competitive Pricing & Traceability.',
    home_ov_box2_title: 'State-of-the-Art Processing',
    home_ov_box2_desc: 'Undergoing mechanical sorting, color sorting, and grading to guarantee compliance with premium standards.',
    home_ov_box3_title: 'Quality Inspection Reports',
    home_ov_box3_desc: 'Ensuring every single shipment carries independent quality endorsements to protect buyer financial transfers.',
    home_ov_btn_learn_more: 'Learn Our Story & standards →',
    home_ov_btn_quick_whatsapp: 'Quick Sourcing WhatsApp',

    prod_cat_tag: '100% Export Compliant Crops',
    prod_cat_title: 'Our Export Range & Commodities',
    prod_cat_desc: 'Explore the specific technical grades, dimensions, and custom packing specs of our premium bulk offerings.',
    prod_cat_all: 'All Commodities',
    prod_cat_peanuts: '🥜 Premium Peanuts',
    prod_cat_rice: '🌾 Sella & Basmati Rice',
    prod_cat_spices: '🌶️ Indian Spices',
    prod_cat_agro: '🌱 Agro Commodities',
    prod_specs_title: 'Technical Specifications Sheet',
    prod_packing_title: 'Container Packaging Selections',
    prod_benefits_title: 'Certified Benefits',
    btn_inquire_commercials: 'Inquire Commercial Terms & FOB Quote',
    product_card_ready: 'configuration ready',
    product_card_inquire: 'Inquire Quote →',

    markets_tag: 'Worldwide Trade Reach',
    markets_title: 'Feeding Global Markets from Jebel Ali to South East Asia',
    markets_desc: 'Our commercial reach spans primary trading lanes, feeding processors, distributors, and bulk consumer chains across the UAE, Vietnam, Malaysia, Indonesia, and Gulf region countries. We handle all international custom document demands under absolute legal speed.',
    markets_btn_sourcing: 'Explore Sourcing Channels',
    markets_active_channels: 'Primary Export Channels (Verified Ports)',
    transit_advantage_label: 'Transit & Custom Advantage:',
    key_demands_label: 'Primary Export Commodities:',

    cert_tag: 'Global Standardizations',
    cert_title: 'Accredited Food Safety & Custom Compliance',
    cert_desc: 'We are fully authorized and certified to handle cross-border food grains loading. High quality export standardizations are strictly verified by federal authorities.',
    cert_auth_label: 'Certifying Authority:',
    cert_purpose_label: 'Customs & Port Purpose:',

    contact_tag: 'Connect Internationally',
    contact_title: 'Corporate HQ & Port Logistics Desk',
    contact_desc: 'Need custom branding, moisture control limits, or a CIF price matrix? Speak with our multi-lingual mercantile traders today.',
    contact_faq_title: 'Frequently Requested Trade Term Questions',
    form_full_name: 'Your Full Name *',
    form_company_name: 'Company Registered Name *',
    form_corporate_email: 'Corporate Email *',
    form_phone: 'Phone & Country Code *',
    form_destination: 'Destination Port / Country *',
    form_commodity: 'Commodity of Interest *',
    form_target_qty: 'Target Quantity *',
    form_packing: 'Packaging Option Specialty *',
    form_additional_needs: 'Specific Specifications / Logistics Needs',
    btn_send_inquiry: 'Issue Inquiry',
    contact_info_title: 'Rs Tradixo Sourcing Hotlines',
    contact_address_label: 'Administrative Office & Loading Warehouse',
    contact_hours_val: '09:00 - 18:30 (Sourcing Desk India) Mon - Sat',

    modal_title: 'Request Export Quotation',
    modal_prompt_desc: 'Connect with our international logistics desk in Gujarat. Get customized cargo terms (FOB, CFR, CIF) and premium packaging selections tailored for your country.',
    modal_success_title: 'Inquiry Successfully Lodged',
    modal_success_desc: 'Thank you, your trade proposal has been recorded. Our commercial officer will email you with formal FOB quotes shortly.',
    modal_reference: 'TRAD-',
    modal_simulated_record: 'Simulated Inquiry Record',
    modal_buyer: 'Buyer:',
    modal_product: 'Product:',
    modal_req_qty: 'Required Quantity:',
    modal_pack_spec: 'Packaging Spec:',
    modal_indicative_fob: 'Indicative FOB Mundra:',
    modal_caution_disclaimer: '*Indicative estimates subject to actual market prices and custom loading terms.',
    btn_close_window: 'Close Window',
    btn_print_copy: 'Print Copy',
    calc_title: 'Indicative B2B Cost Estimations (FOB India)',
    btn_show_estimation: 'Show Estimation',
    btn_hide_estimation: 'Hide Calculator',
  },
  hi: {
    nav_home: 'होम / मुख्य पृष्ठ',
    nav_about: 'कंपनी की कहानी',
    nav_products: 'हमारे उत्पाद',
    nav_markets: 'वैश्विक पहुंच',
    nav_certifications: 'प्रमाणपत्र',
    nav_faq: 'अक्सर पूछे जाने वाले प्रश्न',
    nav_contact: 'सम्पर्क डेस्क',
    header_live_desk: 'लाइव निर्यात डेस्क सक्रिय',
    header_berth_active: 'मुंद्रा पोर्ट लोडिंग: बर्थ 12 और 14 सक्रिय',
    header_clock_label: 'भारत सोर्सिंग सेंटर घड़ी:',
    header_direct_desk: 'सीधा संपर्क:',
    btn_get_fob_quote: 'एफओबी मूल्य प्राप्त करें',
    trade_languages: 'व्यापार भाषा',
    incoterms_compliant: 'इन्कोटर्म्स अनुपालन',
    office_hours: 'कार्यालय की अवधि:',
    sourcing_desk: 'सोर्सिंग डेस्क भारत',

    hero_tagline: 'हर निर्यात में उत्कृष्टता।',
    hero_title_1: 'भारत से विश्वसनीय',
    hero_title_2: 'निर्यातक',
    hero_subtitle: 'दुनिया भर में प्रीमियम गुणवत्ता वाले कृषि उत्पादों का निर्यात। एफएसएसएआई प्रमाणित खाद्य सुरक्षा, कठोर लोड-पूर्व एसजीएस स्क्रीनिंग और कुशल समुद्री रसद।',
    hero_location: 'गुजरात में स्थित (मुंद्रा पोर्ट का प्रवेश द्वार)',
    hero_shipping_info: 'दैनिक सीमा शुल्क निकासी और पैकेजिंग चालू',
    btn_explore_products: 'उत्पाद सूची देखें',
    btn_export_inquiry: 'निर्यात पूछताछ',
    hero_serving_markets: 'संयुक्त अरब अमीरात, वियतनाम और इंडोनेशिया में हमारे प्राथमिक बाजार',
    hero_stat_tonnage: '१५,०००+ टन',
    hero_stat_tonnage_label: 'निर्यातित माल',
    hero_stat_safety: '१००%',
    hero_stat_safety_label: 'आईईसी और एसजीएस सुरक्षित',
    hero_stat_channels: '११+',
    hero_stat_channels_label: 'वैश्विक सोर्सिंग लेन',
    hero_stat_proximity: '०% देरी',
    hero_stat_proximity_label: 'मुंद्रा पोर्ट के पास',
    hero_operational_excellence: 'परिचालन उत्कृष्टता',
    hero_mundra_proximity_tag: 'मुंद्रा पोर्ट सीवाइ-१८ए के पास रणनीतिक रूप से स्थित',

    home_ov_tag: 'सोर्सिंग और आपूर्ति श्रृंखला अग्रणी',
    home_ov_title: 'गुजरात कृषि क्षेत्र से वैश्विक समुद्री बंदरगाहों तक',
    home_ov_p1: 'Rs Tradixo Global गुजरात में स्थापित एक प्रमुख कृषि वस्तु निर्यातक है। हम स्थानीय कृषि समुदायों को मध्य पूर्व, दक्षिण पूर्व एशिया और यूरोपीय क्षेत्रों के थोक खरीदारों से जोड़ते हैं।',
    home_ov_p2: 'मुंद्रा पोर्ट के पास काम करके, हम नमी नियंत्रण, कस्टम पैकेजिंग, वनस्पति-स्वच्छता प्रमाणपत्र और तेजी से कंटेनर लोडिंग पर पूर्ण नियंत्रण रखते हैं।',
    home_ov_box1_title: 'सीधे किसान साझेदारी',
    home_ov_box1_desc: 'प्रतिस्पर्धी मूल्य निर्धारण और ट्रेसेबिलिटी के लिए कच्छ, सौराष्ट्र और उत्तरी गुजरात के समृद्ध कृषि क्षेत्रों से सीधे सोर्सिंग।',
    home_ov_box2_title: 'अत्याधुनिक प्रसंस्करण',
    home_ov_box2_desc: 'प्रीमियम मानकों के अनुपालन की गारंटी के लिए यांत्रिक छँटाई, रंग छँटाई और ग्रेडिंग प्रक्रिया।',
    home_ov_box3_title: 'एसजीएस / जियो-केम ऑडिटेड',
    home_ov_box3_desc: 'खरीदार के वित्तीय लेन-देन की सुरक्षा के लिए प्रत्येक शिपमेंट में स्वतंत्र प्रयोगशाला गुणवत्ता प्रमाणीकरण।',
    home_ov_btn_learn_more: 'हमारे मानकों और कहानी जानिए →',
    home_ov_btn_quick_whatsapp: 'व्हाट्सएप त्वरित पूछताछ',

    prod_cat_tag: '१००% निर्यात अनुपालन फसलें',
    prod_cat_title: 'हमारी निर्यात श्रृंखला और वस्तुएं',
    prod_cat_desc: 'हमारे प्रीमियम थोक प्रस्तावों के तकनीकी ग्रेड, आकार और कस्टम पैकिंग विशिष्टताओं का अन्वेषण करें।',
    prod_cat_all: 'सभी वस्तुएं',
    prod_cat_peanuts: '🥜 प्रीमियम मूंगफली',
    prod_cat_rice: '🌾 सेला और बासमती चावल',
    prod_cat_spices: '🌶️ भारतीय मसाले',
    prod_cat_agro: '🌱 कृषि जिंसों',
    prod_specs_title: 'तकनीकी विशिष्टता पत्रक',
    prod_packing_title: 'कंटेनर पैकेजिंग विकल्प',
    prod_benefits_title: 'प्रमाणित लाभ',
    btn_inquire_commercials: 'व्यावसायिक शर्तों और कीमत की जांच करें',
    product_card_ready: 'पैकेजिंग कॉन्फ़िगरेशन तैयार',
    product_card_inquire: 'पूछताछ करें →',

    markets_tag: 'विश्वव्यापी व्यापार पहुंच',
    markets_title: 'जेबेल अली से दक्षिण पूर्व एशिया तक वैश्विक खाद्य आपूर्ति',
    markets_desc: 'हमारी व्यावसायिक पहुंच प्राथमिक व्यापारिक मार्गों तक फैली हुई है, जो संयुक्त अरब अमीरात, वियतनाम, मलेशिया, इंडोनेशिया और खाड़ी देशों में वितरकों और थोक उपभोक्ता श्रृंखलाओं को आपूर्ति करती है। हम सभी सीमा शुल्क दस्तावेज़ीकरण को तेज गति से संभालते हैं।',
    markets_btn_sourcing: 'सोर्सिंग चैनलों का अन्वेषण करें',
    markets_active_channels: 'प्राथमिक निर्यात चैनल (सत्यापित बंदरगाह)',
    transit_advantage_label: 'शिपिंग और सीमा शुल्क लाभ:',
    key_demands_label: 'प्राथमिक निर्यात वस्तुएं:',

    cert_tag: 'वैश्विक मानकीकरण',
    cert_title: 'खाद्य सुरक्षा और सीमा शुल्क अनुपालन',
    cert_desc: 'हम कृषि वस्तुओं के निर्यात के लिए पूरी तरह से अधिकृत और प्रमाणित हैं। उच्च गुणवत्ता वाले निर्यात मानकों को संघीय अधिकारियों द्वारा कड़ाई से सत्यापित किया जाता है।',
    cert_auth_label: 'प्रमाणन प्राधिकरण:',
    cert_purpose_label: 'सीमा शुल्क और बंदरगाह उद्देश्य:',

    contact_tag: 'अंतरराष्ट्रीय स्तर पर जुड़ें',
    contact_title: 'कॉर्पोरेट मुख्यालय और पोर्ट रसद डेस्क',
    contact_desc: 'कस्टम ब्रांडिंग, नमी नियंत्रण सीमा, या सीआईएफ दर सूची चाहिए? आज ही हमारे बहुभाषी व्यापारियों से बात करें।',
    contact_faq_title: 'अक्सर पूछे जाने वाले व्यापारिक प्रश्न',
    form_full_name: 'आपका पूरा नाम *',
    form_company_name: 'पंजीकृत कंपनी का नाम *',
    form_corporate_email: 'कॉर्पोरेट ईमेल *',
    form_phone: 'फोन नंबर और देश कोड *',
    form_destination: 'गंतव्य बंदरगाह / देश *',
    form_commodity: 'रुचि का कृषि उत्पाद *',
    form_target_qty: 'लक्षित मात्रा (मीट्रिक टन) *',
    form_packing: 'पैकेजिंग विकल्प विशेषता *',
    form_additional_needs: 'विशिष्ट तकनीकी मानक / रसद आवश्यकताएं',
    btn_send_inquiry: 'पूछताछ भेजें',
    contact_info_title: 'Rs Tradixo सोर्सिंग हॉटलाइन',
    contact_address_label: 'प्रशासकीय कार्यालय एवं लोडिंग गोदाम',
    contact_hours_val: '09:00 - 18:30 (सोर्सिंग डेस्क भारत) सोमवार - शनिवार',

    modal_title: 'निर्यात उद्धरण अनुरोध',
    modal_prompt_desc: 'गुजरात में हमारे अंतर्राष्ट्रीय रसद डेस्क से जुड़ें। अपने देश के अनुकूल अनुकूलित कार्गो शर्तें (FOB, CFR, CIF) और प्रीमियम पैकेजिंग चयन प्राप्त करें।',
    modal_success_title: 'पूछताछ सफलतापूर्वक दर्ज की गई',
    modal_success_desc: 'धन्यवाद, आपका व्यापार प्रस्ताव दर्ज कर लिया गया है। हमारे वाणिज्यिक अधिकारी जल्द ही आपको औपचारिक मूल्य भेजेंगे।',
    modal_reference: 'TRAD-',
    modal_simulated_record: 'सिम्युलेटेड पूछताछ रिकॉर्ड',
    modal_buyer: 'खरीदार:',
    modal_product: 'उत्पाद:',
    modal_req_qty: 'आवश्यक मात्रा:',
    modal_pack_spec: 'पैकेजिंग स्पेक:',
    modal_indicative_fob: 'सांकेतिक एफओबी मुंद्रा मूल्य:',
    modal_caution_disclaimer: '*सांकेतिक अनुमान वास्तविक बाजार कीमतों और कस्टम लोडिंग शर्तों के अधीन हैं।',
    btn_close_window: 'खिड़की बंद करें',
    btn_print_copy: 'कॉपी प्रिंट करें',
    calc_title: 'सांकेतिक लागत गणना (एफओबी इंडिया)',
    btn_show_estimation: 'अनुमान दिखाएं',
    btn_hide_estimation: 'कैलकुलेटर छुपाएं',
  },
  gu: {
    nav_home: 'મુખ્ય પૃષ્ઠ',
    nav_about: 'કંપનીની વાર્તા',
    nav_products: 'અમારા ઉત્પાદનો',
    nav_markets: 'વૈશ્વિક પહોંચ',
    nav_certifications: 'પ્રમાણપત્રો',
    nav_faq: 'પ્રશ્નોત્તરી',
    nav_contact: 'સંપર્ક ડેસ્ક',
    header_live_desk: 'લાઇવ નિકાસ ડેસ્ક સક્રિય',
    header_berth_active: 'મુન્દ્રા પોર્ટ લોડિંગ: બર્થ ૧૨ અને ૧૪ સક્રિય',
    header_clock_label: 'ભારત સોર્સિંગ સેન્ટર ઘડિયાળ:',
    header_direct_desk: 'સીધો સંપર્ક:',
    btn_get_fob_quote: 'FOB ભાવ મેળવો',
    trade_languages: 'વ્યાપાર ભાષા',
    incoterms_compliant: 'ઇનકોટર્મ્સ સુસંગત',
    office_hours: 'ઓફિસ સમય:',
    sourcing_desk: 'નિકાસ ડેસ્ક ભારત',

    hero_tagline: 'દરેક નિકાસમાં શ્રેષ્ઠતા.',
    hero_title_1: 'ભારતથી વિશ્વસનીય',
    hero_title_2: 'નિકાસકાર',
    hero_subtitle: 'વિશ્વભરમાં પ્રીમિયમ ગુણવત્તાવાળા કૃષિ ઉત્પાદનોની નિકાસ. FSSAI પ્રમાણિત અન્ન સુરક્ષા, કડક લોડિંગ-પૂર્વે SGS પરીક્ષણ અને મજબૂત રજિસ્ટર્ડ નિકાસ રसद.',
    hero_location: 'ગુજરાતમાં આવેલું (મુન્દ્રા પોર્ટનું પ્રવેશદ્વાર)',
    hero_shipping_info: 'દૈનિક કસ્ટમ્સ ક્લિયરન્સ અને પેકેજિંગ ચાલુ',
    btn_explore_products: 'ઉત્પાદનો જુઓ',
    btn_export_inquiry: 'નિકાસ પૂછપરછ',
    hero_serving_markets: 'યુએઈ, વિયેતનામ અને ઇન્ડોનેશિયામાં અમારા પ્રાથમિક બજારો',
    hero_stat_tonnage: '૧૫,૦૦૦+ ટન',
    hero_stat_tonnage_label: 'નિકાસ કરેલ જથ્થો',
    hero_stat_safety: '૧૦૦%',
    hero_stat_safety_label: 'IEC અને SGS સુરક્ષિત',
    hero_stat_channels: '૧૧+',
    hero_stat_channels_label: 'વૈશ્વિક બજાર લેન',
    hero_stat_proximity: '૦% વિલંબ',
    hero_stat_proximity_label: 'મુન્દ્રા પોર્ટ નજીક',
    hero_operational_excellence: 'ઓપરેશનલ શ્રેષ્ઠતા',
    hero_mundra_proximity_tag: 'મુન્દ્રા પોર્ટ CY-18A ની નજીક વ્યૂહાત્મક રીતે સ્થિત',

    home_ov_tag: 'સોર્સિંગ અને સપ્લાય ચેઇનના અગ્રણી',
    home_ov_title: 'ગુજરાતના કૃષિ ક્ષેત્રથી લઈને વૈશ્વિક બંદરો સુધી',
    home_ov_p1: 'Rs Tradixo Global એ ગુજરાતમાં સ્થપાયેલ એક અગ્રણી કૃષિ કોમોડિટી નિકાસકાર છે. અમે સ્થાનિક કૃષિ સમુદાયોને મધ્ય પૂર્વ, દક્ષિણ પૂર્વ એશિયા અને યુરોપના બલ્ક ખરીદદારો સાથે જોડીએ છીએ.',
    home_ov_p2: 'મુન્દ્રા પોર્ટ નજીક કાર્યરત હોવાથી, અમે ભેજ નિયંત્રણ, કસ્ટમ પેકેજિંગ, ફાયટોસેનિટરી પ્રમાણપત્રો અને ઝડપી કન્ટેનર લોડિંગ પર સંપૂર્ણ નિયંત્રણ રાખીએ છીએ.',
    home_ov_box1_title: 'ખેડૂતો સાથે સીધી ભાગીદારી',
    home_ov_box1_desc: 'સ્પર્ધાત્મક ભાવ નિર્ધારણ અને ટ્રેસેબિલિટી માટે કચ્છ, સૌરાષ્ટ્ર અને ઉત્તર ગુજરાતના સમૃદ્ધ કૃષિ વિસ્તારોમાંથી સીધી ખરીદી.',
    home_ov_box2_title: 'અદ્યતન પ્રોસેસિંગ યુનિટ',
    home_ov_box2_desc: 'પ્રીમિયમ ધોરણોના પાલનની ખાતરી આપવા માટે અત્યાધુનિક સોર્ટિંગ, કલર સોર્ટિંગ અને ગ્રેડિંગ પ્રક્રિયા.',
    home_ov_box3_title: 'SGS / Geo-Chem ઓડિટેડ',
    home_ov_box3_desc: 'ખરીદદારના આંતરરાષ્ટ્રીય નાણાકીય વ્યવહારોની સુરક્ષા માટે દરેક શિપમેન્ટમાં સ્વતંત્ર ગુણવત્તા પ્રમાણપત્ર.',
    home_ov_btn_learn_more: 'અમારા ધોરણો અને વાર્તા જાણો →',
    home_ov_btn_quick_whatsapp: 'વોટ્સએપ દ્વારા ઝડપી સંપર્ક',

    prod_cat_tag: '૧૦૦% નિકાસ સુસંગત પાકો',
    prod_cat_title: 'અમારી નિકાસ શ્રેણી અને કૃષિ પાકો',
    prod_cat_desc: 'અમારી પ્રીમિયમ જથ્થાબંધ ઓફરોના વિશિષ્ટ ગ્રેડ, કદ અને કસ્ટમ પેકિંગ વિશિષ્ટતાઓ તપાસો.',
    prod_cat_all: 'બધી કોમોડિટીઝ',
    prod_cat_peanuts: '🥜 પ્રીમિયમ મગફળી',
    prod_cat_rice: '🌾 સેલા અને બાસમતી ચોખા',
    prod_cat_spices: '🌶️ ભારતીય મસાલા',
    prod_cat_agro: '🌱 કૃષિ કોમોડિટીઝ',
    prod_specs_title: 'ટેકનિકલ વિશિષ્ટતા પત્રક',
    prod_packing_title: 'કન્ટેનર પેકેજિંગ વિકલ્પો',
    prod_benefits_title: 'પ્રમાણિત લાભો',
    btn_inquire_commercials: 'વ્યાપાર શરતો અને FOB દર વિશે પૂછો',
    product_card_ready: 'પેકિંગ કન્ફિગરેશન તૈયાર',
    product_card_inquire: 'ભાવ પૂછો →',

    markets_tag: 'વૈશ્વિક વ્યાપાર પહોંચ',
    markets_title: 'જેબેલ અલીથી લઈને દક્ષિણ પૂર્વ એશિયા સુધી વૈશ્વિક ખાદ્ય પુરવઠો',
    markets_desc: 'અમારી વ્યાપારી પહોંચ પ્રાથમિક વ્યાપારી માર્ગો સુધી વિસ્તરેલી છે, જે યુએઈ, વિયેતનામ, મલેશિયા, ઇન્ડોનેશિયા અને અખાતના દેશોમાં વિતરકો અને મોટા ઉપભોક્તા સાંકળોને સપ્લાય કરે છે. અમે તમામ કસ્ટમ્સ દસ્તાવેજોને ઝડપી ગતિએ સંભાળીએ છીએ.',
    markets_btn_sourcing: 'સોર્સિંગ ચેનલોની તપાસ કરો',
    markets_active_channels: 'મુખ્ય નિકાસ ચેનલો (ચકાસાયેલ બંદરો)',
    transit_advantage_label: 'શિપિંગ અને કસ્ટમ્સ લાભો:',
    key_demands_label: 'મુખ્ય નિકાસ કોમોડિટીઝ:',

    cert_tag: 'વૈશ્વિક માનકીકરણ',
    cert_title: 'અન્ન સુરક્ષા અને કસ્ટમ્સ પાલન',
    cert_desc: 'અમે કૃષિ કોમોડિटीઝની નિકાસ માટે સંપૂર્ણપણે અધિકૃત અને પ્રમાણિત છીએ. ઉચ્ચ ગુણવત્તાવાળા નિકાસ ધોરણો સરકારી સત્તાવાળાઓ દ્વારા કડક રીતે ચકાસવામાં આવે છે.',
    cert_auth_label: 'પ્રમાણન સત્તાધિકારી:',
    cert_purpose_label: 'કસ્ટમ્સ અને પોર્ટ હેતુ:',

    contact_tag: 'આંતરરાષ્ટ્રીય સ્તરે જોડાઓ',
    contact_title: 'કોર્પોરેટ હેડક્વાર્ટર અને પોર્ટ લોજિસ્ટિક્સ ડેસ્ક',
    contact_desc: 'કસ્ટમ બ્રાન્ડિંગ, ભેજ નિયંત્રણ મર્યાદા અથવા CIF દર પત્રક જોઈએ છે? આજે જ અમારા બહુભાષી વેપારીઓ સાથે વાત કરો.',
    contact_faq_title: 'નિકાસ વ્યાપાર સંબંધિત પ્રશ્નો',
    form_full_name: 'તમારું પૂરું નામ *',
    form_company_name: 'નોંધાયેલ કંપનીનું નામ *',
    form_corporate_email: 'કોર્પોરેટ ઇમેઇલ *',
    form_phone: 'ફોન નંબર અને કન્ટ્રી કોડ *',
    form_destination: 'ગંતવ્ય બંદર / દેશ *',
    form_commodity: 'રસ ધરાવતો કૃષિ પાક *',
    form_target_qty: 'જરૂરી જથ્થો (મેટ્રિક ટન) *',
    form_packing: 'પેકેજિંગ વિકલ્પ વિશેષતા *',
    form_additional_needs: 'વિશિષ્ટ ટેકનિકલ ધોરણો / લોજિસ્ટિક્સ જરૂરિયાતો',
    btn_send_inquiry: 'પૂછપરછ સબમિટ કરો',
    contact_info_title: 'Rs Tradixo સોર્સિંગ હોટલાઇન',
    contact_address_label: 'વહીવટી કચેરી અને લોડિંગ વેરહાઉસ',
    contact_hours_val: '09:00 - 18:30 (નિકાસ ડેસ્ક ભારત) સોમવાર - શનિવાર',

    modal_title: 'નિકાસ ભાવ માટે વિનંતી',
    modal_prompt_desc: 'ગુજરાતમાં અમારા આંતરરાષ્ટ્રીય લોજિસ્ટિક્સ ડેસ્ક સાથે જોડાઓ. તમારા દેશને અનુરૂપ કસ્ટમાઇઝ્ડ કાર્ગો શરતો (FOB, CFR, CIF) અને પ્રીમિયમ પેકેજિંગ પસંદગીઓ મેળવો.',
    modal_success_title: 'પૂછપરછ સફળતાપૂર્વક નોંધવામાં આવી',
    modal_success_desc: 'આભાર, તમારો નિકાસ પ્રસ્તાવ રેકોર્ડ કરવામાં આવ્યો છે. અમારા અધિકારી ટૂંક સમયમાં તમને સત્તાવાર ભાવ ઇમેઇલ કરશે.',
    modal_reference: 'TRAD-',
    modal_simulated_record: 'પૂછપરછનો નમૂનો રેકોર્ડ',
    modal_buyer: 'ખરીદદાર:',
    modal_product: 'નિકાસ પાક:',
    modal_req_qty: 'જરૂરી જથ્થો:',
    modal_pack_spec: 'પેકેજિંગ સ્પષ્ટીકરણ:',
    modal_indicative_fob: 'આશરે FOB મુન્દ્રા કિંમત:',
    modal_caution_disclaimer: '*આ માત્ર આશરે અંદાજ છે અને બજાર અસ્થિરતા અને કસ્ટમ શરતોને આધીન છે.',
    btn_close_window: 'બારી બંધ કરો',
    btn_print_copy: 'નકલ પ્રિન્ટ કરો',
    calc_title: 'ખર્ચ અંદાજ પત્રક (FOB ભારત)',
    btn_show_estimation: 'અંદાજ જુઓ',
    btn_hide_estimation: 'કેલ્ક્યુલેટર છુપાવો',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'قصة الشركة',
    nav_products: 'منتجاتنا',
    nav_markets: 'الوصول العالمي',
    nav_certifications: 'الشهادات',
    nav_faq: 'الأسئلة الشائعة',
    nav_contact: 'مكتب الاتصال',
    header_live_desk: 'مكتب التصدير المباشر نشط الآن',
    header_berth_active: 'تحميل ميناء موندرا: الرصيف ١٢ و ١٤ نشط',
    header_clock_label: 'توقيت مركز التوريد بالهند:',
    header_direct_desk: 'المكتب المباشر:',
    btn_get_fob_quote: 'عرض سعر FOB',
    trade_languages: 'لغات التجارة',
    incoterms_compliant: 'متوافق مع الإنكوترمظ',
    office_hours: 'ساعات العمل:',
    sourcing_desk: 'مكتب تصدير الهند',

    hero_tagline: 'التميز في كل عملية تصدير.',
    hero_title_1: 'مصدر موثوق',
    hero_title_2: 'من الهند',
    hero_subtitle: 'تصدير المنتجات الزراعية الفاخرة لجميع أنحاء العالم بجودة معتمدة وسلامة أغذية موثقة وفقاً لأعلى المعايير والفحوصات الصارمة.',
    hero_location: 'يقع في ولاية غوجارات (ممر ميناء موندرا)',
    hero_shipping_info: 'التخليص الجمركي والتعبئة اليومية نشطة',
    btn_explore_products: 'استكشف منتجاتنا',
    btn_export_inquiry: 'استفسار تصدير',
    hero_serving_markets: 'نخدم الأسواق الأساسية في الإمارات والخليج وفيتنام وإندونيسيا',
    hero_stat_tonnage: 'أكثر من ١٥ ألف طن',
    hero_stat_tonnage_label: 'الحجم المصدر',
    hero_stat_safety: '١٠٠٪',
    hero_stat_safety_label: 'آمن ومرخص دولياً',
    hero_stat_channels: '١١+',
    hero_stat_channels_label: 'ممرات التوريد العالمية',
    hero_stat_proximity: '٠٪ تأخير',
    hero_stat_proximity_label: 'بالقرب من ميناء موندرا',
    hero_operational_excellence: 'التميز التشغيلي',
    hero_mundra_proximity_tag: 'موقع استراتيجي بالقرب من ميناء موندرا الفيدرالي CY-18A',

    home_ov_tag: 'رواد التوريد وسلسلة الإمداد',
    home_ov_title: 'من قلب غوجارات الزراعي إلى الموانئ العالمية',
    home_ov_p1: 'تعتبر آر إس تراديكسو جلوبال من المصدرين الرائدين للسلع الزراعية في ولاية غوجارات بالهند. نحن نربط المزارعين المحليين بكبار المشترين الدوليين في الشرق الأوسط وأبرز دول الخليج وعبر جنوب شرق آسيا.',
    home_ov_p2: 'من خلال العمل بالقرب من ميناء موندرا، نحافظ على السيطرة الكاملة على مستويات الرطوبة والتعبئة والتغليف والشهادات الصحية والتحميل السريع للحاويات.',
    home_ov_box1_title: 'شراكة مباشرة للمزارعين',
    home_ov_box1_desc: 'توريد مباشر من الأراضي الغنية في كوتش وسوراشترا وشمال غوجارات بأسعار تنافسية للغاية وقدرة تتبع كاملة للسلع.',
    home_ov_box2_title: 'معالجة فنية متطورة',
    home_ov_box2_desc: 'تصنيف وفرز آلي دقيق لضمان الامتثال التام لأعلى المواصفات القياسية الدولية المطروحة.',
    home_ov_box3_title: 'معتمد من SGS / Geo-Chem',
    home_ov_box3_desc: 'كل شحنة تحمل تقارير فحص مستقلة لحماية الاعتمادات المالية والتدفقات التجارية للمستوردين.',
    home_ov_btn_learn_more: 'تعرف على معاييرنا وحكايتنا ←',
    home_ov_btn_quick_whatsapp: 'محادثة سريعة عبر الواتساب',

    prod_cat_tag: 'محاصيل زراعية مطابقة بنسبة ١٠٠٪ للتصدير',
    prod_cat_title: 'مجموعتنا المخصصة للتصدير والسلع البارزة',
    prod_cat_desc: 'اكتشف الدرجات الفنية والمقاسات ومواصفات التعبئة المخصصة للشحنات الضخمة من محاصيل الفول السوداني الفاخر والرز الفاخر.',
    prod_cat_all: 'جميع السلع والمنتجات',
    prod_cat_peanuts: '🥜 فول سوداني فاخر',
    prod_cat_rice: '🌾 أرز سيلا وبسمتي معتق',
    prod_cat_spices: '🌶️ بهارات هندية',
    prod_cat_agro: '🌱 سلع زراعية',
    prod_specs_title: 'لوحة المواصفات الفنية للسلعة',
    prod_packing_title: 'خيارات تعبئة الحاويات والتغليف',
    prod_benefits_title: 'الفوائد المعتمدة للمنتج',
    btn_inquire_commercials: 'استعلام عن شروط الشحن وعرض أسعار FOB',
    product_card_ready: 'التعبئة جاهزة للشحن الشامل',
    product_card_inquire: 'طلب عرض سعر ←',

    markets_tag: 'الوصول التجاري العالمي',
    markets_title: 'تزويد الأسواق العالمية من جبل علي ودبي وإلى جنوب شرق آسيا',
    markets_desc: 'يمتد وصولنا التجاري إلى ممرات الشحن والخدمات اللوجستية المباشرة لتغذية المصانع وشركات التوزيع وسلاسل الاستهلاك بالجملة في دبي وأبوظبي، الإمارات، وفيتنام، وماليزيا، وإندونيسيا، والخليج العربي. نتعامل مع كافة المتطلبات الجمركية الدولية بمرونة وسرعة تامة.',
    markets_btn_sourcing: 'استكشاف قنوات الاستيراد المباشر',
    markets_active_channels: 'قنوات التصدير الأساسية (الموانئ المعتمدة)',
    transit_advantage_label: 'مزايا العبور والجمارك بميناء موندرا:',
    key_demands_label: 'السلع الأساسية المطلوبة للتصدير:',

    cert_tag: 'المعايير الدولية للتصدير والتحميل',
    cert_title: 'شهادات سلامة الأغذية والامتثال الحكومي والجمركي',
    cert_desc: 'نحن مرخصون بالكامل لتصدير الحبوب والمحاصيل الغذائية وعقود الشراكة الدولية. يتم تدقيق وثائق التصدير واللوائح الفيدرالية بدقة بالغة.',
    cert_auth_label: 'جهة اصدار الشهادة:',
    cert_purpose_label: 'الغرض اللوجستي والجمركي للهند والجمارك المستوردة:',

    contact_tag: 'تواصل معنا دولياً',
    contact_title: 'المقر الرئيسي ومكتب الخدمات الفنية اللوجستية بالميناء',
    contact_desc: 'تبحث عن تعبئة مخصصة لحساب علامتك التجارية، تقليل الرطوبة، أو مصفوفة أسعار CIF؟ تحدث مع تجارنا متعددي اللغات اليوم.',
    contact_faq_title: 'الأسئلة الشائعة المتعلقة بشروط الاستيراد التجاري',
    form_full_name: 'الاسم الكامل للمتصل *',
    form_company_name: 'الاسم القانوني للشركة المستوردة *',
    form_corporate_email: 'البريد الإلكتروني للعمل والشركات *',
    form_phone: 'رقم الهاتف مع رمز الدولة الجغرافي *',
    form_destination: 'ميناء الوصول المستهدف / بلد التسليم *',
    form_commodity: 'المحصول أو السلعة المطلوبة بالتحديد *',
    form_target_qty: 'الحجم والوزن المطلوب بالطن المتري *',
    form_packing: 'مواصفة التغليف والتعبئة المفضلة *',
    form_additional_needs: 'المواصفات الفنية الإضافية / الجدول الزمني المتوقع للشحن والتحميل',
    btn_send_inquiry: 'ارسال طلب الاستفسار التجاري',
    contact_info_title: 'مكتب التوريد والتواصل الساخن لشركة آر إس تراديكسو',
    contact_address_label: 'المكتب الإداري للتصدير ومستودعات الفرز والتحميل للرصيف',
    contact_hours_val: '٠٩:٠٠ - ١٨:٣٠ (توقيت الهند الإداري للتحميل) الاثنين - السبت',

    modal_title: 'طلب عرض أسعار التصدير الفوري',
    modal_prompt_desc: 'تواصل مع مكتب الخدمات اللوجستية والتصدير الدولي في ولاية غوجارات. احصل على أسعار وشروط تسليم مرنة (FOB, CFR, CIF) وتغليف مخصص لجمارك بلدك.',
    modal_success_title: 'تم تسجيل طلب الاستفسار بنجاح تام',
    modal_success_desc: 'شكراً جزيلاً لك، تم تسجيل مستند الاستيراد وتاريخ السلعة، وسيقوم مسؤول الحسابات بإرسال عرض FOB رسمي لبريدكم الإلكتروني في القريب العاجل.',
    modal_reference: 'TRAD-',
    modal_simulated_record: 'سجل محاكاة مستند الشحن',
    modal_buyer: 'المشتري المستورد:',
    modal_product: 'السلعة المطلوبة:',
    modal_req_qty: 'الحجم الإجمالي المطلوب:',
    modal_pack_spec: 'مواصفة التعبئة المحددة:',
    modal_indicative_fob: 'القيمة التقديرية (FOB Mundra Port):',
    modal_caution_disclaimer: '*ملاحظة: التقديرات المالية أولية وتخضع لتحديثات السوق اللحظية وشروط شحن الفرز.',
    btn_close_window: 'اغلاق النافذة',
    btn_print_copy: 'طباعة مستند التحميل التقديري',
    calc_title: 'المقدر المالي الاسترشادي والشحن الدولي لبلدك',
    btn_show_estimation: 'عرض مقدر التكلفة والشحن الاسترشادي',
    btn_hide_estimation: 'اخفاء حاسبة التكاليف التوضيحية',
  }
};
