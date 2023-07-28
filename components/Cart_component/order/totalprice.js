import React from 'react'
import { useState,useEffect } from 'react'
import s from "@/components/Cart_component/order/totalprice.module.css"
import { useRouter } from 'next/router';



export default function OrderTotalPrice({border1,shippingCost}){
  const router = useRouter()
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

const style1 = {
  border:border1,
}
const subprice =["商品金額","貨運費用","折價卷","知音幣","總金額"]
const totalprice = data.cart.reduce((r, v) => r + v.price*v.count, 0);
const coupon = 100;
const token = 100;
const finalcost = totalprice+shippingCost-coupon-token;

  return (
    <div className={s.totalcontain} style={style1} >
        <div><h1>訂單金額</h1></div>
        <div  className={s.totalrow}>
          <div className={s.totaldiv}>
            {subprice.map((v,i)=>{
              return (
                <h3 key={i} className={s.totaltext}>{v}</h3>
              )
            })}e
          </div>
          <div className={s.totaldiv}>
              <h3  className={s.totalprice}>{totalprice}</h3>
              <h3  className={s.totalprice}>{shippingCost}</h3>
              <h3  className={s.totalprice}>{coupon}</h3>
              <h3  className={s.totalprice}>{token}</h3>
              <h3  className={s.totalprice}>{finalcost}</h3>
          </div>
        </div>
    </div>
  )
}
