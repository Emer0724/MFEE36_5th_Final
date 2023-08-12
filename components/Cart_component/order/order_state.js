import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import cartIconS from "@/assets/Order_image/cart.svg"
import writeIconS from "@/assets/Order_image/write.svg"
import handIconS from "@/assets/Order_image/hand.svg"
import styles from "@/components/Cart_component/order/orderIcon.module.css"
import arrow from "@/assets/Order_image/Arrow1.svg"
import payIconS from "@/assets/Order_image/pay.svg"
import bookIconS from "@/assets/Order_image/bokk.svg"
import { useRouter } from 'next/router'

export default function OrderIcon() {
  const [icon,setIcon]=useState(cartIconS)
  const router = useRouter()
  const currentPath = router.pathname
  const iconrouter = ['/product/cart','/order','/order/productcheck','/order/checkout','/order/complete']
  const StateIcon =[cartIconS,writeIconS,bookIconS,payIconS,handIconS]
  const StateName = ["購物車","資料填寫","商品確認","結帳處理","訂單完成"]
  const length = StateName.length
  const result = iconrouter.indexOf(currentPath)


  
  useEffect(()=>{
    if(result===0){
      setIcon(cartIconS)
    }else if(result===1){
      setIcon(writeIconS)
    }else if(result===2){
      setIcon(bookIconS)
    }else if(result===3){
      setIcon(payIconS)
    }else{
      setIcon(handIconS)
    }
  },[currentPath])
  return (
    <>
      <div className={styles.OrderStateContain}>
          {StateIcon.map((v,i)=>{
            const v2 = StateName[i]
              if(i !== length-1) {
              return(
                <div className={styles.OrderStateblock} key={i}>
                  <div className={styles.OrderStateDiv}>
                    <div className={`${styles.OrderStateCircle} ${icon===v?styles.orderstateani:''}`}>
                      <Image  src={v} width={40} height={40} alt='icon'/>
                    </div>
                    <div className={styles.OrderStateText}>
                        <h3>{v2}</h3>
                    </div>
                  </div>
                  <div className={styles.OrderStateArrow}>
                    <Image src={arrow} width={100} height={20}  alt='icon'/>
                  </div>
                </div>
              ) 
              }else{
                return(
                <div className={styles.OrderStateDiv} key={i}>
                  <div className={`${styles.OrderStateCircle} ${icon===v?styles.orderstateani:''}`}>
                    <Image  src={v} width={60} height={60} alt='icon'/>
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
