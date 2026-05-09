import Navbar from "./components/Navbar";

import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";

import stevanyprofile from "./assets/stevanyprofile.png";
import Logo from "./assets/LOGO.png";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* FLOATING LOGO */}
      <img
        src={Logo}
        alt="logo"
        className="w-14 md:w-16 fixed top-4 left-4 z-50 drop-shadow-xl"
      />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
          {/* BACKGROUND EFFECT */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 opacity-30 blur-3xl rounded-full"></div>

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            {/* TEXT */}
            <div>
             

              <h1 className="text-5xl md:text-7xl font-black text-blue-950 leading-tight mb-6">
                Hola,
                <br />
                Stevany Here !
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-8">
                Saya adalah siswi SMK yang berfokus pada pengembangan website,
                desain UI/UX, dan teknologi modern. Saya senang membangun
                tampilan website yang clean, modern, dan interaktif.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#myprojects"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-7 py-3 rounded-2xl shadow-xl transition duration-300"
                >
                  View Projects
                </a>

                <a
                  href="/CV STEVANY (1).pdf"
                  download
                  className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 px-7 py-3 rounded-2xl transition duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center relative">
              <div className="absolute w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

              <img
                src={stevanyprofile}
                alt="profile"
                className="relative w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-[40px] shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </section>

        <Skills />
        <Education />
        <MyProjects />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
