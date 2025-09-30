import { motion, useMotionValue, useTransform, AnimatePresence, useInView } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import video1 from '../assets/Screen Recording 2025-09-30 184404.mp4?url'
import video2 from '../assets/Screen Recording 2025-09-30 185538.mp4?url'
import screenshot from '../assets/Screenshot 2025-09-30 185919.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const constraintsRef = useRef(null)
  const carouselRef = useRef(null)
  const containerRef = useRef(null)
  
  // Media items - Your custom content
  const slides = [
    {
      type: 'video',
      src: video1,
      title: 'Flex Display Demo',
      description: 'Experience the technology in action'
    },
    {
      type: 'image',
      src: screenshot,
      title: 'Interface Preview',
      description: 'Clean and intuitive design'
    },
    {
      type: 'video',
      src: video2,
      title: 'Advanced Features',
      description: 'Discover what makes it special'
    }
  ]
  
  // Track if carousel is in view
  const isInView = useInView(containerRef, { amount: 0.5 })
  
  // Determine if laptop frame should be shown
  const showLaptopFrame = isInView || isHovered
  
  // Auto-play when in view
  useEffect(() => {
    if (isInView && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }, 3000)
      
      return () => clearInterval(interval)
    }
  }, [isInView, isHovered, slides.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleDragEnd = (event, info) => {
    setIsDragging(false)
    const threshold = 50
    if (info.offset.x > threshold) {
      handlePrevious()
    } else if (info.offset.x < -threshold) {
      handleNext()
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto px-4 py-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Laptop Frame Wrapper */}
      <motion.div
        className="relative"
        animate={{
          scale: showLaptopFrame ? 0.95 : 1,
          y: showLaptopFrame ? -10 : 0
        }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* Laptop Frame - Only visible when active */}
        {showLaptopFrame && (
          <motion.div
            className="absolute inset-0 pointer-events-none -z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Laptop Bezel - Behind content */}
            <div className="absolute -left-6 -right-6 -top-6 -bottom-6 sm:-left-8 sm:-right-8 sm:-top-8 sm:-bottom-8 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl">
              {/* Pulsing Glow */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem]"
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(168, 85, 247, 0.3)',
                    '0 0 60px rgba(168, 85, 247, 0.4)',
                    '0 0 40px rgba(168, 85, 247, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Inner Screen Border */}
              <div className="absolute inset-4 sm:inset-5 rounded-[2rem] sm:rounded-[2.5rem] border border-neutral-700/40" />
              
              {/* Reflection */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}

        {/* Carousel Container */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-black"
          ref={constraintsRef}
          animate={{
            scale: showLaptopFrame ? 0.92 : 1
          }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
        <motion.div
          ref={carouselRef}
          className="flex"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="min-w-full relative aspect-video"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{
                opacity: showLaptopFrame ? 1 : 1,
                scale: showLaptopFrame ? 1 : 1,
                y: showLaptopFrame ? 0 : 0
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Media Content */}
              <motion.div
                className="relative w-full h-full overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {slide.type === 'image' ? (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                ) : (
                  <video
                    key={slide.src}
                    className="w-full h-full object-cover"
                    controls
                    loop
                    muted
                    playsInline
                    autoPlay
                  >
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Text Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-b-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm sm:text-base text-white/90"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {slide.description}
                  </motion.p>
                </motion.div>

                {/* Hover Shadow Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  initial={{ boxShadow: '0 0 0 rgba(0, 0, 0, 0)' }}
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </motion.div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={handlePrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </motion.button>

      <motion.button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </motion.button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
