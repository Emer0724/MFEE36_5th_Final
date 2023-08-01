import Avatar2 from '../book-review/blogavatar2'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/components/blog/blog-home.module.css'

export default function BlogHome({
  blog_sid,
  nickname,
  add_date,
  blog_img,
  blog_post,
  blog_title,
  mem_avatar,
}) {
  return (
    <div
      className={`${style.blogborder} ps-5 pe-5`}
      style={{ width: '100%', backgroundColor: '#FFF' }}
    >
      <div className={`pt-4 pb-2`}>
        <Link href="#" className="text-black text-decoration-none text-center">
          <h4 className={style.title_limit}>{blog_title}</h4>
        </Link>
      </div>
      <div className="d-flex justify-content-between   align-items-center">
        <Avatar2 nickname={nickname} mem_avatar={mem_avatar} />
        <div className="pt-3">
          <div className="d-flex justify-content-center ">
            {blog_img ? (
              <Image
                src={`/all_img/img/${blog_img}`}
                className={`${style.blogimg}`}
                width={100}
                height={100}
                alt="Img"
              />
            ) : (
              <div style={{ width: '100px', height: '100px' }}></div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-3 w-100">
        <Link
          href="#"
          className="text-black text-decoration-none text-center w-100"
        >
          <p className={style.blog_limit}>{blog_post}</p>
        </Link>
      </div>
      <div className="pb-3">
        <div className={`${style.chendate}`}>
          <span>{add_date}</span>
        </div>
      </div>
    </div>
  )
}
