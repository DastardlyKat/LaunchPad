import React, { useState } from 'react';

export default function FlightDemoModal({ isOpen, onClose }) {
  const [satelliteId, setSatelliteId] = useState('LP-LEO-550-Alpha');
  const [constellation, setConstellation] = useState('Global LEO Mesh');
  const [payloadType, setPayloadType] = useState('Rust/WASM Telemetry Analyzer');
  const [status, setStatus] = useState('idle'); // 'idle' | 'simulating' | 'success'

  if (!isOpen) return null;

  const handleSimulate = (e) => {
    e.preventDefault();
    setStatus('simulating');
    setTimeout(() => {
      setStatus('success');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl rounded-2xl bg-surface-container-low border border-primary/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.2)] p-6 sm:p-8 relative text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-on-surface-variant hover:text-white hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
          </div>
          <div>
            <h3 className="font-headline text-xl text-on-surface font-bold">
              Flight Demo Console
            </h3>
            <span className="font-mono text-xs text-secondary">
              Direct Orbital Simulator Sandbox
            </span>
          </div>
        </div>

        {status === 'success' ? (
          <div className="flex flex-col items-center text-center py-6 gap-4 font-mono">
            <div className="h-16 w-16 rounded-full bg-nominal/20 border border-nominal flex items-center justify-center text-nominal shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              <span className="material-symbols-outlined text-[32px]">check</span>
            </div>
            <h4 className="text-lg text-white font-bold">Orbital Test Vector Linked!</h4>
            <p className="text-xs text-on-surface-variant max-w-sm">
              Node <span className="text-primary font-bold">{satelliteId}</span> successfully verified over the Svalbard optical relay with 0 telemetry drop rate.
            </p>
            <div className="w-full bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/20 text-xs text-left text-on-surface-variant space-y-1">
              <div>Telemetry ACK: <span className="text-secondary">24,800 packets/s</span></div>
              <div>Mean Downlink: <span className="text-primary">16.4 ms</span></div>
              <div>Cryptographic Lattice: <span className="text-nominal">Kyber-1024 [Verified]</span></div>
            </div>
            <button
              onClick={() => {
                setStatus('idle');
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-lg bg-primary-container text-white font-sans font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(183,109,255,0.4)]"
            >
              Close Console
            </button>
          </div>
        ) : (
          <form onSubmit={handleSimulate} className="flex flex-col gap-4 font-mono text-xs">
            <div>
              <label className="block text-on-surface-variant mb-1 font-semibold">
                SATELLITE IDENTIFIER // NODE
              </label>
              <input
                type="text"
                value={satelliteId}
                onChange={(e) => setSatelliteId(e.target.value)}
                required
                className="w-full h-11 px-3.5 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary transition-colors text-xs"
              />
            </div>

            <div>
              <label className="block text-on-surface-variant mb-1 font-semibold">
                CONSTELLATION NETWORK
              </label>
              <select
                value={constellation}
                onChange={(e) => setConstellation(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary transition-colors text-xs"
              >
                <option value="Global LEO Mesh">Global LEO Mesh (550 km Sun-Sync)</option>
                <option value="Equatorial Telemetry Array">Equatorial Telemetry Array (GEO-35,786 km)</option>
                <option value="Deep-Space CubeSat Demo">Deep-Space CubeSat Demo (Lunar Polar)</option>
              </select>
            </div>

            <div>
              <label className="block text-on-surface-variant mb-1 font-semibold">
                PAYLOAD RUNTIME SPEC
              </label>
              <input
                type="text"
                value={payloadType}
                onChange={(e) => setPayloadType(e.target.value)}
                required
                className="w-full h-11 px-3.5 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary transition-colors text-xs"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'simulating'}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-primary-container to-deep-thruster text-white font-sans font-bold text-sm hover:brightness-110 active:scale-98 transition-all shadow-[0_0_24px_rgba(183,109,255,0.45)] border border-white/20 flex items-center justify-center gap-2"
              >
                {status === 'simulating' ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
                    <span>INITIALIZING ORBITAL LINK...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">cell_tower</span>
                    <span>TRANSMIT TEST VECTOR</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
