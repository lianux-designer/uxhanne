"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { setupAnimatedBackground } from "@/utils/animated-background"

export default function Prosjekter() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const cleanup = setupAnimatedBackground(canvas)
    return cleanup
  }, [])

  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans">
      <Navigation />
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">prosjekter</h1>

          <div className="mx-auto max-w-xl">
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Her kommer det snart en oversikt over mine prosjekter innen UX-design og ledelse.
            </p>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-8 text-sm text-gray-500"
        >
          © {new Date().getFullYear()} UXhanne.no
        </motion.footer>
      </div>
    </main>
  )
}
