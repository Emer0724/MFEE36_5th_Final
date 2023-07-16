import React from 'react'
import ButtonStyle_l from '@/components/Leo/Btn_Leo'
import Ban from './Ban'

export default function Nocoupon() {
  const v = '來去領券'
  return (
    <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>目前尚無優惠券</h1>
        </div>
        <div>
          <Ban />
        </div>
        <ButtonStyle_l t1={v} />
      </div>
    </>
  )
}
