import ToolBar from "../blog/toolbar"
import ArticleContentElement from "./article-content-element"
import FollowColumn from "../blog/follow-column"

export default function ArticleContent() {
    return (
        <div className="container d-flex pt-5">
        <ToolBar/>
        <ArticleContentElement/>
        <FollowColumn/>
        </div>
    )
}