import Like from './like'
import style from '@/components/blog/blog-nav.module.css'
import Button1 from '../common/button/button1'
import Link from 'antd/es/typography/Link'
import { useState } from 'react'
//實體圖
import { BiSolidBook } from 'react-icons/bi'
import { FaPencilAlt } from 'react-icons/fa'
import { GoPersonFill } from 'react-icons/go'
//空心圖
import { BiBook } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'

export default function LikeIntegrate() {
    const [activeNavItem, setActiveNavItem] = useState('部落格') // 默认值为'部落格'

    const handleNavItemClick = (item) => {
      setActiveNavItem(item)
    }
  return (
    <>
      <div className={`${style.chennav} justify-content-between pb-3 pt-3`}>
        <div>
          <Link
            className={`${
              style.chenfs
            } text-decoration-none fw-bold text-black ${
              activeNavItem === '部落格' ? 'active' : ''
            }`}
            href="http://localhost:3000/blog/blog-home-page"
            onClick={() => handleNavItemClick('部落格')}
          >
            {activeNavItem === '部落格' ? (
              <BiSolidBook className="pb-1" />
            ) : (
              <BiBook className="pb-1" />
            )}
            部落格
          </Link>
        </div>
        <div>
          <Link
            className={`${
              style.chenfs
            } text-decoration-none fw-bold text-black ${
              activeNavItem === '書評' ? 'active' : ''
            }`}
            href="http://localhost:3000/blog/book-review"
            onClick={() => handleNavItemClick('書評')}
          >
            {activeNavItem === '書評' ? (
              <FaPencilAlt className="pb-1" />
            ) : (
              <BsPencil className="pb-1" />
            )}
            書評
          </Link>
        </div>
        <div>
          <Link
            className={`${
              style.chenfs
            } text-decoration-none fw-bold text-black ${
              activeNavItem === '我的' ? 'active' : ''
            }`}
            href="http://localhost:3000/blog/personal-page/work"
            onClick={() => handleNavItemClick('我的')}
          >
            {activeNavItem === '我的' ? (
              <GoPersonFill className="pb-1" />
            ) : (
              <GoPerson className="pb-1" />
            )}
            我的
          </Link>
        </div>
        <div>
          <Button1 />
        </div>
      </div>
      <Like />
    </>
  )
}
