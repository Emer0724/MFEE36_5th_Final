import React, { useState } from 'react'
import OrderInput from "@/components/Cart_component/order/order_small/order-input"
import OrderSelect1 from "@/components/Cart_component/order/order_small/order-selection"

const Formstyles1 ={
  display:"flex",
  flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center"
}

export default function OrderForm() {
  const [shippingMethod ,setShippingmethod] = useState("宅配到家+100")
  const shippingmethodhandle =(event)=>{
    setShippingmethod(event.target.value)
  }
  return (
    <form style={Formstyles1}>
        <OrderInput labelcontent={"收件人姓名"}  type={"text"} />
        <OrderInput labelcontent={"收件人電話"}  type={"text"} />
        <OrderSelect1 onc selectmethod={"寄件方式"} 
        option1={"宅配到家+100"} option2={"便利商店+60"} 
        onChange={shippingmethodhandle}
        />
        {shippingMethod === '宅配到家+100' && (
        <OrderInput labelcontent={'收件人地址'} type={'text'} />
      )}
      {shippingMethod === '便利商店+60' && (
        <OrderInput labelcontent={'門市選擇'} type={'text'} />
      )}
        <OrderSelect1 selectmethod={"付款方式"} option1={"linepay"} option2={"信用卡付款"} />
    </form>
  )
}
