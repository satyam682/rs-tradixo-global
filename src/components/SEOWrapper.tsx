/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface SEOWrapperProps {
  currentTab: string;
}

export default function SEOWrapper({ currentTab }: SEOWrapperProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Professional Multi-lingual Copywriting for the Title & Description metadata
    let title = "Rs Tradixo Global | Premium Agricultural Exporter from India";
    let desc = "Rs Tradixo Global is one of India's leading agricultural exporters specializing in premium groundnuts (Bold & Java grades) and long-grain Basmati & Non-Basmati rice. Directly servicing Dubai, Vietnam, Indonesia and global markets via Mundra Port gateway with certified cargo compliance.";
    let keywords = "groundnuts exporter India, bold peanuts, java peanut kernels, bulk Basmati rice exporter, non-basmati rice supplier, Mundra port agricultural exports, Indian agricultural trader, Rs Tradixo Global, agricultural trade, grain wholesalers, bulk crop shipments";
    let ogLocale = "en_US";

    if (language === 'hi') {
      title = "आरएस ट्रेडीक्सो ग्लोबल | भारत से प्रीमियम कृषि निर्यातक | मूंगफली और चावल";
      desc = "आरएस ट्रेडीक्सो ग्लोबल प्रीमियम मूंगफली (बोल्ड और जावा) और उच्च गुणवत्ता वाले बासमती तथा गैर-बासमती चावल के वैश्विक निर्यात में भारत की अग्रणी कंपनी है। मुंद्रा पोर्ट से प्रत्यक्ष शिपिंग और प्रमाणित खाद्य सुरक्षा (FSSAI, SGS)।";
      keywords = "मूंगफली निर्यातक भारत, चावल निर्यातक, बासमती चावल, जावा मूंगफली, मुंद्रा पोर्ट कृषि निर्यात, आरएस ट्रेडीक्सो ग्लोबल, कृषि व्यापार, थोक खाद्यान्न आपूर्ति";
      ogLocale = "hi_IN";
    } else if (language === 'gu') {
      title = "આરએસ ટ્રેડીક્સો ગ્લોબલ | પ્રીમિયમ કૃષિ નિકાસકાર ભારત | મગફળી અને ચોખા";
      desc = "આરએસ ટ્રેડીક્સો ગ્લોબલ ભારતથી પ્રીમિયમ મગફળી (બોલ્ડ અને જાવા) અને ઉચ્ચ ગુણવત્તાવાળા ચોખા (બાસમતી અને નોન-બાસમતી) ની નિકાસ કરતી અગ્રણી સંસ્થા છે. મુન્દ્રા પોર્ટથી સીધું કન્ટેનર શિપિંગ અને પ્રમાણિત સુરક્ષા.";
      keywords = "મગફળી નિકાસકાર, ચોખા નિકાસ, મુન્દ્રા પોર્ટ કૃષિ નિકાસ, બાસમતી ચોખા, આરએસ ટ્રેડીક્સો ગ્લોબલ, કૃષિ વ્યાપાર, હોલસેલ અનાજ સપ્લાય";
      ogLocale = "gu_IN";
    } else if (language === 'ar') {
      title = "آر إس تريديكسو غلوبال | مصدر زراعي ممتاز من الهند | الفول السوداني والأرز";
      desc = "تعد آر إس تريديكسو غلوبال الشركة الرائدة في الهند لنشاط تصدير الفول السوداني الممتاز والمحاصيل الزراعية والأرز البسمتي العالي الجودة مباشرة من ميناء موندرا، مع شروط شحن مرنة (CIF, FOB) وضمان رقابي معتمد.";
      keywords = "مصدر الفول السوداني الهند, تصدير الأرز البسمتي, ميناء موندرا لوجستيات, شحن الفول السوداني دبي, آر إس تريديكسو, شركة تصدير زراعية, أرز سيلا هندي";
      ogLocale = "ar_AE";
    }

    // 2. Tab-specific title contextual enrichment (for high-level semantic search crawls)
    if (currentTab === 'about') {
      if (language === 'hi') title = "हमारे बारे में | " + title;
      else if (language === 'gu') title = "અમારા વિશે | " + title;
      else if (language === 'ar') title = "من نحن وإرثنا | " + title;
      else title = "Our Legacy & Logistics | " + title;
    } else if (currentTab === 'products') {
      if (language === 'hi') title = "उत्पाद शोरूम और विनिर्देश | " + title;
      else if (language === 'gu') title = "ઉત્પાદનો અને ગુણવત્તા | " + title;
      else if (language === 'ar') title = "كتالوج المحاصيل والمنتجات | " + title;
      else title = "Agri Product Catalog & Grades | " + title;
    } else if (currentTab === 'markets') {
      if (language === 'hi') title = "निर्यात बाजार और रसद समय | " + title;
      else if (language === 'gu') title = "નિકાસ બજારો | " + title;
      else if (language === 'ar') title = "وجهات الشحن والعبور | " + title;
      else title = "Global Export Markets & Transit | " + title;
    } else if (currentTab === 'certifications') {
      if (language === 'hi') title = "खाद्य सुरक्षा और प्रमाण पत्र | " + title;
      else if (language === 'gu') title = "ગુણવત્તા સર્ટિફિકેટ્સ | " + title;
      else if (language === 'ar') title = "شهادات الجودة والمطابقة الفيدرالية | " + title;
      else title = "SGS & FSSAI Certificates | " + title;
    } else if (currentTab === 'contact') {
      if (language === 'hi') title = "कोट और संपर्क विवरण | " + title;
      else if (language === 'gu') title = "સંપર્ક કરો અને ભાવ મેળવો | " + title;
      else if (language === 'ar') title = "تواصل معنا واطلب عرض سعر | " + title;
      else title = "Get Import Quotation & Contact Ports Desk | " + title;
    }

    // Apply main title update safely
    document.title = title;

    // Helper to dynamically set or create meta elements
    const setMetaTag = (attributeName: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // Update standard SEO meta tags
    setMetaTag('name', 'description', desc);
    setMetaTag('name', 'keywords', keywords);
    
    // Update Open Graph (Social Sharing previews: Facebook, LinkedIn, WhastApp, etc.)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', desc);
    setMetaTag('property', 'og:locale', ogLocale);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Rs Tradixo Global');
    
    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', desc);

    // Update root HTML element lang attribute to stay in sync
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.setAttribute('lang', language);
    }
  }, [language, currentTab]);

  return null; // This component registers effects and doesn't paint anything to DOM
}
