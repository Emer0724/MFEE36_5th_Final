import React from 'react'
import s from '@/components/Cart_component/orderhistory/orderdetail.module.css'
import fake from "@/assets/Cart_Image/fake.svg"
import Image from 'next/image'

export default function orderdetail() {
    const product = [
        {Productname:"買了好多貴死人",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
        },
       {  Productname:"我就喜歡花錢",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
        } ,
        {Productname:"專題做不完",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
        },
        {
          Productname:"我不行,別人也不行,爽啦",
          ISBN:98997203,
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
                <div className={s.detaillist}>
                    <h3 className={s.checkimg}><Image src={fake} alt='icon'/>{v.Productname}</h3>
                    <h3 className={s.checkisbn}>{v.ISBN}</h3>
                    <h3 className={s.checkprice}>${v.price}元</h3>
                    <h3 className={s.checkcount}>{v.count}件</h3>
                    <h3 className={s.checktotal}>${v.price*v.count}元</h3>
                </div>
        )
        })}
      </div>
    </div>
  )
}
