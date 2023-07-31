import React, { useState, useEffect } from 'react'
import Playground from '@/components/Leo/market_playground'
import Aside from '@/components/Leo/market_aside'
import Bcs from '@/components/Leo/market_breadcrumbs'
import CarouselComponent from '@/components/Leo/carousel_auto'
import { Pagination } from 'antd'

export default function Product() {
  const [data, setdata] = useState([]) //更新data 預設值為空陣列
  const [currentPage, setCurrentPage] = useState(1) //更新目前頁數 預設為第一頁
  const handleDisplay = (category_id, label, page = 1) => {
    //
    fetch(
      `${process.env.API_SERVER}/market/display?category_id=${category_id}&label=${label}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setdata(data)
        setCurrentPage(page)
        console.log('後端回傳結果:', data)
      })
      .catch((err) => {
        console.error('無該分類資料', err)
      })
  }
  useEffect(() => {
    // 在頁面載入時觸發 handleDisplay 函式，設定初始分類 ID，預設為 1
    handleDisplay(2)
  }, [])

  const { rows, totalRows, category_id, label } = data

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber) // 更新目前所在頁數
    handleDisplay(category_id, label, pageNumber) // 調用 handleDisplay 函式，更新商品資料並切換到指定頁數
  }
  console.log()
  // console.log(totalRows)
  return (
    <>
      <CarouselComponent />
      <Bcs category_id={category_id} label={label} />
      <div style={{ display: 'flex', marginTop: '0px', width: '100%' }}>
        <Aside handleDisplay={handleDisplay} rows={rows} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Playground rows={rows} currentPage={currentPage} />
          <div style={{ margin: '20px' }}>
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={totalRows}
              onChange={handlePageChange}
              showSizeChanger={false}
              style={{ fontSize: '24px' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
