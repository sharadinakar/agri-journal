function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white">

      
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="max-w-2xl">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            🌱 AgriNova Agricultural Research Platform
          </span>

          <h1 className="text-6xl font-bold text-gray-900 leading-tight mt-6">
            Advancing
            <span className="text-green-700">
              {" "}Agricultural Research
            </span>
            <br />
            Through Innovation
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Connecting researchers, universities and institutions
            through a modern digital publishing platform designed
            for the future of agricultural science.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-green-700 text-white px-7 py-3 rounded-full hover:bg-green-800 transition">
              Submit Paper
            </button>

            <button className="border border-green-700 text-green-700 px-7 py-3 rounded-full hover:bg-green-50 transition">
              Explore Journals
            </button>

          </div>

        </div>

        <div className="flex justify-center">

  <div className="bg-white rounded-3xl shadow-lg p-10 w-[420px]">

    <h3 className="text-2xl font-bold text-green-700" align="center">
      Research Dashboard
    </h3>

    <div className="mt-8 space-y-4">

      <div className="bg-green-50 rounded-xl p-4">
        📄 120+ Published Papers
      </div>

      <div className="bg-green-50 rounded-xl p-4">
        🏫 25 Partner Universities
      </div>

      <div className="bg-green-50 rounded-xl p-4">
        👨‍🔬 350 Researchers
      </div>

      <div className="bg-green-50 rounded-xl p-4">
        🌎 Global Research Platform
      </div>

      <div className="bg-green-50 rounded-xl p-4">
        📚 Explore Journals
      </div>

    </div>

  </div>

</div>

      </div>

    </section>
  );
}

export default Hero;