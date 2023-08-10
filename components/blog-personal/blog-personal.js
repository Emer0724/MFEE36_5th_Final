import BlogPersonalContent from "./blog-personal-content"
import BlogPersonalNav from "./blog-personal-nav"
import BlogPersonal2Nav from "./blog-personal2-nav"

export default function BlogPersonal() {



    return (
        <div className="col-xl-7 px-xl-5 d-flex flex-column pb-5">
        <div>
            <div>
                <BlogPersonal2Nav/>
                <BlogPersonalNav/>
                <BlogPersonalContent/>     
            </div>
        </div>
        </div>
    )
}