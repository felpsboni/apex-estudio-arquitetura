import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, MapPin, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    projectType: 'Residencial',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const prefersReducedMotion = useReducedMotion();

  const projectTypes = [
    'Residencial',
    'Comercial',
    'Interiores & Reforma',
    'Consultoria de Projeto',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'O nome deve conter pelo menos 3 caracteres.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, informe um telefone de contato.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Por favor, informe um número de telefone válido com DDD.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, compartilhe uma breve mensagem sobre o projeto.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build encoded WhatsApp message
    const textMessage = `Olá, Apex Studio!\n\nMeu nome é ${formData.name.trim()}.\nTenho interesse em um projeto do tipo: ${formData.projectType}.\nTelefone para contato: ${formData.phone.trim()}.\n\nMensagem:\n${formData.message.trim()}`;

    const encodedUrl = `https://wa.me/${STUDIO_INFO.whatsAppNumber}?text=${encodeURIComponent(textMessage)}`;

    // Open WhatsApp in new tab securely
    window.open(encodedUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contato" className="py-24 md:py-36 relative bg-[hsl(270,24%,4%)] overflow-hidden">
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-quartz/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center space-x-3 pb-6">
          <span className="text-xs font-sans tracking-[0.25em] text-quartz uppercase">
            Inicie um Diálogo
          </span>
          <span className="h-[1px] w-8 bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Channels & Context (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-foreground leading-[1.1] tracking-tight">
                Vamos conversar sobre o seu próximo espaço.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-sans font-light leading-relaxed">
                Apresente seu terreno, imóvel ou necessidade de intervenção. Avaliamos cada solicitação
                com rigor estético e atenção aos objetivos do cliente.
              </p>
            </div>

            {/* Direct Contact Blocks */}
            <div className="space-y-4 pt-4">
              {/* Phone / WhatsApp */}
              <a
                href={STUDIO_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-5 bg-surface hairline-border rounded-[2px] hover:border-quartz/50 transition-all group"
                aria-label={`Enviar mensagem no WhatsApp para ${STUDIO_INFO.phoneDisplay}`}
              >
                <div className="p-3 bg-surface-elevated text-quartz group-hover:bg-primary group-hover:text-primary-foreground rounded-[2px] transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-sans tracking-widest text-muted-foreground uppercase block">
                    Telefone & WhatsApp
                  </span>
                  <span className="font-serif text-xl text-foreground font-medium group-hover:text-quartz-light transition-colors">
                    {STUDIO_INFO.phoneDisplay}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Canal direto para início de projetos e dúvidas técnicas
                  </p>
                </div>
              </a>

              {/* Studio Location */}
              <div className="flex items-start space-x-4 p-5 bg-surface hairline-border rounded-[2px]">
                <div className="p-3 bg-surface-elevated text-quartz rounded-[2px] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-sans tracking-widest text-muted-foreground uppercase block">
                    Localização do Estúdio
                  </span>
                  <span className="text-sm font-sans text-foreground font-medium">
                    {STUDIO_INFO.fullAddress}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Atuação em São Paulo capital, interior e litoral
                  </p>
                </div>
              </div>

              {/* Schedule Info */}
              <div className="flex items-start space-x-4 p-5 bg-surface hairline-border rounded-[2px]">
                <div className="p-3 bg-surface-elevated text-quartz rounded-[2px] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-sans tracking-widest text-muted-foreground uppercase block">
                    Disponibilidade
                  </span>
                  <span className="text-sm font-sans text-foreground font-medium">
                    {STUDIO_INFO.schedule}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Reuniões presenciais ou videoconferências agendadas previamente
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-surface hairline-border p-6 sm:p-8 md:p-10 rounded-[2px] shadow-2xl"
          >
            <div className="pb-6 mb-6 hairline-bottom">
              <h3 className="font-serif text-2xl font-medium text-foreground">
                Envie os detalhes do seu projeto
              </h3>
              <p className="text-xs sm:text-sm font-sans text-muted-foreground mt-1">
                Ao clicar em enviar, sua mensagem será formatada e encaminhada diretamente ao nosso WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-surface-elevated hairline-border rounded-[2px]">
                <div className="w-12 h-12 bg-primary/20 text-quartz rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-medium text-foreground">
                  Mensagem Encaminhada!
                </h4>
                <p className="text-sm font-sans text-muted-foreground max-w-md mx-auto">
                  Seu aplicativo de WhatsApp foi acionado com os dados do projeto. Caso a conversa não tenha sido iniciada automaticamente, clique no botão abaixo:
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsAppNumber}?text=${encodeURIComponent(
                      `Olá, Apex Studio! Gostaria de falar sobre meu projeto ${formData.projectType}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] uppercase py-3.5 px-6 bg-primary text-primary-foreground rounded-[2px] hover:bg-primary-glow transition-all"
                  >
                    <span>Abrir WhatsApp Novamente</span>
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-sans tracking-wider uppercase text-foreground/90 font-medium block"
                  >
                    Nome Completo <span className="text-quartz">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    placeholder="Ex.: Carolina Mendonça"
                    className={`w-full px-4 py-3.5 bg-surface-elevated/70 hairline-border rounded-[2px] text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:bg-surface-elevated transition-colors ${
                      errors.name ? 'border-red-400/80 focus:ring-red-400' : 'focus:border-quartz'
                    }`}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="text-xs font-sans text-red-300">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Telefone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-phone"
                      className="text-xs font-sans tracking-wider uppercase text-foreground/90 font-medium block"
                    >
                      Telefone com DDD <span className="text-quartz">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                      placeholder="(11) 98765-4321"
                      className={`w-full px-4 py-3.5 bg-surface-elevated/70 hairline-border rounded-[2px] text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:bg-surface-elevated transition-colors ${
                        errors.phone ? 'border-red-400/80 focus:ring-red-400' : 'focus:border-quartz'
                      }`}
                    />
                    {errors.phone && (
                      <p id="contact-phone-error" className="text-xs font-sans text-red-300">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Tipo de Projeto */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-project-type"
                      className="text-xs font-sans tracking-wider uppercase text-foreground/90 font-medium block"
                    >
                      Tipo de Projeto
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-surface-elevated hairline-border rounded-[2px] text-foreground text-sm font-sans focus:border-quartz transition-colors cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-surface text-foreground">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-sans tracking-wider uppercase text-foreground/90 font-medium block"
                  >
                    Sobre o Projeto ou Imóvel <span className="text-quartz">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    placeholder="Conte-nos brevemente sobre a localização, fase atual do imóvel e suas expectativas..."
                    className={`w-full px-4 py-3.5 bg-surface-elevated/70 hairline-border rounded-[2px] text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:bg-surface-elevated transition-colors resize-none ${
                      errors.message ? 'border-red-400/80 focus:ring-red-400' : 'focus:border-quartz'
                    }`}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-xs font-sans text-red-300">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full min-h-[52px] flex items-center justify-center space-x-3 text-xs font-sans font-medium tracking-[0.2em] uppercase py-4 px-8 bg-primary text-primary-foreground rounded-[2px] hover:bg-primary-glow transition-all duration-200 shadow-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz cursor-pointer"
                >
                  <span>Entrar em contato via WhatsApp</span>
                  <Send className="w-4 h-4 text-quartz-light" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
