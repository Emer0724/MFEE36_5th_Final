import React from 'react'
import Link from 'next/link'
import styles from "@/components/Cart_component/Cart/REBook.module.css"
import fake from "@/assets/Cart_Image/fake.svg"
import Image from 'next/image'

export default function Recommend() {
    const Rebook = ["黃衣國王","藍衣國王","紅衣主教","綠帽達人"]
  return (
    <div className={styles.RebookDiv}>
      <div className={styles.RebookContain}>
          <h2>底下有喜歡的都可以一起買喔</h2>
     </div>
     <div className={styles.RebookBlock}>
          <h1 >已收藏書籍</h1>
          <div className={styles.Rebooklist}>
                {Rebook.map((v,i)=>{
            return(
                  <div className={styles.Rebookcard} key={i}>
                    <Image src={fake} alt='icon'/>
                    <Link href="#" className={styles.RebookBook}>
                        <p>{v}</p>
                    </Link>
                  </div>
                    )
                })}  
          </div>
      </div>
        

    </div>
  )
}
