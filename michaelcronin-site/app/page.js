"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaCameraRetro } from "react-icons/fa";
import Image from "next/image";
import DarkModeToggle from "../components/DarkModeToggle";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { logos } from "../data/skills";
import SkillsStrip from "../components/SkillsStrip";

export default function Home() {
  const [tab, setTab] = useState("about");
  const [open, setOpen] = useState(-1);

  const images = [
    "/photos/photo-1.jpg",
    "/photos/photo-2.jpg",
    "/photos/photo-3.jpg",
    "/photos/photo-4.jpg",
    "/photos/photo-5.jpg",
    "/photos/photo-6.jpg",
  ];

  const baseTabStyle = "px-4 py-2 border-b-2 font-medium text-gray-500 hover:text-blue-600 hover:border-blue-600 dark:text-gray-400 dark:hover:text-blue-400";
  const activeTabStyle = "px-4 py-2 border-b-2 font-medium text-blue-600 border-blue-600 dark:text-blue-400";

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-gray-100 px-6 md:px-20 pt-0 pb-16 transition-colors duration-300">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-6 border-b mb-12">
        <button className={tab === "about" ? activeTabStyle : baseTabStyle} onClick={() => setTab("about")}>About</button>
        <button className={tab === "projects" ? activeTabStyle : baseTabStyle} onClick={() => setTab("projects")}>Projects</button>
        <button className={tab === "photography" ? activeTabStyle : baseTabStyle} onClick={() => setTab("photography")}>Photography</button>
        <button className={tab === "contact" ? activeTabStyle : baseTabStyle} onClick={() => setTab("contact")}>Contact</button>
      </div>

      {tab === "about" && (
        <>
          <section className="flex flex-col md:flex-row md:items-start items-center justify-between md:space-x-12 space-y-10 md:space-y-0">
            <div className="md:w-1/2 space-y-6">
              <p className="font-[--font-handwritten] text-2xl text-orange-500 dark:text-orange-400 leading-relaxed max-w-2xl">
                “Isn&apos;t it enough to see that a garden is beautiful without<br />
                having to believe that there are fairies at the bottom of it too?”<br />
                <span className="text-sm text-gray-600 dark:text-gray-400 block mt-2">
                  ― Douglas Adams, <em>The Hitchhiker’s Guide to the Galaxy</em>
                </span>
              </p>
              <h1 className="text-5xl font-extrabold leading-tight">
                MICHAEL<br />CRONIN
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                ARTIFICIAL INTELLIGENCE & MACHINE LEARNING STUDENT<br />
                DELL TECHNOLOGIES INTERN
              </p>
              <div>
                <h2 className="text-lg font-semibold mt-6">ABOUT ME</h2>
                <p className="text-sm leading-relaxed">
                  I&apos;m currently studying Artificial Intelligence &amp; Machine Learning at the University of Limerick. As an intern at Dell Technologies, I&apos;m gaining practical experience in the tech industry. I&apos;m passionate about developing intelligent systems and exploring new technologies.
                </p>
              </div>
              <div className="flex space-x-6 mt-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">📍</span>
                  <span>Cork, Ireland</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🎓</span>
                  <span>University of Limerick</span>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-lg font-semibold">INTERESTS</h2>
                <p className="text-sm dark:text-gray-300">
                  Artificial intelligence, machine learning, data science, and technology innovation.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
              <Image
                src="/michael.jpg"
                alt="Michael Cronin"
                width={400}
                height={600}
                className="rounded-xl shadow-xl object-cover w-full max-w-sm"
              />
            </div>
          </section>

          <SkillsStrip />
        </>
      )}

      {tab === "projects" && (
        <>
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto px-4">
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md text-left">
                <h3 className="text-xl font-semibold mb-2">AI Portfolio Site</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">A personal portfolio built with Next.js, Tailwind, and deployed on Vercel. Includes tabs, dark mode, and photography lightbox.</p>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md text-left">
                <h3 className="text-xl font-semibold mb-2">Dell AI Intern Tools</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Internal tools I worked on as part of my internship at Dell, streamlining data prep and model deployment for internal workflows.</p>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md text-left">
                <h3 className="text-xl font-semibold mb-2">Plastic Type Detection with MML</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Group project for a college module where I developed a multimodal machine learning model using a 2D-CNN on hyperspectral images of various plastic types. The goal was to create an app where users could upload a photo of plastic, receive identification of the plastic type, and get associated cancer risk data based on their age and location.</p>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md text-left">
                <h3 className="text-xl font-semibold mb-2">Toonify – Image Cartoonizer App</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">I developed a containerized image generation app called Toonify using Fooocus. It transforms user-uploaded photos into cartoon-style versions. The app was deployed with Docker and featured a sleek Streamlit UI for easy interaction.</p>
              </div>
            </div>
          </section>

          <SkillsStrip />
        </>
      )}


      {tab === "photography" && (
        <section className="py-16 text-center">
          {/* <h2 className="text-3xl font-bold mb-4">Photography</h2> */}
          {/* <p className="text-gray-600 dark:text-gray-300 mb-8">
            A few moments I’ve captured recently — more on <a href="https://glass.photo/michaelcronin" className="underline text-blue-600 dark:text-blue-400" target="_blank">Glass</a>.
          </p> */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 px-4">
              {images.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(i)}
                  className="flex-none overflow-hidden rounded-xl shadow-lg cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Photo ${i + 1}`}
                    className="h-[80vh] w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          <Lightbox
            open={open >= 0}
            close={() => setOpen(-1)}
            index={open}
            slides={images.map((src) => ({ src }))}
            styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
          />
        </section>
      )}

      {tab === "contact" && (
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
      )}



<DarkModeToggle />

    </main>
  );
}
