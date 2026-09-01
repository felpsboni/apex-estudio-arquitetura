import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import { Project } from '../types';

interface LightboxModalProps {
  project: Project | null;
  currentImageIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  currentImageIndex,
  isOpen,
  onClose,
  onSelectImage,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    },
    [isOpen, project, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project) return null;

  const currentImage = project.gallery[currentImageIndex] || project.coverImage;
  const totalImages = project.gallery.length;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Galeria do projeto ${project.title}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[hsl(270,25%,4%)]/95 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-6xl max-h-[90vh] bg-surface hairline-border rounded-[2px] shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 hairline-bottom bg-surface-elevated/80">
            <div className="flex items-center space-x-4">
              <span className="font-serif text-lg font-medium text-foreground">
                {project.title}
              </span>
              <span className="hidden sm:inline-block text-xs font-sans text-muted-foreground">·</span>
              <span className="hidden sm:inline-flex items-center text-xs font-sans text-quartz">
                <Tag className="w-3 h-3 mr-1" />
                {project.categoryLabel}
              </span>
              <span className="hidden md:inline-flex items-center text-xs font-sans text-muted-foreground">
                <MapPin className="w-3 h-3 mr-1 text-muted-foreground" />
                {project.location}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-xs font-sans tracking-widest text-muted-foreground">
                {String(currentImageIndex + 1).padStart(2, '0')} / {String(totalImages).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-surface-elevated rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Fechar visualizador de galeria"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Image Stage */}
          <div className="relative flex-1 bg-black/40 min-h-[320px] sm:min-h-[420px] md:min-h-[500px] flex items-center justify-center overflow-hidden group">
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="max-h-[65vh] w-auto max-w-full object-contain mx-auto transition-opacity duration-300"
            />

            {/* Navigation Arrows */}
            {totalImages > 1 && (
              <>
                <button
                  type="button"
                  onClick={onPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-surface/90 text-foreground hover:text-quartz hover:bg-surface-elevated hairline-border rounded-[2px] shadow-lg transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-surface/90 text-foreground hover:text-quartz hover:bg-surface-elevated hairline-border rounded-[2px] shadow-lg transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-quartz min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Caption Overlay */}
            {currentImage.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[hsl(270,25%,4%)] to-transparent p-4 text-center">
                <p className="text-xs sm:text-sm font-sans text-foreground/90 font-light">
                  {currentImage.caption}
                </p>
              </div>
            )}
          </div>

          {/* Thumbnail Bar & Metadata Footer */}
          <div className="px-6 py-4 hairline-top bg-surface-elevated/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-sans max-w-lg truncate hidden sm:block">
              {project.description}
            </p>

            {/* Thumbnails */}
            <div className="flex items-center space-x-2 overflow-x-auto max-w-full pb-1">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelectImage(idx)}
                  className={`relative w-14 h-10 rounded-[2px] overflow-hidden hairline-border transition-all flex-shrink-0 focus-visible:ring-1 focus-visible:ring-quartz ${
                    idx === currentImageIndex
                      ? 'border-quartz ring-1 ring-quartz opacity-100'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                  aria-label={`Ver foto ${idx + 1}`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
