import BookPersonalContent from "./book-personal.content"
import BlogPersonalNav from "../blog-personal/blog-personal-nav"

export default function BookPersonal() {


    return (
        <div className="col-xl-7 px-xl-5 d-flex flex-column">
        <div className="pb-5">
            <div>
                <BlogPersonalNav/>
                <BookPersonalContent/>       
            </div>
        </div>
        </div>
    )
}