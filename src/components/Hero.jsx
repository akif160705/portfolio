export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-5 flex items-center justify-center min-h-screen">
      <div className="text-center text-white space-y-6 max-w-4xl">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Hi, I'm <span className="bg-white text-purple-700 px-3 py-1 rounded-lg">Akif</span>
        </h1>
        <p className="text-xl font-medium drop-shadow-md">
          Frontend Developer • AI Enthusiast • Problem Solver
        </p>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          I build clean, modern and user-friendly interfaces with React, Tailwind and a little AI magic.
        </p>
        <button className="mt-4 px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
          View My Work
        </button>
      </div>
    </section>
  )
}

