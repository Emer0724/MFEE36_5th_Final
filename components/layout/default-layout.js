
import Footer from './footer'
import NavBar1 from '../common/navbar/NavBar'
import UnderNavbar from '../common/navbar/Under_navbar'

export default function DefaultLayout({ children }) {
  return (
    <>
      <NavBar1/>
      <main>{children}</main>
      <UnderNavbar/>
      <Footer />
    </>
  )
}
