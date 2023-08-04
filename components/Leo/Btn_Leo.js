import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'next/link'
import styles from '@/components/Leo/Btn_Leo.module.css'

export default function ButtonStyle_l({ t1, onClick }) {
  // console.log(ISBN)
  return (
    <div className={styles.btnctstyle}>
      {/* <Link href={`/product/${ISBN}`} passHref> */}
      <button className={styles.buttonStyle_l} onClick={onClick}>
        {t1}
      </button>
      {/* </Link> */}
    </div>
  )
}

ButtonStyle_l.propTypes = {
  t1: PropTypes.string,
  onClick: PropTypes.func,
}
