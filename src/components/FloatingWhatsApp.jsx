import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom duration-200">
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Nutriva Export Desk</h4>
                <span className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Online for Global RFQs
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-2.5 bg-slate-50">
            <p className="text-xs text-slate-600 mb-2">
              Select a founder to chat instantly on WhatsApp:
            </p>

            <a
              href={COMPANY_INFO.contacts[0].whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 flex items-center justify-between transition-all group"
            >
              <div>
                <strong className="block text-xs text-slate-900 group-hover:text-emerald-700">
                  Sumit Kale
                </strong>
                <span className="text-[11px] text-slate-500">
                  Export Director & Co-Founder
                </span>
              </div>
              <MessageSquare className="w-4 h-4 text-emerald-600" />
            </a>

            <a
              href={COMPANY_INFO.contacts[1].whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 flex items-center justify-between transition-all group"
            >
              <div>
                <strong className="block text-xs text-slate-900 group-hover:text-emerald-700">
                  Siddhesh Patil
                </strong>
                <span className="text-[11px] text-slate-500">
                  Operations & Trade Partner
                </span>
              </div>
              <MessageSquare className="w-4 h-4 text-emerald-600" />
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-700/40 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white" />
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
