"use client"
import Link from "next/link"

export default function NavBar() {
  return (
    <header
      className="flex h-16 w-full items-center justify-between px-4 md:px-8">
      <Link href="#" className="flex items-center" prefetch={false}>
        <span className="ml-2 text-lg font-medium">Kanban app</span>
      </Link>
    </header>
  )
}
