import React, { useState } from 'react';
import { Filter, Users, Magnet, Sparkles, Zap, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FunnelStage {
  id: string;
  stage: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgLight: string;
  borderColor: string;
  description: string;
  tactics: string[];
  kpi: string;
}

interface FunnelProps {
  onOpenContact: () => void;
}

export const MarketingFunnel: React.FC<FunnelProps> = ({ onOpenContact }) => {
  const [activeStage, setActiveStage] = useState<string>('stage-1');

  const stages: FunnelStage[] = [
    {
      id: 'stage-1',
      stage: '01',
      name: 'Atracción de Tráfico',
      icon: <Users className="w-5 h-5" />,
      color: 'text-fuchsia-400',
      bgLight: 'bg-fuchsia-500/10',
      borderColor: 'border-fuchsia-500',
      description: 'Generamos un flujo constante de visitantes altamente cualificados hacia tu sitio web mediante campañas publicitarias avanzadas y dominio de motores de búsqueda.',
      tactics: [
        'Campañas de Video Ads en TikTok & Instagram Reels',
        'Google Search Ads con concordancia exacta y negativa',
        'SEO Técnico y posicionamiento orgánico de contenidos',
        'Estrategia de contenidos virales y colaboraciones'
      ],
      kpi: 'Costo por Clic (CPC) y Volumen de Tráfico Único'
    },
    {
      id: 'stage-2',
      stage: '02',
      name: 'Captación de Leads',
      icon: <Magnet className="w-5 h-5" />,
      color: 'text-indigo-400',
      bgLight: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500',
      description: 'Convertimos a los visitantes anónimos en prospectos identificados con nombre, correo y teléfono mediante ofertas irresistibles y velocidad de carga instantánea.',
      tactics: [
        'Landing Pages de alta conversión con Test A/B continuo',
        'Lead Magnets interactivos (calculadoras, plantillas, audits)',
        'Formularios dinámicos de varios pasos para cualificación',
        'Popups de intención de salida con descuentos exclusivos'
      ],
      kpi: 'Tasa de Conversión a Lead (CPL) y Calidad de Prospectos'
    },
    {
      id: 'stage-3',
      stage: '03',
      name: 'Nutrición Automatizada',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'text-cyan-400',
      bgLight: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500',
      description: 'Educamos y generamos confianza en tus prospectos automáticamente mediante secuencias de correo y retargeting omnicanal personalizado con Inteligencia Artificial.',
      tactics: [
        'Secuencias de Email Marketing automatizadas por comportamiento',
        'Retargeting dinámico en Meta, Google Display y YouTube',
        'Casos de estudio enviados por WhatsApp automatizado',
        'Segmentación de leads según su nivel de interacción'
      ],
      kpi: 'Tasa de Apertura (Open Rate) y CTR en Retargeting'
    },
    {
      id: 'stage-4',
      stage: '04',
      name: 'Conversión a Ventas',
      icon: <Zap className="w-5 h-5" />,
      color: 'text-emerald-400',
      bgLight: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500',
      description: 'Optimizamos el proceso de checkout y cierre comercial para eliminar fricciones y asegurar que el prospecto complete la compra o firme el contrato.',
      tactics: [
        'Checkout en 1 clic con pasarelas ultrarrápidas',
        'Recuperación automatizada de carritos abandonados',
        'Asignación inmediata de leads VIP a tu equipo comercial',
        'Manejo de objeciones automatizado con Chatbot IA'
      ],
      kpi: 'Tasa de Cierre Comercial y Retorno de Inversión (ROAS)'
    },
    {
      id: 'stage-5',
      stage: '05',
      name: 'Fidelización & Escalado',
      icon: <Award className="w-5 h-5" />,
      color: 'text-amber-400',
      bgLight: 'bg-amber-500/10',
      borderColor: 'border-amber-500',
      description: 'Maximizamos el valor del ciclo de vida de cada cliente (LTV) fomentando compras repetidas, ventas cruzadas y referidos orgánicos.',
      tactics: [
        'Estrategias de Upsell y Cross-sell post-compra',
        'Programas de referidos automatizados con recompensas',
        'Encuestas de satisfacción NPS en piloto automático',
        'Campañas exclusivas de reactivación para clientes antiguos'
      ],
      kpi: 'LifeTime Value (LTV) y Tasa de Retención de Clientes'
    }
  ];

  const currentStage = stages.find(s => s.id === activeStage) || stages[0];

  return (
    <section id="embudo" className="py-24 bg-slate-950 relative overflow-hidden bg-grid-pattern">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-indigo-400 uppercase tracking-widest">
            <Filter className="w-3.5 h-3.5" />
            <span>EL MOTOR DE CRECIMIENTO // ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nuestro Embudo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400">Conversión Perpetuo</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Así es como sincronizamos el desarrollo web de alto rendimiento con tácticas de marketing agresivas para acompañar al cliente en cada paso.
          </p>
        </div>

        {/* Funnel Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Funnel Diagram */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-4">HAZ CLIC EN CADA FASE DEL EMBUDO:</div>
            {stages.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => setActiveStage(st.id)}
                className={`w-full p-5 rounded-2xl border text-left transition-all duration-400 flex items-center justify-between group ${
                  activeStage === st.id
                    ? `bg-slate-900/90 ${st.borderColor} shadow-xl shadow-indigo-500/10 scale-105 backdrop-blur-xl`
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700 backdrop-blur-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm ${
                    activeStage === st.id ? `${st.bgLight} ${st.color} border border-current/30` : 'bg-slate-900 text-slate-500'
                  }`}>
                    {st.stage}
                  </div>
                  <div>
                    <h3 className={`font-bold text-base transition-colors ${
                      activeStage === st.id ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {st.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1">Fase #{idx + 1} del embudo</p>
                  </div>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${
                  activeStage === st.id ? `${st.bgLight} ${st.color}` : 'text-slate-600'
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Stage Inspector */}
          <div className="lg:col-span-7">
            <div className={`glass-card rounded-3xl p-8 sm:p-10 border transition-all duration-500 relative overflow-hidden ${currentStage.borderColor}/40`}>
              
              {/* Background Glow matching stage color */}
              <div className={`absolute top-0 right-0 w-72 h-72 ${currentStage.bgLight} blur-3xl rounded-full pointer-events-none opacity-50`} />

              <div className="relative z-10 space-y-8">
                
                {/* Stage Header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${currentStage.bgLight} ${currentStage.color} border border-current/20`}>
                        FASE {currentStage.stage}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">Estrategia Activa</span>
                    </div>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                      {currentStage.icon}
                      <span>{currentStage.name}</span>
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-base leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Tactics Checklist */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">TÁCTICAS DE OPTIMIZACIÓN IMPLEMENTADAS</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {currentStage.tactics.map((tactic, i) => (
                      <div key={i} className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 flex items-start gap-3 group/item hover:border-slate-700 transition-colors">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${currentStage.color}`} />
                        <span className="text-xs font-medium text-slate-200 group-hover/item:text-white transition-colors">{tactic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* KPI Highlight */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">MÉTRICA CLAVE AUDITADA (KPI)</div>
                    <div className="text-sm font-bold text-white">{currentStage.kpi}</div>
                  </div>
                  <button
                    onClick={onOpenContact}
                    className={`px-6 py-2.5 rounded-full bg-slate-900 border text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 ${currentStage.borderColor} ${currentStage.color}`}
                  >
                    <span>Auditar esta Fase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
