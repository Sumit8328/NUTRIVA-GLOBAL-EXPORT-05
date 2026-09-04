import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2, User, Building, ShieldCheck, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';

export default function LogisticsDesk({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: prefilledProduct || PRODUCTS[0].name,
    quantity: '5',
    unit: 'Metric Tons (MT)',
    port: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, product: prefilledProduct }));
    }
  }, [prefilledProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Also format WhatsApp message for immediate dispatch
    const text = encodeURIComponent(
      `*DIRECT BULK INQUIRY - NUTRIVA GLOBAL EXPORT*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `🏢 *Company:* ${formData.company || 'Not Specified'}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📦 *Product:* ${formData.product}\n` +
      `⚖️ *Quantity:* ${formData.quantity} ${formData.unit}\n` +
      `⚓ *Target Port:* ${formData.port || 'FOB Mumbai'}\n` +
      `💬 *Message:* ${formData.message || 'Please provide latest proforma price quote.'}`
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/918329095601?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background styling */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Partner Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-outfit">
            Connect with Global Logistics Desk
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Speak directly with our founding directors for international trade agreements, bulk contracts, and customized packaging.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {COMPANY_INFO.contacts.map((contact, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500/60 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    Co-Founder Desk
                  </span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <h3 className="text-2xl font-bold text-white font-outfit">
                  {contact.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{contact.role}</p>

                <div className="mt-6 space-y-3 text-sm">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-slate-700/60 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-semibold">{contact.displayPhone}</span>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-slate-700/60 text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="truncate">{COMPANY_INFO.email}</span>
                  </a>

                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="p-2 rounded-xl bg-slate-700/60 text-emerald-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs">Maharashtra Export Hubs, India</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center gap-3">
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp {contact.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Inquiry Form */}
        <div className="max-w-4xl mx-auto bg-slate-800/90 rounded-3xl p-8 sm:p-12 border border-slate-700 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-700 pb-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white font-outfit">
                Submit Formal Export Inquiry (RFQ)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Receive commercial pricing, lead times, and certified specifications within 24 business hours.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Verification</span>
            </div>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Inquiry Registered Successfully!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. Your export inquiry for{' '}
                <strong>
                  {formData.quantity} {formData.unit} of {formData.product}
                </strong>{' '}
                has been transmitted to Sumit Kale and Siddhesh Patil.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition-all"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Importer Name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Global Foods Trading LLC"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Agro Powder Product *
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Quantity & Unit *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <select
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-full px-2 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                      <option value="Kilograms (KG)">Kilograms (KG)</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Target Discharge Port / Country *
                  </label>
                  <input
                    type="text"
                    name="port"
                    required
                    value={formData.port}
                    onChange={handleChange}
                    placeholder="e.g. Jebel Ali Dubai, Rotterdam Netherlands, Felixstowe UK"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Special Packaging, Mesh or Application Requirements
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Looking for 80 mesh Green Banana Powder in 25kg multi-wall paper bags with COA for baby food formulation..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Confidential commercial inquiries only. No spam.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm shadow-xl shadow-emerald-700/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Transmitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry & Request Quote</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
