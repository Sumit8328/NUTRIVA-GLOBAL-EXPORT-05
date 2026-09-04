import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, FlaskConical, Scale, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ComplianceCertificates() {
  return (
    <section id="compliance" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-outfit">
            Quality Assurance & Corporate Compliance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Operating under rigorous Indian statutory regulations and international quality benchmarks to ensure full peace of mind for global buyers.
          </p>
        </div>

        {/* 4 Compliance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {COMPANY_INFO.certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-100/70 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white border border-slate-200 text-emerald-700 shadow-sm">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-outfit">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                  {cert.subtitle}
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Verified Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Testing & Quality Protocol Callout Box */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 to-emerald-950 text-white p-8 sm:p-12 shadow-xl border border-emerald-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                Comprehensive Lab Inspection Suite
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-outfit text-white">
                Zero Compromise on Chemical Purity & Microbiological Safety
              </h3>
              <p className="text-sm sm:text-base text-emerald-100/90 font-light leading-relaxed max-w-2xl">
                All export lots undergo third-party NABL laboratory tests verifying: Heavy metals (Lead, Cadmium, Arsenic, Mercury), Pesticide Residue, Microbial counts (Total Plate Count &lt; 50,000 CFU/g, Yeast & Mold &lt; 1,000 CFU/g, E. Coli & Salmonella Negative / 25g), and active marker quantification.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-center">
              <Award className="w-12 h-12 text-amber-400 mb-3" />
              <h4 className="font-bold text-base text-white">Batch COA Guarantee</h4>
              <p className="text-xs text-emerald-200 mt-1">
                Downloadable or dispatched with every export BL documentation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
