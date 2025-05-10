
import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em <span className="text-[#00ff6a]">Contato</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos disponíveis para responder suas dúvidas, receber sugestões
            ou agendar seu horário pelos canais abaixo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-[#00ff6a]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Localização</h4>
                    <p className="text-gray-400"> Rua Sucupira, 4367, Nova Floresta</p>
                    <p className="text-gray-400">Porto Velho - RO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-[#00ff6a]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Contato</h4>
                    <p className="text-gray-400">+55 (68) 9 9237-5187</p>
                    <p className="text-gray-400">Tiagocandido1995@icloud.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-[#00ff6a]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-400">Segunda - Sábado: 9h às 19h</p>
                    <p className="text-gray-400">Domingo e Feriados: Fechado</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mt-8">
                  <a href="https://www.instagram.com/tiago_candido_18/" target="_blank" rel="noopener noreferrer" 
                    className="p-3 bg-gray-800 rounded-full text-[#00ff6a] hover:bg-[#00ff6a] hover:text-gray-900 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.facebook.com/people/Tiago-Candido/100069715540361/?mibextid=wwXIfr&rdid=t2PeWEKgyBpL2cqx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1TkV6VSaCJ%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" 
                    className="p-3 bg-gray-800 rounded-full text-[#00ff6a] hover:bg-[#00ff6a] hover:text-gray-900 transition-colors">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Agende seu Horário</h3>
              <p className="text-gray-400 mb-6">
                Clique no botão abaixo para agendar seu horário em nosso sistema online
                ou entre em contato diretamente pelo WhatsApp.
              </p>
              
              <div className="space-y-4">
                <Link 
                  to="/agendar" 
                  className="bg-[#00ff6a] text-gray-900 py-3 px-8 rounded-lg font-bold hover:bg-[#00dd5a] transition-colors w-full block text-center"
                >
                  Agendar Online
                </Link>
                
                <a 
                  href="https://wa.me/5568992375187" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border border-[#00ff6a] text-[#00ff6a] py-3 px-8 rounded-lg font-bold hover:bg-[#00ff6a] hover:text-gray-900 transition-colors w-full block text-center"
                >
                  WhatsApp
                </a>
              </div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.9457797351783!2d-63.8871333!3d-8.7911646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325c60a2ece4a5%3A0xd093953596d4fe83!2sR.%20Sucupira%2C%204367%20-%20Nova%20Floresta%2C%20Porto%20Velho%20-%20RO%2C%2076807-312!5e0!3m2!1spt-BR!2sbr!4v1746899141719!5m2!1spt-BR!2sbr"
                className="w-full h-64 rounded-lg mt-8"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da barbearia"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
