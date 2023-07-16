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
const selectstyle = {
    width:"350px",
    height:"60px",
    borderRadius:"8px",
    border:"1px solid #52796F"
}

export default function OrderFormrderSelect({selectmethod,option1,option2,onChange}) {
  return (
      <div style={blockstyle}>
        <label style={labelstyle}>{selectmethod}</label>
        <select style={selectstyle} onChange={onChange}>
            <option>{option1}</option>
            <option>{option2}</option>
        </select>
      </div>
  )
}
