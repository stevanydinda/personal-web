export default function About() {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Stevany Dinda Swaragita
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Saya adalah siswi SMK yang memiliki ketertarikan dalam dunia teknologi,
        khususnya pada bidang desain dan pengembangan website. Saya senang
        mempelajari hal baru dan terus mengembangkan kemampuan saya.
      </p>

      {/* Button Download CV */}
      <a
        href="/CV STEVANY (1).pdf"
        download
        className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300"
      >
        Download CV
      </a>
    </section>
  );
}