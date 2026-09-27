import React, { useState, useEffect } from 'react';

export default function ConsolePreview({ onOpenFullConsole }) {
  const [utcTime, setUtcTime] = useState('');
  const [activeTab, setActiveTab] = useState('mesh');
  const [cpuUsage, setCpuUsage] = useState(14.2);
  const [latency, setLatency] = useState(42);
  const [commandLogs, setCommandLogs] = useState([
    { text: '> launchpad constellation connect --mesh auto', type: 'cmd' },
    { text: '• Initializing secure quantum key handshake...', type: 'info' },
    { text: '• Handshake validated: 4,096-bit Kyber lattice', type: 'success' },
    { text: '• Compiling flight container payload: rust_sensor.wasm', type: 'info' },
    { text: '> OTA Hot-Reload payload deployed to Cluster #07', type: 'cyan' },
    { text: '• Telemetry packets ACK: 24,800/sec [0 drops]', type: 'info' },
    { text: '>> ORBITAL_DAEMON: EXECUTION CONFIRMED', type: 'confirm' },
  ]);
  const [isExecuting, setIsExecuting] = useState(false);

  // UTC Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      const ms = String(now.getUTCMilliseconds()).padStart(3, '0');
      setUtcTime(`UTC ${hours}:${minutes}:${seconds}.${ms}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

  // Periodic subtle telemetry fluctuations to make it feel genuinely alive
  useEffect(() => {
    const fluctuation = setInterval(() => {
      setCpuUsage(prev => {
        const delta = (Math.random() * 0.8 - 0.4);
        return parseFloat(Math.min(22, Math.max(12, prev + delta)).toFixed(1));
      });
      setLatency(prev => {
        const delta = Math.floor(Math.random() * 3 - 1);
        return Math.min(48, Math.max(38, prev + delta));
      });
    }, 2500);
    return () => clearInterval(fluctuation);
  }, []);

  const triggerTestCommand = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    const newLog = { text: `> telemetry ping --node LP-SAT-42A [SEQ #${Math.floor(Math.random()*9000+1000)}]`, type: 'cmd' };
    setCommandLogs(prev => [...prev.slice(-6), newLog]);

    setTimeout(() => {
      setCommandLogs(prev => [
        ...prev.slice(-6),
        { text: `• Uplink beam locked on azimuth 148.2° [SNR: +29.1 dB]`, type: 'info' }
      ]);
    }, 400);

    setTimeout(() => {
      setCommandLogs(prev => [
        ...prev.slice(-6),
        { text: `>> TELEMETRY_ACK: Roundtrip latency ${latency}ms [PASS]`, type: 'confirm' }
      ]);
      setIsExecuting(false);
    }, 900);
  };

  return (
    <div
      className="w-full max-w-6xl mx-auto mt-4 rounded-xl bg-surface-container-low/80 border border-outline-variant/30 backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.8),0_0_35px_rgba(183,109,255,0.18)] p-4 sm:p-6 flex flex-col gap-4 text-left relative overflow-hidden"
      id="console-preview"
    >
      {/* Top HUD Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 bg-surface-container-lowest/80 border border-outline-variant/20 px-4 py-2.5 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-error inline-block shadow-[0_0_8px_#ffb4ab]"></span>
          <span className="h-3 w-3 rounded-full bg-warning inline-block shadow-[0_0_8px_#f59e0b]"></span>
          <span className="h-3 w-3 rounded-full bg-nominal inline-block shadow-[0_0_8px_#10b981]"></span>
          <span className="font-label-mono-sm text-xs text-on-surface-variant ml-2 font-mono">
            MISSION CONTROL CONSOLE // FLIGHT_NODE_V3.8
          </span>
        </div>
        <div className="flex items-center gap-4 font-label-mono-sm text-xs">
          <span className="text-secondary flex items-center gap-1.5 font-medium">
            <span className="h-2 w-2 rounded-full bg-secondary animate-ping"></span>
            CONSTELLATION SYNCED
          </span>
          <span className="text-on-surface-variant font-mono">{utcTime || 'UTC 14:02:49.192'}</span>
        </div>
      </div>

      {/* Main Visual HUD Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left 3D Orbit Trajectory Vector Map */}
        <div className="lg:col-span-8 rounded-lg bg-surface-container-lowest/90 border border-outline-variant/20 p-4 sm:p-5 flex flex-col justify-between relative min-h-[380px] overflow-hidden">
          {/* HUD Overlay Stats Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 z-10">
            <div className="flex items-center gap-2">
              <span className="font-label-mono-sm text-xs text-primary font-bold tracking-wider uppercase">
                ORBITAL EPHEMERIS SIMULATOR
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-[10px] font-mono border border-outline-variant/20">
                LEO-550KM
              </span>
            </div>
            <span className="font-label-mono-sm text-xs text-secondary tracking-widest font-mono">
              INC: 53.0° • VEL: 7.66 km/s
            </span>
          </div>

          {/* Dynamic Orbital Wireframe & Trajectory Vectors SVG */}
          <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none">
            <svg
              className="w-full h-full max-h-[340px]"
              fill="none"
              viewBox="0 0 700 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient cx="50%" cy="50%" id="earthGlow" r="50%">
                  <stop offset="0%" stopColor="#00a6e0" stopOpacity="0.35" />
                  <stop offset="60%" stopColor="#10131e" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10131e" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="orbitLineGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#b76dff" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#b76dff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#7bd0ff" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7bd0ff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ddb7ff" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Earth Arc Contour */}
              <ellipse
                cx="350"
                cy="380"
                fill="url(#earthGlow)"
                rx="340"
                ry="200"
                stroke="#313441"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />

              {/* Orbital Ellipses */}
              <ellipse
                cx="350"
                cy="180"
                rx="280"
                ry="85"
                stroke="url(#orbitLineGrad)"
                strokeWidth="2"
                transform="rotate(-12 350 180)"
              />
              <ellipse
                cx="350"
                cy="160"
                rx="290"
                ry="70"
                stroke="#7bd0ff"
                strokeDasharray="6 6"
                strokeOpacity="0.4"
                strokeWidth="1"
                transform="rotate(18 350 160)"
              />

              {/* Orbital Nodes & Beacons */}
              <g className="transition-all duration-700">
                {/* Primary Satellite Node */}
                <circle cx="210" cy="140" fill="#7bd0ff" r="6" />
                <circle className="animate-ping" cx="210" cy="140" r="14" stroke="#7bd0ff" strokeOpacity="0.6" strokeWidth="1" />
                <text fill="#c4e7ff" fontFamily="JetBrains Mono" fontSize="11" x="225" y="145">
                  LP-SAT-42A [PRIMARY]
                </text>

                {/* Relay Node */}
                <circle cx="480" cy="205" fill="#b76dff" r="5" />
                <circle cx="480" cy="205" r="10" stroke="#b76dff" strokeOpacity="0.4" strokeWidth="1" />
                <text fill="#ddb7ff" fontFamily="JetBrains Mono" fontSize="10" x="495" y="210">
                  LP-SAT-88C [RELAY]
                </text>

                {/* Ground Link */}
                <circle cx="320" cy="115" fill="#ffffff" r="4" />
                <text fill="#cfc2d6" fontFamily="JetBrains Mono" fontSize="9" x="330" y="112">
                  GROUND LINK SVALBARD
                </text>

                {/* Photon Downlink Path */}
                <line
                  stroke="url(#beamGrad)"
                  strokeDasharray="3 3"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  x1="210"
                  y1="140"
                  x2="320"
                  y2="115"
                />
              </g>
            </svg>
          </div>

          {/* Bottom Telemetry Live Feed Ticker */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 z-10 pt-28 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/90 to-transparent">
            <div className="p-3 rounded bg-surface-container/60 border border-outline-variant/20 hover:border-secondary/40 transition-colors">
              <span className="block font-label-mono-sm text-[10px] text-on-surface-variant uppercase tracking-wider">
                SATELLITE HEALTH
              </span>
              <span className="font-label-mono-md text-sm sm:text-base text-secondary font-bold font-mono">
                99.999% NOMINAL
              </span>
            </div>
            <div className="p-3 rounded bg-surface-container/60 border border-outline-variant/20 hover:border-primary/40 transition-colors">
              <span className="block font-label-mono-sm text-[10px] text-on-surface-variant uppercase tracking-wider">
                DOWNLINK LATENCY
              </span>
              <span className="font-label-mono-md text-sm sm:text-base text-primary font-bold font-mono">
                {latency} ms (OPTICAL)
              </span>
            </div>
            <div className="p-3 rounded bg-surface-container/60 border border-outline-variant/20 hover:border-white/30 transition-colors">
              <span className="block font-label-mono-sm text-[10px] text-on-surface-variant uppercase tracking-wider">
                ACTIVE CONSTELLATION
              </span>
              <span className="font-label-mono-md text-sm sm:text-base text-on-surface font-bold font-mono">
                84 LEO NODES
              </span>
            </div>
          </div>
        </div>

        {/* Right Terminal Payload Execution Feed */}
        <div className="lg:col-span-4 rounded-lg bg-surface-container-lowest/90 border border-outline-variant/20 p-4 sm:p-5 flex flex-col font-label-mono-sm text-xs justify-between gap-4">
          <div>
            {/* Header with status */}
            <div className="flex items-center justify-between text-on-surface-variant pb-2 mb-2 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold font-mono">MISSION_DAEMON // V8</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary text-[10px] font-mono font-semibold">
                WASM: SANDBOXED
              </span>
            </div>

            {/* Interactive Terminal log streams */}
            <div className="flex flex-col gap-2 text-on-surface-variant/90 text-[11px] font-mono leading-relaxed max-h-[220px] overflow-y-auto pr-1">
              {commandLogs.map((log, index) => (
                <p
                  key={index}
                  className={
                    log.type === 'cmd'
                      ? 'text-secondary font-semibold'
                      : log.type === 'success'
                      ? 'text-nominal font-medium'
                      : log.type === 'cyan'
                      ? 'text-secondary-fixed'
                      : log.type === 'confirm'
                      ? 'text-secondary font-bold bg-secondary/10 px-2 py-1 rounded'
                      : 'text-on-surface-variant'
                  }
                >
                  {log.text}
                </p>
              ))}
            </div>
          </div>

          {/* Interactive controls & CPU Utilization */}
          <div className="flex flex-col gap-3">
            <button
              onClick={triggerTestCommand}
              disabled={isExecuting}
              className="w-full py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-secondary hover:text-white border border-secondary/30 transition-all flex items-center justify-center gap-2 text-[11px] font-mono font-semibold active:scale-98 disabled:opacity-50"
            >
              <span className={`material-symbols-outlined text-[16px] ${isExecuting ? 'animate-spin' : ''}`}>
                {isExecuting ? 'sync' : 'play_arrow'}
              </span>
              <span>{isExecuting ? 'TRANSMITTING BEACON...' : 'EXECUTE TELEMETRY PING'}</span>
            </button>

            <div className="p-3 rounded bg-surface-container-high/50 border border-outline-variant/20 flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-on-surface-variant uppercase tracking-wider">
                  PAYLOAD CPU UTILIZATION
                </span>
                <span className="text-primary font-bold">{cpuUsage}%</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(183,109,255,0.7)]"
                  style={{ width: `${cpuUsage * 2}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
