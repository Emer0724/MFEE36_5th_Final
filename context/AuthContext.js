import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { first } from 'lodash'

const AuthContext = createContext({})

export default AuthContext

export const noLoginState = {
  id: 0,
  email: '',
  nickname: '',
  token: '',
}

export const AuthContextProvider = function ({ children }) {
  const router = useRouter()
  const [auth, setAuth] = useState({ ...noLoginState })
  const [photo, setphoto] = useState('')
  const [first, setfirst] = useState(false)
  const [notify, setnotify] = useState(0)

  // console.log('photo', photo)

  const logout = () => {
    localStorage.removeItem('auth')
    setAuth(noLoginState)
    if (router.asPath.includes('dashboard')) {
      router.push('/')
    }
  }

  useEffect(() => {
    setfirst(true)
  }, [])

  useEffect(() => {
    const str = localStorage.getItem('auth')
    if (str) {
      try {
        const obj = JSON.parse(str)
        setAuth(obj)
        setnotify(obj.notify)
      } catch (ex) {
        console.log(`error:ex`)
      }
    }
  }, [])

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth')
    if (storedAuth) {
      const img = JSON.parse(localStorage.getItem('auth')).mem_avatar
      const notify = JSON.parse(localStorage.getItem('auth')).notify
      if (img) {
        // console.log(`${process.env.API_SERVER}`)
        // console.log(`${img}`)

        setphoto(img)
      }
      if(notify){
        setnotify(notify)
      }
    }
  }, [first])

  // useEffect(() => {
  //   const storedAuth = localStorage.getItem('auth')
  //   if (storedAuth) {
  //     const notify = JSON.parse(localStorage.getItem('auth')).notify
  //     if (notify) {
  //       // console.log(`${process.env.API_SERVER}`)
  //       // console.log(`${img}`)

  //       setnotify(notify)
  //     }
  //   }
  // }, [first])

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, logout, setphoto, photo, notify, setnotify }}
    >
      {children}
    </AuthContext.Provider>
  )
}
