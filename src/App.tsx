/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useInView, AnimatePresence } from "motion/react";
import { 
  Check, 
  Play, 
  Star, 
  TrendingUp, 
  ShoppingBag, 
  ShieldCheck, 
  MapPin, 
  Truck, 
  Award,
  Zap,
  Heart,
  Eye,
  Crown,
  ChevronDown
} from "lucide-react";
import { useRef, useEffect, useState, ReactNode } from "react";
import { cn } from "./lib/utils";
import { Button as MovingBorderButton } from "./components/ui/moving-border";
import { ImageAutoSlider } from "./components/ui/image-auto-slider";

// Componente de Contador Animado
const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString('pt-BR')}</span>;
};

const FadeInSection = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => (
  <nav className="absolute top-0 left-0 right-0 z-50 bg-black py-3 shadow-lg border-b border-zinc-800">
    <div className="flex justify-center items-center relative z-10">
      <div className="flex items-center">
        <span className="text-sm font-display font-bold text-yellow-400 uppercase tracking-widest">
          Saiba mais assistindo o video abaixo
        </span>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="section-padding section-dark pt-20">
    <div className="mobile-container text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-[32px] text-zinc-900 font-display font-black leading-[1.1] tracking-tighter uppercase"
      >
        REVENDA FRAGÂNCIAS IMPORTADAS <br />
        <span className="text-brand bg-dark px-2">QUE TODOS DESEJAM</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <p className="text-zinc-800 font-bold text-lg leading-tight mb-2">
          Faça R$200 reais por semana vendendo apenas 1 perfume por dia.
        </p>
        <p className="text-zinc-500 font-medium text-sm">
          Compre por R$20 e venda por R$50
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative aspect-video rounded-xl overflow-hidden mb-8 bg-zinc-900 shadow-2xl border border-white/10"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&modestbranding=1&showinfo=0"
          title="Vídeo de Apresentação Bortoletto"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-sm mx-auto"
      >
        <div className="text-left space-y-2 mb-8 px-4">
          <p className="text-zinc-800 font-bold text-sm flex items-center gap-2">
            <span className="text-green-600">✔️</span> Fragâncias Importadas Desejadas
          </p>
          <p className="text-zinc-800 font-bold text-sm flex items-center gap-2">
            <span className="text-green-600">✔️</span> Mesmo Impacto Olfativo
          </p>
          <p className="text-zinc-800 font-bold text-sm flex items-center gap-2">
            <span className="text-green-600">✔️</span> Longa duração na pele ( 12 horas )
          </p>
          <p className="text-zinc-800 font-bold text-sm flex items-center gap-2">
            <span className="text-green-600">✔️</span> Todo mundo usa!
          </p>
        </div>

        <motion.a
          href="https://wa.me/31993935885?text=Ol%C3%A1%20Al%C3%AA!%20Quero%20comprar%20meu%20kit."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-[56px] text-lg font-display font-bold bg-dark text-brand rounded-lg flex items-center justify-center whitespace-nowrap shadow-lg shadow-brand/10"
          animate={{ 
            scale: [1, 1.05, 1],
            y: [0, -3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          QUERO COMEÇAR A REVENDER
        </motion.a>
      </motion.div>
    </div>
  </section>
);

const VisualProof = () => {
  const fragranceImages = [
    "https://i.imgur.com/fYwVO9x.jpeg",
    "https://i.imgur.com/tBNBn9n.jpeg",
    "https://i.imgur.com/SY37oZg.jpeg",
    "https://i.imgur.com/XAxZcT9.jpeg",
    "https://i.imgur.com/3jdwSPc.jpeg",
    "https://i.imgur.com/yig3TbV.jpeg",
    "https://i.imgur.com/lZ4ub1i.jpeg",
    "https://i.imgur.com/kszZisI.jpeg"
  ];

  return (
    <section className="py-10 bg-black overflow-hidden">
      <div className="mobile-container">
        <FadeInSection>
          <h2 className="text-center mb-4">
            <span className="text-white">As Mais Famosas Grifes Internacionais.</span>
          </h2>
          <div className="text-center mb-10">
            <p className="text-yellow-400 font-bold text-sm italic">
              Disponíveis na versão de 15ml e 100ml.
            </p>
          </div>
        </FadeInSection>
      </div>
      <div className="w-full">
        <ImageAutoSlider 
          images={fragranceImages} 
          duration={30} 
          size="w-[240px] h-[240px]" 
          glow={true}
        />
      </div>
    </section>
  );
};

const Quality = () => (
  <section className="section-padding section-dark">
    <div className="mobile-container">
      <FadeInSection className="text-center">
        <h2 className="mb-2 text-2xl font-bold leading-tight text-black">
          Por que é tão fácil vender?
        </h2>
        <p className="mb-6 text-zinc-600 font-bold">
          Você não precisa convencer ninguém.
        </p>
        
        <p className="mb-8 text-zinc-900 font-bold text-lg leading-tight">
          O cliente sente → reconhece → compara o preço → compra.
        </p>

        <div className="text-left space-y-3 mb-10">
          <div className="bg-white border border-zinc-200 rounded-xl p-5 flex items-center gap-4 shadow-sm">
            <div className="flex-shrink-0">
              <Heart className="w-6 h-6 text-brand" />
            </div>
            <p className="font-bold text-zinc-900 leading-tight">Mesmo impacto</p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-5 flex items-center gap-4 shadow-sm">
            <div className="flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-brand" />
            </div>
            <p className="font-bold text-zinc-900 leading-tight">Até 90% mais barato</p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-5 flex items-center gap-4 shadow-sm">
            <div className="flex-shrink-0">
              <Zap className="w-6 h-6 text-brand" />
            </div>
            <p className="font-bold text-zinc-900 leading-tight">Fixação que dura o dia todo</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-xl p-5 flex items-center gap-4 shadow-sm">
            <div className="flex-shrink-0">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <p className="font-bold text-yellow-400 leading-tight">Confira os preços das grifes abaixo:</p>
          </div>
        </div>

        <div className="mb-10 card-rounded bg-zinc-50 border border-zinc-200 overflow-hidden shadow-sm">
          <img 
            src="https://i.imgur.com/N7CDzLa.jpg" 
            alt="Detalhe do Perfume" 
            className="w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="py-4">
          <p className="font-bold text-black text-lg leading-relaxed">
            Os perfumes vendem sozinho...<br />
            Você só precisa oferecer.
          </p>
        </div>
      </FadeInSection>
    </div>
  </section>
);

const Earnings = () => {
  const [salesPerDay, setSalesPerDay] = useState(2);
  const profitPerUnit = 30;
  const daysInMonth = 30;
  const daysInWeek = 7;

  const monthlyProfit = salesPerDay * profitPerUnit * daysInMonth;
  const weeklyProfit = salesPerDay * profitPerUnit * daysInWeek;

  return (
    <section className="section-padding bg-black text-white">
      <div className="mobile-container">
        <FadeInSection className="text-center">
          <h2 className="mb-4 text-white">Simulação de Ganhos</h2>
          <p className="text-zinc-400 mb-10 text-sm">
            Arraste o seletor abaixo para ver quanto você pode ganhar
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl -mr-16 -mt-16 rounded-full" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-6">
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-brand font-black mb-1">VOCÊ VENDE</p>
                  <div className="text-4xl font-display font-black flex items-baseline gap-2">
                    {salesPerDay} 
                    <span className="text-sm font-sans font-bold text-zinc-500 uppercase">perfumes / dia</span>
                  </div>
                </div>
              </div>

              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={salesPerDay}
                onChange={(e) => setSalesPerDay(parseInt(e.target.value))}
                className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand mb-10"
              />

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/40 border border-white/5 p-4 rounded-2xl">
                  <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">LUCRO SEMANAL</p>
                  <p className="text-2xl font-display font-black text-brand">R$ {weeklyProfit.toLocaleString('pt-BR')}</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-2xl">
                  <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">LUCRO MENSAL</p>
                  <p className="text-2xl font-display font-black text-brand">R$ {monthlyProfit.toLocaleString('pt-BR')}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex flex-col items-start">
                    <span className="text-zinc-500 text-[10px] font-bold uppercase">Compra</span>
                    <span className="font-bold">R$ 20,00</span>
                  </div>
                  <div className="w-8 h-[1px] bg-zinc-800" />
                  <div className="flex flex-col items-center">
                    <span className="text-zinc-500 text-[10px] font-bold uppercase">Venda</span>
                    <span className="font-bold">R$ 50,00</span>
                  </div>
                  <div className="w-8 h-[1px] bg-zinc-800" />
                  <div className="flex flex-col items-end">
                    <span className="text-brand text-[10px] font-bold uppercase">Lucro/Unid.</span>
                    <span className="font-bold text-brand">R$ 30,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setSalesPerDay(num)}
                className={`py-3 rounded-xl border transition-all text-xs font-bold ${
                  salesPerDay === num 
                    ? 'bg-brand text-dark border-brand shadow-lg shadow-brand/20' 
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                }`}
              >
                {num} {num === 1 ? 'Venda' : 'Vendas'}
              </button>
            ))}
          </div>

          <div className="mt-10 p-6 bg-brand/10 border border-brand/20 rounded-2xl">
            <p className="text-white font-bold leading-tight">
              Vendendo apenas <span className="text-brand">1 por dia...</span><br />
              <span className="text-lg">Você já pode fazer mais de <span className="text-brand">R$ 200 por semana.</span></span>
            </p>
          </div>
          
          <p className="mt-8 text-[10px] text-zinc-500 italic uppercase tracking-widest">
            * Resultados baseados em dedicação e constância.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};


