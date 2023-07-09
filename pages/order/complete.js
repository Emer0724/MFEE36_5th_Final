import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import NavBar1 from '@/components/common/navbar/NavBar'
import React from 'react'
const style1 = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"60px",
    gap:"230px"
}
const style2 = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
}

export default function complete() {
    const waterlist = Math.floor(Math.random*(1000000-1)+1)
  return (
    <>
        <NavBar1/>
        <OrderState/>
        <div style={style2}>
            <CartTitle titlecontent={"訂單已完成 等候5-7個工作天幫您送達 感謝您的支持"}/>
            <CartTitle titlecontent={`#${waterlist}`}/>
            <div style={style1}>
                <DeepButton DeepButtoncontent={"訂單查詢"}/>
                <DeepButton DeepButtoncontent={"返回商城"}/>
            </div>
        </div>
        
    </>
  )
}
