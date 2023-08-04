import Button6 from '../common/button/button6'
import Link from 'next/link'
import Image from 'next/image'
import stlye from '@/components/book-review/blogavatar2.module.css'
import people from '@/assets/used-svg/people.svg'
import { useState, useEffect } from 'react'

export default function TrackContent() {
  const [data, setData] = useState([])
  const [memberData, setMemberData] = useState([])

  useEffect(() => {
    // 從本地儲存空間獲取會員資料
    const storedMemberData = localStorage.getItem('auth')

    if (storedMemberData) {
      const parsedMemberData = JSON.parse(storedMemberData)
      setMemberData(parsedMemberData)
    }
  }, [])

  const user = memberData.member_id

  useEffect(() => {
    fetch(`http://localhost:3055/blog/looktrack/${user}`)
      .then((response) => response.json())
      .then((data) => {
        // 將數據保存在組件的狀態中
        setData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [user])

  return (
    <>
      {data.map((item) => (
        <>
          <div className="d-flex justify-content-between pb-3 pt-5">
            <div key={item.member2_id}>
              {item.mem_avatar ? (
                <Link href="" className="pe-3">
                  <Image
                    src={item.mem_avatar}
                    className={`${stlye.headblogimg} text-decoration-none`}
                    alt="member_avatar"
                  />
                </Link>
              ) : (
                <Image
                  src={people}
                  className={`${stlye.headblogimg} text-decoration-none`}
                  alt="default_avatar"
                />
              )}
              <Link
                href=""
                className={`align-items-center fw-bold ${stlye.editbutton} text-black text-decoration-none ps-3`}
              >
                {item.nickname}
              </Link>
            </div>
            <div className="pt-2">
              <Button6 member2_id={item.member2_id}/>
            </div>
          </div>
        </>
      ))}
    </>
  )
}
