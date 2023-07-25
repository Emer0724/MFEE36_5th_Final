import ToolBar from "../blog/toolbar"
import ArticleContentElement from "./article-content-element"
import FollowColumn from "../blog/follow-column"
import style from '@/components/article-content/reply.module.css'
import BlogNav from "../blog/blog-nav"

export default function ArticleContent() {
    return (
        <div className={`${style.blogcontent} container d-flex pt-3`}>
        <BlogNav/>
        <ToolBar/>
        <ArticleContentElement/>
        <FollowColumn/>
        </div>
    )
}