import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import CouponSelectMenu from '@/components/common/CBtn/Btnmenu';
import React, { useState } from 'react'
import styles from "@/components/Cart_component/cart/CartTotal.module.css"

export default function CartTotal() {
   const [btn1, setBtn1] = useState('使用折價卷');
   const [btn2, setBtn2] = useState('使用知音幣');
 
   const couponOptions = ['0','8折', '9折', '95折']; 
   const currencyOptions = ['0','$100', '$200', '$500']; 

  return (
    <div className={styles.CartTotalContain}>
      <div className={styles.CartTotalcol}>
         <div className={styles.CartTotalTitle1}>
            <h1 className={styles.CartTotalTitle}>訂單金額</h1>
         </div>
         <div className={styles.CartTotalPrice}>
            <h2 className={styles.CartTotalPriceItem1}>商品金額</h2>
            <h2 className={styles.CartTotalPriceItem2}><span className={styles.totalprice}>5000</span></h2>
         </div>
         <div className={styles.CartTotalCouponPrice}>
            <h2 className={styles.CartTotalCoupontext1}>折價卷</h2>
            <h4 className={styles.CartTotalCoupontext2}><CouponSelectMenu lightbtncontent={btn1} options={couponOptions} /></h4>
         </div>
         <div className={styles.CartTotalCouponPrice}>
            <h2 className={styles.CartTotalCoupontext1}>知音幣</h2>
            <h4 className={styles.CartTotalCoupontext2}><CouponSelectMenu lightbtncontent={btn2} options={currencyOptions} /></h4>
         </div>
         <div className={styles.CartTotalBtnNext}>
            <DeepButton DeepButtoncontent='下一步，前往付款' route="/order" />
         </div>
      </div>
   </div>
  )
}
