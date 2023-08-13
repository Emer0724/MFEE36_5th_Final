import React, { useState, useEffect } from 'react'
import styles from '@/components/common/inedx-card/index-card.module.css'
import Link from 'next/link'
import no_book from '@/assets/used-svg/no_book.svg'
import Image from 'next/image'

export default function BigCard({ pic, book_name, author, ISBN }) {
  const [img, setimg] = useState(true)

  // useEffect(() => {
  //   // 或者根據實際條件設置 img 的值
  //   // 或者根據實際條件設置 pic 的值

  //   // 根據 img 和 pic 的值來設置背景圖片的 URL
  //   if (img) {
  //     setpic_img(`/all_img/book_pic/${encodeURIComponent(pic)}`)
  //   } else {
  //     setpic_img(no_book)
  //   }
  // }, [img, pic])

  // const getdefultimg = () => {
  //   setimg(false)
  // }
  return (
    <>
      <div className={styles.index_card_hight}>
        <div className={`${styles.card_all} me-3 ms-3`}>
          <Link
            href={`/product/${ISBN}`}
            className={styles.index_book_card_text}
          >
            {/* <div
              style={{
                width: '150px',
                height: '150px',
                background: `url(/all_img/book_pic/${encodeURIComponent(
                  pic
                )}) center center/cover`,
              }}
              }
            ></div> */}

            <Image
              src={
                img ? `/all_img/book_pic/${encodeURIComponent(pic)}` : no_book
              }
              width={150}
              height={150}
              alt="book"
              onError={() => {
                setimg(false)
              }}
            />

            <div className={styles.card_text}>
              <div className={styles.card_text_sm_author}>{author}</div>
              <div className={styles.card_text_dot}>．</div>
              <div className={styles.card_text_sm}>{book_name}</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
