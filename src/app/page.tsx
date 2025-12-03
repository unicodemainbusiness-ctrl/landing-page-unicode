/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2, // Kita pakai ini untuk logo
  ChevronDown,
  Menu,
  X,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STACKS } from "./data/stacks";
import { FAQS } from "./data/faqs";
import { SERVICES } from "./data/services";
import { ADVANTAGES } from "./data/advantages";
import { PROJECTS } from "./data/projects";
import { PRICING } from "./data/pricing";
import CodeBlock from "./components/CodeBlock";
import { useRouter } from "next/navigation";

// --- 1. DATA & CONTENT CONFIGURATION ---

const STEPS = [
  { title: "Konsultasi", desc: "Diskusi kebutuhan & fitur." },
  { title: "Desain", desc: "Perancangan UI/UX & Prototype." },
  { title: "Pengembangan", desc: "Coding & Implementasi sistem." },
  { title: "Peluncuran", desc: "Testing, Deploy & Serah terima." },
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

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
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp as any}
    className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#151D3A] mb-4">
      {title}
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    <div
      className={`h-1.5 w-24 bg-indigo-600 rounded-full mt-4 ${
        align === "center" ? "mx-auto" : ""
      }`}
    />
  </motion.div>
);

// Interface untuk Props Navbar
interface NavbarProps {
  onScrollTo: (section: string) => void;
}

