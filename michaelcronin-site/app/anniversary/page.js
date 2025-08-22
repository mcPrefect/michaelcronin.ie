"use client";

import { useRouter } from "next/navigation";

export default function Anniversary() {
  const router = useRouter();
  
  const timelineEvents = [
    {
      date: "January 15, 2024",
      title: "Our First Date",
      description: "We met for coffee and talked for hours. I knew there was something special about you.",
      image: "/anniversary/first-date.jpg",
      emoji: "☕",
      theme: "coffee",
      bgGradient: "from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900",
      dotColor: "bg-amber-500",
      titleColor: "text-amber-600 dark:text-amber-400",
      icons: ["☕", "💬", "✨"]
    },
    {
      date: "March 8, 2024",
      title: "Pizza Night Tradition Begins",
      description: "Our first pizza date that started our weekly tradition. You always steal my pepperoni and I love it!",
      image: "/anniversary/pizza.jpg",
      emoji: "🍕",
      theme: "pizza",
      bgGradient: "from-red-100 to-yellow-100 dark:from-red-900 dark:to-yellow-900",
      dotColor: "bg-red-500",
      titleColor: "text-red-600 dark:text-red-400",
      icons: ["🍕", "🧀", "❤️", "🍕"]
    },
    {
      date: "April 22, 2024",
      title: "Bravest Warriors Marathon",
      description: "We discovered our shared love for Bravest Warriors! Catbug became our spirit animal and we&apos;ve been quoting it ever since.",
      image: "/anniversary/bravest-warriors.jpg",
      emoji: "🐛",
      theme: "bravest-warriors",
      bgGradient: "from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900",
      dotColor: "bg-purple-500",
      titleColor: "text-purple-600 dark:text-purple-400",
      icons: ["🐛", "🌟", "🚀", "💫"]
    },
    {
      date: "June 15, 2024",
      title: "First DJO Concert",
      description: "Our first concert together seeing DJO! Dancing badly and singing along to all the songs. Perfect night.",
      image: "/anniversary/djo.jpg",
      emoji: "🎵",
      theme: "djo",
      bgGradient: "from-indigo-100 to-cyan-100 dark:from-indigo-900 dark:to-cyan-900",
      dotColor: "bg-indigo-500",
      titleColor: "text-indigo-600 dark:text-indigo-400",
      icons: ["🎵", "🎤", "🕺", "💃"]
    },
    {
      date: "August 20, 2024",
      title: "Made It Official",
      description: "The day we became official. Best decision I ever made. You said yes and my heart exploded!",
      image: "/anniversary/official.jpg",
      emoji: "💍",
      theme: "official",
      bgGradient: "from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900",
      dotColor: "bg-pink-500",
      titleColor: "text-pink-600 dark:text-pink-400",
      icons: ["💍", "💕", "🥰", "✨"]
    },
    {
      date: "October 31, 2024",
      title: "Halloween Shenanigans",
      description: "Our first Halloween together! You looked incredible in your costume and we ate way too much candy.",
      image: "/anniversary/halloween.jpg",
      emoji: "🎃",
      theme: "halloween",
      bgGradient: "from-orange-100 to-purple-100 dark:from-orange-900 dark:to-purple-900",
      dotColor: "bg-orange-500",
      titleColor: "text-orange-600 dark:text-orange-400",
      icons: ["🎃", "👻", "🍭", "🧙‍♀️"]
    },
    {
      date: "December 25, 2024",
      title: "First Christmas Together",
      description: "Our first Christmas as a couple. The most wonderful time of the year became even better with you.",
      image: "/anniversary/christmas.jpg",
      emoji: "🎄",
      theme: "christmas",
      bgGradient: "from-green-100 to-red-100 dark:from-green-900 dark:to-red-900",
      dotColor: "bg-green-500",
      titleColor: "text-green-600 dark:text-green-400",
      icons: ["🎄", "🎁", "❄️", "⭐"]
    },
    {
      date: "January 15, 2025",
      title: "One Year Anniversary",
      description: "365 days of love, laughter, and endless joy. Here&apos;s to forever with you, Yasmin. ❤️",
      image: "/anniversary/one-year.jpg",
      emoji: "🥂",
      theme: "anniversary",
      bgGradient: "from-gold-100 to-yellow-100 dark:from-yellow-900 dark:to-amber-900",
      dotColor: "bg-yellow-500",
      titleColor: "text-yellow-600 dark:text-yellow-400",
      icons: ["🥂", "💖", "🌟", "♾️"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 text-gray-800 dark:text-gray-100 font-wes">
      
      {/* Header */}
      <div className="text-center py-16 px-6">
        <button
          onClick={() => router.push("/")}
          className="mb-8 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition"
        >
          ← Back to Main Site
        </button>
        
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 mb-4">
          Michael & Yasmin
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-4">Our First Year Together</h2>
        <div className="text-lg text-pink-600 font-semibold">
          January 15, 2024 - January 15, 2025
        </div>
        <div className="text-4xl mt-4">💖</div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 to-rose-400"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start mb-16 last:mb-0">
              {/* Timeline dot */}
              <div className={`absolute left-6 w-5 h-5 ${event.dotColor} rounded-full border-4 border-white dark:border-zinc-900 shadow-lg z-10`}></div>
              
              {/* Content */}
              <div className={`ml-20 bg-gradient-to-br ${event.bgGradient} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/50 dark:border-zinc-700/50`}>
                
                {/* Floating themed icons */}
                <div className="absolute -top-2 -right-2 flex space-x-1">
                  {event.icons.map((icon, idx) => (
                    <span 
                      key={idx}
                      className="text-lg opacity-60 hover:opacity-100 transition-opacity animate-pulse"
                      style={{ animationDelay: `${idx * 0.5}s` }}
                    >
                      {icon}
                    </span>
                  ))}
                </div>

                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3 drop-shadow-lg">{event.emoji}</span>
                  <div>
                    <h3 className={`text-xl font-bold ${event.titleColor} drop-shadow-sm`}>{event.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{event.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4 text-sm">
                  {event.description}
                </p>
                
                {/* Themed placeholder for image */}
                <div className={`w-full h-64 bg-gradient-to-br ${event.bgGradient} rounded-lg flex items-center justify-center border-2 border-white/30 dark:border-zinc-600/30`}>
                  <div className="text-center">
                    <div className="flex justify-center space-x-2 mb-3">
                      {event.icons.map((icon, idx) => (
                        <span key={idx} className="text-3xl opacity-40">{icon}</span>
                      ))}
                    </div>
                    <div className="text-5xl mb-2 drop-shadow-lg">{event.emoji}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Photo coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Love message */}
      <div className="text-center py-16 px-6 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-zinc-800 dark:to-zinc-700">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6">
            To My Beautiful Yasmin
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
            &ldquo;This past year has been the most amazing year of my life, and it&apos;s all because of you. 
            Every day with you feels like a new adventure, filled with love, laughter, and endless joy. 
            You make everything brighter, and I can&apos;t wait to create countless more memories together. 
            Happy anniversary, my love. Here&apos;s to forever with you.&rdquo;
          </p>
          <div className="text-2xl mt-6">💕</div>
          <p className="text-pink-600 dark:text-pink-400 font-semibold mt-2">
            All my love, Michael
          </p>
        </div>
      </div>
      
    </main>
  );
}