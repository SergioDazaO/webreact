import React, { useState } from 'react';
import { ExternalLink, TrendingUp, Filter } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: 'ecommerce' | 'saas' | 'b2b';
  client: string;
  image: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    growth: string;
  }[];
  tags: string[];
}

interface ShowcaseProps {
  onOpenContact: () => void;
}

export const DynamicShowcase: React.FC<ShowcaseProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecommerce' | 'saas' | 'b2b'>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'case-1',
      title: 'Rediseño Headless & Escalado en Meta Ads',
      category: 'ecommerce',
      client: 'Krono Premium Watches',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      challenge: 'Velocidad de carga lenta (4.2s) en Shopify y un costo por adquisición (CPA) disparado por los cambios de privacidad en iOS.',
      solution: 'Migración a arquitectura Next.js Headless con Shopify Graph API y re-entrenamiento del Píxel de Meta con servidor CAPI avanzado.',
      metrics: [
        { label: 'Tiempo de Carga', before: '4.2s', after: '0.6s', growth: '-85%' },
        { label: 'Tasa de Conversión', before: '1.2%', after: '3.8%', growth: '+216%' },
        { label: 'ROAS Campañas', before: '1.8x', after: '5.4x', growth: '+200%' }
      ],
      tags: ['Next.js', 'Shopify Plus', 'Meta CAPI', 'Tailwind CSS']
    },
    {
      id: 'case-2',
      title: 'Lanzamiento SaaS & Embudos de Adquisición B2B',
      category: 'saas',
      client: 'NexaCloud AI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      challenge: 'Falta de leads cualificados para el equipo comercial y un proceso de registro con un 78% de abandono.',
      solution: 'Desarrollo de landing page interactiva con calculadora de ahorro en vivo y embudo de captación automatizado en LinkedIn Ads.',
      metrics: [
        { label: 'Leads B2B Mensuales', before: '45', after: '380', growth: '+744%' },
        { label: 'Costo por Lead (CPL)', before: '$85', after: '$22', growth: '-74%' },
        { label: 'Cierre Comercial', before: '8%', after: '24%', growth: '+200%' }
      ],
      tags: ['React', 'LinkedIn Ads', 'HubSpot AI', 'Framer Motion']
    },
    {
      id: 'case-3',
      title: 'Estrategia SEO Omnicanal & Portal Corporativo',
      category: 'b2b',
      client: 'Logística Global Apex',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      challenge: 'Pérdida de posicionamiento orgánico frente a nuevos competidores y una web corporativa obsoleta no adaptada a móviles.',
      solution: 'Reconstrucción total con Vite + React, inyección de Schema para logística y redacción asistida por IA para dominar 120 intenciones de búsqueda.',
      metrics: [
        { label: 'Tráfico Orgánico', before: '12K', after: '85K', growth: '+608%' },
        { label: 'Páginas en Top 3', before: '14', after: '92', growth: '+557%' },
        { label: 'Solicitudes Cotización', before: '28/mes', after: '210/mes', growth: '+650%' }
      ],
      tags: ['Vite', 'SEO Técnico', 'Schema.org', 'Python Automation']
    }
  ];

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <section id="portafolio" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-fuchsia-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>PORTAFOLIO DE IMPACTO // CASOS REALES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Resultados Auditados que <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Hablan por Sí Solos</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explora cómo hemos transformado negocios tradicionales y startups en líderes digitales indiscutibles.
          </p>

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filtrar por sector:
            </span>
            {[
              { id: 'all', label: 'Todos los Proyectos' },
              { id: 'ecommerce', label: 'E-Commerce & Retail' },
              { id: 'saas', label: 'SaaS & Tecnología' },
              { id: 'b2b', label: 'Servicios B2B' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((cs) => (
            <div 
              key={cs.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500"
            >
              <div>
                {/* Image & Category Badge */}
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:opacity-0 transition-opacity duration-300" />
                  <img 
                    src={cs.image} 
                    alt={cs.client}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                    {cs.category.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="text-xs font-semibold text-indigo-400">{cs.client}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cs.title}
                  </h3>

                  {/* Highlights / Metrics Preview */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 my-4">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                        <div className="text-base font-mono font-black text-emerald-400">{m.growth}</div>
                        <div className="text-[9px] text-slate-500">{m.before} → {m.after}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    <strong className="text-slate-400">Reto:</strong> {cs.challenge}
                  </p>
                </div>
              </div>

              {/* Footer / Tags & Action */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCase(cs)}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                  <span>Ver Desglose Técnico</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-slate-950 p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left space-y-1">
            <div className="text-lg font-bold text-white">¿Quieres ver tu empresa en nuestro próximo caso de éxito?</div>
            <div className="text-xs text-slate-400">Analizamos tu infraestructura actual sin costo y te mostramos el plan de acción exacto.</div>
          </div>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold text-xs text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 shrink-0"
          >
            SOLICITAR ANÁLISIS GRATUITO
          </button>
        </div>

      </div>

      {/* Interactive Modal for Case Study Details */}
      {selectedCase && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-slate-900 border border-white/10 rounded-3xl max-w-3xl w-full p-6 sm:p-10 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              ✕
            </button>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full">
                {selectedCase.client} // {selectedCase.category.toUpperCase()}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedCase.title}
              </h3>
            </div>

            {/* Giant Metrics Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              {selectedCase.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1 text-center sm:text-left">
                  <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                  <div className="text-3xl font-mono font-black text-emerald-400">{m.growth}</div>
                  <div className="text-xs text-slate-500">Antes: {m.before} <span className="text-indigo-400 font-bold">→ Hoy: {m.after}</span></div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">El Desafío Inicial</h4>
                <p className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">{selectedCase.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">La Solución Implementada por HYPERFLOW</h4>
                <p className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">{selectedCase.solution}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {selectedCase.tags.map((t, i) => (
                  <span key={i} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-lg font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => { setSelectedCase(null); onOpenContact(); }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:scale-105 transition-transform"
              >
                Quiero Resultados Similares
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
