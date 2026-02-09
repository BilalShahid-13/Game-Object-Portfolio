import { GamesLoadingSkeleton } from "@/components/GamesLoadingSkeleton";
import DiscoverGames from "@/section/discoverGames";
import { Suspense } from "react";

type tParams = Promise<{ id: string }>;

export default async function Page(props: { params: tParams }) {
  const { id } = await props.params;

  return (
    <main className="mt-32 p-8 flex flex-col items-center gap-10">
      <Suspense fallback={<GamesLoadingSkeleton />}>
        <DiscoverGames id={id} />
      </Suspense>
    </main>
  );
}