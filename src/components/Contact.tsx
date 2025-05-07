import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em <span className="text-[#00ff6a]">Contato</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo e transformar seu visual.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-[#00ff6a]">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-[#00ff6a] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Localização</h4>
                    <p className="text-gray-300">R. Sucupira, 4367 - Nova Floresta</p>
                    <p className="text-gray-300">Porto Velho - RO, 76807-312</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-[#00ff6a] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Telefone</h4>
                    <p className="text-gray-300">(68) 9 9237-5187</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-[#00ff6a] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-300">Segunda a Sábado: 09h às 18h</p>
                    <p className="text-gray-300">Domingos e Feriados: Fechado</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
  <a
    href="https://www.instagram.com/tiago_candido_18?igsh=MW5zZGRncXI4N2RnMw%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-600 p-3 rounded-full hover:bg-[#00ff6a] hover:text-gray-900 transition-colors"
  >
    <Instagram />
  </a>
  <a
    href="https://www.facebook.com/share/1BtHxrCEsY/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-600 p-3 rounded-full hover:bg-[#00ff6a] hover:text-gray-900 transition-colors"
  >
    <Facebook />
  </a>
 
</div>

              </div>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-[#00ff6a]">Agendamento Rápido</h3>
              <p className="text-gray-300 mb-6">
                Agende seu horário de forma rápida e prática através do nosso sistema online
                ou pelo WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.salao99.com.br/huracan-barbearia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00ff6a] text-gray-900 font-bold py-3 px-6 rounded-lg text-center hover:bg-[#00dd5a] transition-colors"
                >
                  Agendar Online
                </a>
                <a
                  href="https://wa.me/5568992375187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 py-3 px-6 rounded-lg text-center hover:bg-gray-500 transition-colors"
                >
                  
                   <FaWhatsapp size={25} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-full min-h-[400px] bg-gray-700 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4861.939722562288!2d-63.889708224092885!3d-8.791159289857221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325c60a2ece4a5%3A0xd093953596d4fe83!2sR.%20Sucupira%2C%204367%20-%20Nova%20Floresta%2C%20Porto%20Velho%20-%20RO%2C%2076807-312!5e1!3m2!1spt-BR!2sbr!4v1746624883301!5m2!1spt-BR!2sbr"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Huracan Barbearia"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

