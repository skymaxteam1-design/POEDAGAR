import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Package,
  Star,
  CheckCircle2,
  Clock,
  Compass,
  ChevronRight,
  Eye,
  ShoppingBag,
  MessageCircle,
  Layers
} from 'lucide-react';
import { PRODUCTS, STYLING_GUIDE } from '../data/storeData';

export default function HomePage() {
  const {
    formatPrice,
    navigateToProduct,
    setActivePage,
    addToCart,
    openDirectOrder,
    reviews,
  } = useStore();

  const blackWatch = PRODUCTS.find((p) => p.id === 'poedagar-minimalist-black') || PRODUCTS[0];
  const lanyardWatch = PRODUCTS.find((p) => p.id === 'lanyard-pocket-watch') || PRODUCTS[1];
  const duoBundle = PRODUCTS.find((p) => p.id === 'lanyard-collector-bundle') || PRODUCTS[2];

  const featuredReviews = reviews.slice(0, 3);

  return (
    <div className="space-y-16 pb-20">
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F1422] via-[#0B0E16] to-[#0B0E16] border-b border-zinc-800/80 pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Brand Statement & Flagship Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-300 text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Atelier Horlogerie 2024 Collection • Limited Pieces In Stock</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                Elevate Your Daily Style with <span className="text-yellow-400">Quiet Elegance</span> &amp; Modern Craft.
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                Discover the iconic <strong className="text-white font-medium">POEDAGAR Minimalist Cushion Watch</strong> paired with our statement <strong className="text-white font-medium">Lanyard Pocket Timepieces</strong>. Designed for the modern trendsetter who values precision quartz engineering and distinct personal expression.
              </p>

              {/* Quick Feature Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="text-zinc-300">Signature Gift Box &amp; Card</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <Truck className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="text-zinc-300">24–48h Worldwide Dispatch</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 col-span-2 sm:col-span-1">
                  <Package className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="text-zinc-300">Tracked Express Courier</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => setActivePage('shop')}
                  className="px-6 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-yellow-400/20 transition-all active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop The Collection</span>
                </button>

                <button
                  onClick={() => navigateToProduct('poedagar-minimalist-black')}
                  className="px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 font-semibold text-xs tracking-wide flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Explore Minimalist Watch</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </button>
              </div>

              {/* Social Proof */}
              <div className="pt-2 flex items-center gap-3 text-xs text-zinc-400">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-zinc-200 font-semibold">4.9 / 5.0</span>
                <span>•</span>
                <span>Over 240+ verified client unboxings &amp; styling reviews</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Feature */}
            <div className="lg:col-span-5">
              <div className="relative group cursor-pointer" onClick={() => navigateToProduct(blackWatch.id)}>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-700/70 shadow-2xl">
                  <img
                    src={blackWatch.image}
                    alt="POEDAGAR Minimalist Black Watch in luxury presentation box"
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/90 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest">
                        Flagship Timepiece
                      </div>
                      <div className="font-serif font-bold text-white text-base">
                        {blackWatch.name}
                      </div>
                      <div className="text-xs text-zinc-400">
                        {blackWatch.subtitle}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-yellow-300">
                        {formatPrice(blackWatch.priceUSD, blackWatch.priceNGN)}
                      </div>
                      <div className="text-[10px] text-yellow-400 font-mono font-medium">
                        Only 7 in stock
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Flagship Showcases: Option A & Option B Dual Presentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400">
            Current Releases
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Two Distinct Philosophies of Time
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            From formal monochrome boardroom poise to streetwear statement lanyard accessories.
          </p>
        </div>

        {/* Option A: POEDAGAR Minimalist Black Watch Detailed Showcase */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Box */}
            <div className="lg:col-span-6 relative group">
              <div className="rounded-2xl overflow-hidden border border-zinc-700/60 shadow-xl bg-zinc-950">
                <img
                  src={blackWatch.image}
                  alt={blackWatch.name}
                  className="w-full h-[380px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/90 border border-zinc-800 text-[11px] font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Option A: Luxury Boxed Edition</span>
              </div>
            </div>

            {/* Copy & Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                The Poedagar Minimalist Black Watch ✨
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {blackWatch.headline}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {blackWatch.body}
              </p>

              {/* Bullet Features */}
              <div className="space-y-2 pt-1 text-xs">
                {blackWatch.features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-medium">{f.title}:</strong>{' '}
                      <span className="text-zinc-400">{f.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-zinc-400">Regular Price: <span className="line-through">{formatPrice(blackWatch.originalPriceUSD || 65, blackWatch.originalPriceNGN || 35000)}</span></div>
                  <div className="text-2xl font-serif font-bold text-amber-400">
                    {formatPrice(blackWatch.priceUSD, blackWatch.priceNGN)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openDirectOrder(blackWatch)}
                    className="px-4 py-2.5 rounded-xl bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-yellow-400" />
                    <span>WhatsApp / DM Order</span>
                  </button>

                  <button
                    onClick={() => addToCart(blackWatch)}
                    className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Option B: Chic Lanyard Pocket Timepieces Showcase */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Copy & Details (Order first on Desktop) */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <div className="text-xs font-semibold text-yellow-400 uppercase tracking-widest">
                The New Way to Wear Time ⏱️
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {lanyardWatch.headline}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {lanyardWatch.body}
              </p>

              {/* Colorways Badges */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-medium text-zinc-300">4 Available Colorways:</div>
                <div className="flex flex-wrap gap-2">
                  {lanyardWatch.colorways?.map((col) => (
                    <span
                      key={col.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200"
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${col.bgClass}`} />
                      {col.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2 pt-2 text-xs">
                {lanyardWatch.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-medium">{f.title}:</strong>{' '}
                      <span className="text-zinc-400">{f.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Bundle Note */}
              <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-xs text-yellow-300 flex items-center justify-between">
                <span>
                  🔥 <strong>Bundle Discount:</strong> Get 2 or more for just $50 (Save $10)!
                </span>
                <button
                  onClick={() => addToCart(duoBundle)}
                  className="px-2.5 py-1 rounded bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-[10px] uppercase cursor-pointer"
                >
                  Grab Bundle
                </button>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-zinc-400">Single Piece Price:</div>
                  <div className="text-2xl font-serif font-bold text-white">
                    {formatPrice(lanyardWatch.priceUSD, lanyardWatch.priceNGN)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openDirectOrder(lanyardWatch)}
                    className="px-4 py-2.5 rounded-xl bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-yellow-400" />
                    <span>WhatsApp / DM Order</span>
                  </button>

                  <button
                    onClick={() => addToCart(lanyardWatch)}
                    className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Visual Box */}
            <div className="lg:col-span-6 relative group order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden border border-zinc-700/60 shadow-xl bg-zinc-950">
                <img
                  src={lanyardWatch.image}
                  alt={lanyardWatch.name}
                  className="w-full h-[380px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/90 border border-zinc-800 text-[11px] font-semibold text-yellow-300 flex items-center gap-1.5 shadow-lg">
                <Compass className="w-3.5 h-3.5 text-yellow-400" />
                <span>Option B: Streetwear Chic Edition</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How to Style Lanyard Watches Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 lg:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400">
                Horology &amp; Streetwear
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                How to Style Your Lanyard Timepiece
              </h2>
            </div>
            <button
              onClick={() => setActivePage('lookbook')}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Full Editorial Lookbook &amp; AI Prompts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STYLING_GUIDE.map((guide) => (
              <div
                key={guide.number}
                className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3"
              >
                <div className="font-mono text-2xl font-bold text-amber-400/80">
                  {guide.number}
                </div>
                <h4 className="font-serif font-bold text-base text-white">
                  {guide.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {guide.description}
                </p>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-300/80 pt-1">
                  Vibe: {guide.vibe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Client Reviews Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400">
              Verified Client Experiences
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Loved by Connoisseurs Across the Globe
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Real feedback from verified purchasers in London, New York, Paris, Milan, Toronto, and Dubai.
            </p>
          </div>

          <button
            onClick={() => setActivePage('reviews')}
            className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <span>Read All Original Reviews ({reviews.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">{rev.date}</span>
                </div>

                <h4 className="font-serif font-bold text-sm text-white leading-snug">
                  "{rev.title}"
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {rev.content}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-zinc-200">{rev.author}</div>
                  <div className="text-[11px] text-zinc-500">{rev.location}</div>
                </div>
                {rev.verifiedPurchase && (
                  <span className="text-[10px] text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20 font-medium">
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 2 AI Prompts Teaser Callout in White & Yellow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-yellow-950/30 via-zinc-900 to-zinc-950 border border-yellow-400/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-yellow-400 font-semibold">
              Part 2: Creative AI Studio
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Midjourney &amp; Flux Editorial Photography Prompts
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Access the exact 8K commercial studio, fashion streetwear editorial, and travertine flat lay prompts ready to copy for your social media and store advertising campaigns.
            </p>
          </div>

          <button
            onClick={() => setActivePage('lookbook')}
            className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 cursor-pointer shadow-lg shadow-yellow-400/20 transition-all"
          >
            <Sparkles className="w-4 h-4 text-zinc-950" />
            <span>Open AI Studio &amp; Prompts</span>
          </button>
        </div>
      </section>
    </div>
  );
}
