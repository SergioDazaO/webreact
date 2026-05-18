import React, { useState } from 'react';
import { Terminal, Sparkles, Send, CheckCircle2, Heart } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden pt-16 pb-12">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-600/10 via-fuchsia-600/10 to-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => scrollToSection('inicio')}
              className="flex items-center gap-2.5 cursor-pointer group w-max"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/30 group-hover:rotate-6 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                  <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-extrabold text-xl tracking-tighter text-white">
                  HYPERFLOW <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">//</span> STUDIO
                </div>
                <div className="text-[9px] font-mono text-slate-400 tracking-widest uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Agencia de Rendimiento Web & Marketing
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Ingeniería digital avanzada para empresas que buscan liderar sus sectores. No construimos webs, desarrollamos activos digitales de alta rentabilidad.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-slate-300">Sistemas 100% Online // Desplegando a Nivel Global</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navegación</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              {['Inicio', 'Servicios', 'Calculadora ROI', 'Casos de Éxito', 'Estrategia', 'Clientes'].map((link, i) => {
                const ids = ['inicio', 'servicios', 'roi-calculator', 'portafolio', 'embudo', 'testimonios'];
                return (
                  <li key={i}>
                    <button 
                      onClick={() => scrollToSection(ids[i])}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Soluciones</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-cyan-400 transition-colors">Desarrollo Web Headless</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-cyan-400 transition-colors">Campañas Meta & Google Ads</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-cyan-400 transition-colors">Posicionamiento SEO Técnico</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-cyan-400 transition-colors">Automatización & IA Bots</button></li>
              <li><button onClick={() => scrollToSection('roi-calculator')} className="hover:text-cyan-400 transition-colors">Auditoría de Conversión</button></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Boletín Técnico VIP</h4>
            <p className="text-xs text-slate-400">Recibe estrategias de crecimiento y tips de optimización web directamente en tu correo.</p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="tu@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button type="submit" className="absolute inset-y-0 right-0 pr-3 flex items-center text-cyan-400 hover:text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {subscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium animate-fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ¡Suscrito al boletín de crecimiento!
                </div>
              )}
            </form>

            <button
              onClick={onOpenContact}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Agendar Asesoría Directa</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} HYPERFLOW STUDIO. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Diseñado con pasión por la velocidad</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" />
            <span>y la conversión.</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacidad</span>
            <span className="hover:text-slate-400 cursor-pointer">Términos</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
