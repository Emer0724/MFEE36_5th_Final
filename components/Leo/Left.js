import React from 'react'
import ButtonStyle_l from '@/components/Leo/Btn_Leo'
import Favorite from './favorite'
import Image from 'next/image'
import bk from '@/public/Leo-image/心流.webp'
import styles from '@/components/Leo/Left.module.css'

export default function L() {
  const btntitle1 = '加入購物車'
  const btntitle2 = '找二手書'

  return (
    <>
      <div className={styles.container}>
        <div className={styles.pic_box}>
          <Image
            src={bk}
            className={`bk-img`}
            alt="..."
            width={500}
            height={500}
          />
        </div>
        <div className={styles.favor_set}>
          <div
            className={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <h3 className={{ fontWeight: 'bold' }}>書名:心流</h3>
          </div>
          <Favorite />
        </div>
        <div className={styles.content_box}>
          <div className={styles.content}>
            <h5>ISBN:9786267244036</h5>
            <h5>作者: 米哈里．契克森米哈伊</h5>
          </div>
          <div className={styles.content}>
            <h5>出版社:行路 </h5>
            <h5>售價:580元</h5>
          </div>
        </div>
        <div className={styles.btn_set}>
          <ButtonStyle_l t1={btntitle1} />
          <ButtonStyle_l t1={btntitle2} />
        </div>
      </div>
    </>
  )
}
