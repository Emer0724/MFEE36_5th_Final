import React from 'react'
import NavBar1 from '@/components/common/navbar/NavBar'
import OrderIcon from '@/components/Cart_component/order/order_state'
import Productlist from '@/components/Cart_component/cart/Cart_ProductList'
import CartTotal from '@/components/Cart_component/cart/Cart_Total'
import CartRecommend from '@/components/Cart_component/cart/Cart_recommend'
import CartTitle from '@/components/Cart_component/Cart_title'

export default function Cart() {
  return (
    <div>
        <OrderIcon/>
        <CartTitle titlecontent={"找到喜歡的東西，就快下單吧"}/>
        <Productlist/> 
        <CartTotal/>
        <CartRecommend/>
    </div>
  )
}
