import React from 'react'
import Link from 'next/link'
import { BsCoin } from 'react-icons/bs'

export default function UsedTdExchange({
  used_id,
  book_name,
  used_state,
  price,
}) {
  return (
    <>
      <tr>
        <td
          className="text-center textp-20px fw-bold ${color} used-search-text-16 used_chk_msg_td_center "
          style={{ color: '#c2c2c2c2' }}
        >
          {book_name}
        </td>
        <td
          className="text-center textp-20px fw-bold used-search-text-16 used_chk_msg_td_center "
          style={{ color: '#c2c2c2c2' }}
        >
          已兌換
        </td>
        <td
          className="text-center textp-20px fw-bold used-search-text-16 used_chk_msg_td_center"
          style={{ color: '#c2c2c2c2' }}
        >
          <BsCoin className='px-1 fs-3'/>{price}
        </td>
      </tr>
    </>
  )
}
