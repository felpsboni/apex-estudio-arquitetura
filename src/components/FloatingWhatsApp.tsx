import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsAppNumber}?text=${encodeURIComponent(
    STUDIO_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Desktop Tooltip */}
      <div
        role="tooltip"
        id="whatsapp-tooltip"
        className={`hidden md:block mr-3 px-3 py-1.5 bg-surface text-foreground hairline-border rounded-[2px] text-xs font-sans tracking-wide shadow-xl transition-all duration-200 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="text-quartz mr-1.5">●</span>
        Falar com o estúdio no WhatsApp
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="relative group p-3.5 sm:p-4 bg-primary text-primary-foreground rounded-full shadow-2xl hover:bg-primary-glow transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quartz min-h-[48px] min-w-[48px] flex items-center justify-center"
        aria-label="Conversar pelo WhatsApp com o Apex Studio de Arquitetura"
        aria-describedby="whatsapp-tooltip"
      >
        {/* Discrete Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-quartz/30 animate-ping pointer-events-none opacity-60 motion-reduce:hidden" />

        <MessageCircle className="w-6 h-6 text-quartz-light relative z-10" />
      </a>
    </div>
  );
};
