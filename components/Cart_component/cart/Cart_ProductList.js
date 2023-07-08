import React from 'react'
import Table from 'react-bootstrap/Table';
import CartPLhead from './cart_small/Cart_PLhead';
import CartPLbody from './cart_small/Cart_PLbody';

const CurtProductHeaderstyle1 = {
  color: "#52796F",
  textAlign:"center",
  margin:"60px 0",
  letterSpacing:"2px",
  fontWeight:"bolder"
}


export default function CurtProduct() {
  return (
  <>
    <h3 style={CurtProductHeaderstyle1}>找到喜歡的東西，就快下單吧</h3>
    <Table>
       <CartPLhead/>
       <CartPLbody/>
    </Table>
  </>
  )
}
