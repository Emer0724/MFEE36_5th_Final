import Footer from '../common/footer/footer'
import { useRouter } from 'next/router'
import NavBar1 from '../common/navbar/NavBar'
import UnderNavbar from '../common/navbar/Under_navbar'

export default function DefaultLayout({ children }) {
  const router = useRouter()
  if (router.pathname === '/used-book' || router.pathname === '/') {
    return <>{children}</>
  }
  return (
    <>
      <NavBar1 />
      <main>{children}</main>
      <UnderNavbar />
      <Footer />
    </>
  )
}
