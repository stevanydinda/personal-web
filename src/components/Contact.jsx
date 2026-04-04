export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Mari Bekerja Sama
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Saya selalu terbuka untuk mendiskusikan pekerjaan proyek baru,
            ide kreatif, atau sekadar bertukar pikiran. Jangan ragu untuk
            menghubungi saya melalui formulir ini.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📧 Email: stevanydindaa@gmail.com</p>
            <p>📞 Telp: +62 817 7933 1231</p>
            <p> 💌 Insta: @stevanyhae</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Pesan
            </label>
            <textarea
              rows="4"
              placeholder="Tulis pesan Anda di sini..."
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Kirim Pesan
          </button>
        </form>

      </div>
    </section>
  );
}