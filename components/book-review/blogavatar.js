import stlye from '@/components/book-review/blogavatar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '@/public/blog-img/images.jpg'
import people from '@/assets/used-svg/people.svg'
import { useState,useEffect } from 'react'

export default function Avatar({ nickname, mem_avatar }) {

  return (
    <>
      <div>
        <div className={`${stlye.chenpersonal} d-flex`}>
          <div>
              <Image src={mem_avatar ? mem_avatar : people} className={stlye.chenheadimg} />
          </div>
          <div className={`${stlye.no} text-decoration-none`}>
            <div className="fw-bold mb-0 mt-1 fs-5 text-dark">阿巴</div>
          </div>
          <div className={`${stlye.editbutton} mt-1 text-body-tertiary`}>
            <Link
              href="#"
              className={`${stlye.no}  text-decoration-none text-body-tertiary`}
            >
              登出
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
