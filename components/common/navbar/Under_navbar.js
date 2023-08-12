import React from 'react'
import cart from "@/assets/Nav_Image/cart.svg"
import book from "@/assets/Nav_Image/book.svg"
import home from "@/assets/Nav_Image/home.svg"
import usedbook from "@/assets/used-svg/book_4.svg"
import pen from "@/assets/Nav_Image/pen.svg"
import styles from "@/components/common/navbar/UNavbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function UnderNavbar() {
  return (
    <div className={styles.totaldiv}>
      <div className={styles.containdiv}>
          <Link href={"/"} className={styles.rowdiv}>
            <div> <Image src={home} width={30} height={25} alt='icon'/></div>
            <p>首頁</p>
          </Link>
          <Link href={"/product/cart"} className={styles.rowdiv}>
            <div><Image src={cart} width={30} height={25} alt='icon'/></div>
            <p>購物車</p>
          </Link>
          <div  className={styles.bookcontain}>
            <Link href={"/product/"} className={styles.bookdiv}>
              <div><Image src={book} width={30} height={25} alt='icon'/></div>
              <p>商城</p>
            </Link>
          </div>
          <Link href={"/blog/blog-home-page"} className={styles.rowdiv}>
            <div><Image src={pen} width={30} height={25} alt='icon'/></div>
            <p>部落格</p>
            </Link>
          <Link href={"/used-book/"} className={styles.rowdiv}>
            <div><Image src={usedbook} width={30} height={25} alt='icon'/></div>
            <p>二手書</p>
            </Link>
      </div>
    </div>
  )
}
