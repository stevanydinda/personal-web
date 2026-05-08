import sertif1 from "../assets/sertifikat-dicoding.jpg";
import sertif2 from "../assets/sertifikat-k3.jpg";
import sertif3 from "../assets/sertifikat-js.png";
import sertif4 from "../assets/sertifikat-myskill.png";

const certificates = [
  {
    title: "Sertifikat Dicoding",
    img: sertif1,
  },
  {
    title: "Sertifikat K3",
    img: sertif2,
  },
  {
    title: "Sertifikat JavaScript",
    img: sertif3,
  },
  {
    title: "Sertifikat MySkill",
    img: sertif4,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Certificate
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-contain bg-gray-50 p-2 hover:scale-105 transition duration-300"
              />

              <div className="p-4">
                <h3 className="text-blue-900 font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Sertifikat yang telah saya peroleh
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
