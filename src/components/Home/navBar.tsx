"use client"
import Link from "next/link"
import MoonIcon from "../../icons/moonIcon"

export default function NavBar() {
  return (
    <header className="bg-pink-600 flex h-16 w-full items-center justify-between px-4 md:px-8 text-white">
      <Link href="#" className="flex items-center space-x-2 w-full justify-between"> 
        <span className="text-lg font-medium">Kanban app</span>
        <div className="flex justify-between" /> 
        <MoonIcon />
      </Link>
    </header>
  );
}