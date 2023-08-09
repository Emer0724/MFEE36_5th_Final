import React from 'react'
import styles from './dropdown-menu.module.css'
import Link from 'next/link'
import { useRef,forwardRef } from 'react'

const DropdownMenu = forwardRef(({ isLoggedIn, gologout, nickname },ref) => {

  return (
    <div className={styles.dropdownMenu} ref={ref}>
      {isLoggedIn ? (
        <>
          <p className={styles.menuItem}>Hi, {nickname ? nickname : '文青'}</p>
          <Link href="/dashboard/profile" className={styles.menuItem}>
            會員資料
          </Link>
          <p
            className={styles.menuItem}
            role="presentation"
            onClick={() => gologout()}
          >
            登出
          </p>
        </>
      ) : (
        <Link href="/member/login" className={styles.menuItem}>
          登入
        </Link>
      )}
    </div>
  )
})

export default DropdownMenu
