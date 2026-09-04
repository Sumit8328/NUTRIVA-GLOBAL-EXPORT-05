import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Nutriva Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/favicon.svg';
                  }}
                />
              </div>
              <div>
                <span className="block font-black text-white text-lg tracking-tight uppercase font-outfit">
                  Nutriva<span className="text-emerald-500">.</span>Global
                </span>
                <span className="block text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase">
                  Export India
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              India's premier export manufacturer and bulk supplier of 100% natural Green Banana Powder (G9 Prebiotic), dehydrated vegetable & fruit powders, and pure Indian spices.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                GSTIN: {COMPANY_INFO.gstin}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                FSSAI Registered
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  Product Catalog
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-emerald-400 transition-colors">
                  Farm-to-Port Process
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-emerald-400 transition-colors">
                  Global Shipping & Ports
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                  Container Load Estimator
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-emerald-400 transition-colors">
                  Compliance & Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Logistics Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Top Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">
              Flagship Powders
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  G9 Green Banana Powder
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  High-Curcumin Turmeric
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  Dehydrated Garlic Powder
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  Dehydrated Onion Powder
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  Sun-Dried Tomato Powder
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  Organic Moringa Leaf Powder
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">
              Headquarters & Ports
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Agro Export Hubs, Maharashtra, India (Proximity to JNPT Port)</span>
              </p>

              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sumit Kale: +91 83290 95601</span>
              </p>

              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Siddhesh Patil: +91 70201 69335</span>
              </p>

              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} Nutriva Global Export. All rights reserved. Registered Export Entity India.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-slate-900"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
