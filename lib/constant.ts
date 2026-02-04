import { ImageItem } from "@/components/DomeGallery";
import { IMetricData } from "@/components/Metrices";
import { textsItem } from "@/components/RotatingText";
import { Gamepad2, IdCardLanyard, LucideIcon, TrendingUp, Users } from "lucide-react";

// export const navbarList = [
//   { label: 'Home', href: '/' },
//   { label: 'About', href: '/about' },
//   { label: 'Games', href: '/games' },
//   { label: 'Contact', href: '/contact' },
// ]

export const navbarList = [
  { label: 'Home', ariaLabel: "Go to Home Page", link: '/' },
  { label: 'About', ariaLabel: "Learn About Us", link: '/about' },
  { label: 'Games', ariaLabel: "Check Out Games", link: '/games' },
  { label: 'Contact', ariaLabel: "Get In Touch", link: '/contact' },
  // "Home","About","Games","Contact",
]

export const heroHeading = "Every Great Experience Starts with a Game Object." as string


export const DEFAULT_IMAGES: ImageItem[] = [
  { src: '/cover images/animal hop.webp', alt: 'Animal Hop' },
  { src: '/cover images/bunny.webp', alt: 'Bunny' },
  { src: '/cover images/bus 1.webp', alt: 'Bus 1' },
  { src: '/cover images/bus.webp', alt: 'Bus' },
  { src: '/cover images/cheetah.webp', alt: 'Cheetah' },
  { src: '/cover images/cowbow.webp', alt: 'Cowboy' },
  { src: '/cover images/dragon.webp', alt: 'Dragon' },
  { src: '/cover images/fairy.webp', alt: 'Fairy' },
  { src: '/cover images/flying.webp', alt: 'Flying' },
  { src: '/cover images/garage.webp', alt: 'Garage' },
  { src: '/cover images/horse academy.webp', alt: 'Horse Academy' },
  { src: '/cover images/house demolish.webp', alt: 'House Demolish' },
  { src: '/cover images/hunting.webp', alt: 'Hunting' },
  { src: '/cover images/kite.webp', alt: 'Kite' },
  { src: '/cover images/mermaid.webp', alt: 'Mermaid' },
  { src: '/cover images/penguin.webp', alt: 'Penguin' },
  { src: '/cover images/prison escape.webp', alt: 'Prison Escape' },
  { src: '/cover images/puzzle.webp', alt: 'Puzzle' },
  { src: '/cover images/ragdoll.webp', alt: 'Ragdoll' },
  { src: '/cover images/roller coster.webp', alt: 'Roller Coster' },
  { src: '/cover images/rolling ball.webp', alt: 'Rolling Ball' },
  { src: '/cover images/sorting.webp', alt: 'Sorting' },
  { src: '/cover images/unicorn.webp', alt: 'Unicorn' }
] as const;


export const platformList: textsItem[] = [
  { label: "Apple", src: "/apple-logo.png" },
  { label: "Android", src: "/android.png" },
  { label: "Amazon", src: "/icons8-amazon-appstore-96.png" }
] as const;

export const gameGenres = [
  "Action",
  "Adventure",
  "RPG", // Role-Playing Game
  "Strategy",
  "Simulation",
  "Puzzle",
  "Arcade",
  "Racing",
  "Sports",
  "Shooter",
  "Platformer",
  "Casual",
];


