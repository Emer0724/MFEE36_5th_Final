import React from 'react'
import styles from './dropdown-menu.module.css'
import Link from 'next/link'

const DropdownMenu = ({ isLoggedIn, logout }) => {
  return (
    <div className={styles.dropdownMenu}>
      {isLoggedIn ? (
        <>
          <p className={styles.menuItem}>Hi, (會員名稱)</p>
          <Link href="/dashboard/profile" className={styles.menuItem}>
            會員資料
          </Link>
          <p className={styles.menuItem} onClick={logout}>
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
}

export default DropdownMenu
