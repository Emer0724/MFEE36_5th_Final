import React from 'react'
import UsedList from '@/components/used/used-list/index'
import { useState } from 'react'
import UsedUpCheck from '@/components/used/used-upcheck'

export default function Text() {
  const [inputvalue, setInputvalue] = useState('')
  const [auth, setAuth] = useState('')

  const datas = [
    { book_state: '近全新', price: '198', inventory: '10' },
    { book_state: '良好', price: '198', inventory: '10' },
    { book_state: '不良', price: '198', inventory: '10' },
  ]
  // const datas=['noUsedBook']
  const ISBN = '9876445237'

  //設置token
  const getAuth = async () => {
    const user = { member_id: inputvalue }
    const getAuth1 = await fetch(`${process.env.API_SERVER}/used/login/`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const getAuth2 = await getAuth1.json()
    localStorage.setItem('auth', JSON.stringify(getAuth2.data))
    setAuth(getAuth2)
    alert('設置成功')
  }

  return (
    <>
      {/* <div className="w-50">
        <UsedList datas={datas} ISBN={ISBN}></UsedList>
      </div>
      <UsedUpCheck />
      <PopUp content1={12346} content2={'5454646'} onclick1={getsome} /> */}
      <div>
        會員編碼:
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
      </div>

      <button onClick={getAuth}>點我設token</button>
      {/* {auth === '' ? '' : <div>{auth.}</div>} */}
    </>
  )
}
