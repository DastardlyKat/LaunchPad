import React, { useState } from 'react';

export default function Header({ onOpenConsole, onOpenSignIn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0e19]/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_1px_16px_rgba(183,109,255,0.08)]">
      <div className="h-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-4 shrink-0">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-lg bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(168,85,247,0.3)]">
              <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg text-on-surface font-bold tracking-tight">LaunchPad</span>
              <span className="font-label-mono-sm text-[10px] text-secondary tracking-widest uppercase">Orbital Cloud</span>
            </div>
          </a>

          {/* Operational Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/60 border border-outline-variant/30 shadow-[0_0_12px_rgba(183,109,255,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-mono-sm text-[11px] text-on-surface-variant font-medium tracking-wider">
              ORBITAL V3.4 ONLINE
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#features"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide"
          >
            Features
          </a>
          <a
            href="#metrics"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide"
          >
            Architecture
          </a>
          <a
            href="#console-preview"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide"
          >
            Mission Telemetry
          </a>
          <a
            href="#pricing"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide"
          >
            Pricing
          </a>
          <a
            href="#docs"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide"
          >
            Docs
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSignIn}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-surface-container/60 hover:bg-surface-container-high text-on-surface text-sm font-medium transition-all border border-outline-variant/20 hover:border-outline-variant/40"
          >
            Sign In
          </button>
          
          <button
            onClick={onOpenConsole}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-container to-deep-thruster text-white text-sm font-semibold hover:brightness-110 active:scale-95 transition-all shadow-[0_0_24px_rgba(183,109,255,0.45)] border border-white/20"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>Launch Console</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high/60 border border-outline-variant/30 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-mono-sm text-[11px] text-on-surface-variant font-medium">
              ORBITAL V3.4 ONLINE
            </span>
          </div>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface py-2 font-medium border-b border-outline-variant/10"
          >
            Features
          </a>
          <a
            href="#metrics"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface py-2 font-medium border-b border-outline-variant/10"
          >
            Architecture
          </a>
          <a
            href="#console-preview"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface py-2 font-medium border-b border-outline-variant/10"
          >
            Mission Telemetry
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface py-2 font-medium border-b border-outline-variant/10"
          >
            Pricing
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="w-full py-2.5 rounded-lg bg-surface-container text-on-surface text-center font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsole();
              }}
              className="w-full py-2.5 rounded-lg bg-primary-container text-on-primary-container font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(183,109,255,0.4)]"
            >
              <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
              Launch Console
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
