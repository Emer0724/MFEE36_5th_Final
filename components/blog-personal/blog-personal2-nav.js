import Link from "next/link"
import style from '@/components/blog-personal/blog-personal2-nav.module.css'


export default function BlogPersonal2Nav() {

    const Work = '/blog/personal-page/work'
    const Bookrw = '/blog/personal-page/review'

  return (
    <div className={`${style.chenjc}`}>
      <div className={` d-flex pb-3 pt-5`}>
        <div className="pe-4">
          <Link
            href={Work}
            className={`text-black fs-5 text-decoration-none`}
          >
            作品
          </Link>
        </div>
        <div>
          <Link
            href={Bookrw}
            className={`text-black fs-5 text-decoration-none`}
          >
            書評
          </Link>
        </div>
      </div>
    </div>
  )
}
