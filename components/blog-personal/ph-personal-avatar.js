import stlye from '@/components/book-review/blogavatar.module.css'
import Image from 'next/image'
import img1 from '@/public/blog-img/images.jpg'

export default function PhPersonalAvatar() {
  return (
    <>
      <div className={`${stlye.phava}`}>
        <div className={`${stlye.chenpersonal} d-flex`}>
          <div>
            <div>
              <Image src={img1} className={stlye.chenheadimg} />
            </div>
          </div>
          <div className={`text-decoration-none`}>
            <div className={`${stlye.chenwd} fw-bold mb-0 mt-1 text-dark pb-2`}>
              阿巴
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
