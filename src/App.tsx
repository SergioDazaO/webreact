import { useState } from 'react';
import { FloatingGraphics } from './components/FloatingGraphics';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { InteractiveRoiCalculator } from './components/InteractiveRoiCalculator';
import { DynamicShowcase } from './components/DynamicShowcase';
import { MarketingFunnel } from './components/MarketingFunnel';
import { TestimonialsMarquee } from './components/TestimonialsMarquee';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('servicios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* 1. Global Floating Graphics & Animated Ambient Backgrounds */}
      <FloatingGraphics />

      {/* 2. Glassmorphism Sticky Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* 3. Hero Section with Interactive Terminal */}
      <Hero 
        onOpenContact={handleOpenContact} 
        onExploreServices={handleExploreServices} 
      />

      {/* 4. Interactive Services Showcase */}
      <Services onOpenContact={handleOpenContact} />

      {/* 5. Live Gamified ROI & Budget Calculator */}
      <InteractiveRoiCalculator onOpenContact={handleOpenContact} />

      {/* 6. Dynamic Case Studies Showcase with Filters */}
      <DynamicShowcase onOpenContact={handleOpenContact} />

      {/* 7. Interactive Marketing Funnel Diagram */}
      <MarketingFunnel onOpenContact={handleOpenContact} />

      {/* 8. Infinite Testimonials Marquee & Client Logos */}
      <TestimonialsMarquee onOpenContact={handleOpenContact} />

      {/* 9. Tech Stack Grid */}
      <TechStack />

      {/* 10. Futuristic Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* 11. Interactive Contact & Booking Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContact} 
      />
    </div>
  );
}
