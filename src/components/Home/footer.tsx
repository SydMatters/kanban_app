
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex justify-betweenbg-muted py-6 md:py-8 w-full md:px-6 ">
      <div className="container w-full  grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h3 className="font-semibold">About Us</h3>
          <div className="space-y-1 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline" prefetch={false}>
              Username1's GitHub
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Username2's GitHub
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="flex items-center space-x-2 text-sm text-muted-foreground">&copy; 2024 Coding Bootcamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

