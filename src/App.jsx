import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Header from './components/Header.jsx'
import TypewriterText from './components/TypewriterText.jsx'
import FeatureHighlights from './components/FeatureHighlights.jsx'
import UsageSection from './components/UsageSection.jsx'
import Carousel from './components/Carousel.jsx'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />
      <div className="pt-24 flex items-center justify-center">
      <main className="px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Gradient headline */}
          <motion.h1 
            className="text-3xl mt-20 sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <TypewriterText 
                text="Flex" 
                delay={0.6} 
                speed={0.15}
                showBar={true}
                className="inline-block"
              />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 to-red-500">
                {" Display Technology"}
              </span>
            </motion.span>
            <motion.span 
              className="mt-3 block text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Turn Any Surface Into a Screen.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-neutral-400"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            A flexible, mount-anywhere display that transforms glass, walls, and objects into
            vivid, touch-ready screens. Designed for your privacy and safety, with low-power
            optics and on-device control so your spaces stay personal.
          </motion.p>

          {/* Call to action */}
          <motion.div 
            className="mt-7 sm:mt-8 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            <Link
              to="/learn-more"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm sm:text-base font-semibold text-white/90 hover:text-white hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Learn more about Flex Display
            </Link>
          </motion.div>
        </div>
      </main>
      </div>


      {/* Feature Highlights Section */}
      <FeatureHighlights />

      {/* Usage Section */}
      <UsageSection />

      {/* Carousel Section */}
      <div className="px-5 sm:px-8">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Carousel />
        </motion.section>
      </div>
    </div>
  )
}
export default App
