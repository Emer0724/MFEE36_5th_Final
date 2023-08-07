import Button8 from '../button/button8'
import Button9 from '../button/button9'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function BookForm() {
  const [isbn, setIsbn] = useState('')
  const [score, setScore] = useState('')
  const [content, setContent] = useState('')
  const [memberData, setMemberData] = useState([])
  const [prevArticleData, setPrevArticleData] = useState({})
  const [isbnChanged, setIsbnChanged] = useState(false);
  const [scoreChanged, setScoreChanged] = useState(false);
  const [contentChanged, setContentChanged] = useState(false);
  const router = useRouter('')
  const { book_review_sid } = router.query

  useEffect(() => {
    // 從本地儲存空間獲取會員資料
    const storedMemberData = localStorage.getItem('auth')

    if (storedMemberData) {
      const parsedMemberData = JSON.parse(storedMemberData)
      setMemberData(parsedMemberData)
    }
  }, [])

  useEffect(() => {
    const fetchPrevArticleData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3055/blog/edit/lookbook/${book_review_sid}`
        )
        const data = await response.json()
        setPrevArticleData(data[0])
      } catch (error) {
        console.error('获取之前文章数据时出错：', error)
      }
    }

    fetchPrevArticleData()
  }, [])

  const Titledata = (e) => {
    setIsbn(e.target.value)
    setIsbnChanged(true)
  }

  const Scoredata = (e) => {
    setScore(e.target.value)
    setScoreChanged(true)
  }

  const Contentdata = (e) => {
    setContent(e.target.value)
    setContentChanged(true)
  }

  const BookSubmit = async (event) => {
    event.preventDefault()

    console.log('ISBN:', isbn)
    console.log('Score:', score)
    console.log('Content:', content)

    const book_review = prevArticleData.book_review
    const score2 = prevArticleData.score
    const ISBN2 = prevArticleData.ISBN

    try {
      const formData = {
        memberData: memberData.member_id,
        ISBN: isbn || ISBN2,
        score: score || score2,
        content: content || book_review,
      }

      console.log(formData)

      const response = await fetch(
        `http://localhost:3055/blog/bookreview/edit/${book_review_sid}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()
      console.log('從後端收到的響應：', data)

      setTimeout(() => {
        window.location.href = 'http://localhost:3000/blog/personal-page/review'
      }, 2000)
    } catch (error) {
      console.error('發送數據到後端時出錯：', error)
    }
  }

  return (
    <div className="container pt-5 pb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7">
          <form onSubmit={BookSubmit}>
            <h3 className="d-flex justify-content-center pb-5">編輯書評</h3>
            <div className={`mb-3 pt-3`}>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label fs-4"
              >
                ISBN
              </label>
              <input
                type="text"
                className={`form-control`}
                id="exampleFormControlInput1"
                value={prevArticleData?.ISBN}
                onChange={Titledata}
                disabled
              />
              <div
                style={{ fontSize: '16px' }}
                className="text-danger ps-2 pt-2"
              ></div>
            </div>
            <div className={`mb-3 pt-3`}>
              <label
                htmlFor="exampleFormControlTextarea1"
                className={`form-label fs-4`}
              >
                評分
              </label>
              <select
                className={`form-select`}
                aria-label="Default select example"
                value={score || prevArticleData?.score}
                onChange={Scoredata}
              >
                <option selected>選擇評分</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div
                style={{ fontSize: '16px' }}
                className="invalid-feedback ps-2 pt-2"
              ></div>
            </div>
            <div className="mb-3 pt-5">
              <label
                htmlFor="exampleFormControlTextarea1"
                className={`form-label fs-4`}
              >
                書評
              </label>
              <textarea
                className={`form-control `}
                id="exampleFormControlTextarea1"
                placeholder="請輸入文章內容"
                onChange={Contentdata}
                value={content || prevArticleData?.book_review}
                rows="6"
              ></textarea>
              <div
                style={{ fontSize: '16px' }}
                className="text-danger ps-2 pt-2"
              ></div>
            </div>
            <div className="d-flex justify-content-between pt-5">
              <div>
                <Button8 />
              </div>
              <div>
                <Button9 />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
