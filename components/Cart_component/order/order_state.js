import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import cartIconS from "@/assets/Order_image/cart.svg"
import writeIconS from "@/assets/Order_image/write.svg"
import handIconS from "@/assets/Order_image/hand.svg"
import styles from "@/components/Cart_component/order/orderIcon.module.css"
import arrow from "@/assets/Order_image/Arrow1.svg"
import { useRouter } from 'next/router'

export default function OrderIcon({}) {
  const [icon,setIcon]=useState()
  const router = useRouter()
  const currentPath = router.pathname
  const iconrouter = ['/product/cart','/order','/order/productcheck','/order/checkout','/order/complete']
  const StateIcon =[cartIconS,writeIconS,handIconS]
  const StateName = ["購物車","資料填寫","付款完成"]
  const length = StateName.length
  
  console.log(currentPath)
  // const result = iconrouter.filter((v)=>{
  //   return currentPath === v;
  // }).map((v, index)=> index);
  let index = 0;
  const result =iconrouter.map((v,i)=>{
    if(currentPath==v){
      index = i
      return i;
    }
  })
  console.log(index)

  useEffect(()=>{
    if(index===0){
      setIcon(cartIconS)
    }else if(index===4){
      setIcon(handIconS)
    }else{
      setIcon(writeIconS)
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
                      <Image  src={v} width={60} height={60} alt='icon'/>
                    </div>
                    <div className={styles.OrderStateText}>
                        <h3>{v2}</h3>
                    </div>
                  </div>
                  <div className={styles.OrderStateArrow}>
                    <Image src={arrow} width={150} height={20}  alt='icon'/>
                  </div>
                </div>
              ) 
              }else{
                return(
                <div className={styles.OrderStateDiv} key={i}>
                  <div className={styles.OrderStateCircle}>
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
