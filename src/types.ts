export type ProjectCategory = 'todos' | 'residencial' | 'comercial';

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'residencial' | 'comercial';
  categoryLabel: string;
  location: string;
  typology: string;
  yearConcept: string;
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  description: string;
  highlights: string[];
}

export interface ProcessStage {
  number: string;
  title: string;
  lead: string;
  description: string;
  deliverables: string[];
}

export interface Principle {
  number: string;
  title: string;
  description: string;
}

export interface StudioMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  projectType: string;
  message: string;
}
