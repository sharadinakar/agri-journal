function Stats() {
  return (
    <section className="bg-white py-10 md:py-20">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

          <div className="bg-green-50 rounded-2xl p-5 md:p-8 text-center shadow-sm">
            <h2 className="text-2xl md:text-4xl font-bold text-green-700">
              120+
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Research Papers
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-5 md:p-8 text-center shadow-sm">
            <h2 className="text-2xl md:text-4xl font-bold text-green-700">
              25+
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Universities
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-5 md:p-8 text-center shadow-sm">
            <h2 className="text-2xl md:text-4xl font-bold text-green-700">
              350+
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Researchers
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-5 md:p-8 text-center shadow-sm">
            <h2 className="text-2xl md:text-4xl font-bold text-green-700">
              15+
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Research Fields
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;