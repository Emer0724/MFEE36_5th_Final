import React, { useEffect, useState } from 'react'
import Member_info from '@/components/Leo/member/member_info'
import MemberNav from '@/components/common/member-nav/member-nav'
import Wishcard from '@/components/Leo/member/wishlist_card'
import ca from '@/components/Leo/market_playground.module.css'
import styles from './wishlist.module.css'
import { Pagination } from 'antd'
import Loading from '@/components/common/loading'

export default function WishList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState([])
  const [user_info, setUser_info] = useState(null)
  const [totalRows, setTotalRows] = useState(0)
  const pageSize = 16
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      // console.log('eddie', typeof localStorage)
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

  // fetch
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

  const [Array] = data
  useEffect(() => {
    if (Array !== undefined) {
      const totalRows = Array.length
      console.log(totalRows)
      console.log(Array)
      setTotalRows(totalRows)
    }
  }, [Array])

  //分頁 分配用
  const startIndex = (currentPage - 1) * pageSize //令資料索引從0~15為第一頁
  const endIndex = startIndex + pageSize - 1 // 假設第一頁的狀況 startindex為0  pagesize為16 是指到索引值16時停止,不包括16
  const currentPageData = Array?.slice(startIndex, endIndex + 1) //完成資料切割
  console.log(currentPageData)
  const handlePageChange = (page) => {
    //按下了頁數的按鈕 更新變數page的值
    setCurrentPage(page)
  }

  const changeresult = (e) => {
    console.log(e)
  }
  if (!currentPageData) {
    return (
      <div style={{ paddingTop: '500px' }}>
        <Loading />
      </div>
    )
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
          {currentPageData && currentPageData.length > 0 ? (
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
          pageSize={pageSize} //每頁資料數
          defaultCurrent={1} //預設初始頁碼
          current={currentPage} //當前頁碼
          total={totalRows} //總資料數 done
          onChange={handlePageChange} //變動頁面時的事件
          showSizeChanger={false}
          style={{ fontSize: '24px' }}
          hideOnSinglePage={false} //單頁時是否隱藏?
          showLessItems={true} //顯示較少
          responsive={true} //自動寬度調整
        />
      </div>
    </>
  )
}
