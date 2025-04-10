"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("projects");

  const baseTabStyle = "px-4 py-2 border-b-2 font-medium text-gray-500 hover:text-blue-600 hover:border-blue-600";
  const activeTabStyle = "px-4 py-2 border-b-2 font-medium text-blue-600 border-blue-600";

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Michael Cronin</h1>
        <p className="text-xl text-gray-600">Developer | Photographer | Student</p>
      </section> 

      {/* About Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          {"I'm a student with a passion for coding, building projects, and capturing the world through photography. I enjoy learning new technologies and creating things that make an impact."}
        </p>
      </section>

      {/* Tabbed Content */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 border-b mb-8">
          <button className={tab === 'projects' ? activeTabStyle : baseTabStyle} onClick={() => setTab('projects')}>Projects</button>
          <button className={tab === 'photography' ? activeTabStyle : baseTabStyle} onClick={() => setTab('photography')}>Photography</button>
          <button className={tab === 'resume' ? activeTabStyle : baseTabStyle} onClick={() => setTab('resume')}>Resume</button>
        </div>

        {tab === 'projects' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Projects</h3>
            <ul className="space-y-4">
              <li className="border p-4 rounded-xl shadow">Project One – brief description here.</li>
              <li className="border p-4 rounded-xl shadow">Project Two – brief description here.</li>
            </ul>
          </div>
        )}

        {tab === 'photography' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Photography</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="h-40 bg-gray-300 rounded-lg"></div>
              <div className="h-40 bg-gray-300 rounded-lg"></div>
              <div className="h-40 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        )}

        {tab === 'resume' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Resume</h3>
            <p>You can download my resume <a href="#" className="text-blue-600 underline">here</a>.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li><strong>Education:</strong> BSc in Computer Science, University of [Your School]</li>
              <li><strong>Internships:</strong> Frontend intern at XYZ Company – built features in React</li>
              <li><strong>Skills:</strong> JavaScript, React, Tailwind CSS, Python, Git</li>
            </ul>
          </div>
        )}
      </section>

      {/* Contact */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">Feel free to reach out via email or follow me on my socials.</p>
        <p>Email: <a href="mailto:michael@example.com" className="text-blue-600 hover:underline">michael@example.com</a></p>
      </section>
    </main>
  );
}