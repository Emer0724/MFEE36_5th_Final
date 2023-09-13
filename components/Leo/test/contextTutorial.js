import React, { useState } from 'react'
import Login from './Login'
import User from './User'
export default function ContextTutorial() {
  const [username, setUsername] = useState('')
  return (
    <>
      <Login setUsername={setUsername} />
      <User username={username} />
    </>
  )
}
