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
    <section
      id="projects"
      className="py-24 bg-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950">
            Certificates
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Sertifikat pelatihan dan pembelajaran yang telah saya selesaikan.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="group bg-blue-50 rounded-[30px] overflow-hidden border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >
              {/* IMAGE */}
              <div className="overflow-hidden bg-white">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-contain p-4 group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {item.title}
                </h3>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}