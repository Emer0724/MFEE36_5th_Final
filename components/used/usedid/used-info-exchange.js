import React from 'react'

export default function UsedInfoExchange({ ...other }) {
  return (
    <>
      <div>ISBN:{other.ISBN}</div>
      <div>書況評級:{other.status}</div>
      <div>狀態:{}</div>
    </>
  )
}
