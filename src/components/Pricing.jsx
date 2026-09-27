import React, { useState } from 'react';

export default function Pricing({ onSelectTier }) {
  const [isAnnual, setIsAnnual] = useState(false);

  const suborbitalPrice = isAnnual ? '$1,199' : '$1,499';
  const leoPrice = isAnnual ? '$3,919' : '$4,899';
  const enterprisePrice = isAnnual ? '$11,600+' : '$14,500+';

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 py-16 md:py-24 relative" id="pricing">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-label-mono-sm text-xs text-primary uppercase tracking-widest mb-3 font-semibold">
          TRANSPARENT ORBITAL PRICING
        </span>
        <h2 className="font-headline-xl text-2xl sm:text-4xl text-on-surface font-bold max-w-3xl mb-4 tracking-tight">
          Scale seamlessly from CubeSat prototypes to full satellite constellations
        </h2>
        <p className="font-body-md text-base text-on-surface-variant max-w-xl leading-relaxed">
          Predictable mission costs with zero hidden ground-station transit fees.
        </p>

        {/* Billing Toggle Interaction */}
        <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-surface-container-high/80 border border-outline-variant/30 backdrop-blur-md">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full font-label-mono-sm text-xs transition-all font-mono ${
              !isAnnual
                ? 'bg-surface-container-highest text-on-surface shadow-md font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full font-label-mono-sm text-xs transition-all flex items-center gap-2 font-mono ${
              isAnnual
                ? 'bg-surface-container-highest text-on-surface shadow-md font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span>Annual Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold shadow-[0_0_10px_rgba(183,109,255,0.5)]">
              SAVE 20%
            </span>
          </button>
        </div>
      </div>

      {/* 3 Tier Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {/* Tier 1: Sub-Orbital */}
        <div className="rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-xl p-8 flex flex-col justify-between hover:bg-surface-container-low transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-label-mono-sm text-xs text-on-surface-variant uppercase tracking-wider font-mono">
                TEST & RESEARCH
              </span>
              <h3 className="font-headline-lg text-2xl text-on-surface font-bold mt-1">Sub-Orbital</h3>
            </div>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              Ideal for university research teams, CubeSat demonstrators, and pre-launch atmospheric testing.
            </p>
            <div className="flex items-baseline gap-1 my-2">
              <span className="font-display-hero text-3xl sm:text-4xl text-on-surface font-bold">
                {suborbitalPrice}
              </span>
              <span className="font-body-sm text-sm text-on-surface-variant">/ month</span>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              {[
                'Up to 3 active satellites',
                '50 GB downlink telemetry / mo',
                'Standard 12 ground station relays',
                'Community Discord & docs support',
                '99.9% uptime SLA',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => onSelectTier('Sub-Orbital')}
            className="mt-8 w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-medium text-sm transition-all border border-outline-variant/30 hover:border-outline-variant/60"
          >
            Start Sub-Orbital Trial
          </button>
        </div>

        {/* Tier 2: Low Earth Orbit (LEO) - HIGHLIGHTED */}
        <div className="rounded-2xl bg-surface-container/90 border-2 border-primary/60 backdrop-blur-2xl p-8 flex flex-col justify-between relative shadow-[0_0_50px_rgba(183,109,255,0.25)] lg:-translate-y-4">
          {/* Radiant Glow Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-container to-deep-thruster text-white font-label-mono-sm text-[10px] font-bold tracking-widest uppercase shadow-[0_0_16px_rgba(183,109,255,0.7)] border border-white/20 whitespace-nowrap">
            MOST POPULAR - MISSION CRITICAL
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <div>
              <span className="font-label-mono-sm text-xs text-secondary uppercase tracking-wider font-mono font-semibold">
                FULL CONSTELLATION FLIGHT
              </span>
              <h3 className="font-headline-lg text-2xl text-on-surface font-bold mt-1">Low Earth Orbit (LEO)</h3>
            </div>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              Complete constellation orchestration for commercial satellite operators and Earth observation missions.
            </p>
            <div className="flex items-baseline gap-1 my-2">
              <span className="font-display-hero text-3xl sm:text-4xl text-primary font-bold">
                {leoPrice}
              </span>
              <span className="font-body-sm text-sm text-on-surface-variant">/ month</span>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              {[
                { text: 'Up to 25 satellites in mesh', bold: true },
                { text: '500 GB downlink telemetry / mo' },
                { text: 'Global federated ground access (60+ relays)' },
                { text: 'Real-time collision avoidance AI' },
                { text: 'Automated over-the-air payload deploys' },
                { text: '24/7 Flight Operations priority support' },
                { text: '99.995% mission-grade SLA' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-2.5 text-sm ${item.bold ? 'text-white font-medium' : 'text-on-surface'}`}>
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => onSelectTier('LEO')}
            className="mt-8 w-full inline-flex items-center justify-center px-4 py-3.5 rounded-lg bg-gradient-to-r from-primary-container to-deep-thruster text-white font-bold text-sm hover:brightness-110 active:scale-98 transition-all shadow-[0_0_24px_rgba(183,109,255,0.5)] border border-white/20"
          >
            Get Started with LEO
          </button>
        </div>

        {/* Tier 3: Deep Space / Enterprise */}
        <div className="rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-xl p-8 flex flex-col justify-between hover:bg-surface-container-low transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-label-mono-sm text-xs text-on-surface-variant uppercase tracking-wider font-mono">
                DEFENSE & DEEP SPACE
              </span>
              <h3 className="font-headline-lg text-2xl text-on-surface font-bold mt-1">Deep Space / Enterprise</h3>
            </div>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              Bespoke dedicated uplinks, sovereign defense clearance, and interplanetary mission support.
            </p>
            <div className="flex items-baseline gap-1 my-2">
              <span className="font-display-hero text-3xl sm:text-4xl text-on-surface font-bold">
                {enterprisePrice}
              </span>
              <span className="font-body-sm text-sm text-on-surface-variant">/ month</span>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              {[
                'Unlimited satellites & constellations',
                'Unlimited telemetry bandwidth',
                'Dedicated private ground station arrays',
                'Post-quantum multi-sig cryptography',
                'Custom radiation-hardened firmware runtimes',
                'Dedicated flight controller engineer',
                'Custom 99.9999% SLA guarantee',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => onSelectTier('Enterprise')}
            className="mt-8 w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-medium text-sm transition-all border border-outline-variant/30 hover:border-outline-variant/60"
          >
            Contact Flight Operations
          </button>
        </div>
      </div>

      {/* Guarantee Footer Note */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-on-surface-variant font-label-mono-sm text-xs text-center font-mono">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
          <span>SOC2 TYPE II CERTIFIED</span>
        </div>
        <span className="hidden sm:inline">•</span>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">security</span>
          <span>ITAR COMPLIANT DATA VAULT</span>
        </div>
        <span className="hidden sm:inline">•</span>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[18px]">policy</span>
          <span>ISO 27001 ACCREDITED</span>
        </div>
      </div>
    </section>
  );
}
