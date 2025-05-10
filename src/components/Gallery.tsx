
import React from 'react';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const images = [
    '/img/trabalho1.png',
    '/img/trabalho2.png',
    '/img/trabalho3.png',
    '/img/trabalho4.jpeg',
    '/img/trabalho5.png',
    '/img/trabalho6.jpeg',
    '/img/trabalho7.png',
    '/img/trabalho8.jpg',
    '/img/trabalho9.png',
    '/img/trabalho10.png',
    '/img/trabalho11.JPG',
    '/img/trabalho12.jpeg',
    ,
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossa <span className="text-[#00ff6a]">Galeria</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos nossos melhores trabalhos realizados por nossa equipe de profissionais.
            Transformamos estilos e elevamos a autoestima dos nossos clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg h-80">
              <img
                src={image}
                alt={`Trabalho realizado ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[#00ff6a] text-xl font-bold">Ver Mais</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/agendar" 
            className="bg-[#00ff6a] text-gray-900 py-3 px-8 rounded-lg font-bold hover:bg-[#00dd5a] transition-colors inline-block"
          >
            Agende Seu Horário
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
