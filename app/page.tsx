import Discover from "@/components/Discover";
import Explore from "@/components/explore";
import Growth from "@/components/Growth";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center
    flex-col gap-5
    justify-center dark:bg-black">
      <Hero />
      <Discover />
      <Growth />
      <Explore />

    </div>
  );
}
