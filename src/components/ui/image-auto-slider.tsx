import React from 'react';

export const ImageAutoSlider = ({ 
  images: customImages, 
  duration = 40, 
  reverse = false,
  size = "w-56 h-56",
  glow = false
}: { 
  images?: string[], 
  duration?: number,
  reverse?: boolean,
  size?: string,
  glow?: boolean
}) => {
  const images = customImages || [];
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full relative overflow-hidden py-2">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .infinite-scroll-left {
          animation: scroll-left ${duration}s linear infinite;
        }
        .infinite-scroll-right {
          animation: scroll-right ${duration}s linear infinite;
        }
      `}</style>
      
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="w-full">
          <div className={`${reverse ? 'infinite-scroll-right' : 'infinite-scroll-left'} flex gap-1 w-max px-1`}>
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${size} rounded-2xl overflow-hidden border ${glow ? 'border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'border-white/10'}`}
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
