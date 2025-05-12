import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Innholdslekeplass | UXhanne.no",
  description: "En samling av artikler og tanker om UX-design, designledelse og kreative prosesser.",
}

export default function InnholdslekeplassLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
