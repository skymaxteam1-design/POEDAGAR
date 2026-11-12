import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  Camera,
  Copy,
  Check,
  Sparkles,
  Sliders,
  Layers,
  ArrowRight,
  Sun,
  Aperture,
  Share2,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { AI_PROMPTS, STYLING_GUIDE } from '../data/storeData';

export default function LookbookPage() {
  const { navigateToProduct } = useStore();
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'prompts' | 'styling' | 'social'>('prompts');

  const copyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const socialCaptions = [
    {
      title: 'Caption 1: Minimalist Black Watch (Instagram Feed & Reels)',
      caption: `Elevate your daily style with the ultra-sleek POEDAGAR cushion timepiece. ✨ Precision quartz, scratch-resistant matte black stainless steel, and quiet luxury in every detail.\n\nShips in our signature gift box with an authenticity/warranty card. 📦 Worldwide express delivery available.\n\nTap the link in bio or WhatsApp +44 7532 772917 to claim yours today for $45. Limited pieces in stock! #QuietLuxury #PoedagarWatch #TimepieceStyle #MensStyle #WomensWatch #Horology`,
    },
    {
      title: 'Caption 2: Chic Lanyard Pocket Timepieces (TikTok & Streetwear)',
      caption: `The new way to wear time ⏱️ Loop it through your denim belt loops, clip it to your designer handbag, or wear it as a statement pendant! Introducing our new octagonal bezel Lanyard Mini-Watches in Classic Noir, Porcelain White, Pastel Sky Blue, and Mint.\n\n🔥 BUNDLE DEAL: Get any 2 colorways for just $50 (Save $10)! Dispatches in 24–48 hours.\n\nWhatsApp +44 7532 772917 or DM us to order before the first drop sells out! #LanyardWatch #StreetwearFashion #BagCharm #AestheticWatches #FashionTrends`,
    },
    {
      title: 'Caption 3: WhatsApp Broadcast & Story Status',
      caption: `🚨 NEW DROP: The 2024 Atelier Horlogerie Collection is now live!\n\n1. POEDAGAR Minimalist Black Watch — $45\n2. Octagonal Lanyard Pocket Timepieces — $30 each (2 for $50)\n\nFast international dispatch. Message our concierge on WhatsApp at +44 7532 772917 with your delivery address to order now.`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5 text-purple-400" />
          <span>Part 2: Editorial Lookbook &amp; AI Studio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Visual Production &amp; AI Prompts
        </h1>
        <p className="text-sm text-zinc-400">
          Recreate these high-end commercial studio captures, street-style fashion editorials, and travertine flat lays using Midjourney, Flux, or ChatGPT/DALL-E.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center border-b border-zinc-800 pb-4">
        <div className="inline-flex bg-zinc-900 p-1.5 rounded-2xl border border-zinc-800 gap-1">
          <button
            onClick={() => setActiveTab('prompts')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'prompts'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            AI Studio Prompts (Part 2)
          </button>
          <button
            onClick={() => setActiveTab('styling')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'styling'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Streetwear Styling Guide
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'social'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Social Media Copy Toolkit
          </button>
        </div>
      </div>

      {/* Tab 1: AI Studio Prompts */}
      {activeTab === 'prompts' && (
        <div className="space-y-12">
          {AI_PROMPTS.map((promptItem, index) => {
            const isCopied = copiedPromptId === promptItem.id;

            return (
              <div
                key={promptItem.id}
                className="rounded-3xl bg-zinc-900/60 border border-zinc-800 overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-8">
                  
                  {/* Photo Visual (5 cols) */}
                  <div className="lg:col-span-5 relative group">
                    <div className="rounded-2xl overflow-hidden border border-zinc-700/60 bg-zinc-950 shadow-xl">
                      <img
                        src={promptItem.sampleImage}
                        alt={promptItem.title}
                        className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/90 border border-zinc-800 text-[10px] font-mono text-purple-300">
                      Aspect Ratio: {promptItem.aspectRatio}
                    </div>
                  </div>

                  {/* Prompt Text & Details (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold uppercase">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Prompt {index + 1}: {promptItem.styleCategory}</span>
                      </div>
                      <span className="text-[11px] text-zinc-500 font-mono">
                        Target: {promptItem.targetSubject}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {promptItem.title}
                    </h3>

                    {/* Copyable Prompt Box */}
                    <div className="relative rounded-2xl bg-zinc-950 p-4 border border-zinc-800 space-y-2 group">
                      <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                        <span>Ready-To-Copy Master Prompt</span>
                        <span className="text-purple-400 font-semibold">Midjourney / Flux / DALL-E 3</span>
                      </div>

                      <p className="text-xs text-zinc-300 font-mono leading-relaxed select-all">
                        {promptItem.promptText}
                      </p>

                      <button
                        onClick={() => copyPrompt(promptItem.id, promptItem.promptText)}
                        className={`mt-2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-500 text-zinc-950 shadow-md'
                            : 'bg-purple-600 hover:bg-purple-500 text-white'
                        }`}
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'Prompt Copied to Clipboard!' : 'Copy AI Prompt'}</span>
                      </button>
                    </div>

                    {/* Technical Notes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
                        <div className="flex items-center gap-1.5 text-zinc-400 font-medium mb-1">
                          <Sun className="w-3.5 h-3.5 text-amber-400" />
                          <span>Lighting Strategy</span>
                        </div>
                        <p className="text-[11px] text-zinc-400">{promptItem.lightingNotes}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
                        <div className="flex items-center gap-1.5 text-zinc-400 font-medium mb-1">
                          <Aperture className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Recommended Use</span>
                        </div>
                        <p className="text-[11px] text-zinc-400">{promptItem.recommendedUse}</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: Streetwear Styling Guide */}
      {activeTab === 'styling' && (
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-serif font-bold text-white">
              The 3 Rules of Styling Lanyard Timepieces
            </h3>
            <p className="text-xs text-zinc-400">
              Transforming traditional horology into versatile street-style statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STYLING_GUIDE.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3">
                  <div className="text-3xl font-mono font-bold text-amber-400">
                    {item.number}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 text-xs">
                  <span className="text-zinc-500">Styling Vibe:</span>
                  <div className="font-semibold text-amber-300 mt-0.5">{item.vibe}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-white text-sm">Ready to wear the new style?</div>
              <div className="text-xs text-zinc-400">Claim the Chic Lanyard Pocket Timepiece in your favorite colorway today.</div>
            </div>
            <button
              onClick={() => navigateToProduct('lanyard-pocket-watch')}
              className="px-5 py-2.5 rounded-xl bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider"
            >
              Order Lanyard Timepiece
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Social Media Copy Toolkit */}
      {activeTab === 'social' && (
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-serif font-bold text-white">
              Ready-to-Post Captions &amp; Sales Copy
            </h3>
            <p className="text-xs text-zinc-400">
              Formatted with emojis, pricing, delivery options, and calls-to-action for high-converting social campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {socialCaptions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-white">{item.title}</h4>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(item.caption);
                      setCopiedPromptId(`caption-${idx}`);
                      setTimeout(() => setCopiedPromptId(null), 2000);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium cursor-pointer"
                  >
                    {copiedPromptId === `caption-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedPromptId === `caption-${idx}` ? 'Copied!' : 'Copy Caption'}</span>
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 font-sans whitespace-pre-wrap leading-relaxed select-all">
                  {item.caption}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
