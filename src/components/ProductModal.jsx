import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Package, MapPin, Clock, Sparkles, MessageSquare, ArrowRight, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ProductModal({ product, onClose, onSelectQuote }) {
  if (!product) return null;

  const handleInquireWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sumit Kale & Nutriva Team,\n\nI am interested in placing an export inquiry for:\nProduct: ${product.name}\nCategory: ${product.category}\nPlease provide latest FOB/CIF export pricing, COA and available bulk packaging.`
    );
    window.open(`https://wa.me/918329095601?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                {product.category}
              </span>
              {product.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {product.badge}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Product Visual Box */}
              <div className="md:col-span-5 space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-xl transition-transform hover:scale-105 duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/GREEN-POWDER-uPbw0VPB.jpg';
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                  <span className="font-semibold text-slate-700">100% Export Grade Purity</span>
                  <span className="text-emerald-700 font-bold">Lab Certified</span>
                </div>

                {/* Key Benefits Pill Grid */}
                {product.highlights && (
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Key Highlights
                    </h5>
                    <div className="space-y-1.5">
                      {product.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Product Specs & TDS */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit">
                    {product.name}
                  </h2>
                  <p className="text-sm font-semibold text-emerald-700 mt-1">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Technical Specification Table */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-emerald-600" />
                      Technical Data & Export Specifications
                    </h4>
                    <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      NABL Tested
                    </span>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/50 divide-y divide-slate-200 text-xs overflow-hidden">
                    {product.specifications.botanicalName && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="text-slate-500 font-medium">Botanical Name</span>
                        <span className="col-span-2 font-semibold text-slate-900 italic">
                          {product.specifications.botanicalName}
                        </span>
                      </div>
                    )}
                    {product.specifications.appearance && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="text-slate-500 font-medium">Appearance</span>
                        <span className="col-span-2 font-semibold text-slate-900">
                          {product.specifications.appearance}
                        </span>
                      </div>
                    )}
                    {product.specifications.meshSize && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="text-slate-500 font-medium">Mesh Particle Size</span>
                        <span className="col-span-2 font-bold text-emerald-700">
                          {product.specifications.meshSize}
                        </span>
                      </div>
                    )}
                    {product.specifications.moisture && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="text-slate-500 font-medium">Moisture Content</span>
                        <span className="col-span-2 font-semibold text-slate-900">
                          {product.specifications.moisture}
                        </span>
                      </div>
                    )}
                    {product.specifications.resistantStarch && (
                      <div className="grid grid-cols-3 p-3 bg-emerald-50/50">
                        <span className="text-emerald-800 font-bold">Resistant Starch (RS2)</span>
                        <span className="col-span-2 font-black text-emerald-800">
                          {product.specifications.resistantStarch}
                        </span>
                      </div>
                    )}
                    {product.specifications.curcuminContent && (
                      <div className="grid grid-cols-3 p-3 bg-amber-50/50">
                        <span className="text-amber-800 font-bold">Curcumin Content</span>
                        <span className="col-span-2 font-black text-amber-800">
                          {product.specifications.curcuminContent}
                        </span>
                      </div>
                    )}
                    {product.specifications.shelfLife && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="text-slate-500 font-medium">Shelf Life</span>
                        <span className="col-span-2 font-semibold text-slate-900">
                          {product.specifications.shelfLife} (Airtight)
                        </span>
                      </div>
                    )}
                    {product.specifications.origin && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="text-slate-500 font-medium">Origin</span>
                        <span className="col-span-2 font-semibold text-slate-900 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          {product.specifications.origin}
                        </span>
                      </div>
                    )}
                    {product.specifications.packaging && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="text-slate-500 font-medium">Bulk Packaging</span>
                        <span className="col-span-2 font-medium text-slate-800">
                          {product.specifications.packaging}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Applications Chips */}
                {product.applications && (
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Industrial Applications
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full COA & Phytosanitary Certificate issued per shipment</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleInquireWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp Quote</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectQuote(product.name);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all"
              >
                <span>Add to RFQ Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
