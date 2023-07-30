import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import CurtProduct from '@/components/Cart_component/cart/Cart_ProductList'
import OrderTotalPrice from '@/components/Cart_component/order/totalprice'
import React from 'react'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import { useState,useEffect} from 'react'

export default function productcheck() {
const style1 ={
    marginBottom:"40px"
}
const style2 ={
    display:"flex",
    justifyContent:"center",
    marginTop:"60px",
}
const [data, setData] = useState({
 totalcart:0,
 cart:[],
}
);
const [shippingCost,setshippingCost] = useState(100);
const [finalprice,setFinalprice] = useState(0)
console.log(finalprice);

useEffect(() => {
fetch(`${process.env.API_SERVER}/cart/cart`)
 .then((r) => r.json())
 .then((data) => {
   setData(data);
 });
 const storedData = localStorage.getItem('formData');
  const formData = JSON.parse(storedData);
  const shippingCost = formData.shippingCost
  setshippingCost(shippingCost);
}, []);




// fetch('https://sandbox-api-pay.line.me',{
   
// })




  return (
    <div style={style1}>
        <OrderState />
        <CartTitle titlecontent={"再次確認商品後，前往付款吧"}/>
        <CurtProduct data={data}/>
        <div style={style2}>
          <OrderTotalPrice shippingCost={shippingCost} setFinalprice={setFinalprice}/>
        </div>
        <DeepButton  DeepButtoncontent={"下一步，前往付款"} route={'./complete'} />
    </div>
  )
}
