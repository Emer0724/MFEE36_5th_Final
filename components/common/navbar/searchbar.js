import React from 'react'
import styles from "@/components/common/navbar/searchbar.module.css"
import search from "@/assets/Nav_Image/search.svg"
import Image from 'next/image'

export default function Searchbar() {
  return (
    <>
      <div className={styles.searchcontain}>
          <div className={styles.searchrow}>
            <div className={styles.searchbar}>
            <input className={styles.searchinput} type="text" placeholder='搜尋書本名稱'/>
            </div>
            <div className={styles.searchbtn} ><Image src={search} className={styles.searchicon} alt='icon' width={60} height={60}/></div>
          </div>
      </div>
    </>
  )
}
//onclick
