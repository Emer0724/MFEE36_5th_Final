import React, { useState, useEffect } from 'react'
import styles from '../../styles/mem-style/reg.module.css'
import { Container, Button } from 'react-bootstrap'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
    }

    // 當組件掛載時，立即運行一次
    handleResize()

    // 當視窗大小變化時，運行
    window.addEventListener('resize', handleResize)

    // 清除事件監聽器
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }

  const handleGoogleSignup = () => {
    // google加入會員
  }

  const validateEmail = () => {
    // 驗證email
    if (!email) {
      setEmailError('請輸入電子郵件')
    } else {
      setEmailError('')
    }
  }

  const validatePassword = () => {
    // 驗證密碼
    if (!password) {
      setPasswordError('請輸入密碼')
    } else {
      setPasswordError('')
    }
  }

  const validateConfirmPassword = () => {
    // 驗證確認密碼
    if (!confirmPassword) {
      setConfirmPasswordError('請輸入確認密碼')
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('確認密碼不一致')
    } else {
      setConfirmPasswordError('')
    }
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles['lr-container']}>
          <div className={styles['left-box']}>
            <div className="d-flex align-items-center justify-content-center">
              <h4 className={styles['reg-title']}>已有帳號?</h4>
            </div>

            <div className={styles['box-center']}>
              <button
                type="submit"
                className={`${styles['login-btn']} ${
                  isMobile ? styles['login-btn-mobile'] : ''
                }`}
              >
                登入
              </button>
            </div>
          </div>
          <div className={styles['right-box']}>
            <h1 className={styles['right-text']}>加入會員</h1>
            <div>
              <div>
                <div>
                  <button
                    type="button"
                    className={styles['googlelogin-btn']}
                    onClick={handleGoogleSignup}
                  >
                    <i className="fab fa-google fa-2x"></i> Google 加入會員
                  </button>
                  <div className="align-items-center" id="input-group"></div>
                  <p className={styles['note']}>以email創建帳號</p>
                  <form onSubmit={handleSubmit}>
                    <div className="justify-content-center align-items-center">
                      <div className={styles['box-center']}>
                        <div className={styles['login-input']}>
                          <div className={styles['input-container']}>
                            <input
                              placeholder="email"
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              onBlur={validateEmail}
                              onFocus={() => setEmailError('')}
                              className={`${styles['form-control']} ${
                                emailError && styles['input-fade-out']
                              }`}
                            />
                            {emailError && (
                              <span className={styles['error-message']}>
                                {emailError}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className={styles['login-input']}>
                        <div className={styles['input-container']}>
                          <input
                            placeholder="password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}
                            className={`${styles['form-control']} ${
                              passwordError && styles['input-fade-out']
                            }`}
                          />
                          {passwordError && (
                            <span className={styles['error-message']}>
                              {passwordError}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className={styles['login-input']}>
                        <div className={styles['input-container']}>
                          <input
                            placeholder="再次確認密碼"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={validateConfirmPassword}
                            className={`${styles['form-control']} ${
                              confirmPasswordError && styles['input-fade-out']
                            }`}
                          />
                          {confirmPasswordError && (
                            <span className={styles['error-message']}>
                              {confirmPasswordError}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button type="submit" className={styles['signup-btn']}>
                      加入會員
                    </button>

                    <button
                      type="submit"
                      className={
                        isMobile
                          ? styles['login-btn-mobile']
                          : styles['login-btn-none']
                      }
                    >
                      登入
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
