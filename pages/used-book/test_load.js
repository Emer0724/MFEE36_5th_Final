import React from 'react'
import css from '@/pages/used-book/test_load.module.css'
import logo from '@/assets/used-svg/LOGO_notext.svg'
import Image from 'next/image';

export default function TestLoad() {
  return (
    <>
     <div className={css.container}>
      <div className={css.center_1}> <div className={css.center}>
      <Image
            src={logo}
            width={200}
            height={200}
            alt="icon"
            style={{color:'#52796F'}}
            className={css.logo}
          />
     <h3 className={css.slogan}>延續書的意義</h3>
     <h3 className={css.logoName}>BOOK 書易</h3>
     </div>
     
      </div>
     
     </div>
     
    </>
  );
}