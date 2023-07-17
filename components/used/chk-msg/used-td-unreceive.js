import React from 'react'
import Link from 'next/link'

export default function UsedTdUnreceive({ used_id, book_name, book_state }) {
  return (
    <>
      <tr>
        <td className="text-center text-20px fw-bold ${color}">{book_name}</td>
        <td className="text-center text-20px fw-bold">待收書</td>
        <td className="text-center text-20px fw-bold">
          {' '}
          <Link href={`/used/${used_id}`} style={{ color: '#52796F' }}>
            詳細資料
          </Link>
        </td>
      </tr>
    </>
  )
}
