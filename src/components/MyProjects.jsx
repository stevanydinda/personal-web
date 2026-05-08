import web1 from "../assets/konser.png";
import web2 from "../assets/hotel.png";
import web3 from "../assets/Figma design 1.png";
import web4 from "../assets/figma design 2.png";
import web5 from "../assets/fashionproyek.png";
import web6 from "../assets/dictionary.png";
import web7 from "../assets/tixid.png";
import web8 from "../assets/platzi.png";
import web9 from "../assets/flutter1.png";
import web10 from "../assets/imt.png";

const projects = [
  {
    title: "Website Tiket Konser",
    desc: "Website untuk memesan tiket konser dengan fitur pemesanan online",
    img: web1,
    tech: ["PHP"],
    github: "https://github.com/stevanydinda/Tugas-PTS-",
  },
  {
    title: "Website Hotel",
    desc: "Website memesan kamar hotel",
    img: web2,
    tech: ["Laravel", "Bootstrap", "Tailwind"],
    github: "https://github.com/stevanydinda/Project-Hotel",
  },
  {
    title: "Website fashion",
    desc: "Website memesan pakaian",
    img: web5,
    tech: ["Laravel"],
    github: "https://github.com/stevanydinda/Fashion",
  },
  {
    title: "Website English dictionary",
    desc: "Website untuk mencari arti kata dalam bahasa Inggris",
    img: web6,
    tech: ["ReactJs"],
    github: "https://github.com/stevanydinda/english-dictionary",
  },
  {
    title: "Website Pemesanan Tiket Bioskop",
    desc: "Website untuk memesan tiket bioskop",
    img: web7,
    tech: ["Laravel, Bootstrap"],
    github: "https://github.com/stevanydinda/TIX-ID",
  },
  {
    title: "Website Ecommerce",
    desc: "Website untuk memesan produk",
    img: web8,
    tech: ["ReactJs"],
    github: "https://github.com/stevanydinda/platzi-store",
  },
  {
    title: "Halaman Profile",
    desc: "Halaman profile pribadi",
    img: web9,
    tech: ["Flutter"],
    github: "https://github.com/stevanydinda/profile-diri-1fl",
  },
   {
    title: "Hitung IMT",
    desc: "Aplikasi untuk menghitung Indeks Massa Tubuh",
    img: web10,
    tech: ["PHP"],
    github: "https://github.com/stevanydinda/IMT",
  },
  {
    title: "Figma Design",
    desc: "Memesan Makanan",
    img: web3,
    tech: ["Figma"],
  },
   {
    title: "Figma Design",
    desc: "HearmeOut (desain untuk aspirasi sekolah)",
    img: web4,
    tech: ["Figma"],
  },
];

export default function MyProjects() {
  return (
    <section id="myprojects" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          My Projects
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

                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>

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

                <div className="flex gap-4">
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
