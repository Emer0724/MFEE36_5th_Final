import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import ProductCheck from '@/components/Cart_component/order/productcheck'
import OrderTotalPrice from '@/components/Cart_component/order/totalprice'
import React from 'react'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'

const style1 ={
     marginBottom:"40px"
}
const style2 ={
     display:"flex",
     justifyContent:"center",
     marginTop:"60px",
}

export default function productcheck() {
  return (
    <div style={style1}>
        <OrderState/>
        <CartTitle titlecontent={"再次確認商品後，前往付款吧"}/>
        <ProductCheck/>
        <div style={style2}>
          <OrderTotalPrice/>
        </div>
        <DeepButton  DeepButtoncontent={"下一步，前往付款"} route={"/order/checkout"} />
    </div>
  )
}
