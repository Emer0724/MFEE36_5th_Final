import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function UsedList({ ISBN }) {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    if (ISBN) {
      fetch(`${process.env.API_SERVER}/market/usedList?ISBN=${ISBN}`)
        .then((res) => res.json())
        .then((datas) => {
          setDatas(datas)
          console.log('後端回傳結果:', datas)
        })
        .catch((err) => {
          console.error('資料讀取錯誤', err)
          setDatas([])
        })
    }
  }, [ISBN])
  // console.log(datas)
  if (datas[0] === 'noUsedBook') {
    return (
      <>
        <div className="textp-28px letter-spacing">目前無二手書</div>
      </>
    )
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">書況</th>
            <th>價格</th>
            <th>庫存</th>
            <th>加入購物車</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((v, i) => (
            <tr key={i}>
              <th className="text-center">{v.book_state}</th>
              <td>{v.price}</td>
              <td>{v.inventory}</td>

              <td>
                <Link href={'#/'} className="color-tx-8">
                  加入購物車
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
