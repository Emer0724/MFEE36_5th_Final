import CartTitle from '@/components/Cart_component/Cart_title'
import OrderForm from '@/components/Cart_component/order/order_form'
import OrderState from '@/components/Cart_component/order/order_state'
import OrderTotalPrice from '@/components/Cart_component/order/totalprice'
import React, { useState,useEffect } from 'react'
import styles from '@/pages/order/Orderindex.module.css'


export default function checkForm() {
  const [windowWidth, setWindowWidth] = useState(null);
  const [shippingMethod, setShippingMethod] = useState("宅配到家+100");
  const [paymentMethod, setPaymentMethod] = useState("linepay");
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");


  const handleFormSubmit = (event) => {
    event.preventDefault();}

    const formData = {
      shippingMethod,
      paymentMethod,
      recipientName,
      recipientPhone,
      recipientAddress,
    };


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  
  return (
    <>
        <OrderState/>
        <CartTitle className={styles.title} titlecontent={"選擇喜歡的寄送方式和付款方式吧"}/>
          <div className={styles.checkcontain}>
          <OrderForm onSubmit={handleFormSubmit}/>
          {windowWidth>600 ? <div>
          <OrderTotalPrice  border1={"1px solid #52796F"} />
          </div>:""
          }
        </div>
          
    </>
  )
}
