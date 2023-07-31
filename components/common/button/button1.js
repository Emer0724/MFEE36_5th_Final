import style from '@/components/common/button/button1.module.css'
import Link from 'next/link'

export default function Button1() {
    const BlogUp = '/blog/upload/blog-upload'
    const BookUp = '/blog/upload/book-upload'
  return (
    <div className="dropdown">
    <button className={`${style.chenbutton1} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
      創作
    </button>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" href={BlogUp}>寫作品</Link></li>
      <li><Link className="dropdown-item" href={BookUp}>寫書評</Link></li>
    </ul>
  </div>
  )
}
