import React, { useState } from 'react'
import Playground from '@/components/Leo/market_playground'
import Aside from '@/components/Leo/market_aside'
import Wish from '@/components/Leo/market_wish'
import CarouselComponent from '@/components/Leo/carousel'

export default function Product() {
  const [data, setdata] = useState([])

  const handleDisplay = (category_id) => {
    fetch(`${process.env.API_SERVER}/market/display?category_id=${category_id}`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data)
        console.log('後端回傳結果:', data)
      })
      .catch((err) => {
        console.error('無該分類資料', err)
      })
  }

  return (
    <>
      <CarouselComponent />
      <Wish />
      <div style={{ display: 'flex', marginTop: '0px', width: '100%' }}>
        <Aside handleDisplay={handleDisplay} data={data} />
        <Playground data={data} />
      </div>
    </>
  )
}
