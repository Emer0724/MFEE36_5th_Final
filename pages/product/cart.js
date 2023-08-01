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
const [coupon, setCoupon] = useState({});
const [usetoken, setusetoken] = useState({});
const [recommand,setrecommand] =useState({});

useEffect(() => {
  fetch(`${process.env.API_SERVER}/cart/cart`)
    .then((r) => r.json())
    .then((data) => {
      setData(data);
      console.log(data);
    }); 
  fetch(`${process.env.API_SERVER}/cart/cart/coupon`)
  .then((r) => r.json())
  .then((coupon) => {
    setCoupon(coupon);
  });
  fetch(`${process.env.API_SERVER}/cart/cart/usetoken`)
    .then((r) => r.json())
    .then((usetoken) => {
      setusetoken(usetoken);
    });
    fetch(`${process.env.API_SERVER}/cart/cart/recommand`)
    .then((r) => r.json())
    .then((recommand) => {
      const copiedRecommand = JSON.parse(JSON.stringify(recommand));
      const selectedRecommand = [];
      while (selectedRecommand.length < 4 && copiedRecommand.length > 0) {
        const randomIndex = Math.floor(Math.random() * copiedRecommand.length);
        const selectedBook = copiedRecommand.splice(randomIndex, 1)[0];
        if (!selectedRecommand.some((item) => item.ISBN === selectedBook.ISBN)) {
          selectedRecommand.push(selectedBook);
        }
    setrecommand(selectedRecommand);
}
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
        { data.cart.length>0
        ?
        <div>
        <CartTitle titlecontent={"找到喜歡的東西，就來下單吧"}/>
        <Productlist data={data} addcount={addcount} cutcount={cutcount} deleteitem={deleteitem}/>
        <CartTotal data={data} coupon={coupon} usetoken={usetoken}/>
        </div>
        :
        <CartTitle titlecontent={"日久見真情，欲速則不達，慢慢挑"}/>
        }
        <CartRecommend recommand={recommand}/>
    </div>
  )
}
