import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Sen } from '@next/font/google'
import Navigation from '@/components/Layout/Navigation'
import React from 'react'

const sen = Sen({
  weight: ['700','400'],
  style: ['normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
    html {
      font-family: ${sen.style.fontFamily};
    }
  `}</style>
  <Navigation>
    <Component {...pageProps} />
  </Navigation>
  </>
  )
}
