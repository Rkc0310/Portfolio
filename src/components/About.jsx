import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-sky-400">Me</span></h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-2xl">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                “I’m a Roshan Chandrawanshi passionate Frontend Developer focused on building high-performance, visually appealing, and user-friendly web applications. I specialize in React.js, JavaScript, Tailwind CSS, and modern frontend technologies. I enjoy transforming ideas into real-world digital experiences with clean code and modern design.”
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Experience", desc: "Fresher", color: "text-sky-400" },
              { title: "Mindset", desc: "Problem Solving", color: "text-sky-400" },
              { title: "Learning", desc: "Fast Learner", color: "text-sky-400" },
              { title: "Team", desc: "Collaborative", color: "text-sky-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <h3 className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.desc}</h3>
                <p className="text-gray-400 text-sm">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
