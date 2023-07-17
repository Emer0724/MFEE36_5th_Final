import Link from 'next/link'
import React from 'react'

export default function Notify_correct() {
  const bar = {
    width: '100%',
    height: '60px',
    backgroundColor: '#C0D48B',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const href = {
    textDecoration: 'underline',
    fontWeight: 'bold',
  }
  return (
    <>
      <div style={bar}>
        已取得優惠券，請點此
        <Link href="/" style={href}>
          連結
        </Link>
        確認
      </div>
    </>
  )
}
