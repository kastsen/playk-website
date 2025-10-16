import Link from 'next/link';
import styles from './footer.module.css';
import {Logo} from "@/components/Logo";

const Footer = () => (
    <footer className={`flex flex-col text-center ${styles.footer}`}>
      <Logo className={styles.logo}/>
      <div className={styles.copyright}>
        <p className={styles.companyName}>© 2025 Playk</p>
        <p>
          <Link href="/terms">
            Terms of Service
          </Link>{" "} | {" "}
          <Link href="/privacy">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
);

export default Footer;
