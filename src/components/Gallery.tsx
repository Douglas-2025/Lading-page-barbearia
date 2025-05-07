import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

interface GalleryImage {
  imageUrl: string;
  alt: string;
}

export const Gallery: React.FC = () => {
  const images: GalleryImage[] = [
    { imageUrl: "/img/1.png", alt: "Corte moderno" },
    { imageUrl: "/img/2.JPG", alt: "Barba detalhada" },
    { imageUrl: "/img/3.png", alt: "Finalização profissional" },
    { imageUrl: "/img/img4p.png", alt: "Ambiente da barbearia" },
    { imageUrl: "/img/img5p.png", alt: "Cliente satisfeito" },
    { imageUrl: "/img/6.JPG", alt: "Cliente satisfeito" },
    { imageUrl: "/img/7.JPG", alt: "Cliente satisfeito" },
    { imageUrl: "/img/11.jpg", alt: "Cliente satisfeito" },
    { imageUrl: "/img/15.png", alt: "Cliente satisfeito" },
    { imageUrl: "/img/16.png", alt: "Cliente satisfeito" },
    { imageUrl: "/img/17.png", alt: "Cliente satisfeito" },
    { imageUrl: "/img/9.JPG", alt: "Produtos premium" }
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossa <span className="text-[#00ff6a]">Galeria</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira alguns momentos, cortes e estilos que mostram a qualidade do nosso trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
       <div
       key={index}
       className="relative group rounded-lg overflow-hidden transition duration-300 cursor-pointer border border-transparent hover:border-transparent hover:ring-2 hover:ring-[#00ff6a]/50 hover:ring-offset-2"
       onClick={() => setSelectedImage(img)}
     >
       <img
         src={img.imageUrl}
         alt={img.alt}
         className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
       />
       <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <Camera className="w-5 h-5 text-white" />
       </div>
     </div>
          ))}
        </div>
      </div>

      {/* Modal para imagem expandida */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white z-50" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.imageUrl}
            alt={selectedImage.alt}
            className="max-w-full max-h-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      )}
    </section>
  );
};
