import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prosjekter | UXhanne.no",
  description: "Utvalgte UX-design og AI-eksperimenteringsprosjekter.",
}

export default function ProsjekterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
