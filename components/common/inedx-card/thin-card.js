import React from 'react'
import styles from '@/components/common/inedx-card/index-card.module.css'
import Link from 'next/link'

export default function ThinCard() {
  return (
    <>
      <div className={`${styles.card_all_thin} mx-4`}>
        <Link href="#" className={styles.index_book_card_text}>
          <div className={styles.card_text_sm_thin} style={{ width: '24px' }}>
            文學小說－恐怖小說
          </div>
          <div className={styles.card_text_sm_thin_1}>TOP</div>

          <div className={styles.card_text_sm_thin}>10</div>
        </Link>
      </div>
    </>
  )
}
