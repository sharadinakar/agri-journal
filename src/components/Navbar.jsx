import { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">

      <div className="max-w-7xl mx-auto flex items-center px-4 md:px-8 py-4">

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl">🌱</span>
          <h1 className="text-xl md:text-2xl font-bold text-green-700">
            AgriNova
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 ml-auto" align ="center">

          <ul className="flex gap-8 text-gray-700 font-medium">
            <li className="hover:bg-green-700 hover:text-white cursor-pointer font-Roboto px-4 py-2 rounded-full transition-all duration-300">
              Home
            </li>
            <li className="hover:bg-green-700 hover:text-white cursor-pointer font-Roboto px-4 py-2 rounded-full transition-all duration-300">
              About
            </li>
            <li className="hover:bg-green-700 hover:text-white cursor-pointer font-Roboto px-4 py-2 rounded-full transition-all duration-300">
              Journals
            </li>
            <li className="hover:bg-green-700 hover:text-white cursor-pointer font-Roboto px-4 py-2 rounded-full transition-all duration-300">
              Research
            </li>
            <li className="hover:bg-green-700 hover:text-white cursor-pointer font-Roboto px-4 py-2 rounded-full transition-all duration-300">
              Contact
            </li>
          </ul>

          <Button onClick={() => alert("Account created!")}>Create an account</Button>

          

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-green-100 shadow-md">

          <ul className="flex flex-col text-center py-4">

            <li className="py-3 hover:bg-green-50 cursor-pointer font-Roboto">
              Home
            </li>

            <li className="py-3 hover:bg-green-50 cursor-pointer font-Roboto">
              About
            </li>

            <li className="py-3 hover:bg-green-50 cursor-pointer font-Roboto">
              Journals
            </li>

            <li className="py-3 hover:bg-green-50 cursor-pointer font-Roboto">
              Research
            </li>

            <li className="py-3 hover:bg-green-50 cursor-pointer font-Roboto">
              Contact
            </li>

            <li className="py-3">
              <Button onClick={() => alert("Account created!")}>Create an account</Button>
            </li>

          </ul>

          

        </div>
      )}

    </nav>
  );
}

export default Navbar;