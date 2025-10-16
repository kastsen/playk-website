import styles from './button.module.css';
import { useRouter } from 'next/navigation';

interface ButtonProps {
    text: string;
    url: string;
    className?: string;
}

export default function Button({ text, url, className }: ButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (url.startsWith('http')) {
            window.open(url, '_blank');
        } else {
            router.push(url);
        }
    };

    return (
        <button className={`${styles.button} ${className ?? ''}`} onClick={handleClick}>
            <div><span>{text}</span></div>
        </button>
    );
}
