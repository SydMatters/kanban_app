export default function Header() {
    return (
      <header className="bg-background px-4 py-6 md:px-6 md:py-8 w-full" >
        <div className="max-w-6xl">
          <h1 className="text-xs font-bold tracking-tight sm:text-xl md:text-2xl">Kanban</h1>
          <p className="mt-2 text-xs text-muted-foreground">Manage your tasks!</p>
        </div>
      </header>
    )
  }