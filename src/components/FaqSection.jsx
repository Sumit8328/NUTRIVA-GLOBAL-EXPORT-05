import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Buyer Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-outfit">
            Frequently Asked Export Questions
          </h2>
          <p className="mt-4 text-base text-slate-600 font-light">
            Clear guidelines on sample dispatches, container MOQs, Incoterms, and batch COA compliance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {COMPANY_INFO.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 font-outfit hover:text-emerald-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
