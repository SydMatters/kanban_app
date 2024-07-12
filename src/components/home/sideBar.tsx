"use client"
import Link from "next/link"
import KanbanIcon from "../../icons/kanbanIcon"
import UserIcon from "../../icons/userIcon"
import LogoutIcon from "../../icons/logoutIcon"
import Profile from "@/components/Profile/Profile";

export default function SideBar() {
  return (
    <div className="flex h-full w-60 ">
      <aside className="flex h-full  w-60 flex-col items-start justify-between border-r bg-background p-4 shadow-md">
        <nav className="flex flex-col items-start gap-2 w-full">
          <Link
            href="#"
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-pink-600 hover:text-white-700 hover:text-white "
            prefetch={false}
          >
            <KanbanIcon />
            <span>Kanban</span>
          </Link>
          <Link
            href="#"
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-pink-600 hover:text-white"
            prefetch={false}
          >
            <UserIcon />
            <Profile />
          </Link>
          <Link
            href="#"
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-pink-600 hover:text-white"
            prefetch={false}
          > 
            <LogoutIcon />
            <span>Logout</span>
          </Link>
          
        </nav>
      </aside>
      
    </div>
  )
}