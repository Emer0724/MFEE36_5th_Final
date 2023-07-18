import React from 'react'
import Market_aside_button from '@/components/Leo/market_aside_button'
import a from './market_aside.module.css'

export default function Market_aside() {
  // eslint-disable-next-line prettier/prettier
  return (
    <div className={a.market_aside_bar}>
      <Market_aside_button />
    </div>
  )
}
