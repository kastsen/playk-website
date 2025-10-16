import { Metadata } from 'next';
import GameClient from './GameClient';
import { gamesData } from '../gamesData';

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
  const game = gamesData.find((g) => g.slug === params.slug);
  return { title: game ? `Play ${params.slug}` : 'Game not found' };
}

export default function GamePage(
    { params }: { params: { slug: string } }
) {
  return <GameClient slug={params.slug} />;
}
