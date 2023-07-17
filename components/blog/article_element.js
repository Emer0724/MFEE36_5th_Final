import BreadCrumbs from "./bread_crumbs"
import BlogContent from "./blog_content"


export default function ArticleElement() {
    return (
        <div className="col-7 d-flex flex-column ps-5 pe-5">
            <BreadCrumbs/>
            <BlogContent/>
            <BlogContent/>
            <BlogContent/>
        </div>
    )
}