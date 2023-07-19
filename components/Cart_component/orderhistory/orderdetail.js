import React from 'react'
import s from '@/components/Cart_component/orderhistory/orderdetail.module.css'
import fake from "@/assets/Cart_Image/fake.svg"
import Image from 'next/image'

export default function orderdetail() {
    const product = [
        {Productname:"買了好多貴死人",
          ISBN:98997203123,
          img:123,
          price:199,
          count:1,
        },
       {  Productname:"我就喜歡花錢",
          ISBN:98997203123,
          img:123,
          price:199,
          count:1,
        } ,
        {Productname:"專題做不完",
          ISBN:98997203123,
          img:123,
          price:199,
          count:1,
        },
        {
          Productname:"我不行,別人也不行,爽啦!",
          ISBN:98997203123,
          img:123,
          price:199,
          count:1,
      }
    ]
  return (
    <div className={s.detailcontain}>
      <div className={s.detailrow}>
        {product.map((v,i)=>{
            return(
                <div className={s.detaillist1}>
                    <div className={s.detailphoto}><Image src={fake} alt='icon' className={s.detailimg}/></div>
                    <div className={s.detaillist2}>
                        <h5 className={s.detailname}>{v.Productname}</h5>
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
