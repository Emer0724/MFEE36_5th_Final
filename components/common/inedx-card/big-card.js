import React from 'react'
import styles from '@/components/common/inedx-card/index-card.module.css'

export default function BigCard() {
  return (
    <>
      <div className={`${styles.card_all} mx-2`}>
        <div
          style={{
            width: '150px',
            height: '150px',
            background: `url('/used-img/getImage.webp')`,
            backgroundSize: 'contain',
          }}
        ></div>
        <div className={styles.card_text}>
          <div className={styles.card_text_sm}>岸見一郎, 古賀史健</div>
          <div className={styles.card_text_dot}>．</div>
          <div className={styles.card_text_sm}>
            被討厭的勇氣：自我啟發之父「阿德勒」的教導
          </div>
        </div>
      </div>
    </>
  )
}
