import React, { useState, useEffect } from 'react'
import Playground from '@/components/Leo/market_playground'
import Aside from '@/components/Leo/market_aside'
import Bcs from '@/components/Leo/market_breadcrumbs_new'
import CarouselComponent from '@/components/Leo/carousel_new'
import { Pagination } from 'antd'
import { useRouter } from 'next/router'
import Market_aside_button_mini from '@/components/Leo/market_aside_button_mini'
import { useLeoContext } from '@/context/LeoContext'

export default function Product() {
  const { setAsideButtonClick } = useLeoContext()
  const [data, setdata] = useState([]) //更新data 預設值為空陣列
  const [currentPage, setCurrentPage] = useState(1)
  const [viewWidth, setViewWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const randomDisplay = () => {
      fetch(`${process.env.API_SERVER}/market/display_random`)
        .then((res) => res.json())
        .then((dataR) => {
          const { rows } = dataR
          setdata(dataR)
          setCurrentPage(1)
          console.log('後端回傳結果:', dataR)
        })
    }
    randomDisplay() //請記得要呼叫
  }, [])
  //子分類資料呈現
  const handleDisplay = (category_id, label, page = 1) => {
    // console.log(`category_id : ${category_id}`)
    // console.log(`label : ${label}`)
    setAsideButtonClick(false)
    fetch(
      `${process.env.API_SERVER}/market/display?category_id=${category_id}&label=${label}&page=${page}`
    ) //提供分類id、分類名稱、頁數
      .then((res) => res.json())
      .then((data) => {
        setdata(data)
        setCurrentPage(page)
        console.log(page)
        console.log('後端回傳結果:', data)
      })
      .catch((err) => {
        console.error('無該分類資料', err)
      })
  }
  const { rows, totalRows, category_id, label } = data
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber) // 更新目前所在頁數
    handleDisplay(category_id, label, pageNumber) // 調用 handleDisplay 函式，更新商品資料並切換到指定頁數
  }
  // console.log(rows)
  // console.log(category_id)
  // console.log(totalRows)
  return (
    <>
      <div style={{ height: '100%' }}>
        <CarouselComponent />
        <Bcs category_id={category_id} />
        {viewWidth <= 600 && (
          <Market_aside_button_mini handleDisplay={handleDisplay} rows={rows} />
        )}
        <div style={{ display: 'flex', marginTop: '0px', width: '100%' }}>
          {viewWidth >= 600 && (
            <Aside handleDisplay={handleDisplay} rows={rows} />
          )}
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
                pageSize={16}
                defaultCurrent={1}
                current={currentPage}
                total={totalRows}
                onChange={handlePageChange}
                showSizeChanger={false}
                style={{ fontSize: '24px' }}
                hideOnSinglePage={true}
                showLessItems={true}
                responsive={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
