import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Mail, MapPin, Clock, Heart } from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = '5511999999999'; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os Kits da Mimos de Luz 💛');

  return (
    <section id="contato" className="py-24 px-4 bg-[#f5f1e4] relative overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8A165]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300">
          <circle cx="250" cy="250" r="200" stroke="#6B7B5F" strokeWidth="1" fill="none"/>
          <circle cx="250" cy="250" r="180" stroke="#B8A165" strokeWidth="0.5" fill="none"/>
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
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#4A4A4A] mt-4 mb-6">
            Vamos <span className="font-serif italic text-[#6B7B5F]" style={{ fontFamily: 'Georgia, serif' }}>conversar?</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#B8A165] mx-auto mb-6" />
          <p className="text-[#6B7B5F] max-w-xl mx-auto text-lg">
            Estamos prontas para ajudar você a encontrar o presente perfeito
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0EDE8] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-medium text-[#4A4A4A] mb-1">WhatsApp</h3>
                <p className="text-[#6B7B5F] text-sm">Respondemos rapidinho!</p>
                <p className="text-[#B8A165] font-medium mt-1">(11) 99999-9999</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0EDE8] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-medium text-[#4A4A4A] mb-1">Instagram</h3>
                <p className="text-[#6B7B5F] text-sm">Siga-nos para novidades</p>
                <p className="text-[#B8A165] font-medium mt-1">@mimosdeluz</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0EDE8] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#B8A165]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#B8A165]" />
              </div>
              <div>
                <h3 className="font-medium text-[#4A4A4A] mb-1">Horário de Atendimento</h3>
                <p className="text-[#6B7B5F] text-sm">Segunda a Sexta</p>
                <p className="text-[#B8A165] font-medium mt-1">9h às 18h</p>
              </div>
            </div>
          </motion.div>

          {/* CTA WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#F0EDE8] text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-light text-[#4A4A4A] mb-4">
              Faça seu <span className="font-serif italic text-[#6B7B5F]" style={{ fontFamily: 'Georgia, serif' }}>pedido</span>
            </h3>
            <p className="text-[#6B7B5F] mb-8 leading-relaxed">
              Clique no botão abaixo para iniciar uma conversa no WhatsApp e criar seu kit personalizado
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-medium text-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
            <p className="mt-6 text-sm text-[#999] flex items-center justify-center gap-1">
              <Heart className="w-4 h-4 text-[#E8B4B8]" />
              Atendimento personalizado
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}