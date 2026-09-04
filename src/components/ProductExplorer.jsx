import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Sparkles, ArrowRight, Eye, Check, X, ShieldCheck } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductModal from './ProductModal';

export default function ProductExplorer({ onSelectQuote, externalSelectedProductId }) {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState(null);

  // Handle external selection from Hero or other components
  React.useEffect(() => {
    if (externalSelectedProductId) {
      const prod = PRODUCTS.find((p) => p.id === externalSelectedProductId);
      if (prod) {
        setModalProduct(prod);
      }
    }
  }, [externalSelectedProductId]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'All Products' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.applications &&
          product.applications.some((a) =>
            a.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Export Grade Sourcing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-outfit">
            Explore Our Pure Food Powder Catalog
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Manufactured from high-grade Indian harvests, dehydrated at low temperature and micro-milled to rigorous international food safety benchmarks.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All Products'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-md shadow-emerald-800/20'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search banana, turmeric, mesh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2 text-sm bg-white rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter Notice */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <span>
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of{' '}
            {PRODUCTS.length} bulk export products
          </span>
          {searchQuery && (
            <span>
              Filtered by: "<strong className="text-emerald-700">{searchQuery}</strong>"
            </span>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container with Badge */}
                  <div className="relative aspect-square bg-slate-100/80 overflow-hidden cursor-pointer p-2 flex items-center justify-center border-b border-slate-100" onClick={() => setModalProduct(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/GREEN-POWDER-uPbw0VPB.jpg';
                      }}
                    />
                    
                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold">
                      {product.category}
                    </div>

                    {/* Badge if featured */}
                    {product.badge && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{product.badge}</span>
                      </div>
                    )}

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-white text-emerald-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-emerald-600" />
                        <span>View Technical Specs</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 font-outfit group-hover:text-emerald-700 transition-colors leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs text-emerald-800 font-medium mt-0.5">
                        {product.tagline}
                      </p>
                      <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Technical Specs Preview */}
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-[11px]">
                      <div className="bg-slate-50 p-2 rounded-xl">
                        <span className="text-slate-400 block font-medium">Mesh Size</span>
                        <span className="text-slate-800 font-bold">
                          {product.specifications?.meshSize || '80-100 Mesh'}
                        </span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl">
                        <span className="text-slate-400 block font-medium">Moisture</span>
                        <span className="text-slate-800 font-bold">
                          {product.specifications?.moisture || '< 5.0%'}
                        </span>
                      </div>
                    </div>

                    {/* Applications Tags */}
                    {product.applications && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {product.applications.slice(0, 3).map((app, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={() => setModalProduct(product)}
                        className="w-full py-2 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                      >
                        <Eye className="w-3 h-3 text-slate-500" />
                        <span>Specs</span>
                      </button>

                      <button
                        onClick={() => onSelectQuote(product.name)}
                        className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1 group-hover:bg-emerald-700"
                      >
                        <span>RFQ Quote</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 text-base">
              No products found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All Products');
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onSelectQuote={(name) => {
            setModalProduct(null);
            onSelectQuote(name);
          }}
        />
      )}
    </section>
  );
}
