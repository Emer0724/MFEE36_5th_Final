import React, { useState, useEffect } from 'react'
import Playground from '@/components/Leo/market_playground'
import Aside from '@/components/Leo/market_aside'
import Bcs from '@/components/Leo/market_breadcrumbs'
import CarouselComponent from '@/components/Leo/carousel_auto'
import { Pagination } from 'antd'
import { useRouter } from 'next/router'

export default function Product() {
  const [data, setdata] = useState([]) //更新data 預設值為空陣列
  const [currentPage, setCurrentPage] = useState(1)
  const [cateRand, setCateRand] = useState([]) //更新母分類隨機資料
  const router = useRouter()

  const setSelectedCategory = (parent_category) => {
    //0813 onclick 
    console.log(parent_category)
    fetch(
      `${process.env.API_SERVER}/market/bcs_parent?category_name=${parent_category}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCateRand(data)
        setCurrentPage(1)
      })
    const page = 1
    handleDisplay(category_id, label, page)
  }

  useEffect(() => {
    const randomDisplay = () => {
      console.log(cateRand)
      if (cateRand.length === 0) {
        fetch(`${process.env.API_SERVER}/market/display_random`)
          .then((res) => res.json())
          .then((dataR) => {
            const { rows } = dataR
            setdata(dataR)
            setCurrentPage(1)
            console.log('後端回傳結果:', dataR)
          })
      } else {
        setdata(cateRand)
      }
    }
    randomDisplay() //請記得要呼叫
  }, [router.query, cateRand])

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
  console.log(rows)
  // console.log(category_id)
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
