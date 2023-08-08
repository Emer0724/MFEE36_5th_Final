import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Bcs from '@/components/Leo/market_breadcrumbs'
import Left from '@/components/Leo/Left'
import Right from '@/components/Leo/Right'
import styles from '@/components/Leo/[ISBN].module.css'
import Loading from '@/components/common/loading'

export default function Isbn() {
  const router = useRouter()
  const [data, setData] = useState(null)
  const ISBN = router.query.ISBN //獲取路由中的ISBN
  const usedAreaRef = useRef()
  //導向二手書區塊
  const toUsedArea = (e) => {
    e.preventDefault()

    const targetElement = document.getElementById('usedArea')
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  //取得detail頁面的資料來渲染頁面
  useEffect(() => {
    if (ISBN) {
      fetch(`${process.env.API_SERVER}/market/detail?ISBN=${ISBN}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          // console.log('後端回傳結果:', data)
        })
        .catch((err) => {
          console.error('資料讀取錯誤', err)
          setData([])
        })
    }
  }, [ISBN]) //[ISBN] 當ISBN發生變化時重新取值

  //無資料時的呈現畫面
  if (!data || !data.rows) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  // console.log(data)
  // console.log(ISBN)
  const { category_id } = data.rows[0] || {}
  //loading畫面
  if (data === null || !data.rows) {
    const load = {
      height: '1200px',
      weight: '1920px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return (
      <div style={{ display: 'flex' }}>
        <div style={load}>
          <Loading />
        </div>
      </div>
    )
  }
  return (
    <>
      <Bcs category_id={category_id} />
      <div className={styles.square}>
        <div className={styles.l_box}>
          <Left result={data} toUsedArea={toUsedArea} />
        </div>
        <div
          className={styles.r_box}
          style={{
            height: '100%',
          }}
        >
          <Right result={data} usedAreaRef={usedAreaRef} />
        </div>
      </div>
    </>
  )
}
