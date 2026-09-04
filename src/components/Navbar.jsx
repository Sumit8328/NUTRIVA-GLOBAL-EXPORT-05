import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight, ShieldCheck, Globe2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollPos / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products Catalog', href: '#products' },
    { name: 'Farm-to-Port Process', href: '#process' },
    { name: 'Global Shipping', href: '#shipping' },
    { name: 'Container Calculator', href: '#calculator' },
    { name: 'Compliance & Trust', href: '#compliance' },
    { name: 'Founder Desk', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner for Export Notice & GST */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              GSTIN: {COMPANY_INFO.gstin}
            </span>
            <span className="hidden sm:inline-block text-slate-400">
              Direct Agro Export Hubs, Maharashtra, India
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <a
              href={`tel:${COMPANY_INFO.contacts[0].phone}`}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Sumit K: {COMPANY_INFO.contacts[0].displayPhone}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a
              href={`tel:${COMPANY_INFO.contacts[1].phone}`}
              className="hover:text-emerald-400 transition-colors hidden md:flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Siddhesh P: {COMPANY_INFO.contacts[1].displayPhone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/50"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-emerald-950/5 py-2.5'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-emerald-600 via-green-500 to-amber-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white shadow-md p-1 border border-emerald-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Nutriva Global Export Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/favicon.svg';
                }}
              />
            </div>
            <div>
              <span className="block font-black text-slate-900 tracking-tight text-lg sm:text-xl font-outfit uppercase leading-none">
                Nutriva<span className="text-emerald-600">.</span>Global
              </span>
              <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-emerald-700 uppercase">
                Export India
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-emerald-700 rounded-lg hover:bg-emerald-50/80 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={COMPANY_INFO.contacts[0].whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full border border-emerald-200 text-emerald-800 bg-emerald-50/60 hover:bg-emerald-100/80 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white rounded-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request Bulk Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={COMPANY_INFO.contacts[0].whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-emerald-300 text-emerald-800 bg-emerald-50 font-bold text-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat with Sumit Kale (WhatsApp)</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
              >
                <span>Request Export Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
