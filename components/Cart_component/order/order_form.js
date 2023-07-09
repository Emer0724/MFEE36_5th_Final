import React from 'react'
import OrderInput from "@/components/Cart_component/order/order_small/order-input"
import OrderSelect1 from "@/components/Cart_component/order/order_small/order-selection"

const Formstyles1 ={
  display:"flex",
  flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center"

}

export default function OrderForm() {
  return (
    <form style={Formstyles1}>
        <OrderSelect1 selectmethod={"寄件方式"} option1={"宅配到家+100"} option2={"便利商店+60"} />
        <OrderSelect1 selectmethod={"付款方式"} option1={"linepay"} option2={"信用卡付款"} />
        <OrderInput labelcontent={"收件人姓名"}  type={"text"}/>
        <OrderInput labelcontent={"收件人電話"}  type={"number"}/>
        <OrderInput labelcontent={"收件人地址"}  type={"text"}/>
        <OrderInput labelcontent={"門市選擇"}  type={"text"}/>
        
    </form>
  )
}
