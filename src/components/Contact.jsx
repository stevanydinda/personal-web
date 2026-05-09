import {
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-blue-50 to-white px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* TITLE */}
        <div className="text-center mb-16">
         

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950">
            Let’s Work Together
          </h2>

          
        </div>

        {/* CONTACT BOX */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div className="bg-blue-900 text-white rounded-[32px] p-10 md:p-12 shadow-2xl relative overflow-hidden">
            
            {/* BACKGROUND EFFECT */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">
                Contact Information
              </h3>

              

              <div className="space-y-6">
                
                {/* EMAIL */}
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <FaEnvelope className="text-xl" />
                  </div>

                  <div>
                    <p className="text-blue-200 text-sm">Email</p>
                    <p className="font-medium">
                      stevanydindaa@gmail.com
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <FaPhoneAlt className="text-xl" />
                  </div>

                  <div>
                    <p className="text-blue-200 text-sm">Phone</p>
                    <p className="font-medium">
                      +62 817 7933 1231
                    </p>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form className="bg-white border border-blue-100 rounded-[32px] p-8 md:p-10 shadow-xl space-y-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap
              </label>

              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full border border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pesan
              </label>

              <textarea
                rows="5"
                placeholder="Tulis pesan Anda di sini..."
                className="w-full border border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition duration-300 shadow-lg"
            >
              <FaPaperPlane />
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}