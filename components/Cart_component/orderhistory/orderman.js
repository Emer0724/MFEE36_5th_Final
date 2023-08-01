import { useEffect } from 'react'
import s from '@/components/Cart_component/orderhistory/orderdetail.module.css'

export default function orderman({data1}) {

  return (
    <div className={s.detailcontain}>
      <div className={s.detailrow}>
      {data1.map((v,i)=>{
            return(
                <div className={s.detaillist1} key={i}>
                    <div className={s.detaillist}>
                        <h5 className={s.detailisbn}>訂單姓名:{v.customer_name}</h5>
                        <h5 className={s.detailisbn}>訂單電話:{v.customer_phone}</h5>
                        <h5 className={s.detailisbn}>訂單地址:{v.customer_address}</h5>
                        <h5 className={s.detailprice}>訂單方式:{v.paymethod}</h5>
                        <h5 className={s.detailcount}>物流方式:{v.shipping}</h5>
                        <h5 className={s.detailtotal}>貨運費用:{v.shipping_cost}</h5>
                        <h5 className={s.detailtotal}>寄貨門市:{v.store}</h5>
                    </div>
                </div>
        )
        })}
      </div>
    </div>
  )
}
