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
import { useRef, useEffect, useState, ReactNode, RefObject } from "react";
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
      let startTime: number | null = null;
      const end = value;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
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
  <nav className="absolute top-0 left-0 right-0 z-50 bg-red-600 py-3 shadow-lg border-b border-red-700">
    <div className="flex justify-center items-center relative z-10">
      <div className="flex items-center">
        <span className="text-sm font-display font-bold text-white uppercase tracking-widest">
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
          loading="lazy"
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
    "https://i.imgur.com/t4B5P7E.jpeg",
    "https://i.imgur.com/RiP62HE.jpeg",
    "https://i.imgur.com/uA74xUp.jpeg",
    "https://i.imgur.com/d84II7c.jpeg",
    "https://i.imgur.com/WpJtGf0.jpeg",
    "https://i.imgur.com/DXGyZOG.jpeg",
    "https://i.imgur.com/xtQAx1R.jpeg"
  ];

  return (
    <section className="py-10 bg-black overflow-hidden">
      <div className="mobile-container">
        <FadeInSection>
          <h2 className="text-center mb-4">
            <span className="text-white">As Mais Famosas Grifes Internacionais.</span>
          </h2>
          <div className="text-center mb-10">
            <p className="text-brand font-bold text-sm italic">
              Disponíveis na versão de 15ml e 100ml.
            </p>
          </div>
        </FadeInSection>
      </div>
      <div className="w-full">
        <ImageAutoSlider 
          images={fragranceImages} 
          duration={30} 
          size="w-[345px] h-[345px]" 
          glow={true}
        />
      </div>
    </section>
  );
};

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

              <div className="flex flex-col gap-3 mb-8">
                <div className="bg-black/60 border border-white/5 p-5 rounded-3xl text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-1">LUCRO SEMANAL</p>
                  <p className="text-3xl font-display font-black text-white">R$ {weeklyProfit.toLocaleString('pt-BR')}</p>
                </div>
                <div className="bg-black/60 border border-white/5 p-5 rounded-3xl text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-1">LUCRO MENSAL</p>
                  <p className="text-3xl font-display font-black text-brand">R$ {monthlyProfit.toLocaleString('pt-BR')}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex flex-col items-center">
                    <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Compra</span>
                    <span className="font-black text-lg">R$ 20,00</span>
                  </div>
                  <div className="w-6 h-[1px] bg-zinc-800" />
                  <div className="flex flex-col items-center">
                    <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Venda</span>
                    <span className="font-black text-lg">R$ 50,00</span>
                  </div>
                  <div className="w-6 h-[1px] bg-zinc-800" />
                  <div className="flex flex-col items-center">
                    <span className="text-brand text-[10px] font-black uppercase tracking-widest mb-1">Lucro/Unid.</span>
                    <span className="font-black text-lg text-brand">R$ 30,00</span>
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
            <p className="text-white font-bold leading-tight text-xl">
              Faça <span className="text-brand">R$ 200 por semana</span><br />
              vendendo apenas <span className="text-brand">1 perfume por dia.</span>
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
              },
              buttonText: "Kit 12 perfumes | QUERO LUCRAR"
            },
            { 
              name: "KIT PROVAR", 
              headline: "Teste a qualidade antes de começar a revender",
              subheadline: "Escolha 3 perfumes para sentir na pele a fixação e descubra por que esses perfumes são tão fáceis de vender",
              price: "100", 
              priceDetail: "3x de R$35,00",
              whatsappLink: "https://wa.me/31993935885?text=Ol%C3%A1!%20Quero%20testar%20o%20Kit%20Provar%20primeiro.",
              items: [
                "3 perfumes entre os mais vendidos", 
                "Catalogo Digital Completo",
                "Suporte"
              ],
              buttonText: "Kit 3 perfumes | QUERO PROVAR"
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
                  "w-full h-[56px] text-[13px] font-display font-black flex items-center justify-center rounded-lg transition-all uppercase tracking-tight",
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
  <section className="section-padding bg-black">
    <div className="mobile-container">
      <FadeInSection className="text-center">
        <h2 className="mb-4 text-white leading-tight">Você pode comprar com segurança e retirar pessoalmente</h2>
        <p className="text-zinc-400 font-bold mb-10">Além disso, enviamos para todo o Brasil com código de rastreio.</p>
        
        <div className="space-y-8 text-left">
          {[
            { 
              title: "Guarapari", 
              subtitle: "Rua São Pedro, 292 • Muquiçaba",
              icon: <MapPin className="w-6 h-6" />
            },
            { 
              title: "Cariacica", 
              subtitle: "Shopping Moxuara TorreA",
              icon: <MapPin className="w-6 h-6" />
            },
            { 
              title: "Envio para todo Brasil", 
              subtitle: "Código de rastreio em todos os pedidos",
              icon: <Truck className="w-6 h-6" />
            }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-zinc-900 rounded-2xl border border-white/5 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-display font-black text-white uppercase tracking-tight text-sm">{item.title}</h4>
                <p className="text-zinc-400 text-sm font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

const Franchises = () => {
  const franchiseImages = [
    "https://i.imgur.com/dr9Z4E6.jpg",
    "https://i.imgur.com/Hdtklrz.jpg",
    "https://i.imgur.com/PoZPphi.jpg",
    "https://i.imgur.com/S1lYa8V.jpg",
    "https://i.imgur.com/hFaJ81T.jpg",
    "https://i.imgur.com/QKwmCZJ.jpg",
    "https://i.imgur.com/BN3WdxM.jpg",
    "https://i.imgur.com/R1WEh4v.jpg",
    "https://i.imgur.com/1lzgIiT.jpg",
    "https://i.imgur.com/YqZqS56.jpg",
    "https://i.imgur.com/N6oCurF.jpg",
    "https://i.imgur.com/yCDGAem.jpg"
  ];

  return (
    <section className="py-6 bg-black overflow-hidden">
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
      question: "Como faço para receber os perfumes?",
      answer: (
        <>
          <p>Você pode comprar com segurança e retirar pessoalmente:</p>
          <div className="mt-4 space-y-2">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
              <span>Guarapari — Rua São Pedro, 292 • Muquiçaba</span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
              <span>Cariacica — Shopping Moxuara TorreA</span>
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
    <section className="section-padding bg-black">
      <div className="mobile-container">
        <FadeInSection className="text-center mb-10">
          <h2 className="mb-4 text-white">❓ Dúvidas Frequentes</h2>
          <p className="text-zinc-400">Tudo o que você precisa saber para começar com segurança.</p>
        </FadeInSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-white/5 rounded-xl overflow-hidden bg-zinc-900"
              initial={false}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 flex items-center justify-between text-left transition-colors hover:bg-zinc-800"
              >
                <span className="font-display font-bold text-white">{faq.question}</span>
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
                    <div className="p-5 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-white/5">
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

const FinalCTA = ({ innerRef }: { innerRef?: RefObject<HTMLDivElement | null> }) => (
  <section ref={innerRef} className="section-padding section-light text-center">
    <div className="mobile-container">
      <FadeInSection>
        <h2 className="mb-6 text-2xl font-display font-black uppercase tracking-tight">Então agora você tem duas opções:</h2>
        <div className="text-zinc-600 mb-10 space-y-2 font-medium">
          <p>Ou começa direto com o kit completo e já inicia suas vendas…</p>
          <p>Ou testa primeiro com o Kit Provar.</p>
          <p className="pt-4 text-dark font-bold">Escolha abaixo como deseja iniciar e comece hoje mesmo.</p>
        </div>
        
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
          <motion.a
            href="https://wa.me/31993935885?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20com%20o%20kit%20de%2012%20perfumes.%20Pode%20me%20ajudar%20a%20escolher%20os%20mais%20vendidos%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[64px] text-[13px] font-display font-black bg-dark text-brand rounded-xl flex items-center justify-center text-center px-4 shadow-xl shadow-brand/10 uppercase tracking-tight"
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
            Kit 12 perfumes | QUERO LUCRAR
          </motion.a>

          <motion.a
            href="https://wa.me/31993935885?text=Ol%C3%A1!%20Quero%20testar%20o%20Kit%20Provar%20primeiro."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[64px] text-[13px] font-display font-black bg-zinc-100 text-dark border-2 border-dark rounded-xl flex items-center justify-center text-center px-4 uppercase tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kit 3 perfumes | QUERO PROVAR
          </motion.a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-zinc-400">
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

const FloatingWhatsApp = ({ show }: { show: boolean }) => (
  <AnimatePresence>
    {show && (
      <motion.a
        href="https://wa.me/31993935885?text=Ol%C3%A1!%20Ainda%20tenho%20d%C3%BAvidas%20sobre%20os%20kits."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 20 }}
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Ainda tem dúvida
      </motion.a>
    )}
  </AnimatePresence>
);

export default function App() {
  const finalCtaRef = useRef<HTMLDivElement>(null);
  const isFinalCtaInView = useInView(finalCtaRef, { amount: 0.1 });

  return (
    <div className="min-h-screen selection:bg-brand/30">
      <Navbar />
      <Hero />
      <VisualProof />
      <Earnings />
      <Kits />
      <Security />
      <Franchises />
      <FAQ />
      <FinalCTA innerRef={finalCtaRef} />
      <Footer />
      <FloatingWhatsApp show={isFinalCtaInView} />
    </div>
  );
}

