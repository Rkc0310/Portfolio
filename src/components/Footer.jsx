import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="font-bold text-2xl tracking-tighter block mb-2">
              DEV<span className="text-sky-400">.</span>PORTFOLIO
            </a>
            <p className="text-gray-400 text-sm">Elevating digital experiences with clean code.</p>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-sky-400 transition">Home</a>
            <a href="#about" className="hover:text-sky-400 transition">About</a>
            <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
            <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Rkc0310" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:bg-neutral-700 transition">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/roshan-chandravanshi/" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:bg-neutral-700 transition">
              <Linkedin size={18} />
            </a>
            <a href="https://x.com/roshan9630" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:bg-neutral-700 transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
