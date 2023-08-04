import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import styles from "@/components/Cart_component/cart/CartProductlist.module.css"
import OrderTotalPrice from '@/components/Cart_component/order/totalprice'
import React from 'react'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import { useState,useEffect} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function productcheck() {
  const router = useRouter();
const style1 ={
    marginBottom:"60px"
}
const style2 ={
    display:"flex",
    justifyContent:"center",
    marginTop:"60px",
}
const [data, setData] = useState([])
const [shippingCost,setshippingCost] = useState(100);
const [finalprice,setFinalprice] = useState(0)
console.log(finalprice);

useEffect(() => {
  const storedData1 = localStorage.getItem('auth');
  const formData1 = JSON.parse(storedData1);
  const member1 = formData1.member_id
  fetch(`${process.env.API_SERVER}/cart/cart?member=${member1}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((result) => {
      setData(result);
    });
 const storedData = localStorage.getItem('formData');
 const  formData = JSON.parse(storedData);
 const shippingCost = formData.shippingCost
 setshippingCost(shippingCost);
}, []);



// fetch('https://sandbox-api-pay.line.me',{
   
// })
const PLheader2 = ["產品","ISBN","價格","數量","小計"]
const Header1={
  textAlign:"center",
  fontSize:"var(--txp24)"
}
const limitText = (text,maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}
const btnhandle=()=>{
  router.push("./checkout")
}




  return (
    <div style={style1}>
        <OrderState />
        <CartTitle titlecontent={"再次確認商品後，前往付款吧"}/>
    <table className={styles.tablecontain}>
      <thead className={styles.tablehead}>
        <tr>
          {PLheader2.map((v,i)=>{
          return(
              <th key={i}  style={Header1}>{v}</th>
              )
          })}
          </tr>  
      </thead> 
      <tbody>
      {data.map((v,i)=>{
        const truncatedBookName = limitText(v.book_name,10);
          return(
          <tr key={i} className={styles.Prodeucttr}>
              <td className={styles.Prodeuctpn}><Image className={styles.imagebook} src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`} width={100} height={100} alt='icon'/>{truncatedBookName}</td>
              <td className={styles.ProdeuctBlock}>{v.ISBN}</td>
              <td className={styles.ProdeuctBlock}><span className={styles.oneprice}>{v.price}</span></td>
              <td>
                  <div className={styles.CountBlock}>
                    <div className={styles.Countvalue1}>{v.count}</div>
                  </div>
              </td> 
              <td className={styles.ProdeuctBlock}><span className={styles.totalprice}>{v.price*v.count}</span></td>
          </tr>)
      })}
      </tbody>
    </table>
    {data.map((v,i)=>{
      const truncatedBookName = limitText(v.book_name,15);
        return(
          <div className={styles.CProductlist} key={i}>
            <div className={styles.CProductlist1} >
              <div><Image src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`} alt='icon' width={100} height={80}/></div>
              <div className={styles.CProductlist2}>
                <h6 className={styles.Clisttext}>{truncatedBookName}</h6>
                <h6 className={styles.Clisttext}>{v.ISBN}</h6>
                <div className={styles.CountBlock}>
                    <div className={styles.Countvalue2}><span className={styles.counttext}>{v.count}</span></div>
                </div>
              </div>
            </div>
            <div className={styles.CPtotaltext}>
              <p><span className={styles.totalprice}>{v.price*v.count}</span></p>
            </div>
          </div>
        )
    })}
        <div style={style2}>
          <OrderTotalPrice shippingCost={shippingCost} setFinalprice={setFinalprice}/>
        </div>
        <DeepButton  DeepButtoncontent={"下一步，前往付款"} onClick={btnhandle} />
    </div>
  )
}
