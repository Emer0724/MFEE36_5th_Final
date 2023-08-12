import style from '@/components/book-review/book-element.module.css'
import Link from 'next/link'
import Avatar2 from './blogavatar2'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function BookContent() {
  const [nobook, setNobook] = useState(true)
  const [bookSort, setBookSort] = useState('desc')
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [bookData, setBookData] = useState([])

  const limit = 10 // 每頁顯示的書評數量

  useEffect(() => {
    fetchData()
  }, [bookSort, currentPage])

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3055/blog/book/${bookSort}?page=${currentPage}`
      )
      if (!response.ok) {
        throw new Error('沒有資料')
      }
      const data = await response.json()
      if (data.length === 0) {
        setHasMore(false)
      } else {
        setBookData((prevData) => [...prevData, ...data])
      }
    } catch (error) {
      console.error('沒有資料', error)
    }
  }

  const handleSortChange = (sortOption) => {
    setBookSort(sortOption)
    setCurrentPage(1) // 切換排序時重置頁碼
    setBookData([]) // 切換排序時清空書評數據
    setHasMore(true) // 切換排序時重置無限滾動狀態
  }

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
    return date.toISOString().split('T')[0]
  }

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      hasMore
    ) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasMore])

  return (
    <div className="col-xl-7 d-flex flex-column px-xl-5 pb-5">
      <div className={`${style.bread}`}></div>
      <div className={`${style.chenjc} d-flex`}>
        <div className="pe-4">
          <Link
            href="#"
            onClick={() => handleSortChange('desc')}
            style={{ color: bookSort === 'desc' ? '#52796F' : 'black' }}
            className={`${style.chenp} fs-5 text-decoration-none`}
          >
            評分最高
          </Link>
        </div>
        <div>
          <Link
            href="#"
            onClick={() => handleSortChange('asc')}
            style={{ color: bookSort === 'asc' ? '#52796F' : 'black' }}
            className={`fs-5 text-decoration-none`}
          >
            評分最低
          </Link>
        </div>
      </div>
      <div className="pb-5 pt-4">
        {bookData.map((book_review) => (
          <div
            key={book_review.book_review_sid}
            className="border-bottom d-flex"
          >
            <div className="pt-3">
              <Image
                src={`/all_img/book_pic/${book_review.pic}`}
                width={150}
                height={200}
                className={style.blogimg}
                alt={123}
              />
              <span className={`${style.chendss} pt-3 pb-3`}>
                {formatDateString(book_review.add_date)}
              </span>
            </div>
            <div className="pt-3">
              <div className="d-flex ps-3">
                <Avatar2 nickname={book_review.nickname} />
              </div>
              <div className="d-flex ps-3 pt-3 fw-bold">
                <span>{book_review.book_name}</span>
              </div>
              <div className="d-flex ps-3 pt-3">
                {renderStarRating(book_review.score)}
              </div>
              <div className="ps-3 pt-3">
                <span>{book_review.book_review}</span>
              </div>
            </div>
            <span className={`${style.chendate} pt-3 pb-3`}>
              {formatDateString(book_review.add_date)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
