import Avatar2 from '../book-review/blogavatar2'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/components/blog/blog_content.module.css'
import { LuDelete } from 'react-icons/lu'
import Button10 from '../common/button/button10'
import { useState, useEffect } from 'react'

export default function BlogPersonalContent() {
  const [data, setData] = useState([])
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

  useEffect(() => {
    fetch(`http://localhost:3055/blog/lookblog/${user}`)
      .then((response) => response.json())
      .then((data) => {
        // 將數據保存在組件的狀態中
        setData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [user])

  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <>
      {data.map((psblog, i) => (
        <>
          <div key={i} className="pt-4 pb-4">
            <Link
              href={`/blog/${psblog.blog_sid}`}
              className="text-black text-decoration-none"
            >
              <h4>{psblog.blog_title}</h4>
            </Link>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <Avatar2 
              nickname={psblog.nickname}
              mem_avatar={psblog.mem_avatar} />
            </div>
          </div>
          <div className="pt-3">
            <div>
              {psblog.blog_img ? (
                <Image
                  src={`http://localhost:3055/blogimg/${psblog.blog_img}`}
                  width={450}
                  height={250}
                  className={style.blogimg}
                  alt={'img'}
                />
              ) : (
                <Image
                  src="http://localhost:3055/blogimg/noimg.jpg"
                  width={450}
                  height={250}
                  className={style.blogimg}
                  alt={'img'}
                />
              )}
            </div>
          </div>
          <div className="pt-3">
            <Link
              href={`/blog/${psblog.blog_sid}`}
              className={`${style.chenover} text-black text-decoration-none`}
            >
              <p>{psblog.blog_post}</p>
            </Link>
          </div>
          <div className="pb-3 d-flex align-items-center justify-content-between border-bottom">
            <div className={`d-flex ${style.chendate} pt-4`}>
              <span>{formatDateString(psblog.add_date)}</span>
            </div>
            <div className="pt-3">
              <Button10 blog_sid={psblog.blog_sid} />
            </div>
          </div>
        </>
      ))}
    </>
  )
}
