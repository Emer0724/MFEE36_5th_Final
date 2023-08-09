import React from 'react'
import ButtonStyle_l from '@/components/Leo/Btn_Leo'
import Favorite from './favorite'
import Image from 'next/image'
import styles from '@/components/Leo/Left.module.css'

export default function L(props) {
  const { result, toUsedArea } = props || []
  const data = result.rows[0] || {}
  const { ISBN, book_name, pic, publish, price, author, category_id } =
    data || {}
  const imageUrl = `/all_img/book_pic/${pic}`
  // console.log(category_id)
  // console.log(data)
  // console.log(result)
  // console.log(pic)
  //登入驗證
  const user_info = JSON.parse(localStorage.getItem('auth'))
  let info = null
  let member_id = null
  if (user_info !== null) {
    info = user_info
    member_id = info.member_id
  } else {
    // 如果用戶未登入，則提示用戶登入
    console.log('請先登入')
  }
  // console.log(user_info)
  // console.log(ISBN)
  console.log(member_id)

  const check = () => {
    const user = localStorage.getItem('auth')
    return user !== null
  }

  //先做出變數來存放值
  //cart fetch
  const cart = (ISBN, member_id) => {
    console.log(ISBN) //變數作用域的關係 傳不進來，要透過onClick 以參數方式送進來
    const userLogInStatus = check()
    if (userLogInStatus) {
      fetch(`${process.env.API_SERVER}/market/addToCart`, {
        method: 'POST',
        body: JSON.stringify({ member_id: member_id, ISBN: ISBN }),
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
      <div className={styles.container}>
        <div className={styles.pic_box}>
          <Image
            src={imageUrl}
            className={`bk-img`}
            alt="..."
            width={400}
            height={400}
          />
        </div>
        <div className={styles.favor_set}>
          <div
            className={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <h3 className={styles.bookName}>書名:{book_name}</h3>
          </div>
        </div>
        <div className={styles.content_box}>
          <div className={styles.content}>
            <h5>ISBN:{ISBN}</h5>
            <h5>作者: {author}</h5>
          </div>
          <div className={styles.content}>
            <h5>出版社:{publish} </h5>
            <h5>售價:{price}元</h5>
          </div>
        </div>
        <div className={styles.btn_set}>
          <ButtonStyle_l
            t1={'加入購物車'}
            onClick={() => cart(ISBN, member_id)}
            ISBN={ISBN}
          />
          <ButtonStyle_l t1={'找二手書'} onClick={toUsedArea} />
          <div className={styles.icon}>
            <Favorite ISBN={ISBN} />
          </div>
        </div>
      </div>
    </>
  )
}
