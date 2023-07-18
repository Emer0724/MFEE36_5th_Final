import Link from 'next/link'
import Image from 'next/image'
// import 'bootstrap/dist/css/bootstrap.min.css'
import stlye from '@/components/book-review/blogavatar2.module.css'
import img1 from '@/public/blogimg/images.jpg'

export default function Avatar2() {
  return (
    <>
      <div>
        <Link href="#" className="pe-3">
          <Image
            src={img1}
            class={`${stlye.headblogimg} text-decoration-none`}
          />
        </Link>
        <Link
          href="#"
          className={`align-items-center fw-bold ${stlye.editbutton} text-black text-decoration-none`}
        >
          阿巴
        </Link>
      </div>
    </>
  )
}
