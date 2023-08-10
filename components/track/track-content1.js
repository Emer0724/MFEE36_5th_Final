import TrackNav from './track-nav'
import TrackContent from './track-content'
import style from '@/components/book-personal/book-personal.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function TrackContent1() {
  const [activeNavItem, setActiveNavItem] = useState('追蹤')

  const handleNavItemClick = (item) => {
    setActiveNavItem(item)
  }
  const Work = '/blog/personal-page/work'
  const Bookrw = '/blog/personal-page/review'
  const like = '/blog/favorite'
  const track = '/blog/track'
  return (
    <div className={`col-xl-7 px-xl-5 d-flex flex-column pb-5`}>
      <div className="row">
      <div className={style.chendis}>
        <div className={`${style.chenblognav} d-flex pb-5 pt-5`}>
          <div>
            <Link
              onClick={() => handleNavItemClick('作品')}
              href={Work}
              style={{ color: activeNavItem === '作品' ? '#52796F' : 'black' }}
              className={`fs-5 text-decoration-none`}
            >
              作品
            </Link>
          </div>
          <div>
            <Link
              onClick={() => handleNavItemClick('書評')}
              href={Bookrw}
              style={{ color: activeNavItem === '書評' ? '#52796F' : 'black' }}
              className={`fs-5 text-decoration-none`}
            >
              書評
            </Link>
          </div>
          <div>
            <Link
              onClick={() => handleNavItemClick('最愛')}
              href={like}
              style={{ color: activeNavItem === '最愛' ? '#52796F' : 'black' }}
              className={`fs-5 text-decoration-none`}
            >
              最愛
            </Link>
          </div>
          <div>
            <Link
              onClick={() => handleNavItemClick('追蹤')}
              href={track}
              style={{ color: activeNavItem === '追蹤' ? '#52796F' : 'black' }}
              className={`fs-5 text-decoration-none`}
            >
              追蹤
            </Link>
          </div>
        </div>
      </div>
        <TrackNav />
        <TrackContent />
      </div>
    </div>
  )
}
