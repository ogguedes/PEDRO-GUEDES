
import React from 'react';

interface UpgradePopupProps {
  onClose: () => void;
}

const UpgradePopup: React.FC<UpgradePopupProps> = ({ onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-xl"
        onClick={handleBackdropClick}
      ></div>
      
      <div className="relative bg-[#111111] w-full max-w-xl rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(229,9,20,0.3)] border-2 border-[#E50914]/40 animate-scale-up z-10">
        <div className="bg-[#E50914] py-8 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <h3 className="text-3xl sm:text-4xl font-[1000] text-white uppercase tracking-tighter relative z-10">
            R$ 7,90
          </h3>
          <p className="text-white/80 font-black text-xs uppercase tracking-[0.3em] mt-2 relative z-10">OFERTA ÚNICA PARA VOCÊ</p>
        </div>

        <div className="p-10">
          <p className="text-center text-gray-300 mb-10 text-lg font-medium leading-relaxed">
            Notamos seu interesse. Que tal levar o <strong className="text-white">PLANO MASTER FAMÍLIA</strong> por uma fração do preço oficial?
          </p>

          <div className="bg-white/5 rounded-[2rem] p-8 mb-10 border border-white/10 relative group">
            <h4 className="text-[#E50914] font-black uppercase text-center mb-8 tracking-[0.25em] text-xs">BENEFÍCIOS EXCLUSIVOS:</h4>
            <ul className="space-y-4">
              {[
                'INSTALAÇÃO EM SMART TV (LG, SAMSUNG, ROKU)',
                'TELAS ILIMITADAS ♾️ EM 4K ULTRA HD',
                'SUPORTE VIP VIA WHATSAPP 24 HORAS',
                'MÉTODO PARA REVENDER E LUCRAR TODO DIA',
                'MATERIAL DE DIVULGAÇÃO COMPLETO'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-[10px] text-green-500"></i>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center bg-yellow-400/10 border-2 border-yellow-400/30 rounded-2xl p-6 mb-10">
            <span className="block text-gray-500 line-through text-base font-bold">VALOR REAL: R$ 297,00</span>
            <span className="block text-yellow-400 font-[1000] text-4xl uppercase mt-2 tracking-tighter">
              APENAS: R$ 7,90
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <a 
              href="https://pay.lowify.com.br/checkout?product_id=h2tfXa"
              onClick={handleLinkClick}
              className="bg-[#E50914] hover:bg-[#ff0a16] text-white py-6 rounded-2xl font-[900] uppercase tracking-tighter text-xl text-center shadow-2xl shadow-red-900/30 transition-all transform hover:-translate-y-1.5 active:scale-95"
            >
              🚀 ACEITAR OFERTA E ECONOMIZAR
            </a>
            <a 
              href="https://pay.lowify.com.br/checkout?product_id=2GsD73"
              onClick={handleLinkClick}
              className="text-gray-600 hover:text-white transition-colors py-2 text-[10px] uppercase font-black tracking-[0.3em] text-center cursor-pointer"
            >
              NÃO, OBRIGADO. QUERO O PLANO BÁSICO.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePopup;
