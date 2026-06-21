"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { timelineEvents, floatingImages, characterQuotes } from '../../data/anniversaryData';

export default function Anniversary() {
  const router = useRouter();
  const [playingVideo, setPlayingVideo] = useState(null);
  const [daysCounter, setDaysCounter] = useState(0);
  const floatingRefs = useRef([]);
  const [showSpaceship, setShowSpaceship] = useState(true);

  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'anniversary-cursors';
    style.textContent = `
      body { cursor: url('/cursors/cursor1.png') 16 16, auto !important; }
      button { cursor: url('/cursors/pointer1.png') 8 8, pointer !important; }
    `;
    document.head.appendChild(style);
    return () => document.getElementById('anniversary-cursors')?.remove();
  }, []);

  // Audio setup - move this INSIDE useEffect
  // Audio setup - start music with spaceship
useEffect(() => {
  // Create audio element
  const backgroundMusic = new Audio('/audio/themesong.mp3');
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.3;

  // Function to play music
  function playBackgroundMusic() {
    backgroundMusic.play()
      .then(() => console.log('Audio started with spaceship'))
      .catch(error => console.log('Play error:', error));
  }

  // Start music immediately when component mounts (with spaceship)
  // Most browsers will allow this if user has interacted with the page before
  playBackgroundMusic();

  // Fallback: if auto-play fails, wait for user interaction
  function startAudioOnClick() {
    playBackgroundMusic();
    document.removeEventListener('click', startAudioOnClick);
  }

  // Add click listener as backup
  document.addEventListener('click', startAudioOnClick);

  // Cleanup function
  return () => {
    document.removeEventListener('click', startAudioOnClick);
    backgroundMusic.pause();
  };
}, []); // Runs once when component mounts (same time as spaceship appears)

  // Rest of your useEffect hooks...
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpaceship(false);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  // Days counter
  useEffect(() => {
    const startDate = new Date("2024-08-27");
    const updateCounter = () => {
      const now = new Date();
      const diffTime = Math.abs(now - startDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDaysCounter(diffDays);
    };
    updateCounter();
    const interval = setInterval(updateCounter, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

// Add this state at the top of your component (with other useState declarations)
const [initialPositions, setInitialPositions] = useState([]);

// Add this useEffect BEFORE your floating animations useEffect
useEffect(() => {
  if (typeof window !== 'undefined') {
    const positions = floatingImages.map(() => ({
      x: Math.random() * (window.innerWidth - 240) + 120,
      y: Math.random() * (window.innerHeight - 240) + 120
    }));
    setInitialPositions(positions);
  }
}, [floatingImages]);

// Update your existing floating animations useEffect
useEffect(() => {
  // Don't start animations until positions are set
  if (initialPositions.length === 0) return;

  // Generate floating elements based on floatingImages array length
  const floatingElements = floatingImages.map((_, index) => {
    // Generate varied properties for each element
    const speedVariations = [1.2, 1.5, 0.8, 2.0, 1.0, 1.8, 1.3];
    const rangeVariations = [20, 15, 25, 18, 22, 20, 18];
    const directionVariations = [
      { x: 1, y: 1 }, { x: -1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: -1 },
      { x: 1, y: 1 }, { x: -1, y: 1 }, { x: 1, y: -1 }
    ];
    const rotationSpeedVariations = [0.8, -1.2, 1.5, -0.5, 1.0, -1.5, 0.7];
    
    return {
      ref: index,
      speed: speedVariations[index % speedVariations.length],
      range: rangeVariations[index % rangeVariations.length],
      direction: directionVariations[index % directionVariations.length],
      rotation: 0,
      rotationSpeed: rotationSpeedVariations[index % rotationSpeedVariations.length]
    };
  });

  const intervals = floatingElements.map((element, index) => {
    let directionX = element.direction.x;
    let directionY = element.direction.y;
    
    return setInterval(() => {
      if (floatingRefs.current[index]) {
        // Use random initial positions instead of calculated ones
        const currentX = parseFloat(floatingRefs.current[index].style.left) || initialPositions[index]?.x || (index * 300 + 100);
        const currentY = parseFloat(floatingRefs.current[index].style.top) || initialPositions[index]?.y || (index * 200 + 150);
        
        const newX = currentX + directionX * element.speed;
        const newY = currentY + directionY * element.speed;
        
        // Update rotation
        element.rotation += element.rotationSpeed;
        
        // Bounce off screen edges with some padding
        const padding = 120;
        if (newX > window.innerWidth - padding || newX < padding) {
          directionX *= -1;
          element.rotationSpeed *= -1;
        }
        if (newY > window.innerHeight - padding || newY < padding) {
          directionY *= -1;
          element.rotationSpeed *= -1;
        }
        
        const finalX = Math.max(padding, Math.min(window.innerWidth - padding, newX));
        const finalY = Math.max(padding, Math.min(window.innerHeight - padding, newY));
        
        floatingRefs.current[index].style.left = finalX + "px";
        floatingRefs.current[index].style.top = finalY + "px";
        floatingRefs.current[index].style.transform = `rotate(${element.rotation}deg) scale(${0.8 + Math.sin(element.rotation * 0.01) * 0.2})`;
      }
    }, 50);
  });

  return () => intervals.forEach(clearInterval);
}, [floatingImages, initialPositions]); // Add initialPositions as dependency

// Update your FloatingCharacter component
const FloatingCharacter = ({ image, index, characterData }) => {
  const initialPos = initialPositions[index];
  
  return (
    <div
      ref={el => {
        if (el && initialPos) {
          el.style.left = initialPos.x + "px";
          el.style.top = initialPos.y + "px";
        }
        floatingRefs.current[index] = el;
      }}
      style={{ 
        position: "fixed", 
        zIndex: 5,
        transition: "none"
      }}
      className="floating-character relative"
    >
      <Image
        src={image}
        alt={`Floating character ${index + 1}`}
        width={100}
        height={100}
        className="drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] opacity-80"
      />
    </div>
  );
};

  // Quote Bubble Component
  const QuoteBubble = ({ quote, isVisible, position = "right" }) => (
    <div 
      className={`
        absolute transition-all duration-300 transform pointer-events-none z-20
        ${position === "right" ? "-right-4 top-0" : "-left-4 top-0"}
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
      `}
      style={{
        transform: `translate(${position === "right" ? "100%" : "-100%"}, -20px) scale(${isVisible ? 1 : 0.75})`
      }}
    >
      {/* Quote bubble */}
      <div 
        className={`
          relative bg-gradient-to-r from-purple-900/95 to-pink-900/95 
          backdrop-blur-sm border-2 border-purple-400/70 rounded-xl 
          px-3 py-2 max-w-48 text-center
        `}
        style={{
          boxShadow: '0 0 25px rgba(128, 0, 255, 0.6), inset 0 0 15px rgba(128, 0, 255, 0.3)'
        }}
      >
        {/* Quote text */}
        <p 
          className="pixel-font text-white text-xs font-bold leading-tight"
          style={{
            textShadow: '0 0 10px rgba(128, 0, 255, 0.9)'
          }}
        >
          {quote}
        </p>
        
        {/* Speech bubble tail */}
        <div 
          className={`
            absolute top-1/2 w-0 h-0 border-t-8 border-b-8 border-transparent
            ${position === "right" 
              ? "-left-2 border-r-8 border-r-purple-400/70" 
              : "-right-2 border-l-8 border-l-purple-400/70"
            }
          `}
          style={{ transform: "translateY(-50%)" }}
        ></div>
        
        {/* Glowing dots */}
        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-400 opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-purple-400 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );

  

  // Updated WhatsApp Message Component with title styling
  const WhatsAppMessage = ({ message, type, time, sender }) => (
    <div className={`flex ${type === "sent" ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`max-w-sm px-4 py-3 rounded-lg ${type === "sent" ? "bg-orange-500 bg-opacity-80" : "bg-blue-500 bg-opacity-80"} relative`}>
        {/* Message text with pixel font styling like titles */}
        <p className="pixel-font text-white text-lg font-bold leading-relaxed mb-2">
          {message}
        </p>
        {/* Sender and time info */}
        <div className="flex justify-between items-center text-xs">
          {sender && <span className="text-green-100 pixel-font font-semibold">{sender}</span>}
          <span className="text-green-100 opacity-75">{time}</span>
        </div>
      </div>
    </div>
  );

  const VideoPlayer = ({ video, eventIndex }) => {
    const isPlaying = playingVideo === eventIndex;
    const videoRef = useRef(null);
    return (
      <div className="mb-4">
        {isPlaying ? (
          <video
            ref={videoRef}
            controls
            autoPlay
            className="w-full max-w-md rounded-lg"
            onEnded={() => setPlayingVideo(null)}
          >
            <source src={video.url} type="video/mp4" />
          </video>
        ) : (
          <div className="relative">
            <div className="w-full max-w-md h-48 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🎥</div>
                <p className="text-sm mb-1">{video.title}</p>
                <p className="text-xs">{video.duration}</p>
              </div>
            </div>
            <button
              onClick={() => setPlayingVideo(eventIndex)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                <span className="text-2xl">▶️</span>
              </div>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <main
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/anniversary/space-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

       {/* Spaceship Flyby Animation */}
      {showSpaceship && (
        <div 
          className="fixed top-1/4 -right-[48rem] w-[48rem] h-[28rem] z-30 pointer-events-none"
          style={{
            animation: 'spaceshipFlyby 6s ease-in-out forwards'
          }}
        >
          <Image
            src="/anniversary/spacewhale.webp"
            alt="Space Whale Flying"
            width={768}
            height={448}
            className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,255,255,0.9)]"
            unoptimized={true} // Allow WebP GIF animation
          />
        </div>
      )}


      {/* Multiple Floating Characters with Quote Bubbles */}
      {floatingImages.map((image, index) => (
        <FloatingCharacter 
          key={index}
          image={image}
          index={index}
          characterData={characterQuotes[index] || { quote: "Hello there!", character: "Friend" }}
        />
      ))}

      {/* Header */}
      <div className="relative z-10 text-center py-20 px-6">
        <button
          onClick={() => router.push("/")}
          className="retro-button mb-12"
        >
          ← Back to Home
        </button>

        <div className="flex justify-center items-center space-x-4 mb-6 flex-wrap">
          <Image src="/anniversary/beth.png" width={120} height={120} alt="Michael sprite" className="drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]" />
          <Image
            src="/anniversary/title1.png"
            alt="Yasmin and Michael Anniversary Title"
            width={600}
            height={200}
            className="mx-auto animate-pulse"
          />
          <Image src="/anniversary/chris.png" width={120} height={120} alt="Yasmin sprite" className="drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]" />
        </div>

       <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 text-center">
  {/* Label */}
    <div className="text-sm md:text-base text-gray-400 italic">
    Days of adventures
  </div>

  {/* Counter */}
  <div className="text-4xl md:text-5xl font-bold neon-text rainbow-text animate-pulse">
    {daysCounter.toLocaleString()}
  </div>

  {/* Tagline */}
  <div className="text-sm md:text-base text-gray-400 italic">
    and many many more to go!
  </div>
</div>

      </div>

{/* Timeline */}
<div className="relative z-10 max-w-5xl mx-auto px-16 pb-20">
  <div className="space-y-24">
    {timelineEvents.map((event, index) => {
      // Array of character configurations with individual positioning
      const characterConfigs = [
        {
          image: "/anniversary/bearhand1.png",
          width: 200,
          height: 200,
          containerClasses: "absolute -left-32 -top-4 w-80 h-80 z-0 flex items-center justify-end"
        },
        {
          image: "/anniversary/catbughand.png", 
          width: 140,
          height: 180,
          containerClasses: "absolute -left-14 top-0 w-44 h-44 z-0 flex items-center justify-center"
        },
        {
          image: "/anniversary/concierge.png",
          width: 180,
          height: 180,
          containerClasses: "absolute -left-32 -top-4 w-50 h-50 z-0 flex items-end justify-end"
        },
        {
          image: "/anniversary/robochris.png",
          width: 150,
          height: 170,
          containerClasses: "absolute -left-24 top-1 w-55 h-55 z-0 flex items-start justify-end"
        },
      ];
      
      // Get the appropriate character config for this event (cycles through the array)
      const currentCharacterConfig = characterConfigs[index % characterConfigs.length];
      
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row items-start"
        >
          {/* Character PNG - positioned individually for each character */}
          <div className={currentCharacterConfig.containerClasses}>
            <Image 
              src={currentCharacterConfig.image}
              alt={`Character ${(index % characterConfigs.length) + 1}`}
              width={currentCharacterConfig.width}
              height={currentCharacterConfig.height}
              className="w-full h-full object-contain"
              style={{
                // filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
              }}
            />
          </div>

          {/* Event card with stick border */}
          <div className="ml-24 relative flex-1 max-w-2xl">
            {/* Stick border container */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {/* Top border */}
              <div 
                className="absolute top-0 left-0 right-0 h-12"
                style={{
                  backgroundImage: "url('/anniversary/stickX.png')",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "auto 100%",
                  filter: 'drop-shadow(2px 2px 4px rgba(139, 69, 19, 0.6))',
                }}
              />
              
              {/* Bottom border */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-12"
                style={{
                  backgroundImage: "url('/anniversary/stickX.png')",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "auto 100%",
                  filter: 'drop-shadow(2px 2px 4px rgba(139, 69, 19, 0.6))',
                }}
              />
              
              {/* Left border */}
              <div 
                className="absolute top-0 bottom-0 left-0 w-12"
                style={{
                  backgroundImage: "url('/anniversary/stickY.png')",
                  backgroundRepeat: "repeat-y",
                  backgroundSize: "100% auto",
                  filter: 'drop-shadow(2px 2px 4px rgba(139, 69, 19, 0.6))',
                }}
              />
              
              {/* Right border */}
              <div 
                className="absolute top-0 bottom-0 right-0 w-12"
                style={{
                  backgroundImage: "url('/anniversary/stickY.png')",
                  backgroundRepeat: "repeat-y",
                  backgroundSize: "100% auto",
                  filter: 'drop-shadow(2px 2px 4px rgba(139, 69, 19, 0.6))',
                }}
              />
            </div>

            {/* Card content with padding to account for stick border */}
            <div className="bg-black bg-opacity-70 rounded-lg p-6 m-6 relative z-0">
              <h3 className="text-xl font-bold pixel-font ">{event.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{event.date}</p>
              <p className="mb-4 accent-font">{event.description}</p>

              {/* WhatsApp messages with updated styling */}
              {event.whatsappMessages && (
                <div>
                  {event.whatsappMessages.map((msg, i) => (
                    <WhatsAppMessage key={i} {...msg} />
                  ))}
                </div>
              )}

              {/* Event images */}
              {event.images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {event.images.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img}
                      alt={`${event.title} - ${idx + 1}`}
                      className="w-full rounded-lg"
                      width={300}
                      height={200}
                    />
                  ))}
                </div>
              )}

              {/* Single event image */}
              {event.image && (
                <div className="mb-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-full rounded-lg"
                    width={600}
                    height={400}
                  />
                </div>
              )}

              {/* Video player */}
              {event.video && <VideoPlayer video={event.video} eventIndex={index} />}
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>

      {/* Love Letter */}
      {/* <div className="relative z-10 py-20 px-6">
        <div className="max-w-2xl mx-auto bg-black bg-opacity-80 rounded-lg p-12 text-center neon-border">
          <h2 className="text-3xl font-bold mb-8 pixel-font neon-text">
            To My Dearest Yasmin
          </h2>
          <p className="text-lg leading-relaxed mb-8 italic accent-font">
            &ldquo;This past year has been the most extraordinary year of my life...&rdquo;
          </p>
          <div className="text-center">
            <div className="text-2xl mb-4">💕</div>
            <p className="font-bold pixel-font">With all my love,</p>
            <p className="text-xl font-bold mt-2 pixel-font neon-text">Michael</p>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      {/* <footer className="relative z-10 text-center py-6 text-xs text-gray-400">
        Made with 💖 by Michael | 2025
      </footer> */}
    </main>
  );
}



  // const timelineEvents = [
  //   { date: "June 6, 2024", title: "When We First Met", description: "Dell. I was so nervous around you but it was also so easy to find things to talk to you about.", images: ["/anniversary/PXL_20240626_102055755.MP.jpg", "/anniversary/IMG-20240722-WA0006.jpg"], emoji: "💕" },
  //   { date: "June 21, 2024", title: "First Text", description: "\"Good Luck with your Results\" you said to me. The beginning of everything.", emoji: "💬", whatsappMessages: [{ sender: "Yasmin", message: "Good Luck with your Results", time: "June 21", type: "received" }] },
  //   { date: "July 2024", title: "Bravest Warriors", description: "I watched it on your suggestion. I adored it like I adored you.", emoji: "🐛" },
  //   { date: "August 8, 2024", title: "Something You Wrote", description: "You sent me something beautiful you had written. 'Are you ever aware of time slipping so quickly?...'", emoji: "✍️" },
  //   { date: "August 13, 2024", title: "Illegal Territory", description: "\"your staring contests are illegal territory\"", emoji: "👀", whatsappMessages: [{ sender: "Yasmin", message: "your staring contests are illegal territory", time: "August 13", type: "received" }] },
  //   { date: "August 26, 2024", title: "Night Night Voice Messages", description: "We sent night night voice messages. These are my favourite things in the world.", emoji: "🎙️" },
  //   { date: "September 26, 2024", title: "You Sang to Me", description: "You sent a voice message of you singing. My heart melted.", emoji: "🎵" },
  //   { date: "September 2024", title: "Pride & Pizza Date", description: "Pride Parade, Pizza Date - adventure together.", emoji: "🏳️‍🌈" },
  //   { date: "September 2024", title: "I Luv You", description: "\"I luv you\" message sent by me. The first time I said those words.", emoji: "💖", whatsappMessages: [{ sender: "Michael", message: "I luv you", time: "September 2024", type: "sent" }] },
  //   { date: "September 2024", title: "Pulp Fiction Cinema Date", description: "Our cinema date watching Pulp Fiction together.", emoji: "🎬" },
  //   { date: "September 27, 2024", title: "Milanos Date", description: "Our special date at Milanos.", emoji: "🍽️" },
  //   { date: "October 2024", title: "Crescent Carpark Nights", description: "Making out till late in the Crescent Carpark.", emoji: "🌙" },
  //   { date: "October 2024", title: "Trip to Leeds - Alfie Templeman", description: "Our trip to Leeds for Alfie Templeman and the Infinity Song.", image: "/anniversary/PXL_20241115_134646343.jpg", emoji: "🎵" },
  //   { date: "November 2024", title: "New Girl Marathon", description: "Binge watching New Girl together.", emoji: "📺" },
  //   { date: "November 2024", title: "Airbnb Cabin in the Woods", description: "Our magical getaway in the cabin in the woods.", image: "/anniversary/PXL_20250215_225347520.MP.jpg", emoji: "🏕️", video: { url: "/anniversary/VID-20250225-WA0001.mp4", duration: "4:13", title: "Our cabin in the woods getaway" } },
  //   { date: "December 2024", title: "London Concert - Djo", description: "Our London concert seeing DJO.", emoji: "🎤" },
  //   { date: "December 2024", title: "Kilkenny Trip", description: "Our beautiful trip to Kilkenny together.", emoji: "🏰" }
  // ];