import React, { useState, useEffect } from 'react'
import styles from './usedList.module.css'

export default function UsedList({ ISBN }) {
  const [datas, setDatas] = useState([])
  //登入驗證
  const user_info = JSON.parse(localStorage.getItem('auth'))
  let info = null
  let id = null
  if (user_info !== null) {
    info = user_info
    id = info.id
  } else {
    // 如果用戶未登入，則提示用戶登入
    console.log('請先登入')
  }
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
  console.log(datas)
  const [innerArray] = datas || []
  const [usedBook] = innerArray || []
  const { status_id, price, member_id, used_id } = usedBook || {}

  console.log(used_id)
  if (datas[0] === 'noUsedBook') {
    return (
      <>
        <div className="textp-28px letter-spacing">目前無二手書</div>
      </>
    )
  }
  const check = () => {
    const user = localStorage.getItem('auth')
    return user !== null
  }

  const cartUsed = (ISBN, member_id, used_id) => {
    console.log('我好餓')
    console.log(ISBN)
    console.log(member_id)
    console.log(used_id) //變數作用域的關係 傳不進來，要透過onClick 以參數方式送進來
    const userLogInStatus = check()
    if (userLogInStatus) {
      fetch(`${process.env.API_SERVER}/market/addToCartUsed`, {
        method: 'POST',
        body: JSON.stringify({
          member_id: member_id,
          ISBN: ISBN,
          used_id: used_id,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((cartData) => {
          // 根據伺服器回傳的資料處理相應的動作
          console.log(cartData)
          alert(`成功加入購物車`)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    } else {
      const confirmResult = window.confirm('您尚未登入，是否要前往登入頁面？')
      if (confirmResult) {
        window.location.href = '/member/login'
      } else {
        console.log('留在當前頁面')
      }
    }
  }
  return (
    <>
      <table className="table align-middle">
        <thead>
          <tr>
            <th className={styles.font}>會員ID</th>
            <th className={styles.font}>書況</th>
            <th className={styles.font}>價格</th>
            <th className={styles.font}>加入購物車</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.font}>{member_id}</td>
            <td className={styles.font}>{status_id}</td>
            <td className={styles.font}>{price}</td>
            <td className={styles.font}>
              <button
                className={styles.btn}
                onClick={() => cartUsed(ISBN, member_id, used_id)}
              >
                加入購物車
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
