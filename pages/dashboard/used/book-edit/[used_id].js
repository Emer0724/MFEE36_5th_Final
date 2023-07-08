import React, { useState } from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import UsedInfoExchange from '@/components/used/chk-msg/usedid/used-info-exchange'
const book_info = {
  used_id: 18,
  ISBN: 9789861371955,
  book_name: '被討厭的勇氣：自我啟發之父「阿德勒」的教導',
  status: '',
  state: '2',
  price: '',
  img: 'getImage.webp',
  updated: '20230708',
  node: ''
}

//暫定 1.待兌換 2.代收書 3.退回 4.已兌換
const newdata = {...book_info}
if (newdata.state === '1') {
  newdata.state = '待兌換'
} else if (newdata.state === '2') {
  newdata.state = '待收書'
} else if (newdata.state === '3') {
  newdata.state = '退回'
} else if (newdata.state === '4') {
  newdata.state = '已兌換'
}
console.log(newdata)
export default function Usedid() {
  const [bookInfo, setbookInfo] = useState(book_info)
  return (
    <>
      <MemberNav />
      <div className="container-fliuid ">
        <div className="row">
          <div className="col-12   col-md-6   d-flex flex-column  align-items-center  ">
            <h3 className="textp-24px my-5 text-center">{bookInfo.book_name}</h3>
            <div
              className="color-bg-6 my-5 "
              style={{
                width: 200,
                height: 200,
                background: `url('/img/${bookInfo.img}')`,
                backgroundSize: 'contain',
              }}
            ></div>
          </div>
          <div className="col-12  col-md-6  border-start border-black d-flex  flex-column  align-items-center justify-content-center used-usededit-member-1  ">
            <div className='d-flex flex-column used-usededit-member-2    '>
            <div className='textp-20px letter-spacing mt-3'>ISBN:{newdata.ISBN}</div>
            {newdata.status !== '' ? <div className='textp-20px letter-spacing mt-3'>書況評級:{newdata.status}</div> : ''}
             <div className='textp-20px letter-spacing mt-3'>狀態:{newdata.state}</div> 
             {newdata.price !== '' ? <div className='textp-20px letter-spacing mt-3'>可換代幣:{newdata.price}</div> : ''}
             {newdata.node !== '' ? <div className='textp-20px letter-spacing mt-3'>書況備註:{newdata.node}</div> : ''}
             <div className='textp-20px letter-spacing mt-3'>新增時間:{newdata.updated}</div> 
             </div>
             {newdata.status===''?  <div className='d-flex  w-100  justify-content-center my-5 ' >
             
             <button className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing me-5">
           我要取消 
          </button>

          </div> : <div className='d-flex  w-100  justify-content-center my-5 ' >
             
             <button className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing me-5">
            確定兌換
          </button>
          <button className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing">
            取消兌換
          </button>
          </div>}
             {/* <div className='d-flex  w-100  justify-content-center my-5 ' >
             
             <button className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing me-5">
            確定兌換
          </button>
          <button className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing">
            取消兌換
          </button>
          </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
