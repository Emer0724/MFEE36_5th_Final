import ToolBar from "../blog/toolbar";
import BlogPersonal from "./blog-personal";
import FollowColumn from "../blog/follow-column";


export default function BlogPersonal1() {
    return (
        <div className="container d-flex pt-5">
        <ToolBar/>
        <BlogPersonal/>
        <FollowColumn/>
        </div>
    )
}