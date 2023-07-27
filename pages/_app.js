import { useEffect } from 'react'
import '@/styles/globals.scss'
import '@/styles/globals.css'
import '@/styles/used.css'
// import LeoContextProvider from '@/context/LeoContext'

import DefaultLayout from '@/components/layout/default-layout'
import { AuthContextProvider } from '@/context/AuthContext'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用預設排版檔案
  // 對應`components/layout/default-layout/index.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return getLayout(
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
