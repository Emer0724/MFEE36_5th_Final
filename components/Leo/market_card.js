import React, { useRef } from 'react'
import Image from 'next/image'
// import bk from '@/public/Leo-image/心流.webp'
import car from '@/components/Leo/market_card.module.css'
import Link from 'next/link'
// import cl from '@/public/Leo-image/cancle.svg'
// import LeoContext from '@/context/LeoContext'

export default function MarketCard(data) {
  const cardRef = useRef(null)

  const handleMouseEnter = () => {
    cardRef.current.classList.add(car.hovered)
  }
  const handleMouseLeave = () => {
    cardRef.current.classList.remove(car.hovered)
  }
  const { rows } = data
  const { book_name, pic, price } = rows

  // console.log(book_name)
  // console.log(pic)
  // console.log(price)
  const imageUrl = `/all_img/book_pic/${pic}`
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
              <Link href="/">
                <Image
                  src={imageUrl}
                  className={`bk-img`}
                  alt="..."
                  width={180}
                  height={180}
                />
              </Link>
            </div>
            <div className={`w-100 color-bg-1 h-100 ${car.extra}`}>
              <p className={car.p}>{book_name}</p>
              <p className={car.p}>價格:{price}元</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
