
import React from 'react';
import { Layers, Map, Compass, PenTool, Wind, Grid } from 'lucide-react';
import { Project, Service, ProcessStep, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Monolith Residence',
    location: 'Zurich, Switzerland',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    size: 'large'
  },
  {
    id: '2',
    title: 'Atrium of Light',
    location: 'Kyoto, Japan',
    year: '2022',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    size: 'medium'
  },
  {
    id: '3',
    title: 'Oak & Concrete Pavilion',
    location: 'Oslo, Norway',
    year: '2023',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    size: 'small'
  },
  {
    id: '4',
    title: 'Minimalist Loft IX',
    location: 'Berlin, Germany',
    year: '2021',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000',
    size: 'large'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Spatial Planning',
    description: 'Mastering the flow of movement and the efficiency of volume within a structural frame.',
    icon: <Grid className="w-6 h-6 stroke-[1]" />
  },
  {
    title: 'Material Curation',
    description: 'A tactile dialogue between raw elements and refined finishes to evoke timelessness.',
    icon: <Layers className="w-6 h-6 stroke-[1]" />
  },
  {
    title: 'Structural Integrity',
    description: 'Engineering precision that allows for daring forms and enduring stability.',
    icon: <Compass className="w-6 h-6 stroke-[1]" />
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Concept',
    description: 'We begin with a dialogue, translating ethereal ideas into preliminary architectural sketches.'
  },
  {
    number: '02',
    title: 'Design Development',
    description: 'Refining the blueprint with a focus on light angles, material transitions, and site context.'
  },
  {
    number: '03',
    title: 'Project Execution',
    description: 'Overseeing the construction with an uncompromising eye for detail and structural poetry.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Aethel & Co transformed our vision of a sanctuary into a structural reality. Their understanding of light as a material is unparalleled.",
    author: "Elena Vardalos",
    role: "Private Client, Zurich"
  },
  {
    id: 't2',
    quote: "Precision meets poetry. Every corner of the Loft IX project tells a story of intentionality and refined minimalism.",
    author: "Marcus Thorne",
    role: "Art Curator, Berlin"
  }
];
