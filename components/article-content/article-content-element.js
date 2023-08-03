import Link from 'next/link'
import style from '@/components/article-content/article-content-element.module.css'
import Image from 'next/image'
import Avatar3 from '../book-review/blogavatar3'
import Button3 from '../common/button/button3'
import Button4 from '../common/button/button4'
import Button5 from '../common/button/button5'
import Button7 from '../common/button/button7'
import { useState, useEffect } from 'react'
import { BiSolidLike } from 'react-icons/bi'
import { useRouter } from 'next/router'

export default function ArticleContentElement() {
  const router = useRouter()
  const [article, setArticle] = useState([])
  const [isLiked, setIsLiked] = useState(false)


  useEffect(() => {
    console.log(router.query.blogid)
    if (!router.isReady) return
    if (router.query.blogid) {
      fetch(`http://localhost:3055/blog/${router.query.blogid}`)
        .then((response) => response.json())
        .then((data) => setArticle(data))
        .catch((error) => console.error('獲取文章失敗：', error))
    }
  }, [router])

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
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
      <div className="col-xl-7 px-xl-5 d-flex flex-column pb-5">
        <div
          className={`${style.chenbreadhole} ${style.chenre} text-body-tertiary pb-5`}
        >
          <Link
            href="#"
            className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}
          >
            首頁
          </Link>
          &#062;
          <Link
            href="#"
            className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}
          >
            部落格
          </Link>
          &#062;
          <Link
            href="#"
            className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}
          >
            熱門
          </Link>
        </div>
        <div className="border-bottom border-dark-subtle">
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="pb-1">
                  <Avatar3
                    nickname={article.length !== 0 && article[0][0].nickname}
                  />
                </div>
                <div className="d-flex align-items-center ps-3">
                  <h4 className={`${style.chenfs} pb-1 fw-bold`}>
                    {article.length !== 0 && article[0][0].blog_title}
                  </h4>
                </div>
              </div>
              <div className="d-flex pt-1">
                <Button3 member_id={article.length !== 0 && article[0][0].member_id}/>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between pt-3">
          <div>
            <Button4
              tag_classification={
                article.length !== 0 && article[0][0].tag_classification
              }
            />
          </div>
          <div>
            <Button5 blog_sid={article.length !== 0 && article[0][0].blog_sid}/>
          </div>
        </div>
        <div className="pt-5">
          <div className="pb-3">
            {article.length !== 0 && article[0][0].blog_img ? (
              <Image
                src={`/all_img/img/${encodeURIComponent(
                  article.length !== 0 && article[0][0].blog_img
                )}`}
                width={650}
                height={400}
                className={style.blogimg}
                alt={'img'}
              />
            ) : null}
          </div>
          <p className={`${style.chenbr}`}>
            {article.length !== 0 && article[0][0].blog_post}
          </p>
        </div>
        <div className="pt-5">
          <div className="d-flex justify-content-between">
            <h3 className="fw-bold pb-5">最新的回應</h3>
            <div>
              <Button7
                blog_sid={article.length !== 0 && article[0][0].blog_sid}
              />
            </div>
          </div>
          {article[1]?.length === 0 ? (
            <p className="d-flex justify-content-center">目前沒有人留言喔</p>
          ) : (
            article[1]?.map((reply, i) => (
              <div
                className="border-bottom border-dark-subtle pt-3 pb-2"
                key={i}
              >
                <div>
                  <Avatar3 nickname={reply.nickname} />
                  <div className={`pt-5 pb-3`}>
                    <p className={`${style.chenp} `}>{reply.reply_content}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="pt-3">
                    <span className={`${style.chensize}`}>
                      {formatDateString(reply.add_date)}
                    </span>
                  </div>
                  <div className="pt-2">
                    {isLiked ? (
                      <BiSolidLike
                        className="fs-3"
                        style={{ cursor: 'pointer', color: '#52796F' }}
                        onClick={handleLikeClick}
                      />
                    ) : (
                      <BiSolidLike
                        className="fs-3"
                        style={{ cursor: 'pointer' }}
                        onClick={handleLikeClick}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
