
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="/img/logo2.png" alt="logo" width={50}/>
            <span className="text-white">Huracan</span>
            <span className="text-[#00ff6a]">Barbearia</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-[#00ff6a] transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-[#00ff6a] transition-colors">Sobre</a>
            <a href="#services" className="text-white hover:text-[#00ff6a] transition-colors">Serviços</a>
            <a href="#gallery" className="text-white hover:text-[#00ff6a] transition-colors">Galeria</a>
            <a href="#testimonials" className="text-white hover:text-[#00ff6a] transition-colors">Depoimentos</a>
            <a href="#contact" className="text-white hover:text-[#00ff6a] transition-colors">Contato</a>
            <Link to="/agendar" className="bg-[#00ff6a] text-black py-2 px-4 rounded hover:bg-[#00dd5a] transition-colors">
              Agendar
            </Link>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-gray-900 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="hover:text-[#00ff6a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="hover:text-[#00ff6a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#services" 
                className="hover:text-[#00ff6a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#gallery" 
                className="hover:text-[#00ff6a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </a>
              <a 
                href="#testimonials" 
                className="hover:text-[#00ff6a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#contact" 
                className="hover:text-[#00ff6a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Link 
                to="/agendar" 
                className="bg-[#00ff6a] text-black py-2 px-4 rounded hover:bg-[#00dd5a] transition-colors inline-block w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
