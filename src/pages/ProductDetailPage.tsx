import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  Star,
  ShieldCheck,
  Truck,
  Package,
  ShoppingBag,
  MessageCircle,
  CheckCircle2,
  Share2,
  Copy,
  Check,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Clock,
  Layers,
  Heart
} from 'lucide-react';
import { PRODUCTS } from '../data/storeData';

export default function ProductDetailPage() {
  const {
    selectedProductId,
    setSelectedProductId,
    formatPrice,
    addToCart,
    openDirectOrder,
    reviews,
    setActivePage,
  } = useStore();

  const product = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const [selectedColorway, setSelectedColorway] = useState<string>(
    product.colorways ? product.colorways[0].name : 'Standard'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [copiedLink, setCopiedLink] = useState(false);
  const [liked, setLiked] = useState(false);

  const productReviews = reviews.filter((r) => r.productId === product.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-24">
      {/* Top Breadcrumb & Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4 text-xs">
        <div className="flex items-center gap-2 text-zinc-400">
          <button
            onClick={() => setActivePage('shop')}
            className="hover:text-amber-300 flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Collection</span>
          </button>
          <span>/</span>
          <span className="text-zinc-500">{product.category.toUpperCase()}</span>
          <span>/</span>
          <span className="text-zinc-200 font-medium truncate max-w-xs">{product.name}</span>
        </div>

        {/* Quick Switcher between Option A & Option B */}
        <div className="flex items-center gap-1.5 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          <span className="text-[10px] text-zinc-400 font-mono px-2 uppercase">Switch Timepiece:</span>
          {PRODUCTS.slice(0, 3).map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedProductId(p.id);
                if (p.colorways) setSelectedColorway(p.colorways[0].name);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                selectedProductId === p.id
                  ? 'bg-amber-400 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {p.id === 'poedagar-minimalist-black' ? 'Option A: Black Watch' : p.id === 'lanyard-pocket-watch' ? 'Option B: Lanyard' : 'Bundle'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Product Presentation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Product Visual Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl aspect-[4/3] group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Badges */}
            {product.badge && (
              <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-700/80 text-xs font-bold text-amber-300 uppercase tracking-widest shadow-xl">
                {product.badge}
              </div>
            )}

            <button
              onClick={() => setLiked(!liked)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-rose-400 transition-colors shadow-lg"
              title="Save to Wishlist"
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-yellow-400 text-yellow-400' : ''}`} />
            </button>

            {/* Bottom Floating Visual Annotation */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between text-xs text-zinc-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-yellow-400" />
                Includes presentation box, satin cushion &amp; certificate
              </span>
              <span className="text-[11px] font-mono text-yellow-300">
                100% Client Grade
              </span>
            </div>
          </div>

          {/* Quick Assurance Badges */}
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center">
              <div className="text-zinc-400 text-[11px]">Movement</div>
              <div className="font-semibold text-white mt-0.5">Precision Quartz</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center">
              <div className="text-zinc-400 text-[11px]">Water Resistance</div>
              <div className="font-semibold text-white mt-0.5">3ATM Splash-Proof</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center">
              <div className="text-zinc-400 text-[11px]">Dispatch Window</div>
              <div className="font-semibold text-yellow-400 mt-0.5">24–48 Hours</div>
            </div>
          </div>
        </div>

        {/* Right: Sales Copy, Options, & Actions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">{product.rating}</span>
                <span className="text-xs text-zinc-500">({product.reviewCount} reviews)</span>
              </div>

              <button
                onClick={handleShare}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                title="Share link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-yellow-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Share'}</span>
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {product.name}
            </h1>
            <p className="text-xs font-medium text-yellow-400">
              {product.headline}
            </p>
          </div>

          {/* Price Block */}
          <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-zinc-400">Boutique Price</div>
              <div className="text-3xl font-serif font-bold text-white">
                {formatPrice(product.priceUSD, product.priceNGN)}
              </div>
            </div>
            {product.originalPriceUSD && (
              <div className="text-right">
                <span className="text-xs text-zinc-500 line-through">
                  {formatPrice(product.originalPriceUSD, product.originalPriceNGN || 0)}
                </span>
                <div className="text-xs text-yellow-400 font-semibold">
                  Save 25% Today
                </div>
              </div>
            )}
          </div>

          {/* Sales Copy Body */}
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
            {product.body}
          </p>

          {/* Colorway Selection (if applicable) */}
          {product.colorways && (
            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Select Colorway:</span>
                <span className="text-yellow-400 font-semibold">{selectedColorway}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {product.colorways.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColorway(col.name)}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2.5 transition-all cursor-pointer ${
                      selectedColorway === col.name
                        ? 'bg-yellow-400/10 border-yellow-400 text-white shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${col.bgClass} border border-zinc-600`} />
                    <span className="truncate">{col.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector & Add Actions */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-zinc-900 border border-zinc-700/80 rounded-xl p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 text-zinc-400 hover:text-white text-sm font-bold"
                >
                  -
                </button>
                <span className="px-3 text-sm font-mono text-white font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1.5 text-zinc-400 hover:text-white text-sm font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, selectedColorway, quantity)}
                className="flex-1 py-3.5 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/20 active:scale-95 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-zinc-950" />
                <span>Add to Shopping Bag</span>
              </button>
            </div>

            {/* Direct WhatsApp / DM Order Button */}
            <button
              onClick={() => openDirectOrder(product, selectedColorway)}
              className="w-full py-3 px-4 rounded-xl bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-yellow-400" />
              <span>Claim Yours via WhatsApp (+44 7532 772917) / DM</span>
            </button>
          </div>

          {/* Delivery & Ordering Callout Box */}
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-zinc-300 font-semibold">
              <Truck className="w-4 h-4 text-yellow-400" />
              <span>Worldwide Tracked Courier Delivery</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              {product.deliveryInfo}
            </p>
          </div>

          {/* Key Features Accordion / List */}
          <div className="space-y-3 pt-3 border-t border-zinc-800">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Key Horological Features:
            </h3>
            <div className="space-y-2 text-xs">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200">{feat.title}:</strong>{' '}
                    <span className="text-zinc-400">{feat.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Specifications Table */}
          <div className="space-y-3 pt-3 border-t border-zinc-800">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Technical Specifications:
            </h3>
            <div className="rounded-xl border border-zinc-800 overflow-hidden divide-y divide-zinc-800/80 text-xs">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="flex justify-between p-2.5 bg-zinc-900/40">
                  <span className="text-zinc-400">{key}</span>
                  <span className="text-zinc-200 font-medium text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* In-Page Reviews Section for this Timepiece */}
      <section className="border-t border-zinc-800 pt-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-serif font-bold text-white">
              Client Feedback for {product.name}
            </h3>
            <p className="text-xs text-zinc-400">
              Verified client wrist-shots, styling notes, and unboxings.
            </p>
          </div>

          <button
            onClick={() => setActivePage('reviews')}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>See All Original Reviews ({reviews.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productReviews.length > 0 ? (
            productReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">{rev.date}</span>
                </div>

                <div className="font-semibold text-sm text-white">{rev.title}</div>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {rev.content}
                </p>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-medium text-zinc-200">{rev.author}</span>
                    <div className="text-[10px] text-zinc-500">{rev.location}</div>
                  </div>
                  {rev.styleTag && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-amber-300/90 font-mono">
                      {rev.styleTag}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-8 text-center text-xs text-zinc-500">
              Be the first to leave a verified review for this piece!
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
