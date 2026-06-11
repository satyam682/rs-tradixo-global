/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Check, FileText, Send, HelpCircle, Calculator, Building2, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { Product, InquiryFormData } from '../types.ts';
import { COMP_INFO } from '../data.ts';
import emailjs from '@emailjs/browser';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
  allProducts: Product[];
}

export default function InquiryModal({ isOpen, onClose, selectedProduct, allProducts }: InquiryModalProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
    productOfInterest: '',
    quantityNeeded: '25', // Metric Tons (FCL default)
    packingPreference: '50 kg Eco-Friendly Strong PP Bags',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [referenceNumber, setReferenceNumber] = useState('');

  // Reset form and sync product when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        country: '',
        productOfInterest: selectedProduct?.id || allProducts[0]?.id || '',
        quantityNeeded: '25',
        packingPreference: selectedProduct?.packingOptions?.[0] || allProducts[0]?.packingOptions?.[0] || '50 kg Eco-Friendly Strong PP Bags',
        message: '',
      });
      setSubmitted(false);
      setSendError(null);
      setErrors({});
      setReferenceNumber('');
    }
  }, [isOpen, selectedProduct, allProducts]);

  if (!isOpen) return null;

  // Simple pricing estimates (B2B indicative FOB price/MT in USD)
  const getIndicativePricePerTon = (prodId: string) => {
    switch (prodId) {
      case 'java-peanuts': return 1250;
      case 'bold-peanuts': return 1320;
      case 'basmati-rice': return 1050;
      case 'non-basmati-rice': return 520;
      case 'red-chili': return 1950;
      case 'turmeric': return 1650;
      case 'coriander': return 1450;
      case 'sesame-seeds': return 1850;
      default: return 950;
    }
  };

  const selectedProdObj = allProducts.find(p => p.id === formData.productOfInterest);
  const quantityNum = parseFloat(formData.quantityNeeded) || 0;
  const pricePerTon = getIndicativePricePerTon(formData.productOfInterest);
  const indicativeTotalFOBValue = quantityNum * pricePerTon;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number with country code is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.country.trim()) newErrors.country = 'Destination country is required';
    if (!formData.quantityNeeded || Number(formData.quantityNeeded) <= 0) {
      newErrors.quantityNeeded = 'Please state a positive volume in MT';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setSendError(null);

    const cleanEnvVar = (val: any) => val ? String(val).replace(/['"]/g, '').trim() : '';

    // Get configuration from env or use defaults
    const serviceId = cleanEnvVar((import.meta as any).env.VITE_EMAILJS_SERVICE_ID) || 'service_2shfq1vin';
    const templateId = cleanEnvVar((import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID) || 'template_1k6vtq4';
    const publicKey = cleanEnvVar((import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY) || '0WbG-TDBYq_KXasPk';

    const selectedProdObj = allProducts.find(p => p.id === formData.productOfInterest);
    const refNum = `TRAD-${Math.floor(100000 + Math.random() * 900000)}`;

    const templateParams = {
      to_email: 'info@rstradixoglobal.com',
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      company_name: formData.companyName,
      country: formData.country,
      product_name: selectedProdObj?.name || formData.productOfInterest,
      quantity: formData.quantityNeeded,
      packing: formData.packingPreference,
      message: formData.message || 'No specific specifications provided.',
      reference_number: refNum,
      formatted_data: `
Reference: ${refNum}
Name: ${formData.fullName}
Company: ${formData.companyName}
Email: ${formData.email}
Phone: ${formData.phone}
Destination Port / Country: ${formData.country}
Product of Interest: ${selectedProdObj?.name || formData.productOfInterest}
Quantity Needed: ${formData.quantityNeeded} MT
Packaging Preference: ${formData.packingPreference}
Special Specifications/Logistics Needs:
${formData.message || 'None provided'}
      `.trim()
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setReferenceNumber(refNum);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSendError('Failed to send inquiry via EmailJS. Please check your credentials or network connection.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in font-sans">
      <div className="bg-white rounded-sm max-w-4xl w-full max-h-[90vh] md:max-h-[95vh] overflow-y-auto md:overflow-hidden blue-shadow flex flex-col md:flex-row relative border-b-4 border-b-[#0056B3]">
        
        {/* Global Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white md:text-slate-400 hover:text-slate-200 md:hover:text-slate-600 rounded-sm hover:bg-white/10 md:hover:bg-slate-100 transition-colors z-30 cursor-pointer"
          id="close_modal_btn"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left column - Brand & Prompt Details */}
        <div className="w-full md:w-5/12 bg-slate-900 text-white p-5 md:p-8 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-800 shrink-0">
          {/* Subtle background graphic design */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/10 text-[#ADD8E6] rounded-sm text-[10px] font-bold mb-4 md:mb-6 uppercase tracking-wider">
              B2B Trade Portal
            </span>
            <h3 className="text-2xl font-bold font-heading leading-tight mb-3">
              Request Export Quotation
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              Connect with our international logistics desk in Gujarat. Get customized cargo terms (FOB, CFR, CIF) and premium packaging selections tailored for your country.
            </p>

            <div className="space-y-4 text-xs font-sans font-semibold text-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-sm shrink-0">
                  <MapPin className="w-4 h-4 text-[#ADD8E6]" />
                </div>
                <div>
                  <p className="text-slate-450 text-[10px] uppercase tracking-wider">Sourcing Hub</p>
                  <p className="font-bold text-white">Gujarat, near Mundra Port</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-sm shrink-0">
                  <CalendarIcon className="w-4 h-4 text-[#ADD8E6]" />
                </div>
                <div>
                  <p className="text-slate-450 text-[10px] uppercase tracking-wider">Average Response Time</p>
                  <p className="font-bold text-white">Within 4 Business Hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-sm shrink-0">
                  <Calculator className="w-4 h-4 text-[#ADD8E6]" />
                </div>
                <div>
                  <p className="text-slate-450 text-[10px] uppercase tracking-wider">Incoterms Available</p>
                  <p className="font-bold text-white">FOB Mundra, CIF Major Ports</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 relative z-10 font-medium hidden md:block">
            <p className="font-bold text-white text-[11px] uppercase tracking-wide mb-1">Rs Tradixo Global Logistics Desk</p>
            <p>Email: {COMP_INFO.email}</p>
            <p>Tel: {COMP_INFO.phone}</p>
          </div>
        </div>

        {/* Right column - Input Form / Success View */}
        <div className="w-full md:w-7/12 p-5 md:p-8 md:overflow-y-auto md:max-h-[95vh] relative bg-white">

          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-8">
              {/* Wrapped the printable content in a div with id="printable-receipt" */}
              <div id="printable-receipt" className="flex flex-col items-center w-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FDFBF7] to-[#F5ECE0] text-[#C5A25D] rounded-full flex items-center justify-center mb-6 border border-[#C5A25D]/30 shadow-md">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading mb-3">
                  Inquiry Successfully Lodged
                </h4>
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-medium">
                  Thank you, your trade proposal has been recorded under reference <strong className="text-[#C5A25D]">{referenceNumber}</strong>. Our commercial officer will email you with formal FOB quotes shortly.
                </p>

                {/* Indicative order values summary */}
                <div className="w-full bg-[#FDFBF7]/40 border border-[#C5A25D]/25 rounded-md p-4 text-left max-w-sm mb-6 text-xs text-slate-650 space-y-2">
                  <p className="font-bold text-slate-800 text-xs uppercase tracking-wider border-b border-slate-200 pb-1.5 mb-2">Simulated Inquiry Record</p>
                  <div className="flex justify-between">
                    <span>Buyer:</span>
                    <span className="font-bold text-slate-900">{formData.companyName} ({formData.country})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Product:</span>
                    <span className="font-semibold text-slate-950">{selectedProdObj?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Required Quantity:</span>
                    <span className="font-bold text-slate-950">{formData.quantityNeeded} Metric Tons</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging Spec:</span>
                    <span className="font-semibold text-slate-900">{formData.packingPreference}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 z-10">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A25D] text-slate-950 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#AA8B4C]/20 shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="text-base font-bold text-slate-900 font-heading border-b border-slate-100 pb-2 mb-2 uppercase tracking-wide text-left">
                Commercial Specification Sheet
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className={`w-full rounded-sm border text-xs p-2.5 bg-[#F9FAFB] hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056B3]/20 ${errors.fullName ? 'border-red-500' : 'border-slate-200'}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{errors.fullName}</p>}
                </div>

                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Company Registered Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Tradixo Trading LLC"
                      className={`w-full rounded-sm border text-xs p-2.5 pl-9 bg-[#F9FAFB] hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056B3]/20 ${errors.companyName ? 'border-red-500' : 'border-slate-200'}`}
                    />
                  </div>
                  {errors.companyName && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="buyer@domain.com"
                      className={`w-full rounded-sm border text-xs p-2.5 pl-9 bg-[#F9FAFB] hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056B3]/20 ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{errors.email}</p>}
                </div>

                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Phone & Country Code *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+971 50 XXXXXXX"
                      className={`w-full rounded-sm border text-xs p-2.5 pl-9 bg-[#F9FAFB] hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056B3]/20 ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Destination Port / Country *
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g. Jebel Ali, UAE"
                      className={`w-full rounded-sm border text-xs p-2.5 pl-9 bg-[#F9FAFB] hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056B3]/20 ${errors.country ? 'border-red-500' : 'border-slate-200'}`}
                    />
                  </div>
                  {errors.country && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{errors.country}</p>}
                </div>

                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Commodity of Interest *
                  </label>
                  <select
                    name="productOfInterest"
                    value={formData.productOfInterest}
                    onChange={handleInputChange}
                    className="w-full bg-white rounded-sm border border-slate-200 text-xs p-2.5 focus:outline-none focus:ring-2 focus:ring-tradixo-blue/20"
                  >
                    {allProducts.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Target Quantity *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="quantityNeeded"
                      min="1"
                      value={formData.quantityNeeded}
                      onChange={handleInputChange}
                      placeholder="e.g. 25"
                      className={`w-full rounded-sm border text-xs p-2.5 pr-28 bg-[#F9FAFB] hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056B3]/20 ${errors.quantityNeeded ? 'border-red-500' : 'border-slate-200'}`}
                    />
                    <div className="absolute right-3 top-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">Metric Tons (MT)</div>
                  </div>
                  {errors.quantityNeeded && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{errors.quantityNeeded}</p>}
                </div>

                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Packaging Option Specialty *
                  </label>
                  <select
                    name="packingPreference"
                    value={formData.packingPreference}
                    onChange={handleInputChange}
                    className="w-full bg-white rounded-sm border border-slate-200 text-xs p-2.5 focus:outline-none focus:ring-2 focus:ring-tradixo-blue/20 font-semibold text-slate-800"
                  >
                    {selectedProdObj?.packingOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    )) || (
                      <>
                        <option>50 kg Eco-Friendly Strong PP Bags</option>
                        <option>25 kg Branded Jute Bags</option>
                        <option>1000 kg Jumbo Bulk Bags</option>
                      </>
                    )}
                  </select>
                </div>
              </div>


              <div className="text-left">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Specific Specifications / Logistics Needs
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your target delivery schedule, desired moisture grade limits, and third party inspection requirements..."
                  className="w-full rounded-sm border border-slate-200 text-xs p-2.5 bg-[#F9FAFB] hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A25D]/25 focus:border-[#C5A25D]"
                />
              </div>

              {sendError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-sm text-xs text-left font-semibold">
                  {sendError}
                </div>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSending}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A25D] hover:from-[#E2C578] hover:to-[#C5A25D] text-slate-950 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#AA8B4C]/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" /> Issue Inquiry
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Extra local helpers to avoid imported icon errors
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
