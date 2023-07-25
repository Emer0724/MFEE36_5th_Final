import BlogPersonalAvatar from "./blog-personal-avatar"
import BlogPersonalContent from "./blog-personal-content"
import style from '@/components/book-personal/book-personal.module.css'
import Link from "next/link"
import BlogPersonalNav from "./blog-personal-nav"
import BlogPersonal2Nav from "./blog-personal2-nav"

export default function BlogPersonal() {



    return (
        <div className="col-xl-7 px-xl-5 d-flex flex-column pb-5">
        <div>
            <div>
                <BlogPersonalAvatar/>
                <BlogPersonal2Nav/>
                <BlogPersonalNav/>
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