import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Bachelor's of Technology (B.Tech)",
      field: "Computer Science",
      institution: "chhattisgarh swami vivekanand technical university bhilai",
      type: "Degree",
      description: "Score - 88% "
    },
    {
      degree: "Html,Css,javaScript",
      field: "web development",
      institution: "Udemy & YouTube Chai Aur Code",
      type: "Certification",
      description: "Comprehensive course covering HTML, CSS, and JavaScript fundamentals, including responsive design, modern layouts, interactive web features, and front-end development concepts."
    },
    
    {
      degree: "React.js, Tailwind css",
      field: "React",
      institution: "Udemy & YouTube Chai Aur Code",
      type: "Certification",
      description: "Comprehensive course covering React and Tailwind CSS fundamentals, including component-based development, hooks, state management, responsive UI design, and modern front-end development practices."
    }
  ];

  return (
    <section id="education" className="py-24 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & <span className="text-sky-400">Certificates</span></h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-sky-400/50 transition-colors duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mr-4 group-hover:bg-sky-500/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-sky-400 transition-colors">{edu.degree}</h3>
                  <p className="text-sky-400 text-sm">{edu.field}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <Award className="w-4 h-4 mr-2" />
                  {edu.type}
                </div>
                <p className="text-gray-300 font-medium">{edu.institution}</p>
              </div>

              <p className="text-gray-400 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}