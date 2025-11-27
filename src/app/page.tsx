/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ChevronDown,
  Menu,
  X,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STACKS } from "./data/stacks";
import { FAQS } from "./data/faqs";
import { SERVICES } from "./data/services";
import { ADVANTAGES } from "./data/advantages";
import { PROJECTS } from "./data/projects";
import { PRICING } from "./data/pricing";

// --- 1. DATA & CONTENT CONFIGURATION ---

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#advantages" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const STEPS = [
  { title: "Consultation", desc: "Diskusi kebutuhan & fitur." },
  { title: "Design", desc: "Perancangan UI/UX & Prototype." },
  { title: "Development", desc: "Coding & Implementasi sistem." },
  { title: "Launch", desc: "Testing, Deploy & Serah terima." },
];

// --- 2. SUB-COMPONENTS ---

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-[#151D3A] mb-4">
      {title}
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    <div
      className={`h-1.5 w-24 bg-indigo-600 rounded-full mt-4 ${
        align === "center" ? "mx-auto" : ""
      }`}
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#151D3A] flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <Code2 size={20} />
          </div>
          UNICODE
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#151D3A] text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#151D3A]"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- 3. MAIN PAGE COMPONENT ---

export default function UnicodeLandingRevised() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-wide uppercase mb-6">
              Software Engineering Partner
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#151D3A] leading-tight mb-8">
              Bangun{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Website & Aplikasi
              </span>{" "}
              <br /> Standar Industri.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Kami membantu bisnis dan profesional meningkatkan kehadiran
              digital melalui solusi web yang cepat, responsif, dan elegan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-[#151D3A] text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
              >
                Konsultasi Gratis
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#151D3A] border border-gray-200 font-semibold rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                Lihat Portfolio <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY / TECH STACK (Marquee) */}
      <section className="py-10 bg-[#151D3A] border-y border-gray-800 overflow-hidden">
        <div className="flex relative">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...STACKS, ...STACKS, ...STACKS].map((tech, i) => (
              <span
                key={i}
                className="text-xl font-bold text-gray-400/50 flex items-center gap-2"
              >
                <span className="text-indigo-500">•</span> {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Solusi Digital Komprehensif"
            subtitle="Apa yang bisa kami bangun untuk mempercepat pertumbuhan bisnis Anda?"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon
                    className="text-indigo-600 group-hover:text-white transition-colors"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#151D3A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ADVANTAGES (WHY US) */}
      <section id="advantages" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#151D3A] mb-6">
                Mengapa Memilih Kami sebagai <br />{" "}
                <span className="text-indigo-600">Partner Digital Anda?</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Bukan sekadar coding. Kami memberikan value bisnis melalui
                transparansi, teknologi tepat guna, dan kecepatan eksekusi.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {ADVANTAGES.map((adv, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <adv.icon className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#151D3A]">{adv.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual Abstract for Tech */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl rotate-3 opacity-20 blur-lg"></div>
              <div className="relative bg-[#151D3A] p-8 rounded-2xl text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-auto text-xs font-mono text-gray-500">
                    App.tsx
                  </span>
                </div>
                <div className="font-mono text-sm space-y-2 text-indigo-300">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-300">Success</span> ={" "}
                    <span className="text-blue-400">async</span> () ={">"} {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">await</span> Unicode.
                    <span className="text-blue-400">build</span>({"{"}
                  </p>
                  <p className="pl-8">
                    quality:{" "}
                    <span className="text-green-400">&quot;High&quot;</span>,
                  </p>
                  <p className="pl-8">
                    deadline:{" "}
                    <span className="text-green-400">&quot;OnTime&quot;</span>,
                  </p>
                  <p className="pl-8">
                    price:{" "}
                    <span className="text-green-400">
                      &quot;Transparent&quot;
                    </span>
                  </p>
                  <p className="pl-4">{"}"});</p>
                  <p className="pl-4">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-green-400">
                      &quot;Business Growth&quot;
                    </span>
                    ;
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS (GALLERY) */}
      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Karya Terpilih"
            subtitle="Beberapa proyek yang telah kami selesaikan dengan standar kualitas tinggi."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="text-white font-medium px-4 py-2 border border-white rounded-full">
                      Lihat Detail
                    </span>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#151D3A] mt-2 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section
        id="process"
        className="py-24 bg-indigo-900 text-white relative overflow-hidden"
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">4 Langkah Mudah</h2>
            <p className="text-indigo-200">
              Proses kerja yang terstruktur untuk hasil maksimal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-indigo-800/50 mb-4 font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-indigo-200 text-sm">{step.desc}</p>
                {/* Connector Line */}
                {idx !== STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-indigo-800 -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Investasi Terbaik"
            subtitle="Pilih paket yang sesuai dengan skala bisnis Anda saat ini."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl border ${
                  pkg.recommended
                    ? "border-indigo-600 bg-indigo-50/50 shadow-xl scale-105 z-10"
                    : "border-gray-200 bg-white"
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#151D3A]">{pkg.name}</h3>
                <p className="text-sm text-gray-500 mt-2 mb-6">{pkg.desc}</p>
                <div className="text-3xl font-bold text-indigo-600 mb-8">
                  {pkg.price}
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-green-500 flex-shrink-0"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full py-3 rounded-lg text-center font-semibold transition-colors ${
                    pkg.recommended
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-100 text-[#151D3A] hover:bg-gray-200"
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-[#151D3A] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((item, idx) => (
              <details
                key={idx}
                className="group border border-gray-200 rounded-xl bg-gray-50/50 overflow-hidden open:bg-white open:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-[#151D3A]">
                  {item.q}
                  <ChevronDown className="group-open:rotate-180 transition-transform text-gray-400" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT / FOOTER */}
      <section id="contact" className="bg-[#151D3A] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Siap Memulai Proyek?</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Jangan biarkan ide hebat Anda hanya menjadi wacana. Diskusikan
                dengan kami hari ini.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Kami</p>
                    <p className="font-medium">hello@unicode.dev</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      WhatsApp (Fast Response)
                    </p>
                    <p className="font-medium">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Lokasi</p>
                    <p className="font-medium">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Nama</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Jenis Layanan</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-400">
                  <option>Web Development</option>
                  <option>Mobile Apps</option>
                  <option>UI/UX Design</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Pesan</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Ceritakan detail proyek Anda..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-all"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          <div className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} UNICODE. All rights reserved. Code
            with <span className="text-red-500">❤</span> by Vocational Students.
          </div>
        </div>
      </section>
    </div>
  );
}
