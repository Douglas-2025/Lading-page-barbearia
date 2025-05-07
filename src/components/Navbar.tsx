import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Scissors className="h-8 w-8 text-[#00ff6a]" />
          <span className="ml-2 text-2xl font-bold">
            HURACAN <span className="text-[#00ff6a]">BARBEARIA</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-white hover:text-[#00ff6a] transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-[#00ff6a] transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-[#00ff6a] transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-white hover:text-[#00ff6a] transition-colors"
          >
            Galeria
          </button>
         
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-[#00ff6a] transition-colors"
          >
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-[#00ff6a] transition-colors py-2"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#00ff6a] transition-colors py-2"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#00ff6a] transition-colors py-2"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-[#00ff6a] transition-colors py-2"
            >
              Galeria
            </button>
  
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#00ff6a] transition-colors py-2"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};