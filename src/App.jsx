import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConsolePreview from './components/ConsolePreview';
import Features from './components/Features';
import ArchitectureMetrics from './components/ArchitectureMetrics';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FlightDemoModal from './components/FlightDemoModal';
import SignInModal from './components/SignInModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleOpenSignIn = (tier = '') => {
    setSelectedTier(tier);
    setIsSignInModalOpen(true);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Dynamic Ambient Cosmic Gradients */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-primary-container/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed top-[800px] -left-60 w-[800px] h-[800px] bg-secondary-container/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="fixed top-[2200px] -right-60 w-[900px] h-[900px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      {/* Modular Navigation Bar */}
      <Header
        onOpenConsole={handleOpenDemo}
        onOpenSignIn={() => handleOpenSignIn()}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        {/* Hero Section */}
        <Hero onRequestDemo={handleOpenDemo} />

        {/* Live HUD Ephemeris & Mission Control Viewport */}
        <div className="px-4 sm:px-8 pb-12">
          <ConsolePreview onOpenFullConsole={handleOpenDemo} />
        </div>

        {/* 3-Column Platform Capabilities */}
        <Features />

        {/* Real-time Telemetry Metrics */}
        <ArchitectureMetrics />

        {/* Transparent Orbital Pricing Tiers */}
        <Pricing onSelectTier={(tier) => handleOpenSignIn(tier)} />

        {/* Flight Readiness CTA */}
        <CallToAction
          onGetStarted={() => handleOpenSignIn('LEO Constellation')}
          onBookBriefing={handleOpenDemo}
        />
      </main>

      {/* Modular Footer */}
      <Footer />

      {/* Interactive Modals */}
      <FlightDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        selectedTier={selectedTier}
      />
    </div>
  );
}
