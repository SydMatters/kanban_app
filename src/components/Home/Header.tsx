export default function Header() {
    return (
      <header className="bg-background px-4 py-6 md:px-6 md:py-8 w-full" >
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Kanban</h1>
          <p className="mt-2 text-lg text-muted-foreground">Manage your tasks!</p>
        </div>
      </header>
    )
  }