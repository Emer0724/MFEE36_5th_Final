import Link from 'next/link'
import Image from 'next/image'
import stlye from '@/components/book-review/blogavatar2.module.css'
import img1 from '@/public/blog-img/images.jpg'

export default function TrackAvatar() {

  return (
    <>
      <div>
        <Link href="" className="pe-3">
          <Image
            className={`${stlye.headblogimg} text-decoration-none`}
          />
        </Link>
        <Link
          href=""
          className={`align-items-center fw-bold ${stlye.editbutton} text-black text-decoration-none`}
        >
          阿巴
        </Link>
      </div>
    </>
  )
}
