"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import { setupAnimatedBackground } from "@/utils/animated-background"
import { blogPosts } from "@/data/blog-posts"
import { ArrowUpRight, Clock, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Innholdslekeplass() {
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
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">innholdslekeplass</h1>
          <p className="max-w-2xl text-base text-gray-600 sm:text-lg italic">
            for øyeblikket er alle artiklene her ai-generert innhold
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-lg bg-white shadow-sm transition-all hover:shadow-md overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-col p-5">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.categories.slice(0, 1).map((category, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>

                <h3 className="mb-2 text-base font-semibold text-gray-900 sm:text-lg">
                  <Link href={`/blogg/${post.slug}`} className="hover:text-emerald-800">
                    {post.title}
                  </Link>
                </h3>

                <p className="mb-3 flex-1 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blogg/${post.slug}`}
                    className="inline-flex items-center text-xs font-medium text-emerald-800 transition-colors hover:text-emerald-900"
                  >
                    Les mer <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
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
          <div>© {new Date().getFullYear()} UXhanne.no</div>
        </div>
      </motion.footer>
    </main>
  )
}
