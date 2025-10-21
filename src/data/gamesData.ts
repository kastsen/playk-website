export interface Tag {
  name: string
  bgColor: string
  textColor: string
}

export interface GameItem {
  pageSlug: string
  pageTitle: string
  portfolioCardTitle: string
  portfolioCardText: string
  portfolioCardImage: string
  pageUrl: string
  gameUrl: string
  tags: Tag[]
  desktop: boolean
}

export const gamesData: GameItem[] = [
  {
    pageSlug: "trivia",
    pageTitle: "Trivia Game Demo",
    portfolioCardTitle: "Trivia Game",
    portfolioCardText: "A neon game with simple mechanics and maximum excitement",
    portfolioCardImage: "/images/trivia-game.webp",
    pageUrl: "/games/trivia",
    gameUrl: "https://playablemajor.netlify.app/trivia-demo.html",
    desktop: true,
    tags: [
      { name: "Game", bgColor: "#1a1a40", textColor: "#00ffff" },
      { name: "Demo", bgColor: "#240046", textColor: "#ff5af1" },
      { name: "Quiz", bgColor: "#002b36", textColor: "#00ff99" },
    ],
  },
  {
    pageSlug: "bounce-ball",
    pageTitle: "Bounce Ball Demo",
    portfolioCardTitle: "Bounce Ball",
    portfolioCardText: "A calming experience where the goal is to keep the ball in the air",
    portfolioCardImage: "/images/bal-game.webp",
    pageUrl: "/games/bounce-ball",
    gameUrl: "https://playablemajor.netlify.app/bounce-ball.html",
    desktop: false,
    tags: [
      { name: "Game", bgColor: "#e0f0ff", textColor: "#0070f3" },
      { name: "Demo", bgColor: "#e6ffe6", textColor: "#008000" },
      { name: "Physics-based", bgColor: "#e6ffe6", textColor: "#008000" },
    ],
  },
  {
    pageSlug: "wordcraft",
    portfolioCardTitle: "Wordcraft",
    pageTitle: "WordCraft Demo",
    portfolioCardText: "Form words from random letters, sharpen your focus, and race against the clock",
    portfolioCardImage: "/images/wordcraft.webp",
    pageUrl: "/games/wordcraft",
    gameUrl: "https://playablemajor.netlify.app/wordcraft-demo.html",
    desktop: false,
    tags: [
      { name: "Game", bgColor: "#e0f0ff", textColor: "#0070f3" },
      { name: "Demo", bgColor: "#e6ffe6", textColor: "#008000" },
    ],
  },
  {
    pageSlug: "threshold-playable",
    portfolioCardTitle: "Reach the Other Side",
    pageTitle: "Threshold Playable. Art and concept by Vizor Games",
    portfolioCardText: "Cross the unknown, a playable with art and concept by Vizor Games",
    portfolioCardImage: "/images/cactus-playable-vizor.webp",
    pageUrl: "/games/threshold-playable",
    gameUrl: "https://playablemajor.netlify.app/p1825.html",
    desktop: true,
    tags: [
      { name: "Playable Ad", bgColor: "#f3e6ff", textColor: "#8000ff" },
      { name: "Creative", bgColor: "#f0f0f0", textColor: "#333333" },
    ],
  },
  {
    pageSlug: "sheep-playable",
    portfolioCardTitle: "The Sheep are Lost",
    pageTitle: "Sheep Playable. Art and concept by Vizor Games",
    portfolioCardText: "Help the sheep survive the journey and find their way home",
    portfolioCardImage: "/images/sheeps-playable.webp",
    pageUrl: "/games/sheep-playable",
    gameUrl: "https://playablemajor.netlify.app/p1664.html",
    desktop: false,
    tags: [
      { name: "Playable Ad", bgColor: "#f3e6ff", textColor: "#8000ff" },
      { name: "Adventure", bgColor: "#ffe6f0", textColor: "#cc0066" },
    ],
  },
  {
    pageSlug: "angry-animals",
    portfolioCardTitle: "Angry Animals",
    pageTitle: "Angry Animals Playable. Art and concept by Vizor Games",
    portfolioCardText: "Physics-based creative where furious animals demolish enemy defenses",
    portfolioCardImage: "/images/angry-playable-ad.webp",
    pageUrl: "/games/angry-animals",
    gameUrl: "https://playablemajor.netlify.app/p979.html",
    desktop: true,
    tags: [
      { name: "Playable Ad", bgColor: "#e6f7ff", textColor: "#005580" },
      { name: "Cartoon-style", bgColor: "#e6fff9", textColor: "#008080" },
    ],
  },
];
