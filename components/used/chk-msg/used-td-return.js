import React from 'react'
import Link from 'next/link'

export default function UsedTdReturn({
  snumber,
  used_id,
  book_name,
  used_state,
}) {
  return (
    <>
      <tr>
        <td
          className=" text-center textp-20px fw-bold ${color} used-search-text-16 used_chk_msg_td_center  used_chk_msg_book_name  "
          style={{ color: '#c2c2c2c2' }}
        >
          {snumber}
        </td>
        <td className=" textp-20px fw-bold ${color} used-search-text-16 used_chk_msg_td_center  used_chk_msg_book_name px-3">
          {book_name}
        </td>
        <td className="text-center textp-20px fw-bold used-search-text-16 used_chk_msg_td_center">
          退回
        </td>
        <td className="text-center textp-20px fw-bold used-search-text-16 used_chk_msg_td_center">
          <Link
            href={`/dashboard/used/book-edit/${used_id}`}
            style={{ color: '#52796F' }}
          >
            詳細資料
          </Link>
        </td>
      </tr>
    </>
  )
}
