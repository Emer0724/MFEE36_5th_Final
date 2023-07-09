import Navbar from './navbar'
import Footer from './footer'
import {useRouter} from 'next/router';


export default function DefaultLayout({ children }) {
  const router = useRouter();
  if (router.pathname==='/used-book' ||  router.pathname==='/' ) {
    return <>{children}</>;
  }
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
