export function GamesLoadingSkeleton() {
  return (
    <div className="w-full max-w-5xl p-8 flex flex-col gap-4 animate-pulse">
      <div className="h-12 w-48 bg-neutral-200 rounded-md" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 bg-zinc-200 rounded-xl" />
        <div className="h-64 bg-zinc-200 rounded-xl" />
      </div>
    </div>
  )
}