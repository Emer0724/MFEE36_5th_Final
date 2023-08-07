import React, { useState, useContext } from 'react'
import styles from '../../styles/mem-style/login.module.css'
import { Container, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import AuthContext, { AuthContextProvider } from '@/context/AuthContext'
import Head from 'next/head'

export default function Login() {
  const router = useRouter()
  const { auth, setAuth } = useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const changeUser = (e) => {
    setUser((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }))
  }

  const doLogin = (e) => {
    e.preventDefault()
    fetch(process.env.API_SERVER + '/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          const obj = { ...data.data }
          localStorage.setItem('auth', JSON.stringify(obj))
          // console.log(obj)
          setAuth(obj)
          alert('登入成功')
          router.push('/')
        } else {
          alert(data.error || '帳密錯誤')
        }
      })
  }

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    doLogin(e)
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

  const handleJoinMember = () => {
    router.push('/member/register')
  }

  return (
    <>
      <Head>
        <title>Book書易</title>
      </Head>
      <div className={styles.card_container}>
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
                      value={user.email}
                      onChange={changeUser}
                      onFocus={handleEmailFocus}
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
                      value={user.password}
                      onChange={changeUser}
                      onFocus={handlePasswordFocus}
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
    </>
  )
}
