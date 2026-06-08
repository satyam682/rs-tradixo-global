/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'peanuts' | 'rice' | 'spices' | 'agro';
  description: string;
  extendedDescription?: string;
  specifications: { label: string; value: string }[];
  benefits: string[];
  packingOptions: string[];
  image: string;
}

export interface ExportMarket {
  id: string;
  name: string;
  region: string;
  flag: string; // Emoji flag or icon reference
  description: string;
  transitAdvantage: string;
  keyProducts: string[];
}

export interface Certification {
  id: string;
  code: string;
  name: string;
  description: string;
  authority: string;
  purpose: string;
  logo?: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;
  productOfInterest: string;
  quantityNeeded: string; // e.g. "25 Metric Tons"
  packingPreference: string;
  message: string;
}
