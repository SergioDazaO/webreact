import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['inicio', 'servicios', 'roi-calculator', 'portafolio', 'embudo', 'testimonios'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-indigo-500/5' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection('inicio')}
          className="flex items-center gap-2.5 cursor-pointer group"
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
              Agencia Dinámica 3.0
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-inner">
          {[
            { id: 'inicio', label: 'Inicio' },
            { id: 'servicios', label: 'Servicios' },
            { id: 'roi-calculator', label: 'Calculadora ROI' },
            { id: 'portafolio', label: 'Casos de Éxito' },
            { id: 'embudo', label: 'Estrategia' },
            { id: 'testimonios', label: 'Clientes' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right CTA Button & Live Badge */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-[11px] font-medium text-emerald-300 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Cupos Q1 Disponibles</span>
          </div>

          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 p-[2px] font-bold text-xs text-white shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin-slow" />
              <span>INICIAR PROYECTO</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 rounded-full bg-indigo-600 text-[11px] font-bold text-white shadow-lg shadow-indigo-600/30"
          >
            Contacto
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 space-y-4 shadow-2xl animate-fade-in">
          {[
            { id: 'inicio', label: 'Inicio' },
            { id: 'servicios', label: 'Servicios Web & Marketing' },
            { id: 'roi-calculator', label: 'Calculadora de Presupuesto & ROI' },
            { id: 'portafolio', label: 'Casos de Éxito' },
            { id: 'embudo', label: 'El Embudo de Conversión' },
            { id: 'testimonios', label: 'Opiniones de Clientes' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-3 rounded-xl bg-slate-900/60 border border-white/5 text-sm font-semibold text-slate-200 hover:bg-indigo-600/20 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 text-indigo-400" />
            </button>
          ))}
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>HABLAR CON UN ESTRATEGA</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
