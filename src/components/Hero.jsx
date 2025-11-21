import { useState, useEffect } from 'react';
import userLaptopIcon from '../assets/user-laptop.svg';

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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-[#212223] to-[#1A1B1C] px-4 py-12 sm:px-6 lg:px-8"
    >
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl animate-heroFade">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-[#FE7F2D] sm:text-5xl lg:text-6xl">
              <span>{displayedText}</span>
              {displayedText.length < fullText.length && (
                <span className="ml-2 animate-blink text-[#FE7F2D]">|</span>
              )}
            </h1>

            <h2 className="mt-4 text-xl text-[#E6DAD1] sm:text-2xl">
              Frontend Developer in the making
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#E6DAD1] lg:mx-0">
              I build clean, simple interfaces and I'm learning React & modern web tools.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start">
              <button className="button button-primary">
                <span>View Projects</span>
                <div className="button-overlay"></div>
              </button>
              <button className="button button-secondary">
                <span>Download Resume</span>
                <div className="button-overlay"></div>
              </button>
            </div>
          </div>

          {/* SVG Image */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <img
              src={userLaptopIcon}
              alt="Developer working at laptop"
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto animate-heroFade"
            />
          </div>
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
          animation: heroFade 0.6s ease-out forwards;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes ripple-click {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
        .button {
          font-size: 17px;
          border-radius: 12px;
          background: linear-gradient(
            180deg,
            rgb(56, 56, 56) 0%,
            rgb(36, 36, 36) 66%,
            rgb(41, 41, 41) 100%
          );
          color: rgb(218, 218, 218);
          border: none;
          padding: 2px;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .button span {
          border-radius: 10px;
          padding: 0.8em 1.3em;
          padding-right: 1.2em;
          text-shadow: 0px 0px 20px #4b4b4b;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          color: inherit;
          transition: all 0.3s ease;
          background-color: rgb(29, 29, 29);
          background-image: radial-gradient(
              at 95% 89%,
              rgb(15, 15, 15) 0px,
              transparent 50%
            ),
            radial-gradient(at 0% 100%, rgb(17, 17, 17) 0px, transparent 50%),
            radial-gradient(at 0% 0%, rgb(29, 29, 29) 0px, transparent 50%);
        }
        .button:hover span {
          background-color: rgb(26, 25, 25);
        }
        .button-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: repeating-conic-gradient(
              rgb(48, 47, 47) 0.0000001%,
              rgb(51, 51, 51) 0.000104%
            )
            60% 60%/600% 600%;
          filter: opacity(10%) contrast(105%);
          -webkit-filter: opacity(10%) contrast(105%);
        }
        .button::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: translate(-50%, -50%) scale(0);
          transition:
            transform 0.6s ease,
            opacity 0.8s ease;
          opacity: 0;
          pointer-events: none;
        }
        .button:hover::after {
          width: 200%;
          height: 200%;
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        .button:active::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%) scale(0);
          animation: ripple-click 0.5s ease-out forwards;
          pointer-events: none;
        }
        .button:active {
          transform: scale(0.97);
          filter: brightness(1.1);
        }
        .button:hover {
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.08);
        }
        .button-primary {
          background: linear-gradient(
            180deg,
            rgb(33, 33, 35) 0%,
            rgb(26, 26, 28) 66%,
            rgb(30, 30, 32) 100%
          );
        }
        .button-primary span {
          color: #E6DAD1;
        }
        .button-secondary {
          background: linear-gradient(
            180deg,
            rgb(254, 127, 45) 0%,
            rgb(220, 100, 30) 66%,
            rgb(254, 127, 45) 100%
          );
        }
        .button-secondary span {
          background-color: rgb(254, 127, 45);
          background-image: radial-gradient(
              at 95% 89%,
              rgb(220, 100, 30) 0px,
              transparent 50%
            ),
            radial-gradient(at 0% 100%, rgb(230, 110, 35) 0px, transparent 50%),
            radial-gradient(at 0% 0%, rgb(254, 127, 45) 0px, transparent 50%);
          color: #E6DAD1;
        }
        .button-secondary:hover span {
          background-color: rgb(255, 150, 60);
        }
      `}</style>
    </section>
  );
}
