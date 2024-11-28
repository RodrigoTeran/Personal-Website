import { CSSProperties } from 'react'
import { metaCar, metaExperience } from '@image-links'

export interface IParagraph {
  text: string
  styles: CSSProperties
}

export interface IExperience {
  title: {
    text: string
    styles: CSSProperties
  }
  display: {
    text: string
    src: string
    styles: CSSProperties
  }
  car: {
    src: string
    styles: CSSProperties
  }
  paragraphs: IParagraph[]
}

export const experienceStyles: IExperience[] = [
  {
    title: {
      text: 'Meta',
      styles: {
        width: '75px',
      },
    },
    display: {
      text: 'Internship en Meta verano 2022',
      src: metaExperience,
      styles: {},
    },
    car: {
      src: metaCar,
      styles: {},
    },
    paragraphs: [
      {
        text: 'meta-p-1',
        styles: {},
      },
      {
        text: 'meta-p-2',
        styles: {},
      },
    ],
  },
]
