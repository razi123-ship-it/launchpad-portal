import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: LaunchPage,
});

function LaunchPage() {
  const navigate = useNavigate();
  const [launching, setLaunching] = useState(false);

  const handleLaunch = () => {
    if (launching) return;
    setLaunching(true);
    setTimeout(() => {
      navigate({ to: "/home" });
    }, 2600);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#141432] to-[#2a0a1a] text-white">
      {/* Stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              opacity: 0.2 + ((i % 7) / 10),
              animation: `twinkle ${2 + (i % 5)}s ease-in-out ${i * 0.07}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-xs tracking-[0.4em] text-amber-300/80 uppercase">
          Mission Control
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
          Wedad Batch
        </h1>
        <p className="mt-4 max-w-xl text-sm md:text-base text-white/70">
          Initiate the launch sequence to enter the official institutional portal.
        </p>

        <button
          onClick={handleLaunch}
          disabled={launching}
          className="group relative mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8b1538] to-[#c2185b] px-10 py-4 text-base font-semibold uppercase tracking-[0.25em] shadow-[0_0_40px_-5px_rgba(194,24,91,0.6)] transition hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(194,24,91,0.9)] disabled:opacity-60 disabled:hover:scale-100"
        >
          {launching ? "Launching…" : "Launch"}
          <span aria-hidden className="text-xl">🚀</span>
        </button>

        <p className="mt-6 text-xs text-white/40">
          Press launch — rocket takes you to the portal
        </p>
      </div>

      {/* Rocket */}
      <div
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 ${
          launching ? "rocket-launch" : "rocket-idle"
        }`}
        style={{ bottom: "-180px" }}
      >
        <Rocket />
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.9; }
        }
        .rocket-idle {
          transform: translate(-50%, 0);
          opacity: 0;
        }
        .rocket-launch {
          animation: launch 2.6s cubic-bezier(0.4, 0, 0.3, 1) forwards;
        }
        @keyframes launch {
          0% { transform: translate(-50%, 0) scale(0.9); opacity: 0; }
          15% { transform: translate(-50%, -100px) scale(1); opacity: 1; }
          70% { transform: translate(-50%, -75vh) scale(0.95); opacity: 1; }
          100% { transform: translate(-50%, -130vh) scale(0.6); opacity: 0; }
        }
        @keyframes flame {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
          50% { transform: scaleY(1.4) scaleX(0.85); opacity: 1; }
        }
        .flame { animation: flame 0.12s ease-in-out infinite; transform-origin: top center; }
        @keyframes smoke {
          0% { transform: translate(var(--tx,0), 0) scale(0.5); opacity: 0.8; }
          100% { transform: translate(var(--tx,0), 200px) scale(2.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function Rocket() {
  return (
    <div className="relative flex flex-col items-center">
      <svg width="80" height="160" viewBox="0 0 80 160" fill="none">
        {/* Nose */}
        <path d="M40 0 L60 50 L20 50 Z" fill="#e8e8e8" />
        <path d="M40 0 L60 50 L40 50 Z" fill="#bdbdbd" />
        {/* Body */}
        <rect x="20" y="50" width="40" height="70" fill="#f5f5f5" />
        <rect x="40" y="50" width="20" height="70" fill="#d0d0d0" />
        {/* Stripe maroon */}
        <rect x="20" y="65" width="40" height="6" fill="#8b1538" />
        {/* Window */}
        <circle cx="40" cy="90" r="9" fill="#0ea5e9" stroke="#444" strokeWidth="2" />
        <circle cx="37" cy="87" r="3" fill="#bae6fd" />
        {/* Fins */}
        <path d="M20 100 L5 130 L20 125 Z" fill="#8b1538" />
        <path d="M60 100 L75 130 L60 125 Z" fill="#8b1538" />
        {/* Bottom */}
        <rect x="25" y="120" width="30" height="8" fill="#555" />
      </svg>
      {/* Flame */}
      <div className="flame relative -mt-1 h-16 w-8">
        <div className="absolute inset-x-0 top-0 mx-auto h-16 w-8 rounded-b-full bg-gradient-to-b from-yellow-300 via-orange-500 to-red-600 blur-[1px]" />
        <div className="absolute inset-x-0 top-1 mx-auto h-12 w-4 rounded-b-full bg-gradient-to-b from-white via-yellow-200 to-orange-400" />
      </div>
    </div>
  );
}
