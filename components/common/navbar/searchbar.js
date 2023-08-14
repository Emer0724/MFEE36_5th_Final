import React, { useState,useCallback } from 'react' //新增引入useState
import styles from '@/components/common/navbar/searchbar.module.css'
import searchicon from '@/assets/Nav_Image/search.svg'
import Image from 'next/image'
import Like from '@/components/like/like'
import Link from 'next/link'
import useDebounce from '@/hooks/useDebounce'

export default function Searchbar( {toggleSearch}) {
  const [search, setsearch] = useState('')
  const [data, setdata] = useState('')

  const handleSearch = (search) => {
    if(search){
      fetch(`${process.env.API_SERVER}/used/search?keyword=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('查詢結果:', data)
        setdata(data)
      
      })
      .catch((err) => {
        console.error('無相關資料', err)
      })
    }
    
  }
   //input搜尋
   const f1 = useCallback(() => {
    handleSearch(search)
    // console.log('Debounce2 發 request ----------------')
  }, [search])

  useDebounce(f1, 300)
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
                setdata('')
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
        {data ? (
          <div className={styles.searchinput_search_position}>
            <ul
              className={`list-group w-100 ${styles.searchinput_search_border}`}
            >
              {data.map((v, i) => {
                return (
                  <Link
                    href={`/product/${v.ISBN}`}
                    key={v.ISBN}
                    className={`${styles.searchinput_search}`}
                  onClick={toggleSearch}
                  >
                    <li
                      className={`list-group-item ${styles.searchinput_search} `}
                    >
                      {v.book_name}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
//onclick
