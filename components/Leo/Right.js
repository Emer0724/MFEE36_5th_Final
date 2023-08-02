import React from 'react'
import styles from '@/components/Leo/Right.module.css'
// import UsedList from '@/components/used/used-list/index'

export default function Right(result) {
  const { data } = result
  const { rows } = data
  const { description } = rows[0]

  return (
    <>
      <div className={`${styles.content} ${styles.scrollable} `}>
        <h1 className={styles.title}>內容描述</h1>
        <pre className={`${styles.p} ${styles.verticalExpand}`}>
          {description}
        </pre>
      </div>
      <div className={styles.used}>
        <h1 className={styles.title}>二手書</h1>
        {/* <UsedList /> */}
      </div>
    </>
  )
}
