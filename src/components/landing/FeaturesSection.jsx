import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Leaf, Package, Sparkles, Heart, Sun } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Cristais Energizados',
    description: 'Cada cristal é selecionado e energizado com intenções positivas para você.',
  },
  {
    icon: Leaf,
    title: 'Produtos Naturais',
    description: 'Sais, ervas e aromas 100% naturais para seu bem-estar e relaxamento.',
  },
  {
    icon: Package,
    title: 'Embalagem Especial',
    description: 'Caixas artesanais decoradas com amor e prontas para presentear.',
  },
  {
    icon: Sparkles,
    title: 'Itens Exclusivos',
    description: 'Cada kit contém peças únicas e artesanais feitas especialmente para você.',
  },
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Montamos cada kit à mão, com carinho e dedicação em cada detalhe.',
  },
  {
    icon: Sun,
    title: 'Energia Positiva',
    description: 'Transmita luz, paz e boas energias através dos nossos presentes.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-[#f5f1e4] relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#B8A165] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#6B7B5F] rounded-full blur-3xl" />
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
            Por que escolher
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#4A4A4A] mt-4 mb-6">
            Nossos <span className="font-serif italic text-[#6B7B5F]" style={{ fontFamily: 'Georgia, serif' }}>Diferenciais</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#B8A165] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F0EDE8] hover:border-[#B8A165]/30">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B8A165]/20 to-[#6B7B5F]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-[#B8A165]" />
                </div>
                <h3 className="text-xl font-medium text-[#4A4A4A] mb-3">{feature.title}</h3>
                <p className="text-[#6B7B5F] leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citação decorativa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block max-w-2xl">
            <span className="absolute -top-6 -left-4 text-6xl text-[#B8A165]/30 font-serif">"</span>
            <p className="text-2xl md:text-3xl font-light text-[#4A4A4A] italic leading-relaxed px-8" style={{ fontFamily: 'Georgia, serif' }}>
              Cada presente carrega uma intenção, cada detalhe transmite amor.
            </p>
            <span className="absolute -bottom-6 -right-4 text-6xl text-[#B8A165]/30 font-serif">"</span>
          </div>
          <p className="mt-8 text-[#6B7B5F] font-medium">— Mimos de Luz</p>
        </motion.div>
      </div>
    </section>
  );
}