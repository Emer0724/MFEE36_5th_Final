import Button1 from '../common/button/button1'
//實心圖
import {BiSolidBook} from 'react-icons/bi'
import {FaPencilAlt} from 'react-icons/fa'
import {MdFavorite} from 'react-icons/md'
import {BiSolidBell} from 'react-icons/bi'
import {GoPersonFill} from 'react-icons/go'
//空心圖
import {BiBook} from 'react-icons/bi'
import {BsPencil} from 'react-icons/bs'
import {MdFavoriteBorder} from 'react-icons/md'
import {BiBell} from 'react-icons/bi'
import {GoPerson} from 'react-icons/go'

import Image from 'next/image'
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css'
import Avatar from "../book-review/blogavatar"
import style from '@/components/blog/toolbar.module.css'
import { useState } from 'react'

export default function ToolBar() {

    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (iconName) => {
      setSelectedIcon(iconName);
    };

    return (
        <>
          <div className="col-2">
            <Avatar />
            <div className={`flex-direction-column align-items-center justify-content-center d-flex pt-5 ${selectedIcon === 'blog' ? style.selected : ''}`}>
              <Link
                href="#"
                className={`text-decoration-none fw-bold fs-4 pb-2 ${selectedIcon === 'blog' ? style['icon-active'] : style['icon-inactive']} text-dark`}
                onClick={() => handleIconClick('blog')}
              >
                {selectedIcon === 'blog' ? (
                  <BiSolidBook className="pb-1 pe-1 fs-3" />
                ) : (
                  <BiBook className="pb-1 pe-1 fs-3" />
                )}
                部落格
              </Link>
            </div>
            <div className={`flex-direction-column align-items-center justify-content-center d-flex pt-5 ${selectedIcon === 'review' ? style.selected : ''}`}>
              <Link
                href="#"
                className={`text-decoration-none fw-bold fs-4 pb-2 ${selectedIcon === 'review' ? style['icon-active'] : style['icon-inactive']} text-dark`}
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
            <div className={`flex-direction-column align-items-center justify-content-center d-flex pt-5 ${selectedIcon === 'favorite' ? style.selected : ''}`}>
              <Link
                href="#"
                className={`text-decoration-none fw-bold fs-4 pb-2 ${selectedIcon === 'favorite' ? style['icon-active'] : style['icon-inactive']} text-dark`}
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
            <div className={`flex-direction-column align-items-center justify-content-center d-flex pt-5 ${selectedIcon === 'follow' ? style.selected : ''}`}>
              <Link
                href="#"
                className={`text-decoration-none fw-bold fs-4 pb-2 ${selectedIcon === 'follow' ? style['icon-active'] : style['icon-inactive']} text-dark`}
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
            <div className={`flex-direction-column align-items-center justify-content-center d-flex pt-5 ${selectedIcon === 'profile' ? style.selected : ''}`}>
              <Link
                href="#"
                className={`text-decoration-none fw-bold fs-4 pb-2 ${selectedIcon === 'profile' ? style['icon-active'] : style['icon-inactive']} text-dark`}
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
            <div className="flex-direction-column align-items-center justify-content-center d-flex pt-5">
              <Button1 />
            </div>
          </div>
        </>
      );
    }