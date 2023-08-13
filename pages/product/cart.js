import React from 'react'
import { useState,useEffect} from 'react'
import OrderIcon from '@/components/Cart_component/order/order_state'
import Productlist from '@/components/Cart_component/cart/Cart_ProductList'
import CartTotal from '@/components/Cart_component/cart/Cart_Total'
import CartRecommend from '@/components/Cart_component/cart/Cart_recommend'
import CartTitle from '@/components/Cart_component/Cart_title'
import { useRouter } from 'next/router'
import Head from 'next/head'


export default function Cart() {
const router = useRouter();
const [data, setData] = useState([]);
const [totalAmount, setTotalAmount] = useState(0);

const handleDataChange = (newData) => {
  setData(newData);
};

useEffect(() => {
  if(!localStorage.getItem('auth')){
    router.push('/member/login')
  }
  else{
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

    }
}, []);

useEffect(() => {
  const totalNewBookPrice = data
    .filter((v) => v.status_id === null)
    .map((v) => v.bookprice * v.count)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalUsedBookPrice = data
    .filter((v) => v.status_id !== null)
    .map((v) => v.usedprice * v.count)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalprice = totalNewBookPrice + totalUsedBookPrice;
  // 更新總金額
  setTotalAmount(totalprice);
}, [data]);


const style1 = {
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-around",
  alignItems:"center",
  margin:"300px,0px"
}
const style2 = {
 width:"100%"
}
  return (

    <div style={style1}>
    <Head><title>Book書易-購物車</title></Head>
        <OrderIcon />
        { data.length>0
        ?
        <div style={style2}>
        <CartTitle titlecontent={"找到喜歡的東西，就來下單吧"}/>
        <Productlist data={data} handleDataChange={handleDataChange} />
        <CartTotal data={data}  totalAmount={totalAmount}/>
        </div>
        :
        <CartTitle titlecontent={"購物車目前是空的"}/>
        }
        <CartRecommend />
    </div>
  )
}
