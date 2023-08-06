import React from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import Member_info from '@/components/Leo/member/member_info'
import Orderlist from '@/components/Cart_component/orderhistory/orderlist'
import s from "@/pages/dashboard/order.module.css"
import { useState,useEffect } from 'react'

export default function OrderHistory() {
  const [data,setData] = useState([])
  const [order,setOrder] = useState('')
  

  useEffect(() => {
    const storedData1 = localStorage.getItem('auth');
    const formData1 = JSON.parse(storedData1);
    const member1 = formData1.member_id;
    fetch(`${process.env.API_SERVER}/cart/order?member=${member1}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
    }, [])

  

  return (
    <div className={s.bodyct}>
      <div className={s.show}>
      <Member_info />
      <MemberNav />
      </div>
      <div className={s.container}>
      {data.map((v,i)=>{
        return(
        <div className={s.bookContainer} key={i}>
          <div className={s.book}>
            <div className={s.frontCover}>
              <h1>訂單編號:{v.order_id}</h1>
              <h5>訂單作者</h5>
            </div>
            <div className={s.backCover}>
          </div>
          </div>
          <div className={s.page}>
            <div className={s.contain}>
            </div>
          </div>
        </div>
        )
        })}
      </div>
      <div className={s.rwdcontainer}>
        <Member_info />
        <MemberNav />
        <Orderlist />
       </div>
    </div>
  )
}
