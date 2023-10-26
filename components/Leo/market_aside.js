import React, { useState, useEffect } from 'react'
import Market_aside_button from '@/components/Leo/market_aside_button'
import Market_aside_button_mini from './market_aside_button_mini'

import a from './market_aside.module.css'

export default function Market_aside({ handleDisplay, rows }) {
  const [viewWidth, setViewWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (viewWidth <= 600) {
    return (
      <>
        <Market_aside_button_mini />
      </>
    )
  } else {
    return (
      <div className={`${a.market_aside_bar} align-items-stretch`}>
        <Market_aside_button handleDisplay={handleDisplay} rows={rows} />
      </div>
    )
  }
}
