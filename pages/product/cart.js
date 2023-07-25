import React from 'react'
import { useState,useEffect} from 'react'
import OrderIcon from '@/components/Cart_component/order/order_state'
import Productlist from '@/components/Cart_component/cart/Cart_ProductList'
import CartTotal from '@/components/Cart_component/cart/Cart_Total'
import CartRecommend from '@/components/Cart_component/cart/Cart_recommend'
import CartTitle from '@/components/Cart_component/Cart_title'

export default function Cart() {
  const [data, setData] = useState({
    totalcart:0,
    cart:[],
 }
);
useEffect(() => {
  fetch(`${process.env.API_SERVER}/cart/cart`)
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      setData(data);
    });
}, []);


const addcount = (ISBN) => {
  fetch(`${process.env.API_SERVER}/cart/cart/plus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ISBN: ISBN }),
  })
  .then((res) => res.json())
  .then((result) => {
    const { updatedCount } = result;
    console.log(result);
    const updatedData = data.cart.map((v) => {
      return v.ISBN === ISBN ? v.count + updatedCount : v.count;
    });
    console.log(updatedData);
    setData({ ...data, cart:updatedData });
  })
  .catch((error) => {
    console.error("錯誤訊息:", error);
  });
};


  return (
    <div>
        <OrderIcon />
        <CartTitle titlecontent={"找到喜歡的東西，就快下單吧"}/>
        <Productlist data={data} addcount={addcount}/> 
        <CartTotal/>
        <CartRecommend/>
    </div>
  )
}
