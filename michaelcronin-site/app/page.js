"use client";
import { FaGithub, FaLinkedin, FaCameraRetro } from "react-icons/fa";
import Image from "next/image";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-gray-100 px-6 md:px-20 py-16 transition-colors duration-300">
      <section className="flex flex-col md:flex-row md:items-start items-center justify-between md:space-x-12 space-y-10 md:space-y-0">
        {/* Left Column */}
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

        {/* Right Column - Image */}
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

      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
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

      <DarkModeToggle />
    </main>
  );
}
