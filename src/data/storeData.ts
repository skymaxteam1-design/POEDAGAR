import poedagarBlackWatchImg from '../assets/images/poedagar_black_watch_1794506573318.jpg';
import lanyardWatchesImg from '../assets/images/lanyard_pocket_watches_1794506575714.jpg';
import flatlayImg from '../assets/images/luxury_watch_flatlay_1794506574556.jpg';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'wristwatch' | 'lanyard' | 'bundle';
  priceUSD: number;
  priceNGN: number;
  originalPriceUSD?: number;
  originalPriceNGN?: number;
  rating: number;
  reviewCount: number;
  stockCount: number;
  image: string;
  badge?: string;
  headline: string;
  body: string;
  features: {
    title: string;
    description: string;
  }[];
  colorways?: {
    name: string;
    hex: string;
    bgClass: string;
  }[];
  specifications: Record<string, string>;
  deliveryInfo: string;
  orderNotes: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  verifiedPurchase: boolean;
  productName: string;
  productId: string;
  title: string;
  content: string;
  image?: string;
  avatarInitials: string;
  helpfulCount: number;
  styleTag?: string;
}

export interface AIPromptItem {
  id: string;
  title: string;
  targetSubject: string;
  styleCategory: string;
  aspectRatio: string;
  sampleImage: string;
  promptText: string;
  lightingNotes: string;
  recommendedUse: string;
}

export const STORE_PHONE_NUMBER = '+447532772917';
export const STORE_PHONE_DISPLAY = '+44 7532 772917';

