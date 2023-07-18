import React from 'react'
import styles from '@/components/Leo/member/Coupon.module.css'

export default function Coupon() {
  const c = {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
  const d = {
    marginLeft: '15px',
    marginBottom: '0px',
    paddingBottom: '0px',
  }
  return (
    <>
      <div className={`col`} style={c}>
        <div className={styles.coupon}>
          {/* <div className={styles.c_title}>
            <p>生日禮</p>
          </div>
          <div className={styles.c_content}>
            <p>8折</p>
          </div>
          <div style={d}>
            <p>1989/06/04~2023/08/17</p>
          </div> */}
        </div>
      </div>
    </>
  )
}
