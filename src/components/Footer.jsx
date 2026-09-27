import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#080B16] border-t border-outline-variant/20 text-on-surface-variant">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-outline-variant/20">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
              </div>
              <span className="font-headline-sm text-xl text-on-surface font-bold tracking-tight">LaunchPad</span>
            </div>

            <p className="font-body-sm text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Ultra-low latency space-to-ground telemetry protocol, orbital compute fabric, and mission-critical satellite fleet management platform.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30 max-w-fit font-mono text-xs">
              <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_#7bd0ff] animate-pulse"></span>
              <span className="text-secondary font-medium tracking-wide">
                ALL SYSTEMS NOMINAL • 99.999% SLA
              </span>
            </div>

            {/* Newsletter Dispatch */}
            <div className="flex flex-col gap-2 mt-2">
              <span className="font-badge-caps text-[11px] uppercase tracking-wider text-on-surface-variant font-mono">
                Telemetry Dispatch Newsletter
              </span>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="commander@constellation.space"
                  className="w-full h-10 px-4 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-outline font-mono text-xs focus:outline-none focus:border-primary shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] transition-colors"
                />
                <button
                  type="submit"
                  className="h-10 px-4 rounded-lg bg-gradient-to-r from-primary-container to-deep-thruster text-white text-xs font-semibold hover:brightness-110 active:scale-95 transition-all shrink-0 border border-white/20 shadow-[0_0_12px_rgba(183,109,255,0.3)]"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <span className="text-nominal text-xs font-mono">
                  ✓ Dispatch uplink registered. Welcome to orbital telemetry.
                </span>
              )}
            </div>
          </div>

          {/* Product links */}
          <div className="flex flex-col gap-3">
            <span className="font-badge-caps text-xs uppercase text-primary tracking-widest font-mono font-bold">
              Product
            </span>
            <a href="#features" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Constellation Mesh
            </a>
            <a href="#features" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Orbital Compute
            </a>
            <a href="#console-preview" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Photon Downlink
            </a>
            <a href="#pricing" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Pricing Matrix
            </a>
            <a href="#metrics" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Changelog
            </a>
          </div>

          {/* Space Infrastructure */}
          <div className="flex flex-col gap-3">
            <span className="font-badge-caps text-xs uppercase text-primary tracking-widest font-mono font-bold">
              Infrastructure
            </span>
            <a href="#metrics" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Ground Array Hubs
            </a>
            <a href="#features" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              LEO Edge Nodes
            </a>
            <a href="#console-preview" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Optical Relays
            </a>
            <a href="#console-preview" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Geostationary Uplink
            </a>
            <a href="#features" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Radiation Hardened API
            </a>
          </div>

          {/* Protocols */}
          <div className="flex flex-col gap-3">
            <span className="font-badge-caps text-xs uppercase text-primary tracking-widest font-mono font-bold">
              Protocols
            </span>
            <a href="#features" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              CCSDS Compatibility
            </a>
            <a href="#features" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Space Packet Engine
            </a>
            <a href="#features" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Delay-Tolerant Net
            </a>
            <a href="#features" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Quantum-Safe Keying
            </a>
            <a href="#features" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              OpenTelemetry Space
            </a>
          </div>

          {/* Compliance & Company */}
          <div className="flex flex-col gap-3">
            <span className="font-badge-caps text-xs uppercase text-primary tracking-widest font-mono font-bold">
              Compliance
            </span>
            <a href="#pricing" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              ITAR Controls
            </a>
            <a href="#pricing" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              FedRAMP High
            </a>
            <a href="#pricing" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Orbital Debris Accord
            </a>
            <a href="#pricing" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Aerospace Careers
            </a>
            <a href="#pricing" className="text-sm text-on-surface-variant hover:text-white transition-colors">
              Press Kit
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <span className="text-on-surface-variant">
            © 2025 LaunchPad Aerospace Inc. All orbital rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-secondary transition-colors">STATUS</a>
            <a href="#" className="hover:text-secondary transition-colors">PRIVACY PROTOCOL</a>
            <a href="#" className="hover:text-secondary transition-colors">TERMS OF FLIGHT</a>
            <a href="#" className="hover:text-secondary transition-colors">SECURITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
