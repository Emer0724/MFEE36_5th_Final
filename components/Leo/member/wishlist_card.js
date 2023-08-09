import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import car from '@/components/Leo/market_card.module.css'
import ca from '@/components/Leo/market_playground.module.css'
import { Pagination } from 'antd'

export default function MarketCard(props) {
  // console.log(props)
  const { v } = props //解構
  const { ISBN, member_id } = v

  // console.log(v)
  const cardRef = useRef(null) //設定空的CARD給後續作參照用
  const [data, setData] = useState() //渲染資料用
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showCard, setShowCard] = useState(true)
  const [show, setShow] = useState(true)
  const handleMouseEnter = () => {
    cardRef.current.classList.add(car.hovered)
  }
  const handleMouseLeave = () => {
    cardRef.current.classList.remove(car.hovered)
  }

  console.log(data)
  //移除收藏的fetch
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
        .then((response) => {
          console.log('取消收藏:', response)

          const newData = (prevData) => {
            return {
              ...prevData,
              rows: prevData.rows.filter((row) => row.ISBN !== ISBN),
            }
          }

          setData(newData)
          console.log(newData)
        })
        .catch((err) => {
          console.error('資料庫錯誤', err)
        })
    }
  }
  //if無收藏
  useEffect(() => {
    if (data && data.rows && data.rows.length > 0) {
      console.log('全部書籍都被刪除')
      setShowCard(false)
    }
  }, [data])

  //抓資料的fetch
  useEffect(() => {
    if (ISBN) {
      setLoading(true)
      setError(null)
      fetch(`${process.env.API_SERVER}/market/detail?ISBN=${ISBN}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          setShow(data && data.rows && data.rows.length > 0)
          console.log('後端回傳結果:', data)
        })
        .catch((err) => {
          console.error('資料讀取錯誤', err)
          setError(err.message || '發生錯誤')
          setLoading(false)
          setShow(false)
        })
    }
  }, [ISBN]) //[ISBN] 當ISBN發生變化時重新取值
  const { rows } = data || {}
  const [result] = rows || []
  const { book_name, pic } = result || {}
  const imageUrl = `/all_img/book_pic/${pic}`
  if (!data || !data.rows || data.rows.length === 0) {
    if (!showCard) {
      // 只在 showCard 為 true 時顯示 "尚無收藏書籍"
      return (
        <div>
          <h1>尚無收藏書籍</h1>
        </div>
      )
    } else {
      return null // 不顯示任何內容
    }
  }
  return (
    <>
      <div
        className={`${ca.c_row} d-flex`}
        style={{ flex: '21%', padding: '10px' }}
      >
        <div
          className={`col ${car.cardWrapper}`}
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          key={ISBN}
        >
          <div className={`${car.card}`}>
            <div className={`market-card d-flex `}>
              <div className={car.hoverable}>
                <Image
                  src={imageUrl}
                  className={`bk-img`}
                  alt="..."
                  width={180}
                  height={180}
                />
              </div>
              <div className={`w-100 color-bg-1 h-100 ${car.overlay}`}>
                <p className={car.p}>{book_name}</p>
                <button
                  className={car.x}
                  onClick={() => removeWish(ISBN, member_id, data)}
                >
                  移除收藏
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
