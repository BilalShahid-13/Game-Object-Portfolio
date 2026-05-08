import ExpandedLandingPage from "@/components/LandingPage2";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center
    flex-col gap-5
    justify-center dark:bg-black">
      {/* <LandingPage /> */}
      <ExpandedLandingPage />
      {/* <Hero />
      <Discover />
      <Growth />
      <Explore /> */}

    </div>
  );
}
