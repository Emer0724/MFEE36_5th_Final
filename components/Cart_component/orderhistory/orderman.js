import s from '@/components/Cart_component/orderhistory/orderman.module.css'

export default function orderman({data1}) {
    if (!data1 || data1.length === 0) {
        return <div>訂單資料載入中</div>;
      }
console.log(data1);
const d = data1[0]
console.log(d);
const storejudge = d.choosestore;
const paymentjudge = d.paymethod;
const shipjudge = d.shipping;
console.log(shipjudge==1);



  return (
    <div className={s.detailcontain}>
      <div className={s.detailrow}>
        <div className={s.detaillist1}>
            <div className={s.detaillist}>
                <h4 className={s.detailname}>訂單姓名:  {d.customer_name}</h4>
                <h4 className={s.detailphone}>訂單電話:  {d.customer_phone}</h4>
                {storejudge.length>0
                ?
                <h4 className={s.detailstore}>寄貨門市:  {d.choosestore}</h4>
                :
                <h4 className={s.detailaddress}>訂單地址:  {d.customer_address}</h4>
                }
            </div>
            <div className={s.detaillist}>
                {paymentjudge===1
                ?
                <h4 className={s.detailprice}>付款方式:  信用卡</h4>
                :
                <h4 className={s.detailprice}>訂單方式:  linepay</h4>
                }
                {shipjudge==1
                ?
                <>
                <h4 className={s.detailcount}>物流方式:  宅配</h4>
                <h4 className={s.detailtotal}>貨運費用:  $100</h4>
                </>
                :
                <>
                <h4 className={s.detailcount}>物流方式:  全家取貨</h4>
                <h4 className={s.detailtotal}>貨運費用:  $60</h4>
                </>
                }  
            </div>
        </div>
      </div>
    </div>
  )
}
