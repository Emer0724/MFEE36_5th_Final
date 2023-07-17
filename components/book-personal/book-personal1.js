import ToolBar from "../blog/toolbar";
import BookPersonal from "./book-personal";
import FollowColumn from "../blog/follow-column";


export default function BookPersonal1() {
    return (
        <div className="container d-flex pt-5">
        <ToolBar/>
        <BookPersonal/>
        <FollowColumn/>
        </div>
    )
}