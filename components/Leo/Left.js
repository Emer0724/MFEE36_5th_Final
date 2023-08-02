import React from 'react'
import ButtonStyle_l from '@/components/Leo/Btn_Leo'
import Favorite from './favorite'
import Image from 'next/image'
import styles from '@/components/Leo/Left.module.css'

export default function L(result) {
  const btntitle1 = '加入購物車'
  const btntitle2 = '找二手書'
  const { data } = result
  const { rows } = data
  const { ISBN, book_name, pic, publish, price, author, category_id } = rows[0]

  const imageUrl = `/all_img/book_pic/${pic}`

  return (
    <>
      <div className={styles.container}>
        <div className={styles.pic_box}>
          <Image
            src={imageUrl}
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
            <h3 className={{ fontWeight: 'bold' }}>書名:{book_name}</h3>
          </div>
          <Favorite ISBN={ISBN} />
        </div>
        <div className={styles.content_box}>
          <div className={styles.content}>
            <h5>ISBN:{ISBN}</h5>
            <h5>作者: {author}</h5>
          </div>
          <div className={styles.content}>
            <h5>出版社:{publish} </h5>
            <h5>售價:{price}元</h5>
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
