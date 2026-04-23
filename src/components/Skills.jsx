export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "UI/UX Design",
    "Flutter",
    "Laravel",
    "Figma",
    "PHP",
    "C#",
    "Python",
    "mySQL",
    "Git",
    "Komunikasi",
    "Kerja Tim",
    "Problem Solving",
  ];

  return (
    <section id="skills" className="bg-blue-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}