import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight, Sparkles, HelpCircle, BarChart3, RefreshCw } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: () => void;
}

export const InteractiveRoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContact }) => {
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(25000);
  const [conversionRate, setConversionRate] = useState<number>(1.5);
  const [averageTicket, setAverageTicket] = useState<number>(150);
  const [marketingBudget, setMarketingBudget] = useState<number>(2000);

  // Calculations
  const currentMonthlyCustomers = Math.round((monthlyTraffic * (conversionRate / 100)));
  const currentMonthlyRevenue = currentMonthlyCustomers * averageTicket;

  // Hyperflow Projections (Optimized Speed + AI Ads Funnel)
  // Assuming traffic increases by 40% due to SEO/Ads, and conversion rate increases by 1.8x
  const projectedTraffic = Math.round(monthlyTraffic * 1.4);
  const projectedConversionRate = Number((conversionRate * 1.8).toFixed(1));
  const projectedMonthlyCustomers = Math.round((projectedTraffic * (projectedConversionRate / 100)));
  const projectedMonthlyRevenue = projectedMonthlyCustomers * averageTicket;

  const monthlyNetGrowth = projectedMonthlyRevenue - currentMonthlyRevenue;
  const estimatedRoi = marketingBudget > 0 ? Math.round((monthlyNetGrowth / marketingBudget) * 100) : 0;

  const resetValues = () => {
    setMonthlyTraffic(25000);
    setConversionRate(1.5);
    setAverageTicket(150);
    setMarketingBudget(2000);
  };

  return (
    <section id="roi-calculator" className="py-24 bg-slate-950 relative overflow-hidden bg-dots-pattern">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-fuchsia-400 uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>SIMULADOR FINANCIERO INTERACTIVO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calcula el <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-indigo-400">Impacto Real en tu Facturación</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Ajusta las métricas actuales de tu negocio y descubre cuánto estás dejando de ganar por no tener una web optimizada y un embudo de marketing de alta conversión.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Sliders */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl space-y-8 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="text-lg font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-400" />
                <span>Parámetros Actuales de tu Negocio</span>
              </div>
              <button 
                onClick={resetValues}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                title="Restablecer valores"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>

            <div className="space-y-8 flex-1">
              {/* Slider 1: Tráfico Mensual */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    Tráfico Mensual Estimado
                    <span title="Número de visitantes únicos mensuales a tu web" className="cursor-help text-slate-500 hover:text-slate-300"><HelpCircle className="w-3.5 h-3.5" /></span>
                  </span>
                  <span className="font-mono font-bold text-cyan-400 text-base">
                    {monthlyTraffic.toLocaleString()} visitas
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="200000"
                  step="1000"
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1K</span>
                  <span>50K</span>
                  <span>100K</span>
                  <span>200K+</span>
                </div>
              </div>

              {/* Slider 2: Tasa de Conversión */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    Tasa de Conversión Actual
                    <span title="Porcentaje de visitors que compran o solicitan presupuesto" className="cursor-help text-slate-500 hover:text-slate-300"><HelpCircle className="w-3.5 h-3.5" /></span>
                  </span>
                  <span className="font-mono font-bold text-fuchsia-400 text-base">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="5.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0.1%</span>
                  <span>1.5%</span>
                  <span>3.0%</span>
                  <span>5.0%</span>
                </div>
              </div>

              {/* Slider 3: Ticket Promedio */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    Ticket Promedio por Cliente
                    <span title="Gasto promedio de cada cliente en tu negocio" className="cursor-help text-slate-500 hover:text-slate-300"><HelpCircle className="w-3.5 h-3.5" /></span>
                  </span>
                  <span className="font-mono font-bold text-emerald-400 text-base">
                    ${averageTicket.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$50</span>
                  <span>$1,000</span>
                  <span>$2,000</span>
                  <span>$3,000+</span>
                </div>
              </div>

              {/* Slider 4: Presupuesto Mensual de Marketing */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    Presupuesto Mensual de Marketing
                    <span title="Inversión publicitaria mensual estimada" className="cursor-help text-slate-500 hover:text-slate-300"><HelpCircle className="w-3.5 h-3.5" /></span>
                  </span>
                  <span className="font-mono font-bold text-amber-400 text-base">
                    ${marketingBudget.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="500"
                  value={marketingBudget}
                  onChange={(e) => setMarketingBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$500</span>
                  <span>$5,000</span>
                  <span>$10,000</span>
                  <span>$15,000+</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-fuchsia-400 shrink-0 animate-spin-slow" />
              <span>
                Los cálculos se basan en optimización de velocidad de carga (que reduce rebote un 35%) y embudos de retargeting de alta conversión.
              </span>
            </div>
          </div>

          {/* Right Column: Projections & ROI Results */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-10 border border-fuchsia-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-600/10 via-indigo-600/10 to-slate-950 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              
              <div className="border-b border-slate-800 pb-4">
                <div className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-1">PROYECCIÓN HYPERFLOW STUDIO</div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">Tu Potencial de Crecimiento</h3>
              </div>

              {/* Comparison Boxes */}
              <div className="space-y-4">
                
                {/* Current State */}
                <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Facturación Mensual Actual</div>
                  <div className="text-2xl font-mono font-bold text-slate-300">
                    ${currentMonthlyRevenue.toLocaleString()} <span className="text-xs font-normal text-slate-500">USD/mes</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Con {currentMonthlyCustomers} clientes al mes ({conversionRate}% conv.)
                  </div>
                </div>

                {/* Projected State */}
                <div className="bg-gradient-to-r from-indigo-950/80 via-fuchsia-950/80 to-slate-950 p-5 rounded-2xl border border-fuchsia-500/40 space-y-1 shadow-lg shadow-fuchsia-500/5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-fuchsia-300 font-bold">Facturación Proyectada</span>
                    <span className="text-[10px] bg-fuchsia-500/20 text-fuchsia-300 px-2 py-0.5 rounded-full font-bold animate-pulse">OPTIMIZADO</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-mono font-extrabold text-white">
                    ${projectedMonthlyRevenue.toLocaleString()} <span className="text-xs font-normal text-fuchsia-300">USD/mes</span>
                  </div>
                  <div className="text-[11px] text-slate-300 flex items-center gap-1 pt-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{projectedMonthlyCustomers} clientes estimados ({projectedConversionRate}% conv.)</span>
                  </div>
                </div>

              </div>

              {/* Net Impact & ROI Highlight */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Crecimiento Neto</div>
                  <div className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">
                    +${monthlyNetGrowth.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500">Ingreso Adicional / mes</div>
                </div>

                <div className="space-y-1 border-l border-slate-800 pl-4">
                  <div className="text-xs text-slate-400 uppercase font-semibold">ROI Estimado</div>
                  <div className="text-2xl sm:text-3xl font-mono font-black text-cyan-400">
                    {estimatedRoi}%
                  </div>
                  <div className="text-[10px] text-slate-500">Retorno sobre Inversión</div>
                </div>
              </div>

            </div>

            {/* Action CTA inside calculator */}
            <div className="relative z-10 pt-8 mt-8 border-t border-slate-800">
              <button
                onClick={onOpenContact}
                className="w-full py-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 font-bold text-sm text-white shadow-xl shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <DollarSign className="w-4 h-4" />
                <span>RECLAMAR ESTE CRECIMIENTO AHORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-3">
                Sesión de estrategia gratuita. Sin compromiso.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
