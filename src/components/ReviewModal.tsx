import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Star, CheckCircle, Upload, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/storeData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const { addReview } = useStore();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('London, United Kingdom');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0].id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [styleTag, setStyleTag] = useState('Everyday Wear');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0];
    const initials = author
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'CL';

    addReview({
      author: author || 'Client',
      location: location || 'Verified Buyer',
      rating,
      verifiedPurchase: true,
      productId: product.id,
      productName: product.name,
      title: title || 'Exceptional craftsmanship & luxury feel',
      content,
      avatarInitials: initials,
      styleTag,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#0F131D] border border-zinc-800 rounded-2xl shadow-2xl p-6 text-zinc-100 space-y-5 animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center mx-auto border border-yellow-400/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Review Published!</h3>
            <p className="text-xs text-zinc-400">
              Thank you for sharing your authentic client experience with our horology atelier.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white">Write a Verified Client Review</h3>
                <p className="text-xs text-zinc-400">Share your styling, wrist feel, and unboxing thoughts</p>
              </div>
            </div>

            {/* Star Rating Selector */}
            <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-300 font-medium">Your Overall Rating:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 text-zinc-600 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        (hoverRating || rating) >= star
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-zinc-700'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-zinc-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. David Sterling"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">City / Region</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Mayfair, London / SoHo, New York / Paris"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-zinc-400 mb-1">Timepiece Purchased</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-yellow-400"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Style Occasion</label>
                <select
                  value={styleTag}
                  onChange={(e) => setStyleTag(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-yellow-400"
                >
                  <option value="Boardroom & Formal Wear">Boardroom &amp; Formal Wear</option>
                  <option value="Streetwear Denim Styling">Streetwear Denim Styling</option>
                  <option value="Handbag Charm Accents">Handbag Charm Accents</option>
                  <option value="Gift Unboxing">Luxury Gift Unboxing</option>
                  <option value="Everyday Minimalist Fit">Everyday Minimalist Fit</option>
                  <option value="Night & Evening Outings">Night &amp; Evening Outings</option>
                </select>
              </div>
            </div>

            <div className="text-xs space-y-1">
              <label className="block text-zinc-400">Review Headline</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Pure quiet luxury, arrived in 24 hours!"
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div className="text-xs space-y-1">
              <label className="block text-zinc-400">Detailed Feedback &amp; Experience</label>
              <textarea
                required
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="How did the timepiece look in person? How was the strap comfort, dial finish, gift box, or delivery speed?"
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Post Original Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
