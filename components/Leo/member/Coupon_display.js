import React, { useEffect, useState } from 'react'
import Coupon from './Coupon'
import d from './Coupon_display.module.css'

export default function Coupon_display() {
  const [info, setInfo] = useState({})
  useEffect(() => {
    const data = localStorage.getItem('auth')
    setInfo(JSON.parse(data))
  }, [])

  console.log(info)
  //可使用區
  //期、已使用區
  return (
    <>
      <div className={d.coat}>
        <div className={`${d.box} container`}>
          <div className={`${d.r} row`}>
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
          </div>
          <div className={`${d.r} row`}>
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
          </div>
        </div>
      </div>
    </>
  )
}
