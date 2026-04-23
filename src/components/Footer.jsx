import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-6 mt-10">
      <div className="flex flex-col items-center gap-3">

        <p className="text-sm opacity-80">
          © 2026 Stevany 
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://instagram.com/stevanyhae"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-pink-400"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com/in/username_kamu"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}