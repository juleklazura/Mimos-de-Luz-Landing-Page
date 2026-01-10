import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f1e4] via-[#f8f4e8] to-[#f5f1e4]" />
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#E8B4B8]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-[#B8A165]/15 rounded-full blur-3xl" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-[#6B7B5F]/10 rounded-full blur-2xl" />
      
      {/* Folhas decorativas (SVG) */}
      <motion.div 
        className="absolute left-0 bottom-0 opacity-20"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none">
          <path d="M50 300C50 300 30 200 80 150C130 100 150 50 100 0" stroke="#6B7B5F" strokeWidth="2" fill="none"/>
          <ellipse cx="80" cy="150" rx="30" ry="15" fill="#6B7B5F" transform="rotate(-30 80 150)"/>
          <ellipse cx="60" cy="180" rx="25" ry="12" fill="#6B7B5F" transform="rotate(-45 60 180)"/>
          <ellipse cx="70" cy="120" rx="28" ry="13" fill="#6B7B5F" transform="rotate(-20 70 120)"/>
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute right-0 top-20 opacity-20"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <svg width="180" height="280" viewBox="0 0 180 280" fill="none">
          <path d="M130 280C130 280 150 180 100 130C50 80 30 30 80 0" stroke="#6B7B5F" strokeWidth="2" fill="none"/>
          <ellipse cx="100" cy="130" rx="30" ry="15" fill="#6B7B5F" transform="rotate(30 100 130)"/>
          <ellipse cx="120" cy="160" rx="25" ry="12" fill="#6B7B5F" transform="rotate(45 120 160)"/>
        </svg>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Círculo decorativo com estrela */}
            <div className="w-40 h-40 md:w-52 md:h-52 mx-auto relative">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="85" fill="none" stroke="#B8A165" strokeWidth="1.5"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#B8A165" strokeWidth="0.5"/>
                {/* Estrela no topo */}
                <path d="M100 12 L102 18 L108 18 L103 22 L105 28 L100 24 L95 28 L97 22 L92 18 L98 18 Z" fill="#B8A165"/>
              </svg>
              {/* Texto do logo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-serif text-3xl md:text-4xl text-[#6B7B5F] italic" style={{ fontFamily: 'Georgia, serif' }}>
                  Mimos de Luz
                </span>
                {/* Raminho embaixo */}
                <svg width="60" height="20" viewBox="0 0 60 20" className="mt-1">
                  <path d="M30 15 Q20 10 10 15 Q5 12 2 15" stroke="#6B7B5F" strokeWidth="1" fill="none"/>
                  <ellipse cx="15" cy="12" rx="5" ry="3" fill="#6B7B5F" transform="rotate(-20 15 12)"/>
                  <ellipse cx="10" cy="14" rx="4" ry="2.5" fill="#6B7B5F" transform="rotate(-30 10 14)"/>
                  <ellipse cx="20" cy="11" rx="4" ry="2.5" fill="#6B7B5F" transform="rotate(-10 20 11)"/>
                  <ellipse cx="25" cy="13" rx="3" ry="2" fill="#6B7B5F" transform="rotate(5 25 13)"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-[#4A4A4A] mb-6 leading-tight"
        >
          Presentes feitos com
          <span className="block font-serif italic text-[#B8A165] mt-2" style={{ fontFamily: 'Georgia, serif' }}>
            amor e carinho
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-[#6B7B5F] mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Kits exclusivos para momentos especiais. 
          Cada detalhe pensado para transmitir paz, amor e luz.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#produtos"
            className="px-8 py-4 bg-[#B8A165] text-white rounded-full font-medium hover:bg-[#9A8654] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Ver Kits Exclusivos
          </a>
          <a
            href="#contato"
            className="px-8 py-4 border-2 border-[#6B7B5F] text-[#6B7B5F] rounded-full font-medium hover:bg-[#6B7B5F] hover:text-white transition-all duration-300"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-[#B8A165]" />
      </motion.div>
    </section>
  );
}