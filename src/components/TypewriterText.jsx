import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const TypewriterText = ({ text, delay = 0, speed = 0.05, className = "", showBar = false }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true)
    }, delay * 1000)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (isStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed * 1000)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, isStarted])

  if (showBar) {
    return (
      <motion.span
        className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500/20 via-fuchsia-500/20 to-red-500/20 border border-pink-500/30 backdrop-blur-sm ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        <span className="font-mono">
          {displayedText}
          {currentIndex < text.length && (
            <motion.span
              className="inline-block w-0.5 h-[1em] bg-pink-400 ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </span>
      </motion.span>
    )
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-0.5 h-[0.9em] bg-current ml-1 align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </motion.span>
  )
}

export default TypewriterText
