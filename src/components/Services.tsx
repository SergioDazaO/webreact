import React, { useState } from 'react';
import { Code, LineChart, Sparkles, CheckCircle2, ArrowRight, Search, Zap, Bot } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  metrics: string;
  metricsLabel: string;
  features: string[];
  technologies: string[];
  gradient: string;
}

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<string>('web');

  const services: Service[] = [
    {
      id: 'web',
      title: 'Desarrollo Web Ultra-Rápido',
      icon: <Code className="w-6 h-6" />,
      tagline: 'Arquitecturas Modernas & Headless',
      description: 'Construimos aplicaciones web ultrarrápidas con React, Next.js y Tailwind CSS. Diseñadas meticulosamente para cargar en milisegundos y maximizar la retención de usuarios.',
      metrics: '0.4s',
      metricsLabel: 'Tiempo Promedio de Carga',
      features: [
        'Arquitectura Headless & Jamstack',
        'Puntuación Perfecta en Google Lighthouse (100/100)',
        'Diseño Responsive y Mobile-First Extremo',
        'Animaciones Fluidas a 60 FPS sin lag',
        'Seguridad Avanzada & Certificados SSL Premium'
      ],
      technologies: ['React 19', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vite', 'GraphQL'],
      gradient: 'from-cyan-500 via-indigo-600 to-blue-600'
    },
    {
      id: 'marketing',
      title: 'Marketing Digital Disruptivo',
      icon: <LineChart className="w-6 h-6" />,
      tagline: 'Adquisición de Clientes & Embudos IA',
      description: 'Campañas de publicidad digital de alto impacto en Meta Ads, Google Ads y TikTok Ads. Utilizamos algoritmos predictivos y segmentación avanzada para multiplicar tu retorno de inversión.',
      metrics: '+480%',
      metricsLabel: 'ROAS Promedio Alcanzado',
      features: [
        'Segmentación Lookalike con Inteligencia Artificial',
        'Embudos de Conversión Automatizados (Funnels)',
        'Estrategia de Retargeting Omnicanal Agresiva',
        'Creatividades Dinámicas y Copywriting Persuasivo',
        'Dashboards de Rendimiento en Tiempo Real'
      ],
      technologies: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Google Analytics 4', 'Looker Studio', 'Pixel AI'],
      gradient: 'from-fuchsia-600 via-pink-600 to-indigo-600'
    },
    {
      id: 'seo',
      title: 'SEO Técnico & Autoridad',
      icon: <Search className="w-6 h-6" />,
      tagline: 'Dominación Orgánica en Buscadores',
      description: 'Posicionamos tu negocio en el Top #1 de Google mediante optimización técnica profunda, estructura semántica perfecta y una estrategia de contenidos basada en intención de búsqueda.',
      metrics: 'Top #3',
      metricsLabel: 'Posicionamiento en 90 Días',
      features: [
        'Auditoría Técnica y Corrección de Core Web Vitals',
        'Inyección de Microdatos Schema.org Avanzados',
        'Estrategia de Linkbuilding de Alta Autoridad',
        'Optimización de Intención de Búsqueda con IA',
        'Eliminación de Canibalización de Palabras Clave'
      ],
      technologies: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Schema Markup', 'Google Search Console'],
      gradient: 'from-emerald-500 via-teal-600 to-cyan-600'
    },
    {
      id: 'ai',
      title: 'Automatización & IA',
      icon: <Bot className="w-6 h-6" />,
      tagline: 'Sistemas Inteligentes 24/7',
      description: 'Conectamos tu web y tus campañas con agentes de Inteligencia Artificial y flujos de trabajo automatizados para atender clientes, cualificar leads y cerrar ventas automáticamente.',
      metrics: '24/7',
      metricsLabel: 'Operación Automatizada',
      features: [
        'Chatbots Inteligentes con ChatGPT / Claude AI',
        'Integración Automatizada con Zapier & Make',
        'Sincronización Bidireccional con tu CRM',
        'Cualificación Automática de Leads en Tiempo Real',
        'Ahorro del 70% en Tareas Operativas Manuales'
      ],
      technologies: ['OpenAI API', 'Zapier', 'Make.com', 'HubSpot / Salesforce', 'Webhooks'],
      gradient: 'from-amber-500 via-orange-600 to-rose-600'
    }
  ];

  const currentService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section id="servicios" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NUESTRO ECOSISTEMA DE SOLUCIONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Servicios Diseñados para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Escalar Sin Límites</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Selecciona una categoría para explorar la tecnología, métricas clave y el impacto directo en tu cuenta de resultados.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                activeTab === service.id
                  ? 'bg-slate-800/90 border-indigo-500 shadow-xl shadow-indigo-500/10 scale-105'
                  : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
              }`}
            >
              {/* Active Glow Accent */}
              {activeTab === service.id && (
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
              )}

              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                  activeTab === service.id
                    ? `bg-gradient-to-tr ${service.gradient} text-white shadow-lg`
                    : 'bg-slate-900 text-slate-400 group-hover:text-white'
                }`}>
                  {service.icon}
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  activeTab === service.id ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-900 text-slate-500'
                }`}>
                  {service.id.toUpperCase()}
                </span>
              </div>

              <h3 className={`font-bold text-base mb-1 transition-colors ${
                activeTab === service.id ? 'text-white' : 'text-slate-300 group-hover:text-white'
              }`}>
                {service.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-1">{service.tagline}</p>
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Display Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${currentService.gradient} opacity-5 pointer-events-none`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3 py-1 rounded-lg">
                <Zap className="w-3.5 h-3.5" />
                <span>{currentService.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {currentService.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {currentService.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">BENEFICIOS CLAVE DEL SERVICIO</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badge List */}
              <div className="pt-6 border-t border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">TECNOLOGÍAS & HERRAMIENTAS EMPLEADAS</div>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-semibold text-slate-300 hover:border-indigo-500/50 hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Metrics & Interactive Visualizer Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Giant Metric Card */}
              <div className="glass-card p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-tr ${currentService.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative z-10 space-y-2">
                  <div className="text-6xl sm:text-7xl font-black text-white tracking-tight flex items-center justify-center gap-2">
                    {currentService.metrics}
                  </div>
                  <div className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
                    {currentService.metricsLabel}
                  </div>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto pt-2">
                    Métricas auditadas y verificadas en proyectos reales implementados durante el último año.
                  </p>
                </div>
              </div>

              {/* Action Banner */}
              <div className="bg-gradient-to-r from-slate-950 to-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <div className="text-sm font-bold text-white mb-1">¿Listo para implementar {currentService.title.toLowerCase()}?</div>
                  <div className="text-xs text-slate-400">Solicita una propuesta técnica personalizada.</div>
                </div>
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 font-bold text-xs text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Cotizar Servicio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