const Navbar = ({ onScrollTo }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionName: string) => {
    onScrollTo(sectionName);
    setIsOpen(false);
  };

  const navItems = [
    { name: "Layanan", key: "services" },
    { name: "Keunggulan", key: "advantages" },
    { name: "Proyek", key: "projects" },
    { name: "Proses", key: "process" },
    { name: "Harga", key: "pricing" },
    { name: "FAQ", key: "faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO AREA: Menggunakan Icon Code2 agar tajam (Vector) */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md">
            <Code2 size={24} />
          </div>
          <span className="text-xl font-bold text-[#151D3A] tracking-tight">UNICODE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="px-5 py-2.5 bg-[#151D3A] text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Hubungi Kami
          </button>
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
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className="text-gray-700 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="text-left font-medium text-indigo-600"
              >
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// --- FAQ Item Component ---
const FaqItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: any;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      variants={cardVariant}
      className="mb-4 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-indigo-100"
    >
      <button
        onClick={onClick}
        className="w-full flex items-start sm:items-center justify-between p-5 text-left bg-white cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#151D3A] text-white flex items-center justify-center font-bold text-sm">
            Q
          </div>
          <span className="text-[#151D3A] font-medium text-base sm:text-lg pt-1 sm:pt-0">
            {item.q}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 mt-1 sm:mt-0 ${
            isOpen ? "rotate-180 text-indigo-600" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-6 pt-0">
              <div className="flex items-start gap-4 pl-0 sm:pl-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm mt-1">
                  A
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pt-2">
                  {item.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- 3. MAIN PAGE COMPONENT ---

export default function UnicodeLandingRevised() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  // --- REFS DEFINITION FOR SMOOTH SCROLL ---
  const servicesRef = useRef<HTMLElement>(null);
  const advantagesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Fungsi Scroll Handler
  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLElement | null> } = {
      services: servicesRef,
      advantages: advantagesRef,
      projects: projectsRef,
      process: processRef,
      pricing: pricingRef,
      faq: faqRef,
      contact: contactRef,
    };

    const targetRef = refs[section];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const phoneNumber = "6285156276912";
    const text = `Halo UNICODE, saya tertarik untuk bekerja sama.\n\n*Nama:* ${name}\n*Email:* ${email}\n*Layanan:* ${service}\n*Pesan:* ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onScrollTo={scrollToSection} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-8 py-4 bg-[#151D3A] text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 cursor-pointer"
              >
                Konsultasi Gratis
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#151D3A] border border-gray-200 font-semibold rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Lihat Portfolio <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY / TECH STACK (Marquee) */}
      <section className="py-10 bg-[#151D3A] border-y border-gray-800 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex relative"
        >
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
        </motion.div>
      </section>

      {/* 3. SERVICES */}
      <section
        id="services"
        ref={servicesRef}
        className="py-24 bg-white scroll-mt-28"
      >
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Solusi Digital Komprehensif"
            subtitle="Apa yang bisa kami bangun untuk mempercepat pertumbuhan bisnis Anda?"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -10 }}
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
          </motion.div>
        </div>
      </section>

      {/* 4. ADVANTAGES (WHY US) */}
      <section
        id="advantages"
        ref={advantagesRef}
        className="py-24 bg-gray-50/50 scroll-mt-28"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp as any}
                className="text-3xl md:text-4xl font-bold text-[#151D3A] mb-6"
              >
                Mengapa Memilih Kami sebagai <br />{" "}
                <span className="text-indigo-600">Partner Digital Anda?</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp as any}
                className="text-gray-600 mb-8 text-lg"
              >
                Bukan sekadar coding. Kami memberikan value bisnis melalui
                transparansi, teknologi tepat guna, dan kecepatan eksekusi.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-6">
                {ADVANTAGES.map((adv, idx) => (
                  <motion.div
                    variants={cardVariant}
                    key={idx}
                    className="flex gap-4"
                  >
                    <div className="mt-1">
                      <adv.icon className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#151D3A]">{adv.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{adv.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Abstract for Tech */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <CodeBlock />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS (GALLERY) */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-24 bg-white scroll-mt-28"
      >
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Karya Terpilih"
            subtitle="Beberapa proyek yang telah kami selesaikan dengan standar kualitas tinggi."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -5 }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. PROCESS (RESPONSIVE FIX) */}
      <section
        id="process"
        ref={processRef}
        className="py-24 bg-[#151D3A] text-white relative overflow-hidden scroll-mt-28"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp as any}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">4 Langkah Mudah</h2>
            <p className="text-indigo-200">
              Proses kerja yang terstruktur untuk hasil maksimal.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // RESPONSIVE GRID: 1 kolom (Mobile), 2 kolom (Tablet), 4 kolom (Desktop)
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {STEPS.map((step, idx) => (
              <motion.div key={idx} variants={cardVariant} className="relative flex flex-col items-center text-center lg:block lg:text-left">
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-indigo-900/30 mx-auto lg:mx-0">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-indigo-200 text-sm max-w-xs mx-auto lg:mx-0">{step.desc}</p>
                
                {/* Connector Line: Hanya tampil di Desktop (lg) karena layoutnya horizontal */}
                {idx !== STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-20 w-full h-[2px] bg-indigo-800/50 -z-0"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. PRICING */}
      {/* <section id="pricing" ref={pricingRef} className="py-24 bg-white scroll-mt-28">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Investasi Terbaik"
            subtitle="Pilih paket yang sesuai dengan skala bisnis Anda saat ini."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {PRICING.map((pkg, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={pkg.recommended ? { scale: 1.05 } : { y: -5 }}
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

                <button
                  onClick={() => scrollToSection("contact")}
                  className={`block w-full py-3 rounded-lg text-center font-semibold transition-colors cursor-pointer ${
                    pkg.recommended
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-100 text-[#151D3A] hover:bg-gray-200"
                  }`}
                >
                  Pilih Paket
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* 8. FAQ */}
      <section id="faq" ref={faqRef} className="py-24 bg-white border-t border-gray-100 scroll-mt-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Pertanyaan yang sering diajukan seputar layanan kami."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {FAQS.map((item, idx) => (
              <FaqItem
                key={idx}
                item={item}
                isOpen={openFaqIndex === idx}
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                }
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. CONTACT / FOOTER */}
      <section
        id="contact"
        ref={contactRef}
        className="bg-[#151D3A] text-white py-20 overflow-hidden scroll-mt-28"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
                    <p className="font-medium">
                      unicode.main.business@gmail.com
                    </p>
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
                    <p className="font-medium">+62 85156276912</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Lokasi</p>
                    <p className="font-medium">Jonggol, Indonesia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleWhatsApp}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2 flex flex-col gap-1">
                  <label className="text-sm text-gray-400">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2 flex flex-col gap-1">
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 flex flex-col gap-1">
                <label className="text-sm text-gray-400">Jenis Layanan</label>
                <select
                  title="select"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-gray-400 bg-gray-900"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>
              <div className="space-y-2 flex flex-col gap-1">
                <label className="text-sm text-gray-400">Pesan</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Ceritakan detail proyek Anda..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-all cursor-pointer"
              >
                Kirim Pesan via WhatsApp
              </button>
            </motion.form>
          </div>

          <div className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} UNICODE. All rights reserved. Code
            with <span className="text-red-500">❤</span> by Vocational
            Students.
          </div>
        </div>
      </section>
    </div>
  );
}