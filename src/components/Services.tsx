import React from 'react';
import { Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff6a]/20">
      <div 
        className="h-80 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80"></div>
      
      {/* Overlay with logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img src="/img/l1.png" 
        alt="marcadagua" 
        className="w-23 h-23 object-contain"/>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-[#00ff6a] mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-white">{price}</span>
         
          <Link 
            to="/agendar"
            className="bg-[#00ff6a] text-gray-900 py-1 px-4 rounded text-sm font-medium hover:bg-[#00dd5a] transition-colors"
          >
            Agendar
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      title: "Corte",
      description: "Corte moderno e personalizado, com acabamento preciso e uso de produtos profissionais.",
      imageUrl: "/img/m13.JPG",
      price: "R$ 60,00"
    },
    {
      title: "Barba Completa",
      description: "Barba modelada com toalha quente, óleos especiais e técnicas de barbearia clássica.",
      imageUrl: "/img/m14.JPG",
      price: "R$ 40,00"
    },
    {
      title: "Combo Corte + Barba + penteado",
      description: "Serviço completo com corte, barba e penteado, ideal para ocasiões especiais.",
      imageUrl: "/img/m17.JPG",
      price: "R$ 150,00"
    },
    {
      title: "Limpeza de pele",
      description: "Remoção de impurezas e revitalização facial com técnicas específicas para homens.",
      imageUrl: "/img/m21.jpeg",
      price: "R$ 35,00"
    },
    {
      title: "Depilação nasal",
      description: "Eliminação dos pelos indesejados do nariz de forma rápida, segura e higiênica.",
      imageUrl: "/img/m5.jpeg",
      price: "R$ 30,00"
    },
    {
      title: "Selagem",
      description: "Tratamento capilar que reduz o frizz e proporciona brilho intenso aos fios.",
      imageUrl: "/img/m18.png",
      price: "R$ 120,00"
    },
    {
      title: "Combo Corte + Barba + Selagem",
      description: "Pacote premium com corte, barba e tratamento de selagem para um visual impecável.",
      imageUrl: "/img/m19.png",
      price: "R$ 200,00"
    },
    {
      title: "SOBRANCELHA",
      description: "Design de sobrancelhas alinhado ao formato do rosto para um visual harmonioso.",
      imageUrl: "/img/m20.png",
      price: "R$ 10,00"
    },
    {
      title: "SERVIÇOS EXTRAS",
      description: "Serviços adicionais como hidratação e depilação nazal",
      imageUrl: "/img/m23.png",
      price: "R$ 20,00"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossos <span className="text-[#00ff6a]">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos serviços premium de barbearia com profissionais experientes,
            utilizando técnicas modernas e produtos de alta qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
