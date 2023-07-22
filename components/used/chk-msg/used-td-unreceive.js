import React from 'react'
import Link from 'next/link'

export default function UsedTdUnreceive({ used_id, book_name, used_state }) {
  return (
    <>
      <tr>
        <td className="text-center textp-20px fw-bold ${color} used-search-text-16">
          {book_name}
        </td>
        <td className="text-center textp-20px fw-bold used-search-text-16">
          待收書
        </td>
        <td className="text-center textp-20px fw-bold used-search-text-16">
          {' '}
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
