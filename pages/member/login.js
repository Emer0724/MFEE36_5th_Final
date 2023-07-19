// pages/Login.js

import React, { useState } from 'react'
import styles from '../../styles/mem-style/login.module.css'
import { Container, Button } from 'react-bootstrap'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }
  const handleGoogleLogin = () => {
    // google login
  }

  return (
    <div>
      <div className={styles.card}>
        {/* <div> */}
        <div className={styles['lr-container']}>
          <div className={styles['left-box']}>
            <div className="d-flex align-items-center justify-content-center">
              <h1 className={styles['login-title']}>歡迎回來</h1>
            </div>
            <form onSubmit={handleSubmit}>
              {/* 輸入字串 */}

              <div>
                <div>
                  <div className="justify-content-center align-items-center">
                    {/*  */}
                    <div className={styles['box-center']}>
                      <button
                        type="button"
                        className={styles['googlelogin-btn']}
                        onClick={handleGoogleLogin}
                      >
                        <i className="fab fa-google fa-2x"></i> Google 登入
                      </button>
                    </div>
                    {/*  */}
                    <div className={styles['login-input']}>
                      <input
                        placeholder="email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles['form-control']}
                      />
                    </div>
                  </div>

                  <div className={styles['login-input']}>
                    <input
                      placeholder="密碼"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={styles['form-control']}
                    />
                  </div>
                </div>
              </div>
              <div className={styles['box-center']}>
                <button type="submit" className={styles['login-btn']}>
                  登入
                </button>
              </div>
            </form>
          </div>

          <div className={styles['right-box']}>
            <h1 className={styles['right-text']}>沒有帳號?</h1>
            <button type="submit" className={styles['signup-btn']}>
              加入會員
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Login
