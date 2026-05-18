import React, { useState, useEffect } from 'react';
import { Rocket, Sparkles, Terminal, ArrowRight, Play, CheckCircle2, Zap, BarChart, ShieldAlert } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  const words = [
    "Webs de Alto Rendimiento ⚡", 
    "Marketing Disruptivo 🚀", 
    "Embudos de Conversión 📈", 
    "Sistemas Escalables IA 🤖", 
    "SEO Técnico Avanzado 🔍"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "// HYPERFLOW Core v3.4.2 inicializado...",
    "// Estado del servidor: 100% Óptimo",
    "// Esperando comando de optimización..."
  ]);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const runSimulation = (type: 'speed' | 'ads' | 'seo') => {
    if (isSimulating) return;
    setIsSimulating(true);

    if (type === 'speed') {
      setTerminalLogs(prev => [...prev, "> Ejecutando optimización de Next-Gen Web Vitals..."]);
      setTimeout(() => setTerminalLogs(prev => [...prev, "✓ Compresión Brotli & WebP activada. Tiempo de carga: 0.38s"]), 800);
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, "★ ¡Lighthouse Score: 100/100 alcanzado exitosamente!"]);
        setIsSimulating(false);
      }, 1600);
    } else if (type === 'ads') {
      setTerminalLogs(prev => [...prev, "> Desplegando campaña omnicanal con IA predictiva..."]);
      setTimeout(() => setTerminalLogs(prev => [...prev, "✓ Segmentación lookalike al 1% configurada en Meta & Google"]), 800);
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, "★ Proyección de ROAS inicial: 4.8x - 6.2x. ¡Campaña activa!"]);
        setIsSimulating(false);
      }, 1600);
    } else {
      setTerminalLogs(prev => [...prev, "> Analizando estructura semántica y backlinks..."]);
      setTimeout(() => setTerminalLogs(prev => [...prev, "✓ 45 microdatos Schema.org inyectados. Core Vitals en verde."]), 800);
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, "★ Indexación prioritaria solicitada. Estimación: Top 3 en 30 días."]);
        setIsSimulating(false);
      }, 1600);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950 bg-grid-pattern">
      {/* Radial Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-900 pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md shadow-xl animate-bounce-side">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
              <span className="text-xs font-bold tracking-wide text-indigo-300 uppercase">
                AGENCIA DIGITAL DE ALTO RENDIMIENTO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Transformamos tu Visión en{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 animate-gradient h-20 sm:h-24">
                {words[currentWordIndex]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              No hacemos webs estáticas ni campañas del montón. Fusionamos <strong className="text-white font-semibold">ingeniería de software de vanguardia</strong> con <strong className="text-cyan-400 font-semibold">estrategias de marketing agresivas</strong> para disparar tu facturación.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 font-bold text-sm text-white shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                <span>DESPEGAR MI NEGOCIO AHORA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-4 rounded-full glass-card border border-white/10 hover:border-white/30 font-semibold text-sm text-slate-200 hover:text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explorar Soluciones</span>
                <Play className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Badges / Stats Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1">
                  +340% <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
                </div>
                <div className="text-xs text-slate-400 font-medium">Aumento Conversión</div>
              </div>
              <div className="space-y-1 border-l border-slate-800 pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1">
                  0.4s <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-xs text-slate-400 font-medium">Velocidad Promedio</div>
              </div>
              <div className="space-y-1 border-l border-slate-800 pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1">
                  50M+ <BarChart className="w-5 h-5 text-fuchsia-400" />
                </div>
                <div className="text-xs text-slate-400 font-medium">Tráfico Generado</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Audit / Terminal Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500 pointer-events-none" />

            <div className="relative glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl space-y-6 backdrop-blur-2xl">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">hyperflow-interactive-engine.ts</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800 text-[10px] text-cyan-400 font-mono">
                  <Terminal className="w-3 h-3 animate-pulse" />
                  <span>SIMULADOR EN VIVO</span>
                </div>
              </div>

              {/* Terminal Screen / Logs */}
              <div className="bg-slate-950 rounded-2xl p-4 font-mono text-xs space-y-2.5 min-h-[180px] max-h-[220px] overflow-y-auto border border-slate-800 shadow-inner">
                {terminalLogs.map((log, index) => (
                  <div 
                    key={index} 
                    className={`transition-all duration-300 ${
                      log.startsWith('✓') ? 'text-emerald-400 font-semibold' :
                      log.startsWith('★') ? 'text-cyan-300 font-bold text-sm py-1' :
                      log.startsWith('>') ? 'text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    {log}
                  </div>
                ))}
                {isSimulating && (
                  <div className="flex items-center gap-2 text-indigo-400 animate-pulse pt-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                    <span>Procesando algoritmos de optimización...</span>
                  </div>
                )}
              </div>

              {/* Interactive Simulation Triggers */}
              <div>
                <div className="text-xs font-semibold text-slate-300 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-fuchsia-400" />
                  <span>HAZ CLIC PARA SIMULAR OPTIMIZACIÓN:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    onClick={() => runSimulation('speed')}
                    disabled={isSimulating}
                    className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 text-xs font-semibold flex flex-col items-center gap-1 transition-all disabled:opacity-50 group"
                  >
                    <Zap className="w-4 h-4 text-cyan-400 group-hover:scale-125 transition-transform" />
                    <span>Inyectar Velocidad</span>
                  </button>

                  <button
                    onClick={() => runSimulation('ads')}
                    disabled={isSimulating}
                    className="p-3 rounded-xl bg-slate-900/80 border border-fuchsia-500/30 hover:border-fuchsia-400 hover:bg-fuchsia-500/10 text-fuchsia-300 text-xs font-semibold flex flex-col items-center gap-1 transition-all disabled:opacity-50 group"
                  >
                    <BarChart className="w-4 h-4 text-fuchsia-400 group-hover:scale-125 transition-transform" />
                    <span>Simular Ads IA</span>
                  </button>

                  <button
                    onClick={() => runSimulation('seo')}
                    disabled={isSimulating}
                    className="p-3 rounded-xl bg-slate-900/80 border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/10 text-indigo-300 text-xs font-semibold flex flex-col items-center gap-1 transition-all disabled:opacity-50 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 group-hover:scale-125 transition-transform" />
                    <span>Auditoría SEO</span>
                  </button>
                </div>
              </div>

              {/* Guarantee Footer */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" /> 100% Garantía de Resultados
                </span>
                <span className="text-indigo-400 font-semibold hover:underline cursor-pointer" onClick={onOpenContact}>
                  Solicitar Auditoría Real →
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
