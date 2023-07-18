import React from 'react'
import Wish from '@/components/Leo/market_wish'
import L from '@/components/Leo/Left'
import R from '@/components/Leo/Right'
const square = {
  display: 'flex',
  width: 1920,
  height: 1200,
}
const l_box = {
  margin: 0,
  width: 850,
  height: 1150,
}
const r_box = {
  width: 1070,
  height: 1150,
  margin: 0,
}

export default function product() {
  return (
    <>
      <Wish />
      <div style={square}>
        <div style={l_box}>
          <L />
        </div>
        <div style={r_box}>
          <R />
        </div>
      </div>
    </>
  )
}
