import Link from 'next/link'
import people from '@/assets/used-svg/people.svg'
import Image from 'next/image'
import style from '@/components/blog/blog_content.module.css'
import Button11 from '../common/button/button11'
import { useState, useEffect } from 'react'

export default function LikeContent() {
  const [data, setData] = useState([])
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [memberData, setMemberData] = useState([])

  useEffect(() => {
    // 從本地儲存空間獲取會員資料
    const storedMemberData = localStorage.getItem('auth')

    if (storedMemberData) {
      const parsedMemberData = JSON.parse(storedMemberData)
      setMemberData(parsedMemberData)
    }
  }, [])

  const handleDelete = (deletedId) => {
    // 根据传递过来的被删除的member2_id，更新状态以删除对应的数据
    const updatedData = data.filter((like) => like.blog_id !== deletedId)
    setData(updatedData)
  }

  const user = memberData.member_id

  useEffect(() => {
    fetch(`http://localhost:3055/blog/looklike/${user}`)
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

  useEffect(() => {
    if (memberData && memberData.member_id && user) {
      // 從伺服器獲取最愛的創作者人數
      fetch(`http://localhost:3055/blog/nav/like/${user}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setFavoriteCount(data);
        })
        .catch((error) => {
          console.error('Error:', error)
        });
    }
  }, [memberData, user]);

  return (
    <>
      <div className="d-flex justify-content-between border-bottom border-dark pb-2">
        <div className="fs-5 fw-bold">
          <span>喜愛的作品</span>
        </div>
      </div>
      {data.map((like, i) => (
        <>
          <div key={i} className="pt-4 pb-4">
            <Link
              href={`/blog/${like.blog_id}`}
              className="text-black text-decoration-none"
            >
              <h4>{like.blog_title}</h4>
            </Link>
          </div>
          <div className="d-flex">
            {like.mem_avatar ? (
              <Link
                href={`http://localhost:3055/blogimg/${like.blog_img}`}
                className="pe-3"
              >
                <Image
                  src={like.mem_avatar}
                  className={`${style.headblogimg} text-decoration-none`}
                  alt="member_avatar"
                />
              </Link>
            ) : (
              <Image
                src={people}
                width={60}
                height={60}
                className={`${style.headblogimg} text-decoration-none`}
                alt="default_avatar"
              />
            )}
            <Link
              href={`/blog/${like.blog_id}`}
              className={`d-flex align-items-center fw-bold ${style.editbutton} text-black text-decoration-none ps-3`}
            >
              {like.nickname}
            </Link>
          </div>

          <div className="pt-3">
            <div>
              {like.blog_img ? (
                <Image
                  src={`/all_img/img/${like.blog_img}`}
                  width={450}
                  height={250}
                  className={style.blogimg}
                  alt={'img'}
                />
              ) : (
                <Image
                  src="/all_img/img/noimg.jpg"
                  width={450}
                  height={250}
                  className={style.blogimg}
                  alt={'img'}
                />
              )}
            </div>
          </div>
          <div className="pt-3 pb-3">
            <Link
              href={`/blog/${like.blog_id}`}
              className={`${style.chenover} text-black text-decoration-none`}
            >
              <p>{like.blog_post}</p>
            </Link>
          </div>
          <div className="pb-3 d-flex align-items-center justify-content-between border-bottom">
            <div className={`d-flex ${style.chendate} pt-1`}>
              <span>{formatDateString(like.add_date)}</span>
            </div>
            <div>
              <Button11 blog_id={like.blog_id} onDelete={handleDelete} />
            </div>
          </div>
        </>
      ))}
    </>
  )
}
