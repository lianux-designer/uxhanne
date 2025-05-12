import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prosjekt UXhanne | UXhanne.no",
  description: "Tanker og refleksjoner om utviklingen av UXhanne.no som et eksperiment i design og AI.",
}

export default function ProsjektUXhanneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
