import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const UsageSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Transform scroll progress into various animation values
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  const usages = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Retail & Advertising",
      description: "Dynamic shop window displays that bend around corners with curved digital signage for immersive promotions.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "Events & Entertainment",
      description: "Stage backdrops and concert visuals with curved LED displays for interactive exhibitions and immersive environments.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Consumer Electronics",
      description: "Foldable TVs with bendable screens.",
      color: "from-emerald-500 to-teal-400"
    },
  ]

  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-40 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden"
      style={{ opacity, scale }}
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        style={{ y }}
      >
        {/* Headline */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            style={{
              scale: useTransform(scrollYProgress, [0.2, 0.4], [0.9, 1])
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-emerald-500 to-pink-600">
              Top Use Cases for
            </span>
            <br />
            <span className="text-gray-900">Flexible Displays</span>
          </motion.h2>
        </motion.div>

        {/* Usage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {usages.map((usage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <div className="relative h-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Icon Container */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${usage.color} mb-6 text-white shadow-md`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {usage.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {usage.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {usage.description}
                </p>

                {/* Hover Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r ${usage.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Subtext */}
        <motion.p
          className="text-center mt-16 text-lg text-gray-500 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          The possibilities are endless. Flex Display adapts to your vision.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

export default UsageSection
