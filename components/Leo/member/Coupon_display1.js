import React, { useEffect, useState } from 'react'
import Coupon from './Coupon_expired'
import d from './Coupon_display.module.css'
import Loading from '@/components/common/loading'

export default function Coupon_display() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    const couponData = () => {
      const data = localStorage.getItem('auth')
      const member_id = JSON.parse(data).member_id
      console.log(member_id)
      fetch(`${process.env.API_SERVER}/market/coupon?member_id=${member_id}`)
        .then((res) => res.json())
        .then((datas) => {
          setDatas(datas)
          console.log(datas)
          console.log('後端回傳結果:', datas[1])
        })
    }
    couponData()
  }, [])
  return (
    <>
      <div className={d.coat}>
        <div className={`${d.box} container`}>
          <div className={`${d.r} row`}>
            {datas[1]?.map((v) => {
              return <Coupon props={v} key={v.coupon_mid} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
