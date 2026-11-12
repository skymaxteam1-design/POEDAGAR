import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import DirectOrderModal from './components/DirectOrderModal';
import ChatWidget from './components/ChatWidget';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ReviewsPage from './pages/ReviewsPage';
import LookbookPage from './pages/LookbookPage';
import {
  ShieldCheck,
  Truck,
  MessageCircle,
  Star,
  Sparkles,
  ArrowRight,
  Heart,
  Instagram,
  Clock,
  Compass
} from 'lucide-react';

function AppContent() {
  const { activePage, setActivePage, setCurrency, currency } = useStore();

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductDetailPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'lookbook':
        return <LookbookPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-zinc-100 flex flex-col antialiased selection:bg-yellow-400 selection:text-zinc-950 font-sans">
      {/* Top Navbar */}
      <Navbar />

      {/* Dynamic 5-Page Content Body */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Global Interactive Drawers, Modals & Concierge Chat Widget */}
      <CartDrawer />
      <DirectOrderModal />
      <ChatWidget />

      {/* Luxury Footer */}
      <footer className="border-t border-zinc-800 bg-[#07090F] text-zinc-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Col 1: Brand Manifesto */}
            <div className="space-y-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center font-serif text-amber-400 font-bold">
                  P
                </div>
                <span className="font-serif font-bold text-base tracking-widest text-white uppercase">
                  POEDAGAR
                </span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Redefining modern horology through minimalist cushion geometry, precision Japanese quartz caliber, and avant-garde lanyard pocket timepieces.
              </p>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-yellow-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span>Orders Dispatched Daily</span>
              </div>
            </div>

            {/* Col 2: Five Boutique Pages */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
                Explore Boutique
              </h4>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <button
                    onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    1. Home / Editorial Showcase
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActivePage('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    2. Shop Catalog &amp; Bundles
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActivePage('product'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    3. Timepiece Deep-Dive
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActivePage('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    4. Original Client Reviews (240+)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActivePage('lookbook'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    5. Lookbook &amp; AI Prompts
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Customer Care & Delivery */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
                Concierge &amp; Delivery
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-yellow-400" />
                  <span>24–48h Worldwide Tracked Dispatch</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Authenticity Guarantee &amp; Warranty</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  <span>1-Year International Warranty</span>
                </li>
                <li className="pt-1 flex flex-col gap-1">
                  <a
                    href="https://wa.me/447532772917?text=Hello!%20I%20have%20an%20inquiry%20regarding%20POEDAGAR%20watches."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 hover:underline font-mono text-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp: +44 7532 772917</span>
                  </a>
                  <a
                    href="tel:+447532772917"
                    className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white font-mono text-xs"
                  >
                    <span>Direct Call:</span>
                    <span className="text-yellow-400 font-semibold">+44 7532 772917</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Pricing & Security */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
                Pricing &amp; Checkout
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                All prices are set in <strong className="text-white">US Dollars ($ USD)</strong>. Secure payments, international wire, credit/debit card, and WhatsApp direct checkout supported.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span>Base Currency: <strong>USD ($)</strong></span>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
            <div>
              &copy; {new Date().getFullYear()} POEDAGAR &amp; Atelier Horlogerie. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Authenticity Card Included</span>
              <span>•</span>
              <span>Splash-Proof 3ATM</span>
              <span>•</span>
              <span>Fast Courier Handling</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}
