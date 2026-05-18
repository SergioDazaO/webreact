import React, { useState, useEffect } from 'react';
import { TrendingUp, Code, Zap, Sparkles, Cpu, Globe, Rocket, ShieldCheck } from 'lucide-react';

export const FloatingGraphics: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [interactiveClicks, setInteractiveClicks] = useState<number>(0);
  const [activeNotification, setActiveNotification] = useState<string | null>(
    "🚀 Tip: Haz clic en cualquier parte para generar destellos de energía"
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveNotification(null);
    }, 8000);
    return () => clearTimeout(timer);
  }, [interactiveClicks]);

  const handleScreenClick = () => {
    setInteractiveClicks(prev => prev + 1);
    const messages = [
      "⚡ ¡Impulso de rendimiento web activado!",
      "🔥 Algoritmo de conversión optimizado al +340%",
      "🚀 Desplegando nodo en la nube ultrarrápida",
      "📈 Campaña de Ads escalando con IA predictiva",
      "✨ SEO Técnico indexado en tiempo récord"
    ];
    setActiveNotification(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-10"
      onClick={handleScreenClick}
    >
      {/* Interactive Click Catcher (Invisible but catches clicks when no button is pressed) */}
      <div className="absolute inset-0 pointer-events-auto opacity-0" onClick={handleScreenClick} />

      {/* Ambient Animated Glowing Orbs */}
      <div 
        className="absolute top-1/4 left-10 w-[450px] h-[450px] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse-glow pointer-events-none"
        style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
      />
      <div 
        className="absolute top-2/3 right-10 w-[500px] h-[500px] rounded-full bg-fuchsia-600/15 blur-[140px] animate-pulse-glow pointer-events-none"
        style={{ 
          animationDelay: '2s',
          transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)` 
        }}
      />
      <div 
        className="absolute top-1/2 left-1/3 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-glow pointer-events-none"
        style={{ 
          animationDelay: '1s',
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 30}px)` 
        }}
      />

      {/* Floating Dynamic Notification Banner */}
      {activeNotification && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce pointer-events-auto">
          <div className="glass-panel px-5 py-3 rounded-2xl flex items-center gap-3 border border-indigo-500/40 shadow-lg shadow-indigo-500/20 text-sm font-medium text-indigo-200">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{activeNotification}</span>
            <button 
              onClick={() => setActiveNotification(null)}
              className="ml-2 text-slate-400 hover:text-white text-xs font-bold bg-slate-800/60 h-5 w-5 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* FLOATING SUPPORTING GRAPHICS (Move across screen & react to mouse parallax) */}
      
      {/* 1. Floating Live Traffic Chart */}
      <div 
        className="absolute top-[20%] right-[5%] w-64 glass-panel p-4 rounded-2xl animate-float shadow-2xl border-indigo-500/20 hidden lg:block pointer-events-auto hover:border-indigo-500/60 transition-all cursor-pointer group"
        style={{ transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)` }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <TrendingUp className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>TRÁFICO EN VIVO</span>
          </div>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">+284%</span>
        </div>
        <div className="h-16 flex items-end gap-1.5 pt-2 border-b border-slate-700/50 pb-1">
          {[35, 45, 25, 60, 50, 75, 65, 85, 95, 110, 130].map((height, i) => (
            <div key={i} className="flex-1 bg-slate-700/50 rounded-t group-hover:bg-slate-700 transition-colors duration-300 relative group/bar">
              <div 
                className="w-full bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-t transition-all duration-500 group-hover/bar:from-emerald-400 group-hover/bar:to-cyan-300"
                style={{ height: `${(height / 130) * 100}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2 text-[10px] text-slate-400 font-mono">
          <span>08:00 AM</span>
          <span className="text-indigo-300 font-bold group-hover:text-emerald-400 transition-colors">48.2K VISITANTES</span>
          <span>AHORA</span>
        </div>
      </div>

      {/* 2. Floating Code & Performance Widget */}
      <div 
        className="absolute top-[65%] left-[3%] w-72 glass-panel p-4 rounded-2xl animate-float-delayed shadow-2xl border-cyan-500/20 hidden xl:block pointer-events-auto hover:border-cyan-500/60 transition-all cursor-pointer group"
        style={{ transform: `translate(${mousePos.x * -45}px, ${mousePos.y * -25}px)` }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
            <Code className="w-4 h-4 animate-spin-slow" />
            <span>PERFORMANCE WEB</span>
          </div>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
        </div>
        <div className="bg-slate-950/80 p-2.5 rounded-xl font-mono text-[11px] text-slate-300 space-y-1 border border-slate-800">
          <div className="text-slate-500">// Lighthouse Score: 100/100</div>
          <div className="flex justify-between">
            <span className="text-cyan-400">const</span> <span className="text-yellow-300">loadTime</span> = <span className="text-emerald-400">"0.4s"</span>;
          </div>
          <div className="flex justify-between">
            <span className="text-cyan-400">const</span> <span className="text-yellow-300">seoRank</span> = <span className="text-emerald-400">"Top #1"</span>;
          </div>
          <div className="text-indigo-300 flex items-center gap-1 pt-1 border-t border-slate-800/80 mt-1">
            <Zap className="w-3 h-3 text-amber-400 animate-bounce" />
            <span>Optimizado para conversión extrema</span>
          </div>
        </div>
      </div>

      {/* 3. Floating Marketing Conversion Badge */}
      <div 
        className="absolute top-[45%] right-[8%] w-56 glass-panel p-3.5 rounded-2xl animate-float-reverse shadow-2xl border-fuchsia-500/20 hidden xl:block pointer-events-auto hover:border-fuchsia-500/60 transition-all cursor-pointer group"
        style={{ transform: `translate(${mousePos.x * 25}px, ${mousePos.y * -40}px)` }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Rocket className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">ROI Marketing</div>
            <div className="text-lg font-bold text-white tracking-tight flex items-center gap-1">
              4.8x <span className="text-xs font-normal text-emerald-400">Promedio</span>
            </div>
          </div>
        </div>
        <div className="mt-2.5 pt-2 border-t border-slate-700/40 flex items-center justify-between text-[11px] text-slate-300">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> Meta & Google Ads
          </span>
          <span className="font-semibold text-fuchsia-300">Escalando</span>
        </div>
      </div>

      {/* 4. Small Floating Tech Badges */}
      <div className="absolute top-[12%] left-[15%] glass-panel px-3.5 py-2 rounded-full animate-float shadow-lg border-white/10 hidden md:flex items-center gap-2 text-xs font-semibold text-slate-200 pointer-events-auto hover:scale-105 transition-transform cursor-pointer">
        <Cpu className="w-4 h-4 text-indigo-400 animate-spin-slow" />
        <span>Arquitectura React & Next.js</span>
      </div>

      <div className="absolute bottom-[15%] right-[18%] glass-panel px-3.5 py-2 rounded-full animate-float-reverse shadow-lg border-white/10 hidden md:flex items-center gap-2 text-xs font-semibold text-slate-200 pointer-events-auto hover:scale-105 transition-transform cursor-pointer">
        <Globe className="w-4 h-4 text-cyan-400 animate-pulse" />
        <span>Estrategia Omnicanal</span>
      </div>

      <div className="absolute top-[82%] left-[22%] glass-panel px-3.5 py-2 rounded-full animate-float shadow-lg border-white/10 hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-200 pointer-events-auto hover:scale-105 transition-transform cursor-pointer">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>Seguridad & SSL Avanzado</span>
      </div>
    </div>
  );
};
