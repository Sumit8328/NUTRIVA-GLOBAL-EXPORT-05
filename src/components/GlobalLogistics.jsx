import React from 'react';
import { Ship, Plane, Anchor, Box, FileText, CheckCircle2, Globe2, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function GlobalLogistics() {
  const regions = [
    {
      name: "Middle East & GCC",
      countries: "UAE (Dubai/Jebel Ali), Saudi Arabia, Oman, Qatar, Kuwait",
      transit: "3 - 7 Days Sea Transit",
      highlight: "High Volume Route"
    },
    {
      name: "European Union & UK",
      countries: "Germany (Hamburg), Netherlands (Rotterdam), UK (Felixstowe), France",
      transit: "18 - 24 Days Sea Transit",
      highlight: "Strict EU Lab Tested"
    },
    {
      name: "North America",
      countries: "USA (New York, Los Angeles), Canada (Vancouver, Montreal)",
      transit: "24 - 32 Days Sea Transit",
      highlight: "FCL & LCL Palletized"
    },
    {
      name: "Southeast Asia & APAC",
      countries: "Singapore, Malaysia, Vietnam, Indonesia, Australia",
      transit: "8 - 15 Days Sea Transit",
      highlight: "Phytosanitary Cleared"
    }
  ];

  const documents = [
    "Commercial Invoice & Detailed Packing List",
    "Certificate of Analysis (COA) - NABL Lab Tested",
    "Phytosanitary Certificate (Plant Quarantine)",
    "Certificate of Origin (Chamber of Commerce)",
    "Bill of Lading (Clean On Board)",
    "FSSAI Health & Purity Certificate"
  ];

  return (
    <section id="shipping" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle World Map Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Worldwide Connectivity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-outfit">
            Global Logistics & Shipping Infrastructure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Strategically located near India’s largest international container ports, guaranteeing seamless ocean freight and rapid customs clearance.
          </p>
        </div>

        {/* Major Ocean & Air Hubs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {COMPANY_INFO.exportPorts.map((port, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-800/70 border border-slate-700/80 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {port.type.includes('Air') ? (
                    <Plane className="w-6 h-6" />
                  ) : (
                    <Anchor className="w-6 h-6" />
                  )}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-mono text-emerald-300">
                  {port.code}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                {port.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                {port.loc}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-400">{port.type}</span>
                <span className="text-emerald-400 font-semibold">Priority Booking</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Export Destination Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-800/40 border border-slate-800 hover:bg-slate-800/80 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                  {reg.highlight}
                </span>
                <h4 className="text-lg font-bold text-white mt-1 font-outfit">
                  {reg.name}
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {reg.countries}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs">
                <span className="text-slate-400">{reg.transit}</span>
                <span className="text-emerald-400 font-medium">Weekly Sailings</span>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Terms & Documentation Split Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Incoterms & Packaging Specs */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-800/60 border border-slate-700 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Box className="w-5 h-5 text-emerald-400" />
                Export Packaging Standards
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Moisture-barrier, tamper-proof and nitrogen-flushed export packaging tailored for trans-oceanic voyages.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">20kg / 25kg Multi-Wall Kraft Paper Bags</strong>
                  <span className="text-slate-400">Heat-sealed 80-micron food-grade polyethylene inner liner preventing humidity absorption.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">50kg Fiber Drums & Airtight Barrels</strong>
                  <span className="text-slate-400">Ideal for hygroscopic fruit powders and specialized pharmaceutical-grade extracts.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Fumigated ISPM-15 Wooden Pallets</strong>
                  <span className="text-slate-400">All pallets are heat-treated, stretch-wrapped, and corner-protected for fork-lift safety.</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Supported Trade Incoterms
              </h4>
              <div className="flex flex-wrap gap-2">
                {COMPANY_INFO.shippingTerms.map((term, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs font-semibold text-emerald-300 border border-slate-700"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Export Documentation Suite */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-800/60 border border-slate-700 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                Complete Export Documentation
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Zero friction customs clearance with authenticated statutory certificates delivered prior to cargo discharge.
              </p>
            </div>

            <div className="space-y-3">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-700/60 text-xs text-slate-200"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300 flex items-center justify-between">
              <span>Third-party inspection by SGS / Bureau Veritas available on buyer request</span>
              <span className="font-bold text-white">SGS Ready</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
