import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8A165]/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8A165] uppercase tracking-[0.3em] text-sm font-medium">
            Nossa Essência
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#4A4A4A] mt-4 mb-6">
            Sobre a <span className="font-serif italic text-[#6B7B5F]" style={{ fontFamily: 'Georgia, serif' }}>Mimos de Luz</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#B8A165] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-[#f5f1e4] shadow-2xl max-w-md mx-auto">
              <img
                src="public/6d7a06a05_Capturadetelade2025-12-0616-31-27.png"
                alt="Kit Mimos de Luz"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge decorativo */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-[#B8A165] text-white px-6 py-3 rounded-full shadow-lg">
              <span className="font-serif italic" style={{ fontFamily: 'Georgia, serif' }}>Feito com amor</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#5A5A5A] leading-relaxed">
              A <strong className="text-[#6B7B5F]">Mimos de Luz</strong> nasceu do desejo de transformar momentos simples em memórias inesquecíveis. 
              Cada kit é cuidadosamente montado à mão, com itens selecionados para proporcionar 
              <span className="text-[#B8A165] font-medium"> paz, relaxamento e bem-estar</span>.
            </p>
            <p className="text-lg text-[#5A5A5A] leading-relaxed">
              Acreditamos que presentear é uma forma de demonstrar amor. Por isso, nossos kits 
              incluem cristais energizados, sais de banho aromáticos, toalhinhas macias e muito mais — 
              tudo embalado com o carinho que seu presente especial merece.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: Heart, label: 'Amor', desc: 'Em cada detalhe' },
                { icon: Sparkles, label: 'Energia', desc: 'Positiva' },
                { icon: Gift, label: 'Exclusivo', desc: 'Para você' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-[#f5f1e4]"
                >
                  <item.icon className="w-8 h-8 text-[#B8A165] mx-auto mb-2" />
                  <p className="font-medium text-[#4A4A4A]">{item.label}</p>
                  <p className="text-sm text-[#6B7B5F]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}