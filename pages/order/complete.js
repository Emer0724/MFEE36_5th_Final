import s from '@/pages/order/complete.module.css'
import OrderState from '@/components/Cart_component/order/order_state'
import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import countContext from '@/context/countContext'

export default function complete() {
  const router = useRouter()
  const [windowWidth, setWindowWidth] = useState(null)
  const [waternum, setWaternum] = useState(0)
  const { getcount, setcount, count } = useContext(countContext)

  useEffect(() => {
    const storedData1 = localStorage.getItem('auth')
    const formData1 = JSON.parse(storedData1)
    const member1 = formData1.member_id
    console.log(member1)

    const storedformData = localStorage.getItem('formData')
    const formData = JSON.parse(storedformData)

    const storedcountData = localStorage.getItem('pricedata')
    const countData = JSON.parse(storedcountData)

    const storedpriceData = localStorage.getItem('pricefinal')
    const pricefinal = JSON.parse(storedpriceData)
    //以上處理localstorage的東西

    const allData = { formData, countData, pricefinal, member1 }
    //在匯集一起送後端
    if (formData != null) {
      fetch(`${process.env.API_SERVER}/cart/cart/complete`, {
        method: 'POST',
        body: JSON.stringify(allData),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((r) => r.json())
        .then((result) => {
          setWaternum(result.order_id)
          getcount().then((data) => setcount(data))
          //取得創建的流水碼
          localStorage.removeItem('formData')
          localStorage.removeItem('pricedata')
          localStorage.removeItem('pricefinal')
          //清空localstorage
        })
        .catch((error) => console.error('Fetch Error:', error))
    }
  }, [])
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60px',
    gap: windowWidth && windowWidth > 600 ? '230px' : '80px',
  }

  const style2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '100px',
  }
  const style3 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '100px',
    marginTop: '100px',
    gap: '60px',
    color: 'var(--color2)',
  }

  const btn1 = () => {
    router.push('../dashboard/order')
  }
  const btn2 = () => {
    router.push('../product/')
  }

  return (
    <>
      <OrderState />
      <div style={style2}>
        <div style={style3}>
          <h1>訂單已完成</h1>
          <h3>等候5-7個工作天幫您送達</h3>
          <h3>感謝您的支持</h3>
          <h1>訂單編號 #{waternum}</h1>
        </div>
        <div style={style1}>
          <DeepButton DeepButtoncontent={'訂單查詢'} onClick={btn1} />
          <DeepButton DeepButtoncontent={'返回商城'} onClick={btn2} />
        </div>
      </div>
    </>
  )
}
