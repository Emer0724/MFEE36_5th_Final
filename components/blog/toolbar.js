import Button1 from '../common/button/button1'
//實心圖
import { BiSolidBook } from 'react-icons/bi'
import { FaPencilAlt } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { BiSolidBell } from 'react-icons/bi'
import { GoPersonFill } from 'react-icons/go'
//空心圖
import { BiBook } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { BiBell } from 'react-icons/bi'
import { GoPerson } from 'react-icons/go'

import Image from 'next/image'
import Link from 'next/link'
import Avatar from '../book-review/blogavatar'
import style from '@/components/blog/toolbar.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ToolBar() {
  const BlogClick = '/blog/blog-home-page'
  const reviewClick = '/blog/book-review'
  const favoriteClick = '/blog/favorite'
  const trackClick = '/blog/track'
  const personalClick = '/blog/personal-page/work'

  const [selectedIcon, setSelectedIcon] = useState(null)
  const [memberData, setMemberData] = useState([])

  useEffect(() => {
    // 從本地儲存空間獲取會員資料
    const storedMemberData = localStorage.getItem('auth');

    if (storedMemberData) {
      const parsedMemberData = JSON.parse(storedMemberData);
      setMemberData(parsedMemberData)
    }
  }, [])


  useEffect(() => {
    const storedIcon = localStorage.getItem('selectedIcon')
    if (storedIcon) {
      setSelectedIcon(storedIcon)
    } else {
      setSelectedIcon('blog')
    }
  }, [])

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName)

    localStorage.setItem('selectedIcon', iconName)
  }

  return (
    <div className="row">
      <div className={`${style.toolbarContainer} ${style.nav}`}>
        <div className={`${style.stickyLeft} col-2`}>
          <Avatar 
          nickname={memberData.nickname}
          mem_avatar={memberData.mem_avatar}/>
          <div
            className={`flex-column align-items-center justify-content-center d-flex pt-5 ${
              selectedIcon === 'blog' ? style.selected : ''
            }`}
          >
            <Link
              href={BlogClick}
              className={`text-decoration-none fw-bold fs-4 pb-2 ${
                selectedIcon === 'blog'
                  ? style['icon-active']
                  : style['icon-inactive']
              } text-dark`}
              onClick={() => handleIconClick('blog')}
            >
              {selectedIcon === 'blog' ? (
                <BiSolidBook className={`pb-1 pe-1 fs-3`} />
              ) : (
                <BiBook className={`pb-1 pe-1 fs-3`} />
              )}
              部落格
            </Link>
          </div>
          <div
            className={`flex-column align-items-center justify-content-center d-flex pt-5 ${
              selectedIcon === 'review' ? style.selected : ''
            }`}
          >
            <Link
              href={reviewClick}
              className={`text-decoration-none fw-bold fs-4 pb-2 ${
                selectedIcon === 'review'
                  ? style['icon-active']
                  : style['icon-inactive']
              } text-dark`}
              onClick={() => handleIconClick('review')}
            >
              {selectedIcon === 'review' ? (
                <FaPencilAlt className="pb-1 pe-1 fs-3" />
              ) : (
                <BsPencil className="pb-1 pe-1 fs-3" />
              )}
              書評
            </Link>
          </div>
          <div
            className={`${
              style.no
            } flex-column align-items-center justify-content-center d-flex pt-5 ${
              selectedIcon === 'favorite' ? style.selected : ''
            }`}
          >
            <Link
              href={favoriteClick}
              className={`text-decoration-none fw-bold fs-4 pb-2 ${
                selectedIcon === 'favorite'
                  ? style['icon-active']
                  : style['icon-inactive']
              } text-dark`}
              onClick={() => handleIconClick('favorite')}
            >
              {selectedIcon === 'favorite' ? (
                <MdFavorite className="pb-1 pe-1 fs-3" />
              ) : (
                <MdFavoriteBorder className="pb-1 pe-1 fs-3" />
              )}
              最愛
            </Link>
          </div>
          <div
            className={`flex-column align-items-center justify-content-center d-flex pt-5 ${
              selectedIcon === 'follow' ? style.selected : ''
            }`}
          >
            <Link
              href={trackClick}
              className={`text-decoration-none fw-bold fs-4 pb-2 ${
                selectedIcon === 'follow'
                  ? style['icon-active']
                  : style['icon-inactive']
              } text-dark`}
              onClick={() => handleIconClick('follow')}
            >
              {selectedIcon === 'follow' ? (
                <BiSolidBell className="pb-1 pe-1 fs-3" />
              ) : (
                <BiBell className="pb-1 pe-1 fs-3" />
              )}
              追蹤
            </Link>
          </div>
          <div
            className={`flex-column align-items-center justify-content-center d-flex pt-5 ${
              selectedIcon === 'profile' ? style.selected : ''
            }`}
          >
            <Link
              href={personalClick}
              className={`text-decoration-none fw-bold fs-4 pb-2 ${
                selectedIcon === 'profile'
                  ? style['icon-active']
                  : style['icon-inactive']
              } text-dark`}
              onClick={() => handleIconClick('profile')}
            >
              {selectedIcon === 'profile' ? (
                <GoPersonFill className="pb-1 pe-1 fs-3" />
              ) : (
                <GoPerson className="pb-1 pe-1 fs-3" />
              )}
              我的
            </Link>
          </div>
          <div className="flex-column align-items-center justify-content-center d-flex pt-5">
            <Button1 />
          </div>
        </div>
      </div>
    </div>
  )
}
