// pages/Login.js

import React, { useState } from 'react'
import styles from '../../styles/member.module.css'
// import 'bootstrap/dist/css/bootstrap.css'
import { Container, Button } from 'react-bootstrap'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className={styles.card}>
      <h1 className={`${styles['color-tx-2']}`}>登入</h1>
      <form onSubmit={handleSubmit}>
        {/* 輸入字串 */}

        <div>
          <div>
            <div className={styles['form-group']}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles['form-control']}
              />
            </div>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles['form-control']}
            />
          </div>
        </div>

        <div>
          <button className={styles['note']}>加入會員</button>
        </div>
        <button
          type="submit"
          className={`${styles['login-btn']} btn btn-secondary`}
        >
          登入
        </button>
      </form>
    </div>
  )
}

export default Login
