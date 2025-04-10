export default function Home() {
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
          I'm a student with a passion for coding, building projects, and capturing the world through photography. I enjoy learning new technologies and creating things that make an impact.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-4 shadow">
            <h3 className="text-xl font-bold">Project One</h3>
            <p className="text-sm text-gray-600">Short description of what this project does and what you learned.</p>
          </div>
          <div className="border rounded-xl p-4 shadow">
            <h3 className="text-xl font-bold">Project Two</h3>
            <p className="text-sm text-gray-600">Another brief summary of a cool thing you built.</p>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Experience & Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Internship at XYZ Company</h3>
            <p className="text-sm text-gray-600">Worked on frontend features using React and improved performance by 30%.</p>
          </div>
          <div>
            <h3 className="font-bold">BSc in Computer Science</h3>
            <p className="text-sm text-gray-600">University of [Your School], 202X - Present</p>
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="py-16 px-4 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Photography</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-40 bg-gray-300 rounded-lg"></div>
          <div className="h-40 bg-gray-300 rounded-lg"></div>
          <div className="h-40 bg-gray-300 rounded-lg"></div>
        </div>
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
