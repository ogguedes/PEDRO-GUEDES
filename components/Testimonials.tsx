
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#141414]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">O que nossos assinantes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#1a1a1a] p-10 rounded-3xl border border-white/5 shadow-xl">
              <div className="flex text-yellow-500 mb-6 gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-lg italic text-gray-300 mb-8 leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-[#E50914] text-xl font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-black text-white">{t.name}</div>
                  <div className="text-sm text-[#E50914] font-bold">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
