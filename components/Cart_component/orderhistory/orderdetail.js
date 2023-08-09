import s from '@/components/Cart_component/orderhistory/orderdetail.module.css'
import Image from 'next/image'

export default function orderdetail({data1}) {
  if (!data1 || data1.length === 0) {
    return <div>訂單資料載入中</div>;
  }

  return (
    <div className={s.detailcontain}>
      <div className={s.detailrow}>
        {data1.map((v,i)=>{
            return(
                <div className={s.detaillist1} key={i}>
                    <div className={s.detailphoto}><Image src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`} width={100} height={100} alt='icon' className={s.detailimg}/></div>
                    <div className={s.detaillist2}>
                    {v.status_id !== null
                        ?
                        <>
                        <h5 className={s.backisbn}>{v.ISBN}</h5>
                        <h5 className={s.backprice}>二手價${v.usedprice}元</h5>
                        <div><h5 className={s.backcount}>{v.count}</h5></div>
                        <h5 className={s.backtotal}>共${v.usedprice*v.count}元</h5>
                        </>
                        :
                        <>
                        <h5 className={s.backisbn}>{v.ISBN}</h5>
                        <h5 className={s.backprice}>${v.bookprice}元</h5>
                        <div><h5 className={s.backcount}>x{v.count}</h5></div>
                        <h5 className={s.backtotal}>共${v.bookprice*v.count}元</h5>
                        </>
                        }
                    </div>
                </div>
        )
        })}
      </div>
    </div>
  )
}
