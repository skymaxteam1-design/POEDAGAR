import React, { useState } from 'react';
import { useStore, PageType } from '../context/StoreContext';
import {
  ShoppingBag,
  Sparkles,
  Menu,
  X,
  MessageCircle,
  Clock,
  ShieldCheck,
  ChevronDown,
  Star,
  Camera
} from 'lucide-react';

export default function Navbar() {
  const {
    activePage,
    setActivePage,
    currency,
    setCurrency,
    cartCount,
    setIsCartOpen,
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageType; label: string; badge?: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> },
    { id: 'shop', label: 'Shop Collection', badge: 'New Drops', icon: <Clock className="w-3.5 h-3.5 text-yellow-400" /> },
    { id: 'product', label: 'Timepiece Detail', icon: <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" /> },
    { id: 'reviews', label: 'Customer Reviews', badge: '4.9 ★', icon: <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" /> },
    { id: 'lookbook', label: 'Lookbook & AI Studio', badge: 'Prompts', icon: <Camera className="w-3.5 h-3.5 text-yellow-400" /> },
  ];

  const handleNavClick = (page: PageType) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappHref = `https://wa.me/447532772917?text=Hello!%20I%20am%20interested%20in%20ordering%20the%20POEDAGAR%20minimalist%20watch%20or%20Lanyard%20timepieces.`;

  return (
    <header className="sticky top-0 z-40 bg-[#0B0E14]/95 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      {/* Top micro-announcement banner in Yellow & White */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-zinc-800/50 py-1.5 px-4 text-center text-[11px] text-zinc-300 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 font-medium text-yellow-400">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Express Worldwide &amp; International Delivery • Dispatches in 24–48 Hours
        </span>
        <span className="hidden sm:inline text-zinc-600">|</span>
        <span className="hidden md:inline font-semibold text-yellow-400">
          Special: 2+ Lanyard Watches for $50 (Save $10)
        </span>
        <span className="hidden sm:inline text-zinc-600">|</span>
        <a
          href="tel:+447532772917"
          className="text-zinc-300 hover:text-white font-mono flex items-center gap-1"
        >
          <span>Concierge:</span>
          <span className="text-yellow-400 font-semibold">+44 7532 772917</span>
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Horology Shield */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-700/80 p-0.5 shadow-md flex items-center justify-center group-hover:border-yellow-400/80 transition-colors">
            <div className="w-full h-full rounded-[10px] bg-[#121620] flex items-center justify-center font-serif text-yellow-400 font-bold text-lg tracking-wider">
              P
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-lg tracking-[0.18em] text-white uppercase group-hover:text-yellow-300 transition-colors">
                POEDAGAR
              </span>
              <span className="text-[10px] font-sans tracking-widest text-zinc-400 uppercase font-light">
                &amp; Atelier
              </span>
            </div>
            <div className="text-[9px] tracking-[0.25em] text-yellow-400/90 uppercase font-mono">
              Haute Horlogerie • Est. 2024
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3.5 py-2 rounded-lg text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-zinc-800/90 shadow-sm border border-zinc-700/60'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-yellow-400/15 text-yellow-300 border border-yellow-400/30">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Currency Indicator (USD Only) */}
          <div className="hidden sm:flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1 text-xs font-mono text-zinc-300">
            <span className="text-yellow-400 font-bold">$</span>
            <span className="font-semibold text-white">USD</span>
          </div>

          {/* WhatsApp / Phone Direct Button with +44 7532 772917 */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-medium transition-all"
            title="Chat directly on WhatsApp (+44 7532 772917) to order"
          >
            <MessageCircle className="w-3.5 h-3.5 text-yellow-400" />
            <span className="font-mono font-semibold text-yellow-300">+44 7532 772917</span>
          </a>

          {/* Cart Bag Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-yellow-400/60 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Open Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-zinc-950 font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-zinc-900">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800/80 bg-zinc-950/98 px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-zinc-800 text-white font-semibold border border-yellow-400/40'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-yellow-400/20 text-yellow-300">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-zinc-950 text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-zinc-950" />
              <span>WhatsApp: +44 7532 772917</span>
            </a>
            <div className="text-center text-[11px] text-zinc-400 font-mono">
              Prices displayed in US Dollars ($)
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
