import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogg | UXhanne.no",
  description: "Tanker og refleksjoner om UX-design, designledelse og kreative prosesser.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
