import React from 'react'
import Link from 'next/link'

export default function UsedTdExchange({
  used_id,
  book_name,
  book_state,
  price,
}) {
  return (
    <>
      <tr>
        <td
          className="text-center textp-20px fw-bold ${color} used-search-text-16"
          style={{ color: '#c2c2c2c2' }}
        >
          {book_name}
        </td>
        <td
          className="text-center textp-20px fw-bold used-search-text-16 "
          style={{ color: '#c2c2c2c2' }}
        >
          已兌換
        </td>
        <td
          className="text-center textp-20px fw-bold used-search-text-16"
          style={{ color: '#c2c2c2c2' }}
        >
          +{price}
        </td>
      </tr>
    </>
  )
}
