import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import LightButton from '@/components/common/CBtn/LightGreenBtn'
import React from 'react'
import styles from "@/components/Cart_component/cart/CartTotal.module.css"

export default function CartTotal() {
  return (
    <div className={styles.CartTotalContain}>
      <div className={styles.CartTotalcol}>
         <div>
            <h1 className={styles.CartTotalTitle}>訂單金額</h1>
         </div>
         <div className={styles.CartTotalPrice}>
            <h2 className={styles.CartTotalPriceItem1}>商品金額</h2>
            <h2 className={styles.CartTotalPriceItem2}>$5000</h2>
         </div>
         <div className={styles.CartTotalCouponPrice}>
            <h2 className={styles.CartTotalCoupontext1}>折價卷</h2>
            <h2 className={styles.CartTotalCoupontext2}>$100</h2>
         </div>
         <div className={styles.CartTotalCouponPrice}>
            <h2 className={styles.CartTotalCoupontext1}>知音幣</h2>
            <h2 className={styles.CartTotalCoupontext2}>100</h2>
         </div>
         <div className={styles.CartTotalBtnNext}>
             <LightButton lightbtncontent='使用折價卷'/>
            <DeepButton DeepButtoncontent='下一步，前往付款'/>
         </div>
      </div>
   </div>
  )
}
