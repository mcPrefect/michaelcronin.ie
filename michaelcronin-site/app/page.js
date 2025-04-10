"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-20 py-16">
      <section className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">

        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-orange-500 font-handwritten text-2xl leading-snug">
            make everything<br />looks interesting
          </p>

          <h1 className="text-5xl font-extrabold leading-tight">
            MICHAEL<br />CRONIN
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            DEVELOPER<br />PHOTOGRAPHER<br />STUDENT
          </p>

          <div>
            <h2 className="text-lg font-semibold mt-6">ABOUT ME</h2>
            <p className="text-sm leading-relaxed">
              I’m a student with a passion for coding, building projects, and capturing the world through photography. I enjoy learning new technologies and creating things that make an impact.
            </p>
          </div>

          <div className="flex space-x-6 mt-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-xl">📅</span>
              <span>25 years old</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">💻</span>
              <span>Python</span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">INTERESTS</h2>
            <p className="text-sm">
              Software development, working with people, visual storytelling, photography, and digital design.
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="IMG-20241208-WA0031.jpg" // Replace with the correct path
            alt="Michael Cronin"
            width={400}
            height={600}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>
      </section>
    </main>
  );
}
