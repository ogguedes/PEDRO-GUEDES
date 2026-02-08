
import React, { useState, useEffect } from 'react';
import { NOTIFICATION_MESSAGES } from '../constants.ts';
import { Notification } from '../types.ts';

const NotificationSystem: React.FC = () => {
  const [activeNotification, setActiveNotification] = useState<Notification | null>(null);

  useEffect(() => {
    let index = 0;
    
    const showNext = () => {
      setActiveNotification(NOTIFICATION_MESSAGES[index]);
      index = (index + 1) % NOTIFICATION_MESSAGES.length;

      setTimeout(() => {
        setActiveNotification(null);
      }, 5000);
    };

    // Initial delay
    const initialTimeout = setTimeout(showNext, 3000);

    const interval = setInterval(() => {
      showNext();
    }, 12000); // Show every 12 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!activeNotification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[101] w-72 sm:w-80 transition-all transform animate-slide-in-right">
      <div className="bg-[#111111] rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-start gap-4 border-l-4 border-[#E50914] border-t border-r border-b border-white/5 ring-1 ring-white/5">
        <div className="w-12 h-12 bg-[#E50914]/15 rounded-full flex items-center justify-center text-[#E50914] flex-shrink-0 shadow-inner">
          <i className="fas fa-check"></i>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-black text-white truncate uppercase tracking-tight">
            {activeNotification.name}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Comprou: <span className="font-bold text-[#E50914]">{activeNotification.product}</span>
          </div>
          <div className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-wider">
            {activeNotification.location} <span className="mx-1 text-gray-700">•</span> {activeNotification.time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSystem;
