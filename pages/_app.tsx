import type { AppProps } from 'next/app'
import '../styles/global.scss'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import CommonLayout from '@layouts/Common/Common'
import Nav from '@layouts/Nav/Nav'
import { initialRefs, refsReducer } from '@store/refs/refs'
import { IMapRef, REF_REDUCER_ACTION } from '@store/refs/refs.types'
import { logoMetaTag } from '@image-links'
import { ownProdUrl } from '@routes'
import Animations from '@layouts/Animations/Animations'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from 'react'

export const AppContext = createContext<IAppContext>({} as IAppContext)

interface IAppContext {
  refsState: IMapRef
  isLayoutAnimationOpen: boolean

  refsDispatch: Dispatch<REF_REDUCER_ACTION>
  setIsLayoutAnimationOpen: Dispatch<SetStateAction<boolean>>
}

export default function PortfolioApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')

  const [refsState, refsDispatch] = useReducer(refsReducer, initialRefs)
  const [isLayoutAnimationOpen, setIsLayoutAnimationOpen] =
    useState<boolean>(true)

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('title')} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta
          name="keywords"
          content={`Rodrigo Terán, Programación, Programming, Coding, Web Developer, Desarrollador Web`}
        />
        <meta property="og:image:secure_url" content={logoMetaTag} />
        <meta property="og:url" content={ownProdUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t('title')} />
        <meta name="twitter:image" content={logoMetaTag} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:alt" content="Rodrigo Terán" />
        <meta property="og:title" content={t('title')} />
        <meta property="og:description" content={t('title')} />
        <meta name="twitter:title" content={t('title')} />
        <meta name="twitter:description" content={t('title')} />
      </Head>
      <AppContext.Provider
        value={{
          refsState,
          isLayoutAnimationOpen,

          refsDispatch,
          setIsLayoutAnimationOpen,
        }}
      >
        <Animations>
          <Nav />
          <CommonLayout>
            <Component {...pageProps} />
          </CommonLayout>
        </Animations>
      </AppContext.Provider>
    </>
  )
}
