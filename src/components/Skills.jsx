export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 & CSS3", level: 98 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level:50},
        { name: "Express.js", level: 50 },
        { name: "MongoDB", level: 60 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 60 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 90 },
        { name: "Teamwork", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Adaptability", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core <span className="text-sky-400">Skills</span></h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sky-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-sky-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
