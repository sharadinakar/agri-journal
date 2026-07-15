function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🌱</span>
          <h1 className="text-2xl font-bold text-green-700">
            AgriNova
          </h1>
        </div>

        {/* Menu */}
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:bg-green-700 hover:text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300">Home</li>
          <li className="hover:bg-green-700 hover:text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300">About</li>
          <li className="hover:bg-green-700 hover:text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300">Journals</li>
          <li className="hover:bg-green-700 hover:text-white cursor-pointer px-4 py-2 rounded-full transition-all duration-300">Contact</li>
        </ul>

        {/* Button */}
        <button className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition">
          Submit Paper
        </button>

        

      </div>
    </nav>
  );
}

export default Navbar;