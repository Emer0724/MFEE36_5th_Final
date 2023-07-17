import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import { useState,useEffect } from 'react'



export default function complete() {
    const [windowWidth ,setWindowWidth] = useState(null)
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

  const style1 = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"60px",
    gap: windowWidth && windowWidth > 600 ?"230px":"80px",
}

const style2 = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginBottom: "100px"
}


  return (
    <>
      <OrderState/>
      <div style={style2}>
          <CartTitle titlecontent={"訂單已完成 等候5-7個工作天幫您送達 感謝您的支持"}/>
          <CartTitle titlecontent={`訂單編號#987654`}/>
          <div style={style1}>
              <DeepButton DeepButtoncontent={"訂單查詢"}/>
              <DeepButton DeepButtoncontent={"返回商城"}/>
          </div>
      </div>
    </>
  )
}
