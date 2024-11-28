import type { AppProps } from 'next/app'
import '../styles/global.scss'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import CommonLayout from '@layouts/Common/Common'
import Nav from '@layouts/Nav/Nav'
import { logoMetaTag } from '@image-links'
import { ownProdUrl } from '@routes'

export default function PortfolioApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')

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
      <Nav />
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </>
  )
}
