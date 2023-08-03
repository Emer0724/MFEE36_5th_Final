import React from 'react'
import styles from '@/components/common/popup/PopUp.module.css'

export default function PopUp({ content1, content2,}) {
  return (
    <>
      <div className={styles.PopUpcontain}>
        <h5 className={styles.PopUpstyleh1}>{content1}</h5>
        <h5 className={styles.PopUpstyleh2}>{content2}</h5>
        <div style={styles.PopUpBtnGroup}>  
        </div>
      </div>
    </>
  )
}
