import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import React from 'react';


export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Column */}
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff6a] to-[#00ff6a]/50 rounded-full blur opacity-75"></div>
              <div className="relative">
                <img
                  src="/img/Dark.png"
                  alt="Tiago Cândido"
                  className="rounded-full w-96 h-96 object-cover border-4 border-[#00ff6a]"
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#00ff6a]">Tiago</span> Cândido
            </h2>
            
            <p className="text-gray-300 mb-6">
              Tiago Cândido é um verdadeiro exemplo de dedicação e crescimento. Chegou a Porto Velho há 5 anos com um objetivo simples, mas poderoso: transformar vidas por meio da arte do corte de cabelo. Começou como barbeiro, aprimorando suas habilidades e conquistando cada cliente com excelência e estilo.
            </p>
            
            <p className="text-gray-300 mb-6">
              Hoje, Tiago não é apenas um barbeiro, mas um empresário de sucesso e referência no mercado de barbearias. É o fundador da Huracan Barbearia, um espaço inovador que une tradição e modernidade. Seu conhecimento e experiência o levaram a se destacar também como palestrante e mentor, ministrando cursos e workshops para outros profissionais da área.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="https://www.instagram.com/tiago_candido_18?igsh=MW5zZGRncXI4N2RnMw%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors"
              >
                <Instagram size={18} className="text-[#00ff6a]" />
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://www.facebook.com/share/1BtHxrCEsY/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors"
              >
                <Facebook size={18} className="text-[#00ff6a]" />
                <span>Facebook</span>
              </a>
              
              <a 
                href="https://wa.me/5568992375187" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#00ff6a] hover:bg-[#00cc55] text-gray-900 font-medium px-4 py-2 rounded-full transition-colors"
              >
                <Phone size={18} />
                <span>Contato</span>
              </a>
            </div>
            
            <div className="mt-8 flex items-center text-gray-300">
              <MapPin size={18} className="text-[#00ff6a] mr-2" />
              <span>Porto Velho, RO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};