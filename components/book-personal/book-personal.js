import BlogPersonalAvatar from "../blog-personal/blog-personal-avatar"
import BookPersonalContent from "./book-personal.content"
import Link from "next/link"

export default function BookPersonal() {
    return (
        <div className="col-7 d-flex flex-column ps-5 pe-5">
        <div className="ps-5 pe-5">
            <div>
                <BlogPersonalAvatar/>
            <div className="d-flex pb-5 pt-5">
                <div>
                    <Link href="#" className="text-black fs-5 pe-4 text-decoration-none">作品</Link>
                </div>
                <div>
                    <Link href="#" className="text-black fs-5 text-decoration-none">書評</Link>
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