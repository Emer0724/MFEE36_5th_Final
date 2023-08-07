import React from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import Member_info from '@/components/Leo/member/member_info'
import Orderlist from '@/components/Cart_component/orderhistory/orderlist'
import s from "@/pages/dashboard/order.module.css"
import { useState,useEffect,useRef } from 'react'
import Image from 'next/image'
import logo from "@/assets/used-svg/LOGO_notext.svg"

export default function OrderHistory() {
  const [data,setData] = useState([])
  const [data1,setData1] = useState([])
  const [data2,setData2] = useState([])

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
        console.log(result);
        setData(result);
      });
    }, [])
    const handleSelectOrder = (orderid) => {
      fetch(`${process.env.API_SERVER}/cart/orderdetail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderid }),
      })
      .then((r) => r.json())
      .then((result)=>{
        console.log([result[0]]);
        setData1(result);
        setData2([result[0]])
      })
    }
  

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
            <div className={s.frontCover} onMouseEnter={() => { handleSelectOrder(v.order_id); }}>
              <div className={s.frontext}>
              <h3>訂單編號</h3>
              <h3>{v.order_id}</h3>
              <Image src={logo} alt='icon' width={80} height={80}/>
                <div className={s.fontman}>
                  <div className={s.fontman1}>
                  <h5>收件者</h5>
                  <h5>收件電話</h5>
                  </div>
                  <div className={s.fontman1}>
                  <h5>{v.customer_name}</h5>
                  <h5>{v.customer_phone}</h5>
                  </div>
                </div>
             </div>
            </div>
            <div className={s.backCover}>
             <h3 className={s.titletext}>商品細節</h3>
            {data1.map((v,i)=>{
            return(
                <div className={s.backdetail} key={i}>
                    <div className={s.backphoto}><Image src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`} width={150} height={150} alt='icon' className={s.detailimg}/></div>
                    <div className={s.backlist}>
                        <h5 className={s.backname}>{v.book_name}
                        {v.used_id>0
                        ?
                        "(二手書)"
                        :
                        ""
                        }
                        </h5>
                        <h5 className={s.backisbn}>{v.ISBN}</h5>
                        <h5 className={s.backprice}>${v.price}元</h5>
                        <div><h5 className={s.backcount}>x{v.count}</h5></div>
                        <h5 className={s.backtotal}>共${v.price*v.count}元</h5>
                    </div>
                </div>)
                })}
            </div>
          </div>
          <div className={s.page}>
          <h3 className={s.titletext}>訂單細節</h3>
          {data2.map((v,i)=>{
            return(
              <div className={s.pagecontain} key={i}>
                    <div className={s.detaillist}>
                        {v.choosestore.length>0
                        ?
                        <h5 className={s.detailstore}>寄貨門市:</h5>
                        :
                        <h5 className={s.detailaddress}>訂單地址:</h5>
                        }
                        {v.paymethod===1
                        ?
                        <h5 className={s.detailprice}>付款方式:</h5>
                        :
                        <h5 className={s.detailprice}>付款方式:</h5>
                        }
                        {v.shipping==1
                        ?
                        <>
                        <h5 className={s.detailcount}>物流方式:</h5>
                        <h5 className={s.detailtotal}>貨運費用:</h5>
                        </>
                        :
                        <>
                        <h5 className={s.detailcount}>物流方式:</h5>
                        <h5 className={s.detailtotal}>貨運費用:</h5>
                        </>
                        }  
                    </div>
                    <div className={s.detaillist}>
                        {v.choosestore.length>0
                        ?
                        <h5 className={s.detailstore}>{v.choosestore}</h5>
                        :
                        <h5 className={s.detailaddress}>{v.customer_address}</h5>
                        }
                        {v.paymethod===1
                        ?
                        <h5 className={s.detailprice}>信用卡</h5>
                        :
                        <h5 className={s.detailprice}>linepay</h5>
                        }
                        {v.shipping==1
                        ?
                        <>
                        <h5 className={s.detailcount}>宅配</h5>
                        <h5 className={s.detailtotal}>$100</h5>
                        </>
                        :
                        <>
                        <h5 className={s.detailcount}>全家取貨</h5>
                        <h5 className={s.detailtotal}>$60</h5>
                        </>
                        }  
                    </div>
              </div>
            )
          })}
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
