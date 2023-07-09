import React from 'react'
const blockstyle = {
  display:"flex",
  flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center",
  marginBottom:"150px",
}
const inputstyle = {
  width:"350px",
  height:"60px",
  borderRadius:"8px",
  border:"1px solid #52796F"
}


export default function OrderInput({labelcontent,type}) {
  return (
    <>
      <div>
        <label >{labelcontent}</label>
        <input type={type} />
      </div>
    </>
  )
}
