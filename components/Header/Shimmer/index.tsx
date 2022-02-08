// Modules
import Image from "next/image";

const shimmer = (w: number, h: number): string => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="g">
                <stop stop-color="#333" offset="20%" />
                <stop stop-color="#222" offset="50%" />
                <stop stop-color="#333" offset="70%" />
            </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#333" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1500ms" repeatCount="indefinite"  />
    </svg>
`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Shimmer = () => (
  <Image
    alt="Rodrigo Terán"
    src="/images/me.jpg"
    placeholder="blur"
    priority
    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 250))}`}
    width={250}
    height={250}
  />
);

export default Shimmer;
