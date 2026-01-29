
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BlueprintSVG: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotation = useTransform(scrollY, [0, 1000], [0, 5]);

  return (
    <motion.div 
      style={{ y: yParallax, rotate: rotation }}
      className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] overflow-hidden"
    >
      <motion.svg
        viewBox="0 0 1000 800"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        {/* Frame Structure */}
        <motion.path
          d="M 50,50 L 950,50 L 950,750 L 50,750 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 4, ease: "easeInOut" } }
          }}
        />
        
        {/* Horizontal Technical Lines */}
        {[150, 250, 400, 550, 650].map((y, i) => (
          <motion.path
            key={`h-${i}`}
            d={`M 50,${y} L 950,${y}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            strokeDasharray="2 4"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 0.5, transition: { duration: 3, delay: i * 0.2 } }
            }}
          />
        ))}

        {/* Vertical Structural Lines */}
        {[200, 400, 500, 600, 800].map((x, i) => (
          <motion.path
            key={`v-${i}`}
            d={`M ${x},50 L ${x},750`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            strokeDasharray="2 4"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 0.5, transition: { duration: 3, delay: i * 0.2 } }
            }}
          />
        ))}

        {/* Abstract Geometry */}
        <motion.circle
          cx="500"
          cy="400"
          r="250"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 0.3, transition: { duration: 5, delay: 1 } }
          }}
        />
        
        {/* Measurement Markings */}
        <motion.text
          x="60"
          y="45"
          className="text-[10px] uppercase tracking-widest font-light"
          fill="currentColor"
          variants={{ visible: { opacity: 0.8 } }}
        >
          Sec. 45 - Elev. A
        </motion.text>
      </motion.svg>
    </motion.div>
  );
};

export default BlueprintSVG;
