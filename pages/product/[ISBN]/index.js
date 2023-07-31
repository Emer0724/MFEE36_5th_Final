import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Bcs from '@/components/Leo/market_breadcrumbs'
import Left from '@/components/Leo/Left'
import Right from '@/components/Leo/Right'
import styles from '@/components/Leo/[ISBN].module.css'

export default function Isbn() {
  const router = useRouter()
  const [data, setData] = useState(null)
  const ISBN = router.query.ISBN

  useEffect(() => {
    if (ISBN) {
      fetch(`${process.env.API_SERVER}/market/detail?ISBN=${ISBN}`)
        .then((res) => res.json)
        .then((data) => {
          setData(data)
          console.log('後端回傳結果:', data)
        })
        .catch((err) => {
          console.error('資料讀取錯誤', err)
        })
    }
  }, [ISBN]) //[ISBN] 當ISBN發生變化時重新取值
  console.log('八嘎nono')
  console.log(ISBN)
  return (
    <>
      <Bcs />
      <div className={styles.square}>
        <div className={styles.l_box}>
          <Left />
        </div>
        <div className={styles.r_box}>
          <Right />
        </div>
      </div>
      <p>{router.query.ISBN}</p>
    </>
  )
}