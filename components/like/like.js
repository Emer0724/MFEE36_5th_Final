import ToolBar from "../blog/toolbar";
import LikeContent1 from "./like-content1";
import FollowColumn from "../blog/follow-column";

export default function Like(){
    return (
        <div className="container d-flex pt-5">
            <ToolBar/>
            <LikeContent1/>
            <FollowColumn/>
        </div>
    )
}