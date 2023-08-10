import Avatar2 from '../book-review/blogavatar2'
import style from '@/components/book-review/book-element.module.css'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
import Button15 from '../common/button/button15'
import Button14 from '../common/button/button14'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BookPersonalContent() {
  const [data, setData] = useState([])
  const [memberData, setMemberData] = useState([])
  const [selectedLink, setSelectedLink] = useState('review') // 将默认选中的链接改为 'review'

  const Work = "/blog/personal-page/work";
  const Bookrw = "/blog/personal-page/review";

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
    fetch(`http://localhost:3055/blog/lookbook/${user}`)
      .then((response) => response.json())
      .then((data) => {
        // 將數據保存在組件的狀態中
        setData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [user])

  const renderStarRating = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<AiFillStar key={i} className={style.chenstar} />)
      } else {
        stars.push(<AiFillStar key={i} className={style.chenstar_empty} />)
      }
    }
    return stars
  }

  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }


  return (
    <>
      <div className={`${style.chenjc} ${style.bread}`}>
        <div className={`d-flex pb-3`}>
          <div className="pe-4">
            <Link
              href={Work}
              style={{
                color: selectedLink === 'work' ? '#52796F' : 'black',
                fontSize: '20px',
                textDecoration: 'none',
              }}
              onClick={() => setSelectedLink('work')}
            >
              作品
            </Link>
          </div>
          <div>
            <Link
              href={Bookrw}
              style={{
                color: selectedLink === 'review' ? '#52796F' : 'black',
                fontSize: '20px',
                textDecoration: 'none',
              }}
              onClick={() => setSelectedLink('review')}
            >
              書評
            </Link>
          </div>
        </div>
      </div>
      {data.map((psbook, i) => (
        <>
          <div key={i} className="border-bottom pb-2 pt-4">
            <div className="d-flex">
              <div>
                <Image
                  src={`/all_img/book_pic/${psbook.pic}`}
                  width={150}
                  height={200}
                  className={`${style.chenbooksize}`}
                />
                <div className={`${style.chends}`}>
                  <span
                    className={`${style.chendate} d-flex justify-content-center pt-3 pb-3`}
                  >
                    {formatDateString(psbook.add_date)}
                  </span>
                </div>
                <div className={`d-flex justify-content-center pt-3 pb-3`}>
                  <Button14 />
                </div>
              </div>
              <div>
                <div className="d-flex ps-3 pt-2">
                  <Avatar2 nickname={psbook.nickname}/>
                </div>
                <div className="d-flex ps-3 pt-3 fw-bold">
                  <span>{psbook.book_name}</span>
                </div>
                <div className="d-flex ps-3 pt-3">
                  {renderStarRating(psbook.score)}
                </div>
                <div className="ps-3 pt-3">
                  <span>{psbook.book_review}</span>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <div className={`${style.chensd}`}>
                  <span
                    className={`${style.chendate} d-flex justify-content-center pt-3 pb-3`}
                  >
                    {formatDateString(psbook.add_date)}
                  </span>
                </div>
                <div className={`d-flex justify-content-center`}>
                  <Button15 book_review_sid={psbook.book_review_sid}/>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  )
}