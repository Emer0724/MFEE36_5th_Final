import React, { useEffect, useState } from 'react'
import styles from '@/components/Leo/member/Coupon.module.css'

export default function Coupon({ props }) {
  console.log(props)
  const [time, setTime] = useState('')
  useEffect(() => {
    const dt = props.end_time.split('T')
    setTime(dt[0])
  }, [])
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
            <p>{props.coupon_name}</p>
          </div>
          <div className={styles.c_content}>
            <p>{props.coupon_discount * 10 + '折'}</p>
          </div>
          <div style={d}>
            <p>~{time}</p>
          </div>
        </div>
      </div>
    </>
  )
}
