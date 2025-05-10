
import React from 'react';
import { Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Logo and info */}
          <div className="mb-8 md:mb-0 max-w-sm">
            <div className="flex items-center mb-4">
              <img src="/img/logo2.jpg" alt="logo" width={50}/>
              <span className="ml-2 text-2xl font-bold">
                HURACAN <span className="text-[#00ff6a]">BARBEARIA</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Tradição e modernidade se encontram para oferecer o melhor em estilo e cuidados masculinos.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-white font-bold mb-4 text-lg">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-[#00ff6a] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#00ff6a] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00ff6a] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#00ff6a] transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#00ff6a] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <Link to="/agendar" className="text-gray-400 hover:text-[#00ff6a] transition-colors">
                  Agendamento
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-white font-bold mb-4 text-lg">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Corte Degradê</li>
              <li className="text-gray-400">Barba Completa</li>
              <li className="text-gray-400">Combo Corte + Barba</li>
              <li className="text-gray-400">Corte Navalhado</li>
              <li className="text-gray-400">Tratamento Capilar</li>
              <li className="text-gray-400">Coloração e Pigmentação</li>
              <li className="text-gray-400">Corte Kids</li>
              <li className="text-gray-400">Sobrancelha na Gilete</li>
              <li className="text-gray-400">Combo Corte + Sobrancelha</li>
              <li className="text-gray-400">Hidratação</li>
              <li className="text-gray-400">Depilação Nasal</li>
              <li className="text-gray-400">Corte + Selagem</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <strong className="text-white">Endereço:</strong> Rua Sucupira, 4367, Nova Floresta, Porto Velho - RO
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Telefone:</strong> (68) 9 9237-5187
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong> Tiagocandido1995@icloud.com
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Horário:</strong> Seg-Sáb: 09h às 18h
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Huracan Barbearia. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Desenvolvido por <a href="https://wa.me/5569992476425" className="text-[#00ff6a]">Douglas Júlio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
