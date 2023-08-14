import s from '@/components/Cart_component/orderhistory/orderman.module.css'

export default function orderman({ data1 }) {
  if (!data1 || data1.length === 0) {
    return <div>訂單資料載入中</div>
  }
  const d = data1[0]
  const storejudge = d.choosestore
  const shipjudge = d.shipping

  return (
    <div className={s.detailcontain}>
      <div className={s.detailrow}>
        <div className={s.detaillist1}>
          <div className={s.detaillist}>
            <h5 className={s.detailname}>訂單姓名:</h5>
            <h5 className={s.detailphone}>訂單電話:</h5>
            {storejudge.length > 0 ? (
              <h5 className={s.detailstore}>寄貨門市:</h5>
            ) : (
              <h5 className={s.detailaddress}>訂單地址:</h5>
            )}

            <h5 className={s.detailprice}>付款方式:</h5>

            {shipjudge == 1 ? (
              <>
                <h5 className={s.detailcount}>物流方式:</h5>
                <h5 className={s.detailtotal}>貨運費用:</h5>
              </>
            ) : (
              <>
                <h5 className={s.detailcount}>物流方式:</h5>
                <h5 className={s.detailtotal}>貨運費用:</h5>
              </>
            )}
          </div>
          <div className={s.detaillist}>
            <h5 className={s.detailname}>{d.customer_name}</h5>
            <h5 className={s.detailphone}>{d.customer_phone}</h5>
            {storejudge.length > 0 ? (
              <h5 className={s.detailstore}>{d.choosestore}</h5>
            ) : (
              <h5 className={s.detailaddress}>{d.customer_address}</h5>
            )}
            <h5 className={s.detailprice}>信用卡</h5>
            {shipjudge == 1 ? (
              <>
                <h5 className={s.detailcount}>宅配</h5>
                <h5 className={s.detailtotal}>$100</h5>
              </>
            ) : (
              <>
                <h5 className={s.detailcount}>全家取貨</h5>
                <h5 className={s.detailtotal}>$60</h5>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
