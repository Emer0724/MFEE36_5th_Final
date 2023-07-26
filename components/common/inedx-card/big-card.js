import React from 'react'
import styles from '@/components/common/inedx-card/index-card.module.css'
import Link from 'next/link'

export default function BigCard({ pic, book_name, author, ISBN }) {
  return (
    <>
      <div className={styles.index_card_hight}>
        <div className={`${styles.card_all} me-3 ms-3`}>
          <Link href="#" className={styles.index_book_card_text}>
            <div
              style={{
                width: '150px',
                height: '150px',
                background: `url(/all_img/book_pic/${encodeURIComponent(pic)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
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
