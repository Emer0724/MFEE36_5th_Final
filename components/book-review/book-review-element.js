import React from 'react'
import Avatar2 from './blogavatar2'
import style from '@/components/book-review/book-review-element.module.css'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
import imgbook1 from '@/public/blog-img/book1.jpg'
import { useState, useEffect } from 'react'

export default function BookReviewElement() {
  const [Book, setBook] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3055/blog/bookreview')
      if (!response.ok) {
        throw new Error('沒有資料')
      }
      const data = await response.json()
      setBook(data);
    } catch (error) {
      console.error('沒有資料', error)
    }
  }

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<AiFillStar key={i} className={style.chenstar} />)
      } else {
        stars.push(<AiFillStar key={i} className={style.chenstar_empty} />)
      }
    }
    return stars
  }

  // 轉換日期格式，只保留年月日
  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  }

  return (
    <>
      <div className="pb-5 pt-4">
        {Book.map((book_review) => (
          <div key={book_review.book_review_sid} className="border-bottom d-flex">
            <div className="pt-3">
                <Image
                  src={`/all_img/book_pic/${book_review.pic}`}
                  width={150}
                  height={200}
                  className={style.blogimg}
                />
            </div>
            <div className="pt-3">
              <div className="d-flex ps-3">
                <Avatar2 nickname={book_review.nickname}/>
              </div>
              <div className="d-flex ps-3 pt-3 fw-bold">
                <span>{book_review.book_name}</span>
              </div>
              <div className="d-flex ps-3 pt-3">{renderStarRating(book_review.score)}</div>
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
    </>
  )
}