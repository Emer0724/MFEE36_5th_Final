import React from 'react'
import Image from 'next/image'
import cartIconS from "@/assets/Order_image/cart.svg"
import writeIconS from "@/assets/Order_image/write.svg"
import handIconS from "@/assets/Order_image/hand.svg"
import styles from "@/components/Cart_component/order/order_small/orderIcon.module.css"
import arrow from "@/assets/Order_image/Arrow1.svg"

export default function OrderIcon({}) {
  const StateIcon =[cartIconS,writeIconS,handIconS]
  const StateName = ["購物車","資料填寫","付款完成"]
  const length = StateName.length
  console.log(length);
  return (
    <>
      <div className={styles.OrderStateContain}>
          {StateIcon.map((v,i)=>{
            const v2 = StateName[i]
              if(i !== length-1) {
              return(
                <div className={styles.OrderStateblock}>
                  <div className={styles.OrderStateDiv}>
                    <div className={styles.OrderStateCircle}>
                      <Image key={i} src={v} width={60} height={60}/>
                    </div>
                    <div className={styles.OrderStateText}>
                        <h3>{v2}</h3>
                    </div>
                  </div>
                  <div className={styles.OrderStateArrow}>
                    <Image src={arrow} width={150} height={20}/>
                  </div>
                </div>
              ) 
              }else{
                return(
                <div className={styles.OrderStateDiv}>
                  <div className={styles.OrderStateCircle}>
                    <Image key={i} src={v} width={60} height={60}/>
                  </div>
                  <div className={styles.OrderStateText}>
                      <h3>{v2}</h3>
                  </div>
                </div>
              )}
          })
          }
      </div>
    </>
  )
}
