import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, Calendar, Clock, User, Mail, Phone, Building, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['web']);
  const [budget, setBudget] = useState<string>('2000-5000');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl overflow-y-auto animate-fade-in">
      <div className="bg-slate-900 border border-white/10 rounded-3xl max-w-2xl w-full p-6 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
        >
          ✕
        </button>

        {!isSuccess ? (
          <div className="space-y-8">
            
            {/* Header */}
            <div className="space-y-2 text-center sm:text-left pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INICIAR PROYECTO // ASESORÍA VIP</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">Próximo Nivel</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Completa el formulario para agendar una sesión estratégica gratuita de 30 minutos con un arquitecto digital sénior.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Select Services */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  1. ¿Qué soluciones necesitas implementar? (Selecciona varias)
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'web', label: 'Desarrollo Web Ultra-Rápido', desc: 'React, Next.js, Headless' },
                    { id: 'marketing', label: 'Marketing Digital Ads', desc: 'Meta, Google, Embudos' },
                    { id: 'seo', label: 'SEO Técnico Avanzado', desc: 'Top #1 Google, Schema' },
                    { id: 'ai', label: 'Automatización & IA', desc: 'Chatbots, Zapier, CRM' }
                  ].map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                        selectedServices.includes(service.id)
                          ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                          : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm mb-1">{service.label}</div>
                      <div className="text-[10px] opacity-80 line-clamp-1">{service.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Budget */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  2. Presupuesto Mensual Estimado (USD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: '1000-2000', label: '$1k - $2k' },
                    { id: '2000-5000', label: '$2k - $5k' },
                    { id: '5000-10000', label: '$5k - $10k' },
                    { id: '10000+', label: '$10k+' }
                  ].map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBudget(b.id)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                        budget === b.id
                          ? 'bg-fuchsia-600/20 border-fuchsia-500 text-fuchsia-300 shadow-lg shadow-fuchsia-500/10'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="space-y-4 pt-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  3. Datos de Contacto & Empresa
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Tu Nombre Completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="Correo Electrónico Profesional"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Teléfono / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Building className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="Nombre de tu Empresa / Web"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <textarea
                  rows={3}
                  placeholder="Cuéntanos brevemente sobre tu negocio y tus objetivos principales..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 font-bold text-sm text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>PROCESANDO SOLICITUD & DISPONIBILIDAD...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SOLICITAR SESIÓN DE ESTRATEGIA AHORA</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Agenda Flexible
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" /> Respuesta en &lt; 2 horas
                </span>
              </div>

            </form>

          </div>
        ) : (
          /* Success Screen */
          <div className="py-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-3xl font-black text-white tracking-tight">¡Solicitud Recibida con Éxito!</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Hemos reservado un espacio prioritario para <strong className="text-white">{formData.name}</strong>. Un estratega sénior de HYPERFLOW se pondrá en contacto contigo por WhatsApp y correo en menos de 2 horas.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-md mx-auto text-left space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">RESUMEN DE TU SOLICITUD</div>
              <div className="text-xs text-slate-300 flex justify-between font-mono">
                <span className="text-slate-500">Empresa:</span> <span>{formData.company || 'No especificada'}</span>
              </div>
              <div className="text-xs text-slate-300 flex justify-between font-mono">
                <span className="text-slate-500">Servicios:</span> <span>{selectedServices.join(', ').toUpperCase()}</span>
              </div>
              <div className="text-xs text-slate-300 flex justify-between font-mono">
                <span className="text-slate-500">Presupuesto:</span> <span className="text-emerald-400 font-bold">${budget} USD</span>
              </div>
            </div>

            <button
              onClick={resetForm}
              className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors"
            >
              Volver a la página principal
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
