import { Github, Linkedin, Twitter, Target, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20" id="home">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-block bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full w-fit">
            <span className="text-sky-400 text-sm font-medium tracking-wide">
              WELCOME TO MY PORTFOLIO
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building Modern <br />
            <span className="text-sky-400">Web Experiences</span> <br />
            That Stand Out
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light">
            Frontend Developer specializing in React.js, responsive web applications, 
            modern UI/UX, and fast, scalable solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#contact" className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
              Hire Me
            </a>
            
            <a href="#projects" className="px-8 py-3 rounded-lg border border-neutral-700 bg-neutral-900 hover:border-sky-400 hover:text-sky-400 transition font-medium">
              View Projects
            </a>
          </div>

          <div className="flex items-center gap-5 mt-8">
            {[
              { icon: Github, href: "https://github.com/Rkc0310" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/roshan-chandravanshi/" },
              { icon: Twitter, href: "https://x.com/roshan9630" },
            
              { icon: Mail, href: "mailto:rkchandra09@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-400 transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:h-150 flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-neutral-800 overflow-hidden">
            <img 
              src="https://avatars.githubusercontent.com/u/114645583?v=4"
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
