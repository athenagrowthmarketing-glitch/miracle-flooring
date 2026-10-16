import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProofStrip } from './components/ProofStrip.tsx';
import { PositioningNarrative } from './components/PositioningNarrative.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Process } from './components/Process.tsx';
import { RefinishingFocus } from './components/RefinishingFocus.tsx';
import { Reviews } from './components/Reviews.tsx';
import { ServiceAreas } from './components/ServiceAreas.tsx';
import { EstimateSection } from './components/EstimateSection.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileActionBar } from './components/MobileActionBar.tsx';
import { LegalModals } from './components/LegalModals.tsx';

export function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenEstimate = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const element = document.getElementById('estimate-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-warmWhite text-brand-charcoal pb-16 lg:pb-0">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenEstimate={handleOpenEstimate} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Hero Section */}
        <Hero onOpenEstimate={() => handleOpenEstimate()} />

        {/* 02. Trust & Craftsmanship Proof Strip */}
        <ProofStrip />

        {/* 03. Editorial Brand Positioning */}
        <PositioningNarrative onOpenEstimate={() => handleOpenEstimate()} />

        {/* 04. Core Flooring Services (2x2 High Craft Grid) */}
        <Services onSelectService={(serviceTitle) => handleOpenEstimate(serviceTitle)} />

        {/* 05. Featured Project Portfolio */}
        <Portfolio onOpenEstimate={() => handleOpenEstimate()} />

        {/* 07. The 4-Step Miracle Craftsmanship Standard (Process) */}
        <Process />

        {/* 08. Refinishing vs. Replacement Educational Focus */}
        <RefinishingFocus onOpenEstimate={() => handleOpenEstimate('Dust-Controlled Refinishing')} />

        {/* 09. Verified Local Client Reviews */}
        <Reviews />

        {/* 10. Geographic Service Areas (Marietta & Metro Atlanta) */}
        <ServiceAreas onOpenEstimate={() => handleOpenEstimate()} />

        {/* 11. Final Conversion In-Home Estimate Section */}
        <EstimateSection initialService={selectedService} />
      </main>

      {/* 12. Complete Footer with Mandatory Athena Credit & Legal Links */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Mobile Sticky Bottom Action Bar (Click-to-call & Fast Estimate) */}
      <MobileActionBar onOpenEstimate={() => handleOpenEstimate()} />

      {/* Privacy & Terms Modals */}
      <LegalModals
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
