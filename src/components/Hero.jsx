export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="text-center text-white space-y-4 sm:space-y-6 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight">
          Hi, I'm <span className="text-white">Akif</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium drop-shadow-md">
          Frontend Developer • AI Enthusiast • Problem Solver
        </p>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90">
          I build clean, modern and user-friendly interfaces with React, Tailwind and a little AI magic.
        </p>
        <div className="pt-2">
          <a 
            href="#projects"
            className="inline-block mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-white/30 transition-all duration-200 border border-white/30"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}

