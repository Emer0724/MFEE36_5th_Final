import {useEffect, useState} from 'react'
import s from "@/components/Cart_component/orderhistory/orderlist.module.css"
import Orderdetail from './orderdetail'
import Orderman from './orderman';

export default function orderlist() {
  const [openedDetailIndexes, setOpenedDetailIndexes] = useState(false);
  const [openedOrderIndexes, setOpenedOrderIndexes] = useState(false);
  const [data,setData] = useState([])
  const [data1,setData1] = useState([])

  const opendetailhandle = () => {
    setOpenedDetailIndexes((prev)=>!prev)
    setOpenedOrderIndexes(false)
  };

  const openorderhandle = () => {
    setOpenedOrderIndexes((prev)=>!prev)
    setOpenedDetailIndexes(false)

  };
  
    useEffect(() => {
      fetch(`${process.env.API_SERVER}/cart/order`)
        .then((r) => r.json())
        .then((result) => {
          setData(result);
        });
    }, []);
    const handleSelectOrder = (orderid) => {
      console.log(orderid);
      fetch(`${process.env.API_SERVER}/cart/orderdetail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderid }),
      })
      .then((r) => r.json())
      .then((result)=>{
      console.log(result);
        setData1(result);
      })
    }
    
  return (
    <div className={s.listcontain}>
       <div className={s.listrow}>
       {data.map((v,i)=>{
        return(
            <div key={i}>
                <div className={s.listcol} key={i}>
                      <div className={s.listnum}><h3>訂單編號</h3><h3>{v.order_id}</h3></div>
                      <div className={s.listdivct}>
                        <div>
                            <div className={s.listdiv}>
                                <h4>訂單日期</h4>
                            </div>
                            <div className={s.listdiv}>
                                <h4>訂單總金額</h4>
                              
                            </div>
                            <div className={s.listdiv}>
                                <h4>知音幣使用</h4>
                                
                            </div>
                            <div className={s.listdiv}>
                                <h4>折價卷使用</h4>
                              
                            </div>
                            <div className={s.listdiv}>
                                <h4>訂單狀態</h4>
                              
                            </div>
                        </div>
                        <div>
                            <div className={s.listdiv}>
                                <h5>{v.createAt}</h5>
                            </div>
                            <div className={s.listdiv}>
                                <h3>${v.total_price}元</h3>
                            </div>
                            <div className={s.listdiv}>
                                <h4>${v.use_token}元</h4>
                            </div>
                            <div className={s.listdiv}>
                                <h4>{v.use_coupon}折</h4>
                            </div>
                            <div className={s.listtext}>
                                <h4>訂單成立</h4>
                            </div>
                        </div>
                      </div>
                    <div className={s.orderbtn}><div onClick={() => { handleSelectOrder(v.order_id); opendetailhandle;}} className={s.orderbtntext}>商品細節</div></div>
                    <div className={s.orderbtn}><div onClick={() => { handleSelectOrder(v.order_id); openorderhandle; }} className={s.orderbtntext}>寄件資料</div></div>
                </div>
                <div className={s.detaillocation}>
                {openedDetailIndexes && <Orderdetail data1={data1} />}
                {openedOrderIndexes && <Orderman data1={data1} />}
                </div>
            </div>
        )
       })}
        
       </div>
    </div>
  )
}