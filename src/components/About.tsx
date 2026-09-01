import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PRINCIPLES, STUDIO_METRICS } from '../data/content';
import { Process } from './Process';

export const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="sobre" className="py-24 md:py-36 relative bg-[hsl(270,20%,5%)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Section Header */}
        <div className="flex items-center space-x-3 pb-6">
          <span className="text-xs font-sans tracking-[0.25em] text-quartz uppercase">
            Sobre o Estúdio
          </span>
          <span className="h-[1px] w-8 bg-border" />
        </div>

        {/* Divided Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Manifesto & Aesthetic Vision (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.1] tracking-tight">
              A arquitetura como arte da permanência e equilíbrio sensorial.
            </h2>

            {/* Manifesto Statement */}
            <div className="p-6 bg-surface/90 hairline-border border-l-2 border-l-quartz rounded-[2px]">
              <p className="font-serif text-xl sm:text-2xl text-foreground font-light italic leading-snug">
                “Não buscamos o ruído das tendências passageiras. Desenhamos espaços para envelhecer com
                nobreza, onde cada raio de sol e cada textura mineral convidam à pausa e à contemplação.”
              </p>
            </div>

            {/* Concise Vision Paragraphs */}
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-sans font-light leading-relaxed">
              <p>
                Fundado em São Paulo, o <strong>Apex Studio de Arquitetura & Interiores</strong> dedica-se
                à concepção de projetos autorais residenciais e comerciais. Nossa prática une o rigor
                do cálculo e das normas técnicas à delicadeza do desenho sob medida.
              </p>
              <p>
                Tratamos a escala do edifício e a escala do objeto com a mesma intensidade. Do encaixe
                estrutural de um pilar de concreto ao puxador usinado em latão escovado, cada detalhe é
                desenhado para dialogar harmoniosamente com a totalidade do ambiente.
              </p>
            </div>

            {/* Principles of the Studio */}
            <div className="pt-8 space-y-6">
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-foreground/80 block">
                Princípios Norteadores
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PRINCIPLES.map((principle) => (
                  <div
                    key={principle.number}
                    className="p-5 bg-surface/70 hairline-border rounded-[2px] space-y-2 hover:border-quartz/30 transition-colors"
                  >
                    <span className="font-serif text-xl text-quartz font-medium">
                      {principle.number}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-muted-foreground font-light leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Legitimate Metrics (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Process / Materials Detail Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-surface-elevated hairline-border shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Composição de materiais arquitetônicos nobres: pedra natural, madeira e luz rasante"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270,25%,4%)] via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-quartz block">
                  Materialidade & Textura
                </span>
                <p className="font-serif text-lg text-foreground font-medium mt-1">
                  Encontros precisos entre pedra, madeira e luz
                </p>
              </div>
            </div>

            {/* Legitimate Studio Metrics */}
            <div className="space-y-4">
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-muted-foreground block">
                Estrutura de Atuação
              </span>

              <div className="grid grid-cols-1 gap-4">
                {STUDIO_METRICS.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : idx * 0.1 }}
                    className="p-4 sm:p-5 bg-surface hairline-border rounded-[2px] flex items-center space-x-5"
                  >
                    <span className="font-serif text-3xl sm:text-4xl text-quartz font-medium flex-shrink-0">
                      {metric.value}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-sans font-medium text-foreground">
                        {metric.label}
                      </h4>
                      <p className="text-xs font-sans text-muted-foreground font-light leading-relaxed">
                        {metric.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Processo Criativo - Rich Sub-section inside Sobre */}
        <Process />
      </div>
    </section>
  );
};
