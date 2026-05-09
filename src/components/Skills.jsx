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
    "MySQL",
    "Git",
    "Communication",
    "Team Work",
    "Problem Solving",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-blue-50 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-14">
          

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950">
            My Skills
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white border border-blue-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="font-semibold text-blue-900 text-lg">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}