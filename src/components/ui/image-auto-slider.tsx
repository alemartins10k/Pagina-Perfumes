import React, { useRef } from 'react';
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "motion/react";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

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
    <div className="w-full relative overflow-hidden py-12 bg-white">
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
          filter: brightness(1.1) contrast(1.05);
          z-index: 50;
        }
      `}</style>
      
      {/* Background gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-brand/5 pointer-events-none" />
      
      {/* Scrolling images container with Moving Border */}
      <div className="relative z-10 w-full flex items-center justify-center px-4">
        <div className="relative w-full max-w-5xl mx-auto p-[2px] overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <MovingBorder duration={3000} rx="2rem" ry="2rem">
              <div className="h-40 w-40 opacity-[0.8] bg-[radial-gradient(var(--color-brand)_40%,transparent_60%)]" />
            </MovingBorder>
          </div>
          
          <div className="relative bg-white rounded-[calc(1.5rem-1px)] overflow-hidden py-8 border border-zinc-100">
            <div className="scroll-container w-full">
              <div className="infinite-scroll flex gap-6 w-max px-6">
                {duplicatedImages.map((image, index) => (
                  <div
                    key={index}
                    className="image-item flex-shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-zinc-100"
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
      </div>
    </div>
  );
};
