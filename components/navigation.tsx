"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "hjem" },
    { href: "/om-meg", label: "om meg" },
    { href: "/prosjekter", label: "prosjekter" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-medium text-gray-900">
          uxhanne.no
        </Link>
        <ul className="flex space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive ? "text-green-600" : "text-gray-600 hover:text-green-500"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-green-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
