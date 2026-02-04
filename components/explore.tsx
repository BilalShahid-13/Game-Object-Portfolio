"use client";

import { gamesList } from "@/lib/constant";
import InfiniteMenu from "./InfiniteMenu";

export default function Explore() {
  return (
    <>
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={gamesList}
          scale={.8}
        />
      </div>
    </>
  )
}
