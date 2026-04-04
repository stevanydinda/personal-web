export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-blue-900 font-semibold">PORTOFOLIO</h1>
        <div className="space-x-4 text-sm">
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#skills" className="hover:text-blue-700">Skills</a>
          <a href="#education" className="hover:text-blue-700">Education</a>
          <a href="#projects" className="hover:text-blue-700">Certificate</a>
          <a href="#myprojects" className="hover:text-blue-700">My Projects</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </div>
      </nav>
    </header>
  );
}