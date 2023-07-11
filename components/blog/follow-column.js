import FollowColumnTop from "./follow-columntop"
import FollowColumnDown from "./follow-columndown"



export default function FollowColumn() {
    return (
        <div className="col-3 d-flex flex-column ps-5">
        <FollowColumnTop/>
        <FollowColumnDown/>
        </div>
    )
}