import { React, useEffect } from 'react'
import Playground from '@/components/Leo/market_playground'
import Aside from '@/components/Leo/market_aside'
import Wish from '@/components/Leo/market_wish'
import CarouselComponent from '@/components/Leo/carousel'

export default function Product() {
  return (
    <>
      <CarouselComponent />
      <Wish />
      <div style={{ display: 'flex', marginTop: '0px', width: '100%' }}>
        <Aside />
        <Playground />
      </div>
    </>
  )
}
