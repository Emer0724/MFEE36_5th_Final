import React, { useState } from 'react'
import styles from '../../styles/mem-style/login.module.css'
import { Container, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)

    if (email === '') {
      setEmailError(true)
    } else {
      setEmailError(false)
    }

    if (password === '') {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }
  }

  const handleEmailFocus = () => {
    setEmailError(false)
  }

  const handlePasswordFocus = () => {
    setPasswordError(false)
  }

  const handleGoogleLogin = () => {
    // google login
  }

  const router = useRouter()

  const handleJoinMember = () => {
    router.push('/member/register') // 2. 使用 router.push 导航到 "member/register" 页面
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles['lr-container']}>
          <div className={styles['left-box']}>
            <div className="d-flex align-items-center justify-content-center">
              <h1 className={styles['login-title']}>歡迎回來</h1>
            </div>
            <form onSubmit={handleSubmit}>
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
              <div className="align-items-center" id="input-group">
                <div className={styles['login-input']}>
                  <input
                    placeholder="email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleEmailFocus} // 新增 onFocus 事件處理函式
                    className={`${styles['form-control']} ${
                      emailError ? styles['error'] : ''
                    }`}
                  />
                  {emailError && (
                    <div className={styles['error-message']}>輸入錯誤</div>
                  )}
                </div>
                <div className={styles['login-input']}>
                  <input
                    placeholder="密碼"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handlePasswordFocus} // 新增 onFocus 事件處理函式
                    className={`${styles['form-control']} ${
                      passwordError ? styles['error'] : ''
                    }`}
                  />
                  {passwordError && (
                    <div className={styles['error-message']}>輸入錯誤</div>
                  )}
                </div>
              </div>

              {/*  */}
              <div className={styles['box-center']}>
                <button type="submit" className={styles['login-btn']}>
                  登入
                </button>
              </div>
              <div className={styles['box-center']}>
                <button
                  type="submit"
                  className={styles['signup-btn']}
                  onClick={handleJoinMember}
                >
                  加入會員
                </button>
              </div>
            </form>
          </div>

          <div className={styles['right-box']}>
            <h1 className={styles['right-text']}>沒有帳號?</h1>
            <button
              type="submit"
              className={styles['signup-btn']}
              onClick={handleJoinMember}
            >
              加入會員
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
