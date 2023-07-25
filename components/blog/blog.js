import ToolBar from "./toolbar"
import ArticleElement from "./article_element"
import FollowColumn from "./follow-column"
import style from '@/components/blog/blog.module.css' 


export default function BlogHomePage() {
    return (
        <div className={`${style.blogcontent} container d-flex pt-5`}>
            <ToolBar/>
            <ArticleElement/>
            <FollowColumn/>
        </div>
    )
}