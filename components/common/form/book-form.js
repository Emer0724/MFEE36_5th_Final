import Button8 from '../button/button8'
import Button9 from '../button/button9'
import { useState } from 'react'

export default function BookForm() {
  const [isbn, setIsbn] = useState('')
  const [score, setScore] = useState('')
  const [content, setContent] = useState('')
  const [isbnError, setIsbnError] = useState('')
  const [scoreError, setScoreError] = useState('')
  const [contentError, setContentError] = useState('')

  const Titledata = (e) => {
    setIsbn(e.target.value)
    setIsbnError('')
  }

  const Scoredata = (e) => {
    setScore(e.target.value)
    setScoreError('')
  }

  const Contentdata = (e) => {
    setContent(e.target.value)
    setContentError('')
  }

  const BookSubmit = async (event) => {
    event.preventDefault()

    console.log('ISBN:', isbn)
    console.log('Score:', score)
    console.log('Content:', content)

    let isValid = true

    if (!isbn) {
      setIsbnError('請輸入書的ISBN!!')
      isValid = false
    }

    if(!score) {
        setScoreError('請選擇評分')
        isValid = false
    }

    if (!content) {
      setContentError('請輸入書評內容!!')
      isValid = false
    }

    if (!isValid) {
      return
    }
    

    try {
      const formData = {
        ISBN: isbn,
        score: score,
        content: content,
      }

      console.log(formData)

      // 使用fetch將表單數據發送到後端API
      const response = await fetch('http://localhost:3055/blog/bookreviewupload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log('從後端收到的響應：', data)

    // 清空表单字段
    setIsbn('')
    setScore('')
    setContent('')
    } catch (error) {
      console.error('發送數據到後端時出錯：', error)
    }
  }

  return (
    <div className="container pt-5 pb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7">
          <form onSubmit={BookSubmit}>
            <h3 className='d-flex justify-content-center pb-5'>寫書評</h3>
            <div className={`mb-3 pt-3 ${isbnError ? 'has-error' : ''}`}>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label fs-4"
              >
                ISBN
              </label>
              <input
                type="text"
                className={`form-control ${isbnError ? 'is-invalid' : ''}`}
                id="exampleFormControlInput1"
                value={isbn}
                onChange={Titledata}
                placeholder="請輸入書的ISBN"
              />
              {isbnError && (
                <div
                  style={{ fontSize: '16px' }}
                  className="text-danger ps-2 pt-2"
                >
                  {isbnError}
                </div>
              )}
            </div>
            <div className={`mb-3 pt-3 ${scoreError ? 'has-error' : ''}`}>
              <label
                htmlFor="exampleFormControlTextarea1"
                className={`form-label fs-4`}
              >
                評分
              </label>
              <select 
              className={`form-select ${scoreError ? 'is-invalid' : ''}`} 
              aria-label="Default select example"
              value={score}
              onChange={Scoredata}>
                <option selected>選擇評分</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {scoreError && <div style={{ fontSize: '16px' }} className="invalid-feedback ps-2 pt-2">{scoreError}</div>}
            </div>
            <div className="mb-3 pt-5">
              <label
                htmlFor="exampleFormControlTextarea1"
                className={`form-label fs-4 ${contentError ? 'has-error' : ''}`}
              >
                書評
              </label>
              <textarea
                className={`form-control ${contentError ? 'is-invalid' : ''}`}
                id="exampleFormControlTextarea1"
                placeholder="請輸入文章內容"
                onChange={Contentdata}
                value={content}
                rows="6"
              ></textarea>
              {contentError && (
                <div
                  style={{ fontSize: '16px' }}
                  className="text-danger ps-2 pt-2"
                >
                  {contentError}
                </div>
              )}
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
