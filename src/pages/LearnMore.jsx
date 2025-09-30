import Header from '../components/Header.jsx'

export default function LearnMore() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />
      <div className="pt-24 flex items-center justify-center px-5 sm:px-8">
      <section className="max-w-3xl text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 to-red-500">
            Learn More
          </span>
          <span className="mt-2 block text-white">About Flex Display</span>
        </h1>
        <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-neutral-400">
          Flex Display brings immersive visuals to everyday surfaces without heavy hardware. It
          mounts securely, uses low‑power optics, and keeps data on‑device for privacy. Explore
          setup tips, compatible surfaces, and safety guidelines to get the best experience.
        </p>
      </section>
      </div>
    </div>
  )
}

