import BlogPersonalAvatar from "./blog-personal-avatar"
import BlogPersonalContent from "./blog-personal-content"
import Link from "next/link"

export default function BlogPersonal() {
    return (
        <div className="col-7 d-flex flex-column ps-5 pe-5">
        <div className="ps-5 pe-5">
            <div>
                <BlogPersonalAvatar/>
            <div className="d-flex pb-3 pt-5">
                <div>
                    <Link href="#" className="text-black fs-5 pe-4 text-decoration-none">作品</Link>
                </div>
                <div>
                    <Link href="#" className="text-black fs-5 text-decoration-none">書評</Link>
                </div>
            </div>
                <BlogPersonalContent/>
                <BlogPersonalContent/>
                <BlogPersonalContent/>
                <BlogPersonalContent/>
                <BlogPersonalContent/>         
            </div>
        </div>
        </div>
    )
}