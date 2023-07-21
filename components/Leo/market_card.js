import React, { useRef } from 'react'
import Image from 'next/image'
import bk from '@/public/Leo-image/心流.webp'
import car from '@/components/Leo/market_card.module.css'
import Link from 'next/link'
import cl from '@/public/Leo-image/cancle.svg'

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
            <div style={{ border: '1px solid pink' }}>
              <button className={car.x}>
                <Image
                  src={cl}
                  className={`cl-img`}
                  alt="..."
                  width={20}
                  height={20}
                />
              </button>

              <Link href="/">
                <Image
                  src={bk}
                  className={`bk-img`}
                  alt="..."
                  width={180}
                  height={180}
                />
              </Link>
            </div>
            <div className={`w-100 color-bg-1 h-100 ${car.extra}`}>
              <p className={car.p}>你好啊!!</p>
              <p className={car.p}>你好啊!!</p>
              <p className={car.p}>你好啊!!</p>
              <p className={car.p}>你好啊!!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
/**

                                                     __----~~~~~~~~~~~------___
                                    .  .   ~~//====......          __--~ ~~
                    -.            \_|//     |||\\  ~~~~~~::::... /~
                 ___-==_       _-~o~  \/    |||  \\            _/~~-
         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
   .~       .~       |   \\ -_    /  /-   /   ||      \   /
  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
           '         ~-|      /|    |-~\~~       __--~~
                       |-~~-_/ |    |   ~\_   _-~            /\
                            /  \     \__   \/~                \__
                        _--~ _/ | .-~~____--~-/                  ~~==.
                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
                                  -_     ~\      ~~---l__i__i__i--~~_/
                                  _-~-__   ~)  \--______________--~~
                                //.-~~~-~_--~- |-------~~~~~~~~
                                       //.-~~~--\
                                神獸保佑，程式碼沒Bug!
    
*/
