function Categories() {
  return (
    <section className="py-10 md:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Research Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">

          <div className="bg-green-50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 md:p-8 min-h-[180px] hover:shadow-lg transition">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="text-lg md:text-2xl font-bold text-center">
              Crop Science
            </h3>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 md:p-8 min-h-[180px] hover:shadow-lg transition">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-lg md:text-2xl font-bold text-center">
              Plant Biology
            </h3>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 md:p-8 min-h-[180px] hover:shadow-lg transition">
            <div className="text-5xl mb-4">🚜</div>
            <h3 className="text-lg md:text-2xl font-bold text-center">
              Smart Farming
            </h3>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 md:p-8 min-h-[180px] hover:shadow-lg transition">
            <div className="text-5xl mb-4">💧</div>
            <h3 className="text-lg md:text-2xl font-bold text-center">
              Irrigation & Water Management
            </h3>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 md:p-8 min-h-[180px] hover:shadow-lg transition">
            <div className="text-5xl mb-4">🧬</div>
            <h3 className="text-lg md:text-2xl font-bold text-center">
              Biotechnology
            </h3>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 md:p-8 min-h-[180px] hover:shadow-lg transition">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-lg md:text-2xl font-bold text-center">
              Climate Studies
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Categories;