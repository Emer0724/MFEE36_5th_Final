import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import b from '@/components/Leo/market_aside.module.css'

export default function Market_aside_button() {
  const arr = [
    '文學小說',
    '自然科普',
    '飲食',
    '生活風格',
    '旅遊',
    '藝術設計',
    '電腦資訊',
    '商業理財',
    '心理勵志',
  ]
  return (
    <>
      {arr.map((label, index) => (
        <button key={index} className={b.market_aside_button}>
          {label}
        </button>
      ))}
      <button className={`${b.market_aside_button} ${b.market_aside_more}`}>
        更多...
      </button>
    </>
  )
}
