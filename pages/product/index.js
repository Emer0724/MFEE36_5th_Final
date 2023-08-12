import React, { useState, useEffect } from 'react'
import Playground from '@/components/Leo/market_playground'
import Aside from '@/components/Leo/market_aside'
import Bcs from '@/components/Leo/market_breadcrumbs'
import CarouselComponent from '@/components/Leo/carousel_auto'
import { Pagination } from 'antd'

export default function Product() {
  const [data, setdata] = useState([]) //更新data 預設值為空陣列
  const [currentPage, setCurrentPage] = useState(1)
  const [first, setfirst] = useState(false) //更新目前頁數 預設為第一頁

  //從bcs取得parent_category
  const [selectedParentCategory, setSelectedParentCategory] = useState('')

  const setSelectedCategory = (parent_category) => {
    setSelectedParentCategory(parent_category)
    console.log(parent_category)

    // 1219思路 利用這邊資料去觸發handleDisplay
    const page = 1
    handleDisplay(category_id, label, page)
  }

  useEffect(() => {
    const randomDisplay = () => {
      // console.log('fetch start')
      fetch(`${process.env.API_SERVER}/market/display_random`) //0811睡前結論 前端沒有發要求給後端   後端postman有正常運作
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

  const handleDisplay = (category_id, label, page = 1) => {
    // console.log(`category_id : ${category_id}`)
    // console.log(`label : ${label}`)
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
  useEffect(() => {
    setfirst(true)
  }, [])

  console.log(category_id)
  // console.log(totalRows)
  return (
    <>
      <CarouselComponent />
      <Bcs
        category_id={category_id}
        setSelectedCategory={setSelectedCategory} //傳遞的 setSelectedCategory 函數
      />
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
    </>
  )
}
