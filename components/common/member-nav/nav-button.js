import React, { useEffect, useState } from 'react'
import styles from '@/components/common/member-nav/used.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

export default function NavButton({ id, info, url, router1 }) {
  const [notify, setnotify] = useState('')
  const { auth } = useContext(AuthContext)
  const router = useRouter()
  useEffect(() => {
    if(localStorage.getItem('auth')){
      setnotify(JSON.parse(localStorage.getItem('auth')).notify)
    }
   
  }, [])
  //預設分頁
  const pageRouter = useRouter()
  const page = pageRouter.pathname.includes(router1)
  // console.log(pageRouter)
  return (
    <>
      <Link href={url} className={styles.mnav_a}>
        <li className={page ? styles.mnav_button_active : styles.mnav_button}>
          {info}

          <div>
            {notify && info === '二手書' ? (
              <span className={styles.notice}>{`(${notify})`}</span>
            ) : (
              ''
            )}
          </div>
        </li>
      </Link>
    </>
  )
}
