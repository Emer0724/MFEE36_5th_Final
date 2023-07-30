import React from 'react'
import { useState,useEffect } from 'react'
import s from "@/components/Cart_component/order/totalprice.module.css"
import { useRouter } from 'next/router';



export default function OrderTotalPrice({border1,shippingCost,setFinalprice=()=>{}}){
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
const storedData = localStorage.getItem('pricedata');
const pricedata = JSON.parse(storedData);
const couponnew = pricedata.selectedCouponOption;
const tokennew = pricedata.selectedCurrencyOption;
console.log(pricedata);


setCoupon(couponnew);
setUsetoken(tokennew);
}, [router.query]);

const [coupon,setCoupon] = useState(0)
const [usetoken,setUsetoken] = useState(0)

const subprice =["商品金額","貨運費用","折價卷","知音幣"]

const totalprice = data.cart.reduce((r, v) => r + v.price*v.count, 0);

const finalcost = totalprice+shippingCost-coupon-usetoken;


useEffect(()=>{
  setFinalprice(finalcost);
  const pricefinalJSON = JSON.stringify(finalcost);
  localStorage.setItem('pricefinal', pricefinalJSON);

 },[finalcost])

 const style1 = {
  border:border1,
}


  return (
    <div className={s.totalcontain} style={style1} >
        <div><h1>訂單金額</h1></div>
        <div  className={s.totalrow}>
          <div className={s.totaldiv}>
            {subprice.map((v,i)=>{
              return (
                <h3 key={i} className={s.totaltext}>{v}</h3>
              )
            })}
            <h2 className={s.totaltext}>總金額</h2>
          </div>
          <div className={s.totaldiv}>
              <h3  className={s.totalprice}>{totalprice}</h3>
              <h3  className={s.shippingprice}>{shippingCost}</h3>
              <h3  className={s.couponprice}>{coupon}</h3>
              <h3  className={s.tokenprice}>{usetoken}</h3>
              <h2  className={s.finalprice}>{finalcost}</h2>
          </div>
        </div>
    </div>
  )
}