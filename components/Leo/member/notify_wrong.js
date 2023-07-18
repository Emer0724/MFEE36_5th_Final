import React from 'react'

export default function Notify_wrong() {
  const bar = {
    width: '100%',
    height: '60px',
    backgroundColor: '#F2AAAA',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <>
      <div style={bar}>密碼錯誤，請再試一遍</div>
    </>
  )
}
