import React from 'react';

export default function Hero({ onRequestDemo }) {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 pt-12 md:pt-16 pb-8 md:pb-12 flex flex-col items-center text-center relative">
      {/* High-Tech Micro-Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/80 border border-primary/30 backdrop-blur-md shadow-[0_0_20px_rgba(183,109,255,0.25)] mb-6 group transition-all duration-300 hover:bg-surface-container-highest cursor-default">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="font-label-mono-sm text-[11px] sm:text-xs text-primary font-semibold tracking-widest uppercase">
          🚀 NEXT-GEN SATELLITE & PAYLOAD ORCHESTRATION PLATFORM
        </span>
      </div>

      {/* Hero Headline */}
      <h1 className="font-display-hero text-3xl sm:text-5xl md:text-6xl text-on-surface max-w-5xl tracking-tight leading-[1.1] mb-6 font-bold">
        Deploy Mission Software <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-primary via-tertiary-fixed to-secondary bg-clip-text text-transparent">
          to Orbit
        </span>{' '}
        at the{' '}
        <span className="bg-gradient-to-r from-secondary via-secondary-fixed-dim to-primary bg-clip-text text-transparent">
          Speed of Light
        </span>
      </h1>

      {/* Subheadline */}
      <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-3xl mb-10 leading-relaxed">
        LaunchPad provides autonomous telemetry pipelines, edge computing runtimes for LEO constellations, and sub-millisecond ground station synchronization across 60+ orbital relay arrays.
      </p>

      {/* Action Group */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
        <a
          href="#pricing"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-primary-container to-deep-thruster text-white text-base font-bold hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_32px_rgba(183,109,255,0.45)] group border border-white/20"
        >
          <span>Get Started</span>
          <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>

        <button
          onClick={onRequestDemo}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-on-surface hover:bg-surface-container-high hover:border-secondary/40 transition-all duration-300 text-base font-medium shadow-[0_0_16px_rgba(255,255,255,0.04)] group"
        >
          <span className="material-symbols-outlined text-[20px] text-secondary group-hover:rotate-12 transition-transform">
            terminal
          </span>
          <span>Request Flight Demo</span>
        </button>
      </div>

      {/* Trust Badges */}
      <div className="w-full flex flex-col items-center gap-4 pt-4 pb-6">
        <span className="font-badge-caps text-[11px] uppercase tracking-widest text-outline">
          POWERING ORBITAL MISSIONS FOR INDUSTRY PIONEERS
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-12 gap-y-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[26px]">satellite_alt</span>
            <span className="font-headline text-lg sm:text-xl text-on-surface font-semibold tracking-tighter">AeroSync</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-[26px]">grid_4x4</span>
            <span className="font-headline text-lg sm:text-xl text-on-surface font-semibold tracking-tighter">StarGrid</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-tertiary text-[26px]">stream</span>
            <span className="font-headline text-lg sm:text-xl text-on-surface font-semibold tracking-tighter">NovaCore Space</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-secondary-fixed text-[26px]">explore</span>
            <span className="font-headline text-lg sm:text-xl text-on-surface font-semibold tracking-tighter">Celestial Dynamics</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary-container text-[26px]">rocket</span>
            <span className="font-headline text-lg sm:text-xl text-on-surface font-semibold tracking-tighter">OrbitalX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
