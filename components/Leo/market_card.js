import React, { useRef } from 'react'
import Image from 'next/image'
import car from '@/components/Leo/market_card.module.css'
import Link from 'next/link'

export default function MarketCard(data) {
  console.log(data)
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
          <Link href={`/product/${ISBN}`}>
            <div className={car.card}>
              <div className={car.hoverable}>
                <Image
                  src={imageUrl}
                  className={`bk-img`}
                  alt="..."
                  width={180}
                  height={180}
                />
              </div>
              <div className={` ${car.overlay}`}>
                <div
                  className={`d-flex justify-content-center align-items-center w-100 h-100`}
                >
                  <p className={`${car.p}`}>{book_name}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
