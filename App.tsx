
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';
import { ChevronRight, ArrowUpRight, Quote } from 'lucide-react';
import Navbar from './components/Navbar';
import BlueprintSVG from './components/BlueprintSVG';
import CustomCursor from './components/CustomCursor';
import { PROJECTS, SERVICES, PROCESS_STEPS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen grid-overlay selection:bg-slate-200">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Philosophy />
      <SelectedWorks />
      <Testimonials />
      <Services />
      <Process />
      <Footer />
    </div>
  );
};

const AnimatedText: React.FC<{ text: string; className?: string; italicWords?: string[] }> = ({ text, className, italicWords = [] }) => {
  const words = text.split(" ");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => {
        const isItalic = italicWords.includes(word.replace(/[.,]/g, ""));
        return (
          <span key={index} className="text-reveal-mask">
            <motion.span 
              variants={child} 
              className={`inline-block mr-[0.25em] ${isItalic ? 'italic' : ''}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};

const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -250]);

  return (
    <section className="relative h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden">
      <BlueprintSVG />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        <motion.p variants={item} className="text-[10px] uppercase tracking-[0.6em] text-slate-400 mb-8 flex items-center">
          <span className="w-8 h-px bg-slate-300 mr-4" />
          Elite Architectural Atelier — Est. MMXX
        </motion.p>
        
        <h1 className="text-6xl md:text-[8rem] font-light leading-[0.9] serif text-slate-800 tracking-tight">
          <AnimatedText text="Architecting" /> <br />
          <AnimatedText text="Pure Presence." italicWords={["Presence"]} />
        </h1>
        
        <motion.div variants={item} className="mt-16 max-w-lg">
          <p className="text-slate-500 leading-relaxed font-light text-lg">
            Dedicated to the silent dialogue between raw form and ethereal light. We don't just build structures; we curate sensory experiences that stand the test of time.
          </p>
          <div className="mt-12 flex items-center gap-12">
            <button className="flex items-center text-xs uppercase tracking-[0.3em] text-slate-800 group font-medium">
              Exploration 
              <ChevronRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1.5 h-1.5 border border-slate-300 rounded-full" />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y: parallaxY }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ delay: 1.5, duration: 2.5, ease: "easeOut" }}
        className="absolute bottom-12 right-12 hidden md:block"
      >
        <span className="text-[16rem] font-light leading-none text-slate-900 select-none tracking-tighter serif italic">Aethel</span>
      </motion.div>
    </section>
  );
};

const Philosophy: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="philosophy" className="py-48 px-8 md:px-24 bg-white relative z-10" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
        <motion.div 
          style={{ y }}
          className="relative aspect-[4/5] bg-slate-50 overflow-hidden group shadow-2xl"
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
            alt="Minimalist Architecture" 
            className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-[4s]"
          />
          <div className="absolute inset-0 border-[0.5px] border-white/20 m-12"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-slate-400 mb-8">Concept — Philosophy</p>
          <h2 className="text-5xl md:text-7xl serif mb-12 text-slate-800 leading-tight">
            A Statement <br />
            <span className="italic font-light">of Intent</span>
          </h2>
          <div className="space-y-8 text-slate-500 font-light leading-relaxed text-xl">
            <p>
              We believe that space is not a void to be filled, but a canvas where light and shadow perform a perpetual, silent dance. 
              Our work is rooted in "Essentialism"—the stripping away of the superfluous until only the structural soul remains.
            </p>
            <p className="border-l border-slate-200 pl-8 italic">
              "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
            </p>
            <p>
              Every tactile detail, from hand-finished concrete to reclaimed stone, is chosen to evoke a sense of permanence in an ever-shifting world.
            </p>
          </div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-16 h-[0.5px] bg-slate-800" 
          />
        </motion.div>
      </div>
    </section>
  );
};

const SelectedWorks: React.FC = () => {
  return (
    <section id="selected-works" className="py-48 px-8 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.6em] text-slate-400 mb-4">Portfolio</p>
          <h2 className="text-5xl md:text-8xl serif text-slate-800 leading-none">Selected <span className="italic font-light">Works</span></h2>
        </div>
        <div className="text-slate-400 text-xs tracking-[0.4em] uppercase font-light">
          Global Projects 2018 — Present
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
        {PROJECTS.map((project, idx) => {
          const isOdd = idx % 2 !== 0;
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`relative group cursor-none flex flex-col ${
                project.size === 'large' ? 'md:col-span-12' : 
                project.size === 'medium' ? 'md:col-span-7' : 'md:col-span-5'
              } ${isOdd && project.size !== 'large' ? 'md:mt-32' : ''}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-[2.5s] group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-700" />
                
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none z-10"
                >
                  <div className="flex justify-between items-end border-b border-white/30 pb-6 text-white">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.4em] mb-2 opacity-80">{project.location}</p>
                      <h3 className="text-4xl serif italic leading-none">{project.title}</h3>
                    </div>
                    <ArrowUpRight className="w-8 h-8 font-light" />
                  </div>
                </motion.div>
                
                <div className="absolute top-8 right-8 text-white/50 text-xs tracking-widest pointer-events-none">
                  {project.year}
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-center text-slate-800 md:hidden">
                <h3 className="text-xl serif italic">{project.title}</h3>
                <span className="text-[10px] tracking-widest">{project.location}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-48 px-8 md:px-24 bg-white border-y border-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-24">
        <div className="w-full md:w-1/3">
           <Quote className="w-16 h-16 text-slate-100 mb-8 stroke-[1]" />
           <p className="text-[10px] uppercase tracking-[0.5em] text-slate-400 mb-4">Testimonials</p>
           <h2 className="text-4xl serif text-slate-800 italic">Echoes of <br /> Excellence</h2>
        </div>
        <div className="w-full md:w-2/3 space-y-24">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-slate-100"
            >
              <p className="text-2xl md:text-3xl serif italic text-slate-700 leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="flex flex-col">
                <span className="text-slate-900 font-medium tracking-widest uppercase text-[10px]">{t.author}</span>
                <span className="text-slate-400 font-light text-[10px] uppercase tracking-[0.2em]">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-48 px-8 md:px-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] rotate-12 pointer-events-none">
         <div className="text-[20rem] font-bold serif">SERVICES</div>
      </div>

      <div className="max-w-4xl mb-32 relative z-10">
        <p className="text-[10px] uppercase tracking-[0.6em] text-slate-400 mb-6">Expertise</p>
        <h2 className="text-5xl md:text-7xl serif text-slate-800 leading-tight">Crafting the <span className="italic font-light">Unseen Layers</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 relative z-10">
        {SERVICES.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col group"
          >
            <div className="mb-10 p-6 bg-white w-fit shadow-sm border-[0.5px] border-slate-100 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="text-slate-800">
                {service.icon}
              </div>
            </div>
            <h3 className="text-3xl serif mb-6 text-slate-800">{service.title}</h3>
            <p className="text-slate-500 font-light leading-relaxed text-lg mb-8">
              {service.description}
            </p>
            <div className="mt-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-800 transition-colors cursor-pointer">
              Discovery <ChevronRight className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Process: React.FC = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-48 px-8 md:px-24 bg-white" ref={scrollRef}>
      <div className="text-center mb-40">
        <p className="text-[10px] uppercase tracking-[0.6em] text-slate-400 mb-6">Chronology</p>
        <h2 className="text-5xl md:text-7xl serif text-slate-800">How We <span className="italic font-light">Translate</span></h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block" />
        <motion.div 
          style={{ scaleY: pathLength }}
          className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-900 -translate-x-1/2 origin-top hidden md:block" 
        />

        <div className="space-y-48">
          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col md:flex-row items-center justify-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-[45%] flex justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="w-full aspect-square max-w-sm bg-slate-50 relative group overflow-hidden shadow-sm"
                  >
                    {/* Fixed the template literal interpolation for the Unsplash image URL */}
                    <img 
                      src={`https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=600`} 
                      alt={step.title} 
                      className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 transition-transform duration-[3s]" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-9xl serif italic text-slate-100 font-light select-none">{step.number}</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="hidden md:flex w-[10%] justify-center z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-3 h-3 rounded-full bg-slate-900 border-4 border-white shadow-sm" 
                  />
                </div>

                <div className={`w-full md:w-[45%] mt-12 md:mt-0 md:px-12 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <p className="text-[10px] tracking-[0.4em] text-slate-300 uppercase mb-4">Phase {step.number}</p>
                    <h3 className="text-4xl serif mb-6 text-slate-800">{step.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed text-lg max-w-sm mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-8 md:px-24 bg-white border-t border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
        <div className="md:col-span-2">
          <div className="text-3xl font-medium tracking-widest uppercase text-slate-800 mb-10">
            Aethel <span className="font-light opacity-60 italic">& Co</span>
          </div>
          <p className="text-slate-400 font-light max-w-md leading-relaxed text-lg">
            A bespoke architectural studio specializing in minimalist residences and commercial sanctuaries. Shaping light and space since MMXX.
          </p>
          <div className="mt-12 flex gap-12 text-[10px] uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-slate-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Behance</a>
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.5em] text-slate-900 font-medium mb-10">Ateliers</h4>
          <ul className="space-y-6 text-sm text-slate-500 font-light">
            <li className="flex flex-col gap-1">
              <span className="text-slate-900 font-medium">Zurich</span>
              <span>Bahnhofstrasse 45, 8001</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-slate-900 font-medium">London</span>
              <span>Mayfair, W1K 7HL</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-slate-900 font-medium">Oslo</span>
              <span>Aker Brygge, 0250</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.5em] text-slate-900 font-medium mb-10">Say Hello</h4>
          <p className="text-lg serif italic text-slate-800 mb-8 underline underline-offset-8">inquiry@aethel.co</p>
          <p className="text-slate-400 font-light text-sm">+41 44 211 40 00</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="mt-12 px-8 py-4 bg-slate-900 text-white text-[10px] uppercase tracking-[0.5em] font-light"
          >
            Start Project
          </motion.button>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.5em] text-slate-400 font-light">
        <div>© MMXXIV Aethel & Co Studio — All Rights Reserved</div>
        <div className="mt-6 md:mt-0 flex gap-8">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default App;
