"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { setupAnimatedBackground } from "@/utils/animated-background"
import { ArrowUpRight } from "lucide-react"

// Placeholder prosjektdata
const prosjekter = [
  {
    id: 1,
    tittel: "Lorem ipsum dolor sit amet",
    beskrivelse: "En komplett redesign av en nettbankløsning med fokus på brukervennlighet og tilgjengelighet.",
    bilde: "/placeholder.svg?height=400&width=600",
    kategorier: ["UX Design", "UI Design", "Brukerundersøkelse"],
    år: "2023",
  },
  {
    id: 2,
    tittel: "Consectetur adipiscing elit",
    beskrivelse: "Design av en mobilapplikasjon for pasienter og helsepersonell med fokus på enkel kommunikasjon.",
    bilde: "/placeholder.svg?height=400&width=600",
    kategorier: ["App Design", "Helsesektor", "UX Research"],
    år: "2022",
  },
  {
    id: 3,
    tittel: "Sed do eiusmod tempor",
    beskrivelse: "Utvikling av brukergrensesnitt og brukeropplevelse for en moderne e-handelsplattform.",
    bilde: "/placeholder.svg?height=400&width=600",
    kategorier: ["E-handel", "UI Design", "Konverteringsoptimalisering"],
    år: "2022",
  },
  {
    id: 4,
    tittel: "Incididunt ut labore et dolore",
    beskrivelse: "Utvikling av et omfattende designsystem for digitale tjenester i offentlig sektor.",
    bilde: "/placeholder.svg?height=400&width=600",
    kategorier: ["Designsystem", "Offentlig sektor", "Tilgjengelighet"],
    år: "2021",
  },
  {
    id: 5,
    tittel: "Magna aliqua ut enim",
    beskrivelse: "Design av en intuitiv reiseplanlegger med fokus på personalisering og inspirasjon.",
    bilde: "/placeholder.svg?height=400&width=600",
    kategorier: ["UX Design", "Reise", "Personalisering"],
    år: "2021",
  },
  {
    id: 6,
    tittel: "Quis nostrud exercitation",
    beskrivelse: "Utvikling av strategi og prosesser for å lede et tverrfaglig designteam.",
    bilde: "/placeholder.svg?height=400&width=600",
    kategorier: ["Designledelse", "Teamutvikling", "Prosessforbedring"],
    år: "2020",
  },
]

// Prosjektkort-komponent
function ProsjektKort({ prosjekt }: { prosjekt: (typeof prosjekter)[0] }) {
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
          <h3 className="text-lg font-medium text-gray-900">{prosjekt.tittel}</h3>
          <span className="text-sm text-gray-500">{prosjekt.år}</span>
        </div>

        <p className="mb-4 flex-1 text-sm text-gray-600">{prosjekt.beskrivelse}</p>

        <div className="mb-3 flex flex-wrap gap-2">
          {prosjekt.kategorier.map((kategori, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700"
            >
              {kategori}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <button className="inline-flex items-center text-sm font-medium text-green-600 transition-colors hover:text-green-700">
            Se prosjekt <ArrowUpRight className="ml-1 h-3 w-3" />
          </button>
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
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">prosjekter</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            En samling av mine utvalgte prosjekter innen UX-design og ledelse. Hvert prosjekt representerer en unik
            utfordring og tilnærming.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prosjekter.map((prosjekt) => (
            <ProsjektKort key={prosjekt.id} prosjekt={prosjekt} />
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center text-sm text-gray-500"
        >
          © {new Date().getFullYear()} UXhanne.no
        </motion.footer>
      </div>
    </main>
  )
}
