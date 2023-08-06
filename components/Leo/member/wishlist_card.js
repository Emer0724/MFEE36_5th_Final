import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import car from '@/components/Leo/market_card.module.css'
import Loading from '@/components/common/loading'
import cl from '@/public/Leo-image/cancle.svg'

export default function MarketCard(props) {
  const { v } = props
  const { ISBN, member_id } = v
  console.log(v)
  const cardRef = useRef(null)
  const [data, setData] = useState()
  const [showCard, setShowCard] = useState(true)
  const handleMouseEnter = () => {
    cardRef.current.classList.add(car.hovered)
  }
  const handleMouseLeave = () => {
    cardRef.current.classList.remove(car.hovered)
  }
  //抓資料
  useEffect(() => {
    if (ISBN) {
      fetch(`${process.env.API_SERVER}/market/detail?ISBN=${ISBN}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          console.log('後端回傳結果:', data)
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
  const { rows } = data
  const [result] = rows
  const { book_name, pic, price } = result
  const imageUrl = `/all_img/book_pic/${pic}`
  const removeWish = () => {
    if (ISBN) {
      console.log(ISBN)
      console.log(member_id)
      fetch(`${process.env.API_SERVER}/market/removewish`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ISBN: ISBN, member_id: member_id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('取消收藏:', data)
          // 更新狀態來隱藏該卡片
          setShowCard(false)
        })
        .catch((err) => {
          console.error('資料庫錯誤', err)
        })
    }
  }
  // 無資料時的呈現畫面
  if (!data || !data.rows) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <>
      <div
        className={`col ${car.cardWrapper}`}
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${car.card}`}>
          <div className={`market-card d-flex ${car.no}`}>
            <div>
              <Image
                src={imageUrl}
                className={`bk-img`}
                alt="..."
                width={180}
                height={180}
              />
            </div>
            <div className={`w-100 color-bg-1 h-100 ${car.extra}`}>
              <button
                className={car.x}
                onClick={() => removeWish(ISBN, member_id)}
              >
                <Image
                  src={cl}
                  className={`cl-img`}
                  alt="..."
                  width={20}
                  height={20}
                />
              </button>
              <br />
              <p className={car.p}>{book_name}</p>
              <p className={car.p}>價格:{price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
