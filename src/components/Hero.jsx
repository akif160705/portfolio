import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Akif";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="flex min-h-[80vh] w-full items-center justify-center bg-linear-to-br from-[#003c2f] via-[#006b55] to-[#00443b] px-4 py-12 text-center sm:px-6 lg:px-8"
    >
      <div className="animate-heroFade max-w-4xl space-y-8">
        <h1 className="text-balance text-4xl font-bold text-[#f9a825] sm:text-5xl md:text-6xl lg:text-7xl">
          <span>{displayedText}</span>
          {displayedText.length < fullText.length && <span className="ml-2 animate-blink text-white">|</span>}
        </h1>

        <h2 className="text-balance text-xl font-semibold text-white/90 sm:text-2xl md:text-3xl">
          Frontend Developer in the making
        </h2>

        <p className="mx-auto max-w-2xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
          I build clean, simple interfaces and I'm learning React & modern web tools.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row sm:gap-6">
          <button className="w-full max-w-xs rounded-2xl bg-[#10B981] px-8 py-3 text-base font-semibold text-[#022C22] shadow-lg shadow-emerald-900/30 transition hover:scale-[1.02] hover:bg-[#0EA271] sm:text-lg">
            View Projects
          </button>
          <button className="w-full max-w-xs rounded-2xl border-2 border-[#065F46] px-8 py-3 text-base font-semibold text-white/90 transition hover:scale-[1.02] hover:bg-white/5 sm:text-lg">
            Download Resume
          </button>
        </div>
      </div>
      <style>{`
        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-heroFade {
          animation: heroFade 0.8s ease-out forwards;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </section>
  );
}

