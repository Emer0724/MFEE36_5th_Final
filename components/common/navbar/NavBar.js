import React, { useEffect, useRef, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/Nav_Image/logo.svg'
import Searchicon from '@/assets/Nav_Image/search.svg'
import Carticon from '@/assets/Nav_Image/Vector.svg'
import Membericon from '@/assets/Nav_Image/Subtract.svg'
import Searchbar from './searchbar'
import DropdownMenu from './dropdown-menu'
import AuthContext from '@/context/AuthContext'
import countContext from '@/context/countContext'
import { useContext } from 'react'
import { BsBellFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { Avatar, Badge } from 'antd'

export default function NavBar1() {
  const router = useRouter()
  const dropdownRef = useRef(null)
  const avatarRef = useRef(null)
  const BellRef = useRef(null)
  const defaultavatarRef = useRef()
  const avatarALLRef = useRef()
  const { auth, setAuth, logout, setphoto, photo, notify, setnotify } =
    useContext(AuthContext)
  const { getcount, setcount, count } = useContext(countContext)
  const [newimg, setnewimg] = useState('')
  const [first, setfirst] = useState(false)
  // const [count, setcount] = useState(0)

  const NavctName = ['商城', '二手書', '部落格', '關於我們']
  const NavEnName = ['STORE', 'USED STORE', 'BLOG', 'ABOUT US']
  const navrouter = [
    '/product/',
    '/used-book/',
    '/blog/blog-home-page',
    '/#aboutUs',
  ]
  // console.log(auth.notify)

  useEffect(() => {
    setfirst(true)
  }, [])
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsLoggedIn(true)
      setnotify(JSON.parse(localStorage.getItem('auth')).notify)
      setnickname(JSON.parse(localStorage.getItem('auth')).nickname)
      if (JSON.parse(localStorage.getItem('auth')).mem_avatar) {
        setphoto(JSON.parse(localStorage.getItem('auth')).mem_avatar)
      }
      //轉後台
      if (JSON.parse(localStorage.getItem('auth')).member_id === 1026) {
        router.push(`${process.env.WEB_IMG}/used-book/backstage`)
      }

      // console.log(JSON.parse(localStorage.getItem('auth')).nickname)
    } else {
      if (router.asPath.includes('dashboard')) {
        router.push('/member/login')
      }
    }
  }, [first])

  // useEffect(() => {
  //   if
  //   setphoto(photo)
  // }, [photo])

  // useEffect(() => {
  //   if (localStorage.getItem('auth')) {
  //     const member1 = JSON.parse(localStorage.getItem('auth')).member_id
  //     console.log(member1)
  //     fetch(`${process.env.API_SERVER}/cart/count?member=${member1}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((r) => r.json())
  //       .then((result) => {
  //         console.log(result)
  //         const counter = result.map((v) => v.count)
  //         const totalcount = counter.reduce((v, c) => v + c, 0)
  //         setcount(totalcount)
  //       })
  //   }
  //   //需要一個回呼函式 到商城
  // }, [])

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
    logout()
    // if (router.asPath.includes('dashboard')) {
    //   router.push('/')
    // }
    setIsLoggedIn(false)
    setcount('') // Set isLoggedIn to false on logout
  }
  const [Dropdown, setDropdown] = useState(false)
  const isDropdown = (Dropdown) => {
    setDropdown(!Dropdown)
  }

  const handleDropdown = (event) => {
    // console.log(123)
    if (
      Dropdown &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !avatarALLRef.current.contains(event.target)
    ) {
      setDropdown(false)
    }
  }
  // !avatarRef.current.contains(event.target) &&
  // !BellRef.current.contains(event.target) &&
  // !defaultavatarRef.current.contains(event.target)
  useEffect(() => {
    window.addEventListener('click', handleDropdown)

    return () => {
      window.removeEventListener('click', handleDropdown)
      // console.log(567)
    }
  }, [Dropdown])

  // console.log(auth?.notify)
  // console.log(`${process.env.API_SERVER}/avatar/${photo}`)
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
          <Badge className={styles.carticon} count={count}></Badge>
          </Link>
          {/* Add a class to separate login button from other icons */}
          <div className={styles.loginWrapper} ref={avatarALLRef}>
            {auth.token ? (
              <>
                {photo ? (
                  <div
                    className={styles.avatar}
                    onClick={() => isDropdown(Dropdown)}
                    role="presentation"
                  >
                    <Image
                      src={`${process.env.API_SERVER}/avatar/${photo}`}
                      width={30}
                      height={30}
                      className={`${styles.Licon} ${styles.avatar}`}
                      alt="icon"
                      // ref={avatarRef}
                    />
                  </div>
                ) : (
                  <Image
                    src={Membericon}
                    width={60}
                    height={30}
                    className={styles.Licon}
                    alt="icon"
                    onClick={() => {
                      isDropdown(Dropdown)
                    }}
                    role="presentation"
                    // ref={defaultavatarRef}
                  />
                )}

                {notify >= 1 ? (
                  <div
                    className={styles.notify}
                    onClick={() => isDropdown(Dropdown)}
                    role="presentation"
                    // ref={BellRef}
                  >
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
                    ref={dropdownRef}
                  />
                )}
              </>
            ) : (
              <Link
                href={`/member/login?returnTo=${encodeURIComponent(
                  `${router.asPath}`
                )}`}
              >
                <span className={styles.loginBtn}>登入</span>
              </Link>
            )}
          </div>
        </div>
        {/* Render the DropdownMenu component */}
      </div>
      {searchbaropen && <Searchbar toggleSearch={toggleSearch} />}
    </div>
  )
}
{
  /* <Link href="/dashboard/profile" className={styles.navlink2}> */
}
{
  /* </Link> */
}
