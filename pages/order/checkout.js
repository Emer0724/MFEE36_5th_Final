import CartTitle from '@/components/Cart_component/Cart_title'
import OrderInput from '@/components/Cart_component/order/order_small/order-input'
import OrderState from '@/components/Cart_component/order/order_state'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import NavBar1 from '@/components/common/navbar/NavBar'
import React from 'react'

export default function OrderCheckout() {
  return (
    <>
      <NavBar1/>
      <OrderState/>
      <CartTitle />
      <div>
        <OrderInput labelcontent={"卡號"} type={"number"}/>
        <OrderInput labelcontent={"日期"} type={"number"} />
        <OrderInput labelcontent={"安全碼"} type={"number"} />
      </div>
       <DeepButton DeepButtoncontent={"完成付款"} />

    </>
  )
}
