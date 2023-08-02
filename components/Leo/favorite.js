import React, { useState, useEffect } from 'react'
import styles from '@/components/Leo/favorite.module.css'

export default function Favorite(result) {
  const ISBN = result.ISBN
  // const member_id =
  const user_info = JSON.parse(localStorage.getItem('auth')) //localStorage.getItem('auth') 取得的是字串 先轉成JSON
  const { id } = user_info
  // const member_id = id.toString()
  const [mark, setMark] = useState(false)

  const checkMark = () => {
    fetch(`${process.env.API_SERVER}/market/recommand`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ISBN: ISBN, member_id: id }),
    })
      .then((res) => res.json())
      .then((datas) => {
        console.log('後端回傳結果:', datas)
        // 根據收藏資料來更新按鈕的狀態
        setMark(datas.rows.length > 0)
      })
      .catch((error) => {
        console.error('請求發送錯誤', error)
      })
  }
  useEffect(() => {
    checkMark()
  }, [])

  const check = () => {
    const user = localStorage.getItem('auth')
    return user !== null
  }
  //click事件
  const recommand = () => {
    const userLogInStatus = check()

    if (userLogInStatus) {
      fetch(`${process.env.API_SERVER}/market/recommand`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ISBN: ISBN, member_id: id }),
      })
        .then((res) => res.json())
        .then((datas) => {
          console.log('後端回傳結果:', datas)
          checkMark()
          console.log(datas.rows.length)
          if (datas.rows.length > 0) {
            setMark(true)
          } else {
            setMark(false)
          }
        })
        .catch((error) => {
          console.error('請求發送錯誤', error)
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
      <button
        className={`${styles.fbtn}  ${mark ? styles.true : styles.false}`}
        onClick={() => recommand()}
      ></button>
    </>
  )
}
