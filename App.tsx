
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import UpgradePopup from './components/UpgradePopup';
import NotificationSystem from './components/NotificationSystem';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen text-white bg-[#141414] overflow-x-hidden selection:bg-[#E50914] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#E50914] py-3 text-center sticky top-0 z-50 shadow-lg">
        <h2 className="text-xs sm:text-base font-black uppercase tracking-widest animate-pulse">
          PROMOÇÃO EXCLUSIVA POR TEMPO LIMITADO
        </h2>
      </div>

      <Hero />
      <Benefits />
      <Pricing onShowPopup={handleOpenPopup} />
      <Testimonials />
      <Footer />

      {showPopup && <UpgradePopup onClose={handleClosePopup} />}
      <NotificationSystem />
    </div>
  );
};

export default App;
