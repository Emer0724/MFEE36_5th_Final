import BookPersonalContent from "./book-personal.content"
import style from '@/components/book-personal/book-personal.module.css'
import Link from "next/link"
import BlogPersonalNav from "../blog-personal/blog-personal-nav"
import BlogPersonal2Nav from "../blog-personal/blog-personal2-nav"

export default function BookPersonal() {


    return (
        <div className="col-xl-7 px-xl-5 d-flex flex-column">
        <div className="pb-5">
            <div>
                <BlogPersonal2Nav/>
                <BlogPersonalNav/>
                <BookPersonalContent/>       
            </div>
        </div>
        </div>
    )
}