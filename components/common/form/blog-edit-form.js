import Button8 from '../button/button8'
import Button9 from '../button/button9'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsTagFill } from 'react-icons/bs'

export default function BlogForm() {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [image, setImage] = useState('');
  const [content, setContent] = useState('')
  const [memberData, setMemberData] = useState([])
  const [titleChanged, setTitleChanged] = useState(false);
  const [tagChanged, setTagChanged] = useState(false);
  const [contentChanged, setContentChanged] = useState(false);
  const [prevArticleData, setPrevArticleData] = useState({})
  const router = useRouter('');
  const {blog_sid} = router.query


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
    const fetchPrevArticleData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3055/blog/edit/lookblog/${blog_sid}`
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
    setTitle(e.target.value)
    setTitleChanged(true)
  }

  const Tagdata = (e) => {
    setTag(e.target.value)
    setTagChanged(true)
  }

  const Imagedata = (e) => {
    setImage(e.target.value)
  }

  console.log('title:', title)
  console.log('img', image)
  console.log('tag:', tag)
  console.log('Content:', content)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]

    if (selectedFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result) // 將 base64 圖片數據設定為 image 狀態
      }
      reader.readAsDataURL(selectedFile) // 將文件轉換為 base64
    } else {
      setImage(null)
    }
  }

  const Contentdata = (e) => {
    setContent(e.target.value)
    setContentChanged(true)
  }

  const BlogSubmit = async (event) => {
    event.preventDefault()

    const title2 = prevArticleData.blog_title
    const tag2 = prevArticleData.tag_id
    const content2 = prevArticleData.blog_post

    try {
      const formData = {
        member_id: user,
        title: title || title2,
        tag: tag || tag2,
        image: image ? image : null,
        content: content || content2,
      }
      
      console.log(formData)

      // 使用fetch將表單數據發送到後端API
      const response = await fetch(`http://localhost:3055/blog/blog/edit/${blog_sid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log('從後端收到的響應：', data)
      window.location.href = 'http://localhost:3000/blog/personal-page/work'

    } catch (error) {
      console.error('發送數據到後端時出錯：', error)
    }
  }

  return (
    <div className="container pt-5 pb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7">
          <form 
          onSubmit={BlogSubmit}
          action={`${process.env.API_SERVER}/blog/upload`}
          id="uploadForm"
          method="post"
          encType="multipart/form-data">
            <h3 className="d-flex justify-content-center pb-5">編輯作品</h3>
            <div className={`mb-3 pt-3`}>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label fs-4"
              >
                文章標題
              </label>
              <input
                type="text"
                className={`form-control`}
                id="exampleFormControlInput1"
                value={title || prevArticleData?.blog_title}
                onChange={Titledata}
                placeholder="請輸入標題"
              />
                <div
                  style={{ fontSize: '16px' }}
                  className="text-danger ps-2 pt-3"
                >
                </div>
            </div>
            <div className="pb-3 pt-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label fs-4"
              >
                TAG
              </label>
              <select
                className={`form-select`}
                aria-label="Default select example"
                value={tag || prevArticleData?.tag_id}
                onChange={Tagdata}
              >
                <option selected>選擇TAG</option>
                <option value="1">愛情</option>
                <option value="2">旅遊</option>
                <option value="3">生活</option>
                <option value="4">工作</option>
                <option value="5">教育</option>
                <option value="6">書</option>
              </select>
                <div
                  style={{ fontSize: '16px' }}
                  className="text-danger ps-2 pt-3"
                >
                </div>
            </div>
              <div className="mb-3 pt-3">
                <label htmlFor="formFile" className="form-label fs-4">
                  上傳圖片
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => {
                    Imagedata(e)
                    handleFileChange(e)
                  }}
                />
                {image && (
                  <img
                    src={image}
                    alt="預覽圖片"
                    style={{ width: '400px', marginTop: '10px' }}
                  />
                )}
              </div>
            <div className="mb-3 pt-5">
              <label
                htmlFor="exampleFormControlTextarea1"
                className={`form-label fs-4`}
              >
                文章內容
              </label>
              <textarea
                className={`form-control`}
                id="exampleFormControlTextarea1"
                placeholder="請輸入文章內容"
                onChange={Contentdata}
                value={content || prevArticleData?.blog_post}
                rows="6"
              ></textarea>
                <div
                  style={{ fontSize: '16px' }}
                  className="text-danger ps-2 pt-3"
                >
                </div>
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
