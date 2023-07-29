import React from 'react'
import Card from '@/components/Leo/market_card'
import ca from './market_playground.module.css'

export default function Playground({ rows }) {
  // 在這裡進行資料渲染
  return (
    <>
      <div
        className={`container ${ca.box}`}
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {/* 使用 rows 資料進行渲染 */}
        {rows?.map((item) => (
          <div
            key={item.id}
            className={`row ${ca.c_row} d-flex`}
            style={{ flex: '25%', padding: '10px' }}
          >
            <Card data={item} />
          </div>
        ))}
      </div>
    </>
  )
}
