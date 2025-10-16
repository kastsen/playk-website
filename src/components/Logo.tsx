import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo = (
    {
     className,
     width = 52,
     height = 52,
   }: LogoProps) => {
  return (
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Playk</span>
        <Image
            src="/images/playk-logo.svg"
            alt="Playk Logo"
            width={width}
            height={height}
            className={className}
            priority
        />
      </Link>
  );
};
