export default function Education() {
  const education = [
    {
      school: "SMK Wikrama Bogor",
      year: "2024 - Now",
    },
    {
      school: "SMPN 13 Bogor",
      year: "2021 - 2024",
    },
    {
      school: "SDN Lawanggintung 2 Bogor",
      year: "2015 - 2021",
    },
  ];

  return (
    <section id="education" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
         
          <h2 className="text-4xl font-bold text-blue-950">
            My Education Journey
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 rounded-3xl p-7 hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900">
                    {item.school}
                  </h3>
                </div>

                <span className="bg-white px-5 py-2 rounded-full text-blue-700 text-sm font-medium shadow-sm w-fit">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}