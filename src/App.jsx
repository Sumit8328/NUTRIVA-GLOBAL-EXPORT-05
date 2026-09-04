import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import TrustBar from './components/TrustBar';
import ProductExplorer from './components/ProductExplorer';
import VisualShowcase from './components/VisualShowcase';
import FarmToPortProcess from './components/FarmToPortProcess';
import GlobalLogistics from './components/GlobalLogistics';
import QuoteEstimator from './components/QuoteEstimator';
import ComplianceCertificates from './components/ComplianceCertificates';
import LogisticsDesk from './components/LogisticsDesk';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('Green Banana Powder');
  const [selectedProductIdForModal, setSelectedProductIdForModal] = useState(null);

  const handleSelectProductFromHero = (productId) => {
    setSelectedProductIdForModal(productId);
    const elem = document.getElementById('products');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForQuote = (productName) => {
    setSelectedProductForQuote(productName);
    const elem = document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteGeneral = () => {
    const elem = document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenQuote={handleOpenQuoteGeneral} />

      {/* Hero Showcase Carousel */}
      <main className="flex-1">
        <HeroCarousel
          onSelectProduct={handleSelectProductFromHero}
          onOpenQuote={handleOpenQuoteGeneral}
        />

        {/* Trust & Compliance Badge Bar */}
        <TrustBar />

        {/* 22+ Product Catalog Explorer with Interactive Filter & TDS Modals */}
        <ProductExplorer
          onSelectQuote={handleSelectProductForQuote}
          externalSelectedProductId={selectedProductIdForModal}
        />

        {/* Visual Sourcing Showcase & High-Res Packaging Banners */}
        <VisualShowcase onSelectQuote={handleSelectProductForQuote} />

        {/* 6-Step Farm to Port Manufacturing Process */}
        <FarmToPortProcess />

        {/* Global Logistics, Ports & Documentation Hub */}
        <GlobalLogistics />

        {/* Container Capacity Calculator & RFQ Estimator */}
        <QuoteEstimator preselectedProduct={selectedProductForQuote} />

        {/* Statutory Compliance, FSSAI & Quality Testing */}
        <ComplianceCertificates />

        {/* Executive Logistics Desk & Founder Support */}
        <LogisticsDesk prefilledProduct={selectedProductForQuote} />

        {/* Export Buyer FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Quick Action Floating WhatsApp Bubble */}
      <FloatingWhatsApp />
    </div>
  );
}
