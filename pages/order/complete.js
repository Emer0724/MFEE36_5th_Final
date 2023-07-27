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
const style3 = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    marginBottom: "100px",
    marginTop: "100px",
    gap:"60px",
    color:"var(--color2)"
}


  return (
    <>
      <OrderState/>
      <div style={style2}>
        <div style={style3}>
            <h1>訂單已完成</h1>
            <h3>等候5-7個工作天幫您送達</h3>
            <h3>感謝您的支持</h3>
            <h1>訂單編號#987654</h1>
        </div>
        <div style={style1}>
            <DeepButton DeepButtoncontent={"訂單查詢"} route='../dashboard/order'/>
            <DeepButton DeepButtoncontent={"返回商城"} route='../product/'/>
        </div>
      </div>
    </>
  )
}
