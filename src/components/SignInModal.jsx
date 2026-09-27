import React, { useState } from 'react';

export default function SignInModal({ isOpen, onClose, selectedTier }) {
  const [email, setEmail] = useState('');
  const [key, setKey] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignedIn(true);
    setTimeout(() => {
      setSignedIn(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-2xl bg-surface-container-low border border-primary/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.2)] p-6 sm:p-8 relative text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-on-surface-variant hover:text-white hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            <span className="material-symbols-outlined text-[22px]">lock</span>
          </div>
          <div>
            <h3 className="font-headline text-xl text-on-surface font-bold">
              {selectedTier ? `Sign Up — ${selectedTier}` : 'Mission Operator Login'}
            </h3>
            <span className="font-mono text-xs text-secondary">
              Zero-Trust Hardware Token or TLS Credentials
            </span>
          </div>
        </div>

        {signedIn ? (
          <div className="flex flex-col items-center py-6 gap-3 text-center font-mono">
            <span className="material-symbols-outlined text-nominal text-[40px] animate-bounce">
              verified_user
            </span>
            <p className="text-white font-bold text-sm">Credentials Authorized</p>
            <p className="text-xs text-on-surface-variant">Redirecting to Orbital Mission Control...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-xs">
            <div>
              <label className="block text-on-surface-variant mb-1 font-semibold">OPERATOR EMAIL</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="commander@aerospace.io"
                className="w-full h-11 px-3.5 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary transition-colors text-xs"
              />
            </div>

            <div>
              <label className="block text-on-surface-variant mb-1 font-semibold">SECURITY KEY // PASSCODE</label>
              <input
                type="password"
                required
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="••••••••••••••••"
                className="w-full h-11 px-3.5 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary transition-colors text-xs"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-primary-container to-deep-thruster text-white font-sans font-bold text-sm hover:brightness-110 active:scale-98 transition-all shadow-[0_0_24px_rgba(183,109,255,0.45)] border border-white/20"
              >
                Authenticate Session
              </button>
            </div>

            <div className="text-center text-on-surface-variant text-[11px] pt-1">
              Protected by Kyber-1024 Quantum Shielding
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
