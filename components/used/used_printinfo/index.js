import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function UsedPintInfo({usedPrintInfo,memberinfo,printref}) {
    console.log(usedPrintInfo)
    console.log(memberinfo)
  return (
    <div ref={printref} className='mx-2'>
    <div
      className={`textp-32px letter-spacing fw-bold  text-center    `}
    >
      二手書資訊
    </div>
    <table className="table mt-3">
  <thead>
    <tr>
      <th className='col-1 text-center' >序號</th>
      <th className='col-2 text-center'>上架流水號</th>
      <th className='col-2 text-center'>ISBN</th>
      <th className='col-6 text-center'>書名</th>
    </tr>
  </thead>
  <tbody>
    {usedPrintInfo.map((v,i)=>{
        return(<tr key={v.used_id}>
            <th className='text-center' >{i+1}</th>
            <td className='text-center'>{v.used_id}</td>
            <td className='text-center'>{v.ISBN}</td>
            <td className='ps-5'>{v.book_name}</td>
          </tr>)
    
    })}
    
   
  </tbody>
</table>
    <div className='d-flex justify-content-between '>
        <div className='ms-3'>
    <div
      className={`textp-20px mt-3 pb-1 letter-spacing  `}
    >
      會員名稱: {memberinfo.name}
    </div>
    <div
      className={`textp-20px mt-3 pb-1 letter-spacing   `}
    >
      Email: {memberinfo.email}
    </div>
    <div
      className={`textp-20px mt-3 pb-1 letter-spacing   `}
    >
      地址: {memberinfo.city + memberinfo.district + memberinfo.address}
    </div>
    <div className={`textp-20px mt-3 pb-1 letter-spacing  `}>
      **請列印上表資訊並與該二手書一同寄回
      106台北市大安區復興南路一段390號2樓
    </div>
    </div>
    <div
      className={`d-flex justify-content-end me-5 qr-code 
       mt-3`}
    >
      <QRCodeSVG value={123213} />
    </div>
    </div>
  </div>
  )
}
