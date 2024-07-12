import Link from "next/link"
import InstagramIcon from "../../icons/instagramIcon"
import FacebookIcon from "@/icons/facebookIcon"
import LinkedinIcon from "@/icons/linkedinIcon"

export default function Footer() {
  return (
    <footer className="row-span-2 col-span-12 text-white items-end bg-pink-600 flex justify-between text-white-400 py-6 md:py-8 w-full md:px-6 ">
      <div className="container w-full  grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h3 className="font-semibold">About Us</h3>
          <div className="space-y-1 text-sm text-muted-foreground">
            <Link href="#" className="text-white-400 hover:underline" prefetch={false}>
              Username1's GitHub
            </Link>
            <Link href="#" className="text-white-400 hover:underline" prefetch={false}>
              Username2's GitHub
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white-400 flex items-center space-x-2">&copy; 2024 Coding Bootcamp. All rights reserved.</p>
        </div>
        <div className="flex items-center justify-end gap-8">
          <InstagramIcon />
          <FacebookIcon />
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  )
}

