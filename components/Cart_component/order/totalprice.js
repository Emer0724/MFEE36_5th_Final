import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import React from 'react'
import { useState,useEffect } from 'react'

export default function OrderTotalPrice({btncontent,border1,route1}) {
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
    flexDirection: "column",
    justifyContent:"space-around",
    alignItems:"center",
    borderRadius:"8px",
    width: windowWidth && windowWidth > 600 ? '500px' : '100%',
    height: '550px',
    padding:"20px",
    border:border1,
    marginBottom:"60px"
  }
  const style2 = {
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    gap:"90px"
  }
  
  
  const subprice =["商品金額","貨運費用","折價卷","知音幣","總金額"]
  const price =[5000,"+60","-100",4960]
  return (
    <div style={style1} >
        <div><h1>訂單金額</h1></div>
          {subprice.map((v,i)=>{
              const v2 = price[i]
              return(
                <div style={style2} key={i}>
                    <h3 >{v}</h3>
                    <h4 >${v2}</h4>
              </div>
            )
          })}
        <DeepButton  DeepButtoncontent={btncontent} route={route1}/>
    </div>
  )
}
