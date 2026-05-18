import React, { useState } from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';

interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'marketing' | 'ai';
  description: string;
  stat: string;
  icon: string;
}

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'marketing' | 'ai'>('all');

  const technologies: Technology[] = [
    {
      name: 'React 19 & Next.js',
      category: 'frontend',
      description: 'Arquitectura basada en componentes de servidor para renderizado instantáneo y un SEO técnico insuperable.',
      stat: '0.3s FCP',
      icon: '⚛️'
    },
    {
      name: 'Tailwind CSS v4',
      category: 'frontend',
      description: 'Estilizado atómico ultra-optimizado que elimina el CSS no utilizado para un peso de página mínimo.',
      stat: '100% Responsive',
      icon: '🎨'
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      description: 'Tipado estático avanzado para eliminar errores en tiempo de ejecución y asegurar estabilidad empresarial.',
      stat: '0 Bugs Críticos',
      icon: '📘'
    },
    {
      name: 'Node.js & Python',
      category: 'backend',
      description: 'Microservicios escalables y automatización de tareas complejas para procesar miles de solicitudes por segundo.',
      stat: '10k Req/sec',
      icon: '🟢'
    },
    {
      name: 'GraphQL & REST APIs',
      category: 'backend',
      description: 'Consultas de datos eficientes para conectar inventarios, CRMs y bases de datos sin cuellos de botella.',
      stat: 'Sub-100ms',
      icon: '🔗'
    },
    {
      name: 'Meta CAPI & Google Ads',
      category: 'marketing',
      description: 'Seguimiento de conversiones del lado del servidor para evadir bloqueadores de anuncios y entrenar algoritmos con datos limpios.',
      stat: 'Atribución 99%',
      icon: '📈'
    },
    {
      name: 'Google Analytics 4 & Looker',
      category: 'marketing',
      description: 'Analítica predictiva y cuadros de mando personalizados para toma de decisiones basada en datos reales.',
      stat: 'Real-time ROI',
      icon: '📊'
    },
    {
      name: 'OpenAI & Claude AI',
      category: 'ai',
      description: 'Integración de modelos de lenguaje avanzados para atención al cliente 24/7 y cualificación de prospectos automatizada.',
      stat: 'Atención 24/7',
      icon: '🤖'
    },
    {
      name: 'Zapier & Make Automations',
      category: 'ai',
      description: 'Orquestación de flujos de trabajo automatizados entre más de 5,000 aplicaciones empresariales.',
      stat: '70% Ahorro Tiempo',
      icon: '⚡'
    }
  ];

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden bg-grid-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>EL STACK TECNOLÓGICO DE HYPERFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tecnología de Vanguardia para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">Rendimiento Extremo</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No dependemos de plantillas pesadas ni plugins inestables. Cada línea de código y cada configuración de pídora publicitaria está diseñada para la máxima velocidad y conversión.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'Todas las Tecnologías' },
              { id: 'frontend', label: 'Frontend & UI' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'marketing', label: 'Marketing & Tracking' },
              { id: 'ai', label: 'IA & Automatización' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((tech, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 space-y-4 group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2.5 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors">{tech.name}</h3>
                    <span className="text-[10px] bg-slate-900 text-slate-400 px-2.5 py-0.5 rounded-full font-semibold border border-slate-800/80 uppercase">
                      {tech.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  {tech.stat}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee Note */}
        <div className="mt-12 text-center bg-slate-900/60 p-6 rounded-2xl border border-slate-800 max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-300">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>Todos nuestros desarrollos incluyen garantía de código limpio, auditoría de seguridad y capacitación para tu equipo.</span>
        </div>

      </div>
    </section>
  );
};
