import CartTitle from '@/components/Cart_component/Cart_title'
import CurtProduct from '@/components/Cart_component/cart/Cart_ProductList'
import OrderState from '@/components/Cart_component/order/order_state'
import OrderTotalPrice from '@/components/Cart_component/order/totalprice'
import NavBar1 from '@/components/common/navbar/NavBar'
import React from 'react'

const style1 ={
     display:"flex",
     justifyContent:"center",
     marginTop:"60px"
}

export default function productcheck() {
  return (
    <div>
        <NavBar1/>
        <OrderState/>
        <CartTitle titlecontent={"再次確認商品後，前往付款吧"}/>
        <CurtProduct display1={"none"}/>
        <div style={style1}>
          <OrderTotalPrice btncontent={"下一步，前往付款"}/>
        </div>
    </div>
  )
}
