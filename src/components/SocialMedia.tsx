import Image from 'next/image';
import styles from './socialMedia.module.css';

const socialMediaLinks = [
  { src: '/images/social-icons/telegram.svg', alt: 'telegram', href: 'https://t.me/yury_kstn' },
  { src: '/images/social-icons/linkedin.svg', alt: 'linkedin', href: 'https://www.linkedin.com/in/kastsen/' },
  { src: '/images/social-icons/mail.svg', alt: 'github', href: 'mailto:yurykastsen@gmail.com' },
];

export default function SocialMedia() {
  return (
      <div className={`flex justify-center ${styles.raw}`}>
        {socialMediaLinks.map(({ src, alt, href }, index) => (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer">
              <Image src={src} alt={alt} width={40} height={40} className={styles.icon} />
            </a>
        ))}
      </div>
  )
}
