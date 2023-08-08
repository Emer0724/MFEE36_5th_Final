import React, { useState, useEffect } from 'react'
import styles from './usedList.module.css'
import Popup_window from '../popup_window'
import { useRouter } from 'next/router'

export default function UsedList({ ISBN }) {
  console.log(ISBN)
  const router = useRouter()
  const [datas, setDatas] = useState([])
  const [pop, setpop] = useState(false)

  //登入驗證
  // const user_info = JSON.parse(localStorage.getItem('auth'))
  // let info = null
  // let id = null
  // if (user_info !== null) {
  //   info = user_info
  //   id = info.id
  // } else {
  //   // 如果用戶未登入，則提示用戶登入
  //   console.log('請先登入')
  // }
  // useEffect(() => {
  //   if (ISBN) {
  //     fetch(`${process.env.API_SERVER}/market/usedList?ISBN=${ISBN}`)
  //       .then((res) => res.json())
  //       .then((datas) => {
  //         setDatas(datas)
  //         console.log('後端回傳結果:', datas)
  //         console.log(datas)
  //       })
  //       .catch((err) => {
  //         console.error('資料讀取錯誤', err)
  //         setDatas([])
  //       })
  //   }
  // }, [ISBN])

  useEffect(() => {
    if (ISBN) {
      fetch(`${process.env.API_SERVER}/used/usedlist/${ISBN}`)
        .then((res) => res.json())
        .then((datas) => {
          setDatas(datas)
          console.log('後端回傳結果:', datas)
          console.log(datas)
        })
        .catch((err) => {
          console.error('資料讀取錯誤', err)
          setDatas([])
        })
    }
  }, [])
  // console.log(datas)
  // const [innerArray] = datas || []
  // const [usedBook] = innerArray || []
  // const { status_id, price, member_id, used_id } = usedBook || {}

  if (datas.length < 1) {
    return (
      <>
        <div className="textp-28px letter-spacing">目前無二手書</div>
      </>
    )
  }
  const check = () => {
    let user = ''
    if (localStorage.getItem('auth')) {
      user = localStorage.getItem('auth')
    } else {
      return user !== null
    }
  }
  const login = () => {
    router.push(`/member/login`)
  }
  const cancel = () => {
    setpop(false)
  }

  const cartUsed = (ISBN, member_id, used_id) => {
    // const user_info = JSON.parse(localStorage.getItem('auth'))
    // let info = null
    // let id = null
    // if (user_info !== null) {
    //   info = user_info
    //   id = info.id
    // } else {
    //   // 如果用戶未登入，則提示用戶登入
    //   console.log('請先登入')
    // }

    if (!localStorage.getItem('auth')) {
      setpop(true)
    }
    //變數作用域的關係 傳不進來，要透過onClick 以參數方式送進來
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
            <th className={styles.font}>書況</th>
            <th className={styles.font}>價格</th>
            <th className={styles.font}>庫存</th>
            <th className={styles.font}>加入購物車</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((v, i) => {
            return (
              <tr key={i}>
                <td className={styles.font}>{v.status_name}</td>
                <td className={styles.font}>{v.price}</td>
                <td className={styles.font}>{v.stock}</td>
                <td className={styles.font}>
                  <button className={styles.btn} onClick={() => cartUsed(ISBN)}>
                    加入購物車
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {pop ? (
        <Popup_window
          text={'您尚未登入，請先登入'}
          botton_text_left={'登入'}
          botton_text_right={'取消'}
          botton_left={login()}
          botton_right={cancel()}
        />
      ) : (
        ''
      )}
    </>
  )
}
