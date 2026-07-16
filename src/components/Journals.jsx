function Journals() {
  return (
    <section className="py-10 md:py-20 bg-green-50">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Featured Journals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">

          <div className="bg-white p-6 md:p-8 rounded-xl shadow">
            <h3 className="text-lg md:text-xl font-bold">
              Sustainable Agriculture
            </h3>

            <p className="mt-4 text-sm md:text-base text-gray-600">
              Research on sustainable farming techniques.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow">
            <h3 className="text-lg md:text-xl font-bold">
              Crop Protection
            </h3>

            <p className="mt-4 text-sm md:text-base text-gray-600">
              Modern pest and disease management research.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow">
            <h3 className="text-lg md:text-xl font-bold">
              Smart Irrigation
            </h3>

            <p className="mt-4 text-sm md:text-base text-gray-600">
              AI & IoT based irrigation systems.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Journals;