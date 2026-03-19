import React from 'react';

export const ImageAutoSlider = ({ images: customImages, duration = 40 }: { images?: string[], duration?: number }) => {
  // Default images for the infinite scroll - using Unsplash URLs related to perfumes/luxury
  const defaultImages = [
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583467875263-d50dec37a88c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616984748474-2424617a773d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format&fit=crop"
  ];

  const images = customImages || defaultImages;

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full relative overflow-hidden py-12 bg-zinc-950">
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right ${duration}s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s ease;
        }

        .image-item:hover {
          transform: scale(1.08) translateY(-8px);
          filter: brightness(1.2) contrast(1.1);
          z-index: 50;
        }
      `}</style>
      
      {/* Background gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-r from-aqua/5 via-transparent to-aqua/5 pointer-events-none" />
      
      {/* Scrolling images container */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="scroll-container w-full">
          <div className="infinite-scroll flex gap-6 w-max px-6">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
              >
                <img
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
