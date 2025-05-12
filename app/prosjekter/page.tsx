"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { setupAnimatedBackground } from "@/utils/animated-background"
import { ArrowUpRight, Instagram } from "lucide-react"
import Link from "next/link"
import { projects } from "@/data/projects"

// Prosjektkort-komponent
function ProsjektKort({ prosjekt }: { prosjekt: (typeof projects)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={prosjekt.bilde || "/placeholder.svg"}
          alt={prosjekt.tittel}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-base font-medium text-gray-900 sm:text-lg">{prosjekt.tittel}</h3>
          <span className="text-sm text-gray-500">{prosjekt.år}</span>
        </div>

        <p className="mb-4 flex-1 text-sm text-gray-600">{prosjekt.beskrivelse}</p>

        <div className="mb-3 flex flex-wrap gap-2">
          {prosjekt.kategorier.map((kategori, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-800"
            >
              {kategori}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Link
            href={`/prosjekter/${prosjekt.slug}`}
            className="inline-flex items-center text-sm font-medium text-emerald-800 transition-colors hover:text-emerald-900"
          >
            Se prosjekt <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-left"
        >
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">prosjekter</h1>
          <p className="max-w-2xl text-base text-gray-600 sm:text-lg">
            En samling av mine utvalgte prosjekter innen UX-design og AI-eksperimentering. Hvert prosjekt representerer
            en utforskning av hvordan design og teknologi kan løse komplekse problemer og skape meningsfulle
            opplevelser.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-gray-500 italic">
            Merk: Disse prosjektene er alle AI-genererte eksemplere og placeholderre, dette er ikke ekte!
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((prosjekt) => (
            <ProsjektKort key={prosjekt.id} prosjekt={prosjekt} />
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center text-sm text-gray-500"
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
            <div>© {new Date().getFullYear()} UXhanne.no</div>
          </div>
        </motion.footer>
      </div>
    </main>
  )
}
