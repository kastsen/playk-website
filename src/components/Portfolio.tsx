'use client'

import styles from './portfolio.module.css'
import Image from "next/image"
import { useRouter } from 'next/navigation'

interface Tag {
  name: string
  bgColor: string
  textColor: string
}

interface ColumnItem {
  title: string
  text: string
  image: string
  url: string
  tags: Tag[]
}

const items: ColumnItem[] = [
  {
    title: "Bounce Ball",
    text: "A calming experience where the goal is to keep the ball in the air.",
    image: "/images/bal-game.webp",
    url: '/games/bounce-ball/',
    tags: [
      { name: "Game", bgColor: "#e0f0ff", textColor: "#0070f3" },
      { name: "Demo", bgColor: "#e6ffe6", textColor: "#008000" },
      { name: "Physics-based", bgColor: "#e6ffe6", textColor: "#008000" },
    ],
  },
  {
    title: "Wordcraft",
    text: "Form words from random letters, sharpen your focus, and race against the clock.",
    image: "/images/wordcraft.webp",
    url: '/games/wordcraft/',
    tags: [
      { name: "Game", bgColor: "#e0f0ff", textColor: "#0070f3" },
      { name: "Demo", bgColor: "#e6ffe6", textColor: "#008000" },
    ],
  },
  {
    title: "Reach the Other Side",
    text: "Cross the unknown, a playable with art and concept by Vizor Games.",
    image: "/images/cactus-playable-vizor.webp",
    url: '/games/unknown-playable',
    tags: [
      { name: "Playable Ad", bgColor: "#f3e6ff", textColor: "#8000ff" },
      { name: "Creative", bgColor: "#f0f0f0", textColor: "#333333" },
    ],
  },
  {
    title: "The Sheep are Lost",
    text: "Help the sheep survive the journey and find their way home",
    image: "/images/sheeps-playable.webp",
    url: '/games/sheep-playable',
    tags: [
      { name: "Playable Ad", bgColor: "#f3e6ff", textColor: "#8000ff" },
      { name: "Adventure", bgColor: "#ffe6f0", textColor: "#cc0066" },
    ],
  },
  {
    title: "Angry Animals",
    text: "Physics-based creative where furious animals demolish enemy defenses",
    image: "/images/angry-playable-ad.webp",
    url: '/games/angry-animals',
    tags: [
      { name: "Playable Ad", bgColor: "#e6f7ff", textColor: "#005580" },
      { name: "Cartoon-style", bgColor: "#e6fff9", textColor: "#008080" },
    ],
  },
]

export default function Portfolio() {
  const router = useRouter()

  const handleClick = (url: string) => {
    if (url === '#') return
    router.push(url)
  }

  return (
      <section className={`py-20 ${styles.section}`} id="portfolio">
        <div className="mx-auto">
          <h2 className={`${styles.title} text-center`}>
            Recent works
          </h2>
          <p className={`text-center ${styles.sectionDescription}`}>
            A curated selection of playable demos, <br />
            creative experiments, and game concepts
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${styles.col}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(item.url)}
                    className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col ${styles.card}`}
                >
                  <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full object-cover"
                      width={1024}
                      height={1204}
                      loading="lazy"
                  />

                  <div className={styles.cardDetails}>
                    <div className={styles.tags}>
                      {item.tags.map((tag, i) => (
                          <span
                              key={i}
                              className={styles.tagName}
                              style={{
                                backgroundColor: tag.bgColor,
                                color: tag.textColor,
                                borderRadius: '999px',
                                display: 'inline-block',
                              }}
                          >
                      {tag.name}
                    </span>
                      ))}
                    </div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDescription}>{item.text}</p>
                  </div>
                </div>
            ))}

            <div className={`rounded-2xl shadow-lg bg-gray-100 flex items-center justify-center ${styles.more}`}></div>
          </div>
        </div>
      </section>
  )
}
