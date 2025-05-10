
import React from 'react';
import { Award, User, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
         <div className="relative flex justify-center items-center">
              {/* Efeito verde em degrade atrás */}
              <div className="absolute w-[99%] h-[105%] bg-[#00ff6a] opacity-40 blur-[30px] rounded-3xl z-0" />
              
              {/* Imagem principal */}
              <img 
                src="/img/5.jpg" 
                alt="Barbearia interior" 
                className="relative z-10 rounded-lg shadow-xl w-full h-[650px] object-cover"
              />

              {/* Bloco de anos de experiência */}
              <div className="absolute -bottom-6 -right-6 bg-[#00ff6a] p-6 rounded-lg shadow-xl z-20">
                <h3 className="text-gray-900 text-2xl font-bold">10+</h3>
                <p className="text-gray-900 font-medium">Anos de experiência</p>
              </div>
            </div>


          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
               Tiago <span className="text-[#00ff6a]">Candido</span>
            </h2>
            <p className="text-gray-400 mb-8">
             Tiago Cândido é um verdadeiro exemplo de dedicação e crescimento. Chegou a Porto Velho há 5 anos com um objetivo simples, mas poderoso: transformar vidas por meio da arte do corte de cabelo. Começou como barbeiro, aprimorando suas habilidades e conquistando cada cliente com excelência e estilo.
            </p>
            <p className="text-gray-400 mb-8">
              Hoje, Tiago não é apenas um barbeiro, mas um empresário de sucesso e referência no mercado de barbearias. É o fundador da Huracan Barbearia, um espaço inovador que une tradição e modernidade. Seu conhecimento e experiência o levaram a se destacar também como palestrante e mentor, ministrando cursos e workshops para outros profissionais da área.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg text-[#00ff6a]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Qualidade Premium</h4>
                  <p className="text-gray-400">Utilizamos apenas produtos de alta qualidade para garantir os melhores resultados.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg text-[#00ff6a]">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Profissionais Experientes</h4>
                  <p className="text-gray-400">Nossa equipe é formada por barbeiros com anos de experiência no mercado.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg text-[#00ff6a]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Atendimento Ágil</h4>
                  <p className="text-gray-400">Valorizamos seu tempo e garantimos eficiência sem perder a qualidade.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg text-[#00ff6a]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Ambiente Exclusivo</h4>
                  <p className="text-gray-400">Espaço confortável climatizado e moderno para uma experiência completa de cuidado masculino.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
