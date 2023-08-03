import React from 'react'
import { useState,useEffect} from 'react'
import OrderIcon from '@/components/Cart_component/order/order_state'
import Productlist from '@/components/Cart_component/cart/Cart_ProductList'
import CartTotal from '@/components/Cart_component/cart/Cart_Total'
import CartRecommend from '@/components/Cart_component/cart/Cart_recommend'
import CartTitle from '@/components/Cart_component/Cart_title'


export default function Cart() {
const [data, setData] = useState([]);
const handleDataChange = (newData) => {
  setData(newData);
};

useEffect(() => {
  const storedData = localStorage.getItem('auth');
  const formData = JSON.parse(storedData);
  const member1 = formData.member_id
  fetch(`${process.env.API_SERVER}/cart/cart?member=${member1}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((result) => {
      console.log(result);
      setData(result);
    });
}, [setData]);


const style1 = {
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-around",
  alignItems:"center",
  margin:"300px,0px"

}
  return (
    <div style={style1}>
        <OrderIcon />
        { data.length>0
        ?
        <div>
        <CartTitle titlecontent={"找到喜歡的東西，就來下單吧"}/>
        <Productlist data={data} handleDataChange={handleDataChange} />
        <CartTotal data={data}  />
        </div>
        :
        <CartTitle titlecontent={"日久見真情，欲速則不達，慢慢挑"}/>
        }
        <CartRecommend />
    </div>
  )
}
