import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function VisualShowcase({ onSelectQuote }) {
  const [activeImage, setActiveImage] = useState(null);

  const showcases = [
    {
      id: 1,
      title: "Green Banana Powder",
      tag: "Nutriva Standup Pouch & Bowl",
      productName: "Green Banana Powder",
      src: "/assets/raw-banana-powder-BBGH-bnD.jpg",
      description: "Premium export-grade banana powder formulation presented in moisture-barrier food-grade standup pouch and freshly milled presentation bowl."
    },
    {
      id: 2,
      title: "Pure Turmeric Powder",
      tag: "Farm Sunset Plantation",
      productName: "High Curcumin Turmeric Powder",
      src: "/assets/turmeric-Cj0LYaJb.jpg",
      description: "High curcumin golden turmeric powder photographed against Maharashtra agricultural fields, showcasing authentic vibrant hue and purity."
    },
    {
      id: 3,
      title: "Dehydrated Onion Powder",
      tag: "Allium Agro Harvest",
      productName: "Dehydrated Onion Powder",
      src: "/assets/onion01-BWEmYvjb.png",
      description: "Fine dehydrated onion powder manufactured from fresh farm onions, boasting free-flowing texture and intense culinary pungency."
    },
    {
      id: 4,
      title: "Dehydrated Garlic Powder",
      tag: "Export Quality Presentation",
      productName: "Dehydrated Garlic Powder",
      src: "/assets/Garlic01-CM4fi-uD.png",
      description: "Hygienically ground garlic cloves retaining vital allicin, natural aroma, and complete solubility for global food manufacturers."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Visual Sourcing Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-outfit">
            Export Packaging & Harvest Presentation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Take a closer look at our commercial export packaging formats, vibrant natural colors, and fine milling consistency.
          </p>
        </div>

        {/* 2x2 Responsive Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcases.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              {/* Image Container with Proper Aspect Ratio (16:9) to fit widescreen banners */}
              <div
                className="relative aspect-[16/9] overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setActiveImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold">
                  {item.tag}
                </div>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-slate-900 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-outfit">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Available in 20kg / 25kg / 50kg
                  </span>

                  <button
                    onClick={() => onSelectQuote(item.productName)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 group/btn"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl z-10"
            >
              <div className="p-4 flex items-center justify-between border-b border-slate-800 text-white">
                <div>
                  <h4 className="font-bold text-sm">{activeImage.title}</h4>
                  <span className="text-xs text-slate-400">{activeImage.tag}</span>
                </div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 flex items-center justify-center bg-black/40">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="max-h-[75vh] w-auto object-contain rounded-xl"
                />
              </div>

              <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <p className="text-xs text-slate-300 max-w-xl">{activeImage.description}</p>
                <button
                  onClick={() => {
                    const prod = activeImage.productName;
                    setActiveImage(null);
                    onSelectQuote(prod);
                  }}
                  className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
                >
                  Get Quote for This Product
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
