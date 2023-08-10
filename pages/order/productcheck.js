import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import styles from '@/components/Cart_component/cart/CartProductlist.module.css'
import OrderTotalPrice from '@/components/Cart_component/order/totalprice'
import React from 'react'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { confirmAlert } from 'react-confirm-alert'

export default function productcheck() {
  const router = useRouter()
  const style1 = {
    marginBottom: '60px',
  }
  const style3 = {
    marginBottom: '130px',
  }
  const style2 = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '60px',
  }
  const [data, setData] = useState([])
  const [shippingCost, setshippingCost] = useState(100)
  const [payment, setpayment] = useState('')
  const [finalprice, setFinalprice] = useState(0)
  console.log(finalprice)
  console.log(data)

  useEffect(() => {
    const storedData1 = localStorage.getItem('auth')
    const formData1 = JSON.parse(storedData1)
    const member1 = formData1.member_id
    fetch(`${process.env.API_SERVER}/cart/cart?member=${member1}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        setData(result)
      })
    const storedData = localStorage.getItem('formData')
    const formData = JSON.parse(storedData)
    const shippingCost = formData.shippingCost
    const paymentmethod = formData.paymentMethod
    setshippingCost(shippingCost)
    setpayment(paymentmethod)
  }, [])

  const PLheader2 = ['產品', '書名', 'ISBN', '價格', '數量', '小計']
  const Header1 = {
    textAlign: 'center',
    fontSize: 'var(--txp24)',
  }
  const limitText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'
    }
    return text
  }
  // fetch('https://sandbox-api-pay.line.me',{

  // })
  const btnhandle = () => {
    // if(payment==="linepay"){
    //     confirmAlert({
    //   title:"確認付款",
    //   message:"即將前往linepay付款,要繼續嗎?",
    //   buttons:[
    //     {
    //       label:'前往',
    //       onclick:()=>{
    //         fetch(`${process.env.API_SERVER}/cart/createorder`,{
    //           method:"POST",
    //           body:JSON.stringify({data:data,amount:finalprice}),
    //           headers:{"Content-Type": "application/json" }
    //         })
    //       },
    //     },{
    //       label:"取消",
    //       onclick:()=>{}
    //     }
    //   ]
    //  })
    if (payment === 'linepay') {
      router.push('./complete')
    } else {
      router.push('./checkout')
    }
  }

  return (
    <div style={style1}>
      <OrderState />
      <CartTitle titlecontent={'再次確認商品後，前往付款吧'} />
      <table className={styles.tablecontain}>
        <thead className={styles.tablehead}>
          <tr>
            {PLheader2.map((v, i) => {
              return (
                <th key={i} style={Header1}>
                  {v}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            const truncatedBookName = limitText(v.book_name, 10)
            return (
              <tr key={i} className={styles.Prodeucttr}>
                <td className={styles.ProdeuctBlock}>
                  <Image
                    className={styles.imagebook}
                    src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`}
                    width={100}
                    height={100}
                    alt="icon"
                  />
                </td>
                <td className={styles.ProdeuctBlock}>{truncatedBookName}</td>
                <td className={styles.ProdeuctBlock}>{v.ISBN}</td>
                {v.status_id !== null ? (
                  <td className={styles.ProdeuctBlock}>
                    特惠$<span className={styles.usedprice}>{v.usedprice}</span>
                  </td>
                ) : (
                  <td className={styles.ProdeuctBlock}>
                    <span className={styles.oneprice}>{v.bookprice}</span>
                  </td>
                )}
                <td>
                  <div className={styles.CountBlock}>
                    <div className={styles.Countvalue1}>{v.count}</div>
                  </div>
                </td>
                <td className={styles.ProdeuctBlock}>
                  {v.status_id !== null ? (
                    <span className={styles.totalprice}>
                      {v.usedprice * v.count}
                    </span>
                  ) : (
                    <span className={styles.totalprice}>
                      {v.bookprice * v.count}
                    </span>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {data.map((v, i) => {
        const truncatedBookName = limitText(v.book_name, 15)
        return (
          <div className={styles.CProductlist} key={i}>
            <div className={styles.CProductlist1}>
              <div>
                <Image
                  src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`}
                  alt="icon"
                  width={100}
                  height={80}
                />
              </div>
              <div className={styles.CProductlist2}>
                <h6 className={styles.Clisttext}>{truncatedBookName}</h6>
                <h6 className={styles.Clisttext}>{v.ISBN}</h6>
                <div className={styles.CountBlock}>
                  <div className={styles.Countvalue}>{v.count}</div>
                </div>
              </div>
            </div>
            <div className={styles.CPtotaltext}>
              <p>
                {v.status_id !== null ? (
                  <span className={styles.totalprice}>
                    {v.usedprice * v.count}
                  </span>
                ) : (
                  <span className={styles.totalprice}>
                    {v.bookprice * v.count}
                  </span>
                )}
              </p>
            </div>
          </div>
        )
      })}
      <div style={style2}>
        <OrderTotalPrice
          shippingCost={shippingCost}
          setFinalprice={setFinalprice}
        />
      </div>
      <div style={style3}>
        <DeepButton
          DeepButtoncontent={'下一步，前往付款'}
          onClick={btnhandle}
        />
      </div>
    </div>
  )
}
