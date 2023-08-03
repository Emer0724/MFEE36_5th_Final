import React from 'react'
import css from '@/components/used/exchange_anime/exchange_anime.module.css'
import Image from 'next/image'
import money from '@/assets/used-svg/money.svg'
import piggy_bank from '@/assets/used-svg/piggy_bank.svg'
import money1 from '@/assets/used-svg/money1.svg'


export default function ExchangeAnime({number}) {
  return (
   <div className={css.border_card_back}>
    <div className={css.pigblock}>
        <div className={css.text}>+{number}</div>
    <Image
    src={money}
    alt='money'
    width={90}
    height={90}
    className={css.money}
    />
    <div className={css.block}>
    <Image
    src={money}
    alt='money'
    width={90}
    height={90}
    className={css.money1}
    />
        <Image
    src={money}
    alt='money'
    width={90}
    height={90}
    className={css.money2}
    />
          <Image
    src={money1}
    alt='money'
    width={90}
    height={90}
    className={css.money3}
    />
             <Image
    src={money1}
    alt='money'
    width={90}
    height={90}
    className={css.money4}
    />
                 <Image
    src={money1}
    alt='money'
    width={90}
    height={90}
    className={css.money5}
    />
              <Image
    src={money1}
    alt='money'
    width={90}
    height={90}
    className={css.money6}
    />
             <Image
    src={money1}
    alt='money'
    width={90}
    height={90}
    className={css.money7}
    />
                 <Image
    src={money1}
    alt='money'
    width={90}
    height={90}
    className={css.money8}
    />
      <Image
    src={piggy_bank}
    alt='piggy_bank'
    width={500}
    height={500}
    className={css.pig}
    />


    </div>
   
    </div>
   </div>
  )
}
