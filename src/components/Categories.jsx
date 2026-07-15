function Categories() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center ">
          Research Categories
        </h2>


        <div className="grid grid-cols-3 gap-8 mt-12">

          <div className="bg-green-50 rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            
            <h3 className="text-xl font-semibold mt-4" align="center">🌾 Crop Science</h3>
          </div>

          <div className="bg-green-50  rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
         
            <h3 className="text-xl font-semibold mt-4" align="center">🌿 Plant Biology</h3>
          </div>

          <div className="bg-green-50 rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            
            <h3 className="text-xl font-semibold mt-4" align="center">🚜 Smart Farming</h3>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            
            <h3 className="text-xl font-semibold mt-4" align="center">💧 Irrigation & Water Management</h3>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            
            <h3 className="text-xl font-semibold mt-4" align="center">🧬 Biotechnology </h3>
          </div>
          <div className="bg-green-50 rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold mt-4" align="center"> 🌍 Climate Studies</h3>
          </div>

        </div>
      

      </div>

    </section>
  );
}

export default Categories;