import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/components/Cart_component/Cart/REBook.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Recommend() {
  const router = useRouter()
  const [recommand, setrecommand] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      router.push('/member/login')
    } else {
      const storedData = localStorage.getItem('auth')
      const formData = JSON.parse(storedData)
      const member1 = formData.member_id
      fetch(`${process.env.API_SERVER}/cart/cart/recommand?member=${member1}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((recommand) => {
          const copiedRecommand = JSON.parse(JSON.stringify(recommand))
          const selectedRecommand = []
          while (selectedRecommand.length < 4 && copiedRecommand.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * copiedRecommand.length
            )
            const selectedBook = copiedRecommand.splice(randomIndex, 1)[0]
            if (
              !selectedRecommand.some((item) => item.ISBN === selectedBook.ISBN)
            ) {
              selectedRecommand.push(selectedBook)
            }
            setrecommand(selectedRecommand)
          }
        })
    }
  }, [])

  return (
    <div className={styles.RebookDiv}>
      <div className={styles.RebookContain}>
        <h2>底下有喜歡的都可以一起買喔</h2>
      </div>
      <div className={styles.RebookBlock}>
        <h1>已收藏書籍</h1>
        <div className={styles.Rebooklist}>
          {recommand.map((v, i) => {
            return (
              <div className={styles.Rebookcard} key={i}>
                <Link href={`./${v.ISBN}`} className={styles.RebookBook}>
                  <Image
                    src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`}
                    width={200}
                    height={200}
                    alt="icon"
                  />
                  <p className={styles.Rebooktext}>{v.book_name}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
