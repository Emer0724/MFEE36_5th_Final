import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { first } from 'lodash'

const countContext = createContext({})

export default countContext

let member = null

export const getcount = () => {
  return fetch(`${process.env.API_SERVER}/cart/count?member=${member}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((r) => r.json())
    .then((result) => {
      console.log(result)
      const counter = result.map((v) => v.count)
      const totalcount = counter.reduce((v, c) => v + c, 0)
      return totalcount
      // setcount(totalcount);
    })
}

export const CountContextProvider = function ({ children }) {
  const router = useRouter()
  const [count, setcount] = useState(0)
  // const [first,setFirst] = useState(false)
  // useEffect(()=>{
  // setFirst(true)
  // },[])

  useEffect(() => {
    if (
      localStorage.getItem('auth') &&
      JSON.parse(localStorage.getItem('auth')).member_id
    ) {
      const member1 = JSON.parse(localStorage.getItem('auth')).member_id
      console.log(member1)
      member = member1
      getcount().then((r) => setcount(r))
      return
    }
  }, [])

  return (
    <countContext.Provider value={{ getcount, setcount, count }}>
      {children}
    </countContext.Provider>
  )
}
