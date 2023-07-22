import React, { useState } from 'react'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'

const Formstyles1 ={
  display:"flex",
  flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center",
  margin:"25px"
}
const blockstyle1 = {
  display:"flex",
  flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center",
  marginBottom:"100px",
}
const labelstyle1 = {
  fontSize:"20px"
}
const inputstyle = {
  width:"350px",
  height:"60px",
  borderRadius:"8px",
  border:"1px solid #52796F",
  background:"#EEEEEE",
  padding:"5px",
  fontSize:"20px"
}
const blockstyle = {
  display:"flex",
  flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center",
  marginBottom:"100px",
}
const labelstyle = {
fontSize:"20px"
}
const selectstyle = {
  width:"350px",
  height:"60px",
  borderRadius:"8px",
  border:"1px solid #52796F"
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
        <div style={blockstyle}>
          <label style={labelstyle}>寄件方式</label>
          <select style={selectstyle} onChange={shippingmethodhandle}>
              <option>宅配到家+100</option>
              <option>便利商店+60</option>
          </select>
        </div> 
        <div style={blockstyle}>
          <label style={labelstyle}>付款方式</label>
          <select style={selectstyle} >
              <option>linepay</option>
              <option>信用卡付款</option>
          </select>
        </div> 
        <div style={blockstyle1}>
            <label style={labelstyle1}>收件人姓名</label>
            <input type="text" style={inputstyle} pattern="[a-zA-Z\u4e00-\u9fa5\s]+"  required/>
        </div>
        <div style={blockstyle1}>
            <label style={labelstyle1}>收件人電話</label>
            <input type="text" style={inputstyle} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"  required/>
        </div>
        {shippingMethod === '宅配到家+100' && (
          <div style={blockstyle1}>
            <label style={labelstyle1}>收件人地址</label>
            <input type="text" style={inputstyle}  required/>
          </div>
      )}
      {shippingMethod === '便利商店+60' && (
        <div style={blockstyle1}>
            <label style={labelstyle1}>門市選擇</label>
            <input type="text" style={inputstyle}  required/>
          </div>
      )}
      <DeepButton  DeepButtoncontent={"下一步，確認商品"} route={"/order/productcheck"} type={"submit"}/>
    </form>
  )
}
