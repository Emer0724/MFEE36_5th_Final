import { useEffect, useState } from 'react'
import s from '@/components/Cart_component/orderhistory/orderlist.module.css'
import Orderdetail from './orderdetail'
import Orderman from './orderman'

export default function Orderlist() {
  const [openedDetailIndex, setOpenedDetailIndex] = useState(null)
  const [openedOrderIndex, setOpenedOrderIndex] = useState(null)
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])

  const opendetailhandle = (index) => {
    if (openedDetailIndex === index) {
      setOpenedDetailIndex(null)
    } else {
      setOpenedDetailIndex(index)
      setOpenedOrderIndex(null)
    }
  }

  const openorderhandle = (index) => {
    if (openedOrderIndex === index) {
      setOpenedOrderIndex(null)
    } else {
      setOpenedOrderIndex(index)
      setOpenedDetailIndex(null)
    }
  }

  useEffect(() => {
    const storedData1 = localStorage.getItem('auth')
    const formData1 = JSON.parse(storedData1)
    const member1 = formData1.member_id
    fetch(`${process.env.API_SERVER}/cart/order?member=${member1}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        setData(result)
      })
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
      .then((result) => {
        setData1(result)
      })
  }

  if (data.length < 1) {
    return (
      <div className={s.listcol}>
        <div className={s.listnum}>
          <h3>目前尚無訂單</h3>
        </div>
        <div className={s.listdivct}>
          <h3>趕緊逛逛吧</h3>
        </div>
      </div>
    )
  }
  return (
    <div className={s.listcontain}>
      <div className={s.listrow}>
        {data.map((v, i) => {
          const limitText = (text, maxLength) => {
            if (text && text.length > maxLength) {
              return text.slice(0, maxLength)
            }
            return text
          }
          const time = limitText(v.createAt, 10)

          return (
            <div key={i}>
              <div className={s.listcol}>
                <div className={s.listnum}>
                  <h3>訂單編號</h3>
                  <h3>{v.order_id}</h3>
                </div>
                <div className={s.listdivct}>
                  <div className={s.listdivct1}>
                    <div className={s.listdiv1}>
                      <h5 className={s.listdivtext}>訂單金額</h5>
                    </div>
                    <div className={s.listdiv1}>
                      <h5 className={s.listdivtext}>知音幣</h5>
                    </div>
                    <div className={s.listdiv1}>
                      <h5 className={s.listdivtext}>折價卷</h5>
                    </div>
                    <div className={s.listdiv1}>
                      <h5 className={s.listdivtext}>訂單狀態</h5>
                    </div>
                    <div className={s.listdiv1}>
                      <h5 className={s.listdivtext}>建立時間</h5>
                    </div>
                  </div>
                  <div className={s.listdivct2}>
                    <div className={s.listdiv}>
                      <h3 className={s.listdivtext}>${v.total_price}元</h3>
                    </div>
                    <div className={s.listdiv}>
                      <h4 className={s.listdivtext}>${v.use_token}元</h4>
                    </div>
                    <div className={s.listdiv}>
                      <h4 className={s.listdivtext}>{v.use_coupon}折</h4>
                    </div>
                    <div className={s.listtext}>
                      <h4 className={s.listdivtext1}>訂單成立</h4>
                    </div>
                    <div className={s.listdiv}>
                      <h4 className={s.listdivtext2}>{time}</h4>
                    </div>
                  </div>
                </div>
                <button
                  className={s.orderbtn}
                  onClick={() => {
                    handleSelectOrder(v.order_id)
                    opendetailhandle(i)
                  }}
                >
                  <h4>商品細節</h4>
                </button>
                <button
                  className={s.orderbtn}
                  onClick={() => {
                    handleSelectOrder(v.order_id)
                    openorderhandle(i)
                  }}
                >
                  <h4>寄件資料</h4>
                </button>
              </div>
              <div className={s.detaillocation}>
                {openedDetailIndex === i && <Orderdetail data1={data1} />}
                {openedOrderIndex === i && <Orderman data1={data1} />}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
