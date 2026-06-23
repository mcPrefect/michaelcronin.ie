"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaCameraRetro } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "../components/DarkModeToggle";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { logos } from "../data/skills";
import SkillsStrip from "../components/SkillsStrip";
// import Tabs from "../components/Tabs";
import BookCarousel from "../components/BookCarousel";

export default function Home() {
  const underConstruction = true;
  // const [tab, setTab] = useState("about");
  const [open, setOpen] = useState(-1);

  const images = [
    "/photos/photo-1.jpg",
    "/photos/photo-2.jpg",
    "/photos/photo-3.jpg",
    "/photos/photo-4.jpg",
    "/photos/photo-5.jpg",
    "/photos/photo-6.jpg",
  ];

  const baseTabStyle =
    "px-4 py-2 border-b-2 font-medium text-wesBrown hover:text-wesTeal hover:border-wesTeal dark:text-wesBrown dark:hover:text-wesTeal";
  const activeTabStyle =
    "px-4 py-2 border-b-2 font-medium text-wesTeal border-wesTeal dark:text-wesTeal";

  if (underConstruction) {
    return (
      <main className="min-h-screen bg-yellow-100 flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-yellow-800">🚧 Under Construction</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-wesCream dark:bg-zinc-900 text-wesText dark:text-gray-100 font-wes px-6 md:px-20 pt-0 pb-16 transition-colors duration-300">

      {/* Sticky header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-sm border-b border-wesBrown/10 dark:border-zinc-700/30 bg-wesCream/90 dark:bg-zinc-900/90"
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        <nav className="flex items-center justify-between px-6 md:px-20 h-14">
          <span className="font-extrabold tracking-tight text-sm text-wesText dark:text-gray-100">
            MICHAEL CRONIN
          </span>
          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] text-wesText/60 dark:text-gray-400">
            <a href="#about"    className="hover:text-wesText dark:hover:text-gray-100 transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-wesText dark:hover:text-gray-100 transition-colors">PROJECTS</a>
            <a href="#photos"   className="hover:text-wesText dark:hover:text-gray-100 transition-colors">PHOTOS</a>
            <a href="#shelf"    className="hover:text-wesText dark:hover:text-gray-100 transition-colors">BOOKSHELF</a>
            <a href="#contact"  className="hover:text-wesText dark:hover:text-gray-100 transition-colors">CONTACT</a>
          </div>
        </nav>
      </header>

      {/* <div className="flex justify-center space-x-6 border-b border-wesBrown mb-12">
        <button className={tab === "about" ? activeTabStyle : baseTabStyle} onClick={() => setTab("about")}>About</button>
        <button className={tab === "projects" ? activeTabStyle : baseTabStyle} onClick={() => setTab("projects")}>Projects</button>
        <button className={tab === "photography" ? activeTabStyle : baseTabStyle} onClick={() => setTab("photography")}>Photography</button>
        <button className={tab === "contact" ? activeTabStyle : baseTabStyle} onClick={() => setTab("contact")}>Contact</button>
      </div> */}

      <section id="about" style={{ scrollMarginTop: "56px" }}>
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
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic flex items-center gap-1">
                Captured by Yasmin
                <Link href="/anniversary" className="opacity-70 hover:opacity-100 transition-opacity" title="Anniversary">
                  <span className="text-orange-500 text-lg">❤</span>
                </Link>
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
          <h2 id="projects" className="text-4xl font-bold mb-12" style={{ scrollMarginTop: "70px" }}>Stuff I&apos;ve Done...</h2>

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
        <h2 id="photos" className="text-4xl font-bold mb-12" style={{ scrollMarginTop: "70px" }}>Photos I&apos;ve Taken...</h2>

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
      
        {/* Glass profile link */}
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <FaCameraRetro className="text-base" />
          <span>More of my photography on</span>
          <a href="https://glass.photo/michaelcronin" target="_blank" className="underline hover:text-gray-800 dark:hover:text-white transition">glass.photo/michaelcronin</a>
        </div>
      </section>

      {/* Top fade: homepage → shelf */}
      <div className="dark:hidden" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", height: "80px", background: "linear-gradient(to bottom, #f8f1e7, #120b04)" }} />
      <div className="hidden dark:block" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", height: "80px", background: "linear-gradient(to bottom, #18181b, #120b04)" }} />

      {/* Heading — sits on the dark background */}
      <div id="shelf" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", background: "#120b04", padding: "0 clamp(24px, 5vw, 80px) 32px", scrollMarginTop: "56px" }}>
        <h2 className="font-extrabold tracking-widest" style={{ color: "rgba(245,201,138,0.85)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
          MY BOOKSHELF
        </h2>
      </div>

      <BookCarousel />

      {/* Bottom fade: shelf → homepage */}
      <div className="dark:hidden" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", height: "80px", background: "linear-gradient(to bottom, #120b04, #f8f1e7)" }} />
      <div className="hidden dark:block" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", height: "80px", background: "linear-gradient(to bottom, #120b04, #18181b)" }} />








      <section id="contact" className="py-12 text-center" style={{ scrollMarginTop: "70px" }}>
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

      <DarkModeToggle />

    </main>
  );
}
