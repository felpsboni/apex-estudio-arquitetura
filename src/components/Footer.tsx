import React from 'react';
import { ArrowUp } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[hsl(270,25%,3%)] text-foreground hairline-top py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold tracking-[0.2em] text-foreground">
                APEX
              </span>
              <span className="text-xs font-sans tracking-[0.25em] text-muted-foreground uppercase">
                Arquitetura & Interiores
              </span>
            </div>
            <p className="text-sm font-sans text-muted-foreground font-light max-w-sm leading-relaxed">
              Prática de arquitetura autoral e design de interiores em São Paulo. Espaços atemporais
              articulados pelo rigor construtivo, pela luz e pela materialidade mineral.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-foreground/80 font-medium block">
              Navegação
            </span>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, '#inicio')}
                  className="text-muted-foreground hover:text-quartz transition-colors py-1 inline-block"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="text-muted-foreground hover:text-quartz transition-colors py-1 inline-block"
                >
                  Portfólio de Obras
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleNavClick(e, '#sobre')}
                  className="text-muted-foreground hover:text-quartz transition-colors py-1 inline-block"
                >
                  Sobre o Estúdio & Processo
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="text-muted-foreground hover:text-quartz transition-colors py-1 inline-block"
                >
                  Contato & Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-foreground/80 font-medium block">
              Atendimento & Estúdio
            </span>
            <div className="space-y-2 text-sm font-sans text-muted-foreground">
              <p className="text-foreground font-medium">{STUDIO_INFO.phoneDisplay}</p>
              <p>{STUDIO_INFO.fullAddress}</p>
              <p className="text-xs text-muted-foreground/80">{STUDIO_INFO.schedule}</p>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 hairline-top flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-muted-foreground">
          <p>
            © {currentYear} Apex Studio de Arquitetura & Interiores. Todos os direitos reservados.
          </p>

          <a
            href="#inicio"
            onClick={handleScrollToTop}
            className="inline-flex items-center space-x-2 text-foreground/80 hover:text-quartz transition-colors py-2 px-3 bg-surface hairline-border rounded-[2px]"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-quartz" />
          </a>
        </div>
      </div>
    </footer>
  );
};
