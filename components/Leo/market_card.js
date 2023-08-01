import React, { useRef } from 'react'
import Image from 'next/image'
import car from '@/components/Leo/market_card.module.css'
import Link from 'next/link'

export default function MarketCard(data) {
  const cardRef = useRef(null)

  const handleMouseEnter = () => {
    cardRef.current.classList.add(car.hovered)
  }
  const handleMouseLeave = () => {
    cardRef.current.classList.remove(car.hovered)
  }
  const { rows } = data
  const { book_name, pic, price, ISBN } = rows

  // console.log(book_name)
  // console.log(pic)
  // console.log(price)
  const imageUrl = `/all_img/book_pic/${pic}`
  return (
    <>
      <div
        className={`${car.cardWrapper}`}
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <div className={car.card}>
            <div>
              <Link href={`/product/${ISBN}`}>
                <Image
                  src={imageUrl}
                  className={`bk-img`}
                  alt="..."
                  width={180}
                  height={180}
                />
              </Link>
            </div>
            <div className={car.extra}>
              <p className={car.p}>{book_name}</p>
              <p className={car.p}>價格:{price}元</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
