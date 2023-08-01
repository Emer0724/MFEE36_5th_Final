// import React, { useState, useContext } from 'react'
// import styles from '../../styles/mem-style/login.module.css'
// import { Container, Button } from 'react-bootstrap'
// import { useRouter } from 'next/router'
// import AuthContext, { AuthContextProvider } from '@/context/AuthContext'

import Navbar from '@/components/layout/navbar'
import { useState, useContext } from 'react'
import AuthContext from '@/context/AuthContext'
import { useRouter } from 'next/router'

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
          setAuth(obj)
          alert('登入成功')
          router.push('/')
        } else {
          alert(data.error || '帳密錯誤')
        }
      })
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">登入</h5>
                <form onSubmit={doLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={changeUser}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={changeUser}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
