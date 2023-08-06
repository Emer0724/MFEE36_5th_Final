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
import { BsBellFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function NavBar1() {
  const router = useRouter()
  const { auth, setAuth, logout, setphoto, photo } = useContext(AuthContext)
  const [newimg, setnewimg] = useState('')

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
    }else{
      if(router.asPath.includes('dashboard')){
        router.push('/member/login')
      }
    }
  }, [])
  // console.log(photo)
  // useEffect(() => {
  //   if
  //   setphoto(photo)
  // }, [photo])

  const [nickname, setnickname] = useState('')
  const [searchbaropen, setSearchbaropen] = useState(false)
  const toggleSearch = () => {
    setSearchbaropen(!searchbaropen)
  }

  // Correctly set initial isLoggedIn state to false
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const gologout = () => {
    // Logout logic here

    localStorage.removeItem('auth')
    if (router.asPath.includes('dashboard')) {
      router.push('/')
    }
    setIsLoggedIn(false) // Set isLoggedIn to false on logout
  }
  const [Dropdown, setDropdown] = useState(false)
  const isDropdown = (Dropdown) => {
    setDropdown(!Dropdown)
  }
  // console.log(auth?.notify)

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
                {photo ? (
                  <div className={styles.avatar}>
                    <Image
                      src={`${process.env.API_SERVER}/avatar/${photo}`}
                      width={30}
                      height={30}
                      className={`${styles.Licon} ${styles.avatar}`}
                      alt="icon"
                      onClick={() => isDropdown(Dropdown)}
                      role="presentation"
                    />
                  </div>
                ) : (
                  <Image
                    src={Membericon}
                    width={60}
                    height={30}
                    className={styles.Licon}
                    alt="icon"
                    onClick={() => isDropdown(Dropdown)}
                    role="presentation"
                  />
                )}

                {JSON.parse(localStorage.getItem('auth')).notify >= 1 ? (
                  <div className={styles.notify}>
                    {' '}
                    <div className={styles.bell}>
                      <BsBellFill className={{ color: 'white' }} />
                    </div>
                  </div>
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
        {/* Render the DropdownMenu component */}
      </div>
      {searchbaropen && <Searchbar />}
    </div>
  )
}
{
  /* <Link href="/dashboard/profile" className={styles.navlink2}> */
}
{
  /* </Link> */
}
