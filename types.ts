
export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  imageUrl: string;
  size: 'large' | 'medium' | 'small';
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}
