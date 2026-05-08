import { Mail, MapPin, Target as Telegram, Send, PhoneCall } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-neutral-900">
      <div className="container mx-auto px-6 lg:w-4/5 xl:w-2/3">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Something <span className="text-sky-400">Amazing</span> Together</h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                “Passionate Web Developer with strong expertise in React.js, responsive web design, and modern frontend development. Ready to deliver high-quality digital solutions.”
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sky-400">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="mailto:hello@example.com" className="font-medium hover:text-sky-400 transition-colors">+91 9630644173</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sky-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <a href="mailto:hello@example.com" className="font-medium hover:text-sky-400 transition-colors">rkchandra09@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sky-400">
                  <Telegram size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telegram</p>
                  <a href="https://t.me/Roshan0310" className="font-medium hover:text-sky-400 transition-colors">@Roshan0310</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sky-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Raipur,Chhattisgarh,india</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                  <input type="email" id="email" placeholder="john@example.com" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                <textarea id="message" rows={5} placeholder="How can I help you?" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
