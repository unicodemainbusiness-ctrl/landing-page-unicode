/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
  SwatchBook,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

// Menggunakan URL CDN simple-icons untuk logo agar muncul tanpa library tambahan
// Warna ikon disesuaikan dengan tema #151D3A (Navy Gelap)
const stacks_logo = [
  {
    name: "Tailwind",
    logo: (
      <img
        src="https://cdn.simpleicons.org/tailwindcss/151D3A"
        alt="Tailwind"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Next.js",
    logo: (
      <img
        src="https://cdn.simpleicons.org/nextdotjs/151D3A"
        alt="Next.js"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "React",
    logo: (
      <img
        src="https://cdn.simpleicons.org/react/151D3A"
        alt="React"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "NestJS",
    logo: (
      <img
        src="https://cdn.simpleicons.org/nestjs/151D3A"
        alt="NestJS"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Node.js",
    logo: (
      <img
        src="https://cdn.simpleicons.org/nodedotjs/151D3A"
        alt="Node.js"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "PostgreSQL",
    logo: (
      <img
        src="https://cdn.simpleicons.org/postgresql/151D3A"
        alt="PostgreSQL"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "TypeScript",
    logo: (
      <img
        src="https://cdn.simpleicons.org/typescript/151D3A"
        alt="TypeScript"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "MongoDB",
    logo: (
      <img
        src="https://cdn.simpleicons.org/mongodb/151D3A"
        alt="MongoDB"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "HTML",
    logo: (
      <img
        src="https://cdn.simpleicons.org/html5/151D3A"
        alt="HTML"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "CSS",
    logo: (
      <img
        src="https://cdn.simpleicons.org/css3/151D3A"
        alt="CSS"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "JavaScript",
    logo: (
      <img
        src="https://cdn.simpleicons.org/javascript/151D3A"
        alt="JavaScript"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Supabase",
    logo: (
      <img
        src="https://cdn.simpleicons.org/supabase/151D3A"
        alt="Supabase"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "MySQL",
    logo: (
      <img
        src="https://cdn.simpleicons.org/mysql/151D3A"
        alt="MySQL"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Express",
    logo: (
      <img
        src="https://cdn.simpleicons.org/express/151D3A"
        alt="Express"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Zod",
    logo: (
      <img
        src="https://cdn.simpleicons.org/zod/151D3A"
        alt="Zod"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Prisma",
    logo: (
      <img
        src="https://cdn.simpleicons.org/prisma/151D3A"
        alt="Prisma"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Vercel",
    logo: (
      <img
        src="https://cdn.simpleicons.org/vercel/151D3A"
        alt="Vercel"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Railway",
    logo: (
      <img
        src="https://cdn.simpleicons.org/railway/151D3A"
        alt="Railway"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Git",
    logo: (
      <img
        src="https://cdn.simpleicons.org/git/151D3A"
        alt="Git"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "GitHub",
    logo: (
      <img
        src="https://cdn.simpleicons.org/github/151D3A"
        alt="GitHub"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Vite",
    logo: (
      <img
        src="https://cdn.simpleicons.org/vite/151D3A"
        alt="Vite"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "ESLint",
    logo: (
      <img
        src="https://cdn.simpleicons.org/eslint/151D3A"
        alt="ESLint"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Figma",
    logo: (
      <img
        src="https://cdn.simpleicons.org/figma/151D3A"
        alt="Figma"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Redux",
    logo: (
      <img
        src="https://cdn.simpleicons.org/redux/151D3A"
        alt="Redux"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Prettier",
    logo: (
      <img
        src="https://cdn.simpleicons.org/prettier/151D3A"
        alt="Prettier"
        className="w-8 h-8"
      />
    ),
  },
  // Menggunakan ikon generik untuk ShadCN jika tidak tersedia di simple-icons
  {
    name: "ShadCN UI",
    logo: (
      <img
        src="https://cdn.simpleicons.org/shadcnui/151D3A"
        onError={(e) =>
          (e.currentTarget.src = "https://cdn.simpleicons.org/ui/151D3A")
        }
        alt="ShadCN"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "DaisyUI",
    logo: (
      <img
        src="https://cdn.simpleicons.org/daisyui/151D3A"
        alt="DaisyUI"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Auth0",
    logo: (
      <img
        src="https://cdn.simpleicons.org/auth0/151D3A"
        alt="Auth0"
        className="w-8 h-8"
      />
    ),
  },
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
  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 rounded-lg">
    <Icon className="w-6 h-6 text-primary" />
  </div>
);

const PillarCard = ({ icon, title, children }: any) => (
  <div className="p-6 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-indigo-200 group">
    <PillarIcon icon={icon} />
    <h3 className="mb-2 text-xl font-semibold text-[#151D3A] group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-[#151D3A]/70">{children}</p>
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

  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Layers className="w-8 h-8 mr-2 text-primary" />
            <span className="text-2xl font-bold text-[#151D3A]">UNICODE</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.ref)}
                className="text-sm font-medium text-[#151D3A]/80 transition-colors cursor-pointer hover:text-primary"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button className="px-5 py-2 text-sm font-semibold text-white btn btn-primary rounded-md">
              Hubungi Kami
            </button>
          </div>
          <div className="lg:hidden">
            <button
              title="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#151D3A] rounded-md hover:bg-indigo-50 cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 lg:hidden bg-white rounded-lg p-4 shadow-lg border border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.ref)}
                  className="text-sm text-left font-medium text-[#151D3A] transition-colors cursor-pointer hover:text-primary"
                >
                  {link.name}
                </button>
              ))}
              <button className="w-full px-5 py-2 text-sm font-semibold text-white btn btn-primary rounded-md">
                Hubungi Kami
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const HeroVisuals = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 lg:mt-20">
      {/* Main Mockup Container */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
      >
        {/* Mockup Browser Bar */}
        <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-4 space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <div className="ml-4 flex-1 h-5 bg-gray-100 rounded-md max-w-xs mx-auto"></div>
        </div>

        {/* Mockup Content Area (Dashboard Preview) */}
        <div className="p-6 bg-gray-50/50">
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="col-span-3 space-y-3 hidden sm:block">
              <div className="h-8 bg-indigo-100/50 rounded-lg w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
            {/* Main Chart Area */}
            <div className="col-span-12 sm:col-span-9 space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                <div className="h-8 bg-primary rounded-lg w-24"></div>
              </div>
              <div className="h-48 bg-white rounded-xl border border-gray-200 shadow-sm p-4 relative overflow-hidden">
                {/* Fake Chart */}
                <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-around px-4 pb-4 space-x-2">
                  {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="w-full bg-indigo-100 rounded-t-md relative group"
                    >
                      <div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-md transition-all duration-500 h-full opacity-80"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-white rounded-xl border border-gray-200 shadow-sm"></div>
                <div className="h-24 bg-white rounded-xl border border-gray-200 shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Stats */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-20 md:-left-12 md:top-10 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-48 hidden sm:block"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-green-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Siswa</p>
            <p className="text-lg font-bold text-[#151D3A]">1,250+</p>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
        </div>
      </motion.div>

      {/* Floating Card 2: Code Snippet */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -right-4 bottom-12 md:-right-12 md:bottom-20 z-20 bg-[#151D3A] p-4 rounded-xl shadow-2xl border border-gray-700 w-56 hidden sm:block"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <div className="space-y-2 font-mono text-[10px] text-gray-300">
          <p>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">learn</span> = () ={">"} {"{"}
          </p>
          <p className="pl-4">
            <span className="text-indigo-400">return</span>{" "}
            <span className="text-green-400">&quot;Success&quot;</span>;
          </p>
          <p>{"}"}</p>
        </div>
      </motion.div>

      {/* Floating Card 3: User Profile */}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute right-10 -top-8 z-0 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-primary font-bold">
          U
        </div>
        <div>
          <div className="h-2 w-20 bg-gray-200 rounded mb-1"></div>
          <div className="h-2 w-12 bg-gray-200 rounded"></div>
        </div>
        <CheckCircle2 className="w-5 h-5 text-indigo-500 ml-2" />
      </motion.div>
    </div>
  );
};

export default function UnicodeLandingPage() {
  const [radius, setRadius] = useState(250); // default hp

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(250);
      } else {
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

  const scrollToSection = (ref: any) => {
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
        
        /* Animasi Marquee Manual */
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          from { transform: translateX(100%); }
          to { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }

        /* Animasi Rotate Circle */
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
      `,
        }}
      />

      <div className="min-h-screen font-sans text-[#151D3A] bg-white">
        <div
          className="pointer-events-none fixed inset-0 z-50 transition duration-300 hidden lg:block"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.08), transparent 80%)`,
          }}
        ></div>
        <div className="relative overflow-hidden ">
          <div
            className="absolute top-0 left-0 w-full h-full"
            aria-hidden="true"
          >
            <div className="absolute top-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-indigo-100/60 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-[-15rem] left-[-15rem] w-[30rem] h-[30rem] bg-purple-100/60 rounded-full blur-3xl opacity-40"></div>
          </div>

          <Header refs={sectionRefs} />

          <main className="relative z-10">
            <section className="min-h-screen relative pt-32 pb-20 text-center sm:pt-40 lg:pt-48 overflow-hidden flex flex-col justify-center">
              <div
                className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] sm:w-[68rem] sm:h-[68rem] -z-10 animate-slow-spin"
                aria-hidden="true"
              >
                <div className="absolute inset-0 rounded-full opacity-30 blur-3xl bg-gradient-to-br from-indigo-200 to-purple-200"></div>
              </div>
              <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-[#151D3A] sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block">Kodekan Masa Depan</span>
                  <span className="block text-primary">Digital Anda.</span>
                </h1>
                <p className="max-w-md mx-auto mt-6 text-lg text-[#151D3A]/80 sm:text-xl md:mt-8 md:max-w-3xl">
                  Kami adalah mitra pertumbuhan Anda, merancang solusi digital
                  untuk bisnis dan membimbing individu menjadi talenta teknologi
                  masa depan.
                </p>
                <div className="flex flex-col items-center justify-center max-w-xs mx-auto mt-8 sm:flex-row sm:max-w-none">
                  <button
                    onClick={() => scrollToSection(layananRef)}
                    className="btn btn-lg btn-primary rounded-md"
                  >
                    Jelajahi Layanan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="flex items-center justify-center w-full px-8 py-3 mt-4 text-base font-medium text-[#151D3A] transition-colors bg-white border border-gray-200 rounded-lg sm:mt-0 sm:ml-4 sm:w-auto hover:bg-gray-50 hover:text-primary hover:border-indigo-200">
                    Lihat Kurikulum
                  </button>
                </div>
                <div>
                  <HeroVisuals />
                </div>
              </div>
            </section>

            <section className="bg-[#151D3A] py-6 overflow-hidden shadow-md">
              <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex">
                  {stacks.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-white/90 font-semibold text-lg mx-8"
                    >
                      <span>{item}</span>
                      <span className="text-indigo-400 text-xl font-bold">
                        ✷
                      </span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                  {stacks.map((item, index) => (
                    <div
                      key={index + stacks.length}
                      className="flex items-center gap-2 text-white/90 font-semibold text-lg mx-8"
                    >
                      <span>{item}</span>
                      <span className="text-indigo-400 text-xl font-bold">
                        ✷
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section ref={layananRef} id="layanan" className="py-20 sm:py-24">
              <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-[#151D3A] sm:text-4xl">
                    Ekosistem Pertumbuhan Digital Anda
                  </h2>
                  <p className="mt-4 text-lg text-[#151D3A]/70">
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
                  <h2 className="text-3xl font-bold tracking-tight text-[#151D3A] sm:text-4xl">
                    Spesialisasi Kami
                  </h2>
                  <p className="mt-2 text-primary text-xl font-medium">
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
                      className="relative p-6 bg-white border border-gray-200 rounded-xl transition-all hover:border-indigo-300 hover:shadow-xl group"
                    >
                      <div className="absolute top-6 left-0 w-1.5 h-10 bg-primary rounded-r-lg group-hover:bg-[#151D3A] transition-colors"></div>
                      <div className="mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-[#151D3A]">
                        {service.title}
                      </h3>
                      <p className="text-[#151D3A]/70 text-sm mb-4">
                        {service.desc}
                      </p>
                      <a
                        href="#"
                        className="text-sm text-primary hover:text-[#151D3A] font-medium inline-flex items-center transition-colors"
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
              className="relative pt-20 pb-8 md:pt-28 md:pb-28 overflow-hidden text-[#151D3A] flex flex-col items-center justify-center"
            >
              {/* Circle Logo */}
              <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]  md:mb-20">
                <div className="absolute inset-0 spin-circle origin-center top-64 md:top-56">
                  {stacks_logo.map((stack, index) => {
                    const angle = (360 / stacks_logo.length) * index;
                    return (
                      <div
                        key={index}
                        className="absolute w-12 h-12 md:w-16 md:h-16 p-2 rounded-xl bg-white backdrop-blur-md shadow-md transition-transform duration-300 hover:scale-110 flex items-center justify-center border border-gray-200 hover:border-indigo-300"
                        style={{
                          transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                          transformOrigin: "center center",
                          top: "50%",
                          left: "50%",
                          marginTop: "-1.5rem",
                          marginLeft: "-1.5rem",
                        }}
                      >
                        {/* Menggunakan logo placeholder teks */}
                        <div className="text-[#151D3A]">{stack.logo}</div>
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
                  className="text-2xl md:text-4xl font-bold text-center whitespace-normal text-[#151D3A]"
                >
                  Membangun dengan Tumpukan <br /> Teknologi Terbaik
                </motion.h2>

                <p className="text-[#151D3A]/70 mt-3 mb-6 text-center max-w-md text-sm md:text-base">
                  Jelajahi teknologi web modern yang kami gunakan untuk
                  membangun pengalaman digital yang kuat, skalabel, dan
                  menakjubkan.
                </p>

                <button
                  onClick={() => scrollToSection(kontakRef)}
                  className="text-sm font-semibold text-white btn btn-lg btn-primary rounded-md"
                >
                  Hubungi Kami
                </button>
              </div>
            </section>

            <section ref={prosesRef} className="relative py-24 overflow-hidden">
              <div className="relative z-10 container mx-auto px-4 text-center">
                <span className="inline-block mb-2 text-sm text-primary border border-indigo-200 rounded-full px-4 py-1 bg-indigo-50 backdrop-blur-sm font-medium">
                  Bagaimana Kami Bekerja
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#151D3A]">
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
                      className="relative group py-8 bg-white border border-gray-200 rounded-xl p-6 overflow-hidden backdrop-blur-md transition duration-300 hover:shadow-lg hover:border-indigo-300"
                    >
                      <span className="absolute bottom-4 right-4 text-[8rem] md:text-[10rem] font-extrabold text-indigo-100/50 group-hover:text-indigo-100 transition-all duration-500 ease-in-out pointer-events-none select-none leading-none">
                        {item.number}
                      </span>
                      <div className="relative z-10">
                        <p className="text-sm text-primary font-medium">
                          {item.step}
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold text-[#151D3A]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-[#151D3A]/70">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none"></div>
            </section>

            <section ref={kontakRef} className="py-24 bg-transparent">
              <div className="container px-4 mx-auto sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-[#151D3A] sm:text-4xl">
                  Mari Ciptakan Proyek{" "}
                  <span className="text-primary">Luar Biasa</span> Bersama!
                </h2>
                <p className="mt-4 text-lg text-[#151D3A]/70 max-w-2xl mx-auto">
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
                      className="px-4 cursor-pointer py-2 text-sm font-medium text-[#151D3A] bg-white border rounded-full hover:bg-primary border-primary hover:text-white transition-colors shadow-sm"
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
                    className="text-sm font-semibold text-white btn btn-lg btn-primary rounded-md"
                  >
                    Hubungi Kami
                  </a>
                </motion.div>
              </div>
            </section>
          </main>

          <footer className="pt-8 pb-6 border-t border-gray-200">
            <div className="container px-4 mx-auto text-center text-[#151D3A]/60 sm:px-6 lg:px-8">
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
