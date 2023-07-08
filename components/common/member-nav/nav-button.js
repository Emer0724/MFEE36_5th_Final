import React from 'react'
import styles from '@/components/common/member-nav/used.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NavButton({id,info,url,router1}) {
  //預設分頁
  const pageRouter=useRouter()
const page=pageRouter.pathname.includes(router1)
// console.log(pageRouter)
  return (
    <>
      <Link href={url} className={styles.mnav_a }>
        <li className={page ? styles.mnav_button_active : styles.mnav_button}>{info}</li>
      </Link>
    </>
  )
}
