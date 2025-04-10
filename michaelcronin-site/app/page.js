"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaCameraRetro } from "react-icons/fa";
import Image from "next/image";
import DarkModeToggle from "../components/DarkModeToggle";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
    <main className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-gray-100 px-6 md:px-20 py-16 transition-colors duration-300">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-6 border-b mb-12">
        <button className={tab === "about" ? activeTabStyle : baseTabStyle} onClick={() => setTab("about")}>About</button>
        <button className={tab === "photography" ? activeTabStyle : baseTabStyle} onClick={() => setTab("photography")}>Photography</button>
        <button className={tab === "contact" ? activeTabStyle : baseTabStyle} onClick={() => setTab("contact")}>Contact</button>
      </div>

      {tab === "about" && (
        <section className="flex flex-col md:flex-row md:items-start items-center justify-between md:space-x-12 space-y-10 md:space-y-0">
          <div className="md:w-1/2 space-y-6">
            <p className="font-[--font-handwritten] text-2xl text-orange-500 dark:text-orange-400">
              make everything<br />look interesting
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
      )}

      {tab === "photography" && (
        <section className="py-16 text-center">
          

          <div className="overflow-x-auto scrollbar-hide">
  <div className="flex gap-6 px-4">
    {images.map((src, i) => (
      <div
  key={i}
  onClick={() => setOpen(i)}
  className="flex-none overflow-hidden rounded-xl shadow-lg"
>

        <img
          src={src}
          alt={`Photo ${i + 1}`}
          className="h-[80vh] w-auto rounded-xl object-contain shadow-lg cursor-pointer transition-transform hover:scale-105"
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
      Reach out any time at <a href="michael04cronin@gmail.com" className="underline text-blue-600 dark:text-blue-400">michael@example.com</a>
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
