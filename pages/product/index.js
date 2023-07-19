import React from 'react'
import Playground from '@/components/Leo/market_playground'
import Aside from '@/components/Leo/market_aside'
import Wish from '@/components/Leo/market_wish'
import CarouselComponent from '@/components/Leo/carousel'

export default function product() {
  return (
    <>
      <CarouselComponent />
      <Wish />
      <div style={{ display: 'flex', marginTop: '0px', width: '1920px' }}>
        <Aside />
        <Playground />
      </div>
    </>
  )
}
