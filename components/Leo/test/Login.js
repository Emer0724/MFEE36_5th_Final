import React from 'react'

export default function login({ setUsername }) {
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value)
        }}
      />
    </div>
  )
}
