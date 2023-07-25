import ToolBar from "../blog/toolbar";
import BlogPersonal from "./blog-personal";
import FollowColumn from "../blog/follow-column";
import style from '@/components/blog-personal/blog-personal1.module.css'


export default function BlogPersonal1() {
    return (
        <div className={`${style.blogcontent} container d-flex pt-5`}>
        <ToolBar/>
        <BlogPersonal/>
        <FollowColumn/>
        </div>
    )
}