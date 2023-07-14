import React from 'react'
import 'bootstrap/dist/css/bootstrap.leo.css'
// import Image from 'next/image'
import Wish from '@/components/Leo/market_wish'
import L from '@/components/Leo/Left'
import R from '@/components/Leo/Right'

export default function product() {
  return (
    <>
      <Wish />
      <div>
        <L />
        <R />
      </div>
    </>
  )
}
