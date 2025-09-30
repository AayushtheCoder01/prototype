import { Link } from 'react-router-dom'
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />
      <div className="pt-24 flex items-center justify-center">
      <main className="px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Gradient headline */}
          <h1 className="text-3xl mt-20 sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 to-red-500">
              Flex Display Technology
            </span>
            <span className="mt-3 block text-white">
              Turn Any Surface Into a Screen.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-neutral-400">
            A flexible, mount-anywhere display that transforms glass, walls, and objects into
            vivid, touch-ready screens. Designed for your privacy and safety, with low-power
            optics and on-device control so your spaces stay personal.
          </p>

          {/* Call to action */}
          <div className="mt-7 sm:mt-8 flex items-center justify-center">
            <Link
              to="/learn-more"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm sm:text-base font-semibold text-white/90 hover:text-white hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Learn more about Flex Display
            </Link>
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}

export default App
