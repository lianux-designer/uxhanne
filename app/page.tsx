"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { setupAnimatedBackground } from "@/utils/animated-background"
import { Instagram } from "lucide-react"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const cleanup = setupAnimatedBackground(canvas)
    return cleanup
  }, [])

  // Animation variants for the floating effect
  const floatingAnimation = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  // Animation variants for the glasses
  const glassesAnimation = {
    animate: {
      opacity: [1, 0.8, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 2,
      },
    },
  }

  // Animation variants for the earrings
  const earringsAnimation = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 1,
      },
    },
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans">
      <Navigation />
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" aria-hidden="true" />

      {/* Hero Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-6rem)] flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-left"
          >
            <div className="flex flex-col md:flex-row md:items-start md:gap-10 mb-8">
              <div className="mb-6 md:mb-0 flex-shrink-0">
                <div className="relative h-40 w-40 md:h-64 md:w-64 overflow-hidden rounded-full border-4 border-white shadow-md bg-white flex items-center justify-center">
                  {/* Animated SVG illustration */}
                  <motion.svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full p-2"
                    aria-label="Illustrasjon av UX designer"
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <circle cx="100" cy="100" r="100" fill="#ffffff" />

                    {/* Hair */}
                    <path
                      d="M65,80 C65,50 135,50 135,80 L135,110 C135,130 115,145 100,145 C85,145 65,130 65,110 Z"
                      fill="#4B5563"
                    />

                    {/* Face */}
                    <circle cx="100" cy="95" r="30" fill="#F9DECA" />

                    {/* Neck */}
                    <path d="M90,125 L90,140 L110,140 L110,125" fill="#F9DECA" />

                    {/* Clothes - Top */}
                    <path d="M70,140 L130,140 L140,180 L60,180 Z" fill="#047857" />

                    {/* Decorative elements on clothes */}
                    <path d="M85,150 L95,160 L105,150 L115,160" stroke="#ffffff" strokeWidth="2" fill="none" />

                    {/* Eyes - Blinking effect */}
                    <motion.g
                      animate={{
                        scaleY: [1, 0.1, 1],
                      }}
                      transition={{
                        duration: 0.3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 5,
                        ease: "easeInOut",
                      }}
                    >
                      <ellipse cx="90" cy="90" rx="3" ry="4" fill="#333333" />
                      <ellipse cx="110" cy="90" rx="3" ry="4" fill="#333333" />
                    </motion.g>

                    {/* Eyebrows */}
                    <path d="M85,82 L95,80" stroke="#333333" strokeWidth="1.5" fill="none" />
                    <path d="M105,80 L115,82" stroke="#333333" strokeWidth="1.5" fill="none" />

                    {/* Glasses with subtle shine effect */}
                    <motion.g variants={glassesAnimation} animate="animate">
                      <rect
                        x="82"
                        y="85"
                        width="16"
                        height="10"
                        rx="5"
                        stroke="#333333"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <rect
                        x="102"
                        y="85"
                        width="16"
                        height="10"
                        rx="5"
                        stroke="#333333"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path d="M98,90 L102,90" stroke="#333333" strokeWidth="1.5" fill="none" />
                    </motion.g>

                    {/* Smile */}
                    <path d="M90,105 C95,110 105,110 110,105" stroke="#333333" strokeWidth="1.5" fill="none" />

                    {/* Earrings with subtle pulse effect */}
                    <motion.g variants={earringsAnimation} animate="animate">
                      <circle cx="75" cy="95" r="3" fill="#047857" />
                      <circle cx="125" cy="95" r="3" fill="#047857" />
                    </motion.g>
                  </motion.svg>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                  Hva er UX i dag?
                </h1>

                <div className="mt-6 mb-10">
                  <p className="mb-3 text-base text-gray-800 sm:text-lg">
                    Dette er uxhanne.no. Ikke en portefølje. Ikke en blogg. Mer som en lekeplass.
                    Her tester jeg hva jeg kan få til som UX-designer når jeg bruker AI som verktøykasse,
                    samarbeidspartner og noen ganger motstander.
                    Noen ganger blir det smart. Noen ganger bare… rart
                    Men alt her er laget for å utforske – ikke imponere.
                    
                    For øyeblikket er alt innholdet her bare AI-generert for test.

                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 bg-white/80 py-6 text-center text-sm text-gray-500 backdrop-blur-sm"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-2">
            <a
              href="https://www.instagram.com/uxhanne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-800 hover:text-emerald-900 transition-colors"
              aria-label="Følg oss på Instagram"
            >
              <Instagram className="h-4 w-4 mr-1" />
              <span>@uxhanne</span>
            </a>
          </div>
          <div>© {new Date().getFullYear()} uxhanne.no</div>
        </div>
      </motion.footer>
    </main>
  )
}