export const gameData = [
  {
    id: "1",
    img: "/game images/bus simulation 1.webp",
    url: "https://example.com/bus-simulation-1",
    height: 600,
  },
  {
    id: "2",
    img: "/game images/bus simulation.webp",
    url: "https://example.com/bus-simulation",
    height: 600,
  },
  {
    id: "3",
    img: "/game images/car hypercasual garage.webp",
    url: "https://example.com/car-garage",
    height: 600,
  },
  {
    id: "4",
    img: "/game images/car racing.webp",
    url: "https://example.com/car-racing",
    height: 600,
  },
  {
    id: "5",
    img: "/game images/car simulation.webp",
    url: "https://example.com/car-simulation",
    height: 600,
  },
  {
    id: "6",
    img: "/game images/car stunt racing.webp",
    url: "https://example.com/car-stunt",
    height: 600,
  },
  {
    id: "7",
    img: "/game images/cheetah racing.webp",
    url: "https://example.com/cheetah-racing",
    height: 600,
  },
  {
    id: "8",
    img: "/game images/dragon simulation.webp",
    url: "https://example.com/dragon-simulation",
    height: 600,
  },
  {
    id: "9",
    img: "/game images/elephant simulation.webp",
    url: "https://example.com/elephant-simulation",
    height: 600,
  },
  {
    id: "10",
    img: "/game images/fairy simulation.webp",
    url: "https://example.com/fairy-simulation",
    height: 600,
  },
  {
    id: "11",
    img: "/game images/flying car.webp",
    url: "https://example.com/flying-car",
    height: 600,
  },
  {
    id: "12",
    img: "/game images/horse acedmy.webp",
    url: "https://example.com/horse-academy",
    height: 600,
  },
  {
    id: "13",
    img: "/game images/horse simulation-1.webp",
    url: "https://example.com/horse-simulation-1",
    height: 600,
  },
  {
    id: "14",
    img: "/game images/horse simulation.webp",
    url: "https://example.com/horse-simulation",
    height: 600,
  },
  {
    id: "15",
    img: "/game images/house demolish.webp",
    url: "https://example.com/house-demolish",
    height: 600,
  },
  {
    id: "16",
    img: "/game images/hunter.webp",
    url: "https://example.com/hunter",
    height: 600,
  },
  {
    id: "17",
    img: "/game images/kite.webp",
    url: "https://example.com/kite",
    height: 600,
  },
  {
    id: "18",
    img: "/game images/mermaid simulation.webp",
    url: "https://example.com/mermaid-simulation",
    height: 600,
  },
  {
    id: "19",
    img: "/game images/penguin simulation.webp",
    url: "https://example.com/penguin-simulation",
    height: 600,
  },
  {
    id: "20",
    img: "/game images/police car.webp",
    url: "https://example.com/police-car",
    height: 600,
  },
  {
    id: "21",
    img: "/game images/puzzle game.webp",
    url: "https://example.com/puzzle-game",
    height: 600,
  },
  {
    id: "22",
    img: "/game images/racing game.webp",
    url: "https://example.com/racing-game",
    height: 600,
  },
  {
    id: "23",
    img: "/game images/runner.webp",
    url: "https://example.com/runner",
    height: 600,
  },
  {
    id: "24",
    img: "/game images/sorting.webp",
    url: "https://example.com/sorting",
    height: 600,
  }
];


