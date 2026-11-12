import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, MessageCircle, Copy, Check, Send, Sparkles, ShieldCheck } from 'lucide-react';

export default function DirectOrderModal() {
  const { isOrderModalOpen, setIsOrderModalOpen, orderDirectInfo } = useStore();
  const [copied, setCopied] = useState(false);
  const [userCity, setUserCity] = useState('London, United Kingdom');
  const [userDeliveryChoice, setUserDeliveryChoice] = useState('Credit / Debit Card');

  if (!isOrderModalOpen || !orderDirectInfo) return null;

  const generatedDmText = `Hi! I would like to order the ${orderDirectInfo.productName}${
    orderDirectInfo.colorway ? ` (${orderDirectInfo.colorway})` : ''
  } for ${orderDirectInfo.price}.%0A%0ADelivery Location: ${userCity}%0APreferred Payment: ${userDeliveryChoice}%0A%0APlease share delivery timeline and payment details!`;

  const copyPlainDm = () => {
    const plain = `Hi! I would like to order the ${orderDirectInfo.productName}${
      orderDirectInfo.colorway ? ` (${orderDirectInfo.colorway})` : ''
    } for ${orderDirectInfo.price}.\n\nDelivery Location: ${userCity}\nPreferred Payment: ${userDeliveryChoice}\n\nPlease share delivery timeline and payment details!`;
    navigator.clipboard.writeText(plain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = `https://wa.me/447532772917?text=${generatedDmText}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-[#0F131D] border border-zinc-800 rounded-2xl shadow-2xl p-6 text-zinc-100 space-y-5 animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={() => setIsOrderModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center text-yellow-400">
            <MessageCircle className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-base text-white">Direct Order &amp; Concierge</h3>
            <p className="text-xs text-zinc-400">
              WhatsApp Concierge: <span className="text-yellow-400 font-mono font-medium">+44 7532 772917</span>
            </p>
          </div>
        </div>

        {/* Product Summary Box */}
        <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1 text-xs">
          <div className="font-semibold text-white">{orderDirectInfo.productName}</div>
          {orderDirectInfo.colorway && (
            <div className="text-zinc-400">Selected Color: <span className="text-yellow-400 font-medium">{orderDirectInfo.colorway}</span></div>
          )}
          <div className="text-sm font-bold text-yellow-400 pt-1">{orderDirectInfo.price} USD</div>
        </div>

        {/* Quick Customization */}
        <div className="space-y-3 text-xs">
          <div>
            <label className="block text-zinc-400 mb-1">Your Delivery City &amp; Country</label>
            <input
              type="text"
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
              placeholder="e.g. London (UK), New York (USA), Paris (France), Toronto (Canada)..."
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-1">Payment Preference</label>
            <select
              value={userDeliveryChoice}
              onChange={(e) => setUserDeliveryChoice(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-yellow-400"
            >
              <option value="Credit / Debit Card">Credit / Debit Card (USD)</option>
              <option value="Bank Transfer">Direct Bank Wire / Transfer</option>
              <option value="Payment on Delivery (POD)">Payment on Delivery (Available in Select Cities)</option>
              <option value="Apple Pay / PayPal">Apple Pay / PayPal</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20 transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-zinc-950" />
            <span>Chat on WhatsApp (+44 7532 772917)</span>
          </a>

          <button
            onClick={copyPlainDm}
            className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-yellow-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy DM / Text Message'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-zinc-500 pt-1 border-t border-zinc-800/80">
          <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
          <span>Ships in signature luxury gift box with authenticity warranty card.</span>
        </div>
      </div>
    </div>
  );
}
