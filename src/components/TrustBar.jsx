import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Truck, FileCheck2, Sparkles, Scale } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function TrustBar() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "FSSAI Registered",
      subtitle: "Food Safety Compliant",
      color: "text-emerald-600"
    },
    {
      icon: FileCheck2,
      title: "GSTIN Registered",
      subtitle: COMPANY_INFO.gstin,
      color: "text-blue-600"
    },
    {
      icon: Sparkles,
      title: "100% Pure & Natural",
      subtitle: "Zero Artificial Additives",
      color: "text-amber-600"
    },
    {
      icon: Award,
      title: "Lab COA Tested",
      subtitle: "Heavy Metal & Bio Clean",
      color: "text-purple-600"
    },
    {
      icon: Scale,
      title: "Custom Mesh 60-100",
      subtitle: "Precision Micro-Milled",
      color: "text-teal-600"
    },
    {
      icon: Truck,
      title: "JNPT & Mundra Ports",
      subtitle: "Direct Global Dispatch",
      color: "text-emerald-700"
    }
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-2 sm:p-0 hover:translate-x-1 sm:hover:translate-x-0 sm:hover:-translate-y-1 transition-transform"
              >
                <div className={`p-2.5 rounded-xl bg-slate-50 border border-slate-100 ${item.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium truncate max-w-[130px]">
                    {item.subtitle}
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
