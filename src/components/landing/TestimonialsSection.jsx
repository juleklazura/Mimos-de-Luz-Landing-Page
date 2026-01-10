import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Clara',
    location: 'São Paulo, SP',
    text: 'Comprei para dar de presente para minha mãe e ela amou! A embalagem é lindíssima e os cristais são encantadores. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Juliana Santos',
    location: 'Rio de Janeiro, RJ',
    text: 'Qualidade impecável e atendimento maravilhoso. Cada detalhe é pensado com muito carinho. Virei cliente fiel!',
    rating: 5,
  },
  {
    name: 'Ana Beatriz',
    location: 'Belo Horizonte, MG',
    text: 'Me presenteei com o Kit Serenidade e foi a melhor decisão. Os produtos são de altíssima qualidade. Amo a Mimos de Luz!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-[#6B7B5F] relative overflow-hidden">
      {/* Padrão decorativo */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <pattern id="leaves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <ellipse cx="25" cy="50" rx="12" ry="6" fill="white" transform="rotate(-30 25 50)"/>
            <ellipse cx="75" cy="30" rx="10" ry="5" fill="white" transform="rotate(20 75 30)"/>
            <ellipse cx="60" cy="80" rx="8" ry="4" fill="white" transform="rotate(-10 60 80)"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#leaves)"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8A165] uppercase tracking-[0.3em] text-sm font-medium">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4 mb-6">
            O que dizem <span className="font-serif italic text-[#F5E6A3]" style={{ fontFamily: 'Georgia, serif' }}>nossos clientes</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#B8A165] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-[#B8A165] mb-4 opacity-50" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F5E6A3] text-[#F5E6A3]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/90 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#B8A165]/30 flex items-center justify-center">
                    <span className="text-white font-medium text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
