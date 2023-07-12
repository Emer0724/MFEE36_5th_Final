import React from 'react'
const blockstyle = {
  display:"flex",
  flexDirection: "column",
  justifyContent:"space-around",
  alignItems:"center",
  marginBottom:"100px",
  
}
const labelstyle = {
  fontSize:"20px"
}
const inputstyle = {
  width:"350px",
  height:"60px",
  borderRadius:"8px",
  border:"1px solid #52796F",
  background:"#EEEEEE",
  padding:"5px",
  fontSize:"20px"
}


export default function OrderInput({labelcontent,type}) {
  return (
    <>
      <div style={blockstyle}>
        <label style={labelstyle}>{labelcontent}</label>
        <input type={type} style={inputstyle} required/>
      </div>
    </>
  )
}
