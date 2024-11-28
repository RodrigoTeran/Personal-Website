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
        right: '20px',
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
  {
    title: {
      text: 'msft-1-title',
      styles: {
        width: '120px',
        top: '250px',
        left: '400px',
        transform: 'scale(1.3)',
      },
    },
    display: {
      text: 'msft-1-display',
      src: metaExperience,
      styles: {
        left: '50px',
        top: '260px',
      },
    },
    car: {
      src: msft1Car,
      styles: {
        left: '550px',
        top: '320px',
        transform: 'scale(1.3)',
      },
    },
    paragraphs: [
      {
        text: 'msft-1-p-1',
        styles: {
          top: '320px',
          left: '750px',
          width: '246px',
        },
      },
      {
        text: 'msft-1-p-2',
        styles: {
          top: '400px',
          left: '860px',
          width: '207px',
        },
      },
    ],
  },
  {
    title: {
      text: 'google-title',
      styles: {
        width: '95px',
        top: '530px',
        transform: 'scale(1.8)',
        right: '250px',
      },
    },
    display: {
      text: 'google-display',
      src: metaExperience,
      styles: {
        top: '650px',
        right: '0px',
      },
    },
    car: {
      src: googleCar,
      styles: {
        top: '700px',
        transform: 'scale(2)',
        right: '500px',
      },
    },
    paragraphs: [
      {
        text: 'google-p-1',
        styles: {
          top: '530px',
          width: '288px',
          textAlign: 'right',
          left: '200px',
        },
      },
      {
        text: 'google-p-2',
        styles: {
          top: '610px',
          width: '330px',
          textAlign: 'right',
          left: '100px',
        },
      },
    ],
  },
  {
    title: {
      text: 'msft-2-title',
      styles: {
        width: '120px',
        transform: 'scale(2)',
        top: '750px',
        left: '220px',
      },
    },
    display: {
      text: 'msft-2-display',
      src: metaExperience,
      styles: {
        top: '1000px',
        left: '350px',
      },
    },
    car: {
      src: msft2Car,
      styles: {
        top: '900px',
        left: '0',
        transform: 'scale(3.5)',
      },
    },
    paragraphs: [
      {
        text: 'msft-2-p-1',
        styles: {
          top: '1050px',
          left: '700px',
          width: '305px',
        },
      },
      {
        text: 'msft-2-p-2',
        styles: {
          top: '1150px',
          left: '700px',
          width: '337px',
        },
      },
    ],
  },
]
