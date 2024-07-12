"use client"
import Link from "next/link"
import Profile from "../Profile/Profile";
import KanbanIcon from "@/icons/kanbanIcon";
import LogOutIcon from "@/icons/logoutIcon";
import UserIcon from "@/icons/userIcon";

export default function SideBar() {
  return (
    <div className="flex h-full w-60 ">
      <aside className="flex w-full p-4 border-r shadow-md grow ">
        <nav className="flex flex-col items-start w-full gap-2">
          <Link
            href="#"
            className="flex items-center w-full gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-pink-600 hover:text-white-700 hover:text-white "
            prefetch={false}
          >
            <KanbanIcon/>
            <span>Kanban</span>
          </Link>
          <Link
            href="#"
            className="flex items-center w-full gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-pink-600 hover:text-white"
            prefetch={false}
          >
            <UserIcon />
            <Profile />
          </Link>
          <Link
            href="#"
            className="flex items-center w-full gap-2 px-3 py-2 mb-0 text-sm font-medium transition-colors rounded-md hover:bg-pink-600 hover:text-white"
            prefetch={false}
          > 
            <LogOutIcon />
            <span>Logout</span>
          </Link>
          
        </nav>
      </aside>
      
    </div>
  )
}