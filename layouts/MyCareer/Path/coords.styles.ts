import { CSSProperties } from 'react'
import {
  metaCar,
  metaExperience,
  msft1Car,
  googleCar,
  msft2Car,
} from '@image-links'

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
      text: 'meta-title',
      styles: {
        width: '75px',
        right: '395px',
      },
    },
    display: {
      text: 'meta-display',
      src: metaExperience,
      styles: {
        right: '50px',
      },
    },
    car: {
      src: metaCar,
      styles: {
        right: '455px',
        top: '90px',
      },
    },
    paragraphs: [
      {
        text: 'meta-p-1',
        styles: {
          right: '555px',
          top: '55px',
          width: '256px',
          textAlign: 'right',
        },
      },
      {
        text: 'meta-p-2',
        styles: {
          right: '750px',
          top: '115px',
          width: '270px',
          textAlign: 'right',
        },
      },
    ],
  },
  //   {
  //     title: {
  //       text: 'msft-1-title',
  //       styles: {
  //         width: '120px',
  //       },
  //     },
  //     display: {
  //       text: 'msft-1-display',
  //       src: metaExperience,
  //       styles: {},
  //     },
  //     car: {
  //       src: msft1Car,
  //       styles: {},
  //     },
  //     paragraphs: [
  //       {
  //         text: 'msft-1-p-1',
  //         styles: {},
  //       },
  //       {
  //         text: 'msft-1-p-2',
  //         styles: {},
  //       },
  //     ],
  //   },
  //   {
  //     title: {
  //       text: 'google-title',
  //       styles: {
  //         width: '95px',
  //       },
  //     },
  //     display: {
  //       text: 'google-display',
  //       src: metaExperience,
  //       styles: {},
  //     },
  //     car: {
  //       src: googleCar,
  //       styles: {},
  //     },
  //     paragraphs: [
  //       {
  //         text: 'google-p-1',
  //         styles: {},
  //       },
  //       {
  //         text: 'google-p-2',
  //         styles: {},
  //       },
  //     ],
  //   },
  //   {
  //     title: {
  //       text: 'msft-2-title',
  //       styles: {
  //         width: '120px',
  //       },
  //     },
  //     display: {
  //       text: 'msft-2-display',
  //       src: metaExperience,
  //       styles: {},
  //     },
  //     car: {
  //       src: msft2Car,
  //       styles: {},
  //     },
  //     paragraphs: [
  //       {
  //         text: 'msft-2-p-1',
  //         styles: {},
  //       },
  //       {
  //         text: 'msft-2-p-2',
  //         styles: {},
  //       },
  //     ],
  //   },
]
