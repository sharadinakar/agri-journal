import button from "./Button";
function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left Side */}
        <div className="max-w-2xl">

          <span className="inline-block bg-green-100 text-green-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
            🌱 AgriNova Agricultural Research Platform
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-6">
            Advancing
            <span className="text-green-700">
              {" "}Agricultural Research
            </span>
            <br />
            Through Innovation
          </h1>

          <p className="text-base md:text-lg text-gray-600 mt-6 leading-7 md:leading-8">
            Connecting researchers, universities and institutions
            through a modern digital publishing platform designed
            for the future of agricultural science.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">

            <Button onClick={() => alert("Paper submitted!")}>
              Submit paper
            </Button>

            <button className="border border-green-700 text-green-700 px-6 md:px-7 py-3 rounded-full hover:bg-green-50 transition w-full sm:w-auto">
              Explore Journals
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 w-full max-w-[420px]">

            <h3 className="text-xl md:text-2xl font-bold text-green-700 text-center">
              Research Dashboard
            </h3>

            <div className="mt-6 md:mt-8 space-y-4">

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