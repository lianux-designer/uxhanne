"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import { setupAnimatedBackground } from "@/utils/animated-background"
import { projects } from "@/data/projects"
import { ArrowLeft, Calendar, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const slug = params?.slug as string

  const project = projects.find((project) => project.slug === slug)

  useEffect(() => {
    if (!project) {
      router.push("/prosjekter")
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const cleanup = setupAnimatedBackground(canvas)
    return cleanup
  }, [project, router, slug])

  if (!project) return null

  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans">
      <Navigation />
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" aria-hidden="true" />

      <article className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/prosjekter"
            className="inline-flex items-center text-sm font-medium text-emerald-800 transition-colors hover:text-emerald-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Tilbake til prosjekter
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.kategorier.map((kategori, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800"
            >
              {kategori}
            </span>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.tittel}</h1>

          <div className="mb-8 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{project.år}</span>
            </div>
          </div>

          <div className="relative mb-10 h-80 w-full overflow-hidden rounded-lg">
            <Image
              src={project.bilde || "/placeholder.svg"}
              alt={project.tittel}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-emerald max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:text-base sm:prose-p:text-lg">
            <div className="whitespace-pre-line">{project.fullBeskrivelse}</div>

            <h2 className="mt-8 mb-4">Utfordringer</h2>
            <ul>
              {project.utfordringer.map((utfordring, index) => (
                <li key={index} className="mb-2">
                  {utfordring}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 mb-4">Løsninger</h2>
            <ul>
              {project.løsninger.map((løsning, index) => (
                <li key={index} className="mb-2">
                  {løsning}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 mb-4">Resultater</h2>
            <ul>
              {project.resultater.map((resultat, index) => (
                <li key={index} className="mb-2">
                  {resultat}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Andre prosjekter</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 2)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/prosjekter/${relatedProject.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={relatedProject.bilde || "/placeholder.svg"}
                      alt={relatedProject.tittel}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-2 text-base font-semibold text-gray-900 group-hover:text-emerald-800 sm:text-lg">
                      {relatedProject.tittel}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-2">{relatedProject.beskrivelse}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>

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
          <div>© {new Date().getFullYear()} UXhanne.no</div>
        </div>
      </motion.footer>
    </main>
  )
}
