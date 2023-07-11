import React from 'react'
import styles from "@/components/common/navbar/navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/NavImage/logo.svg"
import Searchicon from "@/assets/NavImage/search.svg"
import Carticon from "@/assets/NavImage/Vector.svg"
import Membericon from "@/assets/NavImage/Subtract.svg"

export default function NavBar1() {
    const NavctName = ["商城","二手書","部落格","關於我們"];
    const NavEnName = ['Store','Usedbook','Blog','Aboutus']
    const NavIcon =[Searchicon,Carticon,Membericon]

  return (
    <div >
      <div className={styles.HeaderNavbar}>
        <div className={styles.NavbarLogo}>
          <Link href="#" className={styles.logoimg}><Image src={logo} width={100} height={75}/></Link>
          <div className={styles.NavbarRoute}>
          {NavctName.map((v,i)=>{
              const v2 = NavEnName[i]
              return(
                  <div className={styles.navlinkdiv} key={i}>
                      <Link href="#" className={styles.navlink1} >{v}</Link>
                      <p className={styles.linktext} >{v2}</p>
                  </div>
              )})}
            </div>
        </div>
       <div className={styles.NavBarIcon}>
        {NavIcon.map((v,i)=>{
          return(
              <Link href="#" className={styles.navlink2} key={i}>
                <Image src={v} width={40} height={30}/>
              </Link>
        )})}
        </div>
      </div>
   </div>
  )
}
