import React, { useState } from 'react'
import styles from '@/components/common/navbar/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/Nav_Image/logo.svg'
import Searchicon from '@/assets/Nav_Image/search.svg'
import Carticon from '@/assets/Nav_Image/Vector.svg'
import Membericon from '@/assets/Nav_Image/Subtract.svg'

export default function NavBar1() {
  const NavctName = ['商城', '二手書', '部落格', '關於我們']
  const NavEnName = ['STORE', 'USEDSTORE', 'BLOG', 'ABOUTUS']
  const NavIcon = [Searchicon, Carticon, Membericon]

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderNavbar}>
        <Link href="#" className={styles.logolink}>
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
            return (
              <div className={styles.navlinkdiv} key={i}>
                <Link href="#" className={styles.navlink1}>
                  {v}
                </Link>
                <p className={styles.linktext}>{v2}</p>
              </div>
            )
          })}
        </div>
        <div className={styles.Icongroup}>
          {NavIcon.map((v, i) => {
            return (
              <Link href="#" className={styles.navlink2} key={i}>
                <Image
                  src={v}
                  width={60}
                  height={30}
                  className={styles.Licon}
                  alt="icon"
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
