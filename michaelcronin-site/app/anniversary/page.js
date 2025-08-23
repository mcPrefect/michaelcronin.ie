"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Anniversary() {
  const router = useRouter();
  const [playingAudio, setPlayingAudio] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  
  const timelineEvents = [
    {
      date: "January 15, 2024",
      title: "Our First Date",
      description: "We met for coffee and talked for hours. I knew there was something special about you.",
      image: "/anniversary/first-date.jpg",
      emoji: "☕",
      theme: "coffee",
      bgGradient: "from-rose-50 to-pink-100 dark:from-rose-900 dark:to-rose-800",
      dotColor: "bg-rose-600",
      titleColor: "text-rose-800 dark:text-rose-200",
      icons: ["☕", "💬", "✨"]
    },
    {
      date: "March 8, 2024",
      title: "Pizza Night Tradition Begins",
      description: "Our first pizza date that started our weekly tradition. You always steal my pepperoni and I love it!",
      image: "/anniversary/pizza.jpg",
      emoji: "🍕",
      theme: "pizza",
      bgGradient: "from-pink-100 to-rose-200 dark:from-rose-800 dark:to-rose-900",
      dotColor: "bg-rose-700",
      titleColor: "text-rose-900 dark:text-rose-100",
      icons: ["🍕", "🧀", "❤️", "🍕"],
      whatsappMessages: [
        {
          sender: "Michael",
          message: "Pizza tonight? 🍕",
          time: "7:32 PM",
          type: "sent"
        },
        {
          sender: "Yasmin",
          message: "YES! But I&apos;m stealing all your pepperoni again 😈",
          time: "7:35 PM",
          type: "received"
        },
        {
          sender: "Michael",
          message: "I wouldn&apos;t have it any other way ❤️",
          time: "7:36 PM",
          type: "sent"
        }
      ]
    },
    {
      date: "April 22, 2024",
      title: "Bravest Warriors Marathon",
      description: "We discovered our shared love for Bravest Warriors! Catbug became our spirit animal and we&apos;ve been quoting it ever since.",
      image: "/anniversary/bravest-warriors.jpg",
      emoji: "🐛",
      theme: "bravest-warriors",
      bgGradient: "from-rose-100 to-pink-200 dark:from-rose-900 dark:to-pink-900",
      dotColor: "bg-rose-800",
      titleColor: "text-rose-800 dark:text-rose-200",
      icons: ["🐛", "🌟", "🚀", "💫"]
    },
    {
      date: "June 15, 2024",
      title: "First DJO Concert",
      description: "Our first concert together seeing DJO! Dancing badly and singing along to all the songs. Perfect night.",
      image: "/anniversary/djo.jpg",
      emoji: "🎵",
      theme: "djo",
      bgGradient: "from-pink-50 to-rose-100 dark:from-rose-950 dark:to-rose-800",
      dotColor: "bg-rose-600",
      titleColor: "text-rose-800 dark:text-rose-200",
      icons: ["🎵", "🎤", "🕺", "💃"],
      voiceMessage: {
        url: "/anniversary/voice/djo-concert.mp3",
        duration: "0:45",
        transcript: "Oh my god Michael, this concert is AMAZING! I love you so much!"
      },
      video: {
        url: "/anniversary/videos/djo-dancing.mp4",
        thumbnail: "/anniversary/thumbnails/djo-dancing.jpg",
        duration: "1:23",
        title: "Us dancing badly at DJO 😂"
      }
    },
    {
      date: "August 20, 2024",
      title: "Made It Official",
      description: "The day we became official. Best decision I ever made. You said yes and my heart exploded!",
      image: "/anniversary/official.jpg",
      emoji: "💍",
      theme: "official",
      bgGradient: "from-rose-200 to-pink-300 dark:from-rose-900 dark:to-rose-950",
      dotColor: "bg-rose-800",
      titleColor: "text-rose-900 dark:text-rose-100",
      icons: ["💍", "💕", "🥰", "✨"]
    },
    {
      date: "October 31, 2024",
      title: "Halloween Shenanigans",
      description: "Our first Halloween together! You looked incredible in your costume and we ate way too much candy.",
      image: "/anniversary/halloween.jpg",
      emoji: "🎃",
      theme: "halloween",
      bgGradient: "from-rose-100 to-pink-100 dark:from-rose-800 dark:to-rose-900",
      dotColor: "bg-rose-700",
      titleColor: "text-rose-800 dark:text-rose-200",
      icons: ["🎃", "👻", "🍭", "🧙‍♀️"]
    },
    {
      date: "December 25, 2024",
      title: "First Christmas Together",
      description: "Our first Christmas as a couple. The most wonderful time of the year became even better with you.",
      image: "/anniversary/christmas.jpg",
      emoji: "🎄",
      theme: "christmas",
      bgGradient: "from-pink-100 to-rose-200 dark:from-rose-900 dark:to-rose-800",
      dotColor: "bg-rose-600",
      titleColor: "text-rose-800 dark:text-rose-200",
      icons: ["🎄", "🎁", "❄️", "⭐"]
    },
    {
      date: "January 15, 2025",
      title: "One Year Anniversary",
      description: "365 days of love, laughter, and endless joy. Here&apos;s to forever with you, Yasmin. ❤️",
      image: "/anniversary/one-year.jpg",
      emoji: "🥂",
      theme: "anniversary",
      bgGradient: "from-rose-100 to-pink-200 dark:from-rose-900 dark:to-pink-900",
      dotColor: "bg-rose-800",
      titleColor: "text-rose-900 dark:text-rose-100",
      icons: ["🥂", "💖", "🌟", "♾️"]
    }
  ];

  // WhatsApp Message Component - Grand Budapest style
  const WhatsAppMessage = ({ message, type, sender, time }) => (
    <div className={`flex ${type === 'sent' ? 'justify-end' : 'justify-start'} mb-3`}>
      <div className={`max-w-sm px-4 py-3 border-2 shadow-md ${
        type === 'sent' 
          ? 'bg-rose-600 dark:bg-rose-700 text-rose-100 border-rose-700 dark:border-rose-600 rounded-sm rounded-br-none' 
          : 'bg-rose-50 dark:bg-rose-800 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-600 rounded-sm rounded-bl-none'
      }`}>
        <p className="text-sm font-medium leading-relaxed">{message}</p>
        <p className={`text-xs mt-2 font-medium tracking-wide ${
          type === 'sent' ? 'text-rose-200' : 'text-rose-600 dark:text-rose-400'
        }`}>
          {time}
        </p>
      </div>
    </div>
  );

  // Voice Message Component
  const VoiceMessage = ({ voiceMessage, eventIndex }) => {
    const isPlaying = playingAudio === eventIndex;
    
    return (
      <div className="bg-white/50 dark:bg-zinc-800/50 rounded-lg p-4 border border-gray-200 dark:border-zinc-600">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setPlayingAudio(isPlaying ? null : eventIndex)}
            className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition"
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Voice Message</span>
              <span className="text-xs text-gray-500">{voiceMessage.duration}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-zinc-600 rounded-full h-2">
              <div className={`bg-green-500 h-2 rounded-full transition-all duration-300 ${
                isPlaying ? 'w-full' : 'w-0'
              }`}></div>
            </div>
          </div>
        </div>
        {voiceMessage.transcript && (
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
            &ldquo;{voiceMessage.transcript}&rdquo;
          </p>
        )}
      </div>
    );
  };

  // Video Player Component
  const VideoPlayer = ({ video, eventIndex }) => {
    const isPlaying = playingVideo === eventIndex;
    
    return (
      <div className="bg-white/50 dark:bg-zinc-800/50 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-600">
        <div className="relative">
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-700 dark:to-zinc-600 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🎥</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Video: {video.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">{video.duration}</p>
            </div>
          </div>
          <button
            onClick={() => setPlayingVideo(isPlaying ? null : eventIndex)}
            className="absolute inset-0 bg-black/20 hover:bg-black/30 transition flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl ml-1">{isPlaying ? '⏸️' : '▶️'}</span>
            </div>
          </button>
        </div>
        <div className="p-3">
          <p className="text-sm font-medium">{video.title}</p>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-100 to-pink-200 dark:from-rose-950 dark:via-pink-900 dark:to-rose-950 text-rose-900 dark:text-rose-100 font-serif relative overflow-hidden">
      
      {/* Grand Budapest Hotel decorative border */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-4 border-8 border-rose-800/20 dark:border-rose-200/20 rounded-lg"></div>
        <div className="absolute inset-6 border-4 border-rose-600/30 dark:border-rose-300/30 rounded-lg"></div>
        <div className="absolute inset-8 border-2 border-rose-400/40 dark:border-rose-400/40 rounded-lg"></div>
      </div>

      {/* Vintage wallpaper pattern overlay */}
      <div className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none" 
           style={{
             backgroundImage: `repeating-linear-gradient(
               45deg,
               transparent,
               transparent 10px,
               rgba(185, 28, 28, 0.1) 10px,
               rgba(185, 28, 28, 0.1) 20px
             )`
           }}>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center py-20 px-6">
        <button
          onClick={() => router.push("/")}
          className="mb-12 px-6 py-2 bg-rose-800 hover:bg-rose-900 text-rose-100 rounded-sm font-medium tracking-wider text-sm border-2 border-rose-700 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          ← RETURN TO LOBBY
        </button>
        
        {/* Ornate frame for title */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-200 to-pink-300 dark:from-rose-800 dark:to-rose-900 rounded-lg shadow-2xl border-4 border-rose-800 dark:border-rose-300"></div>
          <div className="relative bg-gradient-to-b from-pink-50 to-rose-100 dark:from-rose-900 dark:to-rose-800 m-4 rounded-lg p-12 border-2 border-rose-600 dark:border-rose-400 shadow-inner">
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-rose-600 dark:border-rose-300"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-rose-600 dark:border-rose-300"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-rose-600 dark:border-rose-300"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-rose-600 dark:border-rose-300"></div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-rose-800 dark:text-rose-200 mb-6 tracking-wider leading-none">
              MICHAEL & YASMIN
            </h1>
            <div className="w-32 h-1 bg-rose-600 dark:bg-rose-400 mx-auto mb-4"></div>
            <h2 className="text-xl md:text-2xl text-rose-700 dark:text-rose-300 mb-6 tracking-widest font-medium">
              OUR FIRST YEAR TOGETHER
            </h2>
            <div className="text-lg text-rose-600 dark:text-rose-400 font-medium tracking-wide">
              JANUARY 15, 2024 - JANUARY 15, 2025
            </div>
            
            {/* Ornate flourish */}
            <div className="mt-8 text-rose-600 dark:text-rose-400">
              <div className="text-4xl">♦</div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <div className="relative">
          {/* Ornate timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-2 bg-gradient-to-b from-rose-600 via-rose-700 to-rose-800 shadow-lg"></div>
          <div className="absolute left-7 top-0 bottom-0 w-4 bg-gradient-to-b from-rose-200/50 via-rose-300/50 to-rose-400/50 blur-sm"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start mb-20 last:mb-0">
              {/* Ornate timeline dot */}
              <div className={`absolute left-5 w-8 h-8 ${event.dotColor} rounded-full border-4 border-rose-100 dark:border-rose-800 shadow-xl z-10`}>
                <div className="absolute inset-1 bg-rose-50 dark:bg-rose-900 rounded-full border border-rose-300 dark:border-rose-700"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-rose-200 to-rose-400 dark:from-rose-700 dark:to-rose-900 rounded-full"></div>
              </div>
              
              {/* Content - Grand Budapest Hotel card style */}
              <div className={`ml-24 bg-gradient-to-br ${event.bgGradient} rounded-sm shadow-2xl border-4 border-rose-800 dark:border-rose-300 relative overflow-hidden`}>
                
                {/* Ornate border pattern */}
                <div className="absolute inset-2 border-2 border-rose-700/40 dark:border-rose-400/40 rounded-sm"></div>
                <div className="absolute inset-4 border border-rose-600/30 dark:border-rose-500/30 rounded-sm"></div>
                
                {/* Content padding */}
                <div className="relative p-8">
                
                  {/* Ornate corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-rose-700 dark:border-rose-300"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-rose-700 dark:border-rose-300"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-rose-700 dark:border-rose-300"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-rose-700 dark:border-rose-300"></div>

                  {/* Floating themed icons - Wes Anderson style */}
                  <div className="absolute -top-3 -right-3 flex space-x-2">
                    {event.icons.map((icon, idx) => (
                      <div 
                        key={idx}
                        className="w-8 h-8 bg-rose-800 dark:bg-rose-200 rounded-full flex items-center justify-center text-rose-100 dark:text-rose-800 border-2 border-rose-100 dark:border-rose-800 shadow-lg animate-pulse"
                        style={{ animationDelay: `${idx * 0.5}s` }}
                      >
                        <span className="text-sm">{icon}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-rose-800 dark:bg-rose-200 rounded-full flex items-center justify-center mr-4 border-4 border-rose-100 dark:border-rose-800 shadow-xl">
                      <span className="text-2xl text-rose-100 dark:text-rose-800">{event.emoji}</span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${event.titleColor} tracking-wider mb-1`}>{event.title}</h3>
                      <p className="text-sm text-rose-700 dark:text-rose-300 font-medium tracking-wide bg-rose-200/50 dark:bg-rose-800/50 px-3 py-1 rounded-full border border-rose-300 dark:border-rose-700 inline-block">{event.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-rose-800 dark:text-rose-200 leading-relaxed mb-6 font-medium">
                    {event.description}
                  </p>
                
                  {/* Multimedia Content */}
                  <div className="space-y-6 mb-6">
                    {/* WhatsApp Messages - Grand Budapest style */}
                    {event.whatsappMessages && (
                      <div className="bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50 rounded-sm p-6 border-2 border-rose-600 dark:border-rose-400 shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 bg-rose-600 dark:bg-rose-400 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white dark:text-rose-900 text-sm">💬</span>
                          </div>
                          <span className="font-bold text-rose-800 dark:text-rose-200 tracking-wide">PRIVATE CORRESPONDENCE</span>
                        </div>
                        {event.whatsappMessages.map((msg, idx) => (
                          <WhatsAppMessage 
                            key={idx}
                            message={msg.message}
                            type={msg.type}
                            sender={msg.sender}
                            time={msg.time}
                          />
                        ))}
                      </div>
                    )}

                    {/* Voice Message */}
                    {event.voiceMessage && (
                      <VoiceMessage voiceMessage={event.voiceMessage} eventIndex={index} />
                    )}

                    {/* Video */}
                    {event.video && (
                      <VideoPlayer video={event.video} eventIndex={index} />
                    )}
                  </div>
                  
                  {/* Ornate photo placeholder */}
                  <div className={`w-full h-80 bg-gradient-to-br ${event.bgGradient} rounded-sm border-4 border-rose-700 dark:border-rose-300 shadow-xl relative overflow-hidden`}>
                    <div className="absolute inset-2 border-2 border-rose-600/50 dark:border-rose-400/50 rounded-sm"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center bg-rose-50/80 dark:bg-rose-900/80 p-8 rounded-sm border border-rose-300 dark:border-rose-600 backdrop-blur-sm">
                        <div className="flex justify-center space-x-3 mb-4">
                          {event.icons.map((icon, idx) => (
                            <div key={idx} className="w-12 h-12 bg-rose-800 dark:bg-rose-200 rounded-full flex items-center justify-center">
                              <span className="text-xl text-rose-100 dark:text-rose-800">{icon}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-6xl mb-4 text-rose-800 dark:text-rose-200">{event.emoji}</div>
                        <p className="text-sm text-rose-700 dark:text-rose-300 font-medium tracking-wide">PHOTOGRAPH FORTHCOMING</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Love Letter - Grand Budapest Hotel style */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Ornate letter frame */}
          <div className="relative bg-gradient-to-b from-rose-100 to-pink-200 dark:from-rose-900 dark:to-rose-800 rounded-sm border-4 border-rose-800 dark:border-rose-300 shadow-2xl">
            <div className="absolute inset-2 border-2 border-rose-700/50 dark:border-rose-400/50 rounded-sm"></div>
            <div className="absolute inset-4 border border-rose-600/40 dark:border-rose-500/40 rounded-sm"></div>
            
            {/* Letter content */}
            <div className="relative p-16">
              {/* Ornate corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-rose-700 dark:border-rose-300"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-rose-700 dark:border-rose-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-rose-700 dark:border-rose-300"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-rose-700 dark:border-rose-300"></div>
              
              {/* Header */}
              <div className="text-center mb-12">
                <div className="text-4xl text-rose-600 dark:text-rose-400 mb-4">♦</div>
                <h2 className="text-4xl font-bold text-rose-800 dark:text-rose-200 tracking-widest mb-2">
                  TO MY DEAREST YASMIN
                </h2>
                <div className="w-48 h-1 bg-rose-600 dark:bg-rose-400 mx-auto"></div>
              </div>
              
              {/* Letter text */}
              <div className="bg-rose-50/50 dark:bg-rose-900/30 p-8 rounded-sm border border-rose-300 dark:border-rose-600 shadow-inner">
                <p className="text-lg text-rose-800 dark:text-rose-200 leading-relaxed font-medium text-center italic mb-8">
                  &ldquo;This past year has been the most extraordinary year of my life, and it&apos;s all because of you. 
                  Every day with you feels like a new adventure, filled with love, laughter, and endless joy. 
                  You make everything brighter, and I can&apos;t wait to create countless more memories together. 
                  Happy anniversary, my love. Here&apos;s to forever with you.&rdquo;
                </p>
                
                {/* Signature */}
                <div className="text-center">
                  <div className="text-3xl text-rose-600 dark:text-rose-400 mb-4">💕</div>
                  <p className="text-rose-700 dark:text-rose-300 font-bold tracking-wide text-lg">
                    WITH ALL MY LOVE,
                  </p>
                  <p className="text-rose-800 dark:text-rose-200 font-bold tracking-wider text-2xl mt-2">
                    MICHAEL
                  </p>
                  <div className="w-24 h-0.5 bg-rose-600 dark:bg-rose-400 mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}