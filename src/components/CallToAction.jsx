import React from 'react';

export default function CallToAction({ onGetStarted, onBookBriefing }) {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 pt-4 pb-20 mb-8 relative">
      <div className="rounded-2xl bg-gradient-to-b from-surface-container to-surface-container-lowest border border-outline-variant/30 p-8 sm:p-16 text-center relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
        {/* Vortex Light Accent in Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto gap-4">
          <span className="font-label-mono-sm text-xs text-secondary uppercase tracking-widest font-mono font-semibold">
            FLIGHT READINESS WINDOW OPEN
          </span>
          <h2 className="font-display-hero text-2xl sm:text-4xl md:text-5xl text-on-surface font-bold tracking-tight">
            Ready to take your software to orbit?
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Join over 60 aerospace teams deploying real-time autonomous satellite logic with LaunchPad today.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-primary-container to-deep-thruster text-white font-bold text-sm hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_32px_rgba(183,109,255,0.45)] border border-white/20"
            >
              <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
              <span>Get Started Now</span>
            </button>
            <button
              onClick={onBookBriefing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-on-surface hover:bg-surface-bright transition-all duration-300 font-semibold text-sm"
            >
              <span>Book a Mission Briefing</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
