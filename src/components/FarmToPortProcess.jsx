import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Sparkles, Flame, Cpu, PackageCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function FarmToPortProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const iconMap = {
    Sprout,
    Sparkles,
    Flame,
    Cpu,
    PackageCheck,
    Ship
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            Purity In Every Grain
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-outfit">
            The Farm-to-Global Port Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            We don't just export ingredients; we maintain absolute traceability and quality control at every phase of processing.
          </p>
        </div>

        {/* Interactive Steps Horizontal Navigator (Desktop) */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-12">
          {COMPANY_INFO.processSteps.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            const isCurrent = activeStep === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all border relative flex flex-col justify-between h-36 ${
                  isCurrent
                    ? 'bg-emerald-800 text-white shadow-xl shadow-emerald-900/20 border-emerald-700 scale-105 z-10'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-black font-outfit ${
                      isCurrent ? 'text-emerald-300' : 'text-slate-400'
                    }`}
                  >
                    {item.step}
                  </span>
                  <div
                    className={`p-2 rounded-xl ${
                      isCurrent ? 'bg-white/20 text-white' : 'bg-white text-emerald-700 shadow-sm'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4
                    className={`text-xs font-bold leading-tight ${
                      isCurrent ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight Box for Selected Step */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800 mb-16">
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase">
                <span>Phase {COMPANY_INFO.processSteps[activeStep].step}</span>
                <span>•</span>
                <span>Standard Operating Procedure</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-outfit text-white">
                {COMPANY_INFO.processSteps[activeStep].title}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                {COMPANY_INFO.processSteps[activeStep].description}
              </p>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  HACCP & GMP Principles
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Zero Chemical Residues
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Batch Traceability Code
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
                {React.createElement(
                  iconMap[COMPANY_INFO.processSteps[activeStep].icon] || Sparkles,
                  { className: 'w-8 h-8' }
                )}
              </div>
              <h5 className="font-bold text-sm text-white">Quality Guarantee</h5>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Every shipment is inspected and sealed prior to port customs clearance.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Timeline Cards */}
        <div className="lg:hidden space-y-4">
          {COMPANY_INFO.processSteps.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 tracking-wider">
                    STEP {item.step}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
