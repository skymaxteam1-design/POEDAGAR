import React, { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  ShieldCheck,
  Clock,
  Truck,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface ChatMessage {
  id: string;
  sender: 'concierge' | 'user';
  text: string;
  time: string;
  quickActions?: { label: string; action: string }[];
}

export default function ChatWidget() {
  const { navigateToProduct, phoneNumber, phoneDisplay } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-welcome',
      sender: 'concierge',
      text: `Welcome to POEDAGAR & Atelier Horlogerie. I am your personal horology concierge. How may I assist you with our Minimalist Cushion Watch ($45), Chic Lanyard timepieces ($30 / 2 for $50), or international shipping today?`,
      time: 'Just now',
      quickActions: [
        { label: 'Black Watch details ($45)', action: 'black_watch' },
        { label: 'Lanyard 2-for-$50 Bundle', action: 'lanyard_bundle' },
        { label: 'Worldwide Shipping & Warranty', action: 'shipping' },
        { label: 'Chat on WhatsApp', action: 'whatsapp' },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleQuickAction = (action: string) => {
    if (action === 'black_watch') {
      addUserMessage('Can you tell me about the POEDAGAR Minimalist Black Watch?');
      setTimeout(() => {
        addConciergeMessage(
          'The POEDAGAR Minimalist Black Watch ($45) features a 39mm cushion bezel with precision Japanese quartz movement, 8.2mm ultra-thin profile, scratch-resistant matte black stainless steel, and 3ATM splash-proofing. It ships in our signature off-white luxury gift box with satin pillow and warranty card. Only 7 pieces remain in this production batch!'
        );
      }, 500);
    } else if (action === 'lanyard_bundle') {
      addUserMessage('How does the Lanyard Timepiece bundle work?');
      setTimeout(() => {
        addConciergeMessage(
          'Our Chic Lanyard Pocket Timepieces are $30 each, or get our Duo Collector Bundle with any 2 colorways (Classic Noir, Porcelain White, Sky Blue, Mint) for just $50—saving you $10 instantly! You can clip them to your denim belt-loops, designer handbags, or wear them as jewelry pendants.'
        );
      }, 500);
    } else if (action === 'shipping') {
      addUserMessage('What are your delivery and warranty terms?');
      setTimeout(() => {
        addConciergeMessage(
          'We dispatch orders worldwide within 24–48 hours via tracked express couriers (UK, US, Canada, Europe, UAE, and beyond). Every watch comes with a 1-Year International Warranty and certificate of authenticity inside the presentation gift box.'
        );
      }, 500);
    } else if (action === 'whatsapp') {
      const waUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello!%20I%20am%20chatting%20from%20the%20website%20and%20would%20like%20to%20place%20an%20order.`;
      window.open(waUrl, '_blank');
    }
  };

  const addUserMessage = (text: string) => {
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const addConciergeMessage = (text: string) => {
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'concierge',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    addUserMessage(userText);
    setInputText('');

    // Generate intelligent concierge reply in White & Yellow context
    setTimeout(() => {
      const lower = userText.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('dollar') || lower.includes('$')) {
        addConciergeMessage(
          'All our prices are set in US Dollars: The POEDAGAR Minimalist Black Watch is $45 (originally $65), and the Chic Lanyard Pocket Timepieces are $30 each (or 2 for $50). We also have the 3-piece Connoisseur Set for $89.'
        );
      } else if (lower.includes('ship') || lower.includes('delivery') || lower.includes('country') || lower.includes('uk') || lower.includes('usa') || lower.includes('canada')) {
        addConciergeMessage(
          'We ship globally within 24–48 hours with direct tracked courier handling to the United Kingdom, United States, Canada, Europe, and worldwide. Tracking links are provided directly via WhatsApp.'
        );
      } else if (lower.includes('order') || lower.includes('buy') || lower.includes('whatsapp') || lower.includes('call') || lower.includes('phone')) {
        addConciergeMessage(
          `You can order directly on our website or connect with our concierge on WhatsApp at ${phoneDisplay}. We are available 24/7 to reserve your pieces.`
        );
      } else if (lower.includes('lanyard') || lower.includes('color') || lower.includes('white') || lower.includes('blue') || lower.includes('black') || lower.includes('mint')) {
        addConciergeMessage(
          'Our Lanyard Pocket Watches feature octagonal geometric bezels in four colorways: Classic Noir, Crisp Porcelain White, Pastel Sky Blue, and Fresh Mint. You can mix and match any two for $50.'
        );
      } else {
        addConciergeMessage(
          `Thank you for your inquiry! Our senior horology stylist is also live on WhatsApp at ${phoneDisplay} to finalize orders, custom requests, and priority shipping.`
        );
      }
    }, 600);
  };

  const directWhatsAppLink = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello!%20I%20am%20chatting%20from%20the%20website%20and%20would%20like%20assistance%20with%20POEDAGAR%20watches.`;

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Floating Chat Launcher Button (White & Yellow) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-2xl shadow-yellow-400/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-yellow-300"
          aria-label="Open Concierge Chat"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-zinc-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-yellow-400 animate-pulse" />
          </div>
          <span className="hidden sm:inline font-bold">Chat Concierge</span>
          {unreadCount > 0 && (
            <span className="bg-zinc-950 text-yellow-400 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border border-yellow-400">
              {unreadCount}
            </span>
          )}
        </button>
      )}

      {/* Chat Window (Strictly White & Yellow Aesthetic) */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-[#0C101A] border-2 border-yellow-400/60 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-zinc-950 px-4 py-3.5 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-yellow-400 text-zinc-950 font-serif font-bold text-base flex items-center justify-center shadow-md">
                P
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif font-bold text-sm text-white">Atelier Concierge</h3>
                  <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
                </div>
                <div className="text-[11px] text-zinc-400 flex items-center gap-1 font-mono">
                  <span>Direct:</span>
                  <span className="text-yellow-400 font-semibold">{phoneDisplay}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 transition-colors"
                title="Switch to WhatsApp"
              >
                <ExternalLink className="w-4 h-4 text-yellow-400" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Announcement Bar in Widget */}
          <div className="bg-yellow-400/10 border-b border-yellow-400/20 px-3 py-1.5 text-[10px] text-yellow-300 flex items-center justify-between font-mono">
            <span>⚡ Worldwide Dispatch in 24–48h</span>
            <span className="text-white">Curated in USD ($)</span>
          </div>

          {/* Message Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-yellow-400 text-zinc-950 font-medium rounded-tr-none'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-tl-none leading-relaxed'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                <span className="text-[9px] text-zinc-500 font-mono mt-1 px-1">
                  {msg.time}
                </span>

                {/* Quick Action Suggestion Chips (White & Yellow) */}
                {msg.quickActions && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {msg.quickActions.map((qa, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickAction(qa.action)}
                        className="px-2.5 py-1 rounded-full bg-zinc-900 border border-yellow-400/40 text-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 text-[10px] font-semibold transition-all cursor-pointer shadow-sm"
                      >
                        {qa.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp Direct Action Bar */}
          <div className="px-3 py-1.5 bg-zinc-950/80 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
            <span className="text-zinc-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
              <span>Official Atelier Support</span>
            </span>
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 font-semibold underline flex items-center gap-1"
            >
              <span>WhatsApp Us</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Input Box (White & Yellow) */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-zinc-950 border-t border-zinc-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about watches, colorways, shipping..."
              className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-yellow-400"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-950 font-bold transition-colors cursor-pointer shadow-md"
              title="Send Message"
            >
              <Send className="w-4 h-4 text-zinc-950" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
