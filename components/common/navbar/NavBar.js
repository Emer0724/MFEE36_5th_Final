import React, { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/Nav_Image/logo.svg'
import Searchicon from '@/assets/Nav_Image/search.svg'
import Carticon from '@/assets/Nav_Image/Vector.svg'
import Membericon from '@/assets/Nav_Image/Subtract.svg'
import Searchbar from './searchbar'
import DropdownMenu from '../dropdown/dropdown-menu' // Import DropdownMenu

export default function NavBar1() {
  const NavctName = ['商城', '二手書', '部落格', '關於我們']
  const NavEnName = ['STORE', 'USEDSTORE', 'BLOG', 'ABOUTUS']
  const navrouter = [
    '/product/',
    '/used-book/',
    '/blog/blog-home-page',
    '/#aboutUs',
  ]

  const [searchbaropen, setSearchbaropen] = useState(false)
  const toggleSearch = () => {
    setSearchbaropen(!searchbaropen)
  }

  // Correctly set initial isLoggedIn state to false
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logout = () => {
    // Logout logic here
    setIsLoggedIn(false) // Set isLoggedIn to false on logout
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
          <div onClick={toggleSearch} className={styles.naviconbtn}>
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
              <Link href="/dashboard/profile" className={styles.navlink2}>
                <Image
                  src={Membericon}
                  width={60}
                  height={30}
                  className={styles.Licon}
                  alt="icon"
                />
              </Link>
            ) : (
              <Link href="/member/login">
                <span className={styles.loginBtn}>登入</span>
              </Link>
            )}
          </div>
        </div>
        {searchbaropen && <Searchbar />}
        {/* Render the DropdownMenu component */}
        {isLoggedIn && <DropdownMenu isLoggedIn={isLoggedIn} logout={logout} />}
      </div>
    </div>
  )
}
