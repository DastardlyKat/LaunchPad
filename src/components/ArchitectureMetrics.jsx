import React from 'react';

export default function ArchitectureMetrics() {
  const metrics = [
    {
      stat: '142+',
      label: 'Active Orbital Missions',
      subtext: 'Spanning LEO, MEO & GEO',
      color: 'text-primary',
    },
    {
      stat: '<18ms',
      label: 'Mean Downlink Latency',
      subtext: 'Through ground optical relays',
      color: 'text-secondary',
    },
    {
      stat: '99.9999%',
      label: 'Constellation Reliability',
      subtext: 'High-radiation proven runtime',
      color: 'text-tertiary-fixed',
    },
    {
      stat: '4.8 PB',
      label: 'Daily Telemetry Handled',
      subtext: 'Streaming space data pipeline',
      color: 'text-on-surface',
    },
  ];

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 py-12 md:py-16" id="metrics">
      <div className="rounded-2xl bg-surface-container/60 border border-outline-variant/30 backdrop-blur-xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-outline-variant/30">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center gap-2 ${
                idx > 0 ? 'pt-6 sm:pt-0' : ''
              }`}
            >
              <span
                className={`font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${item.color}`}
              >
                {item.stat}
              </span>
              <span className="font-headline-sm text-base sm:text-lg text-on-surface font-semibold">
                {item.label}
              </span>
              <span className="font-label-mono-sm text-xs text-on-surface-variant font-mono">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
