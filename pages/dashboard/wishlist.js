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
  const [currentPage, setCurrentPage] = useState(1)
  const [totalRows, setTotalRows] = useState(0)

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

  const fetchdata = (member_id, page = 1) => {
    fetch(
      `${process.env.API_SERVER}/market/wishlist?member_id=${member_id}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.rows)
        setCurrentPage(page)
        setTotalRows(data.totalRows)
        console.log('後端回傳結果:', data)
        console.log('連千毅')
        console.log(member_id)
        console.log(data.rows)
        console.log(data.totalRows)
        console.log(data.totalPage)
      })
      .catch((err) => {
        console.error('無該分類資料', err)
      })
  }

  const changeresult = (e) => {
    console.log(e)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
    fetchdata(member_id) // 根據新的當前頁面重新獲取資料
  }
  const result = data
  console.log(result)
  console.log(currentPage)
  console.log(totalRows)

  //宣告一頁大小 以及設定每一頁開頭與最後一位的資料序號
  const pageSize = 16
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentPageData = result?.slice(startIndex, endIndex)

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
            currentPageData.map((v, i) => (
              <Wishcard v={v} result={changeresult} key={i} />
            ))
          ) : (
            <div>
              <h1>尚無收藏書籍</h1>
            </div>
          )}
        </div>
      </div>
      <div className={styles.page}>
        <Pagination
          pageSize={16}
          defaultCurrent={1}
          current={currentPage}
          total={totalRows}
          onChange={handlePageChange}
          showSizeChanger={false}
          style={{ fontSize: '24px' }}
          hideOnSinglePage={false}
          showLessItems={true}
          responsive={true}
        />
      </div>
    </>
  )
}
