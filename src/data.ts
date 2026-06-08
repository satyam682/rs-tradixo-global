/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, ExportMarket, Certification } from './types.ts';

export const COMP_INFO = {
  name: 'Rs Tradixo Global',
  tagline: 'Premium Agricultural Exporter from India',
  coreMessage: 'Trusted Exporter from India: Delivering Premium Quality Agricultural Products Worldwide.',
  location: 'Gujarat, India',
  mundraProximity: 'Strategically located near Mundra Port, the largest private port in India, ensuring fast container transit and efficient worldwide shipping operations.',
  email: 'info@rstradixoglobal.com',
  phone: '+91 98794 98123', // Replaced placeholder with realistic official look contact
  address: 'Rs Tradixo Global, Near Mundra Port Gateway Kutch, Gujarat 370421, India',
  whatsapp: '919879498123',
};

export const PRODUCTS: Product[] = [
  {
    id: 'java-peanuts',
    name: 'Java Peanut Kernels',
    tagline: 'Premium Grade, High Oil Content Red-Skin Peanuts',
    category: 'peanuts',
    description: 'Java Peanuts are smaller in size with an oval shape and distinct pinkish-red skins. Renowned for their naturally sweet taste, high oil content, and crunchy texture, they are the preferred choice globally for peanut butter manufacturing, oil extraction, and salted confectionery snacks.',
    extendedDescription: 'Our Java Peanuts are sourced from Gujarat\'s finest agricultural belts under stringent quality control. They undergo rigorous size sorting, mechanical shelling, and cleaning processes to meet the highest international phytosanitary standards.',
    specifications: [
      { label: 'Type', value: 'Java Kidneys / Round Kernels' },
      { label: 'Size (Counts/Ounce)', value: '50/60, 60/70, 70/80, 80/90, 140/160' },
      { label: 'Moisture', value: '7.0% to 8.0% Max' },
      { label: 'Aflatoxin', value: '4 PPB Max (EU standard compliant)' },
      { label: 'Admixture', value: '1.0% Max' },
      { label: 'Splits / Damaged', value: '1.0% to 1.5% Max' },
      { label: 'Crop Year', value: 'Current Crop Year' },
    ],
    benefits: [
      { id: 'jb1', text: 'Naturally rich in proteins, dietary fibers, and monounsaturated healthy fats' },
      { id: 'jb2', text: 'Naturally high oil concentration, making them highly cost-effective for oil refiners' },
      { id: 'jb3', text: 'Sweet, rich flavor profile popular in international snack mixes and butter production' }
    ].map(b => b.text), // Convert to array of strings
    packingOptions: [
      '25 kg Brand-New Strong Jute Bags',
      '50 kg Eco-Friendly Strong PP Bags',
      'One-way Vacuum Pack options for custom requirements'
    ],
    image: '/java-peanuts.jpg',
  },
  {
    id: 'bold-peanuts',
    name: 'Bold Peanut Kernels',
    tagline: 'Premium Quality Large-Size Shelled Groundnuts',
    category: 'peanuts',
    description: 'Bold Peanuts are characterized by their elongated, robust shape and thick light-tan skins. They are highly sought after by global wholesalers for direct consumption, raw snack packaging, roasting, and premium chocolate confectionery manufacturing.',
    extendedDescription: 'A true favorite in wholesale trade networks, our Bold Peanut Kernels represent premium-size agricultural export standards out of India. Hand-selected for uniform size to ensure a uniform roast rate and optimal shelf life.',
    specifications: [
      { label: 'Type', value: 'Bold Elongated Premium Kernels' },
      { label: 'Size (Counts/Ounce)', value: '38/42, 40/50, 50/60, 60/70' },
      { label: 'Moisture', value: '7.0% to 8.0% Max' },
      { label: 'Aflatoxin', value: '4 PPB Premium Grade / 10 PPB Standard' },
      { label: 'Admixture', value: '0.5% to 1.0% Max' },
      { label: 'Splits / Damaged', value: '1.0% Max' },
      { label: 'Foreign Matter', value: 'Strictly Negative' },
    ],
    benefits: [
      { id: 'bb1', text: 'Generous, large grain size ideal for premium packaging and roasting applications' },
      { id: 'bb2', text: 'Low rancidity index with superior storage retention and extended shelf-life' },
      { id: 'bb3', text: 'Strong kernel integrity, ensuring low split rate during bulk sea-freight transport' }
    ].map(b => b.text),
    packingOptions: [
      '25 kg New Jute Bags',
      '50 kg Polypropylene / PP Woven Bags',
      '1000 kg Bulk Jumbo Container Bags for extreme industrial requests'
    ],
    image: '/bold-peanuts.jpg',
  },
  {
    id: 'basmati-rice',
    name: 'Premium Basmati Rice',
    tagline: 'Extra-Long Grain, Majestic Aroma, Fragrant Luxury',
    category: 'rice',
    description: 'Sourced from the fertile, mountain-watered foothills, our Basmati Rice represents the absolute epitome of gourmet grains. It features extra-long grains that stretch up to 2.5x their length upon cooking, delivering an authentic premium fragrance and non-sticky texture that defines royal Asian cuisines.',
    extendedDescription: 'Aromatic basmati rice is aged to perfection to reduce residual moisture, enhancing its aroma, cooking quality, and volumetric expansion. It is carefully processed through state-of-the-art sorting lines to ensure zero broke grains.',
    specifications: [
      { label: 'Average Grain Length', value: '8.30 mm to 8.40 mm (Raw basis)' },
      { label: 'Purity Level', value: '95.0% Minimum' },
      { label: 'Moisture Content', value: '12.0% Maximum' },
      { label: 'Broken Grains', value: '0.5% to 1.0% Max' },
      { label: 'Damage / Discolored', value: 'Nil' },
      { label: 'Chalky Grains', value: '2.0% Max' },
      { label: 'Aroma', value: 'Naturally High / Aged Basmati Standard' },
    ],
    benefits: [
      { id: 'br1', text: 'Remarkable grain length expansion, providing magnificent plate presentation' },
      { id: 'br2', text: 'Exquisite signature aroma unmatched by alternative long-grain varieties' },
      { id: 'br3', text: 'Perfect non-sticky fluffiness, highly valued by fine dining chefs and households alike' }
    ].map(b => b.text),
    packingOptions: [
      '5 kg, 10 kg, 20 kg Premium BOPP Bags',
      '25 kg, 50 kg Heavy-Duty PP Master Bags',
      'Custom buyer logo printed packaging for retail distribution networks'
    ],
    image: '/basmati-rice.jpg',
  },
  {
    id: 'non-basmati-rice',
    name: 'Versatile Non-Basmati Rice',
    tagline: 'High-Calorie, Cost-Effective Bulk Food Grade grains',
    category: 'rice',
    description: 'Our Non-Basmati Rice selection includes multi-purpose, long grain and medium grain options like IR64, Swarna, and PR11. These varieties are highly valued for their high calorific value, reliable grain strength under mass steam preparation, and unmatched budget efficacy, making them perfect for bulk national food networks, industrial catering, and retail packaging globally.',
    extendedDescription: 'We export Non-Basmati rice in Raw, Parboiled (Sella), and Silky Polished configurations. This adaptability allows us to fulfill distinct regional tastes, import tariffs, and preparation cultures worldwide with consistent supply volume.',
    specifications: [
      { label: 'Grain Length', value: '6.0 mm to 6.8 mm' },
      { label: 'Broken Ratio', value: '5% Broken, 15% Broken, or 25% Broken options' },
      { label: 'Moisture', value: '13.0% to 14.0% Max' },
      { label: 'Foreign Matter', value: '0.5% Max' },
      { label: 'Chalky Kernels', value: '5.0% Max' },
      { label: 'Damage / Yellow Grains', value: '1.5% Max' },
    ],
    benefits: [
      { id: 'nbr1', text: 'Incredibly cost-effective bulk shipping options with massive tonnage availability' },
      { id: 'nbr2', text: 'Highly robust nutritional composition with reliable starch release' },
      { id: 'nbr3', text: 'Available in Parboiled format, which preserves core vitamins in the husk' }
    ].map(b => b.text),
    packingOptions: [
      '50 kg strong double-layer woven PP bags with inner lining',
      '25 kg high-density polyethylene bags',
      'Bulk loose vessel cargo loading for specific government-to-government orders'
    ],
    image: '/non-basmati-rice.jpg',
  },
  {
    id: 'red-chili',
    name: 'Guntur Dry Red Chili',
    tagline: 'Premium Export Grade Red Chilies (Stemless & With Stem)',
    category: 'spices',
    description: 'Guntur Red Chilies are world-renowned for their rich pungent heat, deep red color, and strong flavor profile. Sourced from the prime spice beds, they are hand-sorted and stemless to ensure optimal culinary grade and shelf life.',
    extendedDescription: 'Dried under hygienic sun beds, our red chilies undergo thorough cleaning, Sortex color sorting, and metal detection to comply with international pesticide and aflatoxin limits.',
    specifications: [
      { label: 'Type / Grade', value: 'Guntur S17 / Teja / Sanam Premium' },
      { label: 'Moisture', value: '10.0% to 12.0% Max' },
      { label: 'Purity', value: '99% Sortex Clean' },
      { label: 'Foreign Matter', value: '0.5% Max' },
      { label: 'Pungency (heat)', value: '15,000 to 75,000 SHU' },
      { label: 'Origin', value: 'Gujarat / Andhra Pradesh, India' }
    ],
    benefits: [
      'Rich in Vitamin C and bioactive capsaicin for natural culinary value',
      'Vibrant natural red coloring (ASTA value 70-120) with zero additives',
      'Strictly checked for aflatoxin and ochratoxin under European import protocols'
    ],
    packingOptions: [
      '10 kg / 25 kg Strong Gunny Jute Bags',
      '15 kg Kraft Paper Bags for retail stores',
      'Custom bulk packaging with client brand printing'
    ],
    image: '/red-chili.png'
  },
  {
    id: 'turmeric',
    name: 'Salem Turmeric Fingers',
    tagline: 'Premium Double-Polished Turmeric with High Curcumin',
    category: 'spices',
    description: 'Premium Salem turmeric fingers are selected for their thick density, deep golden-orange core, and high curcumin content. An essential spice for global pharmaceuticals, food processing, and cosmetics.',
    extendedDescription: 'Polished mechanically using state-of-the-art brush polishers to yield clean, dirt-free turmeric fingers. Free from lead chromate or artificial coloring.',
    specifications: [
      { label: 'Type', value: 'Salem / Nizamabad Double Polished Fingers' },
      { label: 'Curcumin Content', value: '3.5% to 4.5% Minimum' },
      { label: 'Moisture', value: '9.0% to 10.0% Max' },
      { label: 'Admixture', value: '1.0% Max' },
      { label: 'Foreign Matter', value: '0.5% Max' },
      { label: 'Defective / Bulbs', value: '2.0% Max' },
      { label: 'Origin', value: 'Maharashtra / Tamil Nadu, India' }
    ],
    benefits: [
      'High Curcumin concentration offering maximum anti-inflammatory potency',
      'Mechanical double-polishing ensures shiny dust-free export quality',
      '100% natural, certified pesticide-free for global food safety approvals'
    ],
    packingOptions: [
      '25 kg Double-Woven PP Bags with moisture protection lining',
      '50 kg Strong Jute Bags for bulk milling cargo',
      'Custom moisture-barrier vacuum packs'
    ],
    image: '/turmeric.png'
  },
  {
    id: 'coriander',
    name: 'Whole Coriander Seeds',
    tagline: 'Eagle / Badami Quality Aromatic Coriander Seeds',
    category: 'spices',
    description: 'Our coriander seeds feature a pleasant aromatic fragrance, high essential oil content, and a clean oval structure. Sourced from Rajasthan, they are widely used for spice milling, cooking oils, and seasonings.',
    extendedDescription: 'Cleaned and sorted through Sortex color sorters to ensure uniform green-gold color grains and zero hollow seeds.',
    specifications: [
      { label: 'Grade / Quality', value: 'Eagle / Badami / Sortex Clean 99%' },
      { label: 'Moisture', value: '8.0% to 9.0% Max' },
      { label: 'Admixture', value: '1.0% Max' },
      { label: 'Damaged / Discolored', value: '1.5% Max' },
      { label: 'Splits', value: '5.0% Max' },
      { label: 'Essential Oil Content', value: '0.3% to 0.5% Min' },
      { label: 'Origin', value: 'Rajasthan / Gujarat, India' }
    ],
    benefits: [
      'High essential oil content providing rich aroma and distinct warm flavor',
      'Carefully dried and sorted to maintain biological freshness and prevent rot',
      'Fully compliant with global microbial and heavy metal safety limits'
    ],
    packingOptions: [
      '20 kg / 25 kg Multi-wall Paper Bags',
      '25 kg PP Woven Bags with inner polythene lining',
      'Custom buyer-branded packaging for bulk retail'
    ],
    image: '/coriander.png'
  },
  {
    id: 'sesame-seeds',
    name: 'Natural White Sesame Seeds',
    tagline: '99.99% Purity Sortex Clean White Sesame Seeds',
    category: 'agro',
    description: 'Premium natural white sesame seeds, Sortex-cleaned to achieve an outstanding 99.99% purity. Known for their high oil content, sweet nutty flavor, and premium crunch.',
    extendedDescription: 'Harvested from Gujarat’s finest agricultural soils, our sesame seeds are mechanically cleaned, washed, and dried under strict quality control to ensure zero foreign matter.',
    specifications: [
      { label: 'Type / Grade', value: 'Natural White Sesame Seeds (99.99% Purity)' },
      { label: 'Moisture', value: '5.0% Max' },
      { label: 'Admixture', value: '0.01% Max (Sortex Clean)' },
      { label: 'Oil Content', value: '48% to 50% Minimum' },
      { label: 'FFA (Free Fatty Acids)', value: '1.0% Max' },
      { label: 'E-Coli & Salmonella', value: 'Absent / 25g' },
      { label: 'Origin', value: 'Gujarat, India' }
    ],
    benefits: [
      'Outstanding 99.99% purity level ensuring a premium blemish-free product',
      'Rich in calcium, proteins, and sesamin antioxidants for healthy diets',
      'High oil content makes them ideal for premium oil expellers and bakery use'
    ],
    packingOptions: [
      '25 kg / 50 kg Woven PP Bags',
      '25 kg Multi-layer Kraft Paper Bags',
      'Vacuum packed 22.68 kg (50 lbs) cartons for bakeries'
    ],
    image: '/sesame.png'
  },
  {
    id: 'kashmiri-chili',
    name: 'Kashmiri Red Chili',
    tagline: 'Premium Mild-Heat Vibrant Deep-Red Chilies',
    category: 'spices',
    description: 'Kashmiri Red Chilies are highly popular worldwide for their vibrant deep red color and mild, pleasant heat. They are widely used in tandoori, curries, and snack manufacturing to provide a rich visual appeal without overwhelming pungency.',
    extendedDescription: 'Dried under hygienic sun beds, our Kashmiri red chilies undergo thorough cleaning, Sortex color sorting, and metal detection to comply with international pesticide and aflatoxin limits. Sourced with care to preserve their premium quality.',
    specifications: [
      { label: 'Type / Grade', value: 'Kashmiri Dry Red Chili (With Stem & Stemless)' },
      { label: 'Moisture', value: '10.0% to 12.0% Max' },
      { label: 'Purity', value: '99% Sortex Clean' },
      { label: 'Foreign Matter', value: '0.5% Max' },
      { label: 'Pungency (heat)', value: '8,000 to 12,000 SHU (Mild)' },
      { label: 'Color (ASTA value)', value: '120 to 150 (Deep Red)' },
      { label: 'Origin', value: 'Kashmir / Gujarat, India' }
    ],
    benefits: [
      'Vibrant deep red coloring (ASTA value 120-150) with zero artificial dyes',
      'Mild heat profile perfect for global seasoning, curries, and blends',
      'Fully certified compliant for aflatoxins and pesticide residues'
    ],
    packingOptions: [
      '10 kg / 25 kg Strong Gunny Jute Bags',
      '15 kg Kraft Paper Bags for wholesale',
      'Custom buyer branding packaging'
    ],
    image: '/kashmiri-chili.png'
  },
  {
    id: 'regular-chili',
    name: 'Regular Red Chili',
    tagline: 'Standard Balanced Heat & Coloring Red Chilies',
    category: 'spices',
    description: 'Regular Red Chilies provide a balanced ratio of medium pungency and natural red color. Sourced from Gujarat and Madhya Pradesh, they are the workhorse of spice processing, ideal for regular table chili powder and general culinary applications.',
    extendedDescription: 'Harvested at peak ripeness, our regular red chilies are mechanically dried and sorted to ensure consistent heat levels, minimal seed loss, and a clean product free from dust and contaminants.',
    specifications: [
      { label: 'Type / Grade', value: 'S4 / Sanam Regular Export Grade' },
      { label: 'Moisture', value: '10.0% to 12.0% Max' },
      { label: 'Purity', value: '99% Sortex Clean' },
      { label: 'Foreign Matter', value: '0.5% Max' },
      { label: 'Pungency (heat)', value: '15,000 to 25,000 SHU (Medium)' },
      { label: 'Color (ASTA value)', value: '60 to 95' },
      { label: 'Origin', value: 'Gujarat / Madhya Pradesh, India' }
    ],
    benefits: [
      'Balanced heat and color profile suitable for daily culinary preparations',
      'Sun-dried hygienically to preserve core essential oils',
      'Available in stem and stemless options based on buyer specification'
    ],
    packingOptions: [
      '10 kg / 25 kg Gunny Jute Bags',
      '25 kg Woven PP Bags with inner liner',
      'Custom bulk shipping bags'
    ],
    image: '/regular-chili.png'
  },
  {
    id: 'cumin-seeds',
    name: 'Premium Cumin Seeds',
    tagline: 'Aromatic & High Essential Oil Whole Cumin Seeds (Jeera)',
    category: 'spices',
    description: 'Indian Cumin Seeds (Jeera) are globally appreciated for their strong warm aroma and high thymol oil concentration. Sourced from the dry plains of Gujarat and Rajasthan, our cumin seeds undergo strict mechanical cleaning to deliver premium export quality.',
    extendedDescription: 'Our export-grade cumin seeds are double machine cleaned and Sortex-sorted to achieve 99.5% purity. We perform rigorous batch-testing to ensure compliance with strict European and US FDA standards.',
    specifications: [
      { label: 'Grade / Quality', value: 'Singapore Quality 99% / Europe Quality 99.5% Purity' },
      { label: 'Moisture', value: '7.0% to 8.5% Max' },
      { label: 'Admixture', value: '0.5% to 1.0% Max' },
      { label: 'Foreign Matter', value: 'Strictly Negative' },
      { label: 'Volatile Oil Content', value: '1.5% to 2.5% Minimum' },
      { label: 'Pesticide Residue', value: 'Compliant with EU / US FDA standards' },
      { label: 'Origin', value: 'Gujarat / Rajasthan, India' }
    ],
    benefits: [
      'Rich in thymol oil, providing intense warm earthy flavor and aroma',
      'Double machine cleaned and Sortex sorted to remove all stalks and dust',
      'High digestive and health properties, popular in global seasonings'
    ],
    packingOptions: [
      '25 kg / 50 kg Strong Woven PP Bags',
      '25 kg Multi-layer Kraft Paper Bags',
      'Custom vacuum packages for premium retail'
    ],
    image: '/cumin.png'
  },
  {
    id: 'kitchen-king',
    name: 'Kitchen King Masala',
    tagline: 'All-Purpose Premium Classic Curry Blend',
    category: 'spices',
    description: 'Kitchen King Masala is the ultimate all-purpose Indian spice mix, crafted from a curated recipe of over 20 premium spices. Perfectly balanced to add a rich, dark golden hue and a deep savory aroma to classic vegetable, cottage cheese, and gravy dishes.',
    extendedDescription: 'Our Kitchen King Masala is milled at low temperatures to prevent the loss of volatile flavor compounds. Each batch is blended in dynamic hygienic mills to maintain absolute recipe consistency.',
    specifications: [
      { label: 'Blend Composition', value: 'Turmeric, Coriander, Cumin, Black Pepper, Ginger, Cardamom, Nutmeg, Cloves' },
      { label: 'Form', value: 'Fine Ground Powder' },
      { label: 'Moisture', value: '8.0% Max' },
      { label: 'Preservatives / Additives', value: '100% Zero Artificial Preservatives or Fillers' },
      { label: 'Microbial Count', value: 'Standard Export Quality Compliant' },
      { label: 'Origin', value: 'Gujarat, India' }
    ],
    benefits: [
      'All-in-one flavor booster saving prep time in commercial kitchens',
      'Specially sealed in multi-layer moisture-barrier bags to retain flavor lock',
      'Sourced from 100% natural, pesticide-verified ingredients'
    ],
    packingOptions: [
      '100g / 500g / 1kg Premium Foil Pouches',
      '20 kg Bulk Master Cartons with inner liners',
      'Custom packaging options available'
    ],
    image: '/kitchen-king.png'
  },
  {
    id: 'garam-masala',
    name: 'Premium Garam Masala',
    tagline: 'Warm, Fragrant Traditional Spice Blend',
    category: 'spices',
    description: 'Garam Masala is a traditional Indian spice blend made of warm, aromatic spices like cardamom, cinnamon, cloves, and black pepper. Sourced and ground at low temperatures to retain natural volatile oils, it adds warmth, depth, and sweet-spicy notes to curries and broths.',
    extendedDescription: 'We select only premium grade, whole raw ingredients—no waste or spent spices—to create this robust blend. Ideal for premium spice labels and food processing industries globally.',
    specifications: [
      { label: 'Blend Composition', value: 'Cardamom, Cinnamon, Cloves, Black Pepper, Cumin, Coriander, Nutmeg, Mace, Star Anise' },
      { label: 'Form', value: 'Coarse / Fine Ground Powder' },
      { label: 'Moisture', value: '8.0% Max' },
      { label: 'Volatile Oils', value: 'High retention via low-temperature milling' },
      { label: 'Salt / Fillers', value: 'Nil (100% Pure Spice)' },
      { label: 'Origin', value: 'Gujarat, India' }
    ],
    benefits: [
      'Rich in warm digestive spices with high natural aromatic oil retention',
      'Zero fillers, salts, or artificial flavor enhancers added',
      'Hand-selected whole spices used in the roasting and blending process'
    ],
    packingOptions: [
      '100g / 250g / 500g Premium Stand-up Pouches',
      '25 kg Bulk Kraft Bags with moisture barrier',
      'Custom sizes on request'
    ],
    image: '/garam-masala.png'
  }
];

