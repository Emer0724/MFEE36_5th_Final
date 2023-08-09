import React, { useEffect, useState } from 'react'
import Member_info from '@/components/Leo/member/member_info'
import MemberNav from '@/components/common/member-nav/member-nav'
import Wishcard from '@/components/Leo/member/wishlist_card'
import ca from '@/components/Leo/market_playground.module.css'
import styles from './wishlist.module.css'
import { Pagination } from 'antd'

export default function WishList() {
  const [data, setData] = useState([])
  const [user_info, setUser_info] = useState(null)
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const userInfoFromStorage = JSON.parse(localStorage.getItem('auth'))
      setUser_info(userInfoFromStorage)
    }
  }, [])
  const { member_id = null } = user_info || {} //先檢查user_info是否為null
  console.log(member_id)
  useEffect(() => {
    if (member_id !== null) {
      fetchdata(member_id)
    }
  }, [member_id])
  console.log(user_info)
  const fetchdata = (member_id) => {
    fetch(`${process.env.API_SERVER}/market/wishlist?member_id=${member_id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log('後端回傳結果:', data)
      })
      .catch((err) => {
        console.error('無該分類資料', err)
      })
  }
  const [result] = data

  const changeresult = (e) => {
    console.log(e)
  }
  return (
    <>
      <div className={styles.d1}>
        <Member_info />
      </div>
      <div className={styles.d2}>
        <MemberNav />
      </div>
      <div className={styles.d3}></div>

      <div className={styles.d4}>
        <div
          className={`container ${ca.box}`}
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {/* 使用 rows 資料進行渲染 */}
          {result && result.length > 0 ? (
            result.map((v, i) => (
              <Wishcard v={v} result={changeresult} key={i} />
            ))
          ) : (
            <div>
              <h1>尚無收藏書籍</h1>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
