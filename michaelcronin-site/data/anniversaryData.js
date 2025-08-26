// /data/anniversaryData.js
// Anniversary Timeline Events and Character Data

export const timelineEvents = [
  { 
    date: "June 6, 2024", 
    title: "The day we met", 
    description: `Meeting you was the best thing to ever happen to me Yasmin. When I first layed eyes on you I had no idea how amazing
    my life was about to get from that moment on. I will have no regrets in my life up till then becuase every choice I ever made eventually
    led me to you. `, 
    image: "/anniversary/PXL_20240626_102055755.MP.jpg", 
  },
  { 
    // date: "June 21, 2024", 
    title: "First texts", 
    // description: "\"Good Luck with your Results\" you said to me. The beginning of everything.", 
    whatsappMessages: [
      { 
        sender: "Yasmin", 
        message: "Good luck with your results", 
        time: "June 21", 
        type: "received" 
      },
       { 
        sender: "Michael", 
        message: "Thx u too.", 
        time: "June 21", 
        type: "sent" 
      }
    ] 
  },
{ 
    date: "August 10, 2024", 
    title: "Childhood Photos", 
    description: `I adored sending photos back and forth to you of when we were younger. I should have known then just how
    much I felt for you. I would melt so much inside when you said I was cute. But I still insist you were way cuter than me
    as a child.`, 
    images: ["/anniversary/PXL_20240626_102055755.MP.jpg", "/anniversary/PXL_20240626_102055755.MP.jpg",
               "/anniversary/PXL_20240626_102055755.MP.jpg","/anniversary/PXL_20240626_102055755.MP.jpg",      
    ]
  },
  { 
    date: "August 11, 2024", 
    title: "Are you ever aware of time slipping so quickly?...", 
    description: `I felt so lucky that sent this to me while driving home so I could listen to it.
    I adored it so much and there was a tiny part of me thinking if it was about me or not of course.
    `, 
    whatsappMessages: [
      { 
        sender: "Yasmin", 
        message: `... I have never been able to exist without misery holding me in its caress, its arms wrapped around me. 
        I feel comfort in sadness, it's how I've always been and how I'm meant to be. I glance away and stare at the ground, 
        the tiles that decorate the dingy floor becoming increasingly more fascinating.`, 
        time: "June 21", 
        type: "received" 
      },
     
    ] 
    
  },
  { 
    date: "August 13, 2024", 
    title: "When our eyes meet", 
    description: `I fell more and more for you every time i would lool into your eyes. It would be a group of us talking and we would jsut lock eyes.
    I wouldn't want to look away and you would stay also and in those moments where our hearts connected through our eyes, 
    I felt like you were my person even if I didn't know it fully yet.`, 
    whatsappMessages: [
      { 
        sender: "Yasmin", 
        message: "Your staring contests are illegal territory 🫠", 
        time: "August 13", 
        type: "received" 
      }
    ] 
  },
  { 
    date: "September 26, 2024", 
    title: "Hearing you sing", 
    description: `You sent a voice message of you singing. My heart melted.
                Your voice is magical my love. When I hear you sing to yourself occasionly
                in the shower from another room I have to stop where I am and just breathe.`, 
  },
  { 
    date: "September 2024", 
    title: "Our \"Pizza Date\"", 
    description: "Pride Parade, Pizza Date - adventure together.", 
  },
  { 
    date: "September 2024", 
    title: "I Luv You", 
    description: "\"I luv you\" message sent by me. The first time I said those words.", 
    whatsappMessages: [
      { 
        sender: "Michael", 
        message: "I luv you", 
        time: "September 2024", 
        type: "sent" 
      }
    ] 
  },
  { 
    date: "September 2024", 
    title: "Pulp Fiction Cinema Date", 
    description: "Our cinema date watching Pulp Fiction together.", 
  },
  { 
    date: "October 2024", 
    title: "Trip to Leeds - Alfie Templeman", 
    description: "Our trip to Leeds for Alfie Templeman and the Infinity Song.", 
    image: "/anniversary/PXL_20241115_134646343.jpg", 
  },
  { 
    date: "November 2024", 
    title: "Airbnb Cabin in the Woods", 
    description: "Our magical getaway in the cabin in the woods.", 
    image: "/anniversary/PXL_20250215_225347520.MP.jpg", 

    video: { 
      url: "/anniversary/VID-20250225-WA0001.mp4", 
      duration: "4:13", 
      title: "Our cabin in the woods getaway" 
    } 
  },
  { 
    date: "December 2024", 
    title: "London Concert - Djo", 
    description: "Our London concert seeing DJO.", 
  },
  { 
    date: "December 2024", 
    title: "Kilkenny Trip", 
    description: "Our beautiful trip to Kilkenny together.", 
  }
];

// Floating character images
export const floatingImages = [
  "/anniversary/wallow.png",
  "/anniversary/danny.png", 
  "/anniversary/pixel.png", 
  "/anniversary/emotionlord.png",
  "/anniversary/spacebeth.webp",
  "/anniversary/spacechris.png",
  "/anniversary/spacewallow.png",
  "/anniversary/spacedanny.png",
  "/anniversary/spacechris.png",
  "/anniversary/gayle.png",
  "/anniversary/horse.png",
  "/anniversary/jellykid.png",
  "/anniversary/firebug.png",
];

// Quote data for each floating character
export const characterQuotes = [
  { quote: "Love is the greatest adventure!", character: "Wallow" },
  { quote: "You two are perfect together!", character: "Danny" },
  { quote: "BEEP BOOP! LOVE DETECTED!", character: "RoboChris" },
  { quote: "Bear-y happy for you both!", character: "Bear" },
  { quote: "May I assist with your romance?", character: "Concierge" },
  { quote: "Pixel perfect love story!", character: "Pixel" },
  { quote: "I FEEL ALL THE EMOTIONS!", character: "Emotion Lord" }
];

// Helper function to add new timeline events easily
export const addTimelineEvent = (event) => {
  return [...timelineEvents, event];
};

// Helper function to get events by date range
export const getEventsByDateRange = (startDate, endDate) => {
  return timelineEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= new Date(startDate) && eventDate <= new Date(endDate);
  });
};

// Helper function to get events with images
export const getEventsWithImages = () => {
  return timelineEvents.filter(event => event.image || event.images);
};

// Helper function to get events with videos
export const getEventsWithVideos = () => {
  return timelineEvents.filter(event => event.video);
};

// Helper function to get events with WhatsApp messages
export const getEventsWithMessages = () => {
  return timelineEvents.filter(event => event.whatsappMessages);
};