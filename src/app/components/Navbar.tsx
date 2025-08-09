import { Menu, Layers } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
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
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button className="btn btn-primary rounded-md">
              Hubungi Kami
            </button>
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
                <a
                  key={link}
                  href="#"
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link}
                </a>
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

export default Navbar;
