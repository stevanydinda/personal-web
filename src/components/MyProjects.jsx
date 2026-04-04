import web1 from "../assets/konser.png";
import web2 from "../assets/hotel.png";

const projects = [
  {
    title: "Website Tiket Konser",
    desc: "Website untuk memesan tiket konser dengan fitur pemesanan online",
    img: web1,
    tech: ["PHP"],
    github: "https://github.com/stevanydinda/Tugas-PTS-", // optional
  },
  {
    title: "Website Hotel",
    desc: "Website memesan kamar hotel",
    img: web2,
    tech: ["Laravel", "Bootstrap", "Tailwind"],
    github: "https://github.com/stevanydinda/Project-Hotel", // optional
  },
];
j
export default function MyProjects() {
  return (
    <section id="myprojects" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Project Saya
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white text-blue-800 text-xs px-3 py-1 rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 🔗 BUTTON */}
                <div className="flex gap-3">
                  <a
                    href={item.demo}
                    target="_blank"
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition"
                  >
                    Lihat Website
                  </a>

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg text-sm hover:bg-blue-100 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}