import Avatar2 from '../book-review/blogavatar2'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/components/blog/blog_content.module.css'
import { useState, useEffect } from 'react'

const blogcontent = '/blog/recommend'

export default function BlogContent() {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetchData()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `http://localhost:3055/blog/blog?offset=${offset}`
      )
      if (!response.ok) {
        throw new Error('沒有資料')
      }
      const data = await response.json()
      setBlogs((prevBlogs) => [...prevBlogs, ...data])
      setOffset((prevOffset) => prevOffset + 10)
    } catch (error) {
      console.error('沒有資料', error)
    }
    setIsLoading(false)
  }

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
      fetchData()
    }
  }

  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  }

  return (
    <>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.blog_sid}>
            <Link
              href={blogcontent}
              className={`${style.blogtitle} pb-3 text-black text-decoration-none`}
            >
              <span className={`${style.chenfs}`}>{blog.blog_title}</span>
            </Link>
            <div className="d-flex pt-3">
              <Avatar2 nickname={blog.nickname} />
            </div>
            <div className="pt-3">
              {blog.blog_img ? (
                <Image
                  src={`http://localhost:3055/blogimg/${blog.blog_img}`}
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
            <div className="pt-3">
              <Link
                href={blogcontent}
                className={`${style.chenover}  text-black text-decoration-none`}
              >
                <p>{blog.blog_post}</p>
              </Link>
            </div>
            <div className="pb-3 pt-3">
              <div className={`border-bottom ${style.chendate}`}>
                <span>{formatDateString(blog.add_date)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </>
  )
}