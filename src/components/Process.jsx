function Process() {
  return (
    <section className="py-10 md:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Publication Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-10 md:mt-12">

          <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
            <div className="text-4xl md:text-5xl">📄</div>
            <p className="mt-3 text-sm md:text-base">Submit</p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
            <div className="text-4xl md:text-5xl">🔍</div>
            <p className="mt-3 text-sm md:text-base">Review</p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
            <div className="text-4xl md:text-5xl">✍</div>
            <p className="mt-3 text-sm md:text-base">Revision</p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
            <div className="text-4xl md:text-5xl">✅</div>
            <p className="mt-3 text-sm md:text-base">Publish</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Process;