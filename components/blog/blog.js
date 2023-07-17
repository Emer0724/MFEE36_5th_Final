import ToolBar from "./toolbar"
import ArticleElement from "./article_element"
import FollowColumn from "./follow-column"


export default function Blog() {
    return (
        <div className="container d-flex pt-5">
            <ToolBar/>
            <ArticleElement/>
            <FollowColumn/>
        </div>
    )
}