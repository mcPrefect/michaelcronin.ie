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
      emoji: "☕"
    },
    {
      date: "February 14, 2024",
      title: "First Valentine&apos;s Day",
      description: "Our first Valentine&apos;s Day together. You made everything feel magical.",
      image: "/anniversary/valentines.jpg",
      emoji: "💕"
    },
    {
      date: "March 22, 2024",
      title: "Made It Official",
      description: "The day we became official. Best decision I ever made.",
      image: "/anniversary/official.jpg",
      emoji: "💍"
    },
    {
      date: "June 10, 2024",
      title: "First Trip Together",
      description: "Our amazing weekend getaway. So many beautiful memories made.",
      image: "/anniversary/trip.jpg",
      emoji: "✈️"
    },
    {
      date: "August 5, 2024",
      title: "Meeting the Families",
      description: "The day our families met. Everyone loves you as much as I do.",
      image: "/anniversary/families.jpg",
      emoji: "👨‍👩‍👧‍👦"
    },
    {
      date: "December 25, 2024",
      title: "First Christmas Together",
      description: "Our first Christmas as a couple. The most wonderful time of the year became even better.",
      image: "/anniversary/christmas.jpg",
      emoji: "🎄"
    },
    {
      date: "January 15, 2025",
      title: "One Year Anniversary",
      description: "365 days of love, laughter, and endless joy. Here&apos;s to forever with you, Yasmin. ❤️",
      image: "/anniversary/one-year.jpg",
      emoji: "🥂"
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
              <div className="absolute left-6 w-5 h-5 bg-pink-500 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg z-10"></div>
              
              {/* Content */}
              <div className="ml-20 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{event.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400">{event.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {event.description}
                </p>
                
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-zinc-700 dark:to-zinc-600 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="text-4xl mb-2">{event.emoji}</div>
                    <p className="text-sm">Photo coming soon...</p>
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