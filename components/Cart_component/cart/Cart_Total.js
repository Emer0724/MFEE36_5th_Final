import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import LightButton from '@/components/common/CBtn/LightGreenBtn';
import React, { useState } from 'react'
import styles from "@/components/Cart_component/cart/CartTotal.module.css"

export default function CartTotal() {
   const [showCouponMenu, setShowCouponMenu] = useState(false);
   const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
   const [selectedCouponOption, setSelectedCouponOption] = useState('$0');
   const [selectedCurrencyOption, setSelectedCurrencyOption] = useState('$0');
 
   const toggleCouponMenu = () => {
      setShowCouponMenu((prev) => !prev);
      setShowCurrencyMenu(false);
    };
  
    const toggleCurrencyMenu = () => {
      setShowCurrencyMenu((prev) => !prev);
      setShowCouponMenu(false);
    };
  
    const handleCouponOptionSelect = (option) => {
      setSelectedCouponOption(option);
      setShowCouponMenu(false);
    };
  
    const handleCurrencyOptionSelect = (option) => {
      setSelectedCurrencyOption(option);
      setShowCurrencyMenu(false);
    };
 
   const couponOptions = ['8折', '9折', '95折']; 
   const currencyOptions = ['$100', '$200', '$500']; 

  return (
    <div className={styles.CartTotalContain}>
      <div className={styles.CartTotalcol}>
         <div className={styles.CartTotalTitle1}>
            <h1 className={styles.CartTotalTitle}>訂單金額</h1>
         </div>
         <div className={styles.CartTotaldiv}>
            <div className={styles.CartTotalname}>
               <h2 className={styles.CartTotalPriceItem1}>商品金額</h2>
               <h3 className={styles.CartTotalCoupontext1}>折價卷</h3>
               <h3 className={styles.CartTotalCurrencytext1}>知音幣</h3>
            </div>
            <div className={styles.CartTotalprice}>
               <h2 className={styles.CartTotalPriceItem2}><span className={styles.totalprice}>5000</span></h2>
               <h3 className={styles.CartTotalCoupontext2}>{selectedCouponOption}</h3>
               <h3 className={styles.CartTotalCurrencytext2}>{selectedCurrencyOption}</h3>
            </div>
         </div>
         <div className={styles.CartTotalbtn}>
             <LightButton lightbtncontent='使用折價卷' onClick={toggleCouponMenu}/>
             <LightButton lightbtncontent='使用知音幣' onClick={toggleCurrencyMenu}/>
         </div>
         <div className={styles.btnmeundiv}>
         {showCouponMenu && (
                  <div className={styles.menuStyle}>
                     {couponOptions.map((option, index) => (
                        <div key={index} className={styles.options}  onClick={() => handleCouponOptionSelect(option)}>
                        {option}
                        </div>
                     ))}
                  </div>
                  )}
         {showCurrencyMenu && (
                  <div className={styles.menuStyle}>
                     {currencyOptions.map((option, index) => (
                        <div key={index} className={styles.options}  onClick={() => handleCurrencyOptionSelect(option)}>
                        {option}
                        </div>
                     ))}
                  </div>
                  )}
         </div>
         <div className={styles.CartTotalBtnNext}>
            <DeepButton DeepButtoncontent='下一步，前往付款' route="/order" />
         </div>
      </div>
   </div>
  )
}
