import style from '@/components/common/button/button1.module.css'
import Link from 'next/link'

export default function Button1() {
    const BlogUp = '/blog/upload/blog-upload'
    const BookUp = '/blog/upload/book-upload'
  return (
    <div class="dropdown">
    <button class={`${style.chenbutton1} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
      創作
    </button>
    <ul class="dropdown-menu">
      <li><Link class="dropdown-item" href={BlogUp}>寫作品</Link></li>
      <li><Link class="dropdown-item" href={BookUp}>寫書評</Link></li>
    </ul>
  </div>
  )
}
