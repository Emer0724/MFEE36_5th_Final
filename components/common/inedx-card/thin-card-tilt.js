import React from 'react'
import styles from '@/components/common/inedx-card/index-card.module.css'
import Link from 'next/link'

export default function ThinCardTilt({
  ft_category,
  sec_category,
  sort_num,
  category_id,
}) {
  return (
    <>
      <div className={`${styles.card_all_thin_tilt} ms-4 me-5`}>
        <Link href="#" className={styles.index_book_card_text}>
          <div className={styles.card_text_sm_thin} style={{ width: '24px' }}>
            {ft_category}－{sec_category}
          </div>
          <div
            className={styles.card_text_sm_thin_1}
            style={sort_num <= 10 ? { color: 'red' } : {}}
          >
            TOP
          </div>

          <div
            className={styles.card_text_sm_thin}
            style={sort_num <= 10 ? { color: 'red' } : {}}
          >
            {sort_num}
          </div>
        </Link>
      </div>
    </>
  )
}
