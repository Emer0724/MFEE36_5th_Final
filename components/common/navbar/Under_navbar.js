import React from 'react'
import cart from "@/assets/Nav_Image/cart.svg"
import book from "@/assets/Nav_Image/book.svg"
import home from "@/assets/Nav_Image/home.svg"
import member from "@/assets/Nav_Image/member.svg"
import pen from "@/assets/Nav_Image/pen.svg"
import styles from "@/components/common/navbar/UNavbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function UnderNavbar() {
  const icon = [home,cart,book,pen,member]
  return (
    <div className={styles.totaldiv}>
      <div className={styles.containdiv}>
          <Link href={"/"} className={styles.rowdiv}>
            <div> <Image src={home} width={30} height={25} /></div>
            <h3>首頁</h3>
          </Link>
          <Link href={"/"} className={styles.rowdiv}>
            <div><Image src={cart} width={30} height={25}/></div>
            <h3>購物車</h3>
          </Link>
          <div  className={styles.bookcontain}>
            <Link href={"/"} className={styles.bookdiv}>
              <div><Image src={book} width={30} height={25}/></div>
              <h3>商城</h3>
            </Link>
          </div>
          <Link href={"/"} className={styles.rowdiv}>
            <div><Image src={pen} width={30} height={25}/></div>
            <h3>部落格</h3>
            </Link>
          <Link href={"/"} className={styles.rowdiv}>
            <div><Image src={member} width={30} height={25}/></div>
            <h3>會員</h3>
            </Link>
      </div>
    </div>
  )
}