export const PRODUCTS: Product[] = [
  {
    id: 'poedagar-minimalist-black',
    name: 'POEDAGAR Minimalist Black Watch',
    subtitle: 'Ultra-Sleek Cushion-Dial Timepiece in Matte Black Stainless Steel',
    category: 'wristwatch',
    priceUSD: 45,
    priceNGN: 45,
    originalPriceUSD: 65,
    originalPriceNGN: 65,
    rating: 4.9,
    reviewCount: 148,
    stockCount: 7,
    image: poedagarBlackWatchImg,
    badge: 'Best Seller • Limited Stock',
    headline: 'Elevate Your Daily Style — The Poedagar Sleek Minimalist Watch ✨',
    body: 'Redefine sophistication with this ultra-sleek, cushion-dial timepiece. Designed for the modern trendsetter, it seamlessly blends timeless luxury with everyday comfort. Whether you’re stepping into a boardroom meeting or heading out for dinner, it adds the perfect touch of quiet elegance to your wrist.',
    features: [
      {
        title: 'Precision Quartz Movement',
        description: 'Engineered for whisper-quiet accuracy and dependable everyday timing.',
      },
      {
        title: 'Minimalist Cushion Bezel',
        description: 'Sculpted cushion geometry with micro-textured sub-dial detailing for modern elegance.',
      },
      {
        title: 'Durable Matte Black Stainless Steel',
        description: 'PVD scratch-resistant satin matte finish with breathable ergonomic link bracelet.',
      },
      {
        title: 'Signature Luxury Gift Packaging',
        description: 'Ships in a textured off-white luxury gift box with satin pillow & embossed authenticity/warranty card.',
      },
      {
        title: 'Everyday Splash-Proof',
        description: 'Rated 3ATM water resistance for confident handwashing, rain, and daily wear.',
      },
    ],
    colorways: [
      { name: 'Matte Onyx Black', hex: '#121214', bgClass: 'bg-zinc-900' },
      { name: 'Brushed Charcoal Grey', hex: '#27272a', bgClass: 'bg-zinc-800' },
    ],
    specifications: {
      'Movement': 'High-Precision Japanese Quartz Caliber',
      'Case Diameter': '39mm Geometric Cushion Bezel',
      'Case Thickness': '8.2mm Ultra-Thin Profile',
      'Band Material': 'Matte Black Coated 316L Stainless Steel',
      'Dial Window': 'Reinforced Anti-Scratch Mineral Crystal',
      'Water Resistance': '3ATM / 30m Splash-Proof',
      'Clasp Type': 'Double Push-Button Butterfly Deployment',
      'Warranty': '1-Year International Manufacturer Warranty',
    },
    deliveryInfo: 'Fast international & worldwide dispatch within 24–48 hours. Direct tracked courier delivery with secure payment.',
    orderNotes: 'Ships in signature gift box with authenticity warranty card. WhatsApp/Call: +44 7532 772917. Limited pieces in stock!',
  },
  {
    id: 'lanyard-pocket-watch',
    name: 'Chic Lanyard Pocket Timepiece',
    subtitle: 'Octagonal Bezel Mini-Watch on Stitched Leatherette Lanyard',
    category: 'lanyard',
    priceUSD: 30,
    priceNGN: 30,
    originalPriceUSD: 40,
    originalPriceNGN: 40,
    rating: 4.9,
    reviewCount: 96,
    stockCount: 12,
    image: lanyardWatchesImg,
    badge: 'Trending Streetwear Hit',
    headline: 'The New Way to Wear Time ⏱️ — Chic Lanyard Pocket Timepieces',
    body: 'Move beyond the wrist. Introducing our new statement lanyard mini-watches — the ultimate fusion of classic horology and modern street-style accessories. Loop them through your belt loop, hang them on your designer handbag, or wear them as a statement pendant.',
    features: [
      {
        title: 'Bold Octagonal Bezel',
        description: 'Premium geometric case inspired by haute horlogerie with gold accents and high-contrast dial.',
      },
      {
        title: 'Versatile Multi-Way Styling',
        description: 'Clip to denim belt loops, outerwear, or use as a statement bag charm / jewelry pendant.',
      },
      {
        title: '4 Chic Colorways',
        description: 'Available in Classic Noir, Crisp Porcelain White, Pastel Sky Blue, and Fresh Mint.',
      },
      {
        title: 'Durable Stitched Build',
        description: 'Lightweight alloy case with reinforced stitched leatherette lanyard and gold-tone lobster clip.',
      },
      {
        title: 'Special Bundle Discount',
        description: 'Buy 2 or more pieces for just $50 (Save $10 automatically at checkout).',
      },
    ],
    colorways: [
      { name: 'Classic Noir', hex: '#111827', bgClass: 'bg-black' },
      { name: 'Crisp Porcelain White', hex: '#F9FAFB', bgClass: 'bg-slate-100' },
      { name: 'Pastel Sky Blue', hex: '#93C5FD', bgClass: 'bg-blue-300' },
      { name: 'Fresh Mint', hex: '#6EE7B7', bgClass: 'bg-emerald-300' },
    ],
    specifications: {
      'Movement': 'Compact Precision Quartz Cell',
      'Case Shape': 'Octagonal Bezel with Gold Polished Trim',
      'Case Width': '28mm Micro Statement Scale',
      'Lanyard Length': '24cm Reinforced Stitched Leatherette with Quick-Release Ring',
      'Hardware': 'Anti-Tarnish Brushed Brass / Gold-tone Alloy Clasp',
      'Weight': '42g (Featherlight for bags and belt-loops)',
      'Water Resistance': 'Splash Resistant',
      'Packaging': 'Velvet Jewelry Pouch & Box',
    },
    deliveryInfo: 'Fast dispatch within 24–48 hours. Express courier with tracking number provided via WhatsApp (+44 7532 772917).',
    orderNotes: 'Bundle special: Save $10 on 2 or more colorways for styling versatility.',
  },
  {
    id: 'lanyard-collector-bundle',
    name: 'The Duo Collector Bundle (2x Lanyard Watches)',
    subtitle: 'Choose Any 2 Colorways (Classic Noir, Porcelain, Sky Blue, or Mint)',
    category: 'bundle',
    priceUSD: 50,
    priceNGN: 50,
    originalPriceUSD: 60,
    originalPriceNGN: 60,
    rating: 5.0,
    reviewCount: 42,
    stockCount: 9,
    image: lanyardWatchesImg,
    badge: 'Save $10 Today',
    headline: 'Double the Style — Handbag Charm + Belt-Loop Styling Bundle ✨',
    body: 'Why pick just one color when you can mix and match? Pair Classic Noir with Sky Blue or Porcelain White with Mint. Keep one clipped to your everyday denim and attach the second to your favorite designer tote.',
    features: [
      {
        title: 'Includes 2x Lanyard Timepieces',
        description: 'Your choice of any two vibrant colorways with luxury gift pouches.',
      },
      {
        title: 'Instant Savings Applied',
        description: 'Reduced bundle pricing: $50 instead of $60 (Instant $10 discount).',
      },
      {
        title: 'Perfect Gift Pair',
        description: 'One for you, one for your stylish bestie or partner.',
      },
    ],
    specifications: {
      'Included in Box': '2x Octagonal Lanyard Watches + 2x Velvet Bags + Warranty Cards',
      'Color Choice': 'Select any 2 at checkout or via WhatsApp message (+44 7532 772917)',
      'Delivery': 'Ships together in one secure presentation parcel',
    },
    deliveryInfo: 'Free express tracked shipping. Dispatches within 24 hours.',
    orderNotes: 'Most popular customer choice for gifting and street fashion styling.',
  },
  {
    id: 'connoisseur-curated-set',
    name: 'The Connoisseur Curated Set',
    subtitle: '1x POEDAGAR Minimalist Black Watch + 2x Lanyard Timepieces + Gift Boxes',
    category: 'bundle',
    priceUSD: 89,
    priceNGN: 89,
    originalPriceUSD: 105,
    originalPriceNGN: 105,
    rating: 5.0,
    reviewCount: 29,
    stockCount: 4,
    image: flatlayImg,
    badge: 'Ultimate Luxury Trio',
    headline: 'The Complete Modern Horology Capsule',
    body: 'The definitive collection for the refined wardrobe. Enjoy the boardroom poise of the POEDAGAR Cushion Black Watch alongside two playful Lanyard Timepieces for casual weekends and chic travel outings.',
    features: [
      {
        title: 'All-Occasion Versatility',
        description: 'Formal wristwatch elegance paired with modern streetwear lanyards.',
      },
      {
        title: 'VIP Packaging Included',
        description: 'Comes in the signature off-white luxury gift box with satin pillow, certificate card, and velvet pouches.',
      },
      {
        title: 'Priority 24h Express Dispatch',
        description: 'Direct courier handling with tracking link sent directly via WhatsApp (+44 7532 772917).',
      },
    ],
    specifications: {
      'Set Contents': '1x POEDAGAR Minimalist Black Watch + 2x Lanyard Pocket Watches',
      'Value': '$105 Total Retail Value',
      'Savings': '$16 Instant Curated Bundle Discount',
    },
    deliveryInfo: 'Priority doorstep delivery worldwide. Complimentary gift wrapping included upon request.',
    orderNotes: 'Only 4 curated sets available for this production run.',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-01',
    author: 'Amina Laurent',
    location: 'Mayfair, London, UK',
    rating: 5,
    date: '3 days ago',
    verifiedPurchase: true,
    productName: 'POEDAGAR Minimalist Black Watch',
    productId: 'poedagar-minimalist-black',
    title: 'The matte black cushion dial is pure quiet luxury!',
    content: 'I wore this to a major client strategy presentation in Central London and received three separate compliments before lunchtime! The weight feels substantial and balanced, not flimsy at all. The off-white gift box with the satin pillow and certificate of authenticity made the unboxing feel like I bought a $500 Swiss watch.',
    image: poedagarBlackWatchImg,
    avatarInitials: 'AL',
    helpfulCount: 38,
    styleTag: 'Boardroom & Formal Wear',
  },
  {
    id: 'rev-02',
    author: 'Chioma Keller',
    location: 'SoHo, New York, USA',
    rating: 5,
    date: '5 days ago',
    verifiedPurchase: true,
    productName: 'Chic Lanyard Pocket Timepiece (Sky Blue)',
    productId: 'lanyard-pocket-watch',
    title: 'Clips right to my jeans — the biggest fashion conversation starter!',
    content: 'I saw the editorial photos with the red coat and wide-leg jeans and immediately ordered the Pastel Sky Blue lanyard watch. It is even better in person. The gold octagonal bezel catches the sunlight beautifully, and the stitched leatherette strap feels durable. I also looped it around the top handle of my handbag yesterday on 5th Avenue and it looked insane.',
    image: lanyardWatchesImg,
    avatarInitials: 'CK',
    helpfulCount: 29,
    styleTag: 'Streetwear Denim Styling',
  },
  {
    id: 'rev-03',
    author: 'David Oladipo',
    location: 'Kensington, London, UK',
    rating: 5,
    date: '1 week ago',
    verifiedPurchase: true,
    productName: 'POEDAGAR Minimalist Black Watch',
    productId: 'poedagar-minimalist-black',
    title: 'Flawless gift presentation & fast delivery',
    content: 'Purchased this as a 30th birthday present for my brother while I was travelling in the UK. Dispatched within 24 hours, and payment was completely straightforward. He called me ecstatic when he opened the textured box and felt the matte finish on the links. Precision quartz has kept exact time to the second.',
    avatarInitials: 'DO',
    helpfulCount: 21,
    styleTag: 'Gift Unboxing',
  },
  {
    id: 'rev-04',
    author: 'Zainab Moretti',
    location: 'Milan, Italy',
    rating: 5,
    date: '2 weeks ago',
    verifiedPurchase: true,
    productName: 'The Duo Collector Bundle (Classic Noir + Porcelain White)',
    productId: 'lanyard-collector-bundle',
    title: 'Got the 2-piece bundle — one for my bag, one for my pants!',
    content: 'Saving money on the bundle was such a great deal. The Porcelain White has this clean vintage Parisian vibe, while the Classic Noir goes with every tailored blazer I own. I have never seen anyone in Milan with a timepiece like this. Friends keep asking where I found it.',
    image: lanyardWatchesImg,
    avatarInitials: 'ZM',
    helpfulCount: 17,
    styleTag: 'Handbag Charm Accents',
  },
  {
    id: 'rev-05',
    author: 'Marcus Thornton',
    location: 'Atlanta, Georgia, USA',
    rating: 5,
    date: '2 weeks ago',
    verifiedPurchase: true,
    productName: 'POEDAGAR Minimalist Black Watch',
    productId: 'poedagar-minimalist-black',
    title: 'Ultra-thin 8mm profile slips effortlessly under dress shirts',
    content: 'Most modern cushion watches are way too chunky. This one sits flush against the wrist at only 8.2mm thickness. The butterfly deployment clasp operates smoothly, and the mineral crystal dial has survived accidental knocks against my desk without a scratch.',
    avatarInitials: 'MT',
    helpfulCount: 14,
    styleTag: 'Everyday Minimalist Fit',
  },
  {
    id: 'rev-06',
    author: 'Folashade Adeleke',
    location: 'Toronto, Ontario, Canada',
    rating: 5,
    date: '3 weeks ago',
    verifiedPurchase: true,
    productName: 'The Connoisseur Curated Set',
    productId: 'connoisseur-curated-set',
    title: 'Worldwide express delivery was smooth and the quality exceeded expectations',
    content: 'I ordered the trio set for delivery to Toronto, Canada. The courier parcel arrived in pristine condition within 48 hours, allowing me to inspect the packaging and check the warranty card. You get both the formal black timepiece and two fun lanyard watches. Will definitely be ordering more for holiday gifts.',
    image: flatlayImg,
    avatarInitials: 'FA',
    helpfulCount: 32,
    styleTag: 'Verified International Delivery',
  },
  {
    id: 'rev-07',
    author: 'Tariq Al-Mansoor',
    location: 'Downtown Dubai, UAE',
    rating: 4,
    date: '1 month ago',
    verifiedPurchase: true,
    productName: 'POEDAGAR Minimalist Black Watch',
    productId: 'poedagar-minimalist-black',
    title: 'Minimalist dial is very legible despite the all-black aesthetic',
    content: 'I was worried an all-black watch might be difficult to read in dim lighting, but the polished indices and hands catch reflections nicely. Takes about 2 minutes to resize the strap with a standard pin tool. Solid 4.5 stars rounded up to 5.',
    avatarInitials: 'TA',
    helpfulCount: 9,
    styleTag: 'Night & Evening Outings',
  },
  {
    id: 'rev-08',
    author: 'Elena Rossi',
    location: 'Paris, France',
    rating: 5,
    date: '1 month ago',
    verifiedPurchase: true,
    productName: 'Chic Lanyard Pocket Timepiece (Mint)',
    productId: 'lanyard-pocket-watch',
    title: 'The Mint colorway with gold bezel is breathtaking!',
    content: 'The pastel mint tone is so soft and aesthetic. I clipped it to my linen summer trousers and wore it to brunch in Le Marais. Everyone wanted to hold it. Battery was already running and set to GMT.',
    avatarInitials: 'ER',
    helpfulCount: 11,
    styleTag: 'Weekend Casual Chic',
  },
];

