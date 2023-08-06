import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router'

export default function OrderCheckout() {
  const router = useRouter()

  const [payment,setpayment] = useState();
  useEffect(()=>{
  const storedData = localStorage.getItem('formData');
  const  formData = JSON.parse(storedData);
  console.log(formData);
  const paymentmethod = formData.paymentMethod
  setpayment(paymentmethod);
}, []);
 
 
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
  const btnhandle = () =>{
    router.push("./complete")
  }
  return (
    <>
    {
      payment==="linepay"
      ?
      <>
      <OrderState/>
      <CartTitle titlecontent={"付款完成後，就大功告成啦"} />
      <div>
        <h1 style={blockstyle1}>linepay支付中請稍候....</h1>
      </div>
      <div style={{marginBottom:"40px"}}>
        <DeepButton DeepButtoncontent={"完成付款"} onClick={btnhandle}/>
      </div> 
    </>
      :
      <>
      <OrderState/>
      <CartTitle titlecontent={"付款完成後，就大功告成啦"} />
      <div>
      <div style={blockstyle1}>
            <label style={labelstyle1}>卡號</label>
            <input type="number" style={inputstyle}   required/>
        </div>
        <div style={blockstyle1}>
            <label style={labelstyle1}>日期</label>
            <input type="number" style={inputstyle} required/>
        </div>
        <div style={blockstyle1}>
            <label style={labelstyle1}>安全碼</label>
            <input type="number" style={inputstyle}   required/>
        </div>
      </div>
      <div style={{marginBottom:"40px"}}>
        <DeepButton DeepButtoncontent={"完成付款"} onClick={btnhandle}/>
      </div>  
    </> 
    }
    </>
  )
}
