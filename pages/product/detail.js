import React from 'react'
import Wish from '@/components/Leo/market_wish'
import L from '@/components/Leo/Left'
import R from '@/components/Leo/Right'
const square = {
  display: 'flex',
  width: '100%',
  height: '100%',
  flexWrap: 'wrap',
}
const l_box = {
  margin: 0,
  flex: '0 0 40%',
  height: '100%',
  position: 'sticky',
  top: 0,
}
const r_box = {
  flex: '0 0 50%',
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
