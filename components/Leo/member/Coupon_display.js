import React from 'react'
import Coupon from './Coupon'

export default function Coupon_display() {
  const box = {
    width: '1345px',
    height: '530px',
    backgroundColor: '#EACCA9',
  }
  const coat = {
    display: 'flex',
    justifyContent: 'center',
  }
  const r = {
    marginTop: '40px',
  }
  return (
    <>
      <div style={coat}>
        <div style={box} className={`container`}>
          <div className={`row`} style={r}>
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
          </div>
          <div className={`row`} style={r}>
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
