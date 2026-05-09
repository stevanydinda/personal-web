import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100 py-10 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        
       

        {/* Ikon Sosial Media */}
        <div className="flex gap-8 mb-8">
          <a 
            href="https://instagram.com/stevanyhae" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-500 transition-all duration-300"
          >
            <FaInstagram size={22} />
          </a>
          <a 
            href="https://www.linkedin.com/in/stevany-dinda-992907375/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-500 transition-all duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a 
            href="https://github.com/stevanydinda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-500 transition-all duration-300"
          >
            <FaGithub size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 tracking-wide uppercase">
          © 2026 Stevany 
        </p>
        
      </div>
    </footer>
  );
}