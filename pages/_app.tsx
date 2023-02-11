import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Sen } from '@next/font/google'
import Navigation from '@/components/Layout/Navigation'
import React from 'react'
import { NextPage } from "next"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const sen = Sen({
  weight: ['700','400'],
  style: ['normal'],
  subsets: ['latin']
})

const Finsweet = ({Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);
  return (
    <>
    <style jsx global>{`
    html {
      font-family: ${sen.style.fontFamily};
    }
  `}</style>
  <SessionProvider session={pageProps.session}>
  {Component.getLayout ? (
    getLayout(<Component {...pageProps} />)
    ) 
    :
    (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
    )
  }
  </SessionProvider>
  </>
  )
}

export default Finsweet
