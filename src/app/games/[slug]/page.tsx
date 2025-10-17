import { Metadata } from 'next';
import { gamesData } from '@/data/gamesData';
import Game from '@/components/Game';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = gamesData.find(g => g.pageSlug === slug);

  return {
    title: game ? game.pageTitle : 'Game not found',
  };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = gamesData.find(g => g.pageSlug === slug);

  if (!game) {
    return (
        <div className="text-center mt-10 text-xl">
          Game not found 😢
        </div>
    );
  }

  return <Game slug={slug} />;
}
