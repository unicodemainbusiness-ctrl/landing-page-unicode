"use client";

// Anda mungkin perlu menginstal lucide-react: npm install lucide-react
import { ArrowRight, Code, GraduationCap, Users, Menu, Layers, BarChart, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

// Komponen Ikon untuk pilar layanan
const PillarIcon = ({ icon: Icon }: any) => (
  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-900/50 rounded-lg">
    <Icon className="w-6 h-6 text-indigo-400" />
  </div>
);

// Komponen Kartu untuk pilar layanan
const PillarCard = ({ icon, title, children }: any) => (
  <div className="p-6 transition-all duration-300 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-indigo-500/50">
    <PillarIcon icon={icon} />
    <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

// Komponen Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Layanan", "Akademi", "Komunitas", "Tentang Kami"];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Layers className="w-8 h-8 mr-2 text-indigo-400" />
            <span className="text-2xl font-bold text-white">UNICODE</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button className="px-5 py-2 text-sm font-semibold text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-900">
              Hubungi Kami
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300 rounded-md hover:bg-gray-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 lg:hidden bg-gray-800/90 rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a key={link} href="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                  {link}
                </a>
              ))}
              <button className="w-full px-5 py-2 mt-2 text-sm font-semibold text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-700">
                Hubungi Kami
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Komponen Utama Halaman
export default function UnicodeLandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* CSS untuk animasi rotasi */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-slow-spin {
          animation: slow-spin 25s linear infinite;
        }
      `}} />

      <div className="min-h-screen font-sans text-white bg-gray-900">
        {/* Efek Mouse Follower */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 transition duration-300 hidden lg:block"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.15), transparent 80%)`
          }}
        ></div>

        <div className="relative overflow-hidden">
          {/* Latar belakang gradien dan glow global */}
          <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
              <div className="absolute top-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-indigo-900/50 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-[-15rem] left-[-15rem] w-[30rem] h-[30rem] bg-purple-900/40 rounded-full blur-3xl opacity-40"></div>
          </div>
          
          <Header />

          <main className="relative z-10">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 text-center sm:pt-40 lg:pt-48 overflow-hidden">
              {/* LINGKARAN GRADASI BERPUTAR */}
              <div className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] sm:w-[68rem] sm:h-[68rem] -z-10 animate-slow-spin" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-25 blur-3xl"></div>
              </div>
              
              <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block">Kodekan Masa Depan</span>
                  <span className="block text-indigo-400">Digital Anda.</span>
                </h1>
                <p className="max-w-md mx-auto mt-6 text-lg text-gray-300 sm:text-xl md:mt-8 md:max-w-3xl">
                  Kami adalah mitra pertumbuhan Anda, merancang solusi digital untuk bisnis dan membimbing individu menjadi talenta teknologi masa depan.
                </p>
                <div className="flex flex-col items-center justify-center max-w-xs mx-auto mt-8 sm:flex-row sm:max-w-none">
                  <button className="btn btn-primary btn-lg rounded-lg">
                    Jelajahi Layanan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="btn btn-ghost btn-lg rounded-lg mt-4 sm:mt-0 sm:ml-4">
                    Lihat Kurikulum
                  </button>
                </div>
              </div>
            </section>

            {/* Logos Section */}
            <section className="py-12">
              <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <p className="text-sm text-center text-gray-500">DIPERCAYA OLEH UKM DAN PROFESIONAL DI SELURUH INDONESIA</p>
                <div className="flex flex-wrap items-center justify-center mt-6 space-x-6 opacity-60 grayscale">
                  <span className="text-2xl font-bold">Logoipsum</span>
                  <span className="text-2xl font-bold">Logoipsum</span>
                  <span className="hidden text-2xl font-bold sm:block">Logoipsum</span>
                  <span className="hidden text-2xl font-bold lg:block">Logoipsum</span>
                  <span className="hidden text-2xl font-bold lg:block">Logoipsum</span>
                </div>
              </div>
            </section>

            {/* Pillars Section */}
            <section id="layanan" className="py-20 sm:py-24">
              <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ekosistem Pertumbuhan Digital Anda</h2>
                  <p className="mt-4 text-lg text-gray-400">
                    Dari membangun aset digital hingga mencetak talenta, kami menyediakan solusi terintegrasi untuk kebutuhan digital Anda.
                  </p>
                </div>
                <div className="grid max-w-md gap-8 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
                  <PillarCard icon={Code} title="Pengembangan Website">
                    Kami mengubah ide Anda menjadi website profesional yang cepat, aman, dan memukau untuk mendorong pertumbuhan bisnis.
                  </PillarCard>
                  <PillarCard icon={GraduationCap} title="Akademi Coding">
                    Belajar coding dengan kurikulum berbasis praktik untuk membangun portofolio dan karir impian Anda di industri teknologi.
                  </PillarCard>
                  <PillarCard icon={Users} title="Komunitas & Edukasi">
                    Bertumbuh bersama komunitas developer yang suportif melalui konten edukasi gratis, tips, dan wawasan industri.
                  </PillarCard>
                </div>
              </div>
            </section>

            {/* Feature Section 1 */}
            <section className="py-20 sm:py-24">
              <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Desain Modern, Hasil Maksimal</h2>
                    <p className="mt-4 text-lg text-gray-400">
                      Setiap website yang kami bangun berfokus pada desain yang responsif, optimisasi SEO, dan pengalaman pengguna yang luar biasa untuk mendorong hasil bisnis yang nyata.
                    </p>
                    <button className="flex items-center mt-8 text-indigo-400 transition-colors hover:text-indigo-300">
                      Lihat Portofolio Kami <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="w-full h-64 bg-gray-900 rounded-lg flex items-center justify-center">
                          <BarChart className="w-24 h-24 text-indigo-600 opacity-50"/>
                      </div>
                      <p className="text-sm text-center text-gray-500 mt-4">Mockup antarmuka analitik</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Feature Section 2 */}
            <section className="py-20 sm:py-24">
              <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 lg:order-last">
                      <div className="w-full h-64 bg-gray-900 rounded-lg flex items-center justify-center">
                          <MessageSquare className="w-24 h-24 text-purple-600 opacity-50"/>
                      </div>
                      <p className="text-sm text-center text-gray-500 mt-4">Mockup sesi kolaborasi</p>
                  </div>
                  <div className="lg:order-first">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Belajar Langsung dari Praktisi Industri</h2>
                    <p className="mt-4 text-lg text-gray-400">
                      Dapatkan akses ke sesi mentoring, proyek dunia nyata, dan komunitas eksklusif untuk mempercepat perjalanan belajar Anda di UNICODE Academy.
                    </p>
                    <button className="flex items-center mt-8 text-purple-400 transition-colors hover:text-purple-300">
                      Gabung Akademi <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="py-12 border-t border-gray-800">
            <div className="container px-4 mx-auto text-center text-gray-500 sm:px-6 lg:px-8">
              <p>&copy; {new Date().getFullYear()} UNICODE. Semua Hak Cipta Dilindungi.</p>
              <p className="mt-2 text-sm">Kodekan Masa Depan Digital Anda.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
