import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'portfolio', label: 'Portfólio', href: '#portfolio' },
    { id: 'sobre', label: 'Sobre', href: '#sobre' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[hsl(270,20%,7%)]/85 backdrop-blur-md hairline-bottom py-4 shadow-lg'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Monogram & Signature */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz"
            aria-label="Apex Studio - Ir para o início"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.18em] font-semibold text-foreground group-hover:text-quartz transition-colors duration-200">
              APEX
            </span>
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.24em] text-muted-foreground uppercase -mt-0.5">
              Arquitetura & Interiores
            </span>
          </a>

          {/* Desktop Navigation (Strict Order: Início, Portfólio, Sobre, Contato) */}
          <nav aria-label="Navegação Principal" className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm tracking-[0.15em] uppercase font-medium transition-all duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz ${
                    isActive
                      ? 'text-quartz-light font-semibold'
                      : 'text-foreground/75 hover:text-foreground'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-quartz" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase py-2.5 px-5 rounded-[2px] bg-surface-elevated hairline-border text-foreground hover:border-quartz hover:text-quartz transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-quartz" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-[2px] text-foreground hover:text-quartz hover:bg-surface-elevated/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-drawer"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Sheet Navigation */}
      <div
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de Navegação Mobile"
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-[hsl(270,20%,4%)]/90 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-surface hairline-border border-r-0 p-8 flex flex-col justify-between transform transition-transform duration-300 ease-out shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 hairline-bottom">
              <div>
                <span className="font-serif text-2xl font-semibold tracking-wider text-foreground">
                  APEX
                </span>
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Arquitetura & Interiores
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="mt-8 flex flex-col space-y-6">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xl font-serif tracking-wider flex items-center justify-between py-2 border-b border-border/40 min-h-[44px] ${
                      isActive ? 'text-quartz-light font-medium' : 'text-foreground/80'
                    }`}
                  >
                    <span>
                      <span className="text-xs font-sans text-muted-foreground mr-3">0{idx + 1}.</span>
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 hairline-top space-y-4">
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="w-full min-h-[48px] flex items-center justify-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase py-3 px-4 bg-primary text-primary-foreground rounded-[2px] hover:bg-primary-glow transition-colors"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground">{STUDIO_INFO.fullAddress}</p>
              <p className="text-xs text-muted-foreground mt-1">{STUDIO_INFO.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
