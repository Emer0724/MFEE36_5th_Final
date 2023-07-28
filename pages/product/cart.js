import React from 'react'
import { useState,useEffect} from 'react'
import OrderIcon from '@/components/Cart_component/order/order_state'
import Productlist from '@/components/Cart_component/cart/Cart_ProductList'
import CartTotal from '@/components/Cart_component/cart/Cart_Total'
import CartRecommend from '@/components/Cart_component/cart/Cart_recommend'
import CartTitle from '@/components/Cart_component/Cart_title'
import { useRouter } from 'next/router'

export default function Cart() {
const router= useRouter()
const [data, setData] = useState({
    totalcart:0,
    cart:[],
 }
);
useEffect(() => {
  fetch(`${process.env.API_SERVER}/cart/cart`)
    .then((r) => r.json())
    .then((data) => {
      setData(data);
    }); 
}, [router.query]);


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
      // 將更新後的結果設置回 data.cart 狀態中
      setData((prevData) => ({
        ...prevData,
        cart: prevData.cart.map((item) =>
          item.ISBN === ISBN ? { ...item, count: item.count + result.updatedCount } : item
        ),
      }));
    })
    .catch((error) => {
      console.error("錯誤訊息:", error);
    });
};

const cutcount = (ISBN) => {
  fetch(`${process.env.API_SERVER}/cart/cart/cut`, {
    method: "POST",
    body: JSON.stringify({ ISBN: ISBN }),
    headers: { "Content-Type": "application/json" }
  })
  .then((r) => r.json())
  .then((resultcut) => {
    console.log(resultcut);
    if (resultcut.message === 'Item deleted from cart.') {
      // 商品數量為0，刪除該項目,使用 setData 函式來更新前端的資料狀態。
      setData((prevData) => ({
        ...prevData,
        cart: prevData.cart.filter((item) => item.ISBN !== ISBN)
      }));
    } else {
      // 商品數量更新
      setData((prevData) => ({
        ...prevData,
        cart: prevData.cart.map((item) =>
          item.ISBN === ISBN ? { ...item, count: item.count - 1 } : item
        )
      }));
    }
  })
  .catch((error) => {
    console.error("錯誤訊息:", error);
  });
};

const deleteitem = (ISBN) =>{
  fetch(`${process.env.API_SERVER}/cart/cart/delete`,{
    method:"POST",
    body:JSON.stringify({ISBN:ISBN}),
    headers: { "Content-Type": "application/json" }
  })
  .then((r)=>r.json())
  .then((resultdel)=>{
    if(resultdel.message === "Item deleted from cart."){
      setData((prevData)=>({
        ...prevData, cart: prevData.cart.filter((item) => item.ISBN !== ISBN)
      }))
    }
  })
}


  return (
    <div>
        <OrderIcon />
        <CartTitle titlecontent={"找到喜歡的東西，就快下單吧"}/>
        <Productlist data={data} addcount={addcount} cutcount={cutcount} deleteitem={deleteitem}/> 
        <CartTotal data={data}/>
        <CartRecommend/>
    </div>
  )
}
