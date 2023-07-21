import React, { useState } from 'react'
import OrderInput from "@/components/Cart_component/order/order_small/order-input"
import OrderSelect1 from "@/components/Cart_component/order/order_small/order-selection"
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'

const Formstyles1 ={
  display:"flex",
  flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center",
  margin:"25px"
}

export default function OrderForm() {
  
  const [shippingMethod ,setShippingmethod] = useState("宅配到家+100")
  const shippingmethodhandle =(event)=>{
    setShippingmethod(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <form style={Formstyles1} onSubmit={handleSubmit}>
        <OrderSelect1  selectmethod={"寄件方式"} 
        option1={"宅配到家+100"} option2={"便利商店+60"} 
        onChange={shippingmethodhandle}
        />
        <OrderSelect1 selectmethod={"付款方式"} option1={"linepay"} option2={"信用卡付款"} />
        <OrderInput labelcontent={"收件人姓名"}  type={"text"} pattern={"[a-zA-Z\u4e00-\u9fa5\s]+"}/>
        <OrderInput labelcontent={"收件人電話"}  type={"text"} pattern={"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"}/>
        {shippingMethod === '宅配到家+100' && (
        <OrderInput labelcontent={'收件人地址'} type={'text'} />
      )}
      {shippingMethod === '便利商店+60' && (
        <OrderInput labelcontent={'門市選擇'} type={'text'} />
      )}
      <DeepButton  DeepButtoncontent={"下一步，確認商品"} route={"/order/productcheck"} type={"submit"}/>
    </form>
  )
}
