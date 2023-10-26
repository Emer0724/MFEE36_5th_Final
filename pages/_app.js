import { useEffect } from 'react'
import '@/styles/globals.scss'
import '@/styles/globals.css'
import '@/styles/used.css'
import Head from 'next/head'
import DefaultLayout from '@/components/layout/default-layout'
import { AuthContextProvider } from '@/context/AuthContext'
import { CountContextProvider } from '@/context/countContext'
import Aside from '@/components/Leo/market_aside_button'
import Aside_mini from '@/components/Leo/market_aside_button_mini'
import { LeoContextProvider } from '@/context/LeoContext'
import Bcs from '@/components/Leo/market_breadcrumbs_new'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用預設排版檔案
  // 對應`components/layout/default-layout/index.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <>
      <LeoContextProvider>
        <AuthContextProvider>
          <CountContextProvider>
            <Head>
              <title>Book書易</title>
            </Head>
            {getLayout(<Component {...pageProps} />)}
          </CountContextProvider>
        </AuthContextProvider>
      </LeoContextProvider>
    </>
  )
}
