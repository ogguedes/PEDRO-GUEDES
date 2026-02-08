
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black/50 text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6 text-2xl font-black tracking-tighter text-[#E50914]">NETFLIX PROMO</div>
        <p className="text-gray-500 text-sm">&copy; 2026 Netflix Promo. Todos os direitos reservados.</p>
        <p className="text-gray-600 text-xs mt-2 uppercase tracking-widest">Esta é uma oferta promocional de tempo limitado.</p>
      </div>
    </footer>
  );
};

export default Footer;
