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
                        <h5 className={s.detailname}>{v.book_name}</h5>
                        <h5 className={s.detailisbn}>{v.ISBN}</h5>
                        <h5 className={s.detailprice}>${v.price}元</h5>
                        <div><h5 className={s.detailcount}>x{v.count}</h5></div>
                        <h5 className={s.detailtotal}>共${v.price*v.count}元</h5>
                    </div>
                </div>
        )
        })}
      </div>
    </div>
  )
}
