import React from 'react'
import styles from "@/components/common/navbar/searchbar.module.css"
import search from "@/assets/Nav_Image/search.svg"
import Image from 'next/image'

export default function Searchbar() {
  return (
    <div className={styles.searchcontain}>
        <div className={styles.searchrow}>
          <div className={styles.searchbar}>
           <select className={styles.searchsel} name="category" id="" value='類別'>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
           </select>
           <input className={styles.searchinput} type="text" placeholder='搜尋'/>
          </div>
          <Image src={search} alt='icon' width={60} height={60}/>
        </div>
    </div>
  )
}