export const EXPORT_MARKETS: ExportMarket[] = [
  {
    id: 'uae',
    name: 'United Arab Emirates / Gulf Region',
    region: 'Middle East',
    flag: 'ae',
    description: 'As a mega-hub for re-export and domestic food supply, the UAE (particularly Dubai Jebel Ali Port) is a primary market for our premium aromatic Basmati Rice and snacks peanuts.',
    transitAdvantage: 'Extremely fast 4-5 days direct oceanic transit from the Mundra Port container lanes.',
    keyProducts: ['Basmati Rice', 'Bold Peanuts', 'Java Peanuts'],
  },
  {
    id: 'vietnam',
    name: 'Vietnam (Hai Phong & Ho Chi Minh Ports)',
    region: 'South East Asia',
    flag: 'vn',
    description: 'A critical partner for raw materials. Vietnam is a massive buyer of high-protein Indian Java peanuts for snack processing, confectionery manufacturing, and logistics redistribution.',
    transitAdvantage: 'Frequent mother-vessel connections departing weekly, arriving in approximately 12-14 days.',
    keyProducts: ['Java Peanut Kernels', 'Bold Peanuts', 'Non-Basmati Rice'],
  },
  {
    id: 'indonesia',
    name: 'Indonesia (Jakarta, Surabaya Ports)',
    region: 'South East Asia',
    flag: 'id',
    description: 'Indonesia represents one of the largest food-grade non-basmati rice and industrial peanut importers globally. Sourcing custom packing configurations fits Indonesian customs guidelines.',
    transitAdvantage: 'High-performance customs documentation clearance and Phytosanitary endorsement prior to departure.',
    keyProducts: ['Non-Basmati Rice', 'Java Peanuts', 'Bold Peanuts'],
  },
  {
    id: 'middle-east',
    name: 'Kingdom of Saudi Arabia, Oman & Gulf Network',
    region: 'Middle East',
    flag: 'sa',
    description: 'Our aromatic aged Basmati rice serves luxury culinary markets, hospitality suppliers, and gourmet packaging entities stretching from Riyadh to Muscat.',
    transitAdvantage: 'Equipped with cold-treatment ocean freight monitoring systems to preserve aroma.',
    keyProducts: ['Basmati Rice', 'Bold Peanuts'],
  },
  {
    id: 'southeast-asia',
    name: 'Malaysia, Philippines & Singapore Trade Channels',
    region: 'South East Asia',
    flag: 'sg',
    description: 'Providing crucial agricultural supply line security to key ports globally. We support small, medium, and state-level bulk tender requests with prompt schedules.',
    transitAdvantage: 'Strategic trade lane tariffs optimization via Indo-ASEAN free trade certification support.',
    keyProducts: ['Non-Basmati Rice', 'Basmati Rice', 'Java Peanuts'],
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'iec',
    code: 'IEC Code / Import Export License',
    name: 'Import Export Code (IEC)',
    authority: 'Directorate General of Foreign Trade (DGFT), Ministry of Commerce, Government of India',
    description: 'This mandatory unique ten-digit registration code certifies Rs Tradixo Global as a registered commercial international corporate merchant legal exporter of goods from India.',
    purpose: 'Required for custom clearance, port handling gates validation, and lawful wire transfer transactions.',
    logo: '/iec-logo.png',
  },
  {
    id: 'fssai',
    code: 'FSSAI License / Food Safety Registration',
    name: 'Food Safety and Standards License',
    authority: 'Food Safety and Standards Authority of India (FSSAI), Ministry of Health & Family Welfare',
    description: 'Assures global buyers that all food commodities handled, processed, packed, and stored by Rs Tradixo Global conform to strict national food safety, sanitary, and hygiene rules.',
    purpose: 'Mandatory standard validation for edible imports in Europe, UAE, North American, and Asian custom portals.',
    logo: '/fssai-logo.png',
  },
  {
    id: 'apeda',
    code: 'APEDA Registration Certificate',
    name: 'APEDA Export Authorization',
    authority: 'Agricultural & Processed Food Products Export Development Authority (APEDA), Ministry of Commerce, Govt of India',
    description: 'Official registration under APEDA authorizes Rs Tradixo Global to export scheduled agricultural and processed food products including groundnuts, rice, spices, and agro commodities from India.',
    purpose: 'Mandatory for exporting scheduled products. Enables access to APEDA export incentive schemes, trade fairs, and official buyer-seller meets.',
    logo: '/apeda-logo.png',
  },
  {
    id: 'gst',
    code: 'GST Registration Certificate',
    name: 'Goods & Services Tax (GST) Registration',
    authority: 'Central Board of Indirect Taxes and Customs (CBIC), Ministry of Finance, Government of India',
    description: 'Active GST registration confirms Rs Tradixo Global as a fully tax-compliant entity for domestic procurement, interstate supply chain operations, and export under bond/LUT for zero-rated international shipments.',
    purpose: 'Essential for claiming Input Tax Credit, issuing tax invoices, filing export declarations, and maintaining full financial transparency with overseas trade partners.',
    logo: '/gst-logo.png',
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How does Rs Tradixo Global guarantee peanut quality against aflatoxin?',
    a: 'Aflatoxin is the primary concern for global peanut imports. We source our groundnuts only from registered pest-compliant farmers in high-quality clay soil regions. After harvesting, they are stored in dry, humidity-monitored warehouse facilities. Prior to shipment, we carry out random laboratory sampling. We also permit independent third-party inspection agencies (SGS / Geo-Chem) to extract samples directly at the port to issue European-compliant certification under 4 PPB total limits.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) for overseas shipment?',
    a: 'Our standard export Minimum Order Quantity is 1 Full Container Load (FCL). For Peanuts, a 20ft container can hold approximately 19 to 20 Metric Tons depending on packing configuration. For Rice, a 20ft container holds approximately 24 to 25 Metric Tons. For specific trial loads, please consult our sales specialists in Mundra.',
  },
  {
    q: 'Why does your Gujarat location near Mundra Port matter for global trade?',
    a: 'Mundra Port in Gujarat is India\'s largest bulk and container private gateway port, equipped with state-of-the-art automated berths. Our proximity reduces inland transit transport delays, minimizes cargo handling damage risks, and protects our clients from delays, allowing us to load cargo on vessel tracks within 48 hours of packaging.',
  },
  {
    q: 'Do you offer private labeling or custom brand print packaging?',
    a: 'Yes, absolutely. We support several global retail and wholesale supermarket chains with customized packaging. We can write and print your custom brand, localized languages, trade weight barcodes, and import licenses on raw high-grade BOPP, canvas jute, or multi-layer PP packets in sizing from 1kg up to 50kg bags.',
  },
  {
    q: 'What are your standard payment terms for international bulk orders?',
    a: 'We accept 100% Irrevocable Letter of Credit (L/C at Sight) issued by prime international banks, or Telegraphic Transfer (T/T) deposits (30% advance deposit upon contract signature, 70% balance payable upon presentation of original shipping and customs documents).',
  },
  {
    q: 'How do you prevent moisture and spoilage during transoceanic container voyages?',
    a: 'We deploy multi-stage moisture guards: we only load cargo with secure natural dryness levels (under 8% for Peanuts and 14% for Rice). Additionally, we fit ocean containers with premium desiccants (silica gel absorber pads) and heavy kraft cargo inner-lining paper to completely isolate the shipping commodity from oceanic condensation and humidity spikes.',
  }
];
