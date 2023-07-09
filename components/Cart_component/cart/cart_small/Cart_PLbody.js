import React, { useState } from 'react'
import Image from 'next/image'
import Trash from "@/assets/Nav_Image/trashcan.svg"
import styles from "@/components/Cart_component/cart/cart_small/Cart_PLBody.module.css"
import fake from "@/assets/Cart_Image/fake.svg"

export default function CartPLbody() {


const [cut , setcut] = useState('Countcut')

const Countcut = {
  textAlign: "center",
  border: "1px solid black",
  width:"30px",
  backgroundColor: "var(--bgc7)"
}

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
    <tbody>
    {product.map((v,i)=>{
        return(
        <tr key={i}>
            <td className={styles.ProdeuctBlock}><Image src={fake}/>{v.Productname}</td>
            <td className={styles.ProdeuctBlock}>{v.ISBN}</td>
            <td className={styles.ProdeuctBlock}>{v.price}</td>
            <div className={styles.CountBlock}>
                <div className={styles.Countcut}>-</div>
                <div className={styles.Countvalue}>{v.count}</div>
                <div className={styles.Countplus}>+</div>
              </div>
            <td className={styles.ProdeuctBlock}>{v.price*v.count}</td>
            <td className={styles.ProdeuctBlock}><Image src={Trash} width={40} height={40}/></td>
        </tr>)
    })}
    </tbody>
  )
}
