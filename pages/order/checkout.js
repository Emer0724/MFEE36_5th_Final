import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import s from "@/pages/order/checkout.module.css"
import logo from "@/assets/used-svg/LOGO_notext.svg"
import Image from 'next/image'
import ic from '@/assets/Cart_Image/ic.png'

export default function OrderCheckout() {
  const router = useRouter()
  

const [card1,setCard1] =useState("")
const [card2,setCard2] =useState("")
const [card3,setCard3] =useState("")
const [card4,setCard4] =useState("")
const [date1,setDate1] =useState("")
const [date2,setDate2] =useState("")
const [cvv, setCvv] = useState("");

const [iscardRight,setiscardRight] = useState(true)
const [IsMonthValid, setIsMonthValid] = useState(true);
const [IsYearValid, setIsYearValid] = useState(true);
const [isCvvValid, setIsCvvValid] = useState(true);

const judgecard= () => {
  const cardNumber = card1 + card2 + card3 + card4;
  const correctcard = /^[0-9]{13,16}$/;
  setiscardRight(correctcard.test(cardNumber));
};
const judgemonth= () => {
  const correctMonth = /^(0[1-9]|1[0-2])$/;
  setIsMonthValid(correctMonth.test(date1));
};
const judgeyear= () => {
  const correctYear = /^[0-9]{2}$/;
  setIsYearValid(correctYear.test(date2));
};
const judgecvv= () => {
  const correctCvv = /^[0-9]{3}$/; // 三位數的安全碼
  setIsCvvValid(correctCvv.test(cvv));
}

  const btnhandle = () =>{
    router.push("./complete")
  }
  return (
    <>
      <OrderState/>
      <CartTitle titlecontent={"付款完成後，就大功告成啦"} />
      <div className={s.container}>
        <div className={s.cardcontain}>
              <div className={s.card}>
                  <div className={s.cardcover}>
                    <div className={s.logocover}>
                      <Image src={logo} width={100} height={100} alt='icon' className={s.imgps}/>
                      <h3>book書易</h3>
                    </div>
                    <Image src={ic} width={90} height={60} alt='icon' className={s.imgic}/>
                    <div className={s.creditct}>
                      <div className={s.creditinput}>
                        <input type="text" className={s.creditstyle}  value={card1} readOnly/>-
                        <input type="text" className={s.creditstyle}  value={card2} readOnly/>-
                        <input type="text" className={s.creditstyle}  value={card3} readOnly/>-
                        <input type="text" className={s.creditstyle}  value={card4} readOnly/>
                      </div>
                    </div>
                  </div>
                  <div className={s.cardback}>
                      <div className={s.cardct}>
                            <div className={s.barcode}></div>
                          <div className={s.creditct2}>
                            <div className={s.datect}>
                                <label className={s.labelstyle1}>VAILDTHRU</label>
                                <div className={s.dateinput}>
                                  <input type="text" className={s.datestyle} value={date1} readOnly/>/
                                  <input type="text" className={s.datestyle} value={date2} readOnly/>
                                </div>
                            </div>
                            <div className={s.securect}>
                                <label className={s.labelstyle1}>CVV</label>
                                <input type="text" className={s.securestyle} value={cvv} readOnly/>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.realcardct}>
              <div className={s.realcreditct}>
                  <label className={s.labelstyle1}>卡號</label>
                  <div className={s.creditinput}>
                    <input type="text" className={s.creditstyle} onChange={(e) => setCard1(e.target.value)} onBlur={judgecard}  required/>-
                    <input type="text" className={s.creditstyle} onChange={(e) => setCard2(e.target.value)} onBlur={judgecard}  required/>-
                    <input type="text" className={s.creditstyle} onChange={(e) => setCard3(e.target.value)} onBlur={judgecard}  required/>-
                    <input type="text" className={s.creditstyle} onChange={(e) => setCard4(e.target.value)} onBlur={judgecard}  required/>
                  </div>
                  {iscardRight?"":<p className={s.alert}>請輸入正確卡號</p>}
              </div>
              <div className={s.realcreditct2}>
                <div className={s.datect}>
                    <label className={s.labelstyle1}>日期</label>
                    <div className={s.dateinput}>
                      <input type="text" className={s.datestyle} value={date1}  onChange={(e) => setDate1(e.target.value)} onBlur={judgemonth} required/>/
                      <input type="text" className={s.datestyle} value={date2}  onChange={(e) => setDate2(e.target.value)} onBlur={judgeyear} required/>
                    </div>
                    <div className={s.dateinput}>
                    {IsMonthValid?"":<p className={s.alert}>請輸入正確月份</p>}
                    {IsYearValid?"":<p className={s.alert}>請輸入正確年份</p>}
                    </div>
                </div>
                <div className={s.securect}>
                    <label className={s.labelstyle1}>安全碼</label> 
                    <input type="text" className={s.securestyle} value={cvv} onChange={(e) => setCvv(e.target.value)} onBlur={judgecvv}  required/>
                    <div>{isCvvValid?"":<p className={s.alert}>請輸入正確安全碼</p>}</div>
                    
                </div>
              </div>
                    
        </div>
      </div>
       
      
      <div className={s.btnfor1}>
          <DeepButton DeepButtoncontent={"完成付款"} onClick={btnhandle}/>
      </div>  
      
    </> )
}
