import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  ThumbsUp,
  Filter,
  MessageSquare,
  Sparkles,
  Camera,
  Heart,
  ChevronDown,
  ShoppingBag
} from 'lucide-react';
import ReviewModal from '../components/ReviewModal';

export default function ReviewsPage() {
  const { reviews, setActivePage, navigateToProduct } = useStore();
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [productFilter, setProductFilter] = useState<string>('all');
  const [ratingFilter, setRatingFilter] = useState<number | 'all'>('all');
  const [helpfulVoted, setHelpfulVoted] = useState<Record<string, boolean>>({});

  const filteredReviews = reviews.filter((r) => {
    if (productFilter !== 'all' && r.productId !== productFilter) return false;
    if (ratingFilter !== 'all' && r.rating !== ratingFilter) return false;
    return true;
  });

  const toggleHelpful = (id: string) => {
    setHelpfulVoted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;
  const fourStarCount = reviews.filter((r) => r.rating === 4).length;
  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1)
  ).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-xs font-mono uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
          <span>100% Genuine Client Experiences</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Original Customer Reviews
        </h1>
        <p className="text-sm text-zinc-400">
          Unfiltered feedback, unboxing impressions, and street-style pairings from verified owners across the United Kingdom, United States, Europe, Canada, and the UAE.
        </p>
      </div>

      {/* Aggregate Rating & Satisfaction Metrics */}
      <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 lg:p-8 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Overall Score Card */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-3 lg:border-r border-zinc-800 lg:pr-8">
            <div className="text-5xl font-serif font-bold text-white tracking-tight">
              {avgRating} <span className="text-xl text-zinc-500 font-sans">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs text-zinc-400">
              Based on <strong className="text-white">{reviews.length + 240}</strong> verified purchases &amp; client deliveries.
            </p>
            <button
              onClick={() => setIsWriteReviewOpen(true)}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Write An Original Review
            </button>
          </div>

          {/* Middle: Rating Distribution Bars */}
          <div className="lg:col-span-5 space-y-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-12 text-zinc-400 font-medium">5 Stars</span>
              <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${Math.round((fiveStarCount / reviews.length) * 100)}%` }}
                />
              </div>
              <span className="w-10 text-right text-zinc-400 font-mono">
                {Math.round((fiveStarCount / reviews.length) * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-12 text-zinc-400 font-medium">4 Stars</span>
              <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-yellow-400/70 rounded-full"
                  style={{ width: `${Math.round((fourStarCount / reviews.length) * 100)}%` }}
                />
              </div>
              <span className="w-10 text-right text-zinc-400 font-mono">
                {Math.round((fourStarCount / reviews.length) * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-12 text-zinc-400 font-medium">3 Stars</span>
              <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full bg-yellow-400/40 rounded-full" style={{ width: '2%' }} />
              </div>
              <span className="w-10 text-right text-zinc-400 font-mono">2%</span>
            </div>

            <div className="flex items-center gap-3 text-zinc-600">
              <span className="w-12">2 Stars</span>
              <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden" />
              <span className="w-10 text-right font-mono">0%</span>
            </div>

            <div className="flex items-center gap-3 text-zinc-600">
              <span className="w-12">1 Star</span>
              <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden" />
              <span className="w-10 text-right font-mono">0%</span>
            </div>
          </div>

          {/* Right: Key Quality Commitments */}
          <div className="lg:col-span-3 space-y-3 bg-zinc-950/70 p-4 rounded-2xl border border-zinc-800 text-xs">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">100% Genuine Unboxings</strong>
                <p className="text-[11px] text-zinc-400">All reviews collected from actual delivery orders.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">99.4% On-Time Dispatch</strong>
                <p className="text-[11px] text-zinc-400">Within 24–48 hours across worldwide express couriers.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Review Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter By:</span>
          </span>

          <select
            value={productFilter}
            onChange={(e) => setProductFilter(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 focus:outline-none focus:border-yellow-400"
          >
            <option value="all">All Timepieces</option>
            <option value="poedagar-minimalist-black">POEDAGAR Minimalist Black Watch</option>
            <option value="lanyard-pocket-watch">Chic Lanyard Pocket Timepieces</option>
            <option value="lanyard-collector-bundle">The Duo Collector Bundle</option>
            <option value="connoisseur-curated-set">The Connoisseur Curated Set</option>
          </select>

          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 focus:outline-none focus:border-yellow-400"
          >
            <option value="all">All Star Ratings</option>
            <option value="5">5 Stars Only</option>
            <option value="4">4 Stars Only</option>
          </select>
        </div>

        <div className="text-xs text-zinc-400 font-mono">
          Showing {filteredReviews.length} client stories
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((rev) => {
          const isVoted = !!helpfulVoted[rev.id];
          const currentHelpful = rev.helpfulCount + (isVoted ? 1 : 0);

          return (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 space-y-4 flex flex-col justify-between transition-colors shadow-lg"
            >
              <div className="space-y-3">
                {/* Review Header: User & Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center font-bold text-yellow-300 text-xs">
                      {rev.avatarInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-sm text-white">{rev.author}</span>
                        {rev.verifiedPurchase && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-yellow-400 bg-yellow-400/10 px-1.5 py-0.5 rounded border border-yellow-400/20 font-medium">
                            <CheckCircle2 className="w-3 h-3 text-yellow-400" />
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-zinc-400">{rev.location}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 justify-end">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono mt-0.5 inline-block">
                      {rev.date}
                    </span>
                  </div>
                </div>

                {/* Tag & Product Indicator */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                  <span
                    onClick={() => navigateToProduct(rev.productId)}
                    className="text-zinc-300 font-medium hover:text-yellow-400 transition-colors cursor-pointer bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800"
                  >
                    Product: {rev.productName}
                  </span>
                  {rev.styleTag && (
                    <span className="text-yellow-300/80 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20 font-mono text-[10px]">
                      {rev.styleTag}
                    </span>
                  )}
                </div>

                {/* Review Headline & Text */}
                <h3 className="font-serif font-bold text-base text-white leading-snug">
                  "{rev.title}"
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {rev.content}
                </p>

                {/* Optional Customer Photo */}
                {rev.image && (
                  <div className="pt-2">
                    <img
                      src={rev.image}
                      alt={rev.title}
                      className="w-full h-44 object-cover rounded-xl border border-zinc-800"
                    />
                  </div>
                )}
              </div>

              {/* Bottom Helpful Bar */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-500 text-[11px]">
                  Was this client review helpful?
                </span>

                <button
                  onClick={() => toggleHelpful(rev.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                    isVoted
                      ? 'bg-yellow-400/15 border-yellow-400/50 text-yellow-300 font-semibold'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({currentHelpful})</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Review Submission Modal */}
      <ReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
      />
    </div>
  );
}
