import s from '@/components/Cart_component/orderhistory/orderdetail.module.css'

export default function orderman({data1}) {
const d = data1[0]

  return (
    <div className={s.detailcontain}>
      <div className={s.detailrow}>
        <div className={s.detaillist1}>
            <div className={s.detaillist}>
                <h5 className={s.detailisbn}>訂單姓名:{d.customer_name}</h5>
                <h5 className={s.detailisbn}>訂單電話:{d.customer_phone}</h5>
                <h5 className={s.detailisbn}>訂單地址:{d.customer_address}</h5>
                <h5 className={s.detailprice}>訂單方式:{d.paymethod}</h5>
                <h5 className={s.detailcount}>物流方式:{d.shipping}</h5>
                <h5 className={s.detailtotal}>貨運費用:{d.shipping_cost}</h5>
                <h5 className={s.detailtotal}>寄貨門市:{d.store}</h5>
            </div>
        </div>
      </div>
    </div>
  )
}
