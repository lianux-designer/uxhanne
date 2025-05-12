"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { setupAnimatedBackground } from "@/utils/animated-background"
import { Calendar, Clock, Instagram } from "lucide-react"
import Image from "next/image"

export default function ProsjektUXhanne() {
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

      <article className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-8 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
              Eksperiment
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
              UX Design
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
              AI
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            UXhanne.no: Et eksperiment i design og AI
          </h1>

          <div className="mb-8 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{new Date().toLocaleDateString("no-NO", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>8 min lesetid</span>
            </div>
          </div>

          <div className="relative mb-10 h-80 w-full overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064&auto=format&fit=crop"
              alt="Person som arbeider med design på en datamaskin"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-emerald max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:text-base sm:prose-p:text-lg">
            <h2>Bakgrunnen for prosjektet</h2>
            <p>
              UXhanne.no startet som et eksperiment – en lekeplass for å utforske skjæringspunktet mellom UX-design og
              kunstig intelligens. I en tid hvor AI-verktøy blir stadig mer avanserte og tilgjengelige, ønsket jeg å
              undersøke hvordan disse verktøyene kan påvirke designprosessen, og hvordan de kan brukes som kreative
              samarbeidspartnere snarere enn bare automatiseringsverktøy.
            </p>

            <p>
              Dette nettstedet er ikke en tradisjonell portefølje eller blogg, men et levende laboratorium hvor jeg
              tester grensene for hva som er mulig når menneske og maskin samarbeider om design. Hver side, hvert
              element og hver interaksjon er et resultat av denne utforskningsprosessen.
            </p>

            <h2>Designfilosofi og tilnærming</h2>
            <p>
              Min tilnærming til dette prosjektet har vært preget av nysgjerrighet og eksperimentering. Jeg har bevisst
              valgt å ikke strebe etter perfeksjon, men heller omfavne det uventede og til tider merkelige som kan
              oppstå i samspillet mellom menneskelig kreativitet og maskinlæring.
            </p>

            <p>Noen sentrale prinsipper har likevel guidet arbeidet:</p>

            <ul>
              <li>
                <strong>Transparens:</strong> Være åpen om hva som er AI-generert og hva som er menneskeskapt
              </li>
              <li>
                <strong>Balanse:</strong> Finne en meningsfull balanse mellom automatisering og menneskelig inngripen
              </li>
              <li>
                <strong>Læring:</strong> Fokusere på prosessen og innsiktene snarere enn sluttproduktet
              </li>
              <li>
                <strong>Iterasjon:</strong> Kontinuerlig forbedre og eksperimentere basert på nye innsikter
              </li>
            </ul>

            <h2>Prosessen: Menneske og maskin i samspill</h2>
            <p>
              Arbeidsprosessen har vært iterativ og utforskende. Jeg startet med en grunnleggende idé om hva nettstedet
              skulle være, men lot detaljene utvikle seg gjennom dialog med AI-verktøy. Dette har resultert i en
              interessant dynamikk hvor jeg som designer setter rammene og definerer målene, mens AI bidrar med forslag,
              variasjon og noen ganger uventede perspektiver.
            </p>

            <p>En typisk arbeidsflyt har sett slik ut:</p>

            <ol>
              <li>Definere et designproblem eller en funksjon som skal implementeres</li>
              <li>Diskutere mulige tilnærminger med AI, ofte gjennom flere iterasjoner</li>
              <li>Vurdere forslagene kritisk og velge retning</li>
              <li>Implementere løsningen, ofte med teknisk assistanse fra AI</li>
              <li>Evaluere resultatet og identifisere forbedringspunkter</li>
              <li>Gjenta prosessen med nye innsikter</li>
            </ol>

            <h2>Utfordringer og lærdommer</h2>
            <p>
              Denne eksperimentelle tilnærmingen har ikke vært uten utfordringer. AI-verktøy er fortsatt begrenset i sin
              forståelse av design som helhet – de kan generere kode og visuelle elementer, men mangler ofte den dypere
              forståelsen av kontekst, brukeropplevelse og emosjonell resonans som er sentral i god design.
            </p>

            <p>Noen sentrale lærdommer så langt:</p>

            <ul>
              <li>
                <strong>Presisjon i kommunikasjon er avgjørende:</strong> Jo tydeligere jeg kan artikulere mine
                intensjoner og behov, desto bedre blir resultatene
              </li>
              <li>
                <strong>AI er best som samarbeidspartner, ikke erstatning:</strong> De mest vellykkede elementene
                oppstår når AI og menneske bidrar med sine respektive styrker
              </li>
              <li>
                <strong>Iterasjon er nøkkelen:</strong> Første forsøk er sjelden optimalt, men gjennom dialog og
                iterasjon kan kvaliteten forbedres betydelig
              </li>
              <li>
                <strong>Kritisk vurdering forblir en menneskelig styrke:</strong> Evnen til å evaluere og velge mellom
                alternativer basert på subtile faktorer er fortsatt en viktig menneskelig komponent
              </li>
            </ul>

            <h2>Fremtidige eksperimenter</h2>
            <p>
              Dette prosjektet er langt fra ferdig. Jeg ser på UXhanne.no som en kontinuerlig utviklende plattform for
              eksperimentering med nye ideer og teknologier. Noen områder jeg ønsker å utforske videre:
            </p>

            <ul>
              <li>Mer avanserte interaksjoner og animasjoner skapt i samarbeid med AI</li>
              <li>Eksperimenter med personalisering og adaptivt design</li>
              <li>Utforskning av hvordan AI kan bidra til mer inkluderende og tilgjengelig design</li>
              <li>Dypere integrasjon av AI i selve brukeropplevelsen, ikke bare i designprosessen</li>
              <li>Dokumentasjon og analyse av designprosessen for å identifisere mønstre og innsikter</li>
            </ul>

            <h2>Refleksjoner om fremtiden for UX og AI</h2>
            <p>
              Gjennom dette prosjektet har jeg fått et innblikk i hvordan forholdet mellom designere og AI-verktøy kan
              utvikle seg i årene som kommer. Jeg tror vi beveger oss mot en fremtid hvor AI blir en integrert del av
              designerens verktøykasse – ikke som en erstatning, men som en forsterker av menneskelig kreativitet og
              problemløsningsevne.
            </p>

            <p>
              Dette vil kreve nye ferdigheter fra designere: evnen til å kommunisere effektivt med AI-systemer, kritisk
              vurdering av maskin-genererte forslag, og en dypere forståelse av hvordan teknologi og design samspiller.
              Men det åpner også for spennende muligheter – raskere prototyping, utforskning av flere
              designalternativer, og potensielt mer innovative løsninger.
            </p>

            <p>
              UXhanne.no er mitt beskjedne bidrag til denne utforskningen – et eksperiment i å forstå og forme
              fremtidens designpraksis i en verden hvor grensen mellom menneskelig og maskinell kreativitet blir stadig
              mer flytende.
            </p>

            <h2>Invitasjon til dialog</h2>
            <p>
              Jeg deler dette prosjektet åpent fordi jeg tror på verdien av kollektiv utforskning og læring. Har du
              tanker, spørsmål eller ideer om skjæringspunktet mellom UX-design og AI? Eller kanskje forslag til
              fremtidige eksperimenter? Jeg vil gjerne høre fra deg! Dette er ikke bare mitt prosjekt, men et bidrag til
              en bredere samtale om fremtiden for design i en AI-drevet verden.
            </p>
          </div>
        </motion.div>
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
