import React from 'react'
import styles from '@/components/Leo/member/Coupon.module.css'

export default function Coupon() {
  const c = {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
  const d = {
    position: 'relative',
    left: '120px',
  }
  return (
    <>
      <div className={`col`} style={c}>
        <div className={styles.coupon}>
          <div className={styles.c_title}>
            <p>生日禮</p>
          </div>
          <div className={styles.c_content}>
            <p>8折</p>
          </div>
          <div style={d}>
            <p>~2023/08/17</p>
          </div>
        </div>
      </div>
    </>
  )
}
