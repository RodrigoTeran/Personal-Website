// Modules
import Image from "next/image";

const shimmer = (w: string | number, h: string | number): string => `
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

type Props = {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  priority: boolean;
  _click?: () => void;
};

const Shimmer = ({ src, alt, width, height, priority, _click }: Props) => (
  <Image
    alt={alt}
    src={src}
    placeholder="blur"
    priority={priority}
    blurDataURL={`data:image/svg+xml;base64,${toBase64(
      shimmer(width, height)
    )}`}
    width={width}
    height={height}
    onClick={_click}
  />
);

export default Shimmer;
