import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles, Award, Globe, Leaf } from 'lucide-react';
import { HERO_SLIDES } from '../data/slides';
import OrganicParticles from './OrganicParticles';

export default function HeroCarousel({ onSelectProduct, onOpenQuote }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      className="relative min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-950 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Cross-Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
      </AnimatePresence>

      {/* Deep Gradient Overlays & Organic Particle Dust */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      <OrganicParticles count={35} color={slide.glowColor} />

      {/* Ambient Radial Glow */}
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none transition-colors duration-1000 opacity-30"
        style={{ background: slide.color }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-xs font-semibold text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{slide.badge}</span>
                </div>

                {/* Subtitle */}
                <p className="text-sm sm:text-base font-bold tracking-widest uppercase text-emerald-400">
                  {slide.subtitle}
                </p>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight font-outfit leading-none">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
                  {slide.description}
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg pt-2">
                  {slide.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all"
                    >
                      <div className="text-xl sm:text-2xl font-black font-outfit text-white">
                        {stat.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onSelectProduct(slide.productId)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-slate-950 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20"
                    style={{ background: slide.color === '#57534e' ? '#22c55e' : slide.color }}
                  >
                    <span className="text-white drop-shadow">{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all hover:border-white/40"
                  >
                    <span>Request Bulk Export Quote</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Floating Product Bowl Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 6 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square flex items-center justify-center"
              >
                {/* Glowing Outer Rings */}
                <div
                  className="absolute inset-0 rounded-full border border-white/15 animate-pulse-subtle"
                  style={{ boxShadow: `0 0 60px ${slide.glowColor}` }}
                />
                <div className="absolute inset-6 rounded-full border border-dashed border-white/20 animate-spin" style={{ animationDuration: '30s' }} />

                {/* Floating Bowl Graphic */}
                <div className="relative z-10 w-[88%] h-[88%] flex items-center justify-center animate-float">
                  <img
                    src={slide.bowl}
                    alt={slide.title}
                    className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/GREEN-POWDER-uPbw0VPB.jpg';
                    }}
                  />
                </div>

                {/* Floating Tag 1: Origin */}
                <div className="absolute -top-2 -left-2 sm:top-4 sm:left-0 z-20 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/15 backdrop-blur-md text-xs font-semibold text-slate-200 flex items-center gap-1.5 shadow-xl">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Indian Agro Export</span>
                </div>

                {/* Floating Tag 2: Natural */}
                <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 z-20 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/15 backdrop-blur-md text-xs font-semibold text-slate-200 flex items-center gap-1.5 shadow-xl">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Pure & Preservative Free</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Navigation Bar & Slide Switchers */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                  current === idx
                    ? 'bg-white text-slate-950 shadow-md font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: s.color }}
                />
                <span className="hidden sm:inline">{s.title.split(' ')[0]}</span>
                {current === idx && (
                  <motion.div
                    layoutId="activeSlideIndicator"
                    className="absolute inset-0 rounded-full border-2 border-emerald-400 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
