import s from '@/components/Cart_component/orderhistory/orderdetail.module.css'

export default function orderman({data1}) {
    if (!data1 || data1.length === 0) {
        return <div>Loading...</div>;
      }
console.log(data1);
const d = data1[0]
console.log(d);
const storejudge = d.choosestore;
const paymentjudge = d.paymethod;
const shipjudge = d.shipping;



  return (
    <div className={s.detailcontain}>
      <div className={s.detailrow}>
        <div className={s.detaillist1}>
            <div className={s.detaillist}>
                <h5 className={s.detailisbn}>訂單姓名:{d.customer_name}</h5>
                <h5 className={s.detailisbn}>訂單電話:{d.customer_phone}</h5>
                {storejudge.length>0
                ?
                <h5 className={s.detailtotal}>寄貨門市:{d.choosestore}</h5>
                :
                <h5 className={s.detailisbn}>訂單地址:{d.customer_address}</h5>
                }
                {paymentjudge===1
                ?
                <h5 className={s.detailprice}>付款方式:信用卡</h5>
                :
                <h5 className={s.detailprice}>訂單方式:linepay</h5>
                }
                {shipjudge===1
                ?
                <>
                <h5 className={s.detailcount}>物流方式:宅配</h5>
                <h5 className={s.detailtotal}>貨運費用:$100</h5>
                </>
                :
                <>
                <h5 className={s.detailcount}>物流方式:全家取貨</h5>
                <h5 className={s.detailtotal}>貨運費用:$60</h5>
                </>
                }  
            </div>
        </div>
      </div>
    </div>
  )
}
