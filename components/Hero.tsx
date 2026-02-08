
import React, { useRef, useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const videoUrl = "https://www.dropbox.com/scl/fi/0h3i6zjscctm2z51m4zme/netlixvideo.mp4?rlkey=llxgf0znoxfvsz53an0fpt9o1&st=0haqt1ld&dl=1";

  useEffect(() => {
    const attemptPlay = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          setIsPlaying(false);
          setIsLoading(false);
        }
      }
    };
    attemptPlay();
  }, []);

  const handleTogglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleUnmute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().then(() => setIsPlaying(true));
      }
    }, 5000);
  };

  const scrollToPlans = (e: React.MouseEvent) => {
    e.stopPropagation();
    const element = document.getElementById('plans');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 px-4 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E50914] blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#E50914]/20 border border-[#E50914]/40 px-5 py-2 rounded-full mb-8 backdrop-blur-md animate-pulse">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] shadow-[0_0_12px_#E50914]"></span>
          <span className="text-[#E50914] text-[11px] font-black uppercase tracking-[0.2em]">OFERTA EXCLUSIVA: ACESSO IMEDIATO</span>
        </div>
        
        <h1 className="text-4xl sm:text-7xl font-[900] mb-8 leading-[1] tracking-tighter text-white max-w-4xl mx-auto">
          🎬 ASSISTA COMO <span className="text-[#E50914] drop-shadow-[0_0_15px_rgba(229,9,20,0.5)]">NETFLIX</span>, <br className="hidden sm:block"/>
          MARATONE SEM LIMITES E PAGUE APENAS <span className="text-[#E50914]">R$ 1,90</span>
        </h1>
        
        <p className="text-gray-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-medium leading-snug">
          Esqueça as mensalidades caras. A mesma experiência Premium por um preço que você não vai acreditar.
        </p>

        <div className="max-w-[300px] sm:max-w-[340px] mx-auto mb-16 relative group">
          <div className="absolute -inset-4 bg-[#E50914]/20 blur-3xl rounded-[3rem] opacity-30 group-hover:opacity-60 transition-opacity duration-1000"></div>
          
          <div className="relative aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-[#1a1a1a] ring-1 ring-white/10">
            <video 
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              playsInline
              muted={isMuted}
              preload="auto"
              onLoadStart={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
              onClick={(e) => handleTogglePlay(e)}
              onEnded={handleVideoEnd}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>

            {isMuted && isPlaying && !isLoading && (
              <div 
                role="button"
                tabIndex={0}
                onClick={handleUnmute}
                className="absolute top-8 left-1/2 -translate-x-1/2 z-30 bg-white text-black px-5 py-2.5 rounded-full font-black uppercase text-[10px] shadow-2xl flex items-center gap-2 animate-bounce transition-all hover:scale-105 cursor-pointer"
              >
                <i className="fas fa-volume-up"></i>
                Ativar Áudio
              </div>
            )}

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
                <div className="w-12 h-12 border-4 border-[#E50914]/20 border-t-[#E50914] rounded-full animate-spin"></div>
              </div>
            )}
            
            {!isPlaying && !isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20 cursor-pointer" onClick={(e) => handleTogglePlay(e)}>
                <div className="w-20 h-20 bg-[#E50914] rounded-full flex items-center justify-center text-white text-3xl shadow-[0_0_30px_rgba(229,9,20,0.6)]">
                  <i className="fas fa-play ml-1"></i>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div 
            role="button"
            tabIndex={0}
            onClick={scrollToPlans}
            className="w-full max-w-md bg-[#E50914] text-white px-10 py-7 rounded-[2rem] text-2xl font-[900] uppercase tracking-tighter text-center shadow-[0_25px_50px_-12px_rgba(229,9,20,0.4)] animate-pulse-soft flex items-center justify-center gap-4 cursor-pointer"
          >
            🔥 QUERO MEU ACESSO AGORA
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] text-gray-500 font-black uppercase tracking-[0.25em]">
            <span className="flex items-center gap-2 text-green-500"><i className="fas fa-bolt"></i> Liberação Instantânea</span>
            <span className="w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
            <span className="flex items-center gap-2 text-green-500"><i className="fas fa-shield-check"></i> 100% Seguro</span>
            <span className="w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
            <span className="flex items-center gap-2 text-green-500"><i className="fas fa-tv"></i> Todas as Telas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
