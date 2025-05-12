"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "hjem", hidden: false },
    { href: "/innholdslekeplass", label: "innholdslekeplass", hidden: false },
    { href: "/om-meg", label: "om meg", hidden: false },
    { href: "/prosjekter", label: "prosjekter", hidden: false },
    { href: "/prosjekt-uxhanne", label: "prosjekt uxhanne", hidden: false },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-medium text-gray-900">
          uxhanne.no
        </Link>
        <ul className="flex space-x-8">
          {links
            .filter((link) => !link.hidden)
            .map((link) => {
              const isActive = pathname === link.href

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive ? "text-emerald-800" : "text-gray-600 hover:text-emerald-700"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-emerald-600"
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
