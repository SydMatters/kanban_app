import Link from "next/link"

export default function SideBar() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="flex flex-col items-start justify-between border-r bg-background p-4 shadow-md">
        <nav className="flex flex-col items-start gap-2">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <span>Kanban</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <span>Profile</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <span>Logout</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-muted/10" />
    </div>
  )
}