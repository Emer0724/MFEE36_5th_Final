import style from '@/components/book-personal/book-personal.module.css'
import Link from 'next/link'

export default function BlogPersonalNav() {

    const Work = '/blog/personal-page/work'
    const Bookrw = '/blog/personal-page/review'
    const like = '/blog/favorite'
    const track = '/blog/track'

  return (
    <>
            <div className={`${style.chenblognav} d-flex pb-5 pt-5`}>
                <div>
                    <Link href={Work} className={`text-black fs-5 text-decoration-none`}>作品</Link>
                </div>
                <div>
                    <Link href={Bookrw} className={`text-black fs-5 text-decoration-none`}>書評</Link>
                </div>
                <div>
                    <Link href={like} className={`text-black fs-5 text-decoration-none`}>最愛</Link>
                </div>
                <div>
                    <Link href={track} className={`text-black fs-5 text-decoration-none`}>追蹤</Link>
                </div>
            </div>
    </>
  )
}
