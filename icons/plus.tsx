import { SVGProps } from 'react'

export function Plus({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 63 63" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M31.25 0V62.5" stroke="black" strokeWidth="2" />
      <path d="M0 31.25L62.5 31.25" stroke="black" strokeWidth="2" />
    </svg>
  )
}
