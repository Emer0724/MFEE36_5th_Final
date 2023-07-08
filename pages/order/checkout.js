import CartTitle from '@/components/Cart_component/Cart_title'
import OrderForm from '@/components/Cart_component/order/order_form'
import OrderState from '@/components/Cart_component/order/order_state'
import NavBar1 from '@/components/common/navbar/NavBar'
import React from 'react'

export default function checkout() {
  return (
    <>
        <NavBar1/>
        <OrderState/>
        <CartTitle titlecontent={"選擇喜歡的寄送方式和付款方式吧"}/>
        <OrderForm/>
    </>
  )
}
