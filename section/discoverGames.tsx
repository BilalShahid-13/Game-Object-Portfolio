"use server";
import { getGames, TGetGames } from '@/app/actions/getGames';
import ListGamesCard from './listGamesCard';

export default async function DiscoverGames({ id }: { id: string }) {
  const games = await getGames(id);
  return (
    <div className='flex flex-col gap-3'>

      <div className='flex flex-col gap-3'>
        {games.map((value: TGetGames, index: number) => (
          <ListGamesCard
            key={index}
            {...value}
          />
        ))}
      </div>
    </div>
  )
}
