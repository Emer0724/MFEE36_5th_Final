import { useRouter } from 'next/router'
import NavBar1 from '../common/navbar/NavBar'
import UnderNavbar from '../common/navbar/Under_navbar'
import Footer from '../common/footer/footer'
import { AuthContextProvider } from '@/context/AuthContext'

export default function DefaultLayout({ children }) {
  const router = useRouter()
  if (router.pathname === '/used-book' || router.pathname === '/') {
    return <>{children}</>
  }
  return (
    <>
      <AuthContextProvider>
        <NavBar1 />
        <main>{children}</main>
        <UnderNavbar />
        <Footer />
      </AuthContextProvider>
    </>
  )
}
