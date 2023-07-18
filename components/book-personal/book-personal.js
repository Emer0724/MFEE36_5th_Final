import BlogPersonalAvatar from "../blog-personal/blog-personal-avatar"
import BookPersonalContent from "./book-personal.content"
import style from '@/components/book-personal/book-personal.module.css'
import Link from "next/link"

export default function BookPersonal() {

    const Work = '/blog/personal-page/work'
    const Bookrw = '/blog/personal-page/review'

    return (
        <div className="col-7 d-flex flex-column ps-5 pe-5">
        <div className="ps-5 pe-5">
            <div>
                <BlogPersonalAvatar/>
            <div className="d-flex pb-5 pt-5">
                <div className="pe-4">
                    <Link href={Work} className={` ${style.chenbread} text-black fs-5 text-decoration-none`}>作品</Link>
                </div>
                <div>
                    <Link href={Bookrw} className={` ${style.chenbread} text-black fs-5 text-decoration-none`}>書評</Link>
                </div>
            </div>
                <BookPersonalContent/>
                <BookPersonalContent/>
                <BookPersonalContent/>
                <BookPersonalContent/>
                <BookPersonalContent/>        
            </div>
        </div>
        </div>
    )
}