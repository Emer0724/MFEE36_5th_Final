import BackButton from '../button/backbutton'
import Button13 from '../button/button13'
import { useState } from 'react'

export default function BookEditForm() {
  const [title, setTitle] = useState('')
  const [score, setScore] = useState('')
  const [content, setContent] = useState('')
  const [titleError, setTitleError] = useState('')
  const [scoreError, setScoreError] = useState('')
  const [contentError, setContentError] = useState('')

  const Titledata = (e) => {
    setTitle(e.target.value)
    setTitleError('')
  }

  const Scoredata = (e) => {
    setScore(e.target.value)
    setScoreError('')
  }

  const Contentdata = (e) => {
    setContent(e.target.value)
    setContentError('')
  }

  const BookSubmit = (event) => {
    event.preventDefault()

    console.log('Title:', title)
    console.log('Score:', score)
    console.log('Content:', content)

    let isValid = true

    if (!title) {
      setTitleError('請輸入書的ISBN!!')
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

    // 清空表单字段
    setTitle('')
    setScore('')
    setContent('')
  }

  return (
    <div className="container pt-5 pb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-7">
          <form onSubmit={BookSubmit}>
            <h3 className='d-flex justify-content-center pb-5'>編輯書評</h3>
            <div className={`mb-3 pt-3 ${titleError ? 'has-error' : ''}`}>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label fs-4"
              >
                ISBN
              </label>
              <input
                type="text"
                className={`form-control ${titleError ? 'is-invalid' : ''}`}
                id="exampleFormControlInput1"
                value={title}
                onChange={Titledata}
                placeholder="請輸入書的ISBN"
              />
              {titleError && (
                <div
                  style={{ fontSize: '16px' }}
                  className="text-danger ps-2 pt-2"
                >
                  {titleError}
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
                <Button13 />
              </div>
              <div>
                <BackButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
