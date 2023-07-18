import React from 'react'
import c from './member_breadcrumbs.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function MemberBreadcrumbs_2() {
  const router = useRouter()
  console.log(router.asPath)
  console.log(router.asPath === '/dashboard/used/display')

  return (
    <div className={`${c.crumbs_box} justify-content-start`}>
      <div className={`${c.crumbs_none} `}>
        <Link
          href="/dashboard/used/display"
          className={` ${c.under_line} ${
            router.asPath === '/dashboard/used/display'
              ? c.selected
              : c.unselected
          } `}
        >
          <p>賣二手書</p>
        </Link>
      </div>
      <div className={`${c.crumbs_border} `}>
        <Link
          href="/dashboard/used/changebook-message"
          className={` ${c.under_line} ${
            router.asPath === '/dashboard/used/changebook-message'
              ? c.selected
              : c.unselected
          } `}
        >
          <p>二手書進度</p>
        </Link>
      </div>
    </div>
  )
}
