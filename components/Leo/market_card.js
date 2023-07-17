import React, { useRef } from 'react'
import Image from 'next/image'
import bk from '@/public/Leo-image/心流.webp'
import car from '@/components/Leo/market_card.module.css'
import Link from 'next/link'

export default function MarketCard() {
  const cardRef = useRef(null)

  const handleMouseEnter = () => {
    cardRef.current.classList.add(car.hovered)
  }
  const handleMouseLeave = () => {
    cardRef.current.classList.remove(car.hovered)
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
            <Link href="/">
              <Image
                src={bk}
                className={`bk-img`}
                alt="..."
                width={170}
                height={170}
              />
            </Link>
            <div className={`w-100 color-bg-1 h-100 ${car.extra}`}>
              <p>你好啊!!</p>
              <p>你好啊!!</p>
              <p>你好啊!!</p>
              <p>你好啊!!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
