import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden"
    >
      {/* Background Architectural Canvas with Subtle Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 md:opacity-35 scale-105 transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Deep Architectural Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270,20%,6%)] via-[hsl(270,20%,6%)]/80 to-[hsl(270,20%,6%)]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(107,33,168,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,114,182,0.06),transparent_50%)]" />
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 bg-grain" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
        >
          {/* Main Headline Block (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            {/* Editorial Eyebrow Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="px-3.5 py-1 text-[11px] font-sans uppercase tracking-[0.25em] text-quartz-light bg-surface-elevated/80 hairline-border backdrop-blur-sm rounded-[2px]">
                Arquitetura autoral · São Paulo
              </span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] font-normal leading-[1.05] tracking-[-0.02em] text-foreground text-balance"
            >
              A matéria moldada pela precisão e pelo silêncio.
            </motion.h1>

            {/* Support Copy (Strictly <= 3 lines on desktop) */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed max-w-2xl text-balance"
            >
              Concebemos residências e espaços comerciais em São Paulo onde proporção espacial,
              materialidade autêntica e luz natural constroem atmosferas atemporais e funcionais.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
            >
              <a
                href="#contato"
                onClick={(e) => handleScrollTo(e, 'contato')}
                className="inline-flex items-center justify-center space-x-3 text-xs font-sans font-medium tracking-[0.2em] uppercase py-4 px-8 bg-primary text-primary-foreground rounded-[2px] hover:bg-primary-glow transition-all duration-200 shadow-md min-h-[48px] focus-visible:ring-1 focus-visible:ring-quartz"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 text-quartz-light" />
              </a>

              <a
                href="#portfolio"
                onClick={(e) => handleScrollTo(e, 'portfolio')}
                className="inline-flex items-center justify-center space-x-2 text-xs font-sans font-medium tracking-[0.2em] uppercase py-4 px-8 bg-surface-elevated/70 text-foreground hairline-border hover:border-quartz/50 hover:text-quartz transition-all duration-200 min-h-[48px] focus-visible:ring-1 focus-visible:ring-quartz"
              >
                <span>Explorar projetos</span>
              </a>
            </motion.div>
          </div>

          {/* Editorial Side Feature & Framing (Right 4 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border/40 lg:pl-8"
          >
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground block">
                Diretriz Projetual
              </span>
              <p className="text-sm font-sans text-foreground/80 leading-relaxed">
                Diálogo contínuo entre arquitetura, paisagismo e interiores. Da estrutura bruta à
                especificação de mobiliário, cada escala é rigorosamente articulada.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-surface/80 hairline-border rounded-[2px]">
                <span className="block text-2xl font-serif text-quartz-light font-medium">02</span>
                <span className="text-[11px] font-sans tracking-wider text-muted-foreground uppercase">
                  Tipologias
                </span>
                <p className="text-xs text-foreground/75 mt-0.5">Residencial & Comercial</p>
              </div>

              <div className="p-3.5 bg-surface/80 hairline-border rounded-[2px]">
                <span className="block text-2xl font-serif text-foreground font-medium">SP</span>
                <span className="text-[11px] font-sans tracking-wider text-muted-foreground uppercase">
                  Atuação
                </span>
                <p className="text-xs text-foreground/75 mt-0.5">São Paulo & Região</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Bar: Editorial Coordinates & Scroll Hint */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 hairline-top flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans tracking-widest text-muted-foreground uppercase">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2 h-2 rounded-full bg-quartz animate-pulse" />
          <span>São Paulo · {STUDIO_INFO.coordinates}</span>
        </div>

        <a
          href="#portfolio"
          onClick={(e) => handleScrollTo(e, 'portfolio')}
          className="flex items-center space-x-2 text-foreground/70 hover:text-quartz transition-colors duration-200 py-1"
          aria-label="Rolar para a seção de portfólio"
        >
          <span>Descobrir o portfólio</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-quartz" />
        </a>
      </div>
    </section>
  );
};
