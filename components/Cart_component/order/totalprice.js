import DeepButton from '@/components/common/CBtn/DeepgreenBtn'
import { max } from 'lodash'
import React from 'react'
const style1 = {
  display:"flex",
  flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center",
  borderRadius:"8px",
  width:"500px",
  height:"550px",
  padding:"20px",
  border:"1px solid #52796F"
}
const style2 = {
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center"
}
const style3 = {marginRight:"40px"}
const style4 = {marginLeft:"40px"}


export default function OrderTotalPrice({btncontent}) {
    const subprice =["商品金額","貨運費用","折價卷","總金額"]
    const price =[5000,"+60","-100",4960]
  return (
    <div style={style1}>
        <div><h1>訂單金額</h1></div>
          {subprice.map((v,i)=>{
              const v2 = price[i]
              return(
                <div style={style2} key={i}>
                    <h3 style={style3}>{v}</h3>
                    <h4 style={style4}>${v2}</h4>
              </div>
            )
          })}
        <DeepButton  DeepButtoncontent={btncontent}/>
    </div>
  )
}
