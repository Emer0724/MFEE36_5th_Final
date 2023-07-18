import ToolBar from "../blog/toolbar"
import TrackContent1 from "./track-content1"
import FollowColumn from "../blog/follow-column"


export default function Track() {
    return (
        <div className="container d-flex pt-5">
            <ToolBar/>
            <TrackContent1/>
            <FollowColumn/>
        </div>
    )
}