import React from 'react'
import Table from 'react-bootstrap/Table';
import CartPLhead from './cart_small/Cart_PLhead';
import CartPLbody from './cart_small/Cart_PLbody';

export default function CurtProduct() {
  return (
  <>
    <Table>
       <CartPLhead/>
       <CartPLbody/>
    </Table>
  </>
  )
}
