import React from 'react'
import Link from 'next/link'
import styles from "@/components/Cart_component/Cart/REBook.module.css"
import Image from 'next/image'

export default function Recommend({recommand}) {
  if (!Array.isArray(recommand)) {
    return null;
  }
  
  return (
    <div className={styles.RebookDiv}>
      <div className={styles.RebookContain}>
          <h2>底下有喜歡的都可以一起買喔</h2>
     </div>
     <div className={styles.RebookBlock}>
          <h1 >已收藏書籍</h1>
          <div className={styles.Rebooklist}>
                {recommand.map((v,i)=>{
                  return(
                  <div className={styles.Rebookcard} key={i}>
                    <Image src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`} width={200} height={200} alt='icon'/>
                    <Link href="#" className={styles.RebookBook}>
                        <p>{v.book_name}</p>
                    </Link>
                  </div>
                    )
                })}  
          </div>
      </div>
    </div>
  )
}
