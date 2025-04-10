"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-20 py-16">
      <section className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
        <p className="font-[--font-handwritten] text-2xl text-orange-500">
          make everything<br />look interesting
        </p>


          <h1 className="text-5xl font-extrabold leading-tight">
            MICHAEL<br />CRONIN
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            ARTIFICIAL INTELLIGENCE & MACHINE LEARNING STUDENT<br />
            DELL TECHNOLOGIES INTERN
          </p>

          <div>
            <h2 className="text-lg font-semibold mt-6">ABOUT ME</h2>
            <p className="text-sm leading-relaxed">
              I'm currently studying Artificial Intelligence & Machine Learning at the University of Limerick. As an intern at Dell Technologies, I'm gaining practical experience in the tech industry. I'm passionate about developing intelligent systems and exploring new technologies.
            </p>
          </div>

          <div className="flex space-x-6 mt-4 text-sm text-gray-600">
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
            <p className="text-sm">
              Artificial intelligence, machine learning, data science, and technology innovation.
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/michael.jpg" // Ensure this path is correct
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
