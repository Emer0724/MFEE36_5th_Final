import ToolBar from "../blog/toolbar";
import BookPersonal from "./book-personal";
import FollowColumn from "../blog/follow-column";
import style from '@/components/book-personal/book-personal.module.css'


export default function BookPersonal1() {
    return (
        <div className={`${style.blogcontent} container d-flex pt-5`}>
        <ToolBar/>
        <BookPersonal/>
        <FollowColumn/>
        </div>
    )
}