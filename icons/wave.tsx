import { SVGProps } from 'react'

export function Wave({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1280 453"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M268.165 253.052C206.866 226.677 144.706 209.679 81.3159 194.957C54.3353 188.691 27.1927 184.591 0 182.586V453H1280V0C1224.3 0 1185.76 0.0858337 1131.07 16.1564C1084.9 29.7215 1041.23 55.363 1000.14 86.3342C957.151 118.745 917.259 158.273 875.061 192.516C842.019 219.329 810.664 250.316 774.428 269.284C734.612 290.127 689.995 295.949 647.885 303.092C606.511 310.11 565.663 312.536 523.988 312.368C436.66 312.014 351.137 288.752 268.165 253.052Z"
        fill="white"
      />
    </svg>
  )
}
