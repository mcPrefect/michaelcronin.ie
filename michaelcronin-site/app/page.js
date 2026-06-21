"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaCameraRetro } from "react-icons/fa";
import Image from "next/image";
import DarkModeToggle from "../components/DarkModeToggle";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { logos } from "../data/skills";
import SkillsStrip from "../components/SkillsStrip";
// import Tabs from "../components/Tabs";
import { useRouter } from "next/navigation";

export default function Home() {
  const underConstruction = false;
  // const [tab, setTab] = useState("about");
  const [open, setOpen] = useState(-1);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const images = [
    "/photos/photo-1.jpg",
    "/photos/photo-2.jpg",
    "/photos/photo-3.jpg",
    "/photos/photo-4.jpg",
    "/photos/photo-5.jpg",
    "/photos/photo-6.jpg",
  ];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "270924") {
      router.push("/anniversary");
    } else {
      alert("Incorrect password!");
      setPassword("");
    }
  };

  const baseTabStyle =
    "px-4 py-2 border-b-2 font-medium text-wesBrown hover:text-wesTeal hover:border-wesTeal dark:text-wesBrown dark:hover:text-wesTeal";
  const activeTabStyle =
    "px-4 py-2 border-b-2 font-medium text-wesTeal border-wesTeal dark:text-wesTeal";

  if (underConstruction) {
    return (
      <main className="min-h-screen bg-yellow-100 flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-yellow-800">🚧 Under Construction</h1>
          <p className="text-lg text-yellow-700 max-w-xl mx-auto">
            Hi Yasmin, I love you - Michael
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-wesCream dark:bg-zinc-900 text-wesText dark:text-gray-100 font-wes px-6 md:px-20 pt-0 pb-16 transition-colors duration-300">

      {/* <div className="flex justify-center space-x-6 border-b border-wesBrown mb-12">
        <button className={tab === "about" ? activeTabStyle : baseTabStyle} onClick={() => setTab("about")}>About</button>
        <button className={tab === "projects" ? activeTabStyle : baseTabStyle} onClick={() => setTab("projects")}>Projects</button>
        <button className={tab === "photography" ? activeTabStyle : baseTabStyle} onClick={() => setTab("photography")}>Photography</button>
        <button className={tab === "contact" ? activeTabStyle : baseTabStyle} onClick={() => setTab("contact")}>Contact</button>
      </div> */}

      <section id="about">
        <section className="pt-16 flex flex-col md:flex-row md:items-start items-center justify-between md:space-x-12 space-y-10 md:space-y-0">
          <div className="md:w-1/2 space-y-10">
            <blockquote className="border-l-4 border-orange-500 pl-4 italic text-orange-500 text-xl leading-relaxed">
              “Isn&apos;t it enough to see that a garden is beautiful without<br />
              having to believe that there are fairies at the bottom of it too?”
              <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                ― Douglas Adams, <em>The Hitchhiker&apos;s Guide to the Galaxy</em>
              </footer>
            </blockquote>
            <div>
              <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-2">MICHAEL CRONIN</h1>
              <h2 className="text-xl font-semibold text-wesTeal mb-4">ARTIFICIAL INTELLIGENCE & MACHINE LEARNING STUDENT</h2>
              {/* <h3 className="text-lg font-semibold mt-8 mb-2">ABOUT ME</h3> */}
              <p className="text-base leading-relaxed">
                I&apos;m studying Artificial Intelligence & Machine Learning at the University of Limerick, where I focus on designing smart, adaptable systems. Through my internship at Dell Technologies, I&apos;ve gained hands-on experience working with real-world data, developing efficient tools, and contributing to innovative tech solutions. I enjoy solving meaningful problems and continuously exploring new ideas in AI, design, and software development.
              </p>
            </div>
            <div className="flex space-x-6 mt-6 text-sm text-gray-700 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-xl">📍</span>
                <span>Limerick & Cork, Ireland</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🎓</span>
                <span>University of Limerick</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">INTERESTS</h3>
              <p className="text-base dark:text-gray-300">
                Artificial intelligence, machine learning, data science, and technology innovation.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-sm">
              <Image
                src="/michael.jpg"
                alt="Michael Cronin"
                width={400}
                height={600}
                className="rounded-xl shadow-xl object-cover w-full"
              />
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic">
  Captured by Yasmin{" "}
  <button
    onClick={() => setShowPasswordModal(true)}
    className="relative inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-pink-500/20 transition-all duration-300 opacity-80 hover:opacity-100 animate-pulse1"
    title="Secret"
  >
    <span className="text-orange-500 text-lg">❤</span>
  </button>
</div>

            </div>
          </div>
        </section>
      </section>



      <section className="mt-16">
        {/* <h2 className="text-4xl font-bold mb-12">Skills & Tools I Have...</h2> */}
        <SkillsStrip />
      </section>





      <>
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-12">Stuff I&apos;ve Done...</h2>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                title: "Portfolio Website",
                description:
                  "Fully responsive personal site built with Next.js and Tailwind. Features dark mode, animated tabs, and a photography lightbox gallery. Deployed on Vercel.",
                image: "/projects/portfolio.png",
                liveLink: "#",
                codeLink: "#",
                tags: ["Next.js", "Tailwind", "Vercel"],
              },
              {
                title: "Plastic Type Classifier",
                description:
                  "Multimodal pipeline using CNNs on hyperspectral imagery to detect plastic types and link them to health risk profiles.",
                image: "/projects/plastic.png",
                liveLink: "#",
                codeLink: "#",
                tags: ["MML", "CNN", "Hyperspectral"],
              },
              {
                title: "AI Image Generation",
                description:
                  "Streamlit app powered by Fooocus that converts photos into stylized cartoon art. Runs in Docker with a simple UI.",
                image: "/projects/toonify.png",
                liveLink: "#",
                codeLink: "#",
                tags: ["Streamlit", "Docker", "Fooocus"],
              },
              {
                title: "AI Data Analyst Dashboard",
                description:
                  "Interactive Streamlit app that combines PandasAI with an Ollama LLM backend. Users can upload CSVs and ask natural-language questions to generate insights, plots, and summaries automatically.",
                image: "/projects/data-analyst.png",
                liveLink: "#",
                codeLink: "#",
                tags: ["Streamlit", "PandasAI", "Ollama"],
              },
              {
                title: "Multimodal AI Inference Server",
                description:
                  "Built a local inference pipeline using vLLM to serve Pixtral, a multimodal vision-language model from Hugging Face. The setup mimics OpenAI's API and connects to Open WebUI for interactive image+text analysis.",
                image: "/projects/pixtral-server.png",
                liveLink: "#",
                codeLink: "#",
                tags: ["vLLM", "Pixtral", "Hugging Face", "Multimodal"],
              },
              {
                title: "Autonomous Agents with n8n",
                description:
                  "Built a modular agent system using n8n to automate tasks like scraping web content, managing Gmail inboxes, and checking calendar availability. Each workflow is customizable and runs with minimal user input.",
                image: "/projects/agents-n8n.png",
                liveLink: "#",
                codeLink: "#",
                tags: ["n8n", "Automation", "Agents", "Web Scraping"],
              }



            ]

              .map((project, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center gap-10 bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-xl p-6 hover:scale-[1.02] hover:shadow-2xl transition duration-300"
                >

                  {/* Text */}
                  <div className="md:w-1/2 text-left space-y-4">
                    <h3 className="text-3xl font-semibold">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
                      >
                        Live App
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Learn More
                      </a>
                    </div> */}
                  </div>

                  {/* Image */}
                  <div className="md:w-1/2 flex justify-center">
                    <Image
                      alt="Project Image"
                      src={project.image}
                      width={400}
                      height={250}
                      className="rounded-xl w-full object-cover"
                    />
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* <SkillsStrip /> */}
      </>






      <section className="px-6 sm:px-12 py-16 w-full">
        <h2 className="text-4xl font-bold mb-12">Photos I&apos;ve Taken...</h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setOpen(i)}
              className="break-inside-avoid cursor-pointer"
            >
              <img
                src={src}
                alt=""
                className="w-full h-auto object-cover mb-4"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={open >= 0}
          close={() => setOpen(-1)}
          index={open}
          slides={images.map((src) => ({ src }))}
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
        />
      </section>








      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          Reach out any time at <a href="mailto:michael04cronin@gmail.com" className="underline text-blue-600 dark:text-blue-400">michael04cronin@gmail.com</a>
        </p>
        <div className="flex justify-center space-x-6 text-2xl mt-4">
          <a href="https://github.com/mcPrefect" target="_blank" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/michael-cronin-5269a51b2" target="_blank" className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://glass.photo/michaelcronin" target="_blank" className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-white transition">
            <FaCameraRetro />
          </a>
        </div>
      </section>

      <p className="text-center text-xs text-gray-400 dark:text-gray-600 pb-6">
        Built with a little help from AI
      </p>

     {/* Enhanced Password Modal */}
{showPasswordModal && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
    <div className="relative">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-4 left-8 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-12 right-6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-8 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Main modal */}
      <div className="relative bg-gradient-to-br from-gray-900/95 via-zinc-800/95 to-black/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-700/50 animate-slideUp">
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-gray-900 via-zinc-800 to-black"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow">
            Access Required
          </h3>
          
          <p className="text-gray-400 text-center mb-6 text-sm">
            Enter the secret password to continue your journey
          </p>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            {/* Password input with fancy styling */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-gray-800/70 transition-all duration-300 focus:shadow-[0_0_20px_rgba(236,72,153,0.3)] backdrop-blur-sm"
                autoFocus
              />
              {/* Input glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-3">
              <button
                type="submit"
                className="flex-1 relative group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(236,72,153,0.4)] focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Enter
                </span>
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setShowPasswordModal(false);
                  setPassword("");
                }}
                className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] border border-gray-600/30 hover:border-gray-500/50 backdrop-blur-sm"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-pink-500/30 rounded-tr-lg"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-purple-500/30 rounded-bl-lg"></div>
        </div>
      </div>
    </div>
  </div>
)}

{/* Add these CSS animations */}
<style jsx>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { 
      opacity: 0; 
      transform: translateY(20px) scale(0.95); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0) scale(1); 
    }
  }
  
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 20px rgba(236, 72, 153, 0.5); }
    50% { text-shadow: 0 0 30px rgba(236, 72, 153, 0.8), 0 0 40px rgba(147, 51, 234, 0.5); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
  
  .animate-slideUp {
    animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
`}</style>

      <DarkModeToggle />

    </main>
  );
}
