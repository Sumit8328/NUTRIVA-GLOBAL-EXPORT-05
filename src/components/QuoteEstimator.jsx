import React, { useState } from 'react';
import { Calculator, Package, Send, MessageSquare, CheckCircle, ArrowRight, Sparkles, Ship } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

export default function QuoteEstimator({ preselectedProduct }) {
  const [product, setProduct] = useState(preselectedProduct || PRODUCTS[0].name);
  const [quantity, setQuantity] = useState(5);
  const [unit, setUnit] = useState('Metric Tons (MT)');
  const [packaging, setPackaging] = useState('25kg Multi-Wall Paper Bags + Inner Poly Liner');
  const [destination, setDestination] = useState('Jebel Ali, UAE / Dubai');
  const [incoterm, setIncoterm] = useState('FOB Nhava Sheva (JNPT)');
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerCompany, setBuyerCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Update product if preselected changes
  React.useEffect(() => {
    if (preselectedProduct) {
      setProduct(preselectedProduct);
    }
  }, [preselectedProduct]);

  // Container load estimation calculation
  const totalKg = unit === 'Metric Tons (MT)' ? quantity * 1000 : quantity;
  const bagCount = Math.round(totalKg / 25);
  const fcl20Percent = Math.min(100, Math.round((totalKg / 18000) * 100));
  const fcl40Percent = Math.min(100, Math.round((totalKg / 26000) * 100));

  let containerRecommendation = '';
  if (totalKg <= 3000) {
    containerRecommendation = 'LCL (Less than Container Load) Palletized or Air Freight';
  } else if (totalKg <= 18000) {
    containerRecommendation = `1 x 20ft FCL Container (~${Math.round((totalKg / 18000) * 100)}% utilization)`;
  } else if (totalKg <= 28000) {
    containerRecommendation = `1 x 40ft High Cube FCL Container (~${Math.round((totalKg / 26000) * 100)}% utilization)`;
  } else {
    const containers = (totalKg / 26000).toFixed(1);
    containerRecommendation = `Multi-Container Shipment (Approx ~${containers} x 40ft FCL containers)`;
  }

  const handleWhatsAppQuote = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*EXPORT BULK INQUIRY - NUTRIVA GLOBAL EXPORT*\n\n` +
      `👤 *Buyer Name:* ${buyerName || 'Buyer'}\n` +
      `🏢 *Company:* ${buyerCompany || 'Commercial Importer'}\n` +
      `📧 *Email:* ${buyerEmail || 'N/A'}\n` +
      `📱 *Phone:* ${buyerPhone || 'N/A'}\n\n` +
      `📦 *Requested Product:* ${product}\n` +
      `⚖️ *Estimated Quantity:* ${quantity} ${unit} (~${bagCount} bags of 25kg)\n` +
      `📦 *Preferred Packaging:* ${packaging}\n` +
      `⚓ *Destination Port:* ${destination}\n` +
      `🚢 *Trade Term:* ${incoterm}\n\n` +
      `Please provide current FOB/CIF proforma quotation, batch COA and earliest sailing schedule.`
    );

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });

    window.open(`https://wa.me/918329095601?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive B2B Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-outfit">
            Bulk Container & RFQ Estimator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Plan your export shipment volume, calculate estimated container capacity, and request an authentic proforma quote in under 60 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900 font-outfit border-b border-slate-100 pb-4">
              Consignment Specifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Product Select */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Agro Powder Product *
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Estimated Quantity *
                </label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(0.1, parseFloat(e.target.value) || 1))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              {/* Unit */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Unit of Measure *
                </label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                  <option value="Kilograms (KG)">Kilograms (KG)</option>
                </select>
              </div>

              {/* Packaging */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Export Packaging Type
                </label>
                <select
                  value={packaging}
                  onChange={(e) => setPackaging(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  <option value="25kg Multi-Wall Paper Bags + Inner Poly Liner">
                    25kg Multi-Wall Paper Bags with Inner Poly Liner
                  </option>
                  <option value="20kg Vacuum-Nitrogen Barrier Poly Bags">
                    20kg Vacuum-Nitrogen Barrier Poly Bags
                  </option>
                  <option value="50kg Airtight Fiber Drums">
                    50kg Airtight Fiber Drums (Pharma & Extract Grade)
                  </option>
                  <option value="Custom Private Label Export Sacks">
                    Custom Private Label Export Sacks
                  </option>
                </select>
              </div>

              {/* Port & Incoterms */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Destination Port / Country *
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Jebel Ali, Rotterdam, Los Angeles"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Desired Trade Term
                </label>
                <select
                  value={incoterm}
                  onChange={(e) => setIncoterm(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  <option value="FOB Nhava Sheva (JNPT)">FOB Nhava Sheva (JNPT / Mumbai)</option>
                  <option value="CIF Destination Port">CIF Destination Port</option>
                  <option value="CFR Destination Port">CFR Destination Port</option>
                  <option value="EXW Warehouse Maharashtra">EXW Warehouse Maharashtra</option>
                </select>
              </div>
            </div>

            {/* Buyer Contact Credentials */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <h4 className="text-sm font-bold text-slate-900">Your Business Contact (For Proforma)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  placeholder="Company / Organization *"
                  value={buyerCompany}
                  onChange={(e) => setBuyerCompany(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Business Email *"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp / Phone with Country Code"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="flex-1 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Proforma Quote</span>
              </button>
            </div>
          </div>

          {/* Real-time Calculation & Container Visualizer Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Ship className="w-4 h-4" />
                  Estimated Logistics Specs
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  JNPT Origin
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="text-xs text-slate-400">Total Net Weight:</span>
                  <div className="text-3xl font-black font-outfit text-white mt-0.5">
                    {totalKg.toLocaleString()} <span className="text-sm font-normal text-slate-400">KG</span>
                    <span className="text-sm text-emerald-400 ml-2">({(totalKg / 1000).toFixed(2)} MT)</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-400">Estimated Bag / Carton Count:</span>
                  <div className="text-2xl font-bold font-outfit text-white mt-0.5 flex items-center gap-2">
                    <Package className="w-5 h-5 text-amber-400" />
                    <span>~{bagCount.toLocaleString()} Standard 25kg Units</span>
                  </div>
                </div>

                {/* Container Utilization Visualizer */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold">20ft Container (18 MT Max)</span>
                    <span className="text-emerald-400 font-bold">{fcl20Percent}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, fcl20Percent)}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2">
                    <span className="text-slate-300 font-semibold">40ft HC Container (26 MT Max)</span>
                    <span className="text-amber-400 font-bold">{fcl40Percent}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, fcl40Percent)}%` }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/80 text-xs">
                  <span className="text-emerald-300 font-bold block mb-1">Recommended Mode:</span>
                  <p className="text-slate-200 font-medium">{containerRecommendation}</p>
                </div>
              </div>

              {/* Founder Desk Direct Notice */}
              <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <p className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct quote from founders Sumit Kale & Siddhesh Patil</span>
                </p>
                <p className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Includes batch COA & preliminary ocean freight estimate</span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
