
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-xl font-medium tracking-widest uppercase text-slate-800">
        Aethel <span className="font-light opacity-60">& Co</span>
      </div>
      <div className="hidden md:flex space-x-12">
        {['Selected Works', 'Philosophy', 'Services', 'Process'].map((item, idx) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            whileHover={{ y: -2 }}
            className="text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-xs uppercase tracking-[0.2em] border-b border-slate-300 pb-1 text-slate-700"
      >
        Inquiry
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
