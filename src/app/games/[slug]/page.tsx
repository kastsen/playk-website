'use client'

import Device from "@/components/Device";
import {useIframeReloader} from "@/hooks/useIframeReloader";

const games = [
  {
    slug: "bounce-ball",
    url: "https://playablemajor.netlify.app/bounce-ball.html",
    desktop: false,
  },
  {
    slug: "wordcraft",
    url: "https://playablemajor.netlify.app/wordcraft-demo.html",
    desktop: false,
  },
  {
    slug: "unknown-playable",
    url: "https://playablemajor.netlify.app/p1825.html",
    desktop: true,
  },
  {
    slug: "sheep-playable",
    url: "https://playablemajor.netlify.app/p1664.html",
    desktop: false,
  },
  {
    slug: "angry-animals",
    url: "https://playablemajor.netlify.app/p979.html",
    desktop: true,
  },
] as const;

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);
  const iframeKey = useIframeReloader(640);

  if (!game) {
    return <h1 className="text-center mt-10 text-xl">Game not found 😢</h1>;
  }

  if (game.desktop) {
    return (
        <iframe
            key={iframeKey}
            src={game.url}
            className="w-full h-screen border-0"
            allow="fullscreen; autoplay; clipboard-write"
            loading="lazy"
        />
    );
  }

  return <Device iframeLink={game.url} />;
}
