'use client'

import Device from "@/components/Device";
import { useIframeReloader } from "@/hooks/useIframeReloader";
import {gamesData} from "@/data/gamesData";

interface Props {
  slug: string;
}

export default function Game({ slug }: Props) {
  const game = gamesData.find(g => g.pageSlug === slug);
  const iframeKey = useIframeReloader(640);

  if (!game) return <h1 className="text-center mt-10 text-xl">Game not found 😢</h1>;

  if (game.desktop) {
    return (
        <iframe
            key={iframeKey}
            src={game.gameUrl}
            className="w-full h-screen border-0"
            allow="fullscreen; autoplay; clipboard-write"
            loading="lazy"
        />
    );
  }

  return <Device iframeLink={game.gameUrl} />;
}
