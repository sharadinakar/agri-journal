import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl">🌱</span>
          <h1 className="text-xl md:text-2xl font-bold text-green-700">
            AgriNova
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:bg-green-700 hover:text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300">
            Home
          </li>
          <li className="hover:bg-green-700 hover:text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300">
            About
          </li>
          <li className="hover:bg-green-700 hover:text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300">
            Journals
          </li>
          <li className="hover:bg-green-700 hover:text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300">
            Contact
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition">
          Submit Paper
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">

          <ul className="flex flex-col gap-3 text-gray-700 font-medium">

            <li className="hover:text-green-700 cursor-pointer">
              Home
            </li>

            <li className="hover:text-green-700 cursor-pointer">
              About
            </li>

            <li className="hover:text-green-700 cursor-pointer">
              Journals
            </li>

            <li className="hover:text-green-700 cursor-pointer">
              Contact
            </li>

          </ul>

          <button className="mt-4 w-full bg-green-700 text-white py-3 rounded-full">
            Submit Paper
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;