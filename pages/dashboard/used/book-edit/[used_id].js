import React, { useEffect, useState } from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import UsedInfoExchange from '@/components/used/usedid/used-info-exchange'
import Link from 'next/link'
import MemberBreadcrumbs_2 from '@/components/Leo/member/member_breadcrumbs-2'
import Member_info from '@/components/Leo/member/member_info'
import { useRouter } from 'next/router'

const book_info = {
  used_id: 18,
  ISBN: 9789861371955,
  book_name: '被討厭的勇氣：自我啟發之父「阿德勒」的教導',
  status: '',
  state: '2',
  price: '456',
  img: 'getImage.webp',
  updated: '20230708',
  node: '',
}

//暫定 1.待兌換 2.代收書 3.退回 4.已兌換
// const newdata = { ...book_info }
// if (newdata.state === '1') {
//   newdata.state = '待兌換'
// } else if (newdata.state === '2') {
//   newdata.state = '待收書'
// } else if (newdata.state === '3') {
//   newdata.state = '退回'
// } else if (newdata.state === '4') {
//   newdata.state = '已兌換'
// }
// console.log(newdata)
export default function Usedid() {
  const router=useRouter()
  const [bookInfo, setbookInfo] = useState({})
  // console.log((router.query.used_id).toString())
  
  useEffect(()=>{
    if(router.query.used_id){
      getBookInfo()
    }
    
  },[router.query])

  const getBookInfo=async()=>{
    const getbookInfo1=await fetch(`${process.env.API_SERVER}/used/book_edit/${(router.query.used_id).toString()}`)
    const getbookInfo2=await getbookInfo1.json()
    console.log(getbookInfo2[0])
    const newdata = { ...getbookInfo2[0] }
  if (newdata.used_state === '1') {
    newdata.used_state = '待兌換'
  } else if (newdata.used_state === '2') {
    newdata.used_state = '待收書'
  } else if (newdata.used_state === '3') {
    newdata.used_state = '退回'
  } else if (newdata.used_state === '4') {
    newdata.used_state = '已兌換'
  }
    setbookInfo(newdata)
    console.log(newdata)
    
 
  }
  
 

  return (
    <>
      <Member_info />
      <MemberNav />
      <MemberBreadcrumbs_2 />

      <div className="container-fliuid ">
        <div className="row">
          <div className="col-12   col-md-6   d-flex flex-column  align-items-center  ">
            <h3 className="textp-24px my-5 text-center used-search-text-20">
              {bookInfo.book_name}
            </h3>
            <div
              className="color-bg-6 my-5 "
              style={{
                width: 200,
                height: 200,
                background: `url('/used-img/${bookInfo.pic}')`,
                backgroundSize: 'contain',
              }}
            ></div>
          </div>
          <div className="col-12  col-md-6  border-start border-black d-flex  flex-column  align-items-center justify-content-center used-usededit-member-1  ">
            <div className="d-flex flex-column used-usededit-member-2    ">
              <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                ISBN:{bookInfo.ISBN}
              </div>
              {bookInfo.status_name   ? (
                <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                  書況評級:{bookInfo.status_name}
                </div>
              ) : (
                ''
              )}
              <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                狀態:{bookInfo.used_state}
              </div>
              {bookInfo.price  ? (
                <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                  可換代幣:{bookInfo.price}
                </div>
              ) : (
                ''
              )}
              {bookInfo.node  ? (
                <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                  書況備註:{bookInfo.node}
                </div>
              ) : (
                ''
              )}
              <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                異動時間:{bookInfo.updated}
              </div>
            </div>
            { !bookInfo.status_name  ? (
              <div className="d-flex  w-100  justify-content-center my-5 ">
                <button className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing me-5">
                  我要取消
                </button>
              </div>
            ) : (
              <>
                <div className="d-flex  w-100  justify-content-center my-5 ">
                  <button className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing me-5">
                    確定兌換
                  </button>
                  <button className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing">
                    放棄兌換
                  </button>
                </div>
                <div>如對書況評級有問題，請聯絡客服</div>
              </>
            )}
            <div className="d-flex  justify-content-center w-100 ">
              <Link
                href="/dashboard/used/changebook-message"
                className="mt-3 color-tx-8 me-5 "
              >
                回二手書列表
              </Link>
            </div>


          </div>
        </div>

        <div className="used_rwd_botton" style={{ height: '100px' }}></div>
      </div>
    </>
  )
}
