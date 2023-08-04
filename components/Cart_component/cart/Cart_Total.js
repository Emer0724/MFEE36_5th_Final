import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import LightButton from '@/components/common/CBtn/LightGreenBtn';
import React, { useState,useEffect, use } from 'react'
import styles from "@/components/Cart_component/cart/CartTotal.module.css"
import { useRouter } from 'next/router';

export default function CartTotal({data,totalAmount}) {
   const [coupon, setCoupon] = useState({});
   const [usetoken, setusetoken] = useState({});
   const member1 = data[0].member_id
   

   
   useEffect(() => {
   fetch(`${process.env.API_SERVER}/cart/cart/coupon?member=${member1}`)
   .then((r) => r.json())
   .then((coupon) => {
      setCoupon(coupon);
   });

   fetch(`${process.env.API_SERVER}/cart/cart/usetoken?member=${member1}`)
   .then((r) => r.json())
   .then((usetoken) => {
      setusetoken(usetoken);
   });
   }, []);

   const [showCouponMenu, setShowCouponMenu] = useState(false);
   const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
   const [selectedCouponOption, setSelectedCouponOption] = useState(0);
   const [selectedCurrencyOption, setSelectedCurrencyOption] = useState(0);
   const [selectcoupon,setSelectcoupon] = useState(1)
   const [selectcouponid,setSelectcouponid] = useState(0)
   const [selectcouponmid,setSelectcouponmid] = useState(0)
   const [judgetotal,setJudgetotal] = useState(true)

   const router = useRouter();
   
   
   const toggleCouponMenu = () => {
      setShowCouponMenu((prev) => !prev);
      setShowCurrencyMenu(false);
   };

   const toggleCurrencyMenu = () => {
   setShowCurrencyMenu((prev) => !prev);
   setShowCouponMenu(false);
   };

   const handleCouponOptionSelect = (mid,id,coupon_discount) => {
   setSelectcouponmid(mid)
   setSelectcoupon(coupon_discount)
   setSelectcouponid(id)
   setSelectedCouponOption(Math.floor(totalAmount*(1-coupon_discount)));
   setShowCouponMenu(false);
   };

   const handleCurrencyOptionSelect = (option) => {
   if(totalAmount-selectedCouponOption<option){
      setJudgetotal(false);
      setShowCurrencyMenu(false);
      setSelectedCurrencyOption(option);
   }
   else{
   setSelectedCurrencyOption(option);
   setShowCurrencyMenu(false);
   setJudgetotal(true);}
   };

   const pricedata = {
   selectedCouponOption,
   selectedCurrencyOption,
   selectcoupon,
   selectcouponid,
   selectcouponmid
   };

   const handlebtn = ()=>{
      if(judgetotal===true){
      const pricedataJSON = JSON.stringify(pricedata)
      localStorage.setItem('pricedata',pricedataJSON)
      router.push('../order')}
   }

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
               <h2 className={styles.CartTotalPriceItem2}><span className={styles.price}>{totalAmount}</span></h2>
               <h3 className={styles.CartTotalCoupontext2}><span className={styles.price}>{selectedCouponOption}</span></h3>
               <h3 className={styles.CartTotalCurrencytext2}><span className={styles.price}>{selectedCurrencyOption}</span></h3>
            </div>
         </div>
         <div className={styles.CartTotalbtn}>
             <LightButton lightbtncontent='使用折價卷' onClick={toggleCouponMenu}/>
             <LightButton lightbtncontent='使用知音幣' onClick={toggleCurrencyMenu}/>
         </div>
         <div className={styles.btnmeundiv}>
         {showCouponMenu && (
                  <div className={styles.menuStyle}>
                     <div className={styles.options}  onClick={() => handleCouponOptionSelect(0,0,1)}>
                         不使用
                        </div>
                     {coupon.map((v, i) => (
                        <div key={i} className={styles.options}  onClick={() => handleCouponOptionSelect(v.coupon_mid,v.coupon_id,v.coupon_discount)}>
                        <span style={{display:"none"}}>{v.coupon_mid}{v.coupon_id}</span>{i+1}.{v.coupon_name}{v.coupon_discount+"折"}
                        </div>
                     ))}
                  </div>
                  )}
         {showCurrencyMenu && (
                  <div className={styles.menuStyle}>
                        <div className={styles.options}  onClick={() => handleCurrencyOptionSelect(0)}>
                         不使用
                        </div>
                        <div className={styles.options}  onClick={() => handleCurrencyOptionSelect(usetoken[0].token)}>
                          ${usetoken[0].token}
                        </div>
                    
                  </div>
                  )}
         </div>
            {judgetotal? "" : <h5 className={styles.warningtext} >折抵金額大於商品金額</h5>}
         <div className={styles.CartTotalBtnNext}>
            <DeepButton DeepButtoncontent='下一步，前往付款' onClick={handlebtn} />
         </div>
      </div>
   </div>
  )
}
