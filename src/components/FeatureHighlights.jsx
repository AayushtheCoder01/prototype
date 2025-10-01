import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const FeatureHighlights = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  // Advanced scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Transform scroll progress into various animation values
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2])
  
  // Individual card animations based on scroll
  const card1Y = useTransform(scrollYProgress, [0.1, 0.6], [100, -20])
  const card2Y = useTransform(scrollYProgress, [0.15, 0.65], [120, -10])
  const card3Y = useTransform(scrollYProgress, [0.2, 0.7], [140, 0])
  const card4Y = useTransform(scrollYProgress, [0.25, 0.75], [160, 10])

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Power Efficiency",
      description: "Ultra-low power consumption with advanced energy management for all-day operation.",
      color: "from-blue-500 to-cyan-400",
      shadowColor: "shadow-blue-500/25"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Ultra-Thin Design",
      description: "Remarkably thin profile that seamlessly integrates with any surface or environment.",
      color: "from-emerald-500 to-teal-400",
      shadowColor: "shadow-emerald-500/25"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Seamless Mounting",
      description: "Effortless installation with magnetic mounting system that works on any surface.",
      color: "from-pink-500 to-rose-400",
      shadowColor: "shadow-pink-500/25"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Brilliant Visuals",
      description: "Crystal-clear 4K resolution with vibrant colors and exceptional brightness control.",
      color: "from-purple-500 to-indigo-400",
      shadowColor: "shadow-purple-500/25"
    }
  ]

  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-40 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden"
      style={{ opacity, scale }}
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        style={{ y, rotate }}
      >
        {/* Headline */}
        <motion.div
          className="text-center mb-20 sm:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            style={{
              scale: useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]),
              rotateX: useTransform(scrollYProgress, [0, 0.5], [15, 0])
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-emerald-500 to-pink-600">
              What Makes Flex Display
            </span>
            <br />
            <span className="text-gray-900">Different?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{
              opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
            }}
          >
            Engineered with precision and designed for perfection
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            // Individual card scroll animations
            const cardY = [card1Y, card2Y, card3Y, card4Y][index]
            const cardRotate = useTransform(scrollYProgress, [0.2 + index * 0.1, 0.8], [5, -2])
            const cardScale = useTransform(scrollYProgress, [0.3 + index * 0.05, 0.6], [0.9, 1])
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{ 
                  y: cardY,
                  rotate: cardRotate,
                  scale: cardScale
                }}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group"
              >
              <div className="relative h-full p-8 sm:p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center">
                {/* Icon Container */}
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} mb-8 text-white shadow-lg group-hover:${feature.shadowColor} transition-all duration-500`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    boxShadow: [
                      '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      '0 20px 40px -5px rgba(0, 0, 0, 0.15)',
                      '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle Glow Effect on Hover */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r ${feature.color}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.2,
                    ease: "easeOut"
                  }}
                />
              </div>
            </motion.div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1])
          }}
        >
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every detail crafted to deliver an exceptional experience that redefines what's possible.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default FeatureHighlights
