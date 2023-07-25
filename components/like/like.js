import ToolBar from "../blog/toolbar";
import LikeContent1 from "./like-content1";
import FollowColumn from "../blog/follow-column";
import stlye from '@/components/like/like.module.css'

export default function Like(){
    return (
        <div className={`${stlye.cardgap} container d-flex pt-5`}>
            <ToolBar/>
            <LikeContent1/>
            <FollowColumn/>
        </div>
    )
}