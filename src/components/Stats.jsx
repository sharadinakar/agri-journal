function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-4 gap-8">

          <div className="bg-green-50 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold text-green-700">120+</h2>
            <p className="text-gray-600 mt-2">Research Papers</p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold text-green-700">25+</h2>
            <p className="text-gray-600 mt-2">Universities</p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold text-green-700">350+</h2>
            <p className="text-gray-600 mt-2">Researchers</p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold text-green-700">15+</h2>
            <p className="text-gray-600 mt-2">Research Fields</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;