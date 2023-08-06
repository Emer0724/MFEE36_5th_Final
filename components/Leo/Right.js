import React, { useEffect } from 'react'
import styles from '@/components/Leo/Right.module.css'
import UsedList from '@/components/used/used-list/index'

export default function Right({ result, usedAreaRef }) {
  const data = result || []
  const { rows } = data || {}
  const { description, ISBN } = rows?.[0] || {}
  console.log(ISBN)
  console.log(data)
  console.log(rows)

  useEffect(() => {
    if (usedAreaRef.current) {
      usedAreaRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [usedAreaRef])

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <h1 className={styles.title}>內容描述</h1>
          <pre className={`${styles.p} ${styles.verticalExpand}`}>
            {description}
          </pre>
        </div>
        <div className={styles.usedbox}>
          <h1 className={`${styles.title} ${styles.used}`} id="usedArea">
            二手書
          </h1>
          <UsedList datas={data} ISBN={ISBN} />
        </div>
      </div>
    </>
  )
}
