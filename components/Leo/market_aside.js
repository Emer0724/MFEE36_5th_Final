import React from 'react'
import Market_aside_button from '@/components/Leo/market_aside_button'
import a from './market_aside.module.css'

export default function Market_aside({ handleDisplay, data }) {
  // eslint-disable-next-line prettier/prettier
 console.log(data)
  return (
    <div className={`${a.market_aside_bar} align-items-stretch`}>
      <Market_aside_button handleDisplay={handleDisplay} data={data} />
    </div>
  )
}
