import React from 'react'

export default function CartPLhead() {
    const PLheader = ["產品","ISBN","價格","數量","小計","刪除"]
  return (
    <thead>
      <tr>
        {PLheader.map((v,i)=>{
        return(   
             <th key={i}  style={{textAlign: 'center'}}>{v}</th>
            )
        })}
        </tr>  
    </thead>
  )
}
