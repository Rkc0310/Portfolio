import { Layers, Smartphone, Code, Layout, Palette, Zap, Cpu, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Modern Website Development", icon: Globe, desc: "Building fast, SEO-friendly, and modern websites using the latest web technologies." },
    { title: "React.js Frontend Development", icon: Code, desc: "Creating highly interactive and dynamic single-page applications with React." },
    { title: "Responsive UI Design", icon: Smartphone, desc: "Ensuring your website looks perfect on desktops, tablets, and mobile devices." },
    { title: "Landing Page Design", icon: Layout, desc: "Designing high-converting landing pages tailored to your marketing campaigns." },
    { title: "Portfolio Websites", icon: Palette, desc: "Crafting beautiful and unique personal portfolios to showcase your work." },
    { title: "Dashboard Development", icon: Layers, desc: "Building intuitive data-driven admin panels and dashboards for your business." },
    { title: "Website Optimization", icon: Zap, desc: "Improving website performance, loading speed, and overall user experience." },
    { title: "API Integration", icon: Cpu, desc: "Connecting frontend interfaces seamlessly with backend APIs and third-party services." },
  ];

  return (
    <section id="services" className="py-24 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-sky-400">Services</span></h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-sky-400/50 transition-colors duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 border border-neutral-700 group-hover:border-sky-400/50 transition-colors">
                <service.icon className="text-sky-400" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
