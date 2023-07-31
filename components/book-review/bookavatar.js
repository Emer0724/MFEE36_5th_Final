import Link from 'next/link'
import Image from 'next/image'
import stlye from '@/components/book-review/blogavatar2.module.css'
import img1 from '@/public/blog-img/images.jpg'

export default function BookAvatar({nickname}) {

  return (
    <>
      <div>
        <Link href="" className="pe-3">
          <Image
            src={img1}
            className={`${stlye.headblogimg} text-decoration-none`}
          />
        </Link>
        <Link
          href=""
          className={`align-items-center fw-bold ${stlye.editbutton} text-black text-decoration-none`}
        >
          {nickname}
        </Link>
      </div>
    </>
  )
}
