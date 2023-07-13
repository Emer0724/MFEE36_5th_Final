import React from 'react'

const CartHeaderstyle1 = {
    color: "#52796F",
    textAlign:"center",
    margin:"80px 0",
    letterSpacing:"2px",
    fontWeight:"bolder"
  }
const CartHeader = {
  width:"100%"
  }

export default function CartTitle({titlecontent}) {
  return (
    <div style={CartHeader}>
        <h3 style={CartHeaderstyle1}>{titlecontent}</h3>
    </div>
  )
}
