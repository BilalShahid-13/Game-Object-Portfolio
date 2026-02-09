import gplay from "google-play-scraper";

export interface TGetGames {
  title: string;
  studioName: string;
  gameLogo: string;
  link: string;
  description: string;
  screenshots: string[];
  rating: string;
  installs: string;
  reviewCount: number
  genre: string
}

export async function getGames(id: string) {
  const developerId = id || "7050987846191348839";
  let gamesList: TGetGames[] = [];
  try {
    const apps = await gplay.developer({ devId: developerId });

    const fullDetails = await Promise.all(
      apps.map(app => gplay.app({ appId: app.appId }))
    );

    gamesList = fullDetails.map(game => ({
      title: game.title,
      studioName: game.developer,
      gameLogo: game.icon,
      link: game.url,
      description: game.summary,
      video: game.video,
      screenshots: game.screenshots,
      rating: game.scoreText,           // e.g., 4.5823
      installs: game.installs,     // e.g., "10,000,000+"
      reviewCount: game.reviews,
      genre: game.genre
    }));
    return gamesList;
  } catch (error) {
    console.error("Error fetching Play Store data:", error);
    return []
  }
}