export const AI_PROMPTS: AIPromptItem[] = [
  {
    id: 'prompt-1',
    title: 'Luxury Boxed Watch Photography (Style of Image 1)',
    targetSubject: 'POEDAGAR Minimalist Black Watch in Presentation Box',
    styleCategory: 'Commercial Studio & E-Commerce Hero',
    aspectRatio: '4:3',
    sampleImage: poedagarBlackWatchImg,
    promptText: 'Commercial studio photography of a luxury minimalist square matte-black women\'s watch resting inside an open textured off-white luxury gift box, placed on a soft white satin pillow. An elegant embossed brand certificate card lies inside the box. Soft dramatic studio lighting, sharp focus on the dial, shot from a 45-degree angle, high-end editorial product catalog shot, 8k resolution, photorealistic, clean neutral background.',
    lightingNotes: 'Soft directional key light from top-left, subtle rim light highlighting the matte black bezel chamfers, balanced fill on the satin pillow.',
    recommendedUse: 'Hero website banners, Instagram carousel slide 1, luxury WhatsApp catalog display, Shopify product feature card.',
  },
  {
    id: 'prompt-2',
    title: 'Fashion Lifestyle & Detail Shots (Style of Image 2)',
    targetSubject: 'Chic Lanyard Pocket Timepieces on Model',
    styleCategory: 'High-Fashion Street Style Editorial',
    aspectRatio: '4:3',
    sampleImage: lanyardWatchesImg,
    promptText: 'Fashion editorial close-up shot of a chic model wearing vintage high-waisted denim jeans and a tailored red coat. Hanging from the jean belt loops are three miniature octagonal bezel pocket watches on sleek stitched leather lanyards in matte black, off-white, and pastel baby blue. Manicured hands with gold statement rings interacting with the watches. Natural daylight, street-style aesthetic, hyper-realistic, 35mm lens photography, high fashion magazine look.',
    lightingNotes: 'Overcast golden-hour daylight, soft cobblestone pavement bounce, realistic fabric textures and natural hand depth.',
    recommendedUse: 'Lookbook spreads, Pinterest aesthetic boards, TikTok styling hooks, Instagram Reels cover photos.',
  },
  {
    id: 'prompt-3',
    title: 'Flat Lay / Social Media Hero Image',
    targetSubject: 'Travertine Marble Luxury Capsule Flat Lay',
    styleCategory: 'Editorial Lifestyle Flat Lay',
    aspectRatio: '16:9',
    sampleImage: flatlayImg,
    promptText: 'Minimalist aesthetic flat lay of three luxury designer timepieces placed alongside a premium leather wallet, designer sunglasses, and a modern perfume bottle on a beige travertine marble surface. Soft morning shadows, luxury boutique marketing photography, 8k, crisp details.',
    lightingNotes: 'Raking morning sunlight casting warm, long diagonal shadows across natural limestone porous textures.',
    recommendedUse: 'Full-width website hero header, desktop banner, paid Facebook/Instagram ad background, curated gift guide.',
  },
];

export const STYLING_GUIDE = [
  {
    number: '01',
    title: 'The Belt-Loop Clip',
    description: 'Hook the gold-toned clip onto the front right belt-loop of your high-waisted denim or pleated trousers. Let the mini octagonal timepiece rest gracefully against your hip.',
    vibe: 'Contemporary Chic / High-Street European',
  },
  {
    number: '02',
    title: 'The Designer Bag Charm',
    description: 'Fasten the stitched leatherette lanyard around the top handle or strap hardware of your leather tote, baguette bag, or crossbody. Function meets fine jewelry.',
    vibe: 'Quiet Luxury / It-Girl Accent',
  },
  {
    number: '03',
    title: 'The Avant-Garde Pendant',
    description: 'Thread the lanyard through a fine gold chain or slip it directly around the neck over an oversized knit, silk blouse, or structured blazer.',
    vibe: 'Editorial Statement / Horological Jewelry',
  },
];
