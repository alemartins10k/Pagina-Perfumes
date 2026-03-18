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
  <nav className="absolute top-0 left-0 right-0 z-50 bg-aqua/80 backdrop-blur-md py-3 shadow-[0_0_20px_rgba(127,255,212,0.3)] border-b border-aqua/30 overflow-hidden">
    {/* Efeito de linha de scan futurista */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 [animation:scanline_3s_infinite_linear]" />
    </div>
    
    <div className="flex whitespace-nowrap relative z-10">
      <motion.div
        animate={{ 
          x: [0, "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-20 items-center"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <Crown className="w-5 h-5 text-dark" strokeWidth={2} />
            <span className="text-lg font-normal text-dark tracking-tighter [animation:neon-pulse_2s_infinite_ease-in-out]">
              Revenda as Fragâncias mais desejadas do mundo!
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="section-padding section-dark pt-20">
    <div className="mobile-container text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        Uma forma simples de fazer pelo menos <span className="text-brand">R$200 por semana</span> vendendo perfumes — mesmo começando com apenas <span className="text-brand">R$240</span>
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10 max-w-md mx-auto"
      >
        <div className="text-zinc-300 text-lg font-medium leading-relaxed space-y-3 flex flex-col items-center sm:items-start max-w-fit mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-brand/20 p-1 rounded-full">
              <Check className="w-4 h-4 text-brand" />
            </div>
            <span>Produto de alta aceitação</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-brand/20 p-1 rounded-full">
              <Check className="w-4 h-4 text-brand" />
            </div>
            <span>Fácil de demonstrar</span>
          </div>
          <div className="flex items-center gap-3 text-left">
            <div className="bg-brand/20 p-1 rounded-full shrink-0">
              <Check className="w-4 h-4 text-brand" />
            </div>
            <span>Alta chance de venda na primeira apresentação</span>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-zinc-400 text-sm mb-4 flex items-center justify-center gap-2 whitespace-nowrap"
      >
        🎥 Assista ao vídeo e entenda como funciona
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative aspect-video rounded-xl overflow-hidden mb-10 bg-zinc-900 shadow-2xl border border-white/10"
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
        <motion.a
          href="https://wa.me/31993935885?text=Ol%C3%A1%20Al%C3%AA!%20Quero%20comprar%20meu%20kit."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-[56px] text-lg font-bold bg-brand text-dark rounded-lg flex items-center justify-center whitespace-nowrap shadow-lg shadow-brand/20"
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
    "https://i.imgur.com/UD5dXKQ.jpg",
    "https://i.imgur.com/I5Y8B2a.jpeg",
    "https://i.imgur.com/0AwsPpb.jpeg",
    "https://i.imgur.com/5MrznjA.jpeg",
    "https://i.imgur.com/QJEQrTl.jpeg",
    "https://i.imgur.com/RPr1mWC.jpeg",
    "https://i.imgur.com/zjhJH0X.jpeg",
    "https://i.imgur.com/C9JWUQE.jpeg",
    "https://i.imgur.com/UBUC3OA.jpeg",
    "https://i.imgur.com/RsNfegh.jpeg",
    "https://i.imgur.com/L6bGUMs.jpeg",
    "https://i.imgur.com/WEQOWxv.jpeg"
  ];

  return (
    <section className="py-10 section-dark overflow-hidden">
      <div className="mobile-container">
        <FadeInSection>
          <h2 className="text-center mb-10">
            <span className="text-brand">50 Fragrâncias</span><br />
            <span className="text-white">inspiradas nas principais grifes do mundo.</span>
          </h2>
        </FadeInSection>
      </div>
      <div className="w-full">
        <ImageAutoSlider images={fragranceImages} />
      </div>
      <div className="mobile-container text-center mt-6">
        <FadeInSection>
          <p className="text-brand text-sm italic">
            Disponível na versão de 15ml e 100ml.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

const Quality = () => (
  <section className="section-padding section-dark">
    <div className="mobile-container">
      <FadeInSection className="text-center">
        <h2 className="mb-10">Qualidade de Grife<br />sem preço de Grife</h2>
        <div className="mb-10 card-rounded bg-white/5 border border-white/10 overflow-hidden">
          <motion.img 
            src="https://i.imgur.com/pPJ7TLK.jpg" 
            alt="Detalhe do Perfume" 
            className="w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="space-y-6 text-left">
          {[
            { icon: <Zap className="text-brand" />, title: "Fixação que Dura o Dia Todo", desc: "33% de concentração de essência, garantindo uma fragrância intensa e duradoura na pele." },
            { icon: <Award className="text-brand" />, title: "Qualidade de Grife sem preço de Grife", desc: "Fragrâncias inspiradas nas maiores grifes do mundo com um preço que seus clientes compram sem pensar duas vezes." },
            { icon: <ShoppingBag className="text-brand" />, title: "Praticidade no Dia a Dia", desc: "Frasco compacto de 15ml, perfeito para levar no bolso, na bolsa ou em viagens." },
            { icon: <TrendingUp className="text-brand" />, title: "Economia Inteligente", desc: "Até 90% mais barato que o importado. Sem abrir mão do cheiro que você ama." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-[18px] font-bold mb-1">{item.title}</h3>
                <p className="text-aux text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

const Earnings = () => (
  <section className="section-padding section-light">
    <div className="mobile-container">
      <FadeInSection className="text-center">
        <h2 className="mb-4">Simulação de Ganhos</h2>
        <p className="text-zinc-500 mb-10 text-aux">Veja quanto você pode lucrar mensalmente.</p>
        
        <div className="space-y-6">
          {[
            { sales: 1, profit: 900, label: "Renda Extra" },
            { sales: 2, profit: 1800, label: "Meta Recomendada", featured: true },
            { sales: 3, profit: 2700, label: "Profissional" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl border ${item.featured ? 'bg-dark text-white border-dark shadow-xl' : 'bg-zinc-50 border-zinc-200'}`}
            >
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 block ${item.featured ? 'text-brand' : 'text-zinc-400'}`}>
                {item.label}
              </span>
              <div className="text-[14px] font-medium mb-1">{item.sales} perfume por dia</div>
              <div className="text-[28px] font-black">
                R$ <AnimatedCounter value={item.profit} />/mês
              </div>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-8 text-[12px] text-zinc-400 italic">
          * Resultados dependem da constância e divulgação.
        </p>
      </FadeInSection>
    </div>
  </section>
);

const EaseOfSale = () => (
  <section className="section-padding section-dark">
    <div className="mobile-container">
      <FadeInSection>
        <h2 className="text-center mb-10">Por que é fácil vender?</h2>
        <div className="space-y-4">
          {[
            { icon: <Heart className="w-5 h-5" />, text: "Produto de desejo imediato" },
            { icon: <TrendingUp className="w-5 h-5" />, text: "Alta taxa de recompra mensal" },
            { icon: <Zap className="w-5 h-5" />, text: "Demonstração rápida e eficaz" },
            { icon: <Users className="w-5 h-5" />, text: "Todo mundo usa e gosta" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 ${i === 3 ? 'text-brand' : ''}`}
            >
              <div className="text-brand">{item.icon}</div>
              <span className="font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

const Kits = () => (
  <section id="kits" className="section-padding section-light">
    <div className="mobile-container">
      <FadeInSection className="text-center">
        <h2 className="mb-10">Escolha o seu Kit para começar</h2>
        <div className="space-y-8">
          {[
            { 
              name: "Kit Conhecer", 
              price: "100", 
              priceDetail: "No pix ou 12x 10,00 no cartão",
              desc: "Ideal para confirmar a qualidade olfativa e fixação na pele.",
              whatsappLink: "https://wa.me/31993935885?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20a%20revender%20perfumes%20e%20queria%20entender%20qual%20kit%20voc%C3%AA%20me%20indica%20para%20iniciar.",
              items: [
                "5 perfumes", 
                "Catalogo Digital Completo",
                "Material Digital para divulgar",
                "Suporte em grupo"
              ]
            },
            { 
              name: "Kit Essencial", 
              price: "240", 
              priceDetail: "No pix ou 12x 24,00 no cartão",
              desc: "O melhor custo-benefício.", 
              featured: true,
              whatsappLink: "https://wa.me/31993935885?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20com%20o%20kit%20de%2012%20perfumes.%20Pode%20me%20ajudar%20a%20escolher%20os%20mais%20vendidos%3F",
              items: [
                "12 perfumes", 
                "Catalogo Digital Completo",
                "Fita Olfativa",
                "Material Digital para divulgar",
                "Suporte personalizado"
              ]
            }
          ].map((kit, i) => (
            <div 
              key={i} 
              id={kit.featured ? "kit-essencial" : undefined}
              className={`p-8 rounded-xl border text-center relative ${kit.featured ? 'border-brand border-2 bg-white shadow-2xl z-10' : 'border-zinc-200 bg-zinc-50'}`}
            >
              {kit.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-dark text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  RECOMENDADO
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{kit.name}</h3>
              <p className="text-aux text-zinc-500 mb-4 whitespace-pre-line">{kit.desc}</p>
              
              {kit.items && (
                <ul className="mb-4 space-y-1">
                  {kit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2 text-sm font-semibold text-zinc-700">
                      <Check className={cn("w-4 h-4 flex-shrink-0", kit.featured ? "text-brand" : "text-black")} strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[14px] font-bold text-zinc-400">R$</span>
                  <span className="text-[48px] font-black leading-none">{kit.price}</span>
                </div>
                {kit.priceDetail && (
                  <p className="text-[11px] font-bold text-zinc-500 mt-2 tracking-tighter">
                    {kit.priceDetail}
                  </p>
                )}
              </div>
              <motion.a
                href={kit.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full h-[56px] text-lg font-bold flex items-center justify-center rounded-lg transition-all",
                  kit.featured ? "bg-brand text-dark shadow-lg shadow-brand/20" : "bg-dark text-white border border-white/10"
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
                QUERO ESTE KIT
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
              <span className="font-medium text-zinc-300">{item.text}</span>
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
              className="border border-white/5 rounded-xl overflow-hidden bg-zinc-900/50"
              initial={false}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 flex items-center justify-between text-left transition-colors hover:bg-white/5"
              >
                <span className="font-bold text-zinc-200">{faq.question}</span>
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
            className="w-full h-[56px] text-lg font-bold mb-6 bg-brand text-dark rounded-lg flex items-center justify-center whitespace-nowrap shadow-lg shadow-brand/20"
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
  <footer className="py-6 bg-dark border-t border-white/5 text-center">
    <div className="mobile-container flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] text-zinc-600 uppercase tracking-wider">
      <span className="font-black text-white/20">Bortoletto & Atlântica Natural</span>
      <span className="text-white/10">•</span>
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
      <EaseOfSale />
      <Kits />
      <Security />
      <Franchises />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

const Users = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
