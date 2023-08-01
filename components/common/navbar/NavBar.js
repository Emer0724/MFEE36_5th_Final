import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/Nav_Image/logo.svg'
import Searchicon from '@/assets/Nav_Image/search.svg'
import Carticon from '@/assets/Nav_Image/Vector.svg'
import Membericon from '@/assets/Nav_Image/Subtract.svg'
import Searchbar from './searchbar'
import DropdownMenu from './dropdown-menu'
import { set } from 'lodash'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

export default function NavBar1() {
  const { auth, logout } = useContext(AuthContext)
  const NavctName = ['商城', '二手書', '部落格', '關於我們']
  const NavEnName = ['STORE', 'USEDSTORE', 'BLOG', 'ABOUTUS']
  const navrouter = [
    '/product/',
    '/used-book/',
    '/blog/blog-home-page',
    '/#aboutUs',
  ]
  // console.log(auth.notify)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setnickname(JSON.parse(localStorage.getItem('auth')).nickname)
      // console.log(JSON.parse(localStorage.getItem('auth')).nickname)
      setIsLoggedIn(true)
    }
  }, [])
  const [nickname, setnickname] = useState('')
  const [searchbaropen, setSearchbaropen] = useState(false)
  const toggleSearch = () => {
    setSearchbaropen(!searchbaropen)
  }

  // Correctly set initial isLoggedIn state to false
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const gologout = () => {
    // Logout logic here
    if (logout) {
      logout()
      setIsLoggedIn(false) // Set isLoggedIn to false on logout
    }
  }
  const [Dropdown, setDropdown] = useState(false)
  const isDropdown = (Dropdown) => {
    setDropdown(!Dropdown)
  }

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderNavbar}>
        <Link href="/" className={styles.logolink}>
          <Image
            src={logo}
            width={150}
            height={100}
            className={styles.logoimg}
            alt="icon"
          />
        </Link>
        <div className={styles.logoname}>
          <h3>BOOK書易</h3>
        </div>
        <div className={styles.NavbarRoute}>
          {NavctName.map((v, i) => {
            const v2 = NavEnName[i]
            const v3 = navrouter[i]
            return (
              <div className={styles.navlinkdiv} key={i}>
                <Link href={v3} className={styles.navlink1}>
                  {v}
                </Link>
                <p className={styles.linktext}>{v2}</p>
              </div>
            )
          })}
        </div>
        <div className={styles.Icongroup}>
          <div
            role="presentation"
            onClick={toggleSearch}
            className={styles.naviconbtn}
          >
            <Image
              src={Searchicon}
              width={60}
              height={30}
              className={styles.Licon}
              alt="icon"
            />
          </div>
          <Link href="/product/cart" className={styles.navlink2}>
            <Image
              src={Carticon}
              width={60}
              height={30}
              className={styles.Licon}
              alt="icon"
            />
          </Link>
          {/* Add a class to separate login button from other icons */}
          <div className={styles.loginWrapper}>
            {isLoggedIn ? (
              <>
                <Image
                  src={Membericon}
                  width={60}
                  height={30}
                  className={styles.Licon}
                  alt="icon"
                  onClick={() => isDropdown(Dropdown)}
                  role="presentation"
                />
                {auth?.notify !== 0 ? (
                  <div className={styles.notify}></div>
                ) : (
                  ''
                )}

                {Dropdown && (
                  <DropdownMenu
                    isLoggedIn={isLoggedIn}
                    gologout={gologout}
                    nickname={nickname}
                  />
                )}
              </>
            ) : (
              <Link href="/member/login">
                <span className={styles.loginBtn}>登入</span>
              </Link>
            )}
          </div>
        </div>
        {searchbaropen && <Searchbar />}
        {/* Render the DropdownMenu component */}
      </div>
    </div>
  )
}
{
  /* <Link href="/dashboard/profile" className={styles.navlink2}> */
}
{
  /* </Link> */
}
