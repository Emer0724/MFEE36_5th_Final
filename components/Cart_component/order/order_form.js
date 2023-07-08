import React from 'react'
import OrderInput from "@/components/Cart_component/order/order_small/order-input"

const Formstyles1 ={
  display:"flex",
  flexDirection:"colunm",
  justifyContent:"space-around",
  alignItems:"center"

}

export default function OrderForm() {
  return (
    <form style={Formstyles1}>
        <label>寄件方式</label>
        <select>
            <option>宅配到家+100</option>
            <option>便利商店+60</option>
        </select>
        <label>付款方式</label>
        <select>
            <option>linepay</option>
            <option>信用卡付款</option>
        </select>
        <OrderInput labelcontent={"收件人姓名"}  type={"text"}/>
        <OrderInput labelcontent={"收件人電話"}  type={"number"}/>
        <OrderInput labelcontent={"收件人地址"}  type={"text"}/>
        <OrderInput labelcontent={"門市選擇"}  type={"text"}/>
    </form>
  )
}
