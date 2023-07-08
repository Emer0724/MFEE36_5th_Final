import React from 'react'
import NavBar1 from '@/components/common/navbar/NavBar'
import OrderIcon from '@/components/Cart_component/order/order_state'
import Productlist from '@/components/Cart_component/cart/Cart_ProductList'
import CartTotal from '@/components/Cart_component/cart/Cart_Total'
import CartRecommend from '@/components/Cart_component/cart/Cart_recommend'

export default function Cart() {
  return (
    <div>
     <NavBar1/>
     <OrderIcon/>
     <Productlist/>
     <CartTotal/>
     <CartRecommend/>
    </div>
  )
}
