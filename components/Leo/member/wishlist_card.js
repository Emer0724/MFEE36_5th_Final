import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import car from '@/components/Leo/market_card.module.css'
import ca from '@/components/Leo/market_playground.module.css'
// import no_book from '@/assets/used-svg/no_book.svg'
import Link from 'next/link'

export default function MarketCard(props) {
  // console.log(props)
  const { v } = props //解構
  const { ISBN, member_id } = v
  // const [img, setimg] = useState(true)

  console.log(v)
  const cardRef = useRef(null) //設定空的card給後續作參照用
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
  //移除收藏的fetch
  const removeWish = () => {
    if (ISBN) {
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
          window.location.replace('/dashboard/wishlist')
        })
        .catch((err) => {
          console.error('資料庫錯誤', err)
        })
    }
  }

  useEffect(() => {
    if (data && data.rows && data.rows.length > 0) {
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

  if (!data || !data.rows || data.rows.length === 0) {
    if (!showCard) {
      return null // 不顯示任何內容
    }
  }
  console.log(pic)
  const imageURL = `/all_img/book_pic/${pic}`
  return (
    <>
      <div
        className={`${ca.c_row} d-flex`}
        style={{ flex: '24%', padding: '10px' }}
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
                  //     ? `/all_img/book_pic/${encodeURIComponent(pic)}`

                  src={imageURL}
                  className={`bk-img`}
                  alt="..."
                  width={180}
                  height={180}
                />
              </div>
              <div className={`w-100 color-bg-1 h-100 ${car.overlay}`}>
                <div className={car.contentBox}>
                  <p className={car.p}>{book_name}</p>
                </div>
                <Link href={`/product/${ISBN}`}>
                  <button className={car.btn}>看詳細</button>
                </Link>
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
