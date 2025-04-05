import Image, { ImageProps } from 'next/image'

const shimmer = (w: string | number, h: string | number): string => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="g">
          <stop stop-color="#F5F5F5" offset="20%" />
          <stop stop-color="#F0F0F0" offset="50%" />
          <stop stop-color="#F5F5F5" offset="70%" />
            </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#F5F5F555" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1500ms" repeatCount="indefinite"  />
    </svg>
`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const Shimmer = ({ width, height, quality = 100, ...props }: ImageProps) => {
  const getBlurDataURL = (): string => {
    if (width === undefined || height === undefined) return ''

    return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`
  }
  return (
    <Image
      placeholder="blur"
      blurDataURL={getBlurDataURL()}
      width={width}
      height={height}
      quality={quality}
      {...props}
    />
  )
}

export default Shimmer
