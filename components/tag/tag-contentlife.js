import Link from 'next/link'
import Avatar2 from '../book-review/blogavatar2'
import Image from 'next/image'
import style from '@/components/blog/blog_content.module.css'
import { useState, useEffect } from 'react'

export default function TagContentLife() {
  const [blogSort, setBlogSort] = useState('desc')
  const [cblog, setcBlog] = useState([])

  useEffect(() => {
    fetchBlogList()
  }, [blogSort])

  const fetchBlogList = async () => {
    try {
      const response = await fetch(`http://localhost:3055/blog/taglife/${blogSort}`)
      const data = await response.json()
      setcBlog(data)
    } catch (error) {
      console.error('获取部落格列表失败：', error)
    }
  }
  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  }

  const handleSortChange = (sortOption) => {
    setBlogSort(sortOption)
  }

  return (
    <div className={`col-xl-7 px-xl-5 d-flex flex-column`}>
      <div className={`${style.bread}`}>
      </div>
      <div className={`${style.chenjc} d-flex pb-3`}>
        <div className="pe-4 pb-3">
          <Link
            href="#"
            onClick={() => handleSortChange('desc')}
            style={{ color: blogSort === 'desc' ? '#52796F' : 'black' }}
            className={`${style.chenp} fs-5 text-decoration-none`}
          >
            最新
          </Link>
        </div>
        <div>
          <Link
            href="#"
            onClick={() => handleSortChange('asc')}
            style={{ color: blogSort === 'asc' ? '#52796F' : 'black' }}
            className={`${style.chenp} fs-5 text-decoration-none`}
          >
            最舊
          </Link>
        </div>
      </div>
      <>
        <div className="row">
          {cblog.map((blog) => (
            <>
              <div key={blog.blog_sid}>
                <Link
                  href={`/blog/${blog.blog_sid}`}
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
                    href={`/blog/${blog.blog_sid}`}
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
            </>
          ))}
        </div>
      </>
    </div>
  )
}
