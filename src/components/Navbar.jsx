import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* LOGO */}
        <h1 className="text-blue-900 font-semibold text-lg">
          
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#skills" className="hover:text-blue-700">Skills</a>
          <a href="#education" className="hover:text-blue-700">Education</a>
          <a href="#projects" className="hover:text-blue-700">Certificate</a>
          <a href="#myprojects" className="hover:text-blue-700">My Projects</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden text-blue-900 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 flex flex-col space-y-3 text-sm">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#projects" onClick={() => setOpen(false)}>Certificate</a>
          <a href="#myprojects" onClick={() => setOpen(false)}>My Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}