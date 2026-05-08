import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";
import stevanyprofile from "./assets/stevanyprofile.png";
import Logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <img 
        src={Logo}
        alt="logo"
        className="w-16 h-16 fixed top-4 left-4 z-50"
      />
      <main>
        {/* HERO */}
        <section className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-blue-50 gap-6 px-4">
          
          {/* FOTO */}
          <img
            src={stevanyprofile}
            alt="profile"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-md"
          />

          {/* TEXT */}
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-2">
              Hola, Stevany here! 
            </h1>
          </div>
        </section>

        <About />
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
