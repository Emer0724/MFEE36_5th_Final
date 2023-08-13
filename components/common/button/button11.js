import style from '@/components/common/button/button5.module.css'
import { useState, useEffect } from 'react'

export default function Button11({ blog_id, onDelete }) {
  const [memberData, setMemberData] = useState([])

  useEffect(() => {
    // 從本地儲存空間獲取會員資料
    const storedMemberData = localStorage.getItem('auth')

    if (storedMemberData) {
      const parsedMemberData = JSON.parse(storedMemberData)
      setMemberData(parsedMemberData)
    }
  }, [])
  const user = memberData.member_id

  const handleDeleteTrack = async (user) => {
    try {
      await fetch(`http://localhost:3055/blog/deletelike/${blog_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${encodeURIComponent(localStorage.getItem('auth'))}`,
        },
      })
      onDelete(blog_id);
    } catch (error) {
      console.error('刪除失敗：', error)
    }
  }

  return (
    <>
      <button className={`${style.chenbutton3}`} onClick={handleDeleteTrack}>
        取 消 最 愛
      </button>
    </>
  )
}
