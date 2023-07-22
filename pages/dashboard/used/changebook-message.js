import React, { useEffect, useState } from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import UsedTdUncomfirmed from '@/components/used/chk-msg/used-td-uncomfirmed'
import UsedTdExchange from '@/components/used/chk-msg/used-td-exchange'
import UsedTdReturn from '@/components/used/chk-msg/used-td-return'
import UsedTdUnreceive from '@/components/used/chk-msg/used-td-unreceive'
import Link from 'next/link'
import Member_info from '@/components/Leo/member/member_info'
import MemberBreadcrumbs_2 from '@/components/Leo/member/member_breadcrumbs-2'
import { useRouter } from 'next/router'

//暫定 1.待兌換 2.代收書 3.退回 4.已兌換
// const datas = [
//   {
//     used_id: 1,
//     ISBN: 9789864016433,
//     book_name: '作者不詳：推理作家的讀本 (上卷)(下卷）',
//     book_state: 1,
//     price: '500',
//   },
//   { used_id: 2, ISBN: 9789577417039, book_name: '第三時效', book_state: 2 },
//   {
//     used_id: 3,
//     ISBN: 9786263565616,
//     book_name: '二度遭到殺害的她',
//     book_state: 3,
//     price: '500',
//   },
//   {
//     used_id: 4,
//     ISBN: 9786263565616,
//     book_name: '二度遭到殺害的她',
//     book_state: 4,
//     price: '500',
//   },
// ]

export default function ChangebookMessage() {
  const router=useRouter()
  const [data, setData] = useState([])
  const [totalpage,setTotalpage]=useState(1)
  const [nowpage,setnowpage]=useState(1)
  useEffect(() => {
    getData()

  }, [])
console.log(router.query.page)
  const getData = async () => {
    const member_id = JSON.parse(localStorage.getItem('auth')).member_id
    console.log(member_id)
    const getdata1 = await fetch(
      `${process.env.API_SERVER}/used/change/item/${member_id}`
    )
    const getdata2 = await getdata1.json()
    setData(getdata2[0])
    setTotalpage(getdata2[1])
   
    console.log(data)
  }

  return (
    <>
      <Member_info />
      <MemberNav />
      <MemberBreadcrumbs_2 />
      <div className="px-2 mt-3">
        <div className="dropdown pb-3 d-flex  ">
          <button
            className="btn btn-success dropdown-toggle letter-spacing border-radius-5px textp-20px used-search-text-16"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            狀態篩選
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" href="?book_state=all">
                ALL
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="?book_state=1">
                待確認
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="?book_state=2">
                待收書
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="?book_state=3">
                退回
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="?book_state=4">
                已兌換
              </Link>
            </li>
          </ul>
        </div>
        <table className="table  " style={{ border: '6px solid #84A98C' }}>
          <thead>
            <tr>
              <th
                className="text-center col-6 textp-20px fw-bold used-search-text-16"
                style={{ background: '#84A98C' }}
              >
                二手書
              </th>
              <th
                className="text-center col-4 textp-20px fw-bold used-search-text-16"
                style={{ background: '#84A98C' }}
              >
                狀態
              </th>
              <th
                className="text-center col-4 textp-20px fw-bold used-search-text-16"
                style={{ background: '#84A98C' }}
              >
                詳細資料
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((v, i) => {
              const { used_id, ISBN, book_name, used_state, price } = v
              if (used_state === '1') {
                //待確認
                return (
                  <UsedTdUncomfirmed
                    key={used_id}
                    used_id={used_id}
                    ISBN={ISBN}
                    book_name={book_name}
                    used_state={used_state}
                  />
                )
              } else if (used_state === '2') {
                //待收書
                return (
                  <UsedTdUnreceive
                    key={used_id}
                    used_id={used_id}
                    ISBN={ISBN}
                    book_name={book_name}
                    used_state={used_state}
                  />
                )
              } else if (used_state === '3') {
                //退回
                return (
                  <UsedTdReturn
                    key={used_id}
                    used_id={used_id}
                    ISBN={ISBN}
                    book_name={book_name}
                    used_state={used_state}
                  />
                )
              } else if (used_state === '4') {
                //已兌換
                return (
                  <UsedTdExchange
                    key={used_id}
                    used_id={used_id}
                    ISBN={ISBN}
                    book_name={book_name}
                    used_state={used_state}
                    price={price}
                  />
                )
              }
            })}
          </tbody>
        </table>
        <div className='d-flex justify-content-center mt-5 '><nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {Array(5).fill(1).map((v,i)=>(
               <li class="page-item" key={i}>
               <a class="page-link" href="#">
                {i}
               </a>
             </li>

            ))}
           
           
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav></div>
        
        <div className="used_rwd_botton" style={{ height: '300px' }}></div>
      </div>
    </>
  )
}
