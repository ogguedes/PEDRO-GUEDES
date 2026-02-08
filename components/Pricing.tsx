
import React, { useState, useEffect } from 'react';
import { PLANS } from '../constants.ts';

interface PricingProps {
  onShowPopup: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onShowPopup }) => {
  const [timeLeft, setTimeLeft] = useState(5733);
  const [vagas, setVagas] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    const vagasTimer = setInterval(() => setVagas(prev => (prev > 3 ? prev - 1 : prev)), 45000);
    return () => { clearInterval(timer); clearInterval(vagasTimer); };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="plans" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-[#E50914]/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-7xl font-[900] mb-6 tracking-tighter text-white uppercase leading-none">ESCOLHA SEU ACESSO</h2>
          <p className="text-gray-400 text-lg font-medium max-w-xl mx-auto">Selecione o plano ideal para você e comece a maratonar em segundos.</p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
             <div className="bg-red-600/15 border-2 border-red-600/30 px-8 py-4 rounded-[1.5rem] flex items-center gap-4 shadow-lg shadow-red-900/10">
               <div className="text-red-500 font-[900] text-4xl">{vagas}</div>
               <div className="text-left">
                 <div className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none">Vagas Restantes</div>
                 <div className="text-[10px] font-medium text-red-500/70 uppercase tracking-tight mt-0.5">Ativas para Hoje</div>
               </div>
             </div>
             
             <div className="bg-orange-500/15 border-2 border-orange-500/30 px-8 py-4 rounded-[1.5rem] flex items-center gap-4 shadow-lg shadow-orange-900/10">
               <div className="text-orange-500 font-[900] text-4xl tabular-nums">{formatTime(timeLeft)}</div>
               <div className="text-left">
                 <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none">A Promoção Expira</div>
                 <div className="text-[10px] font-medium text-orange-500/70 uppercase tracking-tight mt-0.5">Garanta seu desconto</div>
               </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col bg-[#111111] rounded-[3rem] p-10 border-2 transition-all duration-700 ${
                plan.id === 'maratona-pro' 
                ? 'border-[#E50914] shadow-[0_40px_80px_-20px_rgba(229,9,20,0.5)] ring-8 ring-red-600/5 z-20 scale-105' 
                : 'border-white/5 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-[10px] font-[900] uppercase tracking-[0.25em] whitespace-nowrap shadow-2xl ${
                  plan.id === 'maratona-pro' ? 'bg-[#E50914] animate-bounce text-white' : 'bg-white text-black'
                }`}>
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-[900] mb-3 tracking-tighter uppercase">{plan.name}</h3>
                <div className={`h-1.5 w-16 mx-auto rounded-full ${plan.id === 'start' ? 'bg-gray-700' : 'bg-[#E50914]'}`}></div>
              </div>
              
              <div className={`text-center mb-10 p-8 rounded-[2rem] border relative overflow-hidden group ${
                plan.id === 'start' ? 'bg-white/5 border-white/5' : 'bg-white/5 border-white/10'
              }`}>
                {plan.oldPrice && (
                  <span className="block text-gray-500 line-through text-base font-bold mb-1">{plan.oldPrice}</span>
                )}
                <div className="flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl font-[1000] tracking-tighter text-white">
                    {plan.price}
                  </span>
                </div>
                <span className={`block text-[11px] uppercase font-black mt-3 tracking-[0.2em] ${plan.id === 'start' ? 'text-gray-400' : 'text-[#E50914]'}`}>{plan.period}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-4 text-[15px]">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.id === 'maratona-pro' ? 'bg-red-600 shadow-[0_0_10px_rgba(229,9,20,0.5)]' : 'bg-gray-800'
                    }`}>
                      <i className="fas fa-check text-[10px] text-white"></i>
                    </div>
                    <span className={`text-gray-300 font-medium ${f.includes('VITALÍCIO') || f.includes('4K') || f.includes('♾️') ? 'font-black text-white' : ''}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-6">
                <a 
                  href={plan.id === 'start' ? plan.checkoutUrl : '#'}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (plan.id !== 'start') {
                      e.preventDefault();
                      onShowPopup();
                    }
                  }}
                  className={`relative block w-full py-6 rounded-[1.5rem] text-center font-[900] uppercase tracking-tighter text-xl transition-all transform hover:-translate-y-1.5 active:scale-95 overflow-hidden group shadow-2xl ${
                    plan.id === 'maratona-pro'
                    ? 'bg-[#E50914] text-white hover:bg-[#ff0a16] shadow-red-900/40'
                    : plan.id === 'start'
                      ? 'bg-zinc-800 text-white hover:bg-zinc-700 shadow-xl'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                  {plan.id === 'maratona-pro' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine transition-transform duration-1000"></div>
                  )}
                </a>
                
                <div className="flex items-center justify-center gap-6 py-4 bg-white/5 rounded-2xl border border-white/5">
                  <i className="fab fa-cc-visa text-gray-400 text-xl hover:text-white transition-colors"></i>
                  <i className="fab fa-cc-mastercard text-gray-400 text-xl hover:text-white transition-colors"></i>
                  <i className="fas fa-qrcode text-gray-400 text-xl hover:text-white transition-colors"></i>
                  <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
                  <i className="fas fa-lock text-gray-500 text-xs"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Seal */}
        <div className="mt-24 flex flex-col items-center gap-6 opacity-80">
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gray-700"></div>
            <div className="w-16 h-16 rounded-full border-4 border-[#E50914]/40 flex items-center justify-center bg-[#E50914]/10 shadow-[0_0_20px_rgba(229,9,20,0.2)]">
               <i className="fas fa-shield-halved text-3xl text-[#E50914]"></i>
            </div>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gray-700"></div>
          </div>
          <div className="text-center">
            <h4 className="text-white font-black uppercase tracking-[0.25em] text-sm mb-2">SATISFAÇÃO GARANTIDA</h4>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 max-w-sm">
              SE VOCÊ NÃO FICAR SATISFEITO NOS PRIMEIROS 7 DIAS, DEVOLVEMOS 100% DO SEU DINHEIRO NA HORA.
            </p>
          </div>
          {/* Decorative Red Dot */}
          <div className="w-8 h-8 bg-[#E50914] blur-xl opacity-50 rounded-full mt-4 mx-auto"></div>
        </div>
      </div>

      <style>{`
        @keyframes shine { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-shine { animation: shine 2s infinite; }
      `}</style>
    </section>
  );
};

export default Pricing;
