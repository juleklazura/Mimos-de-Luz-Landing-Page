import React from 'react';
import { Heart, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4A4A4A] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo e descrição */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-2xl italic text-[#B8A165]" style={{ fontFamily: 'Georgia, serif' }}>
                Mimos de Luz
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Presentes exclusivos feitos com amor e carinho. Cada kit é pensado para transmitir paz, luz e energia positiva.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8A165] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-[#B8A165]">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-white transition-colors">
                  Nossos Kits
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-[#B8A165]">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Instagram: @mimosdeluz</li>
              <li>Atendimento: Seg a Sex, 9h às 18h</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2024 Mimos de Luz. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-[#E8B4B8] fill-current" /> no Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}