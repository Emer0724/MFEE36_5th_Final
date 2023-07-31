import React from 'react'
import Card from '@/components/Leo/market_card'
import ca from './market_playground.module.css'

export default function Playground({ rows, currentPage }) {
  const pageSize = 16
  const startIndex = (currentPage - 1) * pageSize //令資料索引從0~15為第一頁
  const endIndex = startIndex + pageSize // 假設第一頁的狀況 startindex為0  pagesize為16 是指到索引值16時停止,不包括16

  const currentPageData = rows?.slice(startIndex, endIndex)
  // console.log(currentPage)
  // console.log(23510177)
  // console.log(rows)
  // console.log(currentPageData)
  return (
    <>
      <div
        className={`container ${ca.box}`}
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {/* 使用 rows 資料進行渲染 */}
        {currentPageData?.map((rows) => (
          <div
            key={rows.id}
            className={` ${ca.c_row} d-flex`}
            style={{ flex: '21%', padding: '10px' }}
          >
            <Card rows={rows} />
          </div>
        ))}
      </div>
    </>
  )
}
