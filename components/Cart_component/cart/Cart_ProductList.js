import React from 'react'
import Table from 'react-bootstrap/Table';
import CartPLhead from './cart_small/Cart_PLhead';
import CartPLbody from './cart_small/Cart_PLbody';
import Title from "@/components/Cart_component/Cart_title"

export default function CurtProduct() {
  return (
  <>
    <Title titlecontent={"找到喜歡的東西，就快下單吧"}/>
    <Table>
       <CartPLhead/>
       <CartPLbody/>
    </Table>
  </>
  )
}
