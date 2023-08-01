import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext({})

export default AuthContext

export const noLoginState = {
  id: 0,
  email: '',
  nickname: '',
  token: '',
}

export const AuthContextProvider = function ({ children }) {
  const [auth, setAuth] = useState({ ...noLoginState })

  const logout = () => {
    localStorage.removeItem('auth')
    setAuth(noLoginState)
  }

  useEffect(() => {
    const str = localStorage.getItem('auth')
    if (str) {
      try {
        const obj = JSON.parse(str)
        setAuth(obj)
      } catch (ex) {
        console.log(`error:ex`)
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
