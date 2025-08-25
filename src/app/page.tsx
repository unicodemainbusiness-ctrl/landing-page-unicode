/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSupabase,
  SiMysql,
  SiZod,
  SiVercel,
  SiRailway,
  SiGit,
  SiGithub,
  SiVite,
  SiEslint,
  SiFigma,
  SiRedux,
  SiPrettier,
  SiShadcnui,
  SiDaisyui,
  SiPrisma,
  SiExpress,
  SiAuth0,
} from "react-icons/si";

import {
  ArrowRight,
  Code,
  GraduationCap,
  Users,
  Menu,
  Layers,
  Palette,
  AppWindow,
  Globe,
  Component,
  PenTool,
  GitBranch,
  SwatchBook,
  Bot,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";

const keywords = [
  "Web Development",
  "Aplikasi Mobile",
  "E-Commerce",
  "Desain UI/UX",
  "Kursus Coding",
  "Full-Stack",
  "React",
  "Node.js",
  "Portfolio Digital",
  "Komunitas Developer",
  "Transformasi Digital",
  "SEO-Friendly",
  "Modern Tech Stack",
];

const cardVariants = {
  hidden: () => ({
    opacity: 0,
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    rotate: Math.random() * 20 - 10,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { type: "spring", damping: 15, stiffness: 120 },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    title: "Desain UI/UX",
    icon: Palette,
    desc: "Merancang antarmuka yang intuitif dan menarik untuk pengalaman pengguna terbaik.",
  },
  {
    title: "Pengembangan Aplikasi",
    icon: AppWindow,
    desc: "Membangun aplikasi web dan mobile yang fungsional dan skalabel.",
  },
  {
    title: "Website & E-Commerce",
    icon: Globe,
    desc: "Membuat website profil perusahaan dan toko online yang profesional.",
  },
  {
    title: "Desain Sistem",
    icon: Component,
    desc: "Menciptakan komponen desain yang konsisten untuk skalabilitas produk.",
  },
  {
    title: "Wireframing & Prototyping",
    icon: PenTool,
    desc: "Memvisualisasikan alur pengguna dan struktur aplikasi sebelum pengembangan.",
  },
  {
    title: "Identitas Merek Digital",
    icon: SwatchBook,
    desc: "Membangun identitas visual yang kuat untuk merek Anda di dunia digital.",
  },
];

const stacks_logo = [
  {
    name: "Tailwind",
    logo: <SiTailwindcss color="#06B6D4" className="text-5xl" />,
  },
  {
    name: "Next.js",
    logo: <SiNextdotjs color="#FFFFFF" className="text-5xl" />,
  },
  { name: "React", logo: <SiReact color="#61DAFB" className="text-5xl" /> },
  { name: "NestJS", logo: <SiNestjs color="#E0234E" className="text-5xl" /> },
  {
    name: "Node.js",
    logo: <SiNodedotjs color="#339933" className="text-5xl" />,
  },
  {
    name: "PostgreSQL",
    logo: <SiPostgresql color="#336791" className="text-5xl" />,
  },
  {
    name: "TypeScript",
    logo: <SiTypescript color="#3178C6" className="text-5xl" />,
  },
  { name: "MongoDB", logo: <SiMongodb color="#47A248" className="text-5xl" /> },
  { name: "HTML", logo: <SiHtml5 color="#E34F26" className="text-5xl" /> },
  { name: "CSS", logo: <SiCss3 color="#1572B6" className="text-5xl" /> },
  {
    name: "JavaScript",
    logo: <SiJavascript color="#F7DF1E" className="text-5xl" />,
  },
  {
    name: "Supabase",
    logo: <SiSupabase color="#3ECF8E" className="text-5xl" />,
  },
  { name: "MySQL", logo: <SiMysql color="#4479A1" className="text-5xl" /> },
  { name: "Express", logo: <SiExpress color="#FFFFFF" className="text-5xl" /> },
  { name: "Zod", logo: <SiZod color="#3E67B7" className="text-5xl" /> },
  { name: "Prisma", logo: <SiPrisma color="#2D3748" className="text-5xl" /> },
  { name: "Vercel", logo: <SiVercel color="#FFFFFF" className="text-5xl" /> },
  { name: "Railway", logo: <SiRailway color="#0B0D0E" className="text-5xl" /> },
  { name: "Git", logo: <SiGit color="#F05032" className="text-5xl" /> },
  { name: "GitHub", logo: <SiGithub color="#FFFFFF" className="text-5xl" /> },
  { name: "Vite", logo: <SiVite color="#646CFF" className="text-5xl" /> },
  { name: "ESLint", logo: <SiEslint color="#4B32C3" className="text-5xl" /> },
  { name: "Figma", logo: <SiFigma color="#F24E1E" className="text-5xl" /> },
  { name: "Redux", logo: <SiRedux color="#764ABC" className="text-5xl" /> },
  {
    name: "Prettier",
    logo: <SiPrettier color="#F7B93E" className="text-5xl" />,
  },
  {
    name: "ShadCN UI",
    logo: <SiShadcnui color="#FFFFFF" className="text-5xl" />,
  },
  { name: "DaisyUI", logo: <SiDaisyui color="#A855F7" className="text-5xl" /> },
  { name: "Auth0", logo: <SiAuth0 color="#EB5424" className="text-5xl" /> },
];

const stacks = [
  "Next.js",
  "NestJS",
  "React",
  "TailwindCSS",
  "Figma",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "Prisma",
  "Git",
  "Vercel",
  "Docker",
  "Firebase",
  "Supabase",
];

const PillarIcon = ({ icon: Icon }: any) => (
  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-900/50 rounded-lg">
    <Icon className="w-6 h-6 text-indigo-400" />
  </div>
);

const PillarCard = ({ icon, title, children }: any) => (
  <div className="p-6 transition-all duration-300 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-indigo-500/50">
    <PillarIcon icon={icon} />
    <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const Header = ({ refs }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "Layanan", ref: refs.layananRef },
    { name: "Spesialisasi", ref: refs.spesialisasiRef },
    { name: "Teknologi", ref: refs.teknologiRef },
    { name: "Proses", ref: refs.prosesRef },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Layers className="w-8 h-8 mr-2 text-indigo-400" />
            <span className="text-2xl font-bold text-white">UNICODE</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.ref)}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button className="btn btn-primary rounded-md">Hubungi Kami</button>
          </div>
          <div className="lg:hidden">
            <button
              title="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 rounded-md hover:bg-gray-800"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 lg:hidden bg-gray-800/90 rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.ref)}
                  className="text-sm text-left font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                </button>
              ))}
              <button className="btn btn-primary rounded-md">
                Hubungi Kami
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default function UnicodeLandingPage() {
  const [radius, setRadius] = useState(250); // default hp

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // mobile & tablet kecil
        setRadius(250);
      } else {
        // laptop / desktop
        setRadius(400);
      }
    };
    handleResize(); // set pertama kali
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  const layananRef = useRef(null);
  const spesialisasiRef = useRef(null);
  const teknologiRef = useRef(null);
  const prosesRef = useRef(null);
  const kontakRef = useRef(null);

  const sectionRefs = {
    layananRef,
    spesialisasiRef,
    teknologiRef,
    prosesRef,
    kontakRef,
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slow-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-slow-spin { animation: slow-spin 25s linear infinite; }
      `,
        }}
      />

      <div className="min-h-screen font-sans text-white bg-gray-900">
        <div
          className="pointer-events-none fixed inset-0 z-50 transition duration-300 hidden lg:block"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.15), transparent 80%)`,
          }}
        ></div>
        <div className="relative overflow-hidden ">
          <div
            className="absolute top-0 left-0 w-full h-full"
            aria-hidden="true"
          >
            <div className="absolute top-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-indigo-900/50 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-[-15rem] left-[-15rem] w-[30rem] h-[30rem] bg-purple-900/40 rounded-full blur-3xl opacity-40"></div>
          </div>

          <Header refs={sectionRefs} />

          <main className="relative z-10">
            <section className="h-screen relative pt-32 pb-20 text-center sm:pt-40 lg:pt-48 overflow-hidden flex flex-col justify-center">
              <div
                className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] sm:w-[68rem] sm:h-[68rem] -z-10 animate-slow-spin"
                aria-hidden="true"
              >
                <div className="absolute inset-0 rounded-full opacity-25 blur-3xl animate-color-shift transition-all animate-gradient bg-gradient-animation"></div>
              </div>
              <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block">Kodekan Masa Depan</span>
                  <span className="block text-indigo-400">Digital Anda.</span>
                </h1>
                <p className="max-w-md mx-auto mt-6 text-lg text-gray-300 sm:text-xl md:mt-8 md:max-w-3xl">
                  Kami adalah mitra pertumbuhan Anda, merancang solusi digital
                  untuk bisnis dan membimbing individu menjadi talenta teknologi
                  masa depan.
                </p>
                <div className="flex flex-col items-center justify-center max-w-xs mx-auto mt-8 sm:flex-row sm:max-w-none">
                  <button
                    onClick={() => scrollToSection(layananRef)}
                    className="btn btn-primary btn-lg rounded-lg"
                  >
                    Jelajahi Layanan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="btn btn-ghost btn-lg rounded-lg mt-4 sm:mt-0 sm:ml-4">
                    Lihat Kurikulum
                  </button>
                </div>
              </div>
            </section>

            <section className="bg-indigo-400 py-4 overflow-hidden">
              <Marquee
                gradient={false}
                speed={40}
                pauseOnHover={true}
                className="gap-8"
              >
                {stacks.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-black font-semibold text-lg mx-6"
                  >
                    <span>{item}</span>
                    <span className="text-black text-xl font-bold">✷</span>
                  </div>
                ))}
              </Marquee>
            </section>

            {/* <section className='py-12'>
              <div className='container px-4 mx-auto sm:px-6 lg:px-8'>
                <p className='text-sm text-center text-gray-500'>
                  DIPERCAYA OLEH BISNIS DAN TALENTA DIGITAL DI SELURUH INDONESIA
                </p>
                <div className='flex flex-wrap items-center justify-center mt-6 gap-x-8 gap-y-4 opacity-70 grayscale'>
                  <SiNextdotjs className="text-5xl" />
                  <SiVercel className="text-5xl" />
                  <SiReact className="text-5xl" />
                  <SiGithub className="text-5xl" />
                  <SiFigma className="text-5xl" />
                </div>
              </div>
            </section> */}

            <section ref={layananRef} id="layanan" className="py-20 sm:py-24">
              <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ekosistem Pertumbuhan Digital Anda
                  </h2>
                  <p className="mt-4 text-lg text-gray-400">
                    Dari membangun aset digital hingga mencetak talenta, kami
                    menyediakan solusi terintegrasi untuk kebutuhan digital
                    Anda.
                  </p>
                </div>
                <div className="grid max-w-md gap-8 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
                  <PillarCard icon={Code} title="Pengembangan Website">
                    Kami mengubah ide Anda menjadi website profesional yang
                    cepat, aman, dan memukau untuk mendorong pertumbuhan bisnis.
                  </PillarCard>
                  <PillarCard icon={GraduationCap} title="Akademi Coding">
                    Belajar coding dengan kurikulum berbasis praktik untuk
                    membangun portofolio dan karir impian Anda di industri
                    teknologi.
                  </PillarCard>
                  <PillarCard icon={Users} title="Komunitas & Edukasi">
                    Bertumbuh bersama komunitas developer yang suportif melalui
                    konten edukasi gratis, tips, dan wawasan industri.
                  </PillarCard>
                </div>
              </div>
            </section>

            <section
              ref={spesialisasiRef}
              className="py-20 sm:py-24 bg-transparent"
            >
              <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Spesialisasi Kami
                  </h2>
                  <p className="mt-2 text-indigo-400 text-xl">
                    Layanan yang Kami Sediakan
                  </p>
                </div>
                <motion.div
                  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants as any}
                      className="relative p-6 bg-gray-800/50 border border-gray-700 rounded-xl transition-all hover:border-indigo-500/60 hover:bg-gray-800"
                    >
                      <div className="absolute top-6 left-0 w-1.5 h-10 bg-indigo-500 rounded-r-lg"></div>
                      <div className="mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-indigo-900/50 rounded-lg">
                          <service.icon className="w-6 h-6 text-indigo-400" />
                        </div>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {service.desc}
                      </p>
                      <a
                        href="#"
                        className="text-sm text-indigo-400 hover:text-indigo-300 inline-flex items-center"
                      >
                        Pelajari lebih lanjut{" "}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            <section
              ref={teknologiRef}
              className="relative pt-20 pb-8 md:pt-28 md:pb-28 overflow-hidden text-white flex flex-col items-center justify-center"
            >
              <style jsx>{`
                @keyframes rotate-circle {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
                .spin-circle {
                  animation: rotate-circle 40s linear infinite;
                }
              `}</style>

              {/* Circle Logo */}
              <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]  md:mb-20">
                <div className="absolute inset-0 spin-circle origin-center top-64 md:top-56">
                  {stacks_logo.map((stack, index) => {
                    const angle = (360 / stacks_logo.length) * index;
                    return (
                      <div
                        key={index}
                        className="absolute w-12 h-12 md:w-16 md:h-16 p-2 rounded-xl bg-white/10 backdrop-blur-md shadow-md transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                        style={{
                          transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                          transformOrigin: "center center",
                          top: "50%",
                          left: "50%",
                          marginTop: "-1.5rem",
                          marginLeft: "-1.5rem",
                        }}
                      >
                        {stack.logo}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Text & Button */}
              <div className="flex flex-col gap-4 relative bottom-36 md:bottom-56 items-center px-4">
                <motion.h2
                  ref={ref}
                  initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
                  animate={
                    isInView
                      ? {
                          clipPath: "inset(0 0% 0 0%)",
                          opacity: 1,
                          transition: {
                            duration: 2,
                            ease: "linear",
                            clipPath: {
                              delay: 0.2,
                              duration: 2,
                              ease: "easeInOut",
                            },
                          },
                        }
                      : {}
                  }
                  className="text-2xl md:text-4xl font-bold text-center whitespace-normal"
                >
                  Membangun dengan Tumpukan <br /> Teknologi Terbaik
                </motion.h2>

                <p className="text-gray-400 mt-3 mb-6 text-center max-w-md text-sm md:text-base">
                  Jelajahi teknologi web modern yang kami gunakan untuk
                  membangun pengalaman digital yang kuat, skalabel, dan
                  menakjubkan.
                </p>

                <button
                  onClick={() => scrollToSection(kontakRef)}
                  className="w-full md:w-1/2 btn btn-primary rounded-md"
                >
                  Hubungi Kami
                </button>
              </div>
            </section>

            <section
              ref={prosesRef}
              className="relative py-24 bg-gradient-to-br overflow-hidden"
            >
              <div className="relative z-10 container mx-auto px-4 text-center">
                <span className="inline-block mb-2 text-sm text-indigo-300 border border-indigo-400 rounded-full px-4 py-1 bg-white/5 backdrop-blur-sm">
                  Bagaimana Kami Bekerja
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold text-white">
                  Proses Pengembangan Website di UNICODE
                </h2>
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      number: "1",
                      step: "Langkah 01",
                      title: "Perencanaan & Konsultasi",
                      desc: "Konsultasikan kebutuhan Anda dan dapatkan rekomendasi strategis dari tim ahli kami.",
                    },
                    {
                      number: "2",
                      step: "Langkah 02",
                      title: "Desain & Pengembangan",
                      desc: "Kami mulai mengerjakan desain UI/UX dan fungsionalitas yang dibutuhkan secara iteratif.",
                    },
                    {
                      number: "3",
                      step: "Langkah 03",
                      title: "Peluncuran & Dukungan",
                      desc: "Website selesai, kami bantu proses deploy ke domain Anda dan memberikan dukungan teknis.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      key={index}
                      className="relative group py-8 bg-white/5 border border-white/10 rounded-xl p-6 overflow-hidden backdrop-blur-md transition duration-300 hover:shadow-lg"
                    >
                      <span className="absolute bottom-4 right-4 text-[8rem] md:text-[10rem] font-extrabold text-indigo-400/0 group-hover:text-indigo-400/10 transition-all duration-500 ease-in-out pointer-events-none select-none leading-none">
                        {item.number}
                      </span>
                      <div className="relative z-10">
                        <p className="text-sm text-indigo-400 font-medium">
                          {item.step}
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-300">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f670_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>
            </section>

            <section ref={kontakRef} className="py-24 bg-transparent">
              <div className="container px-4 mx-auto sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Mari Ciptakan Proyek{" "}
                  <span className="text-indigo-400">Luar Biasa</span> Bersama!
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                  Siap untuk membawa ide Anda ke level berikutnya? Hubungi kami
                  untuk memulai kolaborasi dan wujudkan proyek digital impian
                  Anda.
                </p>
                <motion.div
                  className="flex flex-wrap justify-center gap-3 mt-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.08 }}
                >
                  {keywords.map((word, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: -60, rotate: -5 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotate: 0,
                          transition: {
                            type: "spring",
                            damping: 10,
                            stiffness: 100,
                          },
                        },
                      }}
                      className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-full hover:bg-indigo-500 hover:border-indigo-400 hover:text-white transition-colors"
                    >
                      {word}
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <a
                    href="#contact"
                    className="btn btn-primary btn-lg rounded-lg"
                  >
                    Hubungi Kami
                  </a>
                </motion.div>
              </div>
            </section>
          </main>

          <footer className="pt-8 pb-6 border-t border-gray-800">
            <div className="container px-4 mx-auto text-center text-gray-500 sm:px-6 lg:px-8">
              <p>
                &copy; {new Date().getFullYear()} UNICODE. Semua Hak Cipta
                Dilindungi.
              </p>
              <p className="mt-2 text-sm">Kodekan Masa Depan Digital Anda.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
