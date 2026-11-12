import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  ShoppingBag,
  Star,
  CheckCircle2,
  Filter,
  MessageCircle,
  Eye,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Gift
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/storeData';

export default function ShopPage() {
  const {
    formatPrice,
    addToCart,
    openDirectOrder,
    navigateToProduct,
    currency,
  } = useStore();

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'wristwatch' | 'lanyard' | 'bundle'>('all');
  const [selectedColorFilter, setSelectedColorFilter] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Boutique Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          The Timepiece Collection
        </h1>
        <p className="text-sm text-zinc-400">
          Precision Japanese quartz engineering, sleek cushion bezels, and statement leatherette lanyards. Shipped in signature luxury gift packaging.
        </p>
      </div>

      {/* Special Offer Alert Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-500/15 via-zinc-900 to-emerald-500/15 border border-amber-500/30 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold text-sm text-white">
              Limited Bundle Promotion: 2x Lanyard Watches for $50 (Save $10)
            </div>
            <div className="text-xs text-zinc-400">
              Save $10 instantly when you purchase any two colorways. Mix &amp; match for bags and belt loops.
            </div>
          </div>
        </div>

        <button
          onClick={() => navigateToProduct('lanyard-collector-bundle')}
          className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider shrink-0"
        >
          View Bundle
        </button>
      </div>

      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-5">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Timepieces' },
            { id: 'wristwatch', label: 'POEDAGAR Minimalist Watches' },
            { id: 'lanyard', label: 'Chic Lanyard Pocket Watches' },
            { id: 'bundle', label: 'Curated Sets & Bundles' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-zinc-950 shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-zinc-400 font-mono">
          Showing {filteredProducts.length} curated releases
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700/80 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Product Visual Container */}
              <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden cursor-pointer" onClick={() => navigateToProduct(product.id)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Badge Tag */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-700/80 text-[10px] font-bold text-amber-300 uppercase tracking-widest shadow-lg">
                    {product.badge}
                  </div>
                )}

                {/* Stock Alert */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-zinc-950/90 border border-zinc-800 text-[10px] font-mono text-yellow-400">
                  {product.stockCount} left in stock
                </div>

                {/* Hover overlay with Quick Inspect */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-zinc-900/90 text-white font-medium text-xs flex items-center gap-2 border border-zinc-700 shadow-xl">
                    <Eye className="w-4 h-4 text-yellow-400" />
                    Inspect Full Specs &amp; Gallery
                  </span>
                </div>
              </div>

              {/* Product Info Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-yellow-400 text-xs">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold text-zinc-200">{product.rating}</span>
                    <span className="text-zinc-500">({product.reviewCount})</span>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500 uppercase">
                    {product.category}
                  </span>
                </div>

                <div>
                  <h3
                    onClick={() => navigateToProduct(product.id)}
                    className="text-xl font-serif font-bold text-white group-hover:text-yellow-300 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {product.subtitle}
                  </p>
                </div>

                {/* Colorway Options (if any) */}
                {product.colorways && (
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] text-zinc-400 font-medium">Available Colorways:</div>
                    <div className="flex flex-wrap gap-2">
                      {product.colorways.map((col) => (
                        <span
                          key={col.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-300"
                        >
                          <span className={`w-2 h-2 rounded-full ${col.bgClass}`} />
                          {col.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Bullet Highlights */}
                <div className="space-y-1.5 pt-2 text-xs border-t border-zinc-800/80">
                  {product.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                      <span className="text-[11px]"><strong className="text-zinc-200">{feat.title}:</strong> {feat.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-6 pt-0 border-t border-zinc-800/80 mt-4 flex items-center justify-between gap-4">
              <div>
                {product.originalPriceUSD && (
                  <div className="text-[11px] text-zinc-500 line-through">
                    {formatPrice(product.originalPriceUSD, product.originalPriceNGN || 0)}
                  </div>
                )}
                <div className="text-xl font-serif font-bold text-white">
                  {formatPrice(product.priceUSD, product.priceNGN)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => openDirectOrder(product)}
                  className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-zinc-700/80 transition-colors cursor-pointer"
                  title="Direct WhatsApp / DM Order"
                >
                  <MessageCircle className="w-4 h-4 text-yellow-400" />
                </button>

                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-zinc-950" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Assurance Footer Strip in Yellow & White */}
      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-400">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white">Authenticity Guaranteed</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">
              Every timepiece ships with an official brand certificate card and warranty inside our signature gift box.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Truck className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white">Express 24–48h Dispatch</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">
              Doorstep courier across the UK, USA, Europe, Canada, and worldwide. Real-time tracking link sent to your WhatsApp (+44 7532 772917).
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MessageCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white">Concierge Assistance</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">
              Need help picking colorways or sizing? Chat directly with our horology stylists on WhatsApp anytime.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
