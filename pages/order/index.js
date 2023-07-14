import CartTitle from '@/components/Cart_component/Cart_title'
import OrderForm from '@/components/Cart_component/order/order_form'
import OrderState from '@/components/Cart_component/order/order_state'
import OrderTotalPrice from '@/components/Cart_component/order/totalprice'
import NavBar1 from '@/components/common/navbar/NavBar'
import React from 'react'

const checkoutcontain = {
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center"
}

export default function checkout() {
  return (
    <>
        <OrderState/>
        <CartTitle titlecontent={"選擇喜歡的寄送方式和付款方式吧"}/>
        <div style={checkoutcontain}>
          <OrderForm/>
          <OrderTotalPrice btncontent={"下一步，確認商品"} border1={"1px solid #52796F"}/>
        </div>
          
    </>
  )
}
