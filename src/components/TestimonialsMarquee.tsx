import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlight: string;
  verified: boolean;
}

interface TestimonialsProps {
  onOpenContact: () => void;
}

export const TestimonialsMarquee: React.FC<TestimonialsProps> = ({ onOpenContact }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 't-1',
      name: 'Carlos Mendoza',
      role: 'CEO & Fundador',
      company: 'Krono Premium Watches',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      content: 'Pasar nuestra tienda a Next.js con HYPERFLOW fue la mejor decisión del año. La velocidad de carga instantánea nos hizo ganar un 216% más de conversiones en el primer mes.',
      rating: 5,
      highlight: 'Conversión +216%',
      verified: true
    },
    {
      id: 't-2',
      name: 'Sofía Vergara',
      role: 'Directora de Marketing',
      company: 'NexaCloud AI',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      content: 'Las campañas de retargeting con IA y los embudos automatizados nos permitieron multiplicar por 7 la captación de leads B2B reduciendo el costo a una cuarta parte.',
      rating: 5,
      highlight: 'Leads x7',
      verified: true
    },
    {
      id: 't-3',
      name: 'Alejandro Rivera',
      role: 'Director de Operaciones',
      company: 'Logística Global Apex',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      content: 'Teníamos graves problemas de SEO y canibalización. En 90 días nos pusieron en el Top 3 para nuestras palabras clave más competidas. El tráfico orgánico se disparó.',
      rating: 5,
      highlight: 'Top #3 en Google',
      verified: true
    },
    {
      id: 't-4',
      name: 'Elena Rostova',
      role: 'Head of Growth',
      company: 'SaaSify Solutions',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      content: 'El nivel técnico y la velocidad de respuesta del equipo es espectacular. No son una agencia tradicional, son verdaderos ingenieros de crecimiento.',
      rating: 5,
      highlight: 'Soporte 10/10',
      verified: true
    },
    {
      id: 't-5',
      name: 'Marcos de la Vega',
      role: 'Fundador',
      company: 'FitLife E-Commerce',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
      content: 'El rediseño de nuestro checkout y la automatización de carritos nos generó $35,000 USD adicionales en facturación recuperada durante el Black Friday.',
      rating: 5,
      highlight: '+$35K Recuperados',
      verified: true
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>LO QUE DICEN NUESTROS CLIENTES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Historias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">Éxito Comprobado</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No te pidas que nos creas a nosotros. Escucha a los líderes fundadores y directores de marketing que ya escalaron con HYPERFLOW.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Track 1 (Left to Right) */}
      <div className="relative w-full overflow-hidden my-8 py-4">
        <div className="flex gap-6 animate-marquee whitespace-nowrap w-max hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {/* Double array for infinite seamless loop */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              onClick={() => setSelectedTestimonial(t)}
              className="w-80 sm:w-96 glass-card rounded-3xl p-6 border border-white/10 shrink-0 space-y-4 hover:border-amber-500/40 transition-all duration-300 relative group whitespace-normal"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full font-bold">
                  {t.highlight}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-amber-500/30" />
                <div className="overflow-hidden">
                  <div className="text-sm font-bold text-white flex items-center gap-1.5 truncate">
                    <span>{t.name}</span>
                    {t.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">{t.role} en <span className="text-indigo-400 font-semibold">{t.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Trust Banner / Logo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center space-y-6 shadow-2xl">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">EMPRESAS QUE CONFÍAN EN NUESTRA TECNOLOGÍA</div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            {['KRONO WATCHES', 'NEXACLOUD AI', 'APEX GLOBAL', 'SAASIFY', 'FITLIFE RETAIL', 'VORTEX TECH'].map((logo, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 font-mono font-extrabold text-xs text-slate-400 tracking-wider flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors cursor-default">
                {logo}
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 max-w-md mx-auto">
            <span className="flex items-center gap-1.5">
              <ThumbsUp className="w-4 h-4 text-emerald-400" /> 99.4% Satisfacción
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-cyan-400" /> +150 Proyectos Desplegados
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Modal for Testimonial View */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border border-white/10 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
              <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-500" />
              <div>
                <div className="text-lg font-bold text-white flex items-center gap-1.5">
                  <span>{selectedTestimonial.name}</span>
                  {selectedTestimonial.verified && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                </div>
                <div className="text-xs text-slate-400">{selectedTestimonial.role} en <span className="text-indigo-400 font-semibold">{selectedTestimonial.company}</span></div>
                <div className="flex items-center gap-1 text-amber-400 mt-1">
                  {[...Array(selectedTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Impacto Auditado: {selectedTestimonial.highlight}
              </div>
              <p className="text-base text-slate-200 italic leading-relaxed bg-slate-950 p-5 rounded-2xl border border-slate-800">
                "{selectedTestimonial.content}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">Reseña verificada por HYPERFLOW Studio</span>
              <button
                onClick={() => { setSelectedTestimonial(null); onOpenContact(); }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs shadow-lg hover:scale-105 transition-transform"
              >
                Solicitar Asesoría
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
