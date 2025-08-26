import { useEffect, useState } from "react";
import Image from "next/image";

export default function BravestWarriorsTimeline() {
  // === TIMELINE DATA ===
  const events = [
    { title: "First Mission", description: "Warped to planet Oooz for a rescue!", date: "3011", warrior: "chris", icon: "🛡️" },
    { title: "Beth’s Big Save", description: "Saved the space kittens!", date: "3012", warrior: "beth", icon: "🐱" },
    { title: "Danny’s Device", description: "Built the Emotion Amplifier 3000.", date: "3013", warrior: "danny", icon: "🔧" },
    { title: "Wallow’s Falcon", description: "Unlocked a new sticker power.", date: "3014", warrior: "wallow", icon: "🦅" },
  ];

  // === RANDOM QUOTES ===
  const quotes = [
    "“It’s always been Wankershim.” – Chris",
    "“Throw blankets are the most lethal of all blankets!” – Danny",
    "“I love you, Chris... and my emotions.” – Beth",
    "“Plum, you drive me nuts.” – Wallow",
    "“I’m Catbug! I’m not a bug, I’m a cat!” – Catbug",
  ];

  const [randomQuote, setRandomQuote] = useState("");

  // === ROTATE RANDOM QUOTES ===
  useEffect(() => {
    const changeQuote = () => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setRandomQuote(random);
    };
    changeQuote();
    const interval = setInterval(changeQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  // === COLOR MAPPING FOR WARRIORS ===
  const warriorColors = {
    chris: "border-blue-400 shadow-blue-400",
    beth: "border-green-400 shadow-green-400",
    danny: "border-red-400 shadow-red-400",
    wallow: "border-orange-400 shadow-orange-400",
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* === Background Space Image === */}
      <Image
        src="/space-bg.png"
        alt="Space Background"
        fill
        className="object-cover opacity-70"
      />

      {/* === Floating Random Quotes === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <p className="text-white text-xl opacity-20 animate-pulse pixel-font">
          {randomQuote}
        </p>
      </div>

      {/* === Floating Catbug === */}
      <div className="absolute bottom-10 right-10 animate-float z-10">
        <Image src="/catbug.png" alt="Catbug" width={100} height={100} />
      </div>

      {/* === Timeline Section === */}
      <div className="relative z-20 max-w-3xl mx-auto py-16 timeline">
        {/* Glowing vertical line */}
        <div className="absolute left-10 top-0 w-1 h-full bg-gradient-to-b from-green-400 via-blue-400 to-red-400 neon-glow"></div>

        {/* Events */}
        {events.map((event, idx) => (
          <div key={idx} className="timeline-item mb-12 relative">
            {/* Icon Bubble */}
            <div
              className={`timeline-icon ${warriorColors[event.warrior]} border-4 rounded-full w-14 h-14 flex items-center justify-center text-2xl bg-black`}
            >
              {event.icon}
            </div>

            {/* Event Card */}
            <div className="ml-20 p-6 bg-black bg-opacity-70 rounded-xl border-2 neon-card">
              <h3 className="text-2xl font-bold pixel-font text-white">{event.title}</h3>
              <p className="text-gray-300 mt-2">{event.description}</p>
              <span className="text-sm text-gray-500">{event.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* === Styles === */}
      <style jsx>{`
        /* Vertical neon line behind timeline */
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 2.5rem;
          width: 4px;
          height: 100%;
          background: linear-gradient(#39ff14, #00e5ff, #ff0044, #ff7f11);
          box-shadow: 0 0 12px #39ff14, 0 0 20px #00e5ff;
        }

        /* Icon Glow Animation */
        .timeline-icon {
          position: absolute;
          left: 0;
          animation: glow 2s infinite alternate;
        }

        /* Card Neon Glow */
        .neon-card {
          box-shadow: 0 0 10px #39ff14, 0 0 20px #00e5ff;
        }

        /* Vertical bar glow */
        .neon-glow {
          box-shadow: 0 0 12px #39ff14, 0 0 20px #00e5ff;
        }

        /* Glow animation for icons */
        @keyframes glow {
          from {
            box-shadow: 0 0 8px rgba(57, 255, 20, 0.5), 0 0 12px rgba(0, 229, 255, 0.3);
          }
          to {
            box-shadow: 0 0 16px rgba(57, 255, 20, 0.8), 0 0 24px rgba(0, 229, 255, 0.5);
          }
        }

        /* Floating Catbug Animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
