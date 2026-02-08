
import React from 'react';

const BENEFITS = [
  { icon: 'fas fa-tv', title: 'Tudo em 4K', text: 'Qualidade máxima de imagem em todos os seus dispositivos compatíveis.' },
  { icon: 'fas fa-mobile-alt', title: 'Assista onde quiser', text: 'No celular, tablet, computador ou Smart TV.' },
  { icon: 'fas fa-download', title: 'Downloads Ilimitados', text: 'Baixe seus títulos favoritos para assistir offline.' },
  { icon: 'fas fa-infinity', title: 'Sem Interrupções', text: 'Assista a tudo sem anúncios e com reprodução contínua.' }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-[#141414]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">Por que assinar agora?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((b, idx) => (
            <div key={idx} className="bg-[#181818] p-8 rounded-2xl border border-white/5 hover:border-[#E50914]/30 transition-all text-center group">
              <div className="w-16 h-16 bg-[#E50914] rounded-full flex items-center justify-center text-2xl mb-6 mx-auto shadow-lg shadow-[#E50914]/20 group-hover:scale-110 transition-transform">
                <i className={b.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
