import Link from 'next/link'
import style from '@/components/blog/blog-nav.module.css'
import Button1 from '../common/button/button1'
//實體圖
import { BiSolidBook } from 'react-icons/bi'
import { FaPencilAlt } from 'react-icons/fa'
import { GoPersonFill } from 'react-icons/go'
//空心圖
import { BiBook } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'

export default function BlogNav() {
  return (
    <>
      <div className={`${style.chennav} justify-content-between pb-3 pt-3`}>
        <div>
          <Link className="text-decoration-none fw-bold text-black" href="http://localhost:3000/blog/blog-home-page">
            <BiBook className="pb-1" />
            部落格
          </Link>
        </div>
        <div>
          <Link className="text-decoration-none fw-bold text-black" href="http://localhost:3000/blog/book-review">
            <BsPencil className="pb-1" />
            書評
          </Link>
        </div>
        <div>
          <Link className="text-decoration-none fw-bold text-black" href="http://localhost:3000/blog/personal-page/work">
            <GoPerson className="pb-1" />
            我的
          </Link>
        </div>
        <div>
            <Button1/>
        </div>
      </div>
    </>
  )
}
