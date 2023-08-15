import React, { useState, useEffect } from 'react'
import styles from '@/components/Leo/favorite.module.css'

export default function Favorite(result) {
  const ISBN = result.ISBN
  // const member_id =

  const user_info = JSON.parse(localStorage.getItem('auth')) //localStorage.getItem('auth') 取得的是字串 先轉成JSON
  let info = null
  let id = null
  //先創建info、id 以免發生不符合if條件 後續info、id讀不到if 內宣告的情況，以及避免id undefined的狀況
  if (user_info !== null) {
    info = user_info
    id = info.member_id
  }
  console.log(user_info)
  console.log(id)

  // const member_id = id.toString()
  const [mark, setMark] = useState(false)

  const check = () => {
    const user = localStorage.getItem('auth')
    return user !== null
  }
  //click事件
  const recommand = () => {
    const userLogInStatus = check()
    if (userLogInStatus) {
      if (mark) {
        // 已經收藏，發送刪除資料的請求
        fetch(`${process.env.API_SERVER}/market/recommand`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ISBN: ISBN, member_id: id }),
        })
          .then((res) => res.json())
          .then((datas) => {
            console.log('取消收藏後端回傳結果:', datas)
            setMark(false) // 取消收藏後，將按鈕狀態設為 false
          })
          .catch((error) => {
            console.error('請求發送錯誤', error)
          })
      } else {
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
            setMark(true)
          })
          .catch((error) => {
            console.error('請求發送錯誤', error)
          })
      }
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
