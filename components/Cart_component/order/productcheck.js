import React from 'react'
import Image from 'next/image'
import fake from "@/assets/Cart_Image/fake.svg"
import styles from "@/components/Cart_component/order/productcheck.module.css"

export default function ProductCheck() {

    //localstoage 來繼承購物車的購買紀錄 or直接讀取存入的資料庫

    const product = [
        {Productname:"書不起",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
        },
       {  Productname:"書不起1",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
        } ,
        {Productname:"書不起2",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
        },
        {
          Productname:"書不起3",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
      }
    ]
  return (
    <div className={styles.checkcontain}>
        {product.map((v,i)=>{
            return(
            <div key={i} className={styles.checkrow}>
                <div className={styles.checklist}>
                    <p className={styles.checkname}><Image src={fake} alt='icon'/>{v.Productname}</p>
                    <p className={styles.checkisbn}>{v.ISBN}</p>
                    <p className={styles.checkprice}>${v.price}</p>
                    <p className={styles.checkcount}>{v.count}</p>
                    <p className={styles.checktotal}>${v.price*v.count}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
}
