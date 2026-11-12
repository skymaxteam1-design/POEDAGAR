import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Gift
} from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartCount,
    currency,
    formatPrice,
    cartTotalUSD,
    cartTotalNGN,
  } = useStore();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('London, United Kingdom');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer' | 'pod'>('card');

  if (!isCartOpen) return null;

  // Check if cart contains 2 or more lanyard items for special bundle offer
  const lanyardCount = cart
    .filter((item) => item.product.category === 'lanyard')
    .reduce((sum, item) => sum + item.quantity, 0);

  // Bundle discount: $10 off per pair of lanyards ($50 for 2)
  const bundleDiscountUSD = Math.floor(lanyardCount / 2) * 10;
  const finalUSD = Math.max(0, cartTotalUSD - bundleDiscountUSD);

  const generateWhatsAppMessage = () => {
    const itemsList = cart
      .map(
        (i) =>
          `• ${i.quantity}x ${i.product.name} (${i.colorway || 'Standard'}) - $${(
            i.product.priceUSD * i.quantity
          ).toLocaleString()}`
      )
      .join('%0A');

    const totalText = `$${finalUSD.toLocaleString()}`;
    const msg = `Hello POEDAGAR & Atelier!%0A%0AI would like to place an order for:%0A${itemsList}%0A%0ATotal: ${totalText}%0A%0APlease confirm availability and delivery dispatch.`;
    return `https://wa.me/447532772917?text=${msg}`;
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0F131D] border-l border-zinc-800 text-zinc-100 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="px-5 py-4 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-950/80">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="font-serif font-bold text-base tracking-wide text-zinc-100">
                Your Shopping Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bundle Promo Notice */}
          {lanyardCount >= 2 ? (
            <div className="bg-yellow-400/10 border-b border-yellow-400/20 px-4 py-2 flex items-center gap-2 text-xs text-yellow-300">
              <Gift className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>
                <strong>Bundle Discount Applied:</strong> Saved ${bundleDiscountUSD} on your Lanyard Timepieces!
              </span>
            </div>
          ) : lanyardCount === 1 ? (
            <div className="bg-yellow-400/10 border-b border-yellow-400/20 px-4 py-2 text-xs text-yellow-300">
              💡 <em>Add 1 more Lanyard Watch to unlock the $50 duo bundle discount (Save $10)!</em>
            </div>
          ) : null}

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {checkoutStep === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center mx-auto border border-yellow-400/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">Order Confirmed!</h3>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  Thank you, <span className="text-zinc-200 font-semibold">{customerName || 'Valued Client'}</span>. Your timepieces are reserved. Our concierge will contact you via WhatsApp/SMS to coordinate delivery to <span className="text-zinc-200 font-medium">{customerCity}</span>.
                </p>
                <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 text-left text-xs space-y-1">
                  <div className="text-zinc-400">Payment: <span className="text-zinc-200 font-medium">{paymentMethod === 'pod' ? 'Payment on Delivery' : 'Direct Bank Transfer'}</span></div>
                  <div className="text-zinc-400">Dispatch Window: <span className="text-yellow-400 font-medium">Within 24–48 Hours</span></div>
                </div>
                <button
                  onClick={() => {
                    setCheckoutStep('cart');
                    setIsCartOpen(false);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-zinc-950 text-xs font-bold transition-colors cursor-pointer"
                >
                  Return to Boutique
                </button>
              </div>
            ) : checkoutStep === 'checkout' ? (
              <form onSubmit={handleCompleteOrder} className="space-y-4">
                <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-white">Delivery Details</h3>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="text-xs text-amber-400 hover:underline"
                  >
                    Edit Bag
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Amina Bello"
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. +44 7532 772917 or your local number"
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">Destination Country / City</label>
                    <select
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="London, United Kingdom">United Kingdom (London &amp; Nationwide)</option>
                      <option value="New York, United States">United States (New York, California &amp; Nationwide)</option>
                      <option value="Toronto, Canada">Canada (Toronto, Vancouver &amp; All Provinces)</option>
                      <option value="Paris, France">France (Paris &amp; EU Express)</option>
                      <option value="Milan, Italy">Italy (Milan, Rome &amp; EU)</option>
                      <option value="Geneva, Switzerland">Switzerland (Geneva &amp; Zurich)</option>
                      <option value="Dubai, United Arab Emirates">United Arab Emirates (Dubai &amp; Abu Dhabi)</option>
                      <option value="International Express (Worldwide)">Other Foreign Country (Tracked Courier)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">Delivery Address</label>
                    <textarea
                      required
                      rows={2}
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Street, estate, or landmark"
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1.5">Payment Method</label>
                    <div className="grid grid-cols-2 gap-2">
                      <label
                        className={`p-2.5 rounded-lg border text-xs cursor-pointer flex flex-col justify-between ${
                          paymentMethod === 'pod'
                            ? 'bg-amber-400/10 border-amber-400/50 text-amber-200'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'pod'}
                          onChange={() => setPaymentMethod('pod')}
                          className="sr-only"
                        />
                        <span className="font-semibold text-white">Payment on Delivery</span>
                        <span className="text-[10px] text-zinc-400 mt-1">Available in select cities</span>
                      </label>

                      <label
                        className={`p-2.5 rounded-lg border text-xs cursor-pointer flex flex-col justify-between ${
                          paymentMethod === 'transfer'
                            ? 'bg-amber-400/10 border-amber-400/50 text-amber-200'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'transfer'}
                          onChange={() => setPaymentMethod('transfer')}
                          className="sr-only"
                        />
                        <span className="font-semibold text-white">Bank Transfer / Card</span>
                        <span className="text-[10px] text-zinc-400 mt-1">Instant confirmation</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1.5 text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal:</span>
                    <span>{formatPrice(cartTotalUSD)}</span>
                  </div>
                  {bundleDiscountUSD > 0 && (
                    <div className="flex justify-between text-yellow-400">
                      <span>Bundle Savings:</span>
                      <span>-${bundleDiscountUSD}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-sm text-white pt-1 border-t border-zinc-800">
                    <span>Total Due:</span>
                    <span className="text-yellow-400">${finalUSD.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  Confirm &amp; Place Order
                </button>
              </form>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-zinc-900 text-zinc-600 flex items-center justify-center mx-auto border border-zinc-800">
                  <ShoppingBag className="w-6 h-6 text-yellow-400/60" />
                </div>
                <p className="text-sm text-zinc-400 font-medium">Your shopping bag is empty.</p>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                  Explore our luxury POEDAGAR Minimalist Black Watch or chic Lanyard Timepieces.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80 flex gap-3 items-center"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover border border-zinc-700/60 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-white truncate">
                        {item.product.name}
                      </h4>
                      {item.colorway && (
                        <p className="text-[11px] text-zinc-400">
                          Colorway: <span className="text-zinc-200">{item.colorway}</span>
                        </p>
                      )}
                      <div className="text-xs font-bold text-yellow-400 mt-0.5">
                        ${(item.product.priceUSD * item.quantity).toLocaleString()}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-white text-zinc-400 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono text-zinc-200">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-white text-zinc-400 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-500 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Actions (when in cart view and items exist) */}
          {checkoutStep === 'cart' && cart.length > 0 && (
            <div className="p-5 border-t border-zinc-800/80 bg-zinc-950/90 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal:</span>
                  <span>${cartTotalUSD.toLocaleString()}</span>
                </div>
                {bundleDiscountUSD > 0 && (
                  <div className="flex justify-between text-yellow-400 font-medium">
                    <span>Bundle Discount:</span>
                    <span>-${bundleDiscountUSD}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Total Estimate:</span>
                  <span className="text-yellow-400 text-base font-serif font-bold">${finalUSD.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 text-zinc-950" />
                </button>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-yellow-400/40 text-yellow-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-yellow-400" />
                  <span>Instant Order via WhatsApp (+44 7532 772917)</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] text-zinc-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-yellow-400" /> Authenticity Guaranteed
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3 h-3 text-yellow-400" /> Fast Worldwide Dispatch
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
