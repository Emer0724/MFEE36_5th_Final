import Button12 from '../common/button/button12'
import Link from 'next/link'
import Image from 'next/image'
import style from '@/components/blog/follow-columndown.module.css'
import people from '@/assets/used-svg/people.svg'
import { useEffect, useState } from 'react'

export default function FollowColumnDown() {
  const [follow, setFollow] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3055/blog/nav/follow')
      if (!response.ok) {
        throw new Error('沒有資料')
      }
      const data = await response.json()
      setFollow(data)
    } catch (error) {
      console.error('沒有資料', error)
    }
  }

  return (
    <>
      <div className={`d-flex justify-content-between pt-3 pb-3`}>
        <h5 className="fw-bold d-flex align-items-center">找你想看的</h5>
        <div className="d-flex">
          <Button12 />
        </div>
      </div>

      {follow.map((followDown) => (
        <>
          <div className="d-flex pb-3" key={followDown.blog_sid}>
            <Link
              href={`/blog/${follow.blog_sid}`}
              className={`pe-3 text-decoration-none`}
            >
              <Image
                src={followDown.mem_avatar ? followDown.mem_avatar : people}
                className={`${style.chenheadblogimg}`}
                alt={'img'}
              />
            </Link>
            <div>
              <div className="pb-2">
                <Link
                  href={`/blog/${followDown.blog_sid}`}
                  className={`text-decoration-none d-flex align-items-center fw-bold ${style.editbutton} text-black`}
                >
                  {followDown.nickname}
                </Link>
              </div>
              <div>
                <Link
                  href={`/blog/${followDown.blog_sid}`}
                  className={`${style.editbutton} text-decoration-none text-black`}
                >
                  {followDown.blog_title}
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  )
}
