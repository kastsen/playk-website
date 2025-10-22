import styles from './portfolio.module.css'
import Image from "next/image"
import { gamesData } from '@/data/gamesData'

export default function Portfolio() {

  return (
      <section className={`py-20 ${styles.section}`} id="portfolio">
        <div className="mx-auto">
          <h2 className={`${styles.title} text-center`}>Recent works</h2>
          <p className={`text-center ${styles.sectionDescription}`}>
            A curated selection of playable demos, <br /> creative experiments, and game concepts
          </p>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${styles.col}`}>
            {gamesData.map((item, index) => (
                <a
                    key={index}
                    href={item.pageUrl ?? '#'}
                    className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col ${styles.card}`}
                >
                  <Image
                      src={item.portfolioCardImage}
                      alt={item.portfolioCardTitle}
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
                    <h3 className={styles.cardTitle}>{item.portfolioCardTitle}</h3>
                    <p className={styles.cardDescription}>{item.portfolioCardText}</p>
                  </div>
                </a>
            ))}
            <div className={`rounded-2xl shadow-lg bg-gray-100 flex items-center justify-center ${styles.more}`}></div>
          </div>
        </div>
      </section>
  )
}
