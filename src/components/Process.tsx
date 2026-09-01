import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { PROCESS_STAGES } from '../data/content';

export const Process: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div id="processo" className="pt-24 md:pt-32 hairline-top">
      {/* Sub-section Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-sans tracking-[0.25em] text-quartz uppercase">
            Metodologia & Etapas
          </span>
          <span className="h-[1px] w-8 bg-border" />
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-foreground tracking-tight">
          O Processo Criativo
        </h3>

        <p className="text-base sm:text-lg text-muted-foreground font-sans font-light leading-relaxed">
          Uma condução projetual consultiva, rigorosa e transparente, desenhada para garantir fidelidade
          estética, segurança técnica e previsibilidade orçamentária do conceito à entrega.
        </p>
      </div>

      {/* 4 Process Stages Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STAGES.map((stage, idx) => (
          <motion.div
            key={stage.number}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : idx * 0.1 }}
            className="flex flex-col justify-between p-6 sm:p-7 bg-surface hairline-border rounded-[2px] hover:border-quartz/40 transition-all duration-300 relative group"
          >
            <div>
              {/* Stage Number & Indicator */}
              <div className="flex items-center justify-between pb-4 hairline-bottom">
                <span className="font-serif text-3xl sm:text-4xl font-medium text-quartz">
                  {stage.number}
                </span>
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase px-2.5 py-1 bg-surface-elevated text-muted-foreground rounded-[2px]">
                  Fase 0{idx + 1}
                </span>
              </div>

              {/* Title & Lead */}
              <div className="pt-6 space-y-3">
                <h4 className="font-serif text-2xl font-medium text-foreground group-hover:text-quartz-light transition-colors">
                  {stage.title}
                </h4>
                <p className="text-xs font-sans text-quartz tracking-wide font-medium">
                  {stage.lead}
                </p>
                <p className="text-sm font-sans text-muted-foreground font-light leading-relaxed pt-2">
                  {stage.description}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="pt-6 mt-6 hairline-top space-y-2">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-foreground/70 block">
                Entregáveis da Fase:
              </span>
              <ul className="space-y-1.5">
                {stage.deliverables.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start text-xs font-sans text-foreground/80">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-quartz flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
