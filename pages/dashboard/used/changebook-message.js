import React, { useState } from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import UsedTdUncomfirmed from '@/components/used/chk-msg/used-td-uncomfirmed'
import UsedTdExchange from '@/components/used/chk-msg/used-td-exchange'
import UsedTdReturn from '@/components/used/chk-msg/used-td-return'
import UsedTdUnreceive from '@/components/used/chk-msg/used-td-unreceive'
//暫定 1.待兌換 2.代收書 3.退回 4.已兌換
const datas = [
  {
    used_id: 1,
    ISBN: 9789864016433,
    book_name: '作者不詳：推理作家的讀本 (上卷)(下卷）',
    book_state: 1,
    price:'500'
  },
  { used_id: 2, ISBN: 9789577417039, book_name: '第三時效', book_state: 2 },
  {
    used_id: 3,
    ISBN: 9786263565616,
    book_name: '二度遭到殺害的她',
    book_state: 3,
    price:'500'
  },
  {
    used_id: 4,
    ISBN: 9786263565616,
    book_name: '二度遭到殺害的她',
    book_state: 4,
    price:'500'
  },
]

export default function ChangebookMessage() {
  const [data, setData] = useState(datas)

  return (
    <>
      <MemberNav />
      <div className="px-2">
        <table className="table  " style={{ border: '6px solid #84A98C' }}>
          <thead>
            <tr>
              <th
                className="text-center col-8 text-20px fw-bold"
                style={{ background: '#84A98C' }}
              >
                二手書
              </th>
              <th
                className="text-center col-2 text-20px fw-bold"
                style={{ background: '#84A98C' }}
              >
                狀態
              </th>
              <th
                className="text-center col-2 text-20px fw-bold"
                style={{ background: '#84A98C' }}
              >
                詳細資料
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((v, i) => {
              const { used_id, ISBN, book_name, book_state,price } = v
              if (book_state === 1) {
                //待確認
                return (
                  <UsedTdUncomfirmed
                    key={used_id}
                    used_id={used_id}
                    ISBN={ISBN}
                    book_name={book_name}
                    book_state={book_state}
                  />
                )
              } else if (book_state === 2) {
                //待收書
                return (
                  <UsedTdUnreceive
                    key={used_id}
                    used_id={used_id}
                    ISBN={ISBN}
                    book_name={book_name}
                    book_state={book_state}
                  />
                )
              } else if (book_state === 3) {
                 //退回
                return (
                  <UsedTdReturn
                    key={used_id}
                    used_id={used_id}
                    ISBN={ISBN}
                    book_name={book_name}
                    book_state={book_state}
                  />
                )
              } else if (book_state === 4) {
                 //已兌換
                return (
                  <UsedTdExchange
                    key={used_id}
                    used_id={used_id}
                    ISBN={ISBN}
                    book_name={book_name}
                    book_state={book_state}
                    price={price}
                  />
                )
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
