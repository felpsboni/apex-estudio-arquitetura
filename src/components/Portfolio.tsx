import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, Maximize2, Layers } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project, ProjectCategory } from '../types';
import { LightboxModal } from './LightboxModal';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const prefersReducedMotion = useReducedMotion();

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'todos') return true;
    return project.category === activeCategory;
  });

  const handleOpenLightbox = (project: Project, index: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleNextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const handlePrevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'todos', label: 'Todos os Projetos', count: PROJECTS.length },
    {
      id: 'residencial',
      label: 'Residencial',
      count: PROJECTS.filter((p) => p.category === 'residencial').length,
    },
    {
      id: 'comercial',
      label: 'Comercial',
      count: PROJECTS.filter((p) => p.category === 'comercial').length,
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-36 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 md:pb-16 hairline-bottom">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-sans tracking-[0.25em] text-quartz uppercase">
                Portfólio Editorial
              </span>
              <span className="h-[1px] w-8 bg-border" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground tracking-tight">
              Obras & Espaços Selecionados
            </h2>

            <p className="text-base md:text-lg text-muted-foreground font-sans font-light leading-relaxed">
              Uma compilação de intervenções arquitetônicas e de interiores onde o rigor da estrutura
              e a sensibilidade dos materiais constroem identidades espaciais singulares.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            role="tablist"
            aria-label="Filtros de categorias do portfólio"
            className="flex items-center flex-wrap gap-2 p-1.5 bg-surface hairline-border rounded-[2px] self-start lg:self-end"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs font-sans tracking-[0.15em] uppercase py-2.5 px-4 rounded-[2px] transition-all duration-200 min-h-[44px] flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz ${
                    isActive
                      ? 'bg-primary text-primary-foreground font-medium shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface-elevated'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-black/30 text-quartz-light' : 'bg-surface-elevated text-muted-foreground'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Asymmetric Projects Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout rhythm: alternating 7-col / 5-col spans
            const isWide = index % 3 === 0;
            const colSpanClass = isWide ? 'lg:col-span-8' : 'lg:col-span-4';
            const imageHeightClass = isWide
              ? 'aspect-[16/10] sm:aspect-[16/9]'
              : 'aspect-[4/3] sm:aspect-[1/1]';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : (index % 3) * 0.1 }}
                className={`group flex flex-col justify-between bg-surface hairline-border rounded-[2px] p-4 sm:p-6 hover:border-quartz/40 transition-all duration-300 shadow-md hover:shadow-xl ${colSpanClass}`}
              >
                <div>
                  {/* Top Bar: Number & Meta */}
                  <div className="flex items-center justify-between pb-4 mb-4 hairline-bottom text-xs font-sans">
                    <span className="font-serif text-lg md:text-xl font-medium text-quartz">
                      {project.number}
                    </span>
                    <div className="flex items-center space-x-3 text-muted-foreground uppercase tracking-widest text-[11px]">
                      <span className="text-foreground/90 font-medium">{project.categoryLabel}</span>
                      <span>·</span>
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-quartz" />
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Project Image Stage with Hover Zoom */}
                  <div
                    onClick={() => handleOpenLightbox(project, 0)}
                    className={`relative w-full ${imageHeightClass} overflow-hidden rounded-[2px] bg-surface-elevated cursor-pointer`}
                  >
                    <img
                      src={project.coverImage.url}
                      alt={project.coverImage.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Image Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270,25%,6%)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* View Gallery Badge */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center space-x-1.5 px-3 py-1.5 rounded-[2px] bg-surface/90 hairline-border text-foreground text-xs font-sans tracking-wider uppercase backdrop-blur-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{project.gallery.length} Fotos</span>
                    </div>
                  </div>

                  {/* Typographic Content */}
                  <div className="pt-6 space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-foreground group-hover:text-quartz-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-muted-foreground uppercase tracking-widest">
                      {project.typology} · {project.yearConcept}
                    </p>
                    <p className="text-sm font-sans text-foreground/80 leading-relaxed pt-2 font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions & Highlights */}
                <div className="pt-6 mt-6 hairline-top flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Layers className="w-3.5 h-3.5 text-quartz" />
                    <span className="truncate">{project.highlights[0]}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(project, 0)}
                    className="inline-flex items-center justify-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase py-2.5 px-4 bg-surface-elevated hover:bg-primary hover:text-primary-foreground text-foreground hairline-border rounded-[2px] transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz"
                  >
                    <span>Ver Galeria</span>
                    <Maximize2 className="w-3.5 h-3.5 text-quartz group-hover:text-primary-foreground" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        currentImageIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onSelectImage={(idx) => setCurrentImageIndex(idx)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </section>
  );
};
