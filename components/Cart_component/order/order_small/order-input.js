import React from 'react'

export default function OrderInput({labelcontent,type}) {
  return (
    <>
        <label >{labelcontent}</label>
        <input type={type} />
    </>
  )
}
