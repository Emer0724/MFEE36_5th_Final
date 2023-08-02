import React, { useState, useEffect } from 'react'
import styles from '@/components/Leo/favorite.module.css'

export default function Favorite(result) {
  const ISBN = result.ISBN
  // const member_id =
  const user_info = JSON.parse(localStorage.getItem('auth')) //localStorage.getItem('auth') 取得的是字串 先轉成JSON
  const { id } = user_info
  // console.log(user_info)
  // console.log(id)
  // console.log('八嘎nono')
  const [mark, setMark] = useState(false)

  const checkMark = () => {
    const isBookmarkedFromBackend = false
    setMark(isBookmarkedFromBackend)
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
        className={`${styles.fbtn} ${styles.i}`}
        onClick={() => recommand()}
      ></button>
    </>
  )
}

// className={`${
//   router.asPath === '/dashboard/coupon'
//     ? styles.coupon
//     : styles.coupon_ex
// }`}
