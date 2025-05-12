"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { setupAnimatedBackground } from "@/utils/animated-background"
import { Instagram } from "lucide-react"

export default function AboutMe() {
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

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-left"
        >
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">om meg</h1>

          <div className="mb-12 flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-auto md:pb-[125%] flex items-center justify-center">
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
                    <rect x="82" y="85" width="16" height="10" rx="5" stroke="#333333" strokeWidth="1.5" fill="none" />
                    <rect x="102" y="85" width="16" height="10" rx="5" stroke="#333333" strokeWidth="1.5" fill="none" />
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

            <div className="md:w-2/3">
              <p className="mb-4 text-base text-gray-700 sm:text-lg">
                Hei! Jeg er en UX-designer med bakgrunn fra både design og teknologi. Jeg har jobbet med digitale
                produkter i over 8 år, med fokus på å skape brukeropplevelser som kombinerer funksjonalitet med
                estetikk.
              </p>
              <p className="mb-4 text-base text-gray-700 sm:text-lg">
                Min tilnærming til UX er basert på empati, nysgjerrighet og en kontinuerlig læringsprosess. Jeg tror på
                å utfordre etablerte sannheter og utforske nye muligheter – noe som har ledet meg til å eksperimentere
                med AI som et verktøy i designprosessen.
              </p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">Min bakgrunn</h2>
            <p className="mb-4 text-base text-gray-700 sm:text-lg">
              Jeg har en mastergrad i interaksjonsdesign og har jobbet i både startups, designbyråer og større
              teknologiselskaper. Gjennom årene har jeg utviklet en tverrfaglig tilnærming som kombinerer brukerinnsikt,
              strategisk tenkning og praktisk implementering.
            </p>
            <p className="mb-4 text-base text-gray-700 sm:text-lg">
              Min erfaring spenner fra komplekse enterprise-løsninger til forbrukerrettede apper, med spesiell interesse
              for helseteknologi, fintech og utdanningsteknologi. Jeg har ledet designteam og fungert som bindeledd
              mellom design, utvikling og forretning.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">UX og AI</h2>
            <p className="mb-4 text-base text-gray-700 sm:text-lg">
              Jeg er fascinert av skjæringspunktet mellom UX-design og kunstig intelligens. Ikke bare hvordan vi
              designer <em>for</em> AI, men også hvordan vi kan designe
              <em>med</em> AI som samarbeidspartner. Dette nettstedet er mitt laboratorium for å utforske dette
              samspillet.
            </p>
            <p className="mb-4 text-base text-gray-700 sm:text-lg">
              Jeg tror AI kan transformere designprosessen på fundamentale måter – fra hvordan vi genererer ideer og
              prototyper til hvordan vi tester og itererer. Samtidig er jeg opptatt av de etiske implikasjonene og
              hvordan vi sikrer at mennesket forblir i sentrum.
            </p>
            <div className="mt-6 rounded-lg bg-emerald-50 p-5">
              <h3 className="mb-2 text-base font-semibold text-gray-900 sm:text-lg">Min tilnærming til AI i design:</h3>
              <ul className="ml-5 list-disc space-y-2 text-base text-gray-700 sm:text-lg">
                <li>AI som samarbeidspartner, ikke erstatning</li>
                <li>Eksperimentering og utforskning fremfor perfeksjon</li>
                <li>Kritisk refleksjon over resultater og prosesser</li>
                <li>Åpenhet om hva som er AI-generert vs. menneskeskapt</li>
                <li>Fokus på hvordan AI kan forsterke, ikke erstatte, menneskelig kreativitet</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">Utenom jobb</h2>
            <p className="mb-4 text-base text-gray-700 sm:text-lg">
              Når jeg ikke designer digitale opplevelser, er jeg ofte ute i naturen, leser science fiction eller
              eksperimenterer med nye matoppskrifter. Jeg er også engasjert i designfellesskap og deler gjerne kunnskap
              gjennom workshops og foredrag.
            </p>
            <p className="text-base text-gray-700 sm:text-lg">
              Jeg tror på livslang læring og er alltid på utkikk etter nye perspektiver og ideer. Føl deg fri til å ta
              kontakt hvis du vil diskutere UX, AI eller bare utveksle tanker om fremtiden for design!
            </p>
          </section>

          <div className="mt-10 flex items-center space-x-4">
            <a
              href="https://www.instagram.com/uxhanne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-200"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Følg meg på Instagram
            </a>
          </div>
        </motion.div>
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
          <div>© {new Date().getFullYear()} UXhanne.no</div>
        </div>
      </motion.footer>
    </main>
  )
}
