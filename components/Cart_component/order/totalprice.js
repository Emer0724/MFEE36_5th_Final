import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import React from 'react'
import { useState,useEffect } from 'react'
import coin from '@/assets/coin/coin.svg'

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
    marginBottom:windowWidth && windowWidth > 600 ?  "60px":"20px" 
  }
  const style2 = {
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    gap:windowWidth && windowWidth > 600 ?  "150px":"60px" 
  }
  const style3={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    marginBottom:"30px"
  }
  const style4={
    marginTop:"30px"
    
  }
  const coinimg =() =>{
    return
      <Image src={coin} width={15} height={15}/>
    
  }

  
  const subprice =["商品金額","貨運費用","折價卷","知音幣","總金額"]
  const price =["$5000","$60","$100",coinimg,"$4960"]
  return (
    <div style={style1} >
        <div><h1>訂單金額</h1></div>
        <div style={style2}>
          <div style={style3}>
            {subprice.map((v,i)=>{
              return (
                <h3 key={i} style={style4}>{v}</h3>
              )
            })}
          </div>
          <div style={style3}>
            {price.map((v,i)=>{
              return(
              <h3 key={i} style={style4}>{v}</h3>
              )
            })}
          </div>
        </div>
        <DeepButton  DeepButtoncontent={btncontent} route={route1}/>
    </div>
  )
}
