import React from 'react'
import Image from 'next/image'
import fake from "@/assets/Cart_Image/fake.svg"

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
    <div>
        {product.map((v,i)=>{
            return(
            <div key={i}>
                <div><Image src={fake} alt='icon'/></div>
                <div>
                    <p>{v.Productname}</p>
                    <p>{v.ISBN}</p>
                    <p>{v.price*v.count}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
}
