import React, { useState } from 'react'
import styles from '../../styles/member.module.css'

const Profile = () => {
  // 状态用于存储用户输入的数据
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [shippingAddress, setShippingAddress] = useState('')

  // 处理保存数据的函数
  const saveData = () => {
    // 将数据发送到服务器保存的逻辑
    // 这里只是一个示例，你需要根据实际情况自行实现
    console.log('Saving data:', {
      name,
      email,
      username,
      password,
      paymentMethod,
      shippingAddress,
    })
  }

  return (
    <div className="flex">
      <div>
        <div className={styles['profile-title']}>帳戶資料</div>
        <div>
          <p>姓名: </p>
          <div className="d-flex justify-content-between align-items-center">
            <p>{name}</p>
            <button onClick={() => setName('')} className={styles['edit-btn']}>
              編輯
            </button>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p>電子郵件: {email}</p>
            <button onClick={() => setEmail('')} className={styles['edit-btn']}>
              編輯
            </button>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p>用户名: {username}</p>
            <button
              onClick={() => setUsername('')}
              className={styles['edit-btn']}
            >
              編輯
            </button>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p>密碼: {password}</p>
            <button
              onClick={() => setPassword('')}
              className={styles['edit-btn']}
            >
              編輯
            </button>
          </div>
        </div>
      </div>

      <h1 className={styles['profile-title']}>付款方式</h1>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <p>信用卡/其他支付方式: {paymentMethod}</p>
          <button
            onClick={() => setPaymentMethod('')}
            className={styles['edit-btn']}
          >
            編輯
          </button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <p>地址: {shippingAddress}</p>
          <button
            onClick={() => setShippingAddress('')}
            className={styles['edit-btn']}
          >
            編輯
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className={styles['profile-title']}>知音幣</h1>
        <div>{/* 知音币相关内容 */}</div>
      </div>

      <button onClick={saveData} className={styles['save-btn']}>
        保存
      </button>
    </div>
  )
}

export default Profile
