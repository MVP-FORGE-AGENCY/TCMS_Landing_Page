'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImagePlaceholderProps {
  className?: string;
  gradient?: string;
  icon?: React.ReactNode;
  animate?: boolean;
}

export default function ImagePlaceholder({
  className = '',
  gradient = 'from-blue-400 via-purple-500 to-pink-500',
  icon,
  animate = true,
}: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Animated Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
        animate={animate ? {
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content/Icon */}
      {icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {icon}
          </motion.div>
        </div>
      )}

      {/* Glass effect border */}
      <div className="absolute inset-0 border border-white/20" />
    </div>
  );
}
