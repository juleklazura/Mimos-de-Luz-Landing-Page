import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Kit Serenidade',
    description: 'Um kit perfeito para momentos de paz e tranquilidade, com cristais de quartzo e lavanda.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693483ff1ed338ad85888c90/2b0aeff26_Capturadetelade2025-12-0616-31-38.png',
    color: 'bg-[#E8B4B8]',
    tag: 'Mais Vendido',
  },
  {
    id: 2,
    name: 'Kit Paz Interior',
    description: 'Harmonize corpo e mente com este kit especial de bem-estar e relaxamento.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693483ff1ed338ad85888c90/6d7a06a05_Capturadetelade2025-12-0616-31-27.png',
    color: 'bg-[#A8C5A8]',
    tag: 'Novo',
  },
  {
    id: 3,
    name: 'Kit Energia Dourada',
    description: 'Traga prosperidade e luz com cristais energizados e aromas revigorantes.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693483ff1ed338ad85888c90/f903c6aec_Capturadetelade2025-12-0616-32-01.png',
    color: 'bg-[#F5E6A3]',
    tag: 'Especial',
  },
];

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-24 px-4 bg-[#f5f1e4] relative">
      {/* Decoração */}
      <div className="absolute top-12 right-12 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="55" stroke="#B8A165" strokeWidth="1" fill="none" strokeDasharray="4 4"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8A165] uppercase tracking-[0.3em] text-sm font-medium">
            Coleção Exclusiva
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#4A4A4A] mt-4 mb-6">
            Nossos <span className="font-serif italic text-[#6B7B5F]" style={{ fontFamily: 'Georgia, serif' }}>Kits Especiais</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#B8A165] mx-auto mb-6" />
          <p className="text-[#6B7B5F] max-w-2xl mx-auto text-lg">
            Cada kit é único, montado com amor e intenção para transmitir energias positivas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Imagem */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 bg-[#B8A165] text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5" />
                    {product.tag}
                  </div>
                  {/* Overlay com botão */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#4A4A4A] px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#B8A165] hover:text-white">
                      Ver Detalhes
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-medium text-[#4A4A4A]">{product.name}</h3>
                    <button className="p-2 rounded-full hover:bg-[#f5f1e4] transition-colors">
                      <Heart className="w-5 h-5 text-[#E8B4B8]" />
                    </button>
                  </div>
                  <p className="text-[#6B7B5F] text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${product.color}`} />
                    <span className="text-xs text-[#999] uppercase tracking-wider">Pronta Entrega</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B7B5F] text-white rounded-full font-medium hover:bg-[#5A6A4E] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Heart className="w-5 h-5" />
            Encomendar Meu Kit
          </a>
        </motion.div>
      </div>
    </section>
  );
}