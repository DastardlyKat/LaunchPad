import React, { useState, useEffect } from 'react';

export default function Features() {
  const [waveHeights, setWaveHeights] = useState([45, 70, 90, 60, 85, 100, 75, 65, 40]);

  // Subtle live fluctuation of waveform bars
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveHeights(prev =>
        prev.map(h => {
          const delta = Math.floor(Math.random() * 20 - 10);
          return Math.max(25, Math.min(100, h + delta));
        })
      );
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 py-16 md:py-24 relative" id="features">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-label-mono-sm text-xs text-secondary uppercase tracking-widest mb-3 font-semibold">
          PLATFORM CAPABILITIES
        </span>
        <h2 className="font-headline-xl text-2xl sm:text-4xl text-on-surface font-bold max-w-3xl mb-4 tracking-tight">
          Engineered for deep-space reliability and sub-second execution
        </h2>
        <p className="font-body-md text-base text-on-surface-variant max-w-2xl leading-relaxed">
          Every layer of LaunchPad is architected to endure high-radiation environments, sporadic line-of-sight relays, and high-frequency mission payloads.
        </p>
      </div>

      {/* 3 High-Impact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Feature Card 1: Autonomous Telemetry Ingestion */}
        <div className="group rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:bg-surface-container-low hover:shadow-[0_0_30px_rgba(183,109,255,0.22)] relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_18px_rgba(183,109,255,0.3)] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">radar</span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold">
              Autonomous Telemetry Ingestion
            </h3>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Ingest and process petabytes of raw downlink telemetry across global federated ground stations with sub-millisecond packet validation and automated anomaly isolation.
            </p>
          </div>

          {/* Telemetry Waveform Widget */}
          <div className="mt-8 p-4 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 flex flex-col gap-3 font-mono">
            <div className="flex justify-between items-center text-xs">
              <span className="text-on-surface-variant">SIGNAL-TO-NOISE (SNR)</span>
              <span className="text-secondary font-bold">+28.4 dB</span>
            </div>
            
            {/* Waveform Spectrum Bar visualizer */}
            <div className="flex items-end gap-1.5 h-12 w-full pt-2">
              {waveHeights.map((height, i) => (
                <div
                  key={i}
                  style={{ height: `${height}%` }}
                  className={`flex-1 rounded-sm transition-all duration-500 ${
                    i === 5
                      ? 'bg-primary-container shadow-[0_0_10px_rgba(183,109,255,0.8)]'
                      : i % 2 === 0
                      ? 'bg-secondary/70'
                      : 'bg-primary/80'
                  }`}
                ></div>
              ))}
            </div>

            <div className="flex justify-between items-center text-[10px] text-on-surface-variant pt-1 border-t border-outline-variant/10">
              <span>PACKET INGEST: 1.4M/s</span>
              <span className="text-secondary font-semibold">0 JITTER</span>
            </div>
          </div>
        </div>

        {/* Feature Card 2: Edge-to-Orbit Runtimes */}
        <div className="group rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-secondary/50 hover:bg-surface-container-low hover:shadow-[0_0_30px_rgba(56,189,248,0.22)] relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-xl bg-secondary-container/20 border border-secondary/30 flex items-center justify-center text-secondary shadow-[0_0_18px_rgba(0,166,224,0.3)] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">memory</span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold">
              Edge-to-Orbit Runtimes
            </h3>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Deploy containerized WebAssembly and Rust payloads directly to radiation-hardened LEO satellite clusters with zero-downtime over-the-air hot reloads.
            </p>
          </div>

          {/* Node Deployment Status Widget */}
          <div className="mt-8 p-4 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 flex flex-col gap-2.5 font-mono text-xs">
            <div className="flex items-center justify-between pb-1 border-b border-outline-variant/10">
              <span className="text-on-surface-variant">NODE REGISTRY</span>
              <span className="text-primary font-semibold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                HOT RELOAD READY
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant/10">
              <span className="text-on-surface text-[12px]">Payload #409 (Spectral AI)</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container/20 border border-secondary/30 text-secondary text-[10px] font-bold">
                ACTIVE
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant/10">
              <span className="text-on-surface text-[12px]">Sync: LEO Cluster 7</span>
              <span className="text-primary font-bold text-[10px]">100% IN CONCURRENCY</span>
            </div>
          </div>
        </div>

        {/* Feature Card 3: Cryptographic Command Links */}
        <div className="group rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-tertiary/50 hover:bg-surface-container-low hover:shadow-[0_0_30px_rgba(183,109,255,0.22)] relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-xl bg-tertiary-container/20 border border-tertiary/30 flex items-center justify-center text-tertiary shadow-[0_0_18px_rgba(177,117,236,0.3)] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">shield_locked</span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold">
              Cryptographic Command Links
            </h3>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Zero-trust post-quantum encrypted uplink protocols ensuring tamper-proof command authorization, geographic relay geofencing, and multi-signature execution.
            </p>
          </div>

          {/* Multi-Sig Checklist Widget */}
          <div className="mt-8 p-4 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 flex flex-col gap-2.5 font-mono text-xs">
            <div className="flex justify-between items-center text-on-surface-variant pb-1 border-b border-outline-variant/10">
              <span>UPLINK AUTH STATUS</span>
              <span className="text-secondary font-bold">VALIDATED</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              <span>Kyber-1024 Lattice Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              <span>Multi-Sig Flight Officer Quorum (3/3)</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              <span>CCSDS Encapsulation Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
