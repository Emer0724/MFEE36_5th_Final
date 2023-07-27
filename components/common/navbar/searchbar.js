import React, { useState } from 'react' //新增引入useState
import styles from '@/components/common/navbar/searchbar.module.css'
import searchicon from '@/assets/Nav_Image/search.svg'
import Image from 'next/image'

export default function Searchbar() {
  const [search, setsearch] = useState('')

  const handleSearch = () => {
    fetch(`${process.env.API_SERVER}/market/search?keyword=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('查詢結果:', data)
      })
      .catch((err) => {
        console.error('無相關資料', err)
      })
  }
  return (
    <>
      <div className={styles.searchcontain}>
        <div className={styles.searchrow}>
          <div className={styles.searchbar}>
            <input
              className={styles.searchinput}
              type="text"
              placeholder="搜尋好書"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value)
              }}
            />
          </div>
          <button className={styles.searchbtn} onClick={handleSearch}>
            <Image
              src={searchicon}
              className={styles.searchicon}
              alt="icon"
              width={60}
              height={60}
            />
          </button>
        </div>
      </div>
    </>
  )
}
//onclick
