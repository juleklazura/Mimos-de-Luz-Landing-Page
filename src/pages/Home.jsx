import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart, Sparkles, Gift, Star, Gem, Leaf, Package, Sun, Quote, MessageCircle, Instagram, Clock, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1e4]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f1e4] via-[#f8f4e8] to-[#f5f1e4]" />
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E8B4B8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-[#B8A165]/15 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="/f84a6a1d-d09b-45c4-b82c-43b460d038a5.png"
              alt="Mimos de Luz"
              className="w-64 md:w-80 mx-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-[#4A4A4A] mb-6 leading-tight"
          >
            Presentes feitos com
            <span className="block font-serif italic text-[#B8A165] mt-2">
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
              className="px-8 py-4 bg-[#B8A165] text-white rounded-full font-medium hover:bg-[#9A8654] transition-all duration-300 shadow-lg"
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

        <motion.a
          href="#sobre"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#B8A165]" />
        </motion.a>
      </section>

      {/* About Section */}
      <section id="sobre" className="min-h-screen py-2 md:py-24 px-4 bg-white relative overflow-hidden flex items-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8A165]/30 to-transparent" />
        
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-3 md:mb-16"
          >
            <span className="text-[#B8A165] uppercase tracking-[0.3em] text-xs md:text-sm font-medium">Nossa Essência</span>
            <h2 className="text-4xl md:text-5xl font-light text-[#4A4A4A] mt-2 md:mt-4 mb-2 md:mb-6">
              Sobre a <span className="font-serif italic text-[#6B7B5F]">Mimos de Luz</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#B8A165] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-square rounded-full overflow-hidden border-4 md:border-8 border-[#f5f1e4] shadow-2xl max-w-[280px] md:max-w-md mx-auto">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693483ff1ed338ad85888c90/6d7a06a05_Capturadetelade2025-12-0616-31-27.png"
                  alt="Kit Mimos de Luz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 md:bottom-8 md:right-8 bg-[#B8A165] text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg text-sm md:text-base">
                <span className="font-serif italic">Feito com amor</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2 md:space-y-6 order-1 md:order-2"
            >
              <p className="text-lg md:text-lg text-[#5A5A5A] leading-relaxed">
                A <strong className="text-[#6B7B5F]">Mimos de Luz</strong> nasceu do desejo de transformar momentos simples em memórias inesquecíveis. 
                Cada kit é cuidadosamente montado à mão, com itens selecionados para proporcionar 
                <span className="text-[#B8A165] font-medium"> paz, relaxamento e bem-estar</span>.
              </p>
              <p className="text-lg md:text-lg text-[#5A5A5A] leading-relaxed hidden md:block">
                Acreditamos que presentear é uma forma de demonstrar amor. Por isso, nossos kits 
                incluem cristais energizados, sais de banho aromáticos, toalhinhas macias e muito mais.
              </p>

              <div className="grid grid-cols-3 gap-2 md:gap-4 pt-2 md:pt-6">
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
                    className="text-center p-2 md:p-4 rounded-2xl bg-[#f5f1e4]"
                  >
                    <item.icon className="w-8 h-8 md:w-8 md:h-8 text-[#B8A165] mx-auto mb-1 md:mb-2" />
                    <p className="font-medium text-[#4A4A4A] text-base md:text-base">{item.label}</p>
                    <p className="text-xs md:text-sm text-[#6B7B5F] hidden md:block">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.a
          href="#produtos"
          className="absolute bottom-8 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#B8A165]" />
        </motion.a>
      </section>

      {/* Products Section */}
      <section id="produtos" className="min-h-screen py-8 px-4 bg-[#f5f1e4] relative flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <span className="text-[#B8A165] uppercase tracking-[0.3em] text-sm font-medium">Coleção Exclusiva</span>
            <h2 className="text-2xl md:text-4xl font-light text-[#4A4A4A] mt-2 mb-3">
              Nossos <span className="font-serif italic text-[#6B7B5F]">Kits Especiais</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#B8A165] mx-auto mb-3" />
            <p className="text-[#6B7B5F] max-w-2xl mx-auto text-base">
              Cada kit é único, montado com amor e intenção para transmitir energias positivas
            </p>
          </motion.div>

          <div className="md:grid md:grid-cols-3 md:gap-8 flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            {[
              {
                id: 1,
                name: 'Kit da Saúde',
                description: 'Saúde também é se sentir acolhida. O Quartzo Verde traz vibração de cura física e equilíbrio emocional, aliviando o estresse. Inclui escalda pés, pingente de quartzo verde, toalhinha, vela aromática, mini pelúcia coração e sabonetes.',
                image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693483ff1ed338ad85888c90/2b0aeff26_Capturadetelade2025-12-0616-31-38.png',
              },
              {
                id: 2,
                name: 'Kit da Prosperidade',
                description: 'Prepare-se para um novo ciclo de vitórias! O Citrino atrai riqueza e o Olho de Tigre concretiza metas, envolvidos pela serenidade do Anjo. Inclui anjo decorativo, toalhinha, sabonetes, escalda pés, vela aromática e pingente.',
                image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693483ff1ed338ad85888c90/6d7a06a05_Capturadetelade2025-12-0616-31-27.png',
              },
              {
                id: 3,
                name: 'Kit do Amor',
                description: 'Um ritual de carinho com você mesma. O Quartzo Rosa acalma o coração enquanto a vela e o escalda pés relaxam seu corpo. Inclui escalda pés, pingente de quartzo rosa, toalhinha, vela aromática, mini pelúcia coração e sabonetes.',
                image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693483ff1ed338ad85888c90/f903c6aec_Capturadetelade2025-12-0616-32-01.png',
              },
            ].map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group md:h-full w-[85vw] md:w-auto flex-shrink-0 snap-center"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-medium text-[#4A4A4A]">{product.name}</h3>
                      <button className="p-2 rounded-full hover:bg-[#f5f1e4] transition-colors">
                        <Heart className="w-6 h-6 text-[#E8B4B8]" />
                      </button>
                    </div>
                    <p className="text-[#6B7B5F] text-base leading-relaxed flex-1">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-6"
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B7B5F] text-white rounded-full font-medium hover:bg-[#5A6A4E] transition-all duration-300 shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Encomendar Meu Kit
            </a>
          </motion.div>
        </div>
        
        <motion.a
          href="#diferenciais"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#B8A165]" />
        </motion.a>
      </section>

      {/* Features Section */}
      <section id="diferenciais" className="min-h-screen py-24 px-4 bg-gradient-to-b from-white to-[#f5f1e4] relative flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#B8A165] uppercase tracking-[0.3em] text-sm font-medium">Por que escolher</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#4A4A4A] mt-4 mb-6">
              Nossos <span className="font-serif italic text-[#6B7B5F]">Diferenciais</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#B8A165] mx-auto" />
          </motion.div>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            {[
              { icon: Gem, title: 'Cristais Energizados', description: 'Cada cristal é selecionado e energizado com intenções positivas para você.' },
              { icon: Leaf, title: 'Produtos Naturais', description: 'Sais, ervas e aromas 100% naturais para seu bem-estar e relaxamento.' },
              { icon: Package, title: 'Embalagem Especial', description: 'Caixas artesanais decoradas com amor e prontas para presentear.' },
              { icon: Sparkles, title: 'Autocuidado', description: 'Um momento especial para você se reconectar consigo mesma e renovar suas energias.' },
              { icon: Heart, title: 'Feito com Amor', description: 'Montamos cada kit à mão, com carinho e dedicação em cada detalhe.' },
              { icon: Sun, title: 'Energia Positiva', description: 'Transmita luz, paz e boas energias através dos nossos presentes.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-[85vw] md:w-auto flex-shrink-0 snap-center"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F0EDE8]">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B8A165]/20 to-[#6B7B5F]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-[#B8A165]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#4A4A4A] mb-3">{feature.title}</h3>
                  <p className="text-[#6B7B5F] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.a
          href="#contato"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#B8A165]" />
        </motion.a>
      </section>

      {/* Contact Section */}
      <section id="contato" className="min-h-screen py-4 md:py-24 px-4 bg-[#f5f1e4] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 md:mb-16"
          >
            <span className="text-[#B8A165] uppercase tracking-[0.3em] text-xs md:text-sm font-medium">Fale Conosco</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#4A4A4A] mt-2 md:mt-4 mb-3 md:mb-6">
              Vamos <span className="font-serif italic text-[#6B7B5F]">conversar?</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#B8A165] mx-auto mb-3 md:mb-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-3 md:space-y-6"
            >
              <a
                href="https://wa.me/5542984442470?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20Kits%20da%20Mimos%20de%20Luz%20💛"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-[#F0EDE8] flex items-start gap-3 md:gap-4 hover:shadow-lg hover:border-[#25D366]/30 transition-all duration-300 cursor-pointer block"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#4A4A4A] mb-1 text-sm md:text-base">WhatsApp</h3>
                  <p className="text-[#6B7B5F] text-xs md:text-sm">Respondemos rapidinho!</p>
                  <p className="text-[#B8A165] font-medium mt-1 text-xs md:text-base">(42) 98444-2470</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/mimosdeluzpg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-[#F0EDE8] flex items-start gap-3 md:gap-4 hover:shadow-lg hover:border-pink-500/30 transition-all duration-300 cursor-pointer block"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-medium text-[#4A4A4A] mb-1 text-sm md:text-base">Instagram</h3>
                  <p className="text-[#6B7B5F] text-xs md:text-sm">Siga-nos para novidades</p>
                  <p className="text-[#B8A165] font-medium mt-1 text-xs md:text-base">@mimosdeluzpg</p>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-[#F0EDE8] text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-3xl font-light text-[#4A4A4A] mb-3 md:mb-4">
                Faça seu <span className="font-serif italic text-[#6B7B5F]">pedido</span>
              </h3>
              <p className="text-[#6B7B5F] mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp
              </p>
              <a
                href="https://wa.me/5542984442470?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20Kits%20da%20Mimos%20de%20Luz%20💛"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-[#25D366] text-white rounded-full font-medium text-base md:text-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                Chamar no WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A4A4A] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-4">
                <span className="font-serif text-2xl italic text-[#B8A165]">Mimos de Luz</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Presentes exclusivos feitos com amor e carinho. Cada kit é pensado para transmitir paz, luz e energia positiva.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-[#B8A165]">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
                <li><a href="#produtos" className="text-gray-400 hover:text-white transition-colors">Nossos Kits</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-[#B8A165]">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://wa.me/5542984442470?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20Kits%20da%20Mimos%20de%20Luz%20💛" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    WhatsApp: (42) 98444-2470
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/mimosdeluzpg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4 text-pink-500" />
                    Instagram: @mimosdeluzpg
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}