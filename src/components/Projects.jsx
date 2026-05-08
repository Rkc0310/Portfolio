import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Modern E-Commerce Website",
      desc: " MegaStore is a full-stack e-commerce platform built with React.js, JavaScript, Tailwind CSS, and Firebase. It features product listings, dynamic routing, responsive design, user authentication, and database integration for managing product data. A fully functional e-commerce platform with cart functionality, secure checkout, and dynamic product filtering.",
      image: "/image/Mega_Store.png",
      tech: ["HTML","JavaScript","React(Vite)","Tailwind CSS","Firebase Authentication", "Firebase Database" ,"Vercel"],
      demo: "https://megastoreecom.vercel.app/",
      github: "https://github.com/Rkc0310/Mega-Store-"
    },
     {
      title: "Tattoo Ink Studio",
      desc: "B2-TattooShop–Tattoo Shop Website A full-stack tattoo studio website built with React, Vite, Tailwind CSS, and using Appwrite for authentication, database, and storage. Features include a tattoo gallery, admin upload panel, responsive UI, and modern dark theme design. A stunning landing page for a tattoo shop with bold typography, booking integration, and gallery.",
      image: "/image/Tatto_shop.png",
      tech: ["HTML","JavaScript","React(Vite)","Tailwind CSS","Appwrite,Vercel"],
      demo: "https://b2tattoo-shop.vercel.app/portfolio",
      github: "https://github.com/Rkc0310/Tattoo-Shop"
    },
    {
      title: "Portfolio Website",
      desc: "A developer portfolio template with glassmorphism, smooth scrolling, and animated transitions.",
      image: "/image/Portfolio.png",
      tech: ["React","javaScript","Tailwind CSS"],
      demo: "https://portfolio-roshankumar.vercel.app/",
      github: "https://github.com/Rkc0310/Portfolio"
    },
   
  ];

  return (
    <section id="projects" className="py-24 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-sky-400">Projects</span></h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col group hover:border-sky-400/50 transition-colors duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                />
                
                {/* Hover overlay icons */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900/60 backdrop-blur-sm">
                  <a href={proj.demo} className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <a href={proj.github} className="w-12 h-12 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors border border-neutral-600">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-sky-400 transition-colors">{proj.title}</h3>
                <p className="text-gray-400 text-sm mb-6 grow">{proj.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sky-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