export const gamesList = [
  {
    "image": "/game images/bus simulation 1.webp",
    "link": "#",
    "title": "Bus Simulation 1",
    "description": "Experience the life of a professional bus driver in this realistic simulation."
  },
  {
    "image": "/game images/bus simulation.webp",
    "link": "#",
    "title": "Bus Simulation",
    "description": "Master the urban routes and manage your city transit empire."
  },
  {
    "image": "/game images/car hypercasual garage.webp",
    "link": "#",
    "title": "Car Garage Tycoon",
    "description": "A fun, fast-paced hypercasual game where you manage your own auto shop."
  },
  {
    "image": "/game images/car racing.webp",
    "link": "#",
    "title": "Car Racing Extreme",
    "description": "High-speed competitive racing on challenging tracks."
  },
  {
    "image": "/game images/car simulation.webp",
    "link": "#",
    "title": "Advanced Car Sim",
    "description": "Realistic driving physics and open-world exploration."
  },
  {
    "image": "/game images/car stunt racing.webp",
    "link": "#",
    "title": "Car Stunt Racing",
    "description": "Perform gravity-defying stunts and massive jumps."
  },
  {
    "image": "/game images/cheetah racing.webp",
    "link": "#",
    "title": "Cheetah Racing",
    "description": "The fastest land animal meets the ultimate racing challenge."
  },
  {
    "image": "/game images/dragon simulation.webp",
    "link": "#",
    "title": "Dragon Simulation",
    "description": "Rule the skies and unleash fire in this mythical adventure."
  },
  {
    "image": "/game images/elephant simulation.webp",
    "link": "#",
    "title": "Elephant Simulation",
    "description": "Explore the wild as the majestic giant of the savannah."
  },
  {
    "image": "/game images/fairy simulation.webp",
    "link": "#",
    "title": "Fairy Simulation",
    "description": "A magical journey through an enchanted forest."
  },
  {
    "image": "/game images/flying car.webp",
    "link": "#",
    "title": "Flying Car Adventure",
    "description": "Why drive when you can fly? The future of transportation is here."
  },
  {
    "image": "/game images/horse acedmy.webp",
    "link": "#",
    "title": "Horse Academy",
    "description": "Train, groom, and race your way to the championship."
  },
  {
    "image": "/game images/horse simulation.webp",
    "link": "#",
    "title": "Wild Horse Sim",
    "description": "Live the life of a wild horse in a beautiful open world."
  },
  {
    "image": "/game images/house demolish.webp",
    "link": "#",
    "title": "House Demolish",
    "description": "Satisfying destruction and physics-based demolition."
  },
  {
    "image": "/game images/hunter.webp",
    "link": "#",
    "title": "The Hunter",
    "description": "Test your skills and stealth in the ultimate hunting game."
  },
  {
    "image": "/game images/kite.webp",
    "link": "#",
    "title": "Kite Flying Festival",
    "description": "Traditional kite flying with a competitive twist."
  },
  {
    "image": "/game images/mermaid simulation.webp",
    "link": "#",
    "title": "Mermaid Simulation",
    "description": "Dive deep into an underwater world of mystery."
  },
  {
    "image": "/game images/penguin simulation.webp",
    "link": "#",
    "title": "Penguin Simulation",
    "description": "Waddle and slide through an icy arctic playground."
  },
  {
    "image": "/game images/police car.webp",
    "link": "#",
    "title": "Police Car Chase",
    "description": "Protect the city and take down criminals in high-speed chases."
  },
  {
    "image": "/game images/puzzle game.webp",
    "link": "#",
    "title": "Logic Puzzle Mastery",
    "description": "Sharpen your mind with challenging levels and unique riddles."
  },
  {
    "image": "/game images/runner.webp",
    "link": "#",
    "title": "Endless Runner",
    "description": "Fast-paced dodging and sprinting action."
  },
  {
    "image": "/game images/sorting.webp",
    "link": "#",
    "title": "Color Sorting",
    "description": "A relaxing and addictive puzzle to organize your day."
  }
]


export const metricData: IMetricData[] = [
  {
    title: "Employee",
    Icon: IdCardLanyard,
    value: 500,
  },
  {
    title: "Advertising Partners",
    Icon: TrendingUp,
    value: 20,
  },
  {
    title: "Games Published",
    Icon: Gamepad2,
    value: 1000,
  },
  {
    title: "DAU",
    Icon: Users,
    value: 20000000,
  },
] as const;


export const demoItems = [
  {
    link: '#',
    text: 'Vehicle Simulation', // From "Bus Simulation 1"
    image: '/game images/bus simulation 1.webp'
  },
  {
    link: '#',
    text: 'Extreme Racing', // From "Car Racing Extreme"
    image: '/game images/car racing.webp'
  },
  {
    link: '#',
    text: 'Hypercasual Tycoon', // From "Car Garage Tycoon"
    image: '/game images/car hypercasual garage.webp'
  },
  {
    link: '#',
    text: 'Animal Simulation', // From "Elephant Simulation"
    image: '/game images/elephant simulation.webp'
  },
  {
    link: '#',
    text: 'Fantasy Adventure', // From "Dragon Simulation"
    image: '/game images/dragon simulation.webp'
  },
  {
    link: '#',
    text: 'Logic Puzzle', // From "Logic Puzzle Mastery"
    image: '/game images/puzzle game.webp'
  },
  {
    link: '#',
    text: 'Action Runner', // From "Endless Runner"
    image: '/game images/runner.webp'
  },
  {
    link: '#',
    text: 'Physics Sandbox', // From "House Demolish"
    image: '/game images/house demolish.webp'
  }
] as const;