const Kits = () => (
  <section id="kits" className="section-padding section-light">
    <div className="mobile-container">
      <FadeInSection className="text-center">
        <h2 className="mb-10">Escolha o seu Kit para começar</h2>
        <div className="space-y-8">
          {[
            { 
              name: "KIT PROVAR", 
              headline: "Teste a qualidade antes de começar a revender",
              subheadline: "Sinta na pele a fixação e descubra por que esses perfumes são tão fáceis de vender",
              image: "https://i.imgur.com/ttllGFN.jpg",
              price: "100", 
              priceDetail: "3x de R$35,00",
              whatsappLink: "https://wa.me/31993935885?text=Ol%C3%A1!%20Quero%20testar%20o%20Kit%20Provar%20primeiro.",
              items: [
                "3 perfumes entre os mais vendidos", 
                "Catalogo Digital Completo",
                "Suporte"
              ],
              buttonText: "QUERO TESTAR PRIMEIRO"
            },
            { 
              name: "Kit Renda Rápida com Perfumes", 
              price: "260", 
              priceDetail: "12x de 26",
              desc: "Fature R$600 com a venda desse kit Inicial.", 
              featured: true,
              whatsappLink: "https://wa.me/31993935885?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20com%20o%20kit%20de%2012%20perfumes.%20Pode%20me%20ajudar%20a%20escolher%20os%20mais%20vendidos%3F",
              items: [
                "12 perfumes dos mais vendidos",
                "Catalogo Digital Completo",
                "Fita Olfativa para Apresentação",
                "Material Digital para divulgar",
                "Suporte personalizado"
              ],
              bonus: {
                title: "+Brinde de primeiro pedido:",
                text: "1 perfume extra para uso pessoal"
              }
            }
          ].map((kit, i) => (
            <div 
              key={i} 
              id={kit.featured ? "kit-essencial" : undefined}
              className={`p-8 rounded-xl border text-center relative ${kit.featured ? 'bg-dark text-white border-brand border-2 shadow-2xl z-10' : 'border-zinc-200 bg-zinc-50 text-dark'}`}
            >
              {kit.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-dark text-[10px] font-display font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  RECOMENDADO
                </div>
              )}
              <h3 className={`text-xl font-display font-bold mb-2 ${kit.featured ? 'text-white' : 'text-dark'}`}>{kit.name}</h3>
              
              {kit.headline && (
                <p className="text-black font-bold text-sm mb-2 tracking-tight">
                  {kit.headline}
                </p>
              )}

              {kit.subheadline && (
                <p className={`text-sm mb-4 font-medium ${kit.featured ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {kit.subheadline}
                </p>
              )}

              {kit.desc && !kit.subheadline && (
                <p className={`text-aux mb-4 whitespace-pre-line ${kit.featured ? 'text-zinc-400' : 'text-zinc-500'}`}>{kit.desc}</p>
              )}

              {kit.image && (
                <div className="flex justify-center mb-6">
                  <img 
                    src={kit.image} 
                    alt={kit.name} 
                    className="w-56 h-56 object-cover rounded-lg shadow-md border border-zinc-200"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              
              {kit.items && (
                <ul className="mb-4 space-y-1">
                  {kit.items.map((item, idx) => (
                    <li key={idx} className={`flex items-center justify-center gap-2 text-sm font-semibold ${kit.featured ? 'text-zinc-200' : 'text-zinc-700'}`}>
                      <Check className={cn("w-4 h-4 flex-shrink-0", kit.featured ? "text-brand" : "text-black")} strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {kit.bonus && (
                <div className="mb-6 py-3 border-y border-white/10">
                  <p className="text-brand font-black text-sm uppercase tracking-tight">{kit.bonus.title}</p>
                  <p className="text-brand font-bold text-sm">{kit.bonus.text}</p>
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-[48px] font-display font-black leading-none ${kit.featured ? 'text-white' : 'text-dark'}`}>{kit.priceDetail}</span>
                </div>
                <p className={`text-[14px] font-bold mt-2 tracking-tighter ${kit.featured ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  ou R$ {kit.price},00
                </p>
              </div>
              <motion.a
                href={kit.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full h-[56px] text-lg font-display font-bold flex items-center justify-center rounded-lg transition-all",
                  kit.featured ? "bg-brand text-dark shadow-lg shadow-brand/20" : "bg-dark text-brand border border-brand/20"
                )}
                animate={kit.featured ? { 
                  scale: [1, 1.03, 1],
                  y: [0, -4, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {kit.buttonText || "QUERO COMEÇAR A REVENDER"}
              </motion.a>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

const Security = () => (
  <section className="section-padding section-dark">
    <div className="mobile-container">
      <FadeInSection>
        <h2 className="text-center mb-10">Segurança e Confiança</h2>
        <div className="space-y-6">
          {[
            { icon: <MapPin />, text: "Loja física em Guarapari" },
            { icon: <MapPin />, text: "Loja física em Cariacica" },
            { icon: <Truck />, text: "Envio para todo Brasil" },
            { icon: <Zap />, text: "Recebe de 1 a 3 dias úteis no Espírito Santo" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                {item.icon}
              </div>
              <span className="font-medium text-zinc-700">{item.text}</span>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

const Franchises = () => {
  const franchiseImages = [
    "https://i.imgur.com/JSwSNbG.jpeg",
    "https://i.imgur.com/c55HUXD.jpeg",
    "https://i.imgur.com/S96XSza.jpeg",
    "https://i.imgur.com/bLkNLif.jpeg",
    "https://i.imgur.com/isKVZ8S.jpeg",
    "https://i.imgur.com/8oOUxSO.jpeg",
    "https://i.imgur.com/sakOyO5.jpeg",
    "https://i.imgur.com/xKWzkadh.jpeg",
    "https://i.imgur.com/y2h1AAUh.jpeg",
    "https://i.imgur.com/6Ck6bjs.jpeg",
    "https://i.imgur.com/85WoEgC.jpeg",
    "https://i.imgur.com/CY1smtl.jpeg",
    "https://i.imgur.com/PcvUc39.jpeg",
    "https://i.imgur.com/NuqYpio.jpeg"
  ];

  return (
    <section className="py-6 section-dark overflow-hidden">
      <div className="mobile-container">
        <FadeInSection>
          <h2 className="text-center mb-6">Conheça nossas franquias e faça parte do time</h2>
        </FadeInSection>
      </div>
      <div className="w-full">
        <ImageAutoSlider images={franchiseImages} />
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "É confiável comprar com vocês?",
      answer: (
        <>
          <p>Sim. Você pode comprar com segurança e, se preferir, retirar pessoalmente:</p>
          <div className="mt-4 space-y-2">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
              <span>Guarapari — Rua São Pedro, 292 • Muquiçaba</span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
              <span>Cariacica — Shopping Moxuara</span>
            </p>
          </div>
          <p className="mt-4">Além disso, enviamos para todo o Brasil com código de rastreio.</p>
        </>
      )
    },
    {
      question: "Os perfumes são realmente bons?",
      answer: (
        <>
          <p>Sim. Trabalhamos com contratipos categoria Parfum, com alta concentração de essência.</p>
          <p className="mt-4 font-bold text-zinc-300">Na prática isso significa:</p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>Cheiro muito próximo das fragrâncias importadas</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>Fixação intensa na pele</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>Qualidade que surpreende até quem já usa perfume de grife</span>
            </li>
          </ul>
          <p className="mt-4 italic">Grande parte dos clientes volta a comprar.</p>
        </>
      )
    },
    {
      question: "Quanto tempo dura na pele?",
      answer: (
        <>
          <p>Depende da pele, mas normalmente varia entre 8 a 24 horas.</p>
          <p className="mt-4">Isso acontece por conta da alta concentração de essência utilizada na produção.</p>
        </>
      )
    },
    {
      question: "É difícil vender perfume?",
      answer: (
        <>
          <p>Não.</p>
          <p className="mt-4 font-bold text-zinc-300">Perfume é um dos produtos mais fáceis de vender porque:</p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>Todo mundo usa</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>É um produto de desejo</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>Tem alta recompra</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>A venda acontece quando a pessoa sente o cheiro</span>
            </li>
          </ul>
          <p className="mt-4">Você só precisa oferecer.</p>
        </>
      )
    },
    {
      question: "Dá mesmo para fazer dinheiro com isso?",
      answer: (
        <>
          <p>Sim, é totalmente possível.</p>
          <p className="mt-4">Muitos revendedores fazem entre R$1.000 e R$3.000 por mês, vendendo no tempo livre.</p>
          <div className="mt-4 p-4 bg-zinc-900 rounded-lg border border-white/5">
            <p className="font-bold text-brand">Exemplo simples:</p>
            <p className="mt-1">1 perfume por dia → ~R$900/mês</p>
            <p>2 por dia → ~R$1.800/mês</p>
          </div>
          <p className="mt-4 text-[10px] text-zinc-500 uppercase tracking-widest">
            ⚠️ Lembrando: o resultado depende da sua constância e divulgação.
          </p>
        </>
      )
    },
    {
      question: "Quanto eu ganho por perfume?",
      answer: (
        <>
          <p>A margem pode chegar até 150% por unidade.</p>
          <div className="mt-4 p-4 bg-zinc-900 rounded-lg border border-white/5">
            <p className="font-bold text-brand">Exemplo:</p>
            <p className="mt-1">Compra por R$20</p>
            <p>Venda por R$50</p>
          </div>
          <p className="mt-4">Lucro direto em cada venda.</p>
        </>
      )
    },
    {
      question: "Em quanto tempo recebo meu pedido?",
      answer: (
        <>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand" />
              <span>📦 Espírito Santo: de 1 a 3 dias úteis</span>
            </p>
            <p className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand" />
              <span>📦 Demais regiões: envio com rastreio pelos Correios</span>
            </p>
          </div>
          <p className="mt-4">Ou, se preferir, pode retirar pessoalmente.</p>
        </>
      )
    },
    {
      question: "Posso começar com pouco dinheiro?",
      answer: (
        <>
          <p>Sim.</p>
          <p className="mt-4">Temos kits a partir de R$100, ideal para conhecer o produto e já começar a divulgar.</p>
        </>
      )
    },
    {
      question: "Vou ter suporte depois da compra?",
      answer: (
        <>
          <p>Sim.</p>
          <p className="mt-4">Você não começa sozinho.</p>
          <p className="mt-4 font-bold text-zinc-300">Damos suporte para te ajudar a:</p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>Escolher os perfumes certos</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>Divulgar</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>Fazer suas primeiras vendas</span>
            </li>
          </ul>
        </>
      )
    },
    {
      question: "Como escolho os perfumes do meu kit?",
      answer: (
        <>
          <p>Após a compra, você recebe automaticamente no seu whtasapp sugestões dos mais vendidos para você confirmar o envio.</p>
        </>
      )
    },
    {
      question: "Vocês têm amostras para demonstrar para o cliente?",
      answer: (
        <>
          <p>Não trabalhamos com amostras menores ou estojos.</p>
          <p className="mt-4">Utilizamos os próprios perfumes de 15ml como mostruário, o que é até mais eficiente na prática — o cliente consegue testar exatamente o produto que você vende.</p>
          <p className="mt-4 font-bold text-zinc-300">👉 Por isso, recomendamos o Kit Essencial com 12 perfumes:</p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>6 unidades para venda</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>6 unidades para demonstração</span>
            </li>
          </ul>
          <p className="mt-4 italic">Assim você consegue apresentar, gerar desejo e vender com muito mais facilidade.</p>
        </>
      )
    }
  ];

  return (
    <section className="section-padding section-dark">
      <div className="mobile-container">
        <FadeInSection className="text-center mb-10">
          <h2 className="mb-4">❓ Dúvidas Frequentes</h2>
          <p className="text-zinc-500">Tudo o que você precisa saber para começar com segurança.</p>
        </FadeInSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50"
              initial={false}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 flex items-center justify-between text-left transition-colors hover:bg-zinc-100"
              >
                <span className="font-display font-bold text-zinc-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-brand" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-5 pt-0 text-zinc-600 text-sm leading-relaxed border-t border-zinc-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="section-padding section-light text-center">
    <div className="mobile-container">
      <FadeInSection>
        <h2 className="mb-6">“Comece a gerar renda com um produto que todo mundo já compra.”</h2>
        <p className="text-zinc-500 mb-10">
          👇 Escolha seu kit e comece agora.
        </p>
        <motion.div
          className="w-full"
        >
          <motion.a
            href="#kit-essencial"
            className="w-full h-[56px] text-lg font-bold mb-6 bg-dark text-brand rounded-lg flex items-center justify-center whitespace-nowrap shadow-lg shadow-brand/10"
            animate={{ 
              scale: [1, 1.08, 1],
              y: [0, -5, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QUERO COMEÇAR AGORA
          </motion.a>
        </motion.div>
        <div className="flex items-center justify-center gap-2 text-zinc-400">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-[12px] font-bold uppercase tracking-widest">Compra 100% Segura</span>
        </div>
      </FadeInSection>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-6 bg-zinc-50 border-t border-zinc-200 text-center">
    <div className="mobile-container flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] text-zinc-500 uppercase tracking-wider">
      <span className="font-display font-black text-dark/40">Bortoletto & Atlântica Natural</span>
      <span className="text-dark/10">•</span>
      <span>© 2026 Todos os direitos reservados</span>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand/30">
      <Navbar />
      <Hero />
      <VisualProof />
      <Quality />
      <Earnings />
      <Kits />
      <Security />
      <Franchises />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

